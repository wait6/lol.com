-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2020-07-02 17:45:06
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
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(10) NOT NULL COMMENT '商品id',
  `title` varchar(255) NOT NULL COMMENT '商品标题',
  `price` decimal(20,2) NOT NULL COMMENT 'Q币价',
  `weixin` decimal(20,2) NOT NULL COMMENT '微信价',
  `pic` text NOT NULL COMMENT '商品图片',
  `details` text NOT NULL COMMENT '商品详情',
  `num` int(11) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `weixin`, `pic`, `details`, `num`) VALUES
(2, '差不多到时间了!', '20.00', '19.40', '[{\"title\":\"big\",\"src\":\"/images/cw-content10.jpg\"},{\"title\":\"small\",\"src\":\"/images/cw-content10-1.jpg\"}]', '差不多到时间了!', 1),
(1, '使不得，使不得!', '20.00', '19.40', '[{\"title\":\"big\",\"src\":\"/images/cw-content09.jpg\"},{\"title\":\"small\",\"src\":\"/images/cw-content09-1.jpg\"}]', '使不得，使不得!', 1),
(3, '征服者 韦鲁斯', '49.00', '47.53', '[{\"title\":\"big\",\"src\":\"/images/cw-content11.jpg\"},{\"title\":\"small\",\"src\":\"/images/cw-content11.jpg\"}]', '征服者 韦鲁斯', 1),
(4, '防暴士兵 格雷福斯', '69.00', '66.93', '[{\"title\":\"big\",\"src\":\"/images/cw-content12.jpg\"},{\"title\":\"small\",\"src\":\"/images/cw-content12.jpg\"}]', '防暴士兵 格雷福斯', 1),
(5, '西部天使 赛娜 炫彩礼包', '181.71', '176.25', '[{\"title\":\"big\",\"src\":\"/images/cw-content13.jpg\"},{\"title\":\"small\",\"src\":\"/images/cw-content13-1.jpg\"}]', '西部天使 赛娜 炫彩礼包：西部天使 赛娜+西部天使 赛娜 图标+西部天使 赛娜 贝列之锐+西部天使 赛娜 路西法之逆+西部天使 赛娜 布耶尔之疗+西部天使 赛娜 贝利尔之怠+西部天使 赛娜 加麦基之礼+涤魂圣枪 赛娜', 1),
(6, '西部天使 艾瑞莉娅 炫彩礼包', '195.21', '189.35', '[{\"title\":\"big\",\"src\":\"/images/cw-content14.jpg\"},{\"title\":\"small\",\"src\":\"/images/cw-content14-1.jpg\"}]', '西部天使 艾瑞莉娅 炫彩礼包：西部天使 艾瑞莉娅+西部天使 艾瑞莉娅 图标+西部天使 艾瑞莉娅 贝列之锐+西部天使 艾瑞莉娅 布耶尔之疗+西部天使 艾瑞莉娅 路西法之逆+西部天使 艾瑞莉娅 贝利尔之怠+西部天使 艾瑞莉娅 巴耶力之生+西部天使 艾瑞莉娅 欧利昂之威+西部天使 艾瑞莉娅 瓦沙克之言+刀锋舞者 艾瑞莉娅', 1),
(7, '荒野幽灵 费德提克 炫彩礼包', '174.00', '168.78', '[{\"title\":\"big\",\"src\":\"/images/cw-content15.jpg\"},{\"title\":\"small\",\"src\":\"/images/cw-content15-1.jpg\"}]', '荒野幽灵 费德提克 炫彩礼包：荒野幽灵 费德提克+荒野幽灵 费德提克 贝列之锐+荒野幽灵 费德提克 欧利昂之威+荒野幽灵 费德提克 瓦沙克之言+荒野幽灵 费德提克 巴耶力之生+荒野幽灵 费德提克 加麦基之礼+荒野幽灵 费德提克 华利弗之援+荒野幽灵 费德提克 亚蒙之隐+荒野幽灵 费德提克 拜恩之势+远古恐惧 费德提克', 1),
(8, '西部魔影 卢锡安 炫彩礼包', '165.71', '160.73', '[{\"title\":\"big\",\"src\":\"/images/cw-content16.jpg\"},{\"title\":\"small\",\"src\":\"/images/cw-content16-1.jpg\"}]', '西部魔影 卢锡安 炫彩礼包：西部魔影 卢锡安+西部魔影 卢锡安 贝列之锐+西部魔影 卢锡安 巴耶力之生+西部魔影 卢锡安 布耶尔之疗+西部魔影 卢锡安 瓦沙克之言+西部魔影 卢锡安 贝利尔之怠+圣枪游侠 卢锡安', 1),
(9, '西部牛仔 烬 炫彩礼包', '189.71', '184.01', '[{\"title\":\"big\",\"src\":\"/images/cw-content17.jpg\"},{\"title\":\"small\",\"src\":\"/images/cw-content17-1.jpg\"}]', '西部牛仔 烬 炫彩礼包：西部牛仔 烬+西部牛仔 烬 贝列之锐+西部牛仔 烬 瓦沙克之言+西部牛仔 烬 欧利昂之威+西部牛仔 烬 布耶尔之疗+西部牛仔 烬 巴耶力之生+西部牛仔 烬 亚蒙之隐+西部牛仔 烬 路西法之逆+西部牛仔 烬 贝利尔之怠+戏命师 烬', 1),
(10, '西部天使 艾瑞莉娅 觅魂版', '119.00', '115.43', '[{\"title\":\"big\",\"src\":\"/images/cw-content18.jpg\"},{\"title\":\"small\",\"src\":\"/images/cw-content18-1.jpg\"}]', '西部天使 艾瑞莉娅 觅魂版：西部天使 艾瑞莉娅+西部天使 艾瑞莉娅 图标+刀锋舞者 艾瑞莉娅', 1),
(11, '西部天使 赛娜 觅魂版', '141.50', '137.25', '[{\"title\":\"big\",\"src\":\"/images/cw-content19.jpg\"},{\"title\":\"small\",\"src\":\"/images/cw-content19-1.jpg\"}]', '西部天使 赛娜 觅魂版：西部天使 赛娜+西部天使 赛娜 图标+涤魂圣枪 赛娜', 1),
(12, '西部天使(2020)图标', '12.50', '12.12', '[{\"title\":\"big\",\"src\":\"/images/cw-content20.jpg\"},{\"title\":\"small\",\"src\":\"/images/cw-content20-1.jpg\"}]', '西部天使(2020)图标', 1),
(13, '西部天使 赛娜 加麦基之礼', '20.00', '19.40', '[{\"title\":\"big\",\"src\":\"/images/cw-content21.jpg\"},{\"title\":\"small\",\"src\":\"/images/cw-content21-1.jpg\"}]', '西部天使 赛娜 加麦基之礼', 1),
(14, '西部天使 赛娜 布耶尔之疗', '20.00', '19.40', '[{\"title\":\"big\",\"src\":\"/images/cw-content22.jpg\"},{\"title\":\"small\",\"src\":\"/images/cw-content22-1.jpg\"}]', '西部天使 赛娜 布耶尔之疗', 1),
(15, '西部天使 赛娜 路西法之逆', '20.00', '19.40', '[{\"title\":\"big\",\"src\":\"/images/cw-content23.jpg\"},{\"title\":\"small\",\"src\":\"/images/cw-content23-1.jpg\"}]', '西部天使 赛娜 路西法之逆', 1),
(16, '西部天使 艾瑞莉娅 瓦沙克之言', '20.00', '19.40', '[{\"title\":\"big\",\"src\":\"/images/cw-content24.jpg\"},{\"title\":\"small\",\"src\":\"/images/cw-content24-1.jpg\"}]', '西部天使 艾瑞莉娅 瓦沙克之言', 1);

--
-- 转储表的索引
--

--
-- 表的索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
