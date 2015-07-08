var data = require('sdk/self').data;
var pageMod = require('sdk/page-mod');

pageMod.PageMod({
  include: ["*"],
  contentScriptOptions: {
    rootUrl: data.url("")
  },
  contentScriptFile: [
    data.url("js/browser.js"),
    data.url("js/main.js")
  ],
  contentStyleFile: [
    data.url("css/content.css")
  ],
  contentScriptWhen: 'start'
});
