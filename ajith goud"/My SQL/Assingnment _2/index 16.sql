//display omly those records whose creditlimit after increasing by 2000is between 7000 and 85000?
SELECT Name,CREDITLIMIT FROM  CUSTOMERS 
WHERE CREDITLIMIT < (SELECT CREDITLIMIT FROM CUSTOMERS 
                     WHERE CITY = 'Sunnyvale')
ORDER BY CREDITLIMIT 


SELECT Name,CREDITLIMIT FROM  CUSTOMERS 
WHERE CREDITLIMIT < (SELECT MAX(CREDITLIMIT) FROM CUSTOMERS 
                     WHERE CITY = 'Sunnyvale')
ORDER BY CREDITLIMIT 


