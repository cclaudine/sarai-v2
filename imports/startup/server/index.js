// Import server startup through a single index entry point

import './fixtures.js';
import './register-api.js';

import { Random } from 'meteor/random';

Meteor.startup(function() {

  UploadServer.init({
      tmpDir: '/opt/uploads/tmp',
      uploadDir: '/opt/uploads/',
      checkCreateDirectories: true, //create the directories for you
      getFileName: function(fileInfo, formData) {
        return Random.id()+".jpg";
      }
  });

});