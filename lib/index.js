import CLI from './clis/cli';

CLI.start()
  .catch(e => console.error(e));
