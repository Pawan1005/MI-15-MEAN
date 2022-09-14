create database studentTable;
show databases;
use studentTable;
select database();
create table course(courseId int primary key, courseName varchar(15));
CREATE TABLE student (
    stdId INT PRIMARY KEY,
    studName VARCHAR(20) NOT NULL,
    studAadhar VARCHAR(12) UNIQUE,
    mobileNo VARCHAR(8),
    studCourseId int,
    streams VARCHAR(10) CHECK (streams = 'science' OR 'commerce'),
    FOREIGN KEY (studCourseId) REFERENCES course (courseId)
);