//site/js/views/library.js

define([
  //'jquery', 
  //'underscore', 
  'backbone',
  'views/book',
  'collections/library'
  ], 
  function (Backbone, BookView, Library) {
    //var app = app || {};
    //app.BookView = BookView;
    //app.Library = Library;

    var LibraryView = Backbone.View.extend({
      el: '#books',
    
      events: {
        'click #add': 'addBook'
      },
    
      addBook: function (e) {
        e.preventDefault();
    
        var formData = [];
      
        $('#addBook div').children('input').each(function (i, el){
          if( $(el).val() != '') {
            if( el.id === 'keywords' ) {
              formData[ el.id ] = [];
               _.each( $( el ).val().split( ' ' ), function( keyword ) {
                 formData[ el.id ].push({ 'keyword': keyword });
               });
             } else if( el.id === 'releaseDate' ) {
               formData[ el.id ] = $( '#releaseDate' ).datepicker( 'getDate' ).getTime();
             } else {
               formData[ el.id ] = $( el ).val();
             }
          }
          //clear the input field
          $(el).val('');   
        });
    
        //this.collection.add( new app.Book(formData) );
        this.collection.create(formData);
    
      },
    
    
      initialize: function () {
        //this.collection = new app.Library();
        
        console.log('in initialize() in views/library.js');
        this.collection = new Library(); 
        this.collection.fetch({reset: true});
        this.render();
    
        this.listenTo( this.collection, 'add', this.renderBook );
        this.listenTo( this.collection, 'reset', this.render );
      },
    
      // render library by rendering each book in its collection
      render: function () {
        this.collection.each(function (item) {
          this.renderBook(item);
    
        }, this);
      },
    
      //render a book by creating a BookView and appending 
      //the element it renders to the library's element.
      renderBook: function (item) {
        console.log('in renderBook() in views/library.js');
        //var bookView = new app.BookView({
        var bookView = new BookView({
          model: item
        });
        this.$el.append(bookView.render().el);
      }
    });
  return LibraryView;
});
