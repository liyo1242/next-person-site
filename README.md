<div id="top"></div>
<div align="center">
  <div align="center" style="width: 50px">

![docs-logo.png](.asset/docs-logo.png)

  </div>
  <h3 align="center">Personal Site</h3>

  <p align="center">
    I hope to use this project to record my work experience
    <br />
    <br />
  </p>
</div>

<details open="open">
<summary> 🗻 Table of Contents</summary>

- [About This Project](#about-this-project)
  - [Prerequisites](#prerequisites)
- [Useful Links](#useful-links)
- [Usage](#usage)
- [Project structure](#project-structure)

</details>

## About This Project

This project consists of 2 main parts, show resume on _Home page_ and show your own articles at _Post page_

I want to have a base so I could start iterating on the features

### Prerequisites

This project start from **Next.js** and **React**, and has some base lint rule (eslint and commitlint), so the development may need to pay attention to

## Useful Links

Next.js Config Setting Docs
https://nextjs.org/docs/api-reference/next.config.js/introduction

Cypress Test Command Docs
https://docs.cypress.io/api/commands/and#Chai

## Usage

After you have cloned, there are a few things you must do

- Install the dependencies

```bash
yarn
```

- Start this project

```bash
yarn run dev
```

- If you just want to see the UI, you can find him through **storybook**

```bash
yarn run storybook
```

## Project structure

My folder structure is separated by feature, as the project is still small, so I want to avoid over-design.

```shell
Project
├─ .asset                                   #  docs asset
├─ .husky                                   #  husky config folder (lint check before commit)
├─ .vscode                                  #  vscode config folder (extension convenience)
├─ .storybook                               #  storybook config folder (UI dashboard)
├─ posts                                    #  articles in md format (*.md)
├─ public
│  ├─ images
│  └─ locales                               #  i18n
├─ src
│  ├─ feature                               #  core Logic Components
│  ├─ layout                                #  UI that is not part of the main program
│  ├─ lib                                   #  node.js code part
│  ├─ pages                                 #  simplest logic and component arrangement
│  ├─ stories                               #  storybook component stories
│  └─ ui                                    #  common components
└─ ...
```
