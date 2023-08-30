# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class TblCategoria(models.Model):
    categoria_id = models.AutoField(primary_key=True)
    categoria_descripcion = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'tbl_categoria'


class TblEmpresa(models.Model):
    empresa_id = models.AutoField(primary_key=True)
    empresa_nombre = models.CharField(max_length=255)
    empresa_descripcion = models.TextField(blank=True, null=True)
    empresa_logo = models.CharField(max_length=255, blank=True, null=True)
    empresa_beneficios = models.TextField(db_column='empresa beneficios', blank=True, null=True)  # Field renamed to remove unsuitable characters.

    class Meta:
        managed = False
        db_table = 'tbl_empresa'


class TblExperiencia(models.Model):
    experiencia_id = models.AutoField(primary_key=True)
    experiencia_descripcion = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'tbl_experiencia'


class TblJornada(models.Model):
    jornada_id = models.AutoField(primary_key=True)
    jornada_descripcion = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'tbl_jornada'


class TblModalidad(models.Model):
    modalidad_id = models.AutoField(primary_key=True)
    modalidad_descripcion = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'tbl_modalidad'


class TblOferta(models.Model):
    oferta_id = models.AutoField(primary_key=True)
    oferta_fregistro = models.DateField()
    oferta_titulo = models.CharField(max_length=255)
    oferta_descripcion = models.TextField(blank=True, null=True)
    oferta_requerimientos = models.TextField(blank=True, null=True)
    oferta_salario = models.FloatField()
    oferta_url = models.CharField(max_length=255, blank=True, null=True)
    empresa = models.ForeignKey(TblEmpresa, models.DO_NOTHING)
    categoria = models.ForeignKey(TblCategoria, models.DO_NOTHING)
    experiencia = models.ForeignKey(TblExperiencia, models.DO_NOTHING)
    jornada = models.ForeignKey(TblJornada, models.DO_NOTHING)
    modalidad = models.ForeignKey(TblModalidad, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_oferta'


class TblOfertaEtapa(models.Model):
    oferta_etapa_id = models.AutoField(primary_key=True)
    oferta_etapa_descripcion = models.CharField(max_length=255)
    oferta_etapa_posterior = models.ForeignKey('self', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tbl_oferta_etapa'


class TblOfertaPostulante(models.Model):
    oferta_postulante_id = models.AutoField(primary_key=True)
    oferta_postulante_fregistro = models.DateField()
    oferta_postulante_seleccionado = models.CharField(max_length=1)
    oferta = models.ForeignKey(TblOferta, models.DO_NOTHING)
    postulante = models.ForeignKey('TblPostulante', models.DO_NOTHING)
    oferta_etapa = models.ForeignKey(TblOfertaEtapa, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_oferta_postulante'


class TblPostulante(models.Model):
    postulante_id = models.AutoField(primary_key=True)
    postulante_nombres = models.CharField(max_length=255)
    postulante_apellidos = models.CharField(max_length=255)
    postulante_doc_identidad = models.CharField(max_length=255, blank=True, null=True)
    postulante_tipodoc_ide = models.IntegerField()
    postulante_fnacimiento = models.DateField()
    postulante_celular = models.CharField(max_length=100, blank=True, null=True)
    postulante_email = models.CharField(max_length=255, blank=True, null=True)
    postulante_estado = models.CharField(max_length=1, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tbl_postulante'


class TblPostulanteEstudio(models.Model):
    postulante_estudio_id = models.IntegerField(primary_key=True)
    postulante_estudio_lugar = models.CharField(max_length=255)
    postulante_estudio_especialidad = models.CharField(max_length=255)
    postulante_estudio_finicio = models.DateField()
    postulante_estudio_ffin = models.DateField()
    postulante_estudio_sinterminar = models.CharField(max_length=1)
    tbl_postulante_postulante = models.ForeignKey(TblPostulante, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_postulante_estudio'


class TblPostulanteExperiencia(models.Model):
    postulante_experiencia = models.AutoField(primary_key=True)
    postulante_experiencia_empresa = models.CharField(max_length=255)
    postulante_experiencia_cargo = models.CharField(max_length=255)
    postulante_experiencia_resumen = models.TextField(blank=True, null=True)
    postulante_experiencia_finicio = models.DateField()
    postulante_experiencia_ffin = models.DateField(blank=True, null=True)
    postulante_experiencia_vigente = models.CharField(max_length=1)
    postulante = models.ForeignKey(TblPostulante, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_postulante_experiencia'
