/**
 * Created by dennis on 11.12.15.
 */

Tests = new Meteor.Collection("test");


Meteor.startup(function() {

    Tests.insert({firstname:'John',lastname:'Doe'});
});

if(Meteor.isServer) {

    Meteor.publish('all', function() {

        Meteor._sleepForMs(5000);

        return Tests.find({});
    })
}
