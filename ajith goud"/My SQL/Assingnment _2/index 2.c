//display employee number, first name, last name,job titleof all the employees.?
SELECT e.employeeid, e.firstname, e.lastname,
       m.firstname managerFirstName, m.lastname managerLastName
FROM employee e
JOIN employee m ON e.reportsto = m.employeeid 
WHERE e.reportsto IS NOT NULL;




