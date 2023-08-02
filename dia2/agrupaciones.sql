-- Active: 1685494053135@@127.0.0.1@3306@db_codigo_g21
select * from tbl_alumno;
select count(*) from tbl_alumno;
select max(nota),min(nota),avg(nota) from tbl_alumno;
select avg(nota) from tbl_alumno
where pais='Peru';
select pais,avg(nota) from tbl_alumno
GROUP BY pais
order by avg(nota) desc;