CREATE TABLE IF NOT EXISTS groups (
    id INTEGER PRIMARY KEY NOT Null,
    name TEXT NOT Null
);

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY NOT Null,
    username TEXT NOT Null,
    email TEXT NOT Null UNIQUE,
    group_id INTEGER,
    FOREIGN KEY (group_id) REFERENCES groups(id)
);

INSERT INTO groups(name) VALUES
    ('Group A'),
    ('Group B'),
    ('Group C');

INSERT INTO users(username, email, group_id) VALUES
    ('testuser1', 'testuser1@test.com', 1),
    ('testuser2', 'testuser2@test.com', 2),
    (
        'testuser3',
        'testuser3@test.com',
        (SELECT id AS group_id FROM groups WHERE name = 'Group A')
    );
