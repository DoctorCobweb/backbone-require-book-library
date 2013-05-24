//site/js/models/book.js

define([
  //'underscore', 
  'backbone'
  ], function (Backbone) {
      //var app = app || {};
      
      var Book = Backbone.Model.extend({
      
        //because mongodb uses _id as the unique identifier for a document
        //set idAttribute to _id
        //this results in Backbone using _id value for its id field in the model.
        idAttribute:'_id',
      
        defaults : {
          coverImage: 'img/placeholder.png',
          title: 'No title',
          author: 'Unknown',
          releaseDate: 'Unknown',
          keyWords: 'None'
        },
        
        /*
        //another way to set mongo'd _id value to be the unique id for Backbone model.
        parse: function (response) {
          response.id = response._id;
          return response;
        }  
        */
      
      });
  return Book;
});

