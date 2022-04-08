// const St = imports.gt.St;
// const Main = imports.ui.main;
import St from 'gt.St';
import Main from 'ui.main';

let panelButton, panelButtonText;

function init () {
  panelButton = new St.Bin({
    style_class: "panel-button"
  });
  panelButtonText = new St.Label({
    style_class: "panel-text",
    text: "Starting..."
  });
  panelButton.set_child(panelButtonText);
}

function enable() {}

function disable() {}

