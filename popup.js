var userName = document.getElementById('name');
var activityList = document.getElementById('list');

chrome.storage.local.get(['user', 'activities'], function(data) {
  userName.innerText = data.user.display_name;

  (data.activities).forEach(function(item) {
    var li = document.createElement('li');
    li.innerText = item.activity_title;

    activityList.appendChild(li);
  });
});