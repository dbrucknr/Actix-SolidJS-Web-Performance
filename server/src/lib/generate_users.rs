extern crate diesel;

#[path = "../db.rs"]
mod db;

use diesel::PgConnection;

// #[path = "../schema.rs"]
use crate::schema::user;
use crate::user::{User, UserMessage};

fn main() {
    db::init();

    let conn = db::connection();
    create_users(conn);
}

fn create_users(conn: &PgConnection) {
    let users = [
        UserMessage {
            email: "test@email.com".to_string(),
            password: "secret".to_string(),
        },
        UserMessage {
            email: "test2@email.com".to_string(),
            password: "secret".to_string(),
        },
    ];

    diesel::insert_into(user::table)
        .values(&users)
        .get_results(conn)
        .expect("Error saving users")
}
