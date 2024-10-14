## 介绍

`yy-nrm`是一款 npm 源管理工具，它可以帮助你轻松地管理和切换 npm 源。

## 功能

- 查看当前使用的源
- 列出所有可用的源
- 切换到指定的源
  - 指定源名
  - 键盘选择
  - 自定义源
- 添加新的源
- 删除源

## 安装

```bash
npm install -g yy-nrm
```

## 操作

### 查看当前使用的源
```bash
nrm current
```

### 列出所有可用的源
```bash
nrm ls
```

### 切换到已有源
```bash
nrm use <registry>

#示例
nrm use taobao
```

### 切换到已有源（键盘选择）
```bash
nrm select
```

### 切换到自定义源
```bash
nrm use <registry>

#示例
nrm use https://registry.npm.taobao.org
```

### 新增源
```bash
nrm add <registry> <url>

#示例
nrm add myregistry https://registry.npm.taobao.org
```

### 删除源
```bash
nrm del <registry>

#示例
nrm del myregistry
```

## 默认源列表

```bash
npm ---------- https://registry.npmjs.org/
yarn --------- https://registry.yarnpkg.com/
tencent ------ https://mirrors.cloud.tencent.com/npm/
cnpm --------- https://r.cnpmjs.org/
taobao ------- https://registry.npmmirror.com/
npmMirror ---- https://skimdb.npmjs.com/registry/
huawei ------- https://repo.huaweicloud.com/repository/npm/
```