import chalk from 'chalk';

export default function displayBanner() {
    console.log(chalk.cyan(`
     F O R E S T A R M Y     
                ${chalk.yellow('NODEGO AUTO - BOT')}                
    📢  ${chalk.yellow('Telegram Channel: https://t.me/forestarmy)}`));

    console.log(chalk.yellow('\n════════════════════════════════════════════════════════'));
    console.log(chalk.white(`Started at: ${new Date().toLocaleString()}`));
    console.log(chalk.yellow('════════════════════════════════════════════════════════\n'));
}