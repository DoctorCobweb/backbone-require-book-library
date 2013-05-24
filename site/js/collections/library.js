// site/js/collections/library.js

define([
  //'underscore', 
  'backbone',
  'models/book'
  ], function (Backbone, Book) {
      //var app = app || {};
      //app.Book = Book;
 
      var Library = Backbone.Collection.extend({
        model: Book,
        url: '/api/books'
      });
  return Library;
});
