const chalk = require('chalk');

console.log(chalk.green('Hello from baseline-test!'));
console.log(chalk.yellow('This is a deliberately controlled assessment fixture.'));
console.log('');
console.log('Run an OpenSSF Baseline audit to see what is missing:');
console.log(chalk.cyan('  audit_openssf_baseline(local_path=".")'));
