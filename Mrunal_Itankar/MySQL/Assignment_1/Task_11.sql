alter table customer add custCreditLimit int;
select * from customer where custFname like 'J%' and custState is not null order by custCreditLimit desc;