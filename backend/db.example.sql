DROP DATABASE IF EXISTS `dg_solutions_users`;
CREATE DATABASE IF NOT EXISTS `dg_solutions_users`;

USE `dg_solutions_users`;

CREATE TABLE IF NOT EXISTS users (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
    birthDate DATE NOT NULL,
	PRIMARY KEY (id)
);
