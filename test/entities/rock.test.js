import Rock from '../../lib/entities/rock';
import Entity from '../../lib/entities/entity';
import Scissors from '../../lib/entities/scissors';

describe('construtor', () => {
  it('shoudl be initialized', () => {
    const rock: Rock = new Rock();

    expect(rock).toBeInstanceOf(Entity);
    expect(rock).toEqual({
      name: 'Rock',
      targets: [Scissors],
    });
  });
});
