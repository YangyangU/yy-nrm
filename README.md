## 功能

- 查看当前使用的源
- 列出所有可用的源
- 切换到指定的源
- 添加新的源
- 删除源

## 安装

```bash
npm install -g yy-nrm
```

## 示例

```bash
nrm current  # 查看当前使用的源
nrm ls  # 列出所有可用的源
nrm use taobao  # 切换到淘宝源
nrm add taobao https://registry.npm.taobao.org/  # 添加淘宝源
nrm del taobao  # 删除淘宝源
```

## 配置

```bash
nrm add <registry> <url>
nrm del <registry>
```

## 切换

```bash
yy-nrm use <registry>
```

## 列表

```bash
npm ---------- https://registry.npmjs.org/
yarn --------- https://registry.yarnpkg.com/
tencent ------ https://mirrors.cloud.tencent.com/npm/
cnpm --------- https://r.cnpmjs.org/
taobao ------- https://registry.npmmirror.com/
npmMirror ---- https://skimdb.npmjs.com/registry/
```