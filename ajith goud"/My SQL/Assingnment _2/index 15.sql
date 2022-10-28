//increase the credit limit by 2000 for all the display the customer code, nameand credit limit.?
SELECT Name,CREDITLIMIT FROM  CUSTOMERS 
WHERE CREDITLIMIT < (SELECT CREDITLIMIT FROM CUSTOMERS 
                     WHERE CITY = 'Sunnyvale')
ORDER BY CREDITLIMIT 


SELECT Name,CREDITLIMIT FROM  CUSTOMERS 
WHERE CREDITLIMIT < (SELECT MAX(CREDITLIMIT) FROM CUSTOMERS 
                     WHERE CITY = 'Sunnyvale')
ORDER BY CREDITLIMIT 


