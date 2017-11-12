/**
 * Class representing a choice in the game
 * @abstract
 */
export default class Entity {
  /**
   * @protected
   * @param {string} name
   * @param {Class.<T: Entity>[]} - an array of classes
   *   representing the targets of the current entity
   */
  constructor(name: string, targets: Class<T>[]) {
    /**
     * @const {string}
     * @public
     */
    this.name = name;

    /**
     * @const {Class.<T: Entity>[]}
     * @private
     */
    this.targets = targets;
  }

  /**
   * @param {Entity} target
   * @return {number} - A number used to compare 2 entity
   *    -1 if the current entity is a target of toCompare
   *    0 if the current entity has the same type of toCompare
   *    -1 if toCompare is a target of the current entity
   */
  compareTo(toCompare: Entity): number {
    if (this.constructor === toCompare.constructor) {
      return 0;
    }

    return this.hasTarget(toCompare) ? 1 : -1;
  }

  /**
   * @param {Entity} target
   * @return {boolean} - true if the given entity is a target of
   *   the current entity
   */
  hasTarget(target: Entity): boolean {
    return this.targets
      .includes(target.constructor);
  }
}
