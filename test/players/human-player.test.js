import Player from '../../lib/players/player';
import HumanPlayer from '../../lib/players/human-player';

describe('constructor', () => {
  it('should be initialized', () => {
    const player: HumanPlayer = new HumanPlayer('Player1');

    expect(player).toBeInstanceOf(Player);
  });
});
