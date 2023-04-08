-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 15, 2017 at 04:57 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student`
--

-- --------------------------------------------------------

--
-- Table structure for table `studente`
--

DROP TABLE IF EXISTS `studente`;
CREATE TABLE IF NOT EXISTS `studente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `emri` varchar(20) NOT NULL,
  `mbiemri` varchar(30) NOT NULL,
  `dega` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `studente`
--

INSERT INTO `studente` (`id`, `emri`, `mbiemri`, `dega`) VALUES
(11, 'Jani', 'Simoni', 'Shkenca kompjuterike'),
(12, 'Tomi', 'Devole', 'Administrim biznesi'),
(13, 'Niku', 'Ferhati', 'Finance'),
(14, 'Robert', 'Kona', 'Kimi'),
(15, 'Lulzim', 'Canaj', 'Biologji'),
(16, 'Lorena', 'Deda', 'Matematike '),
(20, 'Gerald', 'Rexho', 'Informatike'),
(21, 'Ervin', 'Vreka', 'Biologji'),
(22, 'Klajda', 'Guci', 'Volejboll');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
