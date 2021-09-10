-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 10, 2021 at 05:58 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `admin_name` varchar(45) NOT NULL,
  `admin_position` varchar(45) NOT NULL,
  `admin_img` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_name`, `admin_position`, `admin_img`) VALUES
(1, 'ชุติมา อนันตกูล', 'admin', 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.6435-9/164430866_1318562315211137_7151903183422469995_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHEUKXwUe5gj88AnrYLfQrguyVHAmu7asS7JUcCa7tqxCUZvX_mWOm1dyOFN_6wZYb1jqm1Sb3DMZHWsGeA-2Ps&_nc_ohc=hKb2U35ouewAX-J6SMr&_nc_ht=scontent.furt1-1.fna&oh=fc848528c968698a8b78b627075745b8&oe=6160C464');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `course_id` int(11) NOT NULL,
  `course_code` varchar(45) NOT NULL,
  `course_name` varchar(45) NOT NULL,
  `course_unit` int(11) NOT NULL,
  `course_status` varchar(45) DEFAULT NULL,
  `course_academic_year` int(11) DEFAULT NULL,
  `course_semester_year` int(11) DEFAULT NULL,
  `coursegroup_id` int(11) NOT NULL,
  `grade_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`course_id`, `course_code`, `course_name`, `course_unit`, `course_status`, `course_academic_year`, `course_semester_year`, `coursegroup_id`, `grade_id`) VALUES
