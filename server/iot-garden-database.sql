CREATE DATABASE iot_garden_database;

USE iot_garden_database;

CREATE TABLE tbl_user (
    `user_ID` int(11) NOT NULL AUTO_INCREMENT,
    `user_Name` varchar(255) NOT NULL,
    `user_Username` varchar(255) NOT NULL,
    `user_Password` varchar(255) NOT NULL,
    `user_Role` enum('USER', 'ADMIN') NOT NULL DEFAULT 'USER',
    `user_Address` varchar(50) DEFAULT NULL,
    `user_Email` varchar(255) DEFAULT NULL,
    `user_Phone` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`user_ID`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE tbl_admin (
    `admin_ID` int(11) NOT NULL AUTO_INCREMENT,
    `admin_Name` varchar(255) NOT NULL,
    `admin_Username` varchar(255) NOT NULL,
    `admin_Password` varchar(255) NOT NULL,
    `admin_Role` varchar(50) NOT NULL,
    `admin_Email` varchar(255) NOT NULL,
    PRIMARY KEY (`admin_ID`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE tbl_garden (
    `garden_ID` int(11) NOT NULL AUTO_INCREMENT,
    `garden_OwnerID` int(11) NOT NULL,
    `garden_Location` varchar(255) DEFAULT NULL,
    `garden_Name` varchar(150) DEFAULT NULL,
    `garden_Description` varchar(250) DEFAULT NULL,
    `garden_Area` decimal(10, 2) DEFAULT NULL,
    `garden_Image` varchar(250) DEFAULT NULL,
    PRIMARY KEY (`garden_ID`),
    FOREIGN KEY (`garden_OwnerID`) REFERENCES tbl_user(`user_ID`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE tbl_soil_moisture (
    `soil_moisture_ID` int(11) NOT NULL AUTO_INCREMENT,
    `soil_moisture_Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `soil_moisture_Value` varchar(255) NOT NULL,
    `soil_moisture_GardenID` int(11) NOT NULL,
    PRIMARY KEY (`soil_moisture_ID`),
    FOREIGN KEY (`soil_moisture_GardenID`) REFERENCES tbl_garden(`garden_ID`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE tbl_condition (
    `condition_ID` int(11) NOT NULL AUTO_INCREMENT,
    `condition_Amdat` varchar(255) NOT NULL,
    `condition_Light` varchar(255) NOT NULL,
    `condition_Temp` varchar(255) NOT NULL,
    `condition_Humid` varchar(255) NOT NULL,
    `condition_GardenID` int(11) NOT NULL,
    PRIMARY KEY (`condition_ID`), 
    FOREIGN KEY (`condition_GardenID`) REFERENCES tbl_garden(`garden_ID`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE tbl_dht20 (
    `dht_ID` int(11) NOT NULL AUTO_INCREMENT,
    `dht_Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `dht_Temp` varchar(255) NOT NULL,
    `dht_Humid` varchar(255) NOT NULL,
    `dht_GardenID` int(11) NOT NULL,
    PRIMARY KEY (`dht_ID`),
    FOREIGN KEY (`dht_GardenID`) REFERENCES tbl_garden(`garden_ID`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE tbl_water_pump (
    `water_pump_ID` int(11) NOT NULL AUTO_INCREMENT,
    `water_pump_Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `water_pump_Value` varchar(255) NOT NULL,
    `water_pump_GardenID` int(11) NOT NULL,
    PRIMARY KEY (`water_pump_ID`),
    FOREIGN KEY (`water_pump_GardenID`) REFERENCES tbl_garden(`garden_ID`)
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE tbl_light (
    `light_ID` int(11) NOT NULL AUTO_INCREMENT,
    `light_Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `light_Value` varchar(255) NOT NULL,
    `light_GardenID` int(11) NOT NULL,
    PRIMARY KEY (`light_ID`),
    FOREIGN KEY (`light_GardenID`) REFERENCES tbl_garden(`garden_ID`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;


INSERT INTO tbl_user (user_Name, user_Username, user_Password, user_Address, user_Email, user_Phone) VALUES 
('John Doe', 'johndoe', 'password', '123 Main St, Anytown USA', 'johndoe@example.com', '555-1234'),
('Jane Smith', 'janesmith', 'password', '456 Oak St, Anytown USA', 'janesmith@example.com', '555-5678'),
('Bob Johnson', 'bobjohnson', 'password', '789 Elm St, Anytown USA', 'bobjohnson@example.com', '555-9012'),
('Samantha Lee', 'samanthalee', 'password', '321 Pine St, Anytown USA', 'samanthalee@example.com', '555-3456'),
('David Kim', 'davidkim', 'password', '654 Maple St, Anytown USA', 'davidkim@example.com', '555-7890'),
('Emily Chen', 'emilychen', 'password', '987 Cedar St, Anytown USA', 'emilychen@example.com', '555-2345'),
('Michael Brown', 'michaelbrown', 'password', '246 Birch St, Anytown USA', 'michaelbrown@example.com', '555-6789'),
('Jessica Davis', 'jessicadavis', 'password', '135 Walnut St, Anytown USA', 'jessicadavis@example.com', '555-0123'),
('William Wilson', 'williamwilson', 'password', '864 Oak St, Anytown USA', 'williamwilson@example.com', '555-4567'),
('Olivia Taylor', 'oliviataylor', 'password', '753 Pine St, Anytown USA', 'oliviataylor@example.com', '555-8901'),
('James Lee', 'jameslee', 'password', '246 Maple St, Anytown USA', 'jameslee@example.com', '555-2345'),
('Sophia Johnson', 'sophiajohnson', 'password', '975 Cedar St, Anytown USA', 'sophiajohnson@example.com', '555-6789'),
('Daniel Kim', 'danielkim', 'password', '864 Birch St, Anytown USA', 'danielkim@example.com', '555-0123'),
('Isabella Chen', 'isabellachen', 'password', '753 Walnut St, Anytown USA', 'isabellachen@example.com', '555-4567'),
('Ethan Brown', 'ethanbrown', 'password', '642 Oak St, Anytown USA', 'ethanbrown@example.com', '555-8901'),
('Mia Davis', 'miadavis', 'password', '531 Pine St, Anytown USA', 'miadavis@example.com', '555-2345'),
('Alexander Wilson', 'alexanderwilson', 'password', '420 Maple St, Anytown USA', 'alexanderwilson@example.com', '555-6789'),
('Ava Taylor', 'avataylor', 'password', '319 Cedar St, Anytown USA', 'avataylor@example.com', '555-0123'),
('Benjamin Lee', 'benjaminlee', 'password', '208 Birch St, Anytown USA', 'benjaminlee@example.com', '555-4567'),
('Charlotte Johnson', 'charlottejohnson', 'password', '097 Walnut St, Anytown USA', 'charlottejohnson@example.com', '555-8901');

INSERT INTO tbl_garden (garden_OwnerID, garden_Location, garden_Status, garden_name, garden_decl, garden_area, url) VALUES 
(1, '123 Main St, Anytown USA', 'Active', 'John\'s Garden', 'A small garden with a variety of vegetables and herbs.', 50.00, 'https://example.com/johnsgarden'),
(2, '456 Oak St, Anytown USA', 'Active', 'Jane\'s Garden', 'A large garden with a mix of flowers and vegetables.', 100.00, 'https://example.com/janesgarden'),
(3, '789 Elm St, Anytown USA', 'Inactive', 'Bob\'s Garden', 'A small garden with a focus on tomatoes and peppers.', 25.00, 'https://example.com/bobsgarden'),
(4, '321 Pine St, Anytown USA', 'Active', 'Samantha\'s Garden', 'A medium-sized garden with a mix of flowers and vegetables.', 75.00, 'https://example.com/samanthasgarden'),
(5, '654 Maple St, Anytown USA', 'Inactive', 'David\'s Garden', 'A small garden with a focus on herbs and spices.', 20.00, 'https://example.com/davidsgarden'),
(6, '987 Cedar St, Anytown USA', 'Active', 'Emily\'s Garden', 'A large garden with a mix of flowers and vegetables.', 125.00, 'https://example.com/emilysgarden'),
(7, '246 Birch St, Anytown USA', 'Inactive', 'Michael\'s Garden', 'A small garden with a focus on cucumbers and squash.', 30.00, 'https://example.com/michaelsgarden'),
(8, '135 Walnut St, Anytown USA', 'Active', 'Jessica\'s Garden', 'A medium-sized garden with a mix of flowers and vegetables.', 60.00, 'https://example.com/jessicasgarden'),
(9, '864 Oak St, Anytown USA', 'Inactive', 'William\'s Garden', 'A small garden with a focus on lettuce and spinach.', 15.00, 'https://example.com/williamsgarden'),
(10, '753 Pine St, Anytown USA', 'Active', 'Olivia\'s Garden', 'A large garden with a mix of flowers and vegetables.', 150.00, 'https://example.com/oliviasgarden'),
(11, '246 Maple St, Anytown USA', 'Inactive', 'James\'s Garden', 'A small garden with a focus on carrots and beets.', 35.00, 'https://example.com/jamessgarden'),
(12, '975 Cedar St, Anytown USA', 'Active', 'Sophia\'s Garden', 'A medium-sized garden with a mix of flowers and vegetables.', 70.00, 'https://example.com/sophiasgarden'),
(13, '864 Birch St, Anytown USA', 'Inactive', 'Daniel\'s Garden', 'A small garden with a focus on radishes and turnips.', 18.00, 'https://example.com/danielsgarden'),
(14, '753 Walnut St, Anytown USA', 'Active', 'Isabella\'s Garden', 'A large garden with a mix of flowers and vegetables.', 175.00, 'https://example.com/isabellasgarden'),
(15, '642 Oak St, Anytown USA', 'Inactive', 'Ethan\'s Garden', 'A small garden with a focus on zucchini and eggplant.', 28.00, 'https://example.com/ethansgarden'),
(16, '531 Pine St, Anytown USA', 'Active', 'Mia\'s Garden', 'A medium-sized garden with a mix of flowers and vegetables.', 65.00, 'https://example.com/miasgarden'),
(17, '420 Maple St, Anytown USA', 'Inactive', 'Alexander\'s Garden', 'A small garden with a focus on onions and garlic.', 22.00, 'https://example.com/alexandersgarden'),
(18, '319 Cedar St, Anytown USA', 'Active', 'Ava\'s Garden', 'A large garden with a mix of flowers and vegetables.', 200.00, 'https://example.com/avasgarden'),
(19, '208 Birch St, Anytown USA', 'Inactive', 'Benjamin\'s Garden', 'A small garden with a focus on peppers and tomatoes.', 27.00, 'https://example.com/benjaminsgarden'),
(20, '097 Walnut St, Anytown USA', 'Active', 'Charlotte\'s Garden', 'A medium-sized garden with a mix of flowers and vegetables.', 80.00, 'https://example.com/charlottesgarden');

