function updateUser() {
  chrome.storage.local.get('gPlusId', function(data) {
    if(data && data.gPlusId) {

      GDE_API.getUser(data.gPlusId).then(function (user) {
        chrome.storage.local.set({
          user: user
        });
      });

    }
  });
}

function updateActivities() {
  chrome.storage.local.get('gPlusId', function(data) {
    if(data && data.gPlusId) {

      GDE_API.getUserActivities(data.gPlusId, 100).then(function (activities) {
        chrome.storage.local.set({
          activities: activities
        });

        chrome.browserAction.setBadgeBackgroundColor({
          color: '#F00'
        });
        chrome.browserAction.setBadgeText({
          text: '' + activities.length
        });
      });

    }
  });
}

setInterval(updateActivities, 5 * 60 * 1000);//5min
updateActivities();

setInterval(updateUser, 60 * 60 * 1000);//60min
updateUser();