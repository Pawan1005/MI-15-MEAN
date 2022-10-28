alter table employee change empName empFname varchar(10);
alter table employee add empLname varchar(10) AFTER empFname;
select empFname, empLname from employee where empFname like '______' and empLname like '%n';