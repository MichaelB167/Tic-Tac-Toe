'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./api');
const authUi = require('./ui');

const addHandlers = () => {
  $('#signUpModal').on('submit', function (event) {
    let data = getFormFields(this);
    //get data, prevents default
    event.preventDefault();
    authApi.signUp(authUi.success, authUi.failure, data);
  });
$('#signInModal').on('submit', function (event) {
    let data = getFormFields(this);
    //get data, prevents default
    event.preventDefault();
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
      authApi.changePassword(authUi.success, authUi.failure, data);
    });
};

module.exports = {
  addHandlers,
};
