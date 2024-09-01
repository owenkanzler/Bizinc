DROP DATABASE IF EXISTS bizinc;

CREATE DATABASE bizinc;

\c bizinc

CREATE TABLE users {
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
}

INSERT INTO users (name, email)
VALUES ('John Doe', 'johndoe@example.com');

SELECT * FROM users;

