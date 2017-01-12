var TennisGame1 = function() {
  this.player1Score = 0;
  this.player2Score = 0;
};

TennisGame1.prototype = {
  wonPoint: function(playerName) {
    if (playerName === "player1") {
    this.player1Score += 1;
  } else {
    this.player2Score += 1;
    }
  },

  tie: function() {
    var values = ["Love-All", "Fifteen-All", "Thirty-All"];
    if (this.player1Score < 3) {
      return values[this.player1Score];
    }
    return "Deuce";
  },

  advantageScore: function (score) {
    if (score === 1) {
      return "Advantage player1";
    }
    return "Advantage player2";
  },

  scoreAboveFour: function() {
    var scoreDifference = this.player1Score - this.player2Score;
    if (scoreDifference == 1 || scoreDifference == -1) {
      return this.advantageScore(scoreDifference);
    }
    if (scoreDifference >= 2) {
      return "Win for player1";
    } else if (scoreDifference < 1) {
      return "Win for player2";
    }
  },

  getScore: function() {
    if (this.player1Score === this.player2Score) {
      return this.tie();
    } else if (this.player1Score >= 4 || this.player2Score >= 4) {
      return this.scoreAboveFour();
    }
    var mapScore2Name = ["Love", "Fifteen", "Thirty", "Forty"]
    return mapScore2Name[this.player1Score] + "-" + mapScore2Name[this.player2Score];
  }
};

if (typeof window === "undefined") {
  module.exports = TennisGame1;
};
