-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 24, 2024 at 11:46 AM
-- Server version: 8.2.0
-- PHP Version: 8.2.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hifi`
--

-- --------------------------------------------------------

--
-- Table structure for table `ads`
--

CREATE TABLE `ads` (
  `id` int NOT NULL,
  `mitra` varchar(255) NOT NULL,
  `detail` text,
  `gambar_foto` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `ads`
--

INSERT INTO `ads` (`id`, `mitra`, `detail`, `gambar_foto`) VALUES
(1, 'jhsjdshfj', 'sfdfsdf', 'image-1719202345329.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `cafe`
--

CREATE TABLE `cafe` (
  `id` int NOT NULL,
  `nama_cafe` varchar(255) NOT NULL,
  `detail_informasi` text,
  `deskripsi` text,
  `nearby_attraction` varchar(255) DEFAULT NULL,
  `gambar_foto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `cafe`
--

INSERT INTO `cafe` (`id`, `nama_cafe`, `detail_informasi`, `deskripsi`, `nearby_attraction`, `gambar_foto`) VALUES
(5, 'Cafe Kenangans', 'test', 'Cafe ini memiliki suasana alam terbuka. Meja-meja diletakkan di area kafe yang tak dilindungi atap, Tapi ada juga meja yang diletakkan di dalam ruangan agar pengunjung terlindungi dari air hujan. Kesan alami semakin terasa lantaran meja dan kursi tersebut terbuat dari kayu gelondongan. Warnanya coklat khas kayu tak lagi dicat dengan warna lain. Selain itu fasilitas seperti tempat pemesanan, toilet dan musala menggunakan kombinasi tembok semen dan material kayu. Sementara itu, untuk permukaan kafenya dilapisi kerikil dan paving block sebagai tempat berpijak pengunjung yang berjalan. Suasana di Kebun Latte cukup teduh. Itu karena di areanya terdapat puluhan pohon jati solomon. Saat hari mulai gelap, suasananya semakin indah karena di antara pohon tersebut terdapat lampu berwarna kuning.\n\nUntuk menuju ke Kebun Latte, akses masuknya lumayan jauh dari jalan utama. Namun, hal tersebut justru membuat atmosfer alam kafe ini sangat terasa. Meskipun datang saat siang hari, jangan khawatir akan kepanasan karena ada banyak pepohonan rindang di halaman kafe ini.', 'Diskon 10%!!!\n\nKhusus untuk biaya masuk saat anda berkunjung bersama teman-teman!\nJangan lewatkan kesempatan ini untuk berbagi pengalaman seru dan hemat bersama kami.', 'image-1717557458549.svg'),
(8, 'test', 'test', 'test', 'test', 'image-1717568295945.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int NOT NULL,
  `cafe_id` int DEFAULT NULL,
  `author` varchar(255) NOT NULL,
  `content` text,
  `rate` int DEFAULT NULL,
  `gambar_foto` text,
  `published` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `cafe_id`, `author`, `content`, `rate`, `gambar_foto`, `published`) VALUES
(1, 5, 'Rendi Saputras', 'bagus tempatnya', 4, 'image-1719226385490.png', '2024-06-24 10:53:05'),
(2, 5, 'Rendi Saputras', 'testing', 5, 'image-1719227015324.png', '2024-06-24 11:03:35');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `gender` enum('Laki-laki','Perempuan') NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `role` int DEFAULT '1',
  `password` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `gender`, `email`, `phone_number`, `role`, `password`) VALUES
(1, 'ADMIN', 'Testing', 'Perempuan', 'adminfindurcafe@gmail.com', '089999999999', 0, '$2a$12$QT5mwsXXnbauVe0n62mLEe0Sxp4S9nDVYGChrhjdcK0AIzNvO1iH.'),
(2, 'Rendi', 'Saputras', 'Laki-laki', 'rendi@mail.com', '', 1, '$2b$10$RfHLZrOdn5Z8mqn1A0yha.owbgwlmnglEBI0Aimyh99cZKPOGdNzy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ads`
--
ALTER TABLE `ads`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cafe`
--
ALTER TABLE `cafe`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ads`
--
ALTER TABLE `ads`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cafe`
--
ALTER TABLE `cafe`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
