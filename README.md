# Chrome Extensions Workshop - Step 2

## TODO
1. Create `popup.html` file in your extensions' folder.
2. Add `default_popup` field to the `browser_action` settings in the manifest file and set it to `popup.html`.
3. Test your changes. After clicking browser action button small popup should appear.
4. Create and add `popup.js` and `popup.css` to your `popup.html` page.
5. Add provided `GDE_API.js` library (see `js/` folder above) to your `popup.html` page.
	- `GDE_API.js` library provides easy access to GDE Tracking App API. You can use it as follows:

    GDE_API.getUserActivities(googlePlusId).then(function (activities) {
      activities.forEach(function(activity) {
        //activity.activity_title
      });
    });

    GDE_API.getUser(googlePlusId).then(function (user) {
      //user.display_name
    });
    
	- To find out what your Google+ ID is, open [plus.google.com](http://plus.google.com) and copy the link of your "Profile" page. Last part of that link is your Google+ ID (it should be something like "111285183943460335169").
	<br/><img src="http://i.imgur.com/xTcPy1p.png" /><br/>

6. Using `GDE_API.js` implement the following functionality (showing user name and recent activity in the popup):
<br/><img src="http://i.imgur.com/V2PRkn9.png" alt="Popup with activity information" /><br/>
	- You can debug your popup by right-clicking on the browser action button and choosing "Inspect Popup".
	- You can't use inline JavaScript on your page (`<script>var bla;...` or `<a href='#' onclick='something()'...`), keep all your code in the `popup.js`.
	- You can (but definitely don't have to) use any libraries/frameworks you wish. However, don't use external files! Download all resources that you need to your extensions' folder.
5. Done! If you have extra time left you can polish your extension. Check out the list of possible improvements below.

## Links
- [Browser Action Docs](http://developer.chrome.com/extensions/browserAction.html)
- [Manifest File Format](http://developer.chrome.com/extensions/manifest.html)

## Extra time left?
- Clean up your file structure (e.g. keep all JavaScript files in `js/` folder, css files in `css/` etc.)
- Make this popup pretty! Play with styles and maybe use [bootstrap](http://getbootstrap.com/)?
- While data are being loaded show some text/animation (e.g. gif or CSS Animation).
- Make sure that user will get an error message if API is unreachable.
