// site/js/views/book.js

define([
  
  //'underscore', 
  'backbone',
  'jquery', 
  "jquery.datepicker",
  "jquery.dateformat" 
  ], function (Backbone, $) {
      //var app = app || {};
      
      var BookView = Backbone.View.extend({
        tagName: 'div',
        className: 'bookContainer',
        template: _.template( $( '#bookTemplate').html() ),
      
        events: {
          'click .delete': 'deleteBook'
        },
      
        deleteBook: function () {
          //delete model
          this.model.destroy();
      
          //delete view
          this.remove();
        },
      
        render: function () {
          console.log('in BookView:render()');
          //this.el is what we defined in tagName. 
          //Use $el to get access to jQuery html() function
          this.$el.html( this.template( this.model.toJSON() ));
      
          return this;
        }
      });
  return BookView;
});


