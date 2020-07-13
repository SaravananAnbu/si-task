

CREATE TABLE IF NOT EXISTS `Users` (
  `User_id` int(3) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Phone` varchar(50) NOT NULL,
  `Role` varchar(30) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`User_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

