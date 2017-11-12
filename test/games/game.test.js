import Game from '../../lib/games/game';
import Player from '../../lib/players/player';
import Rock from '../../lib/entities/rock';
import Paper from '../../lib/entities/paper';

describe('constructor', () => {
  it('should be initialized', () => {
    const player1: Player = new Player('Player 1');
    const player2: Player = new Player('Player 2');
    const game: Game = new Game(player1, player2);

    expect(game).toEqual({
      player1,
      player2,
      history: [],
      round: null,
    });
  });
});

describe('nextRound', () => {
  it('should prepares for the next round', () => {
    const player1: Player = new Player('Player 1');
    const player2: Player = new Player('Player 2');
    const game: Game = new Game(player1, player2);

    const spyNextRound1 = jest.spyOn(player1, 'nextRound');
    const spyNextRound2 = jest.spyOn(player2, 'nextRound');

    for (let i = 0; i < 2; i += 1) {
      game.nextRound();
    }

    expect(spyNextRound1).toHaveBeenCalledTimes(2);
    expect(spyNextRound2).toHaveBeenCalledTimes(2);
    expect(game.round).toEqual(expect.objectContaining({
      player1,
      player2,
      index: 2,
    }));

    expect(game.history).toEqual([
      expect.objectContaining({ player1, player2, index: 1 }),
      expect.objectContaining({ player1, player2, index: 2 }),
    ]);
  });
});

describe('endRoute', () => {
  it('ends round and upgrade winner\'s score', () => {
    const player1: Player = new Player('Player 1');
    const player2: Player = new Player('Player 2');
    const game: Game = new Game(player1, player2);

    game.nextRound();
    player1.setChoice(new Rock());
    player2.setChoice(new Paper());
    game.endRound();

    expect(player1.score).toBe(0);
    expect(player2.score).toBe(1);
  });

  it('ends round and without upgrade any score', () => {
    const player1: Player = new Player('Player 1');
    const player2: Player = new Player('Player 2');
    const game: Game = new Game(player1, player2);

    game.nextRound();
    player1.setChoice(new Rock());
    player2.setChoice(new Rock());
    game.endRound();

    expect(player2.score).toBe(0);
    expect(player2.score).toBe(0);
  });
});
