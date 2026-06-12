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

const JBCore = await getBuildConfig(`modules/jb-core`);
const JBValidation = await getBuildConfig(`modules/jb-validation`);
const JBForm = await getBuildConfig(`modules/jb-form`);
const JBCheckbox = await getBuildConfig(`modules/jb-checkbox`);
const JBButton = await getBuildConfig(`modules/jb-button`);
const JBPopover = await getBuildConfig(`modules/jb-popover`);
const JBCalendar = await getBuildConfig(`modules/jb-calendar`);
const JBInput = await getBuildConfig(`modules/jb-input`);
const JBMobileInput = await getBuildConfig(`modules/jb-mobile-input`);
const JBNumberInput = await getBuildConfig(`modules/jb-number-input`);
const JBNationalInput = await getBuildConfig(`modules/jb-national-input`);
const JBPaymentInput = await getBuildConfig(`modules/jb-payment-input`);
const JBPasswordInput = await getBuildConfig(`modules/jb-password-input`);
const JBDateInput = await getBuildConfig(`modules/jb-date-input`);
const JBFileInput = await getBuildConfig(`modules/jb-file-input`);
const JBImageInput = await getBuildConfig(`modules/jb-image-input`);
const JBSelect = await getBuildConfig(`modules/jb-select`);
const JBTextarea = await getBuildConfig(`modules/jb-textarea`);
const JBSearchbar = await getBuildConfig(`modules/jb-searchbar`);
const JBTimePicker = await getBuildConfig(`modules/jb-time-picker`);
const JBTimeInput = await getBuildConfig(`modules/jb-time-input`);
const JBLoading = await getBuildConfig(`modules/jb-loading`);
const JBPinInput = await getBuildConfig(`modules/jb-pin-input`);
const JBModal = await getBuildConfig(`modules/jb-modal`);
const JBTooltip = await getBuildConfig(`modules/jb-tooltip`);
const JBNotification = await getBuildConfig(`modules/jb-notification`);
const JBInfiniteScroll = await getBuildConfig(`modules/jb-infinite-scroll`);
const JBQRCode = await getBuildConfig(`modules/jb-qrcode`);
const JBSwitch = await getBuildConfig(`modules/jb-switch`);
const JBGrid = await getBuildConfig(`modules/jb-grid`);

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
  ...JBQRCode.webComponents,
  ...JBSwitch.webComponents,
  ...JBGrid.webComponents
];
const reactComponentList: ReactComponentBuildConfig[] = [
  ...JBCore.reactComponents,
  ...JBForm.reactComponents,
  ...JBCheckbox.reactComponents,
  ...JBInput.reactComponents,
  ...JBButton.reactComponents,
  ...JBPopover.reactComponents,
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
  ...JBQRCode.reactComponents
];
export { webComponentList, reactComponentList };
