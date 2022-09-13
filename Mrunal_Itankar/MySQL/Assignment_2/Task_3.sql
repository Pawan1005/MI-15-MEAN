alter table offices add PhoneNumber int after officeCode;
select officeCode, PhoneNumber, city, country from offices;