import { remote } from "electron";

declare global {
  interface Window { Bridge: any; }
}

window.Bridge = window.Bridge || {};
window.Bridge = {
  openLoginDialog
};

function openLoginDialog() {
  remote.dialog.showMessageBox(remote.getCurrentWindow(), { type: "info", message: "hoge"});
}
