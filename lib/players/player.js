import Entity from '../entities/entity';

/**
 * Class representing a player
 * @abstract
 */
export default class Player {
  /**
   * @param {string} name
   */
  constructor(name: string) {
    /**
     * @const {string}
     * @readonly
     */
    this.name = name;

    /**
     * @var {number}
     * @readonly
     */
    this.score = 0;

    /**
     * @var {?Entity}
     * @readonly
     */
    this.choice = null;
  }

  /**
   * Prepare player for the next round
   */
  nextRound(): void {
    this.choice = null;
  }

  /**
   * @param {?Entity} choice - the player's choice
   */
  setChoice(choice: ?Entity): void {
    this.choice = choice;
  }

  /**
   * @param {number} score - the new score
   */
  setScore(score: number): void {
    this.score = score;
  }
}
