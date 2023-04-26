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
    `garden_Status` varchar(150) DEFAULT NULL,
    `garden_Name` varchar(150) DEFAULT NULL,
    `garden_Description` varchar(250) DEFAULT NULL,
    `garden_Area` decimal(10, 2) DEFAULT NULL,
    `garden_Image` varchar(250) DEFAULT NULL,
    PRIMARY KEY (`garden_ID`),
    FOREIGN KEY (`garden_OwnerID`) REFERENCES tbl_user(`user_ID`)
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


CREATE TABLE tbl_soil_moisture (
    `soil_moisture_ID` int(11) NOT NULL AUTO_INCREMENT,
    `soil_moisture_Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `soil_moisture_Value` varchar(255) NOT NULL,
    `soil_moisture_GardenID` int(11) NOT NULL,
    PRIMARY KEY (`soil_moisture_ID`),
    FOREIGN KEY (`soil_moisture_GardenID`) REFERENCES tbl_garden(`garden_ID`)
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
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE tbl_light (
    `light_ID` int(11) NOT NULL AUTO_INCREMENT,
    `light_Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `light_Value` varchar(255) NOT NULL,
    `light_GardenID` int(11) NOT NULL,
    PRIMARY KEY (`light_ID`),
    FOREIGN KEY (`light_GardenID`) REFERENCES tbl_garden(`garden_ID`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;