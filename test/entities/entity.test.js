import Entity from '../../lib/entities/entity';
import Rock from '../../lib/entities/rock';

describe('constructor', () => {
  it('should be initialized', () => {
    const targets = [Entity];
    const entity: Entity = new Entity('name', targets);

    expect(entity).toEqual({
      name: 'name',
      targets,
    });
  });
});

describe('compareTo', () => {
  it('should returns 0', () => {
    const entity: Entity = new Entity('name', []);
    const comparison: number = entity.compareTo(new Entity('name', []));

    expect(comparison).toBe(0);
  });

  it('should returns 1', () => {
    const entity: Entity = new Entity('name', [Rock]);
    const rock: Rock = new Rock();
    const spyHasTarget = jest.spyOn(entity, 'hasTarget')
      .mockImplementation(($e: Entity) => true);

    const comparison: number = entity.compareTo(rock);

    expect(comparison).toBe(1);
    expect(spyHasTarget).toHaveBeenCalledWith(rock);
  });

  it('should returns -1', () => {
    const entity: Entity = new Entity('name', []);
    const rock: Rock = new Rock();
    const comparison: number = entity.compareTo(rock);

    expect(comparison).toBe(-1);
  });
});

describe('hasTarget', () => {
  it('should returns true', () => {
    const entity: Entity = new Entity('name', [Rock]);
    const hasTarget: boolean = entity.hasTarget(new Rock());

    expect(hasTarget).toBe(true);
  });

  it('should returns false', () => {
    const entity: Entity = new Entity('name', []);
    const hasTarget: boolean = entity.hasTarget(new Rock());

    expect(hasTarget).toBe(false);
  });
});
