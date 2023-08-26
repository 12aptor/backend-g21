-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: db_jobs_g21
-- ------------------------------------------------------
-- Server version	5.7.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `web_oferta`
--

DROP TABLE IF EXISTS `web_oferta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `web_oferta` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `modalidad` varchar(50) NOT NULL,
  `categoria_id` bigint(20) NOT NULL,
  `ubicacion_id` bigint(20) NOT NULL,
  `descripcion` longtext,
  `experiencia_cantidad` int(11) NOT NULL,
  `experiencia_detalle` longtext,
  `fecha_cierre` date DEFAULT NULL,
  `fecha_registro` date NOT NULL,
  `puesto` varchar(200) DEFAULT NULL,
  `responsabilidades` longtext,
  `salario` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `web_oferta_categoria_id_8aa3ea81_fk_web_categoria_id` (`categoria_id`),
  KEY `web_oferta_ubicacion_id_6b864857_fk_web_ubicacion_id` (`ubicacion_id`),
  CONSTRAINT `web_oferta_categoria_id_8aa3ea81_fk_web_categoria_id` FOREIGN KEY (`categoria_id`) REFERENCES `web_categoria` (`id`),
  CONSTRAINT `web_oferta_ubicacion_id_6b864857_fk_web_ubicacion_id` FOREIGN KEY (`ubicacion_id`) REFERENCES `web_ubicacion` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `web_oferta`
--

LOCK TABLES `web_oferta` WRITE;
/*!40000 ALTER TABLE `web_oferta` DISABLE KEYS */;
INSERT INTO `web_oferta` VALUES (1,'presencial',2,1,'Importante empresa del sector hidrocarburo, con presencia en todo el país, se encuentra en búsqueda de un ANALISTA PROGRAMADOR -SISTEMAS (Oficina Central – El Polo, Surco).',3,'Bachiller de la carrera de Ingeniería de Sistemas.\r\n 2 años de experiencia en funciones similares\r\n Conocimiento de herramientas de desarrollo .Net (C#, Visual Basic)(Requerido).\r\n Conocimiento o familiarizado con los frameworks y bibliotecas populares utilizados en el desarrollo web,como React, Angular, HTML, CSS, JavaScript, Bootstrap y jQuery (Requerido).\r\n Conocimiento en manejadores de base de datos SQL Server (Requerido).\r\n Conocimiento en diseño Web, manejo de colores, manejo de imágenes. Experiencia de usuario (UX) y diseño de interfaz (UI) (Requerido).\r\nConocimiento en desarrollo de Arquitectura multicapas (Requerido)\r\nConocimiento de control de versiones Git o Team Foundation (Deseable).\r\nFamiliarizado con los conceptos básicos de los servidores web, configuración y administración en un entorno de desarrollo local.(Requerido).\r\n Conocimientos de Firewall Fortinet (Deseable)\r\n Conocimiento en explotación de datos en Dashboard o Power BI (Deseable).','2023-08-31','2023-08-24','Analista programador/a de sistemas','Realizar las funcionales de Front-end (Cliente):\r\n Interfaz de usuario (UI): Diseño y desarrollo de la interfaz de usuario, incluyendo el diseño visual, la disposición de los elementos y la interacción del usuario.\r\n Desarrollo web: Implementación del diseño de la interfaz de usuario utilizando tecnologías web como HTML, CSS y JavaScript.\r\n Experiencia de usuario (UX): Diseño y optimización de la experiencia del usuario para que la aplicación sea intuitiva y fácil de usar.',1000.00),(2,'remoto',1,1,NULL,1,NULL,NULL,'2023-08-25','REACT DEVELOPER',NULL,1000.00),(3,'remoto',1,3,NULL,3,NULL,NULL,'2023-08-25','ANGULAR DEVELOPER',NULL,2000.00),(4,'presencial',2,1,NULL,2,NULL,NULL,'2023-08-25','PHP DEVELOPER',NULL,3000.00),(5,'hibrido',2,2,NULL,5,NULL,NULL,'2023-08-25','JAVA DEVELOPER',NULL,5000.00),(6,'remoto',2,3,NULL,5,NULL,NULL,'2023-08-25','PYTHON DEVELOPER',NULL,5000.00);
/*!40000 ALTER TABLE `web_oferta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `web_ubicacion`
--

DROP TABLE IF EXISTS `web_ubicacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `web_ubicacion` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `fecha_registro` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `web_ubicacion`
--

LOCK TABLES `web_ubicacion` WRITE;
/*!40000 ALTER TABLE `web_ubicacion` DISABLE KEYS */;
INSERT INTO `web_ubicacion` VALUES (1,'PERU','2023-08-25 03:37:55.504712'),(2,'ARGENTINA','2023-08-25 03:38:02.119484'),(3,'COLOMBIA','2023-08-25 03:38:06.823507');
/*!40000 ALTER TABLE `web_ubicacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `web_categoria`
--

DROP TABLE IF EXISTS `web_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `web_categoria` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `fecha_registro` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `web_categoria`
--

LOCK TABLES `web_categoria` WRITE;
/*!40000 ALTER TABLE `web_categoria` DISABLE KEYS */;
INSERT INTO `web_categoria` VALUES (1,'FRONTEND','2023-08-25 03:37:44.217552'),(2,'BACKEND','2023-08-25 03:37:48.592688');
/*!40000 ALTER TABLE `web_categoria` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-25 19:58:01
