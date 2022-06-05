use chrono::{NaiveDateTime, Utc};
use uuid::Uuid;

pub struct Conversation {
    pub id: Uuid,
    pub created_at: NaiveDateTime,
    pub updated_at: Option<NaiveDateTime>,
}
