import inquirer from 'inquirer';
import Game from '../games/game';
import Player from '../players/player';
import HumanPlayer from '../players/human-player';
import possibilities from '../entities/list';

/**
 * Class representing a game's round CLI
 */
export default class GameRoundCLI {
  /**
   * Requests for the Human player's choice
   * @param {HumanPlayer} player
   */
  static async getHumanPlayerChoice(player: HumanPlayer): Promise<void> {
    const answer: Object = await inquirer.prompt([{
      message: 'Made a choice',
      name: 'choice',
      type: 'list',
      choices: possibilities,
    }]);

    const EntityClass: Class<T> = possibilities.find((possibility: Class<T>) => (
      possibility.name === answer.choice
    ));

    player.setChoice(new EntityClass());
  }

  /**
   * @param {Game} game - the game
   * @return {Promise.<Entity>}
   */
  static async start(game: Game): Promise<void> {
    const player: Player = game.player1;

    if (player instanceof HumanPlayer) {
      await GameRoundCLI.getHumanPlayerChoice(player);
    }
  }
}
