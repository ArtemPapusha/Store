# Webpack template for vanilla JS + scss

## How to run the project

### Install NVM

You can install nvm in two ways git or cURL

### To install or update nvm, you can use the install script using cURL:

```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.3/install.sh | bash
```

More detail in [NVM Readme](https://github.com/creationix/nvm#install-script)

### Git Install

If you have `git` installed (requires git v1.7.10+):

1. clone this repo in the root of your user profile - `cd ~/` from anywhere then
   `git clone https://github.com/nvm-sh/nvm.git .nvm`
2. `cd ~/.nvm` and check out the latest version with `git checkout v0.39.5`
3. activate `nvm` by sourcing it from your shell: `. ./nvm.sh`

Now add these lines to your `~/.bashrc`, `~/.profile`, or `~/.zshrc` file to have it automatically
sourced upon login: (you may have to add to more than one of the above files)

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

## Install and set up Node

```bash
$ nvm install v16.15.1
$ nvm use v16.15.1
$ node -v #Node version check
```


If you want to automatically change Node version when you go to the project directory, follow
[this instruction](https://github.com/creationix/nvm#zsh)

## Install yarn

It is recommended to install Yarn through the npm [package manager](https://www.npmjs.com), which
comes bundled with [Node.js](https://nodejs.org) when you install it on your system.

```bash
$ npm install --global yarn
$ yarn -v #Yarn version check
```

For more details visit [official guide](https://yarnpkg.com/en/docs/install).

## Install dependencies

Then go to the project directory and run the following commands:

```bash
$ yarn install
```

## Run development server

```bash
$ yarn dev
```

## Build production

```bash
$ yarn build
```
