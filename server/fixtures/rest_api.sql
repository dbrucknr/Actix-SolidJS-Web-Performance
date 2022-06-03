DROP TABLE "user";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE "user" (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP
);

-- INSERT INTO
--     "user" (email, password)
-- VALUES
--     ('test1@email.com', 'secret'),
--     ('test2@email.com', 'secret'),
--     ('test3@email.com', 'secret'),
--     ('test4@email.com', 'secret'),
--     ('test5@email.com', 'secret');

INSERT INTO "user" (
    email, password
)
SELECT
    md5(random()::text),
    md5(random()::text)
FROM generate_series(1, 1000000);