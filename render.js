// we bind to the 'init' event of $.mobile, 
// before it loaded, so it actually fires!
$(document).bind("mobileinit", function(){
  // before $.mobile initializes, 
  // we change the default config here
  
  // we set 'autoInitializePage' to false
  // (only) here, 'Page' means the complete site!!!
  $.mobile.autoInitializePage = false;
  // (later, after WE have rendered the site from a template, we trigger the 'initializePage()', see below.)
});

(function render() {
  var template = {};
  var data = {};

  // get the data
  $.get($('#template').prop('src'), function (res) {
  
    template = res;
    console.log(template)
  
    // precompile template
    var compiledTemplate = Handlebars.compile(template);
  
    $.getJSON($('#template-data').prop('src'), function (res) {
      data = res;
      console.log(data);
    
      // render from compiled template with data
      var output = compiledTemplate(data);
      console.log(output);
    
      // attach to DOM
      $(output).appendTo('body').trigger('create');
      
      // we trigger the initialization of jQuery.mobile, 
      // because we have turned off 'autoInitializePage'.
      $.mobile.initializePage()
    
    });

  });  
}());
