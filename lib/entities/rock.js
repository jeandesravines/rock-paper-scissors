import Entity from './entity';
import Scissors from './scissors';

/**
 * Class representing a rock
 */
export default class Rock extends Entity {
  /**
   * @override
   */
  constructor() {
    super('Rock', [Scissors]);
  }
}
