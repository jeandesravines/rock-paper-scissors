import inquirer from 'inquirer';
import HumanPlayer from '../players/human-player';
import RandomComputerPlayer from '../players/random-computer-player';

/**
 * Class representing a player selector CLI
 */
export default class PlayerSelectorCLI {
  /**
   * @return {Promise.<Class.<T>>}
   */
  static async start(): Promise<Class<T>> {
    const playerTypes: Object<Class<T>> = {
      Human: HumanPlayer,
      Computer: RandomComputerPlayer,
    };

    const answer: Object = await inquirer.prompt([{
      message: 'Player 1\'s type',
      name: 'type',
      type: 'list',
      choices: Object.keys(playerTypes),
    }]);

    return playerTypes[answer.type];
  }
}
