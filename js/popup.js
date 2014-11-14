var userName = document.getElementById('name');
var activityList = document.getElementById('list');

chrome.storage.local.get(['user', 'activities'], function(data) {
  userName.innerText = data.user.display_name;

  (data.activities).forEach(function(item) {
    var span = document.createElement('span');
    span.classList.add('badge');
    span.innerText = item.resharers + item.plus_oners + item.comments;

    var li = document.createElement('li');
    li.classList.add("list-group-item");
    li.innerText = item.activity_title;

    li.appendChild(span);

    activityList.appendChild(li);
  });
});