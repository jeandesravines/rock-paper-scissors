import RoundResult from '../../lib/games/round-result';
import Entity from '../../lib/entities/entity';
import Rock from '../../lib/entities/rock';
import Paper from '../../lib/entities/paper';
import Player from '../../lib/players/player';

describe('constructor', () => {
  it('should be initialized', () => {
    const player1: Player = new Player('Player 1');
    const player2: Player = new Player('Player 2');
    const choice1: Entity = new Rock();
    const choice2: Entity = new Paper();

    player1.setChoice(choice1);
    player2.setChoice(choice2);

    const result: RoundResult = new RoundResult(player1, player2);

    expect(result).toEqual({
      player1,
      player2,
      choice1,
      choice2,
      winner: null,
    });
  });
});

describe('getWinner', () => {
  it('should returns player1', () => {
    const player1: Player = new Player('Player 1');
    const player2: Player = new Player('Player 2');

    player1.setChoice(new Paper());
    player2.setChoice(new Rock());

    const result: RoundResult = new RoundResult(player1, player2);
    const winner: Player = result.getWinner();

    expect(winner).toBe(player1);
  });

  it('should returns player2', () => {
    const player1: Player = new Player('Player 1');
    const player2: Player = new Player('Player 2');

    player1.setChoice(new Rock());
    player2.setChoice(new Paper());

    const result: RoundResult = new RoundResult(player1, player2);
    const winner: Player = result.getWinner();

    expect(winner).toBe(player2);
  });

  it('should return null', () => {
    const player1: Player = new Player('Player 1');
    const player2: Player = new Player('Player 2');

    player1.setChoice(new Rock());
    player2.setChoice(new Rock());

    const result: RoundResult = new RoundResult(player1, player2);
    const winner: void = result.getWinner();

    expect(winner).toBe(null);
  });
});

describe('evaluate', () => {
  it('should set the winner', () => {
    const player1: Player = new Player('Player 1');
    const player2: Player = new Player('Player 2');

    player1.setChoice(new Paper());
    player2.setChoice(new Rock());

    const result: RoundResult = new RoundResult(player1, player2);
    result.evaluate();

    expect(result.winner).toBe(player1);
  });
});
