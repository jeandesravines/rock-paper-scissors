import Player from '../players/player';
import Round from './round';

/**
 * Class representing a game
 */
export default class Game {
  /**
   * @param {Player} player1
   * @param {Player} player2
   */
  constructor(p1: Player, p2: Player) {
    /**
     * @const {Player}
     * @private
     */
    this.player1 = p1;

    /**
     * @const {Player}
     * @private
     */
    this.player2 = p2;

    /**
     * @const {Round[]}
     * @private
     */
    this.history = [];

    /**
     * @var {?Round}
     * @private
     */
    this.round = null;
  }

  /**
   * Ends the round.
   * Store it to the history and found the winner
   */
  endRound(): void {
    this.round.end();

    const winner: ?Player = this.round.result.winner;

    if (winner) {
      winner.setScore(winner.score + 1);
    }
  }

  /**
   * Prepares the game and players for the next round
   */
  nextRound(): void {
    this.round = new Round(this.player1, this.player2, this.history.length + 1);
    this.history.push(this.round);
    this.player1.nextRound();
    this.player2.nextRound();
  }
}
