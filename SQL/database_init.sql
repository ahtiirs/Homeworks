-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema HomeWork
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema HomeWork
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `HomeWork` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `HomeWork` ;

-- -----------------------------------------------------
-- Table `HomeWork`.`courses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HomeWork`.`courses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `dateDeleted` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 49
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `HomeWork`.`groups`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HomeWork`.`groups` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `dateDeleted` TIMESTAMP(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 16
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `HomeWork`.`teachers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HomeWork`.`teachers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `dateDeleted` TIMESTAMP(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `HomeWork`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HomeWork`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NULL DEFAULT NULL,
  `lastName` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `role` VARCHAR(45) NULL DEFAULT NULL,
  `dateCreated` TIMESTAMP(1) NULL DEFAULT NULL,
  `dateUpdated` TIMESTAMP(1) NULL DEFAULT NULL,
  `dateDeleted` TIMESTAMP(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `HomeWork`.`homeworks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HomeWork`.`homeworks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(145) NULL DEFAULT NULL,
  `dueDate` TIMESTAMP(1) NULL DEFAULT NULL,
  `dateCreated` TIMESTAMP(1) NOT NULL,
  `dateDeleted` TIMESTAMP(1) NULL DEFAULT NULL,
  `users_id` INT NOT NULL,
  `teachers_id` INT NOT NULL,
  `courses_id` INT NOT NULL,
  `groups_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_homeworks_users_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_homeworks_teachers1_idx` (`teachers_id` ASC) VISIBLE,
  INDEX `fk_homeworks_courses1_idx` (`courses_id` ASC) VISIBLE,
  INDEX `fk_homeworks_groups1_idx` (`groups_id` ASC) VISIBLE,
  CONSTRAINT `fk_homeworks_courses1`
    FOREIGN KEY (`courses_id`)
    REFERENCES `HomeWork`.`courses` (`id`),
  CONSTRAINT `fk_homeworks_groups1`
    FOREIGN KEY (`groups_id`)
    REFERENCES `HomeWork`.`groups` (`id`),
  CONSTRAINT `fk_homeworks_teachers1`
    FOREIGN KEY (`teachers_id`)
    REFERENCES `HomeWork`.`teachers` (`id`),
  CONSTRAINT `fk_homeworks_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `HomeWork`.`users` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
