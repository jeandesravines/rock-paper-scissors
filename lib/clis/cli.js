import PlayerSelectorCLI from './player-selector-cli';
import GameRoundCLI from './game-round-cli';
import GameStatusCLI from './game-status-cli';
import ContinueCLI from './continue-cli';

import Game from '../games/game';
import Player from '../players/player';
import RandomComputerPlayer from '../players/random-computer-player';

/**
 * Class representing a CLI
 */
export default class CLI {
  /**
   * @return {Promise.<*>}
   */
  static async start(): Promise<any> {
    const PlayerClass: Class<T> = await PlayerSelectorCLI.start();
    const player1: Player = new PlayerClass('Player1');
    const player2: Player = new RandomComputerPlayer('Player2');
    const game: Game = new Game(player1, player2);

    return CLI.loop(game);
  }

  /**
   * @param {Game} game
   * @return {Promise.<void>}
   * @private
   */
  static async loop(game: Game): Promise<void> {
    const toContinue: boolean = await Promise.resolve()
      .then(() => game.nextRound())
      .then(() => GameRoundCLI.start(game))
      .then(() => game.endRound())
      .then(() => GameStatusCLI.start(game))
      .then(() => ContinueCLI.start());

    if (toContinue) {
      await CLI.loop(game);
    }
  }
}
