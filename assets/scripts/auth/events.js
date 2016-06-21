'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const gameLogic = require('../game-logic');
const authApi = require('./api');
const authUi = require('./ui');

const addHandlers = () => {
  $('#signUpModal').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(event.target);
    //get data, prevents default
    authApi.signUp(authUi.signUpSuccess, authUi.failure, data);
  });
$('#signInModal').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(event.target);
    //get data, prevents default
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
  });
$('#signOutBtn').on('click', function (event) {
      //get data, prevents default
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
$('#changePasswordModal').on('submit', function(event) {
      let data = getFormFields(event.target);
      event.preventDefault();
      authApi.updatePassword(authUi.updatePasswordSuccess, authUi.failure, data);
  });
};
$('#viewGameHistory').on("click", function(event, data) {
    event.preventDefault();
    authApi.getGames(authUi.getGameSuccess, authUi.failure);
  });

  $("#newGame").on("click", function(event) {
    event.preventDefault();
    gameLogic.reset();
    authApi.createGame(authUi.createGameSuccess, authUi.failure);
  });

module.exports = {
  addHandlers,
};
