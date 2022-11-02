select count(*) as count,dept.DNAME 
from emp 
inner join dept on emp.DEPTNO = dept.DEPTNO 
group by dept.DNAME


