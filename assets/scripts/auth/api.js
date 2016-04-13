'use strict';

const app = require('../app-data');

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
  $.ajax({
    method: 'PATCH',
    url: app.api + '/change-password/' + app.user.id,
    data: {
      "passwords": {
        "old": data.credentials.oldpassword,
        "new": data.credentials.newpassword
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

const updateGame = (success, failure) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + '/games/' + app.game.id,
    headers:{
      Authorization: 'Token token=' + app.user.token,
    },
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
