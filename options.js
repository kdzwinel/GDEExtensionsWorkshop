var gPlusIdField = document.getElementById('gplus-id');
var saveButton = document.getElementById('save');

//save data
saveButton.addEventListener('click', function() {
  chrome.storage.local.set({
    gPlusId: gPlusIdField.value
  }, function() {
    //force background page to reload data
    chrome.extension.getBackgroundPage().updateUser();
    chrome.extension.getBackgroundPage().updateActivities();
  });
});

//load data
chrome.storage.local.get('gPlusId', function(data) {
  if(data && data.gPlusId) {
    gPlusIdField.value = data.gPlusId;
  }
});