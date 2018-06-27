# lolibot-discord
A Lolization Discord Bot

don't forget to install node.js, npm, and discord.js

## Ubuntu 18.04 :

```css
$ sudo apt -y install npm nodejs-legacy
```

## Ubuntu 16.04 :

Mboh, repositorine gak update-update cuk..
Gunakan metode Debian untuk Ubuntu versi ini.

## Arch Linux : 

```css
$ sudo pacman -S npm nodejs
```

## Windows :

Download sendiri sono :v
Link : https://nodejs.org/en/download/

  Make Chocolatey :3 (https://chocolatey.org)
  
```css
$ cinst nodejs
# or for full install with npm
$ cinst nodejs.install
```

  Atau Scoop :3 (https://scoop.sh)
  
```css
$ scoop install nodejs
```

## Android :
Mboh iso po ora~

`$ pkg install nodejs`

`$ pkg install nodejs-current`

## Debian 7 (lan sak panunggalane) :
Termasuk Linux Mint, Linux Mint Debian Edition, elementaryOS, dkk

```css
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

  Iki lek pengen nodejs 10
  
```css
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

  Lek pengen compile dewe

```css
$ sudo apt install -y build-essential
```

## Enterprise Linux & Fedora :

  RHEL, CentOS, Fedora

```css
$ curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
```

  Iki lek pengen nodejs 10

```css
$ curl --silent --location https://rpm.nodesource.com/setup_10.x | sudo bash -
```

  Ojo lali di install
 
```css
$ sudo yum -y install nodejs
```

  Lek arep compile dewe
 
```css
$ sudo yum install gcc-c++ make
```

  Fedora Alternative
  
```css
$ sudo dnf install nodejs
```

  Enterprise Linux Alternative (RHEL and CentOS)

```css
$ sudo yum install nodejs npm --enablerepo=epel
```

## FreeBSD :

```css
$ pkg install node
```

  Lek arep compile dewe nggae Ports (https://www.freebsd.org/cgi/man.cgi?ports)
  
```css
$ cd /usr/ports/www/node && make install
```

## Gentoo :

```css
$ emerge nodejs
```

## NetBSD :

```css
$ cd /usr/pkgsrc/lang/nodejs && make install
```

  Lek arep nggae binary pkgin
  
```css
$ pkgin -y install nodejs
```

## openSUSE :

```css
$ zypper install nodejs4
```

## macOS :

  Download paketnya langsung dari bash

```css
$ curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```

  Atau gunakan homebrew
  
```css
$ brew install node
```

## SmartOS and illumos :

```css
$ pkgin -y install nodejs
```

  Atau build manual
  
```css
$ cd pkgsrc/lang/nodejs && bmake install
```

## Void Linux :

```css
$ xbps-install -Sy nodejs
```

## Solus :

```css
$ sudo eopkg install nodejs
```

# Installing Discord.js

Set-up development environment dulu

```css
$ npm init
```

Setelah itu, install module yang diperlukan. Terutama Discord.js nya

```css
$ npm install --save discord.js node-opus bufferutil erlpack libsodium-wrappers uws
```

Sampel yang diambil dari dokumentasi

```css
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('token');
```

Wes bar?

Oke~

Happy Coding XD..
