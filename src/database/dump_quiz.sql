CREATE DATABASE quiz;

USE quiz;

CREATE TABLE `perguntas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pergunta` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

INSERT INTO `perguntas` VALUES (1,'Qual é o mês do ano que possui a menor quantidade de dias?'),(2,'Quem fundou a microsoft?'),(3,'Qual dos animais não é um vertebrado?');

CREATE TABLE `respostas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `resposta` longtext NOT NULL,
  `id_pergunta` int NOT NULL,
  `resposta_certa` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;


INSERT INTO `respostas` VALUES (1,'DEZEMBRO',1,0),(2,'FEVEREIRO',1,1),(3,'MAIO',1,0),(4,'ABRIL',1,0),(5,'SULTÃO DE BRUNEI',2,0),(6,'AKIO MORITA',2,0),(7,'BILL GATES',2,1),(8,'PRÍNCIPE CHARLES',2,0),(9,'TARTARUGA',3,0),(10,'FORMIGA',3,1),(11,'COBRA',3,0),(12,'SAPO',3,0);
