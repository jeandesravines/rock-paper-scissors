import inquirer from 'inquirer';

/**
 * Class representing a prompt to continue
 */
export default class ContinueCLI {
  /**
   * @return {Promise.<boolean>}
   */
  static async start(): Promise<boolean> {
    const answer: Object = await inquirer.prompt([{
      message: 'Do you want to continue?',
      name: 'continue',
      type: 'confirm',
      default: true,
    }]);

    return answer.continue;
  }
}
