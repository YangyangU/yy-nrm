#!/usr/bin/env node

const { program } = require('commander');
const {
    getCurrentRegistry,
    setRegistry,
    addCustomRegistry,
    deleteCustomRegistry,
    useRegistry,
    listCustomRegistries,
    selectRegistry
} = require('./actions.js');

// 定义命令行选项和操作
program
    .version('1.0.4')
    .description('NPM 源切换工具');

// 查看当前源
program
    .command('current')
    .description('查看当前源')
    .action(getCurrentRegistry);

// 查看所有源
program
    .command('ls')
    .description('查看所有源')
    .action(listCustomRegistries);

// 切换到常用源
program
    .command('use <source>')
    .description('切换到指定的源')
    .action(useRegistry);

// 使用自定义源
program
    .command('custom <url>')
    .description('使用自定义源')
    .action((url) => {
        setRegistry(url);
    });

// 新增自定义源
program
    .command('add <name> <url>')
    .description('新增自定义源')
    .action(addCustomRegistry);

// 删除自定义源
program
    .command('del <name>')
    .description('删除自定义源')
    .action(deleteCustomRegistry);

// 键盘选择源
program
    .command('select')
    .description('键盘选择源')
    .action(selectRegistry)

program.parse(process.argv);
