-- Active: 1685494053135@@127.0.0.1@3306@db_codigo_g21
-- seleccionar todos los alumnos
select * from tbl_alumno;
-- mostrar el total de alumnos
select count(*) from tbl_alumno;
-- mostrar nota maxima , minima y promedio
select max(nota),min(nota),avg(nota) from tbl_alumno;
-- mostrar nota promedio solo de los alumnos del pais Peru
select avg(nota) from tbl_alumno
where pais='Peru';
-- mostrar las notas promedio por pais
select pais,avg(nota) from tbl_alumno
GROUP BY pais
order by avg(nota) desc;
-- mostrar las notas promedio de alumnos aprobados(nota > 10) por pais
select pais,avg(nota) from tbl_alumno
where nota > 10
group by pais
having avg(nota) >= 15
order by avg(nota) desc;
