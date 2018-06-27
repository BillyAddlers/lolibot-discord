# lolibot-discord
A Lolization Discord Bot

don't forget to install node.js, npm, and discord.js

## Ubuntu 18.04 :

`$ sudo apt -y install npm nodejs-legacy`

## Ubuntu 16.04 :

Mboh, repositorine gak update-update cuk..
Gunakan metode Debian untuk Ubuntu versi ini.

## Arch Linux : 

`$ sudo pacman -S npm nodejs`

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
  
`$ scoop install nodejs`

## Android :
Mboh iso po ora~

`$ pkg install nodejs`

`$ pkg install nodejs-current`

## Debian 7 (lan sak panunggalane) :
Termasuk Linux Mint, Linux Mint Debian Edition, elementaryOS, dkk

`$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -`
`$ sudo apt-get install -y nodejs`

  Iki lek pengen nodejs 10
  
`$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -`
`$ sudo apt-get install -y nodejs`

  Lek pengen compile dewe

`$ sudo apt install -y build-essential`

## Enterprise Linux & Fedora :

  RHEL, CentOS, Fedora

`$ curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -`

  Iki lek pengen nodejs 10

`$ curl --silent --location https://rpm.nodesource.com/setup_10.x | sudo bash -`

  Ojo lali di install
  
`$ sudo yum -y install nodejs`

  Lek arep compile dewe
 
`$ sudo yum install gcc-c++ make`

  Fedora Alternative
  
`$ sudo dnf install nodejs`

  Enterprise Linux Alternative (RHEL and CentOS)

`$ sudo yum install nodejs npm --enablerepo=epel`

## FreeBSD :

`$ pkg install node`

  Lek arep compile dewe nggae Ports (https://www.freebsd.org/cgi/man.cgi?ports)
  
`$ cd /usr/ports/www/node && make install`

## Gentoo :

`$ emerge nodejs`

## NetBSD :

`$ cd /usr/pkgsrc/lang/nodejs && make install`

  Lek arep nggae binary pkgin
  
`$ pkgin -y install nodejs`

## openSUSE :

`$ zypper install nodejs4`

## macOS :

  Download paketnya langsung dari bash

`$ curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"`

  Atau gunakan homebrew
  
`$ brew install node`

## SmartOS and illumos :

`$ pkgin -y install nodejs`

  Atau build manual
  
`$ cd pkgsrc/lang/nodejs && bmake install`

## Void Linux :

`$ xbps-install -Sy nodejs`

## Solus :

`$ sudo eopkg install nodejs`

# Installing Discord.js

Set-up development environment dulu

`$ npm init`

Setelah itu, install module yang diperlukan. Terutama Discord.js nya

`$ npm install --save discord.js node-opus bufferutil erlpack libsodium-wrappers uws`

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
