#[macro_use]
extern crate diesel;

use actix_web::{get, middleware, post, web, App, Error, HttpResponse, HttpServer, Responder};
use diesel::prelude::*;
use diesel::r2d2::{self, ConnectionManager};
use listenfd::ListenFd;
// use uuid::Uuid;

// type DbPool = r2d2::Pool<ConnectionManager<PgConnection>>;

#[get("/")]
async fn index() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let mut listenfd = ListenFd::from_env();
    dotenv::dotenv().ok();
    env_logger::init_from_env(env_logger::Env::new().default_filter_or("info"));

    // Set up Database Connection Pool:
    // let conn_spec = std::env::var("DATABASE_URL").expect("DATABASE_URL");
    // let manager = ConnectionManager::<PgConnection>::new(conn_spec);
    // let pool = r2d2::Pool::builder()
    //     .build(manager)
    //     .expect("Failed to create pool.");

    log::info!("starting HTTP server at http://localhost:8080");

    // Declare HTTP server
    let mut server = HttpServer::new(move || {
        App::new()
            // set up DB pool to be used with web::Data<Pool> extractor
            // .app_data(web::Data::new(pool.clone()))
            // .wrap(middleware::Logger::default())
            .service(index)
    });

    server = match listenfd.take_tcp_listener(0)? {
        Some(listener) => server.listen(listener)?,
        None => server.bind("127.0.0.1:8080")?,
    };

    // Start HTTP server
    server.run().await
}
