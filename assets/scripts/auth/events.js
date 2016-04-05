'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./api');
const authUi = require('./ui');

const addHandlers = () => {
  $('#sign-up').on('submit', function (event) {
    let data = getFormFields(this);
    //get data, prevents default
    event.preventDefault();
    authApi.signUp(authUi.success, authUi.failure, data);
  });
$('#sign-in').on('submit', function (event) {
    let data = getFormFields(this);
    //get data, prevents default
    event.preventDefault();
    authApi.signIn(authUi.success, authUi.failure, data);
  });
$('#sign-out').on('submit', function (event) {
      //get data, prevents default
      event.preventDefault();
      authApi.signOut(authUi.success, authUi.failure);
    });
};

module.exports = {
  addHandlers,
};
