import { Command, Option } from 'commander';
import { version } from './version';
import { logger, setupLogger } from '@/utils/logger';
import { generate } from './generate';

const program = new Command();

program
  .version(version)
  .argument('<color>', 'Hex, RGB, or HSL color code in quotes (eg "#ff0" or "rgb(255,0,0)")')
  .action(function (color: string) {
    const options = program.opts();
    setupLogger(options);
    logger.app.debug(`started with options: ${JSON.stringify(options, null, 2)}`);

    const output = generate(color);
    console.log(JSON.stringify(output, null, 2));
  });

program.addOption(new Option('-d, --debug', 'output extra debugging').env('DEBUG'));

program.parse(process.argv);
