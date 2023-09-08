DROP TABLE IF EXISTS `tbl_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_category`
--

LOCK TABLES `tbl_category` WRITE;
/*!40000 ALTER TABLE `tbl_category` DISABLE KEYS */;
INSERT INTO `tbl_category` VALUES (1,'polos'),(2,'poleras'),(3,'gorros');
/*!40000 ALTER TABLE `tbl_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_product`
--

DROP TABLE IF EXISTS `tbl_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `description` varchar(254) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `image` varchar(254) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `tbl_product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `tbl_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_product`
--

LOCK TABLES `tbl_product` WRITE;
/*!40000 ALTER TABLE `tbl_product` DISABLE KEYS */;
INSERT INTO `tbl_product` VALUES (1,'polo python','polo python dev',100,'https://ingoodcompany.asia/images/products_attr_img/matrix/default.png',10,1),(2,'polo react','polo react js dev',100,'https://ingoodcompany.asia/images/products_attr_img/matrix/default.png',0,1),(4,'polo angular dev','polo angular js dev',100,'https://ingoodcompany.asia/images/products_attr_img/matrix/default.png',0,1),(5,'polo angular dev','polo angular js dev',100,'https://ingoodcompany.asia/images/products_attr_img/matrix/default.png',0,1),(6,'polo angular dev','polo angular js dev',100,'https://ingoodcompany.asia/images/products_attr_img/matrix/default.png',0,1),(7,'manzana','manzana',1,'https://ingoodcompany.asia/images/products_attr_img/matrix/default.png',0,1),(8,'pera','pera',1,'http://127.0.0.1:5000/static/uploads/orange.webp',0,1),(9,'POLERA PYTHON 2023','POLERA PARA PROGRAMADOR PYTHON 2023',100,'http://localhost:5000/static/uploads/polerapython.webp',0,2);
/*!40000 ALTER TABLE `tbl_product` ENABLE KEYS */;
UNLOCK TABLES;
