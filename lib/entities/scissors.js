import Entity from './entity';
import Paper from './paper';

/**
 * Class representing scissors
 */
export default class Scissors extends Entity {
  /**
   * @override
   */
  constructor() {
    super('Scissors', [Paper]);
  }
}
