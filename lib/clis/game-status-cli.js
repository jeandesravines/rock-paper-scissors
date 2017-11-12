import Game from '../games/game';
import Round from '../games/round';
import RoundResult from '../games/round-result';
import Player from '../players/player';

/**
 * Class representing an output of the game's status
 */
export default class GameStatusCLI {
  /**
   * Shows the game's status after a round
   */
  static start(game: Game): void {
    const player1: Player = game.player1;
    const player2: Player = game.player2;
    const round: Round = game.round;
    const result: RoundResult = round.result;
    const winner: string = result.winner ? result.winner.name : 'N/A';

    process.stdout.write([
      '---------------------------------------',
      `# Round ${round.index + 1}`,
      `# Fight: ${result.choice1.name} vs ${result.choice2.name}`,
      `# Winner: ${winner}`,
      '# Scores:',
      `    - ${player1.name}: ${player1.score}`,
      `    - ${player2.name}: ${player2.score}`,
      '---------------------------------------',
      '',
    ].join('\n'));
  }
}
