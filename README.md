# NextJS TailwindCSS BOILERPLATE

Boilerplate NextJS dengan TailwindCSS sebagai Styling Unit

Requirements :

- React
- Racoil
- Tanstack Query
- Jest
- TailwindCSS
- HeadlessUI
- ESLint
- Prettier
- Nix Devenv
- Nix Direnv
- Docker
- Axios
- Husky

## Recomendation Code Editor

Visual Studio Code

### Recomendation Extension

- Stylelint
- TailwindCSS Intelesense
- Prettier

## Initial Setup

- Clone Project ini ( Direkomendasikan menggunakan SSH )

> `git clone git@github.com:maulanasdqn/nextjs-tailwindcss-boilerplate`

## Install NodeJS dan Yarn

- Anda perlu menginstall dulu NodeJS dan Yarn ( Direkomendasikan menggunakan NodeJS Versi LTS )

> `npm i -g yarn`

## Install Dependency

- Pasang Dependency

> `yarn install`

## Run Development Server

- Project bisa dijalankan dengan beberapa metode berikut

> `yarn dev`

## Development With Nix

Development dengan Nix membuat proses Develop menjadi lebih mudah dan ringkas, semua dependency akan terurus dengan sendirinya, juga independent artinya tidak akan menggangu environment yang lain

- Pasang Nixpkgs

> `sh <(curl -L https://nixos.org/nix/install) --no-daemon`

- Pasang nix-flakes

> `nix-env -iA nixpkgs.nixFlakes`

- Setup nix-flakes \
  Edit file yang ada di `~/.config/nix/nix.conf` atau `/etc/nix/nix.conf` dan tambahkan:

> `experimental-features = nix-command flakes`

- Pasang nix-direnv

> `nix-env -f '<nixpkgs>' -iA nix-direnv`

- Setup nix-direnv

> `source $HOME/.nix-profile/share/nix-direnv/direnvrc`

- Masuk ke folder yang sudah di clone kemudian jalankan perintah berikut

> `direnv allow`

- Dan enjoy tinggal tunggu dependency terinstall dengan sendirinya

## Development with Docker

Docker harus di pasang dulu jika belum ada

- Pasang Docker bisa di unduh di https://docker.com

- Setup Docker

> `docker compose up`

## Setup Env

ENV di sesuaikan seperti yang ada di contoh .env.example

- Rename file .env.example menjadi .env.local
- Isi ENV sesuai dengan yang ada di dalam file .env.local nya

## Setup Husky

Untuk bisa menggunakan husky agar berjalan baik dan benar maka perlu di inisialisasi dulu

- Jalankan perintah
  > `npx husky-init`
  
 ## Demo App
 - [Production Build](https://nextjs-tailwindcss-boilerplate-teal.vercel.app/)
 - [Development Build](https://nextjs-tailwindcss-boilerplate.netlify.app//)
