import RoundResult from './round-result';
import Player from '../players/player';

export default class Round {
  /**
   * @params {Player} player1
   * @params {Player} player2
   */
  constructor(player1: Player, player2: Player, index: number) {
    /**
     * @const {number}
     */
    this.index = index;

    /**
     * @const {Player}
     */
    this.player1 = player1;

    /**
     * @const {Player}
     */
    this.player2 = player2;

    /**
     * @var {?RoundResult}
     */
    this.result = (null: ?RoundResult);
  }

  /**
   * Set the round's result
   */
  end(): void {
    this.result = new RoundResult(this.player1, this.player2);
    this.result.evaluate();
  }
}
