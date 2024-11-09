import express from "npm:express";
import { existsSync } from "https://deno.land/std/fs/mod.ts";
import cors from "npm:cors";
import bodyParser from "npm:body-parser";
import multer from "npm:multer";
import chalk from "npm:chalk";
import * as path from "jsr:@std/path";
class MockServer {
  tempFileDirectory = "";
  app: any;
  constructor(port: number) {
    this.app = new express();
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.registerRoutes();
    globalThis.addEventListener("unload", this.exitHandler.bind(this));
    Deno.addSignalListener("SIGINT", () => {
      this.exitHandler();
    });
    this.app.listen(port, () => {
      console.log(`mock service Rest running on http://localhost:${port}/`);
    });
    //create temp folder for image uploaded file then remove it on close
    this.createTempDirectory().then(() => {
      //do some stuff after directory created
      const uploadModule = multer({ dest: this.tempFileDirectory });
      this.app.post(
        "/image/upload",
        uploadModule.single("image"),
        this.uploadImage.bind(this)
      );
    });

    this.app.get(
      "/image/download",
      this.downloadImage.bind(this),
    );
    // process.on("exit", this.exitHandler.bind(this));
  }
  registerRoutes() {
    this.app.get("/", (request: any, response: any) => {
      response.send("design system mock service");
    });
    this.app.post("/grid/user-list", this.getUserListForGrid.bind(this));
  }
  getUserListForGrid(request: any, response: any) {
    const content = [];
    for (let i = 0; i < 20; i++) {
      content.push({
        id: i,
        name: `نام ${i}-${request.body.pageIndex}`,
        age: `${i}`,
      });
    }
    const data = {
      content,
      pageIndex: request.body.pageIndex,
      pageSize: request.body.pageSize,
      totalItem: 100,
    };
    response.status(200).send(data);
  }
  createTempDirectory() {
    return new Promise<void>((resolve, reject) => {
      Deno.makeTempDir({ prefix: "jb-design-system-test" })
        .then((path) => {
          this.tempFileDirectory = path;
          resolve();
        })
        .catch((err) => {
          //   if (err.code == "EEXIST") {
          //     resolve();
          //   } else {
          console.log(err);
          reject();
          //   }
        });
    });
  }
  exitHandler() {
    console.log(chalk.blue("close mock Api prepare"));
    //remove temp file directory
    if (this.tempFileDirectory && existsSync(this.tempFileDirectory)) {
      Deno.removeSync(this.tempFileDirectory, { recursive: true });
    }
    console.log(chalk.blue("close mock Api done"));
    Deno.exit();
  }
  uploadImage(req: any, res: any) {
    res.status(200).send({ fileName: req.file });
  }
  downloadImage(req: any, res: any) {
    const imagePath = req.param("imagePath");
    if (path) {
      res.sendFile(path.join(imagePath));
    }
  }
}
export { MockServer };
