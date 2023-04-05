# Electron+React+TypeScript

- 使用 React+TypeScript 和 Electron 构建的项目模板

## 启动项目

- 安装[yarn 2.x](https://yarnpkg.com/getting-started/install)包管理工具
- 要求 [Node.js](https://nodejs.org/en/download/) 的版本 >=18.6
- 以管理员身份打开命令提示符

```bash
# 使用管理员权限运行corepack命令
corepack enable
corepack prepare yarn@stable --activate

# 安装项目依赖
yarn install
# 设置 Electron Forge 的脚手架
yarn electron-forge import
# 启动项目
yarn start
# 构建项目
yarn make
# 打包项目
yarn package
# 更新项目依赖
yarn upgrade-interactive
```

## 更新 yarn 包管理工具

```bash
# 更新yarn主版本
yarn set version stable
# 更新 yarn 更新依赖包插件
yarn plugin import interactive-tools
# 更新 yarn TypeScript 库自动加入插件
yarn plugin import typescript
```
