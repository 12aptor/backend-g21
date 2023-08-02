select nombre,apellido,email
from tbl_alumno;

-- mostrar los alumnos cuyo nombre empieze con la letra A
select nombre,apellido,email
from tbl_alumno
where nombre like 'A%';

-- mostrar alumnos cuyo apellido termine con la letra e
select nombre,apellido,email
from tbl_alumno
where apellido like '%e';

-- mostrar todos los alumnos cuyo correo sea de google
-- ejemplo dloxdale5w@google.de
select nombre,apellido,email
from tbl_alumno
where email like '%google%';