# 指南

此插件版本基于 `Photoshop cc 2018`，其中涉及到内容：

* vue cli 3.x
* vue
* [CEP_8.x](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md)

## 使用

首先确认已经安装了 `@vue/cli`，然后创建项目

``` bash
yarn global add @vue/cli

vue create my-project

cd my-project

vue add @kuaizi/vue-cli-plugin-cep

# ID: ai.kuaizi.ps.cep
# name: 筷子一键工具
# port: 9000

yarn serve
```

当我们启动项目时，自动在 `chrome` 浏览器中打开 `Photoshop` 的远程调试地址

打开 `Photoshop` 软件，在 `窗口》扩展功能》筷子一键工具[您输入的插件名字]` 点击启动插件

在插件窗口我们可以看到运行的 `vue` 项目，我们在项目的更改经过热插会同步到插件窗口中，调试信息尽量使用 `chorme` 调试

## 构建

根据插件初始化的 `ID`，在项目 `build` 后会在项目目录下生成如您输入的 `ai.kuaizi.ps.cep` 目录，此目录可以拷贝到 `Photoshop` 的插件目录即可运行。做成自动安装程序请自行Google

``` bash
yarn build
```
