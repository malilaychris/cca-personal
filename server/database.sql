CREATE DATABASE cca;

/*
  Chapters
*/

CREATE TABLE chapter (
  chapter_id SERIAL,
  school VARCHAR,
  country VARCHAR,
  state VARCHAR,
  city VARCHAR,
  is_established BOOLEAN,
  established_date DATE,
  region VARCHAR,
  president_id INT,
  vice_president_id int,
  PRIMARY KEY (chapter_id),
  FOREIGN KEY (president_id) REFERENCES player(player_id) UNIQUE (president_id),
  FOREIGN KEY (vice_president_id) REFERENCES player(player_id) UNIQUE (vice_president_id)
);

CREATE TABLE chapter_colors (
  chapter_id INT NOT NULL,
  color_primary VARCHAR,
  color_secondary VARCHAR,
  color_alt VARCHAR,
  color_alt2 VARCHAR,
  PRIMARY KEY (chapter_id),
  FOREIGN KEY (chapter_id) REFERENCES chapter(chapter_id)
);

CREATE TABLE chapter_abbreviations (
  chapter_id INT NOT NULL,
  page_name VARCHAR,
  acronym VARCHAR,
  acronym_secondary VARCHAR,
  acronym_tertiary VARCHAR,
  short VARCHAR,
  short_secondary VARCHAR,
  short_tertiary VARCHAR,
  PRIMARY KEY (chapter_id),
  FOREIGN KEY (chapter_id) REFERENCES chapter(chapter_id)
);

CREATE TABLE chapter_events (
  chapter_id INT NOT NULL,
  event_id INT NOT NULL,
  event_placement VARCHAR,
  PRIMARY KEY (chapter_id),
  FOREIGN KEY (chapter_id) REFERENCES chapter(chapter_id).
  FOREIGN KEY (event_id) REFERENCES event(event_id)
);

/*
  Teams
*/

CREATE TABLE team (
  team_id SERIAL,
  chapter_id INT,
  name VARCHAR,
  is_varsity BOOLEAN,
  PRIMARY KEY (team_id),
  FOREIGN KEY (chapter_id) REFERENCES chapter(chapter_id)
);

/*
  Players
*/

CREATE TABLE player (
  player_id SERIAL,
  username VARCHAR,
  full_name VARCHAR,
  chapter_id INT,
  is_president BOOLEAN DEFAULT false,
  is_vice_president BOOLEAN DEFAULT false,
  team_id INT,
  is_captain BOOLEAN DEFAULT false,
  is_sub BOOLEAN DEFAULT false,
  is_coach BOOLEAN DEFAULT false,
  rank VARCHAR,
  discord VARCHAR,
  steam VARCHAR,
  epic VARCHAR,
  is_alum BOOLEAN DEFAULT false,
  is_notable_alum BOOLEAN DEFAULT false,
  PRIMARY KEY (player_id),
  FOREIGN KEY (chapter_id) REFERENCES chapter(chapter_id),
  FOREIGN KEY (team_id) REFERENCES team(team_id)
);

/*
  Events
*/

CREATE TABLE event (
  event_id SERIAL,
  series VARCHAR,
  name VARCHAR,
  date DATE,
  PRIMARY KEY (event_id)
);