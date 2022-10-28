//is the record inserted in the table?the record is not inserted because there is a referential integrity constraint on courseld and there is no record in the master course table.Now try inserting the same record with courseld valueas null?
insert into free_meals_bill (punch_date, employee_id, employee_name, product_name)
select *
from (
   values (date '2021-02-22 10:15:50.086471',123456,'john','Variety Rice - Curd - Rs.35')
) as t(punch_date, employee_id, employee_name, product_name
where not exists (SELECT *
                  FROM free_meals_bill bi
                  WHERE bi.punch_date::date = t.punch_date::date
                    AND bi.employee_id = t.employee_id)


create unique index only_one_meal_per_day
  on free_meals_bills ( (punch_date::date), employee_id);


insert into free_meals_bill (punch_date, employee_id, employee_name, product_name)
values (date '2021-02-22 10:15:50.086471',123456,'john','Variety Rice - Curd - Rs.35')
on conflict ((punch_date::date), employee_id)
do nothing;


