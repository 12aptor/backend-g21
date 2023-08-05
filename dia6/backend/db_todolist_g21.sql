-- Active: 1691197935030@@127.0.0.1@3306@db_todolist_g21
CREATE TABLE db_todolist_g21.tbl_tarea (
    id INT auto_increment NOT NULL,
    text varchar(100) NOT NULL,
    completed BOOL DEFAULT false NOT NULL,
    CONSTRAINT tbl_tarea_pk PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_bin;

insert into tbl_tarea(text,completed) 
values ('TAREA UNO',TRUE),('TAREA DOS',FALSE);
