
SELECT e.*, o.officeCode, o.phone 
FROM employees e
INNER JOIN offices o
   ON e.officeCode = o.officeCode
WHERE e.jobTitle IN
  (SELECT sub.jobTitle
   FROM employees sub
   GROUP BY sub.jobTitle
   HAVING COUNT(*) = 1)


