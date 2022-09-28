DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  description TEXT,
  comments TEXT,
  timer TIMESTAMP
);