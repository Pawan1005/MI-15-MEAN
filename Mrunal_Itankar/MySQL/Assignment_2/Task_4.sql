create database products;
create table products(P_Code varchar(15) primary key not null unique, P_Name varchar(15), P_Description varchar(50), P_Quantity int, P_Line varchar(15));
select * from products;