import { Links } from '/imports/api/links/links.js';
<<<<<<< HEAD
import { Logos } from '/imports/api/logos/logos.js';
=======
>>>>>>> 1908402ea3b7b20006811c32546da2789ac82a74
import { Meteor } from 'meteor/meteor';
import './main-navbar.html';

Template.MainNavbar.onCreated(function() {
  Meteor.subscribe('links.all');
<<<<<<< HEAD
  Meteor.subscribe('logos.all');
=======
>>>>>>> 1908402ea3b7b20006811c32546da2789ac82a74
});

Template.MainNavbar.helpers({
  links: function() {
    return Links.find({});
  },
<<<<<<< HEAD
  logos: function() {
    return Logos.find({});
  },
  isMainLogo: function() {
    return (this.name == 'SARAi') ? true:false;
  }
=======
>>>>>>> 1908402ea3b7b20006811c32546da2789ac82a74
});
