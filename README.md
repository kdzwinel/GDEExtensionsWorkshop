# Chrome Extensions Workshop - Step 3

## TODO
1. Create `background.js` file and set it, together with `GDE_API.js`, as your background script using `background` field in the manifest.
	- you can debug background pages by clicking "background page" on the "Inspect views" list on `chrome://extensions/` page
<br /><img src='https://i.imgur.com/IUROT04.png' alt='Inspect views: background page'/><br />
2. Add "storage" permission to your extension using `permissions` field in the manifest.
3. Implement following changes to your current extension:
	- use `setInterval` on your background page to download user details and activities (`GDE_API`) every 10 minutes.
	- store all downloaded data using [storage API](http://developer.chrome.com/extensions/storage.html) (`chrome.storage.local.set()`)
	- replace `GDE_API` calls in the `popup.js` with data loaded from the storage (`chrome.storage.local.get()`)
	- use `chrome.browserAction.setBadgeText` and `chrome.browserAction.setBadgeBackgroundColor` on your background page to show number of activities on the browser action button ( badge with a number)
<br /><img src="https://i.imgur.com/60HWTNA.png" alt="Browser action button with a badge"/><br />
4. Done! If you have extra time left you can polish your extension. Check list of possible improvements below.

## Links
- [Browser Action](http://developer.chrome.com/extensions/browserAction.html)
- [Manifest File Format](http://developer.chrome.com/extensions/manifest.html)
- [Background Pages](http://developer.chrome.com/extensions/background_pages.html)
- [Storage API](http://developer.chrome.com/extensions/storage.html)

## Extra time left?
- Change text in the tooltip that appears when mouse is over the browser action button. By default this tooltip shows only extension name, but you can dynamically (same as with badges) change it to something more useful (e.g. show total impact of the activities). Use `chrome.browserAction.setTitle()`.
- Show error message in the popup when there is no data in the storage.
- You can dynamically change icon of the browser action button and even animate it (check [this](http://developer.chrome.com/extensions/examples/extensions/gmail.zip) sample extension).