const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { select } = require('@inquirer/prompts');

const registryPath = path.join(__dirname, 'custom.json');

// 获取当前 npm 源
function getCurrentRegistry() {
    try {
        const registry = execSync('npm config get registry').toString().trim();
        console.log(`当前源: ${registry}`);
    } catch (error) {
        console.error('获取当前源失败:', error.message);
    }
}

// 切换自定义源
function setRegistry(url) {
    try {
        execSync(`npm config set registry ${url}`);
        console.log(`已切换源至: ${url}`);
    } catch (error) {
        console.error('切换源失败:', error.message);
    }
}

// 加载自定义源配置
function loadCustomRegistries() {
    if (fs.existsSync(registryPath)) {
        const data = fs.readFileSync(registryPath, 'utf8');
        return JSON.parse(data);
    }
    return {};
}

// 保存自定义源配置
function saveCustomRegistries(registries) {
    fs.writeFileSync(registryPath, JSON.stringify(registries, null, 2), 'utf8');
}

// 添加自定义源
function addCustomRegistry(name, url) {
    const customRegistries = loadCustomRegistries();
    if (customRegistries[name]) {
        console.log(`源 "${name}" 已存在，URL 为 ${customRegistries[name]}`);
        return;
    }
    customRegistries[name] = url;
    saveCustomRegistries(customRegistries);
    console.log(`添加自定义源: ${name} -> ${url}`);
}

// 删除自定义源
function deleteCustomRegistry(name) {
    const customRegistries = loadCustomRegistries();
    if (!customRegistries[name]) {
        console.log(`源 "${name}" 不存在`);
        return;
    }
    delete customRegistries[name];
    saveCustomRegistries(customRegistries);
    console.log(`删除自定义源: ${name}`);
}

// 切换到已有源
function useRegistry(source) {
    const registries = loadCustomRegistries();
    const registry = registries[source];
    if (registry) {
        setRegistry(registry);
    } else {
        console.error(`未知源: ${source}`);
    }
}

// 查看自定义源列表
function listCustomRegistries() {
    const customRegistries = loadCustomRegistries();
    if (Object.keys(customRegistries).length === 0) {
        console.log('没有自定义的源');
        return;
    }
    Object.entries(customRegistries).forEach(([name, url]) => {
        console.log(`${name}: ${typeof url === 'string' ? url : JSON.stringify(url)}`);
    });
}

// 键盘选择源
async function selectRegistry() {
    const customRegistries = loadCustomRegistries();
    const choices = Object.keys(customRegistries)
    const answer = await select({
        message: '选择你要切换的源：',
        choices,
    })
    useRegistry(answer);
}


module.exports = {
    getCurrentRegistry,
    setRegistry,
    addCustomRegistry,
    deleteCustomRegistry,
    useRegistry,
    listCustomRegistries,
    selectRegistry
}