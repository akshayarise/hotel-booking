-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 19, 2018 at 10:19 AM
-- Server version: 5.7.21-0ubuntu0.17.10.1
-- PHP Version: 7.1.15-0ubuntu0.17.10.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking_details`
--

CREATE TABLE `booking_details` (
  `userid` varchar(100) NOT NULL,
  `roomid` varchar(500) NOT NULL,
  `totalamount` varchar(10000) NOT NULL,
  `paidamount` varchar(10000) NOT NULL,
  `booking_number` varchar(10000) NOT NULL,
  `checkin` varchar(6) NOT NULL,
  `checkout` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `roomlist`
--

CREATE TABLE `roomlist` (
  `room_number` varchar(100) NOT NULL,
  `room_image` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `room_charge` varchar(10000) NOT NULL,
  `roomid` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `status` varchar(1) NOT NULL,
  `f_name` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `email` varchar(25) NOT NULL,
  `phonenumber` varchar(10) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `password` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`status`, `f_name`, `address`, `email`, `phonenumber`, `user_id`, `password`) VALUES
('0', 'akshayarise', 'wb-155 shakarpur delhi-92', 'akshaykumar@rcorp.co.in', '8860500768', '739320', 'abc'),
('1', 'arise', 'wb-159 shakarpur delhi-92', 'akshay@rcorp.co.in', '8860500768', '393844', 'def');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
