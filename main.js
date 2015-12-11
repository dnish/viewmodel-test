/**
 * Created by dennis on 11.12.15.
 */


if(Meteor.isClient) {


    Template.main.onCreated(function() {
        this.subscribe('all');
    });

    Template.main.helpers({
        'tests': function() {
            return Tests.find();
        }
    });


    Template.main.viewmodel({
        hello: function() { return "Hello!"; }
    });
}