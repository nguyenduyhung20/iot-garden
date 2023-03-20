CREATE DATABASE iot_garden_database;

USE iot_garden_database;

CREATE TABLE tbl_user (
    `user_ID` int(11) NOT NULL AUTO_INCREMENT,
    `user_Name` varchar(255) NOT NULL,
    `user_Username` varchar(255) NOT NULL,
    `user_Password` varchar(255) NOT NULL,
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
    `garden_Location` varchar(255) NOT NULL,
    `garden_Status` varchar(150) NOT NULL,
    `garden_name` varchar(150) NOT NULL,
    `garden_decl` varchar(250) NOT NULL,
    `garden_area` decimal(10, 2) NOT NULL,
    `url` varchar(250) DEFAULT NULL,
    PRIMARY KEY (`garden_ID`),
    FOREIGN KEY (`garden_OwnerID`) REFERENCES tbl_user(`user_ID`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE tbl_amdat (
    `amdat_ID` int(11) NOT NULL AUTO_INCREMENT,
    `amdat_Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `amdat_Value` varchar(255) NOT NULL,
    `amdat_GardenID` int(11) NOT NULL,
    `amdat_Status` varchar(150) NOT NULL,
    `amdat_IDcheck` varchar(150) NOT NULL,
    PRIMARY KEY (`amdat_ID`),
    FOREIGN KEY (`amdat_GardenID`) REFERENCES tbl_garden(`garden_ID`)
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

CREATE TABLE tbl_dht11 (
    `dht_ID` int(11) NOT NULL AUTO_INCREMENT,
    `dht_Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `dht_Temp` varchar(255) NOT NULL,
    `dht_Humid` varchar(255) NOT NULL,
    `dht_Status` varchar(150) NOT NULL,
    `dht_GardenID` int(11) NOT NULL,
    `dht_IDcheck` varchar(150) NOT NULL,
    PRIMARY KEY (`dht_ID`),
    FOREIGN KEY (`dht_GardenID`) REFERENCES tbl_garden(`garden_ID`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE tbl_light (
    `light_ID` int(11) NOT NULL AUTO_INCREMENT,
    `light_Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `light_Value` varchar(255) NOT NULL,
    `light_GardenID` int(11) NOT NULL,
    `light_Status` varchar(150) NOT NULL,
    `light_IDcheck` varchar(150) NOT NULL,
    PRIMARY KEY (`light_ID`),
    FOREIGN KEY (`light_GardenID`) REFERENCES tbl_garden(`garden_ID`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE tbl_relay (
    `relay_ID` int(11) NOT NULL AUTO_INCREMENT,
    `relay_Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `relay_Value` varchar(50) NOT NULL,
    `relay_GardenID` int(11) NOT NULL,
    PRIMARY KEY (`relay_ID`),
    FOREIGN KEY (`relay_GardenID`) REFERENCES tbl_garden(`garden_ID`)
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


-- `sp_create_user`
DELIMITER //

CREATE PROCEDURE sp_create_user(
    IN p_user_Name VARCHAR(255),
    IN p_user_Username VARCHAR(255),
    IN p_user_Password VARCHAR(255),
    IN p_user_Address VARCHAR(50),
    IN p_user_Email VARCHAR(255),
    IN p_user_Phone VARCHAR(255)
)
BEGIN
    INSERT INTO tbl_user(user_Name, user_Username, user_Password, user_Address, user_Email, user_Phone)
    VALUES(p_user_Name, p_user_Username, p_user_Password, p_user_Address, p_user_Email, p_user_Phone);
END //

DELIMITER ;

-- `sp_update_user`
DELIMITER //

CREATE PROCEDURE sp_update_user(
    IN p_user_ID INT,
    IN p_user_Name VARCHAR(255),
    IN p_user_Username VARCHAR(255),
    IN p_user_Password VARCHAR(255),
    IN p_user_Address VARCHAR(50),
    IN p_user_Email VARCHAR(255),
    IN p_user_Phone VARCHAR(255)
)
BEGIN
    UPDATE tbl_user
    SET user_Name = p_user_Name,
        user_Username = p_user_Username,
        user_Password = p_user_Password,
        user_Address = p_user_Address,
        user_Email = p_user_Email,
        user_Phone = p_user_Phone
    WHERE user_ID = p_user_ID;
END //

DELIMITER ;

-- `sp_delete_user`
DELIMITER //

CREATE PROCEDURE sp_delete_user(
    IN p_user_ID INT
)
BEGIN
    DELETE FROM tbl_user
    WHERE user_ID = p_user_ID;
END //

DELIMITER ;


-- `sp_create_admin`
DELIMITER //

CREATE PROCEDURE sp_create_admin(
    IN p_admin_Name VARCHAR(255),
    IN p_admin_Username VARCHAR(255),
    IN p_admin_Password VARCHAR(255),
    IN p_admin_Role VARCHAR(50),
    IN p_admin_Email VARCHAR(255)
)
BEGIN
    INSERT INTO tbl_admin(admin_Name, admin_Username, admin_Password, admin_Role, admin_Email)
    VALUES(p_admin_Name, p_admin_Username, p_admin_Password, p_admin_Role, p_admin_Email);
END //

DELIMITER ;


-- `sp_update_admin`
DELIMITER //

CREATE PROCEDURE sp_update_admin(
    IN p_admin_ID INT,
    IN p_admin_Name VARCHAR(255),
    IN p_admin_Username VARCHAR(255),
    IN p_admin_Password VARCHAR(255),
    IN p_admin_Role VARCHAR(50),
    IN p_admin_Email VARCHAR(255)
)
BEGIN
    UPDATE tbl_admin
    SET admin_Name = p_admin_Name,
        admin_Username = p_admin_Username,
        admin_Password = p_admin_Password,
        admin_Role = p_admin_Role,
        admin_Email = p_admin_Email
    WHERE admin_ID = p_admin_ID;
END //

DELIMITER ;


-- `sp_delete_admin`
DELIMITER //

CREATE PROCEDURE sp_delete_admin(
    IN p_admin_ID INT
)
BEGIN
    DELETE FROM tbl_admin
    WHERE admin_ID = p_admin_ID;
END //

DELIMITER ;

-- `sp_create_garden`
DELIMITER //

CREATE PROCEDURE sp_create_garden(
    IN p_garden_OwnerID INT,
    IN p_garden_Location VARCHAR(255),
    IN p_garden_Status VARCHAR(150),
    IN p_garden_name VARCHAR(150),
    IN p_garden_decl VARCHAR(250),
    IN p_garden_area DECIMAL(10, 2),
    IN p_url VARCHAR(250)
)
BEGIN
    INSERT INTO tbl_garden(garden_OwnerID, garden_Location, garden_Status, garden_name, garden_decl, garden_area, url)
    VALUES(p_garden_OwnerID, p_garden_Location, p_garden_Status, p_garden_name, p_garden_decl, p_garden_area, p_url);
END //

DELIMITER ;


--  `sp_update_garden`
DELIMITER //

CREATE PROCEDURE sp_update_garden(
    IN p_garden_ID INT,
    IN p_garden_OwnerID INT,
    IN p_garden_Location VARCHAR(255),
    IN p_garden_Status VARCHAR(150),
    IN p_garden_name VARCHAR(150),
    IN p_garden_decl VARCHAR(250),
    IN p_garden_area DECIMAL(10, 2),
    IN p_url VARCHAR(250)
)
BEGIN
    UPDATE tbl_garden
    SET garden_OwnerID = p_garden_OwnerID,
        garden_Location = p_garden_Location,
        garden_Status = p_garden_Status,
        garden_name = p_garden_name,
        garden_decl = p_garden_decl,
        garden_area = p_garden_area,
        url = p_url
    WHERE garden_ID = p_garden_ID;
END //

DELIMITER ;

-- `sp_delete_garden`
DELIMITER //

CREATE PROCEDURE sp_delete_garden(
    IN p_garden_ID INT
)
BEGIN
    DELETE FROM tbl_garden
    WHERE garden_ID = p_garden_ID;
END //

DELIMITER ;


-- `sp_get_gardens_by_owner`

DELIMITER //

CREATE PROCEDURE sp_get_gardens_by_owner(
    IN p_user_ID INT
)
BEGIN
    SELECT *
    FROM tbl_garden
    WHERE garden_OwnerID = p_user_ID;
END //

DELIMITER ;
```
