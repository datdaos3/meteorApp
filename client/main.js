import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';

import './main.html';



if (Meteor.isClient) {

  Template.hello.onCreated(function helloOnCreated() {
    // counter starts at 0
    //this.counter = new ReactiveVar(0);
  });

  Template.hello.helpers({

    books: function () {
      return Session.get('books');
    },

  });



//Template.hello.rendered = function() {
//  Session.setDefault('books', [
//    {title: "To Kill a Mockingbird", author: "Harper Lee"},
//    {title: "1984", author: "George Orwell"},
//    {title: "The Lord of the Rings", author: "J. R. R. Tolkien"},
//    {title: "The Catcher in the Rye", author: "J. D. Salinger"},
//    {title: "The Great Gatsby", author: "F. Scott Fitzgerald"}
//  ]);
//};

  Template.bookList.rendered = function() {
    Session.setDefault('books', [
      {title: "To Kill a Mockingbird1234", author: "Harper Lee"},
      {title: "1984", author: "George Orwell"},
      {title: "The Lord of the Rings", author: "J. R. R. Tolkien"},
      {title: "The Catcher in the Rye", author: "J. D. Salinger"},
      {title: "The Great Gatsby", author: "F. Scott Fitzgerald"}
    ]);
  };

  Books = new Meteor.Collection("books");
  Template.bookList.helpers({
    books: function () {
      //return Session.get('books');
      return Books.find()
    }
  });


  Template.myTemplate.events({

    'click p': function(){
      console.log("The PARAGRAPH is clicked...");
    },

    'click .myClass': function(){
      console.log("The CLASS is clicked...");
    },

    'click #myId': function(){
      console.log("The ID is clicked...");

      //Books.insert({title: "client insert", author: "author client insert1"});

      var aaa = 'client ' + Math.random();
      Meteor.call('method1', aaa, function (error, result) {

        if (error) {
          console.log(error);
        }
        else
        {
          console.log('Method 1 result is: ' + result);
        }
      });

    },
  });
}



//Meteor.call('method2', 5, function (error, result) {
//  if (error) {
//    console.log(error);
//  } else {
//    console.log('Method 2 result is: ' + result);
//  }
//});

