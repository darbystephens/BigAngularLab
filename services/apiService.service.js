(function () {

  $http({
    method: "GET",
    url: "https://simple-weather.p.mashape.com/weatherdata?lat=42.331427&lng=-83.045754",
    headers: {
      "X-Mashape-Key": "pkzJVhwpv3mshQP76JJemeAhZ4XNp1jqUHwjsnz8KjkE2bM6gW",
      "Accept": "application/json"
    }
  }).then(function (response) { console.log(response.data); });


  angular
    .module("WearApp")
    .factory("apiService", apiService)




})();
