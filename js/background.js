var gPlusId = '111285183943460335169';

function updateUser() {
  GDE_API.getUser(gPlusId).then(function (user) {
    chrome.storage.local.set({
      user: user
    });
  });
}

function updateActivities() {
  GDE_API.getUserActivities(gPlusId, 100).then(function (activities) {
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

setInterval(updateActivities, 5 * 60 * 1000);//5min
updateActivities();

setInterval(updateUser, 60 * 60 * 1000);//60min
updateUser();