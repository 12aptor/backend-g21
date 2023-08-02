-- creamos la base de datos
create database db_personal;

-- seleccionamos la base de datos creada
use db_personal;

-- mostramos las tablas
show tables;


-- creamos un tabla
create table tbl_experiencia(
	id int(11) not null primary key auto_increment,
	fecha_inicio date not null,
	fecha_fin date null,
	descripcion text null,
	empresa varchar(255) not null,
	empresa_ubicacion varchar(255) not null
);

-- insertamos datos en la tabla
insert into tbl_experiencia(fecha_inicio,fecha_fin,empresa,empresa_ubicacion)
values
('2020-01-01','2021-01-01','ACEROS AREQUIPA','ICA'),
('2021-02-01','2023-02-01','CEMENTOS YURA','AREQUIPA'),
('2023-03-01',null,'NTDATA','LIMA');

-- actualizamos datos 

update tbl_experiencia
set descripcion = 'PROGRAMADOR JUNIO EN PYTHON DESARROLLANDO APLICACIONES CON FLASK Y FIREBASE'
where id = 1;

update tbl_experiencia 
set descripcion = 'PROGRAMAR SEMISENIOR EN PYTHON DESARROLLANDO API REST CON FLASK Y DJANGO'
where id = 2;

update tbl_experiencia 
set descripcion = 'SCRUM MASTER PARA PROYECTOS DE DESARROLLO'
where id = 3;

update tbl_experiencia
set empresa_ubicacion = 'LIMA',empresa = 'GRUPO ROMERO SAC'
where id = 2

-- modificamos la tabla para agregar un campo actual que registro si el trabajo es el actual o no
-- si es 0 no es su trabajo actual y si es 1 si es si trabajo actual, por defecto todos son 0
alter table tbl_experiencia
add column actual tinyint(1) default 0;

-- actualizamos la tabla para seleccionar el registro que tiene el trabajo actual , filtrando por la fecha de fin,
-- si la fecha de fin es nulo entonces ese es el trabajo actual

update tbl_experiencia
set actual = 1
where fecha_fin is null;

-- para eliminar un registro
delete from tbl_experiencia
where id = 3;

-- agregamos un campo ara el borrado logico
alter table tbl_experiencia
add column activo tinyint(1) default 1;

-- mostramos los datos de la tabla

select * from tbl_experiencia;

-- borrado logico
update tbl_experiencia set activo = 0
where id = 6;

-- mostrando datos que esten solo activos
select * from tbl_experiencia where activo = 1;

-- CREAMOS LA TABLA PARA ESTUDIOS

CREATE TABLE db_personal.tbl_estudio (
	id INT(11) auto_increment NOT NULL,
	fecha_inicio DATE NOT NULL,
	fecha_fin DATE NULL,
	institucion varchar(255) NOT NULL,
	titulo varchar(100) NOT NULL,
	detalle TEXT NULL,
	CONSTRAINT tbl_estudio_pk PRIMARY KEY (id)
)