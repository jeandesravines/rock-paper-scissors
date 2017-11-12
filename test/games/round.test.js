import Sandbox from '@jdes/jest-sandbox';
import Round from '../../lib/games/round';
import RoundResult from '../../lib/games/round-result';
import Player from '../../lib/players/player';

const sandbox: Sandbox = new Sandbox();

afterEach(() => {
  sandbox.restoreAllMocks();
});

describe('constructor', () => {
  it('should be initialized', () => {
    const player1: Player = new Player('Player 1');
    const player2: Player = new Player('Player 2');
    const round: Round = new Round(player1, player2, 1);

    expect(round).toEqual({
      player1,
      player2,
      index: 1,
      result: null,
    });
  });
});

describe('end', () => {
  it('should create the result', () => {
    const player1: Player = new Player('Player 1');
    const player2: Player = new Player('Player 2');
    const round: Round = new Round(player1, player2, 1);
    const spyEvaluate = sandbox.spyOn(RoundResult.prototype, 'evaluate')
      .mockReturnValue();

    round.end();

    expect(round.result).toBeInstanceOf(RoundResult);
    expect(round.result.player1).toBe(player1);
    expect(round.result.player2).toBe(player2);
    expect(spyEvaluate).toHaveBeenCalled();
  });
});
