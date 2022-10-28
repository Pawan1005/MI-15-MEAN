//display the office code, phone number, city and countryof all offices? 
You can do it using a LEFT JOIN, GROUP BY and ORDER BY.
We need LEFT JOIN and GROUP BY to get the employee count and the ORDER BY to order the results in descending order of no of employees.

SELECT OfficeCode, City, Country, COUNT(E.employeeNumber) AS EmployeeCount
FROM Offices O
LEFT JOIN Employees E ON E.OfficeCode = E.OfficeCode
GROUP BY OfficeCode, City, Country
ORDER BY COUNT(E.employeeNumber) DESC


