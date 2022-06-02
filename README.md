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

- install ORM: `cargo install diesel_cli --no-default-features --features postgres`
- Tell Diesel where DB is located in the .env file (not included in GitHub): `DATABASE_URL=postgres://postgres:password@localhost/rest_api`
- use `diesel setup` in your terminal to creare a DB and to create a migrations folder in the server folder.
- use `diesel migration generate create_user` in your terminal to create files for our user migration.
  - Edit the `up.sql` and `down.sql` files located in the generated migrations folder.
- Apply first migration using the `diesel migration run` command in your terminal.
  - Creates a `schema.rs` file in the src folder.
- Add CORS to API (so client can request data): `actix-cors` needs to be added to dependencies. change `main.rs` to match base example.

### Resources:

- Diesel: https://diesel.rs/guides/getting-started
- File Imports: https://hackernoon.com/including-files-and-deeply-directories-in-rust-q35o3yer
