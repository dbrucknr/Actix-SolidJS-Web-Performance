table! {
    user (id) {
        id -> Uuid,
        email -> Text,
        first_name -> Nullable<Text>,
        last_name -> Nullable<Text>,
        password -> Text,
        created_at -> Timestamp,
        updated_at -> Nullable<Timestamp>,
    }
}
