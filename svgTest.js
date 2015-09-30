if (Meteor.isClient) {

  Template.svgContainer.onRendered(function(){
    var mySVGsToInject = document.querySelectorAll('img.svg');
    SVGInjector(mySVGsToInject);
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
