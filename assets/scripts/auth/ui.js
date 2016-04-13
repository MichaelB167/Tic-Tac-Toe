'use strict';

const app = require('../app-data');

const signUpSuccess = (data) => {
  app.user = data.user;
  console.log(data);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(data);
};

const signOutSuccess = (data) => {
  app.user = null;
  console.log(data);
};

const updatePasswordSuccess = () => {
  console.log('changed password');
};

const createGameSuccess = (data) => {
  app.game = data.game;
  console.log(data);
};

const updateGameSuccess = (data) => {
app.game = data.game;
  console.log(data.game);
};

const success = (data) => {
  console.error(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  updatePasswordSuccess,
  createGameSuccess,
  updateGameSuccess
};
