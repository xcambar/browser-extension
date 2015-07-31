var pageMod = require('sdk/page-mod');

pageMod.PageMod({
  include: ["*"],
  contentScriptFile: [
    './browser.js',
    './js/main.js'
  ],
  contentStyleFile: [],
  contentScriptWhen: 'start'
});
