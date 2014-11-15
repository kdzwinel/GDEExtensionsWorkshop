(function (namespace) {
  "use strict";

  var apiBaseUrl = 'https://omega-keep-406.appspot.com/_ah/api/gdetracking/v1.0b2';

  namespace.GDE_API = {
    getUser: function (id) {
      var url = [apiBaseUrl, 'account', id].join('/');
      return getJSON(url);
    },
    getUserActivities: function(id, limit) {
      var url = [apiBaseUrl, 'activityRecord/activityRecord'].join('/');
      limit = limit || 5;

      return getJSON(url + '?limit=' + limit + '&gplus_id=' + id).then(function(data) {
        return (data.items).sort(function(a, b) {
          var dateA = new Date(a.post_date);
          var dateB = new Date(b.post_date);

          return dateB.getTime() - dateA.getTime();
        });
      });
    }
  };

  function getJSON(url) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();

      request.onreadystatechange = function stateChange() {
        if (request.readyState === 4) {
          resolve(JSON.parse(request.responseText));
        }
      };

      request.open("GET", url, true);
      request.send();
    });
  }

})(window);