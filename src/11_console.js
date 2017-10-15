// 1.1. コンソール出力

// 1. processクラスのstdout/stderrを使用 ==========================
// stdoutに出力
process.stdout.write("output log by stdout.write.\n");
// stderrに出力
process.stderr.write("output log by stderr.write.\n");

// 2. consoleクラスを使用 =========================================
// stdoutに出力
console.log("output log by console.log.");
console.info("output log by console.info.");
// stderrに出力
console.error("output log by console.error.");

// 3. log4js-nodeパッケージを使用（!!推奨!!） ======================
var log4js = require('log4js');
var logger = log4js.getLogger();
// 出力ログレベルをtrace以上の指定（デフォルトoff：ログ出力しない）
logger.level = 'trace';
// レベル別ログ出力
logger.trace('output log by log4js.trace.');
logger.debug('output log by log4js.debug.');
logger.info('output log by log4js.info.');
logger.warn('output log by log4js.warn.');
logger.error('output log by log4js.error.');
logger.fatal('output log by log4js.fatal.');
