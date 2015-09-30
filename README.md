# meteorSVGInjectSample

This application uses the Iconic SVGInjector to load an SVG file and replaces it with the full SVG markup inline.

Steps:

1. Add the library by using the following command
  
  meteor add johnantoni:meteor-svginjector
  
2. Add an SVG image

  eg. img src="kiwi.svg" class="svg" /

3. Inject SVG

  var mySVGsToInject = document.querySelectorAll('img.svg');
  SVGInjector(mySVGsToInject);
  
4. SVG markup will now be inline in the HTML
