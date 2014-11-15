# Chrome Extensions Workshop - Step 4

## TODO
1. Create `options.html` file and set it as your options page by adding `options_page` property to the manifest file.
2. Test your options page by reloading the extension, right clicking on the browser button and choosing 'options'.
<br/>
![Options button](https://i.imgur.com/qb8pfoe.png)
<br/>
3. Create a form on the options page that allows user to enter Google+ ID.
	- save settings using `chrome.storage.local.set()` and load them back again when options page is opened using `chrome.storage.local.get()`
4. Make appropriate changes to your background page so that it uses provided Google+ ID.
	- pull Google+ ID from storage before using `GDE_API`
5. Whenever user updates Google+ ID, make sure to update data coming from `GDE_API` immediately. There are two ways to achieve that:
	- access your background page from your options page using `chrome.runtime.getBackgroundPage()`([docs](http://developer.chrome.com/extensions/runtime.html#method-getBackgroundPage)) and call some kind of a reload function (note that it must be available in the global scope).
	- use `chrome.storage.onChanged.addListener()` on the background page to listen for any changes in the storage and, whenever Google+ ID changes, load appropriate data.

## Links
- [Manifest File Format](http://developer.chrome.com/extensions/manifest.html)
- [Storage API](http://developer.chrome.com/extensions/storage.html)
- [Runtime API](http://developer.chrome.com/extensions/runtime.html)

## Extra time left?
- You don't need a 'Save' button on the options page. Just save the settings whenever user makes a change.
- Add a setting that allows to change update interval (how often activity data are downloaded).
<br/>
![Sample options page](https://i.imgur.com/SYVlZoo.png)