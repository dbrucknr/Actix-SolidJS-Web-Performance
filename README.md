# To create client:

- npm init solid app-ts client
- npm i solid-app-router

# To create server:

- cargo new server
- add dependencies to `Cargo.toml`
- add Auto Reloading: `cargo install systemfd cargo-watch`

  - add `listenfd = "0.3"` to dependencies

- To start server: **systemfd --no-pid -s h
  ttp::8080 -- cargo watch -x run**
