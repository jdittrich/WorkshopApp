// We bind to the 'init' event of $.mobile, 
// before it loaded, so it actually fires!
$(document).bind("mobileinit", function(){
  // Before $.mobile initializes, 
  // we change the default config here.
  // We set 'autoInitializePage' to false
  // (only) here, 'Page' means the complete site!!!
  $.mobile.autoInitializePage = false;
  // Later, after WE have rendered the site from a template, we trigger the 'initializePage()', see below.
});

(function render() {
  var templateUrl = $('#template').prop('src');
  var dataUrl = $('#template-data').prop('src');

  // get the template (should already be cached)
  $.get(templateUrl, function (template) {
    
    if (!template) {
      console.log("No template"); return;
    }
  
    // precompile template
    var compiledTemplate = Handlebars.compile(template);
    
    // get the data (should already be cached)
    $.getJSON(dataUrl, function (data) {
      
      if (!data) {
        console.log("No data"); return;
      }

      // render from compiled template with data
      var output = compiledTemplate(data);
    
      // attach to DOM
      $('body').html(output);
      
      // we trigger the initialization of jQuery.mobile, 
      // because we have turned off 'autoInitializePage'.
      $.mobile.initializePage()
    
    });

  });  
}());
