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
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `city_id` int NOT NULL,
  `city_name` varchar(100) NOT NULL,
  PRIMARY KEY (`city_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'Agra'),(2,'Ahmedabad'),(3,'Ajmer'),(4,'Ambala Cantt'),(5,'Ambala City'),(6,'Amreli'),(7,'Amritsar'),(8,'Anand'),(9,'Ankleshwar'),(10,'Ayodhya'),(11,'Azamgarh'),(12,'Baddi'),(13,'Bahraich'),(14,'Bardoli'),(15,'Batala'),(16,'Bathinda'),(17,'Bangaluru'),(18,'Bharuch'),(19,'Bhavnagar'),(20,'Bhilai'),(21,'Bhilwara'),(22,'Bhuj'),(23,'Bikaner'),(24,'Bilimora'),(25,'Bokaro'),(26,'Borsad'),(27,'Botad'),(28,'Badaun'),(29,'Chandigarh'),(30,'Chennai'),(31,'Cikhali'),(32,'Dahod'),(33,'Daman'),(34,'Dasuya'),(35,'Deesa'),(36,'Delhi'),(37,'Derabassi'),(38,'Faridabad'),(39,'Ferozepur'),(40,'Gandhidham'),(41,'Gandhinagar'),(42,'Ghaziabad'),(43,'Goa'),(44,'Godhra'),(45,'Gondal'),(46,'Gorakhour'),(47,'Greater Noida'),(48,'Gurdaspur'),(49,'Gurgaon'),(50,'Gurugram'),(51,'Guwahati'),(52,'Gwalior'),(53,'Haldwani'),(54,'Halol'),(55,'Himatnagar'),(56,'Hoshiarpur'),(57,'Hyderabad'),(58,'Indore'),(59,'Jabalpur'),(60,'Jaipur'),(61,'Jalandhar'),(62,'Jammu'),(63,'Jamnagar'),(64,'Jamshedpur'),(65,'Jaunpur'),(66,'Jetpur'),(67,'Jodhpur'),(68,'Junagadh'),(69,'Kadi'),(70,'Kalol'),(71,'Kanpur'),(72,'Karjan'),(73,'Karnal'),(74,'kasol'),(75,'Kharar'),(76,'Kochi'),(77,'Kolhapur'),(78,'Kolkata'),(79,'Kota'),(80,'Limbdi'),(81,'Lucknow'),(82,'Ludhiana'),(83,'Mahuva'),(84,'Maliya Miiyana'),(85,'Malaout'),(86,'Manali'),(87,'Mandi'),(88,'Mandi Gobindgarh'),(89,'Mangalore'),(90,'Meerut'),(91,'Mehsana'),(92,'Mohali'),(93,'Moradabad'),(94,'Morbi'),(95,'Mount Abu'),(96,'Mukerian'),(97,'Mumbai'),(98,'Muzaffarpur'),(99,'Nadiad'),(100,'Nagpur'),(101,'Narmada'),(102,'Nashik'),(103,'Navi Mumbai'),(104,'Navsari'),(105,'Noida'),(106,'Palanpur'),(107,'Pali'),(108,'Panchkula'),(109,'Panipat'),(110,'Patan Gujarat'),(111,'Pathankot'),(112,'Patiala'),(113,'Patna'),(114,'Pinjore'),(115,'Porbandar'),(116,'Prayagraj'),(117,'Pune'),(118,'Raebareli'),(119,'Raipur'),(120,'Rajkot'),(121,'Rajnandgaon'),(122,'Rajpura'),(123,'Ranchi'),(124,'Saputara'),(125,'Secundrabad'),(126,'Sikar'),(127,'Siliguri'),(128,'Silvassa'),(129,'Solan'),(130,'Sri Ganganagar'),(131,'Sundernagar'),(132,'Surat'),(133,'Surendranagar'),(134,'Udaipur'),(135,'Vadodara'),(136,'Valsad'),(137,'vapi'),(138,'Varanasi'),(139,'Virar'),(140,'Visnagar'),(141,'Vyara'),(142,'Yamunanagar'),(143,'Zirakpur');
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-31 18:05:04
