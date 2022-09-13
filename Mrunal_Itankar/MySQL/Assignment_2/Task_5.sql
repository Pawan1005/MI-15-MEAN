alter table customer add phoneNumber int after custLname, add city varchar(10) after phoneNumber, add country varchar(10) after custState;
alter table customer drop column custNumber;
select custFname, custLname, phoneNumber, city, country from customer;