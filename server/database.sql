CREATE DATABASE cca;

CREATE TABLE chapters (
  chapter_id SERIAL,
  school VARCHAR,
  country VARCHAR,
  state VARCHAR,
  city VARCHAR,
  is_established BOOLEAN DEFAULT false,
  established_date DATE,
  region VARCHAR,
  color_primary VARCHAR,
  color_secondary VARCHAR,
  page_name VARCHAR,
  president_id INT,
  vice_president_id INT,
  PRIMARY KEY (chapter_id),
  FOREIGN KEY (president_id) REFERENCES players(player_id) UNIQUE (president_id),
  FOREIGN KEY (vice_president_id) REFERENCES players(player_id) UNIQUE (vice_president_id)
);

CREATE TABLE chapter_events (
  chapter_id INT NOT NULL,
  event_id INT NOT NULL,
  event_placement VARCHAR,
  PRIMARY KEY (chapter_id),
  FOREIGN KEY (chapter_id) REFERENCES chapters(chapter_id).
  FOREIGN KEY (event_id) REFERENCES events(event_id)
);

CREATE TABLE teams (
  team_id SERIAL,
  chapter_id INT,
  name VARCHAR,
  PRIMARY KEY (team_id),
  FOREIGN KEY (chapter_id) REFERENCES chapters(chapter_id)
);

CREATE TABLE players (
  player_id SERIAL,
  username VARCHAR,
  full_name VARCHAR,
  chapter_id INT,
  team_id INT,
  role VARCHAR,
  rank VARCHAR,
  PRIMARY KEY (player_id),
  FOREIGN KEY (chapter_id) REFERENCES chapters(chapter_id),
  FOREIGN KEY (team_id) REFERENCES teams(team_id)
);

CREATE TABLE events (
  event_id SERIAL,
  series VARCHAR,
  name VARCHAR,
  date DATE,
  PRIMARY KEY (event_id)
);