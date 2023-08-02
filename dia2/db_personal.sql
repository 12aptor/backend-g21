create database db_personal;
use db_personal;

show tables;

create table tbl_experiencia(
	id int(11) not null primary key auto_increment,
	fecha_inicio date not null,
	fecha_fin date null,
	descripcion text null,
	empresa varchar(255) not null,
	empresa_ubicacion varchar(255) not null
);

insert into tbl_experiencia(fecha_inicio,fecha_fin,empresa,empresa_ubicacion)
values
('2020-01-01','2021-01-01','ACEROS AREQUIPA','ICA'),
('2021-02-01','2023-02-01','CEMENTOS YURA','AREQUIPA'),
('2023-03-01',null,'NTDATA','LIMA');

select * from tbl_experiencia;