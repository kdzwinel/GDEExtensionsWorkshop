# GDE Chrome Extensions Workshop - Step 1

## TODO

1. Create a folder for your extension.
2. Create a `manifest.json` file in that folder.
3. Fill `manifest.json` with basic fields (`name`, `description`, `version`, `manifest_version`, `icons`)
	- manifest file format is described [here](http://developer.chrome.com/extensions/manifest.html)
	- use icons from the `img` folder (or create your own). It's OK to only set the 64x64 icon (`icon_64.png`).
4. Test your extension in Chrome using "Load unpacked extension..." button on the extensions page (`chrome://extensions`). Note that "Developer mode" must be enabled (top right corner of the extensions page)!
<img src="https://i.imgur.com/mna22QC.png" alt="Extension loaded using \"Load unpacked extension...\" feature" style="width: 100%;"/>
	- If there were any errors while loading your extension - fix them! After that, try loading your extension again.
5. Add `browser_action` field with `default_icon` to your manifest file (set both `img/icon_19.png` and `img/icon_38.png` there).
6. Reload your extension to test latest changes (use "Reload" link under extension details or reload whole `chrome://extensions` page).
7. If you are able to see your extensions' icon in the browser UI, you have successful completed this step! If you have any extra time left, see the "Protip" section at the bottom of this page.
<br/><img src="http://i.imgur.com/edq1WU3.png" alt="Browser action" style="width:143px"/>

## Links
- [Manifest File Format](http://developer.chrome.com/extensions/manifest.html)
- [Browser Actions](http://developer.chrome.com/extensions/browserAction.html)
- [JSON Validator](http://jsonlint.com/)
- [Icon search engine](https://www.iconfinder.com/)

## Protip
If you are using any of the IntelliJ IDEs (e.g. WebStorm), please follow [these](https://stackoverflow.com/questions/13997468/how-do-i-use-webstorm-for-chrome-extension-development/25466708#25466708) instructions to enable autocompletion for the Chrome Extensions API.

<img src="https://i.imgur.com/9pkBjeV.png" alt="Autocompletion in WebStorm for Chrome Extensions API" style="width: 100%;"/>
