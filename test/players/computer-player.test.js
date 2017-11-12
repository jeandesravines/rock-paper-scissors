import Player from '../../lib/players/player';
import ComputerPlayer from '../../lib/players/computer-player';

describe('constructor', () => {
  it('should be initialized', () => {
    const player: ComputerPlayer = new ComputerPlayer('Player1');

    expect(player).toBeInstanceOf(Player);
  });
});
