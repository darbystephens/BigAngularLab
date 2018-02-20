(function(){
  var welcomeComponent = {
    template: `
    <div class="main">
    <h1>Welcome to WHAT TO WEAR to GRAND CIRCUS<h1>
    <button type="button">Click here to make your weather related saratorial dreams come true</button>
    </div>
    
    `,
    controller: function (FormService) {
      var vm = this;
    }

  };



  angular
    .module("WearApp")
    .component("welcomeComponent", welcomeComponent)
})();
