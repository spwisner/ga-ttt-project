'use strict';

// const board = require('../board');

let beginPlay;

// const = function() {
//
// }

const hideAllWarnings = function() {
  $("#sign-out-warning").hide();
  $("#start-game-warning").hide();
  $("#sign-out-warning").hide();
  $("#sign-out-warning").hide();
  $("#sign-up-warning").hide();
  $("#sign-in-warning").hide();
  $("#change-password-warning").hide();
  $("#sign-out-success").hide();
  $("#sign-up-success").hide();
  $("#sign-in-success").hide();
  $("#sign-out-success").hide();
  $("#sign-out-success").hide();
  $("#change-password-error").hide();
};

/////////////////////////
//////////////////////////SUCCESSES
/////////////////////////

const signInSuccess = function() {
  $('.message-container').show();
  console.log('sign in success');
  hideAllWarnings();
  $('#new-game-b').attr('src', 'https://cloud.githubusercontent.com/assets/13546265/22615762/e355bc14-ea69-11e6-8ba1-12d3c3519aae.jpg');
  // $('#new-game-b').text('Start New Game');
  $('.stats-desc').show();
  $(".status-button-container").show();
  $('#change-password-b').show();
  $('#new-game').show();
  $('#new-game-b').show();
  $("#sign-in").hide();
  $("#login-b").hide();
  $("#sign-up-b").hide();
  $(".dummy-game-board-container").hide();
  $(".player-message").css("color", "green");
  $("#sign-up-success").hide();
  $("#sign-out-b").show();
  $("#sign-in-success").show();
  $("#start-game-warning").hide();
  $(".player-message").text('Click "Start New Game" to play!');
  $(".player-turn").text('');
  $('#post-change-warning').hide();
  $("#stats-button").show();
};

const signOutSuccess = function() {
  hideAllWarnings();
  $('.message-container').hide();
  $('.stats-desc').hide();
  $(".status-button-container").hide();
  $(".stats-container").hide();
  $('.dummy-game-board-container').hide();
  $('#sign-out-b').hide();
  $('.player-turn').text('Alert: Please sign-up or sign-in to start playing');
  $('.player-message').text('');
  $('#new-game').hide();
  $("#login-b").show();
  $("#sign-up-b").show();
  $(".game-board-container").hide();
  $(".form").hide();
  $(".score").text("");
  $('#change-password-b').hide();
  $('#sign-out-success').show();
  $('#sign-in-success').hide();
  $("#change-password-error").hide();
  $("#stats-button-hide").hide();
  beginPlay = false;

};

const onNewGameSuccess = function() {
  hideAllWarnings();
  $('.message-container').show();
  $('#new-game-b').hide();
  $(".player-message").text("");
  $('.player-turn').text("Player 1, it's your turn");
  $(".player-turn").show();
  $(".game-board-container").hide();
  $(".game-board-container").show();
  $("#sign-in-success").hide();
};

const signUpSuccess = function() {
  hideAllWarnings();
  $('.message-container').hide();
  $(".player-turn").text("");
  $('.dummy-game-board-container').hide();
  $(".game-board-container").hide();
  $(".player-message").text("");
  $("#stats-button").show();
  $(".player-message").css("color", "yello");
  $("#sign-up").slideUp();
  $("#sign-in").slideDown();
  $("#sign-up-success").show();
  $('#post-change-warning').hide();
};

const onGetStatsSuccess = function() {
  console.log('statistics obtained');
};

  $("#stats-button").on('click', function() {
    $(this).hide();
    $("#stats-button-hide").show();
  });

  $("#stats-button-hide").on('click', function() {
    $(this).hide();
    $(".stats-container").slideUp();
    $("#stats-button").show();
  });


const onGetStatsFail = function() {
  console.log('statistics fail');
};

const onChangePasswordSuccess = function() {
  hideAllWarnings();
  $('.stats-desc').hide();
  $(".status-button-container").hide();
  $(".stats-container").hide();
  $('.player-message').css('color', 'green');
  $('#sign-in-success').hide();
  $('#new-game').hide();
  $("#login-b").show();
  $("#sign-up-b").show();
  $(".game-board-container").hide();
  $(".form").hide();
  $(".player-message").text("Alert: You have successfully signed out.");
  $(".player-turn").text("");
  $(".score").text("");
  $('#change-password-b').hide();
  $('#post-change-warning').show();
  $('#sign-out-b').hide();
  $("#change-password-error").hide();
  $("#stats-button-hide").hide();
  $(".message-container").hide();
  beginPlay = false;
};

/////////////////////////
//////////////////////////FAILURES
/////////////////////////

const onChangePasswordFailure = function() {
  $("#change-password-error").show();
};

const onSignInFailure = function() {
  $("#sign-in-warning").show();
};

const onSignOutFailure = function() {
  $("#sign-out-warning").show();
};

const onSignUpFailure = function() {
  $("#sign-up-warning").show();
};

/////////////////////////
//////////////////////////OTHER
/////////////////////////
const getGameSuccess = function() {
  console.log('get game successful');
};

const changePasswordSuccess = () => {
  console.log("Password Successfully Changed.");
};

const updateBoardSuccess = () => {
  console.log("Board Successfully Changed.");
};

const updateBoardFailed = () => {
  console.log("Board Update Failed.");
};

const getGameFailure = function() {
  console.log('Failure in getting game');
};

const success = (data) => {
  console.log('success completed');
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  getGameSuccess,
  getGameFailure,
  updateBoardSuccess,
  updateBoardFailed,
  beginPlay,
  signUpSuccess,
  onNewGameSuccess,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignInFailure,
  onSignOutFailure,
  onSignUpFailure,
  onGetStatsSuccess,
  onGetStatsFail,
};
