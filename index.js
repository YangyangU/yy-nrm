#!/usr/bin/env node

const { execSync } = require('child_process');
const { program } = require('commander');

// 常用的 npm 源
const registries = {
  npm: 'https://registry.npmjs.org/',
  taobao: 'https://registry.npmmirror.com/',
  yarn: 'https://registry.yarnpkg.com/',
  tencent: 'https://mirrors.cloud.tencent.com/npm/',
  huawei: 'https://repo.huaweicloud.com/repository/npm/',
  cnpm: 'https://r.cnpmjs.org/',
  npmMirror: 'https://skimdb.npmjs.com/registry/',
};

// 获取当前 npm 源
function getCurrentRegistry() {
  try {
    const registry = execSync('npm config get registry').toString().trim();
    console.log(`当前 npm 源: ${registry}`);
  } catch (error) {
    console.error('获取当前 npm 源失败:', error.message);
  }
}

// 切换 npm 源
function setRegistry(url) {
  try {
    execSync(`npm config set registry ${url}`);
    console.log(`已切换 npm 源至: ${url}`);
  } catch (error) {
    console.error('切换 npm 源失败:', error.message);
  }
}

// 定义命令行选项和操作
program
  .version('1.0.0')
  .description('NPM 源切换工具');

// 查看当前源
program
  .command('current')
  .description('查看当前 npm 源')
  .action(getCurrentRegistry);

// 切换到常用源
program
  .command('use <source>')
  .description('切换到指定的 npm 源')
  .action((source) => {
    const registry = registries[source];
    if (registry) {
      setRegistry(registry);
    } else {
      console.error(`未知源: ${source}`);
    }
  });

// 使用自定义源
program
  .command('custom <url>')
  .description('使用自定义 npm 源')
  .action((url) => {
    setRegistry(url);
  });

program.parse(process.argv);
