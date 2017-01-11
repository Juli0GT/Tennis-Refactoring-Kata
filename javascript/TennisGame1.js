var TennisGame1 = function() {
    this.player1Score = 0;
    this.player2Score = 0;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.player1Score += 1;
    else
        this.player2Score += 1;
};

function tie() {
  var values = ["Love-All", "Fifteen-All", "Thirty-All"]
      if (this.player1Score < 3) {
      return values[this.player1Score];
  }
  return "Deuce";
};

TennisGame1.prototype.getScore = function() {
    var score = "";
    var tempScore = 0;
    if (this.player1Score === this.player2Score) {
      score = tie.call(this, score);
    } else if (this.player1Score >= 4 || this.player2Score >= 4) {
        var minusResult = this.player1Score - this.player2Score;
        if (minusResult === 1) score = "Advantage player1";
        else if (minusResult === -1) score = "Advantage player2";
        else if (minusResult >= 2) score = "Win for player1";
        else score = "Win for player2";
    } else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) tempScore = this.player1Score;
            else {
                score += "-";
                tempScore = this.player2Score;
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
