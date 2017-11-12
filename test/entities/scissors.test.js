import Scissors from '../../lib/entities/scissors';
import Entity from '../../lib/entities/entity';
import Paper from '../../lib/entities/paper';

describe('construtor', () => {
  it('shoudl be initialized', () => {
    const scissors: Scissors = new Scissors();

    expect(scissors).toBeInstanceOf(Entity);
    expect(scissors).toEqual({
      name: 'Scissors',
      targets: [Paper],
    });
  });
});
