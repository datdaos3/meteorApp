import { Meteor } from 'meteor/meteor';

// Initialize FlowRouter
Meteor.startup(() => {
    //code to run on server at startup
    //if(!FlowRouter._askedToWait) {
    //    FlowRouter.initialize();
    //}

    var a = 1;
    var b = a + 2;
    console.log("code to run on server at startup");


    Books = new Meteor.Collection("books");
    //if (!Books.findOne()) {
    //    Books.insert({title: "To Kill a Mockingbird", author: "Harper Lee"});
    //    Books.insert({title: "1984", author: "George Orwell"});
    //    Books.insert({title: "The Lord of the Rings", author: "J. R. R. Tolkien"});
    //    Books.insert({title: "The Catcher in the Rye", author: "J. D. Salinger"});
    //    Books.insert({title: "The Great Gatsby", author: "F. Scott Fitzgerald"});
    //}

    Meteor.methods({
        method1: function (arg) {
            var result = arg + Math.random();
            Books.insert({title: "client insert " + result, author: "author " + result});
            return result;
        },

        method2: function (arg) {
            var result = arg + 10;
            return result;
        }
    });


});




