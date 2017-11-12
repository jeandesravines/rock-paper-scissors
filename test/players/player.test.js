import Player from '../../lib/players/player';
import Entity from '../../lib/entities/entity';

describe('constructor', () => {
  it('should be initialized', () => {
    const player: Player = new Player('Player1');

    expect(player).toEqual({
      name: 'Player1',
      score: 0,
      choice: null,
    });
  });
});

describe('nextRound', () => {
  it('should reset choice', () => {
    const player: Player = new Player('Player1');
    player.choice = new Entity('Entity', []);
    player.nextRound();

    expect(player.choice).toBe(null);
  });
});

describe('setChoice', () => {
  it('should set the choice', () => {
    const entity: Entity = new Entity('Entity', []);
    const player: Player = new Player('Player1');
    player.setChoice(entity);

    expect(player.choice).toBe(entity);
  });
});

describe('setScore', () => {
  it('should set the choice', () => {
    const player: Player = new Player('Player1');
    player.setScore(22);

    expect(player.score).toBe(22);
  });
});
