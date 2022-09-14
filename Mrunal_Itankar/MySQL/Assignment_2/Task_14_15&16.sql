select * from customer where custCreditLimit between 70000 and 85000;
update customer set custCreditLimit = custCreditLimit + 2000 where country in ('USA', 'France', 'Germany');
select custId, custFname, custLname, custCreditLimit from customer;
select * from customer where custCreditLimit between 70000 and 85000;