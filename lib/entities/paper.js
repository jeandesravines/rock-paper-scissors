import Entity from './entity';
import Rock from './rock';

/**
 * Class representing a piece of paper
 */
export default class Paper extends Entity {
  /**
   * @override
   */
  constructor() {
    super('Paper', [Rock]);
  }
}
