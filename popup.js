var gPlusId = '111285183943460335169';

var userName = document.getElementById('name');
var activityList = document.getElementById('list');

GDE_API.getUser(gPlusId).then(function (data) {
  userName.innerText = data.display_name;
});

GDE_API.getUserActivities(gPlusId).then(function (items) {
  items.forEach(function(item) {
    var li = document.createElement('li');
    li.innerText = item.activity_title;

    activityList.appendChild(li);
  });
});