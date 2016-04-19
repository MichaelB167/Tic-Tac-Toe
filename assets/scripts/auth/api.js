'use strict';

const app = require('../app-data.js');
const gameLogic = require('../game-logic.js');

const signUp = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-up',
    data
  })
  .done(success)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-in',
    data
  })
  .done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
  console.log(app.user.id);
  $.ajax({
    method: 'DELETE',
    url: app.api + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const updatePassword = (success, failure, data) => {
  console.log(data);
  $.ajax({
    method: 'PATCH',
    url: app.api + '/change-password/' + app.user.id,
    data: {
      "passwords": {
        "old": data.passwords.old,
        "new": data.passwords.new
      },
    },
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const createGame = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.api + '/games',
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
    data,
  })
  .done(success)
  .fail(failure);
};

const updateGame = (success, failure, playerValue, gameOver, index) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + '/games/' + app.game.id,
    headers:{
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      "game": {
        "cell": {
          "index": index,
          "value": playerValue
        },
        "over": gameOver
      }
    }
  })
  .done(success)
  .fail(failure);
};

const getGames = (success, failure) => {
  $.ajax({
    method: 'GET',
    url: app.api + '/games',
    headers:{
      Authorization: 'Token token=' + app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};


module.exports = {
  signUp,
  signIn,
  signOut,
  updatePassword,
  createGame,
  updateGame,
  getGames
};
