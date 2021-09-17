CREATE DATABASE cca;

CREATE TABLE chapters(
  id SERIAL PRIMARY KEY,
  school VARCHAR,
  country VARCHAR,
  state VARCHAR,
  city VARCHAR,
  is_established BOOLEAN,
  established_date DATE,
  region VARCHAR,
  abbreviation VARCHAR,
  abbreviation_alt VARCHAR,
  color_primary VARCHAR,
  color_secondary VARCHAR,
  color_alt VARCHAR,
  color_alt2 VARCHAR,
  page_name VARCHAR
);