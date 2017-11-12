import Paper from '../../lib/entities/paper';
import Entity from '../../lib/entities/entity';
import Rock from '../../lib/entities/rock';

describe('construtor', () => {
  it('shoudl be initialized', () => {
    const paper: Paper = new Paper();

    expect(paper).toBeInstanceOf(Entity);
    expect(paper).toEqual({
      name: 'Paper',
      targets: [Rock],
    });
  });
});
