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

const signOutSuccess = () => {
  app.user = null;
  console.log('successfully signed out');
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

const getGameSuccess = (data) => {
  app.game = data.game;
  $('.game-history').text(JSON.stringify(data));
  $('.game-history').text("You have played: " + data.games.length + " games.");
  console.log(data);
};

const success = (data) => {
  console.log(data);
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
  updateGameSuccess,
  getGameSuccess
};
