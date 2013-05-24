//site/js/app.js


require.config({
  //baseUrl: "./",

  paths: {
    'jquery': 'lib/jquery-1.9.1',
    'jquery.datepicker': 'lib/jquery-ui-1.10.3.custom.min',
    'jquery.dateformat': 'lib/jquery-dateFormat-1.0',
    'underscore' : 'lib/underscore',
    'backbone' : 'lib/backbone'
  },

  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],  
      exports: 'Backbone'
    },
    'jquery.datepicker': ['jquery'],
    'jquery.dateformat': ['jquery']
  }
});

//var app = app || {};
 
require([
    "backbone",
    "views/library",
    "jquery",
    "jquery.datepicker",
    "jquery.dateformat"
 ], function (Backbone, LibraryView, $) {
       $(function () {
         $('#releaseDate').datepicker();
         var theStart = new LibraryView();
         console.log('theStart = ' + theStart);
         //console.log(theStart.render().el);
       });
     }
); 