(1, 'COE62-214', 'Microprocessors and Embedded Systems', 4, 'ผ่าน', 2563, 3, 1, 2),
(2, 'GEN61-129', 'English for Media and Communication', 3, 'ผ่าน', 2563, 3, 1, 3),
(3, 'MAT61-111', 'Applied Statistics', 4, 'ผ่าน', 2563, 3, 1, 2),
(4, 'SWE62-206', 'Back-End Web Programming', 3, 'ผ่าน', 2563, 3, 2, 4),
(5, 'SWE62-233', 'Object-Oriented Analysis and Design', 3, 'ไม่ผ่าน', 2563, 3, 2, 3),
(6, 'SWE62-261', 'Software Process and Process Improvement', 2, 'ไม่ผ่าน', 2563, 3, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `coursegroup`
--

CREATE TABLE `coursegroup` (
  `coursegroup_id` int(11) NOT NULL,
  `coursegroup_name` varchar(45) NOT NULL,
  `amount_of_credits_required` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `coursegroup`
--

INSERT INTO `coursegroup` (`coursegroup_id`, `coursegroup_name`, `amount_of_credits_required`) VALUES
(1, 'หมวดวิชาศึกษาทั่วไป', 40),
(2, 'หมวดวิชาเฉพาะ', 128),
(3, 'หมวดวิชาเลือกเสรี', 8);

-- --------------------------------------------------------

--
-- Table structure for table `grade`
--

CREATE TABLE `grade` (
  `grade_id` int(11) NOT NULL,
  `grade` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `grade`
--

INSERT INTO `grade` (`grade_id`, `grade`) VALUES
(1, 'A'),
(2, 'B+'),
(3, 'B'),
(4, 'C+'),
(5, 'C'),
(6, 'D+'),
(7, 'D'),
(8, 'F');

-- --------------------------------------------------------

--
-- Table structure for table `studygroup`
--

CREATE TABLE `studygroup` (
  `studyplan_id` int(11) NOT NULL,
  `coursegroup_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `studygroup`
--

INSERT INTO `studygroup` (`studyplan_id`, `coursegroup_id`) VALUES
(1, 1),
(1, 2),
(1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `studyplan`
--

CREATE TABLE `studyplan` (
  `studyplan_id` int(11) NOT NULL,
  `studyplan_name` varchar(45) NOT NULL,
  `studyplan_img` varchar(400) NOT NULL,
  `admin_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `studyplan`
--

INSERT INTO `studyplan` (`studyplan_id`, `studyplan_name`, `studyplan_img`, `admin_id`) VALUES
(1, 'แผนการเรียน รหัส62', 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.15752-9/216262510_184694176957122_4266403104304115447_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEtU517U4tXSB-0jyE9tiypKwTe7iqMLO0rBN7uKows7TSk7r14eGnB7opkupfvR4OQPr0_9v52WRMiIJ6pLgkp&_nc_ohc=qVYOpVjL7IIAX88SoKA&_nc_ht=scontent.furt1-1.fna&oh=7bc1ecd8b3ae7c43fcb9ec11016db644&oe=615E79DB', 1);

-- --------------------------------------------------------

--
-- Table structure for table `teacherplan`
--

CREATE TABLE `teacherplan` (
  `teacher_id` int(11) NOT NULL,
  `studyplan_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `teacherplan`
--

INSERT INTO `teacherplan` (`teacher_id`, `studyplan_id`) VALUES
(2, 1),
(7, 1);

-- --------------------------------------------------------

--
-- Table structure for table `userstudent`
--

CREATE TABLE `userstudent` (
  `student_id` int(11) NOT NULL,
  `student_code` int(11) NOT NULL,
  `student_name` varchar(45) NOT NULL,
  `student_class` int(11) NOT NULL,
  `student_school_of` varchar(45) NOT NULL,
  `student_course` varchar(45) NOT NULL,
  `student_gpa` double NOT NULL,
  `student_gpax` double NOT NULL,
  `student_img` varchar(400) NOT NULL,
  `teacher_id` int(11) NOT NULL,
  `studyplan_id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `userstudent`
--

INSERT INTO `userstudent` (`student_id`, `student_code`, `student_name`, `student_class`, `student_school_of`, `student_course`, `student_gpa`, `student_gpax`, `student_img`, `teacher_id`, `studyplan_id`, `admin_id`) VALUES
(1, 62100425, 'นายกลศ เหนือคลอง', 3, 'สารสนเทศศาสตร์', 'วิศวกรรมซอฟต์แวร์', 0, 0, 'https://scontent.furt1-1.fna.fbcdn.net/v/t31.', 2, 1, 1),
(2, 62100896, 'นายกิตติพงษ์ ทูรย์ภานุประพันธ์', 3, 'สารสนเทศศาสตร์', 'วิศวกรรมซอฟต์แวร์', 0, 0, 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.6', 2, 1, 1),
(3, 62101266, 'นายจักริน แสงโชติ', 3, 'สารสนเทศศาสตร์', 'วิศวกรรมซอฟต์แวร์', 0, 0, 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.6', 2, 1, 1),
(4, 62101811, 'นายชนะศักดิ์ พันทอง', 3, 'สารสนเทศศาสตร์', 'วิศวกรรมซอฟต์แวร์', 0, 0, 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.6', 2, 1, 1),
(5, 62102405, 'นางสาวซุลฮาน สาเมาะ', 3, 'สารสนเทศศาสตร์', 'วิศวกรรมซอฟต์แวร์', 0, 0, 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.6', 2, 1, 1),
(6, 62103932, 'นายธนะวัตติ์ กุลชัยยะพัฒน์', 3, 'สารสนเทศศาสตร์', 'วิศวกรรมซอฟต์แวร์', 0, 0, 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.6435-9/139710232_1551783775212613_1164056197155063429_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHkLTDz_dKjrAqo9s82kIKAuj9JaSFPp3C6P0lpIU-ncF-GnEJ97ddzU63aEvh0qhwnRyMpTXV-MsWWdzbyWHMJ&_nc_ohc=i8rS2SRDspUAX_-VgOU&_nc_ht=scontent.furt1-1.fna&oh=32986578f4cda223b68559e64a304459&oe=6160571A', 2, 1, 1),
(7, 62104302, 'นายธีรโชติ แสงจันทร์ศิริพร', 3, 'สารสนเทศศาสตร์', 'วิศวกรรมซอฟต์แวร์', 0, 0, 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.6', 2, 1, 1),
(8, 62105374, 'นายปกป้อง รัตนสุวรรณ', 3, 'สารสนเทศศาสตร์', 'วิศวกรรมซอฟต์แวร์', 0, 0, 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.6', 2, 1, 1),
(9, 62106638, 'นายพัชริยะ รวยจินดา', 3, 'สารสนเทศศาสตร์', 'วิศวกรรมซอฟต์แวร์', 0, 0, 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.6', 2, 1, 1),
(10, 62106794, 'นายพิชญ์ ถวายวงศ์', 3, 'สารสนเทศศาสตร์', 'วิศวกรรมซอฟต์แวร์', 0, 0, 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.6', 2, 1, 1),
(11, 62107214, 'นายภัทรภณ วิชัยสอน', 3, 'สารสนเทศศาสตร์', 'วิศวกรรมซอฟต์แวร์', 0, 0, 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.6', 2, 1, 1),
(12, 62107693, ' นายมูบารัค ดำเต๊ะ', 3, 'สารสนเทศศาสตร์', 'วิศวกรรมซอฟต์แวร์', 0, 0, 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.6', 2, 1, 1),
(13, 62109483, 'นายศิวกร ยศเมฆ', 3, 'สารสนเทศศาสตร์', 'วิศวกรรมซอฟต์แวร์', 0, 0, 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.6', 2, 1, 1),
(14, 62109897, 'นายสะราฤทธิ์ มีผล', 3, 'สารสนเทศศาสตร์', 'วิศวกรรมซอฟต์แวร์', 0, 0, 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.6', 2, 1, 1),
(15, 62113097, 'นายณฐกร ตาลประสิทธิ์', 3, 'สารสนเทศศาสตร์', 'วิศวกรรมซอฟต์แวร์', 0, 0, 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.6', 2, 1, 1),
(16, 62114392, 'นายโรมัน วรรณบวร', 3, 'สารสนเทศศาสตร์', 'วิศวกรรมซอฟต์แวร์', 0, 0, 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.6435-9/65143453_1074879809373535_7859018565100240896_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeHJQEXNcG0ETRaCHcui7pdggr2yGTY1LyGCvbIZNjUvIRU2Loh4Qb3Mxx__ucM269_qUDTNbM461kJFeKMizo8C&_nc_ohc=ctOmnFdE1yYAX-alqJA&_nc_ht=scontent.furt1-1.fna&oh=998414ba4515a5abdab2ffd3005a7bb0&oe=615E9D1B', 2, 1, 1),
(17, 62115373, 'นางสาวสุวิญญา หญ้าปรัง', 3, 'สารสนเทศศาสตร์', 'วิศวกรรมซอฟต์แวร์', 0, 0, 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.6', 2, 1, 1),
(18, 62115639, 'นายธนดล จิระพงษธร', 3, 'สารสนเทศศาสตร์', 'วิศวกรรมซอฟต์แวร์', 0, 0, 'https://scontent.furt1-1.fna.fbcdn.net/v/t39.', 2, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `userteacher`
--

CREATE TABLE `userteacher` (
  `teacher_id` int(11) NOT NULL,
  `teacher_name` varchar(45) NOT NULL,
  `teacher_position` varchar(45) NOT NULL,
  `teacher_school_of` varchar(45) NOT NULL,
  `teacher_course` varchar(45) NOT NULL,
  `teacher_email` varchar(45) NOT NULL,
  `teacher_telephone` int(11) NOT NULL,
  `teacher_img` varchar(255) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `admin_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `userteacher`
--

INSERT INTO `userteacher` (`teacher_id`, `teacher_name`, `teacher_position`, `teacher_school_of`, `teacher_course`, `teacher_email`, `teacher_telephone`, `teacher_img`, `username`, `password`, `admin_id`) VALUES
(1, 'ผศ.เยาวเรศ ศิริสถิตย์กุล', 'ผู้ช่วยศาสตราจารย์', 'สารสนเทศาสตร์', 'วิศวกรรมซอฟต์แวร์', 'syaowara@wu.ac.th', 75672272, 'https://apis.wu.ac.th/des/PicPersonFile/4700000024.jpg', '1', 'aabb1234', 1),
(2, 'ผศ.ดร.ฐิมาพร เพชรแก้ว', 'รองผู้อำนวยการ', 'สารสนเทศาสตร์', 'วิศวกรรมซอฟต์แวร์', 'pthimapo@wu.ac.th', 75672275, 'https://apis.wu.ac.th/des/PicPersonFile/4700000090.jpg', '2', 'bbcc1234', 1),
(3, 'ผศ.อุหมาด หมัดอาด้ำ', 'ผู้ช่วยศาสตราจารย์', 'สารสนเทศาสตร์', 'วิศวกรรมซอฟต์แวร์', 'muhamard@wu.ac.th', 75672255, 'https://apis.wu.ac.th/des/PicPersonFile/3910660322.jpg', '3', 'ccdd1234', 1),
(4, 'ดร. จิตติมา ศังขมณี', 'อาจารย์', 'สารสนเทศาสตร์', 'วิศวกรรมซอฟต์แวร์', 'sjidtima@wu.ac.th', 75672254, 'https://apis.wu.ac.th/des/PicPersonFile/4120950322.jpg', '4', 'ddee134', 1),
(5, 'ดร.กรัณรัตน์ ธรรมรักษ์', 'อาจารย์', 'สารสนเทศาสตร์', 'วิศวกรรมซอฟต์แวร์', 'kanchan.th@wu.ac.th', 75672565, 'https://apis.wu.ac.th/des/PicPersonFile/5300000053.jpg', '5', 'eeff1234', 1),
(6, 'ศิริภิญโญ จันทมุณี', 'อาจารย์', 'สารสนเทศาสตร์', 'วิศวกรรมซอฟต์แวร์', 'csiripin@wu.ac.th', 75672273, 'https://informatics.wu.ac.th/wp-content/uploads/Siripinyo.jpg', '6', 'ffgg1234', 1),
(7, 'ผศ.ดร. พุทธิพร  ธนธรรมเมธี', 'ผู้ช่วยศาสตราจารย์', 'สารสนเทศาสตร์', 'วิศวกรรมซอฟต์แวร์', 'putthiporn.th@wu.ac.th', 75672283, 'https://apis.wu.ac.th/des/PicPersonFile/5500000066.jpg', '7', 'gghh1234', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`course_id`,`coursegroup_id`,`grade_id`),
  ADD KEY `fk_course_coursegroup1_idx` (`coursegroup_id`),
  ADD KEY `fk_course_grade1_idx` (`grade_id`);

--
-- Indexes for table `coursegroup`
--
ALTER TABLE `coursegroup`
  ADD PRIMARY KEY (`coursegroup_id`);

--
-- Indexes for table `grade`
--
ALTER TABLE `grade`
  ADD PRIMARY KEY (`grade_id`);

--
-- Indexes for table `studygroup`
--
ALTER TABLE `studygroup`
  ADD PRIMARY KEY (`studyplan_id`,`coursegroup_id`),
  ADD KEY `fk_studyplan_has_coursegroup_coursegroup1_idx` (`coursegroup_id`),
  ADD KEY `fk_studyplan_has_coursegroup_studyplan_idx` (`studyplan_id`);

--
-- Indexes for table `studyplan`
--
ALTER TABLE `studyplan`
  ADD PRIMARY KEY (`studyplan_id`,`admin_id`),
  ADD KEY `fk_studyplan_admin1_idx` (`admin_id`);

--
-- Indexes for table `teacherplan`
--
ALTER TABLE `teacherplan`
  ADD PRIMARY KEY (`teacher_id`,`studyplan_id`),
  ADD KEY `fk_userteacher_has_studyplan_studyplan1_idx` (`studyplan_id`),
  ADD KEY `fk_userteacher_has_studyplan_userteacher1_idx` (`teacher_id`);

--
-- Indexes for table `userstudent`
--
ALTER TABLE `userstudent`
  ADD PRIMARY KEY (`student_id`,`teacher_id`,`studyplan_id`,`admin_id`),
  ADD KEY `fk_userstudent_userteacher1_idx` (`teacher_id`),
  ADD KEY `fk_userstudent_studyplan1_idx` (`studyplan_id`),
  ADD KEY `fk_userstudent_admin1_idx` (`admin_id`);

--
-- Indexes for table `userteacher`
--
ALTER TABLE `userteacher`
  ADD PRIMARY KEY (`teacher_id`,`admin_id`),
  ADD KEY `fk_userteacher_admin1_idx` (`admin_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `course`
--
ALTER TABLE `course`
  ADD CONSTRAINT `fk_course_coursegroup1` FOREIGN KEY (`coursegroup_id`) REFERENCES `coursegroup` (`coursegroup_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_course_grade1` FOREIGN KEY (`grade_id`) REFERENCES `grade` (`grade_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `studygroup`
--
ALTER TABLE `studygroup`
  ADD CONSTRAINT `fk_studyplan_has_coursegroup_coursegroup1` FOREIGN KEY (`coursegroup_id`) REFERENCES `coursegroup` (`coursegroup_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_studyplan_has_coursegroup_studyplan` FOREIGN KEY (`studyplan_id`) REFERENCES `studyplan` (`studyplan_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `studyplan`
--
ALTER TABLE `studyplan`
  ADD CONSTRAINT `fk_studyplan_admin1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `teacherplan`
--
ALTER TABLE `teacherplan`
  ADD CONSTRAINT `fk_userteacher_has_studyplan_studyplan1` FOREIGN KEY (`studyplan_id`) REFERENCES `studyplan` (`studyplan_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_userteacher_has_studyplan_userteacher1` FOREIGN KEY (`teacher_id`) REFERENCES `userteacher` (`teacher_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `userstudent`
--
ALTER TABLE `userstudent`
  ADD CONSTRAINT `fk_userstudent_admin1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_userstudent_studyplan1` FOREIGN KEY (`studyplan_id`) REFERENCES `studyplan` (`studyplan_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_userstudent_userteacher1` FOREIGN KEY (`teacher_id`) REFERENCES `userteacher` (`teacher_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `userteacher`
--
ALTER TABLE `userteacher`
  ADD CONSTRAINT `fk_userteacher_admin1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
