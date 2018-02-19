DROP DATABASE IF EXISTS bearsighting;

CREATE DATABASE bearsighting;

USE bearsighting;

CREATE TABLE bears (
  id INT NOT NULL AUTO_INCREMENT,
  bear_type VARCHAR(45) NOT NULL,
  notes VARCHAR(200) NULL,
  zip_code INT NOT NULL,
  num_bears INT NOT NULL,
  date_sighted DATE NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO bears (bear_type, notes, zip_code, num_bears, date_sighted)
VALUES ("grizzly", "It was a big one!", 90210, 3, '2018-02-10');

INSERT INTO bears (bear_type, notes, zip_code, num_bears, date_sighted)
VALUES ("black", "Family of four!", 90045, 4, '2018-02-04');

INSERT INTO bears (bear_type, notes, zip_code, num_bears, date_sighted)
VALUES ("brown", "Family of four!", 90045, 4, '2018-02-04');

-- ### Alternative way to insert more than one row
-- INSERT INTO bears (bear_type, notes, zip_code, num_bears, date_sighted)
-- VALUES ("grizzly", "It was a big one!", 90210, 3, '2018-02-10'), ("black", "Family of four!", 90045, 4, '2018-02-04'), ("brown", "Family of four!", 90045, 4, '2018-02-04');
