-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2020-07-02 17:45:00
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `mydb2003`
--

-- --------------------------------------------------------

--
-- 表的结构 `reg`
--

CREATE TABLE `reg` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_phone` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `reg`
--

INSERT INTO `reg` (`user_id`, `user_name`, `user_password`, `user_phone`) VALUES
(10001, 'zhansan', '123456', 15070740977),
(10002, '川普同志', '123456', 15070740977),
(10003, '12312', '123123', 123123),
(10004, 'PDD', '123456', 12345678910);

--
-- 转储表的索引
--

--
-- 表的索引 `reg`
--
ALTER TABLE `reg`
  ADD PRIMARY KEY (`user_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `reg`
--
ALTER TABLE `reg`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10005;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
