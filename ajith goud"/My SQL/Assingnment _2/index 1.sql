//dispaly all the fields from the table?
WITH AvgRates
AS
(
r.Id
round(AVG(rr.Rates ),2) AS Rating,
FROM [dbo].[Restaurants] r left join [dbo].[RestaurantReviews] rr on r.Id=rr.RestaurantId
--can use the WHERE filtering here or in the final select
GROUP BY r.Id
)
SELECT
av.Rating,
--rest of your query
FROM [dbo].[Restaurants] r left join [dbo].[RestaurantReviews] rr on r.Id=rr.RestaurantId
 INNER JOIN AvgRates av ON r.Id = av.Id
--rest of your WHERE filtering etc.



