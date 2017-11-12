import Entity from '../entities/entity';
import Player from '../players/player';

/**
 * Class representing an ended round's result
 */
export default class RoundResult {
  /**
   * @params {Player} player1
   * @params {Player} player2
   */
  constructor(player1: Player, player2: Player) {
    /**
     * @private
     * @const {Player}
     */
    this.player1 = player1;

    /**
     * @private
     * @const {Player}
     */
    this.player2 = player2;

    /**
     * @public
     * @const {Entity}
     */
    this.choice1 = (this.player1.choice: Entity);

    /**
     * @public
     * @const {Entity}
     */
    this.choice2 = (this.player2.choice: Entity);

    /**
     * @public
     * @const {?Player}
     */
    this.winner = null;
  }

  /**
   * Set the winner
   */
  evaluate(): void {
    this.winner = (this.getWinner(): ?Player);
  }

  /**
   * @params {Player} player1
   * @params {Player} player2
   * @return {?Player} - the winner or null in case of equality
   * @private
   */
  getWinner(): ?Player {
    switch (this.choice1.compareTo(this.choice2)) {
      case -1: return this.player2;
      case 1: return this.player1;
      default: return null;
    }
  }
}
