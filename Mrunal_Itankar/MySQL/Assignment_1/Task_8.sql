create table offices(
id int auto_increment primary key, 
officeCode varchar(10) not null,
PhoneNumber int, 
postalcode varchar(10), 
city varchar(20), 
country varchar(10) default 'USA'
);