create database course;
show databases;
use course;
select database();
create table course(courseId int primary key, courseName varchar(20) not null unique);