var gPlusId = '111285183943460335169';

var userName = document.getElementById('name');
var activityList = document.getElementById('list');

GDE_API.getUser(gPlusId).then(function (data) {
  userName.innerText = data.display_name;
});

GDE_API.getUserActivities(gPlusId).then(function (items) {
  items.forEach(function(item) {
    var span = document.createElement('span');
    span.classList.add('badge');
    span.innerText = item.total_impact;

    var li = document.createElement('li');
    li.classList.add("list-group-item");
    li.innerText = item.activity_title;

    li.appendChild(span);

    activityList.appendChild(li);
  });
});