import Sandbox from '@jdes/jest-sandbox';
import ComputerPlayer from '../../lib/players/computer-player';
import RandomComputerPlayer from '../../lib/players/random-computer-player';
import classes from '../../lib/entities/list';

const sandbox: Sandbox = new Sandbox();

afterEach(() => {
  sandbox.restoreAllMocks();
});

describe('constructor', () => {
  it('should be initialized', () => {
    const player: RandomComputerPlayer = new RandomComputerPlayer('Player1');

    expect(player).toBeInstanceOf(ComputerPlayer);
  });
});

describe('nextRound', () => {
  it('should initialize choice', () => {
    const player: RandomComputerPlayer = new RandomComputerPlayer('Player1');
    const spyMathRandom = sandbox.spyOn(Math, 'random')
      .mockReturnValue(0);

    player.nextRound();

    expect(player.choice).toBeInstanceOf(classes[0]);
    expect(spyMathRandom).toHaveBeenCalled();
  });
});
