'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./api');
const authUi = require('./ui');

const addHandlers = () => {
  $('#signUpModal').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    //get data, prevents default
    authApi.signUp(authUi.success, authUi.failure, data);
  });
$('#signInModal').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    //get data, prevents default
    authApi.signIn(authUi.success, authUi.failure, data);
  });
$('#signOutModal').on('submit', function (event) {
      //get data, prevents default
    event.preventDefault();
    authApi.signOut(authUi.success, authUi.failure);
  });
$('#changePasswordModal').on('submit', function(event) {
      let data = getFormFields(this);
      event.preventDefault();
      authApi.updatePassword(authUi.success, authUi.failure, data);
    });
};
//test
module.exports = {
  addHandlers,
};
