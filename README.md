## 功能

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
yy-nrm ls
yy-nrm use taobao
```

## 配置

```bash
yy-nrm add <registry> <url>
yy-nrm del <registry>
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