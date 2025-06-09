import type { ReactComponentBuildConfig, WebComponentBuildConfig } from "../tasks/build/builder/src/types.ts";
import * as path from "@std/path";
import { generalConfig } from "./general-config.ts";

async function getBuildConfig(modulePath: string): Promise<{ webComponents: WebComponentBuildConfig[], reactComponents: ReactComponentBuildConfig[] }> {
  const buildConfigPath = path.toFileUrl(path.join(generalConfig.basePath, modulePath, "/build-config.ts"));
  const { webComponentList, reactComponentList } = await import(buildConfigPath.toString()) as { webComponentList: WebComponentBuildConfig[], reactComponentList: ReactComponentBuildConfig[] };
  // update config path addresses to match monorepo cwd
  const webComponents : WebComponentBuildConfig []= webComponentList.map(wc => ({
    ...wc,
    path: path.resolve(modulePath, wc.path),
    outputPath: path.resolve(modulePath, wc.outputPath),
    dir:path.resolve(modulePath, wc.dir??""),
    tsConfigPath:wc.tsConfigPath?path.resolve(modulePath, wc.tsConfigPath):undefined,
  }));
  const reactComponents = reactComponentList.map(rc => ({
    ...rc,
    path: path.resolve(modulePath, rc.path),
    outputPath: path.resolve(modulePath, rc.outputPath),
    dir:path.resolve(modulePath, rc.dir??""),
    tsConfigPath:rc.tsConfigPath?path.resolve(modulePath, rc.tsConfigPath):undefined,
  }));
  return { webComponents, reactComponents };
}

const JBCore = await getBuildConfig(`web-component/jb-core`);
const JBValidation = await getBuildConfig(`web-component/jb-validation`);
const JBForm = await getBuildConfig(`web-component/jb-form`);
const JBCheckbox = await getBuildConfig(`web-component/jb-checkbox`);
const JBButton = await getBuildConfig(`web-component/jb-button`);
const JBPopover = await getBuildConfig(`web-component/jb-popover`);
const JBCalendar = await getBuildConfig(`web-component/jb-calendar`);
const JBInput = await getBuildConfig(`web-component/jb-input`);
const JBMobileInput = await getBuildConfig(`web-component/jb-mobile-input`);
const JBNumberInput = await getBuildConfig(`web-component/jb-number-input`);
const JBNationalInput = await getBuildConfig(`web-component/jb-national-input`);
const JBPaymentInput = await getBuildConfig(`web-component/jb-payment-input`);
const JBPasswordInput = await getBuildConfig(`web-component/jb-password-input`);
const JBDateInput = await getBuildConfig(`web-component/jb-date-input`);
const JBFileInput = await getBuildConfig(`web-component/jb-file-input`);
const JBImageInput = await getBuildConfig(`web-component/jb-image-input`);
const JBSelect = await getBuildConfig(`web-component/jb-select`);
const JBTextarea = await getBuildConfig(`web-component/jb-textarea`);
const JBSearchbar = await getBuildConfig(`web-component/jb-searchbar`);
const JBTimePicker = await getBuildConfig(`web-component/jb-time-picker`);
const JBTimeInput = await getBuildConfig(`web-component/jb-time-input`);
const JBLoading = await getBuildConfig(`web-component/jb-loading`);
const JBPinInput = await getBuildConfig(`web-component/jb-pin-input`);
const JBModal = await getBuildConfig(`web-component/jb-modal`);
const JBTooltip = await getBuildConfig(`web-component/jb-tooltip`);
const JBNotification = await getBuildConfig(`web-component/jb-notification`);
const JBInfiniteScroll = await getBuildConfig(`web-component/jb-infinite-scroll`);
const JBQrCode = await getBuildConfig(`web-component/jb-qrcode`);
const JBSwitch = await getBuildConfig(`web-component/jb-switch`);
const JBGrid = await getBuildConfig(`web-component/jb-grid`);

const webComponentList: WebComponentBuildConfig[] = [
  ...JBCore.webComponents,
  ...JBValidation.webComponents,
  ...JBForm.webComponents,
  ...JBCheckbox.webComponents,
  ...JBInput.webComponents,
  ...JBButton.webComponents,
  ...JBPopover.webComponents,
  ...JBCalendar.webComponents,
  ...JBDateInput.webComponents,
  ...JBFileInput.webComponents,
  ...JBImageInput.webComponents,
  ...JBSelect.webComponents,
  ...JBTextarea.webComponents,
  ...JBSearchbar.webComponents,
  ...JBTimePicker.webComponents,
  ...JBTimeInput.webComponents,
  ...JBLoading.webComponents,
  ...JBPinInput.webComponents,
  ...JBPaymentInput.webComponents,
  ...JBMobileInput.webComponents,
  ...JBNumberInput.webComponents,
  ...JBNationalInput.webComponents,
  ...JBPasswordInput.webComponents,
  ...JBModal.webComponents,
  ...JBTooltip.webComponents,
  ...JBNotification.webComponents,
  ...JBInfiniteScroll.webComponents,
  ...JBQrCode.webComponents,
  ...JBSwitch.webComponents,
];
const reactComponentList: ReactComponentBuildConfig[] = [
  ...JBCore.reactComponents,
  ...JBForm.reactComponents,
  ...JBCheckbox.reactComponents,
  ...JBInput.reactComponents,
  ...JBButton.reactComponents,
  ...JBCalendar.reactComponents,
  ...JBDateInput.reactComponents,
  ...JBFileInput.reactComponents,
  ...JBImageInput.reactComponents,
  ...JBSelect.reactComponents,
  ...JBTextarea.reactComponents,
  ...JBSearchbar.reactComponents,
  ...JBTimeInput.reactComponents,
  ...JBLoading.reactComponents,
  ...JBPinInput.reactComponents,
  ...JBPaymentInput.reactComponents,
  ...JBMobileInput.reactComponents,
  ...JBNumberInput.reactComponents,
  ...JBNationalInput.reactComponents,
  ...JBPasswordInput.reactComponents,
  ...JBModal.reactComponents,
  ...JBInfiniteScroll.reactComponents,
  ...JBSwitch.reactComponents,
  ...JBGrid.reactComponents,
  ...JBQrCode.reactComponents
];
export { webComponentList, reactComponentList };
