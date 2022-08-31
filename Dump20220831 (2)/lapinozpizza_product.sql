-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: 43.204.134.14    Database: lapinozpizza
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `ProductId` int NOT NULL AUTO_INCREMENT,
  `Amount` decimal(8,2) NOT NULL,
  `ProductName` varchar(40) NOT NULL,
  `ProductDescripation` varchar(40) NOT NULL,
  `ProductPicture` varchar(150) DEFAULT NULL,
  `CategoryId` int NOT NULL,
  PRIMARY KEY (`ProductId`),
  KEY `fk_Product_categotryid` (`CategoryId`),
  CONSTRAINT `fk_Product_categotryid` FOREIGN KEY (`CategoryId`) REFERENCES `category` (`CategoryId`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (2,165.00,'Spring Fling Pizza','Featured pizzas','https://static.uengage.in/uploads/5/image-1578568905.jpeg',1),(3,205.00,'Cheezy-7 Pizza','Featured pizzas','https://static.uengage.in/uploads/5/image-1578568978.jpeg',1),(4,205.00,'Farm Villa Pizza','Featured pizzas','https://static.uengage.in/uploads/5/image-827281-1595939023.jpeg',1),(5,205.00,'Paneer Tikka Butter Masala Pizza','Featured pizzas','https://static.uengage.in/uploads/5/image-1578568992.jpeg',1),(6,245.00,'Korma Special Pizza','Featured pizzas','https://static.uengage.in/uploads/5/image-1578572482.jpeg',1),(7,175.00,'Country Side Pizza','Capsicum, Jalapenos & Olives','https://static.uengage.in/uploads/5/image-1578568918.jpeg',2),(8,175.00,'Gerden Delight Pizza','Onion, Tomatoes, Capsicum','https://static.uengage.in/uploads/5/image-6322-1659522543.jpg',2),(9,175.00,'Lovers Bite Pizza','Mushroom, Olives, Sweet Corns','https://static.uengage.in/uploads/5/image-4735-1659522554.jpg',2),(15,175.00,'test1','test111','https://static.uengage.in/uploads/5/image-1578568918.jpeg',2),(16,165.00,'Country Side Pizza','Featured pizzas','https://static.uengage.in/uploads/5/image-1578568918.jpeg',1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-31 18:05:02
