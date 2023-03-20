CREATE TABLE tbl - user (
    `user-ID` int(11) NOT NULL AUTO_INCREMENT,
    `user-Name` varchar(255) NOT NULL,
    `user-Username` varchar(255) NOT NULL,
    `user-Password` varchar(255) NOT NULL,
    `user-Address` varchar(50) DEFAULT NULL,
    `user-Email` varchar(255) DEFAULT NULL,
    `user-Phone` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`user-ID`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE tbl - admin (
    `admin-ID` int(11) NOT NULL AUTO_INCREMENT,
    `admin-Name` varchar(255) NOT NULL,
    `admin-Username` varchar(255) NOT NULL,
    `admin-Password` varchar(255) NOT NULL,
    `admin-Role` varchar(50) NOT NULL,
    `admin-Email` varchar(255) NOT NULL,
    PRIMARY KEY (`admin-ID`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE tbl - garden (
    `garden-ID` int(11) NOT NULL AUTO_INCREMENT,
    `garden-OwnerID` int(11) NOT NULL,
    `garden-Location` varchar(255) NOT NULL,
    `garden-Status` varchar(150) NOT NULL,
    `garden-name` varchar(150) NOT NULL,
    `garden-decl` varchar(250) NOT NULL,
    `garden-area` decimal(10, 2) NOT NULL,
    `url` varchar(250) DEFAULT NULL,
    PRIMARY KEY (`garden-ID`),
    FOREIGN KEY (`garden-OwnerID`) REFERENCES tbl - user(`user-ID`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE tbl - amdat (
    `amdat-ID` int(11) NOT NULL AUTO_INCREMENT,
    `amdat-Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `amdat-Value` varchar(255) NOT NULL,
    `amdat-GardenID` int(11) NOT NULL,
    `amdat-Status` varchar(150) NOT NULL,
    `amdat-IDcheck` varchar(150) NOT NULL,
    PRIMARY KEY (`amdat-ID`),
    FOREIGN KEY (`amdat-GardenID`) REFERENCES tbl - garden(`garden-ID`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE tbl - condition (
    `condition-ID` int(11) NOT NULL AUTO_INCREMENT,
    `condition-Amdat` varchar(255) NOT NULL,
    `condition-Light` varchar(255) NOT NULL,
    `condition-Temp` varchar(255) NOT NULL,
    `condition-Humid` varchar(255) NOT NULL,
    `condition-GardenID` int(11) NOT NULL,
    PRIMARY KEY (`condition-ID`) FOREIGN KEY (`condition-GardenID`) REFERENCES tbl - garden(`garden-ID`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE tbl - dht11 (
    `dht-ID` int(11) NOT NULL AUTO_INCREMENT,
    `dht-Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `dht-Temp` varchar(255) NOT NULL,
    `dht-Humid` varchar(255) NOT NULL,
    `dht-Status` varchar(150) NOT NULL,
    `dht-GardenID` int(11) NOT NULL,
    `dht-IDcheck` varchar(150) NOT NULL,
    PRIMARY KEY (`dht-ID`),
    FOREIGN KEY (`dht-GardenID`) REFERENCES tbl - garden(`garden-ID`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE tbl - light (
    `light-ID` int(11) NOT NULL AUTO_INCREMENT,
    `light-Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `light-Value` varchar(255) NOT NULL,
    `light-GardenID` int(11) NOT NULL,
    `light-Status` varchar(150) NOT NULL,
    `light-IDcheck` varchar(150) NOT NULL,
    PRIMARY KEY (`light-ID`),
    FOREIGN KEY (`light-GardenID`) REFERENCES tbl - garden(`garden-ID`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE tbl - relay (
    `relay-ID` int(11) NOT NULL AUTO_INCREMENT,
    `relay-Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `relay-Value` varchar(50) NOT NULL,
    `relay-GardenID` int(11) NOT NULL,
    PRIMARY KEY (`relay-ID`),
    FOREIGN KEY (`relay-GardenID`) REFERENCES tbl - garden(`garden-ID`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;