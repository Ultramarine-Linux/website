# Ultramarine Linux Website

Self-explanatory. See issues for things to work on.

![Homepage Screenshot](https://github.com/user-attachments/assets/bbd9ac1a-9e79-4dcd-b0d6-d87f8ccb6290)

## Hacking
### Dev Containers

1. Install the Dev Containers extension in your IDE
   - Zed comes with Dev Containers, see [this documentation](https://zed.dev/docs/dev-containers)

   - VSCode users need to install the Dev Containers extension

   - Podman users need to install `podman-docker` from their package manager
   
2. Open your IDE and select the "Reopen in Dev Container" option
3. Run `bun i` to install deps
4. Run `bun dev` or `bun dev --host` to start the dev server
### Flox
1. Get [Flox](https://flox.dev/docs/install-flox/install/)
2. Clone and enter this repo
3. Run `flox activate`

You can run the dev server with `flox services start dev`, or to expose to LAN or Tailnet, run `flox services start dev-host`

### On the Host
1. Install `bun` and `nodejs`
2. Run `bun i` to install deps
3. Run `bun dev` or `bun dev --host` to start the dev server 

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                           |
| :---------------------- | :----------------------------------------------- |
| `bun install`           | Installs dependencies                            |
| `bun run dev`           | Starts local dev server at `localhost:3000`      |
| `bun run build`         | Build your production site to `./dist/`          |
| `bun run preview`       | Preview your build locally, before deploying     |
| `bun run astro ...`     | Run CLI commands like `astro add`, `astro check` |
| `bun run astro --help`  | Get help using the Astro CLI                     |
