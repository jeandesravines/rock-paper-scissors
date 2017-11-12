import Entity from '../../lib/entities/entity';
import list from '../../lib/entities/list';

describe('format', () => {
  it('shoudld be an array of class', () => {
    expect(list).toBeInstanceOf(Array);
    list.forEach((EntityClass: Class<Entity>) => {
      expect(new EntityClass()).toBeInstanceOf(Entity);
    });
  });
});
