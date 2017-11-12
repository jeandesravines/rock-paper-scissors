import ComputerPlayer from './computer-player';
import Entity from '../entities/entity';
import classes from '../entities/list';

/**
 * Class representing a Computer player which make random choices
 */
export default class RandomComputerPlayer extends ComputerPlayer {
  /**
   * @inheritdoc
   * @override
   */
  nextRound(): void {
    const index: number = Number.parseInt(Math.random() * classes.length, 10);
    const EntityClass: Class<T> = classes[index];
    const entity: Entity = new EntityClass();

    this.choice = entity;
  }
}
