create database customerDetails;
create table customer(custId varchar(10) primary key not null unique, custFname varchar (10), custLname varchar(10), custState varchar(15), custNumber int);
select * from customer where custFname like 'J%' and custState is not null;