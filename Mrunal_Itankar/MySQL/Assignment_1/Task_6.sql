create database employees;
use employees;
select database();
create table employee(empId varchar(10) NOT NULL primary key unique, empName varchar(20) NOT NULL, empAddress varchar(50) NOT NULL, empNumber int UNIQUE);
insert into employee values('1', 'Mrunal', 'Pune',123456789);
select empName from employee where empName like 'f%';