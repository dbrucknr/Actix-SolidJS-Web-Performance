use actix_web::{get, App, HttpResponse, HttpServer, Responder};
use dotenv::dotenv;
use listenfd::ListenFd;
use std::env;

mod user;

#[get("/")]
async fn index() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let mut listenfd = ListenFd::from_env();
    dotenv().ok();
    env_logger::init_from_env(env_logger::Env::new().default_filter_or("info"));

    // Set up Database Connection Pool:
    // let conn_spec = std::env::var("DATABASE_URL").expect("DATABASE_URL");
    // let manager = ConnectionManager::<PgConnection>::new(conn_spec);
    // let pool = r2d2::Pool::builder()
    //     .build(manager)
    //     .expect("Failed to create pool.");

    log::info!("Starting HTTP server at http://localhost:8080");

    // Declare HTTP server
    let mut server =
        HttpServer::new(move || App::new().configure(user::init_routes).service(index));

    server = match listenfd.take_tcp_listener(0)? {
        Some(listener) => server.listen(listener)?,
        None => {
            let host = env::var("HOST").expect("Host not set");
            let port = env::var("PORT").expect("Port not set");
            server.bind(format!("{}:{}", host, port))?
        }
    };

    server.run().await
}
