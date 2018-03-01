/* exported lost */
var url = 'https://checkpointlive.com/app/api/event/tracking';

var getPosition = function () {
  return new Promise(function (resolve, reject) {
    var options = {
      // timeout: 10,
      enableHighAccuracy: true,
      // maximumAge: Infinity
    };
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

function lost() {
  var teamNo = document.getElementById('teamNumber').value;
  Promise.resolve()
    .then(function () {
      if (teamNo === '') {
        throw 'Please enter a team number';
      }
    })
    .then(function () {
      return getPosition();
    })
    .then(function (position) {
      console.log(position);
      var data = {
        trackingUrl: 'http://vps358200.ovh.net:5055',
        id: 'Patrol-' + teamNo,
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        accuracy: position.coords.accuracy,
        loggedBy: 'Patrol ' + teamNo,
        offRoute: 'lost'
      }
      var dataString = Object.entries(data).map(([key, val]) => `${key}=${val}`).join('&');
      var options = {
        method: 'POST',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          // 'Content-Type': 'multipart/form-data'
        },
        body: dataString,
      };

      return fetch(url, options)
    }).then(function () {
      alert('Your location and team number has been sent to event organisers')
    })
    .catch(function (err) {
      alert(err);
    })
}