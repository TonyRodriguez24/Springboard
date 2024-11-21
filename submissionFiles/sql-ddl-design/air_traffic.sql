-- Drop the database if it exists and create a new one
DROP DATABASE IF EXISTS air_traffic;
CREATE DATABASE air_traffic;

\c air_traffic

CREATE TABLE passengers (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL
);

CREATE TABLE airlines (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  city TEXT NOT NULL,
  country TEXT NOT NULL
);

CREATE TABLE tickets (
  id SERIAL PRIMARY KEY,
  passenger_id INTEGER NOT NULL REFERENCES passengers(id),
  airline_id INTEGER NOT NULL REFERENCES airlines(id),
  from_location_id INTEGER NOT NULL REFERENCES locations(id),
  to_location_id INTEGER NOT NULL REFERENCES locations(id),
  seat TEXT NOT NULL,
  departure TIMESTAMP NOT NULL,
  arrival TIMESTAMP NOT NULL
);

INSERT INTO passengers (first_name, last_name)
VALUES 
  ('Jennifer', 'Finch'),
  ('Thadeus', 'Gathercoal'),
  ('Sonja', 'Pauley'),
  ('Waneta', 'Skeleton'),
  ('Berkie', 'Wycliff'),
  ('Alvin', 'Leathes'),
  ('Cory', 'Squibbes');

INSERT INTO airlines (name)
VALUES 
  ('United'),
  ('British Airways'),
  ('Delta'),
  ('TUI Fly Belgium'),
  ('Air China'),
  ('American Airlines'),
  ('Avianca Brasil');

INSERT INTO locations (city, country)
VALUES 
  ('Washington DC', 'United States'),
  ('Seattle', 'United States'),
  ('Tokyo', 'Japan'),
  ('London', 'United Kingdom'),
  ('Los Angeles', 'United States'),
  ('Las Vegas', 'United States'),
  ('Mexico City', 'Mexico'),
  ('Paris', 'France'),
  ('Casablanca', 'Morocco'),
  ('Dubai', 'UAE'),
  ('Beijing', 'China'),
  ('New York', 'United States'),
  ('Charlotte', 'United States'),
  ('Cedar Rapids', 'United States'),
  ('Chicago', 'United States'),
  ('New Orleans', 'United States'),
  ('Sao Paolo', 'Brazil'),
  ('Santiago', 'Chile');

INSERT INTO tickets (passenger_id, airline_id, from_location_id, to_location_id, seat, departure, arrival)
VALUES
  (1, 1, 1, 2, '33B', '2018-04-08 09:00:00', '2018-04-08 12:00:00'),
  (2, 2, 3, 4, '8A', '2018-12-19 12:45:00', '2018-12-19 16:15:00'),
  (3, 3, 5, 6, '12F', '2018-01-02 07:00:00', '2018-01-02 08:03:00'),
  (1, 3, 2, 7, '20A', '2018-04-15 16:50:00', '2018-04-15 21:00:00'),
  (4, 4, 8, 9, '23D', '2018-08-01 18:30:00', '2018-08-01 21:50:00'),
  (2, 5, 10, 11, '18C', '2018-10-31 01:15:00', '2018-10-31 12:55:00'),
  (5, 1, 12, 13, '9E', '2019-02-06 06:00:00', '2019-02-06 07:47:00'),
  (6, 6, 14, 15, '1A', '2018-12-22 14:42:00', '2018-12-22 15:56:00'),
  (5, 6, 13, 16, '32B', '2019-02-06 16:28:00', '2019-02-06 19:18:00'),
  (7, 7, 17, 18, '10D', '2019-01-20 19:30:00', '2019-01-20 22:45:00');
