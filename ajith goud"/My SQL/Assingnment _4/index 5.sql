SELECT c.customer_id,
       (SELECT COUNT(*)
        FROM order_data od 
        WHERE od.customer_id = c.customer_id AND od.status = 'shipped'
       ) AS Orders
FROM customers c
WHERE c.status = 'cancelled'
GROUP BY c.customer_id;


SELECT c.customer_id, COUNT(DISTINCT od.customer_id) AS Orders
FROM customers c LEFT JOIN
     order_data od 
     ON od.customer_id = c.customer_id AND od.status = 'shipped'
WHERE c.status = 'cancelled'
GROUP BY c.customer_id; 



