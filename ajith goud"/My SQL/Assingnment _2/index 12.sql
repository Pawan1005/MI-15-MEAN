//display all the employees with office code 4?
**SQL QUERY SHOULD WORK LIKE THIS:

LISTAGG Function may needs to be replaced as it don't support every database but we need to look for alternative function.** 



SELECT A.'Years Of Service',A.PosName,LISTAGG(PosName, '; ')
         WITHIN GROUP (ORDER BY PosName) as "Aggregated_Pos_name",
A.Amount

FROM   (SELECT CASE WHEN (SYSDATE()- a.joindt)/365 <= 5 THEN '0-5'
WHEN (SYSDATE()- a.joindt)/365 BETWEEN 6 AND 10 THEN '6-10'
END AS 'Years Of Service', COUNT(A.EmpCode) AS 'Amount', B.PosName
FROM tblemployee A
INNER JOIN tblposition B ON A.PosCode = B.PosCode
WHERE A.ResignDt IS NULL)A
GROUP BY A.Years of Service;


