/*==============================================================*/
/* DBMS name:      Microsoft SQL Server 2008                    */
/* Created on:     26/08/2015 18:48:04                          */
/*==============================================================*/


if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_AREAS') and o.name = 'FK_SCPM_ARE_RELATIONS_SCPM_UNI')
alter table SCPM_AREAS
   drop constraint FK_SCPM_ARE_RELATIONS_SCPM_UNI
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_CANTONES') and o.name = 'FK_SCPM_CAN_RELATIONS_SCPM_PRO')
alter table SCPM_CANTONES
   drop constraint FK_SCPM_CAN_RELATIONS_SCPM_PRO
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_CONYUGES') and o.name = 'FK_SCPM_CON_RELATIONS_SCPM_PRO')
alter table SCPM_CONYUGES
   drop constraint FK_SCPM_CON_RELATIONS_SCPM_PRO
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_CONYUGES') and o.name = 'FK_SCPM_CON_RELATIONS_SCPM_PER')
alter table SCPM_CONYUGES
   drop constraint FK_SCPM_CON_RELATIONS_SCPM_PER
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_DISCAPACIDADES') and o.name = 'FK_SCPM_DIS_RELATIONS_SCPM_PER')
alter table SCPM_DISCAPACIDADES
   drop constraint FK_SCPM_DIS_RELATIONS_SCPM_PER
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_DISCAPACIDADES') and o.name = 'FK_SCPM_DIS_RELATIONS_SCPM_TIP')
alter table SCPM_DISCAPACIDADES
   drop constraint FK_SCPM_DIS_RELATIONS_SCPM_TIP
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_DISCAPACIDADES') and o.name = 'FK_SCPM_DIS_RELATIONS_SCPM_PAR')
alter table SCPM_DISCAPACIDADES
   drop constraint FK_SCPM_DIS_RELATIONS_SCPM_PAR
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_EMERGENCIAS') and o.name = 'FK_SCPM_EME_RELATIONS_SCPM_PER')
alter table SCPM_EMERGENCIAS
   drop constraint FK_SCPM_EME_RELATIONS_SCPM_PER
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_EMERGENCIAS') and o.name = 'FK_SCPM_EME_RELATIONS_SCPM_PAR')
alter table SCPM_EMERGENCIAS
   drop constraint FK_SCPM_EME_RELATIONS_SCPM_PAR
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_PARROQUIAS') and o.name = 'FK_SCPM_PAR_RELATIONS_SCPM_CAN')
alter table SCPM_PARROQUIAS
   drop constraint FK_SCPM_PAR_RELATIONS_SCPM_CAN
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_PERSONALES') and o.name = 'FK_SCPM_PER_RELATIONS_SCPM_TIP')
alter table SCPM_PERSONALES
   drop constraint FK_SCPM_PER_RELATIONS_SCPM_TIP
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_PERSONALES') and o.name = 'FK_SCPM_PER_RELATIONS_SCPM_EST')
alter table SCPM_PERSONALES
   drop constraint FK_SCPM_PER_RELATIONS_SCPM_EST
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_PERSONALES') and o.name = 'FK_SCPM_PER_RELATIONS_SCPM_RAZ')
alter table SCPM_PERSONALES
   drop constraint FK_SCPM_PER_RELATIONS_SCPM_RAZ
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_PERSONALES') and o.name = 'FK_SCPM_PER_RELATIONS_SCPM_PAI')
alter table SCPM_PERSONALES
   drop constraint FK_SCPM_PER_RELATIONS_SCPM_PAI
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_PERSONALES') and o.name = 'FK_SCPM_PER_RELATIONS_SCPM_SEC')
alter table SCPM_PERSONALES
   drop constraint FK_SCPM_PER_RELATIONS_SCPM_SEC
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_PUESTOS') and o.name = 'FK_SCPM_PUE_RELATIONS_SCPM_ARE')
alter table SCPM_PUESTOS
   drop constraint FK_SCPM_PUE_RELATIONS_SCPM_ARE
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_PUESTOS') and o.name = 'FK_SCPM_PUE_RELATIONS_SCPM_DEN')
alter table SCPM_PUESTOS
   drop constraint FK_SCPM_PUE_RELATIONS_SCPM_DEN
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_PUESTOS') and o.name = 'FK_SCPM_PUE_RELATIONS_SCPM_CAR')
alter table SCPM_PUESTOS
   drop constraint FK_SCPM_PUE_RELATIONS_SCPM_CAR
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_PUESTOS') and o.name = 'FK_SCPM_PUE_RELATIONS_SCPM_REL')
alter table SCPM_PUESTOS
   drop constraint FK_SCPM_PUE_RELATIONS_SCPM_REL
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_PUESTO_HIST') and o.name = 'FK_SCPM_PUE_RELATIONS_SCPM_PUE')
alter table SCPM_PUESTO_HIST
   drop constraint FK_SCPM_PUE_RELATIONS_SCPM_PUE
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_PUESTO_HIST') and o.name = 'FK_SCPM_PUE_RELATIONS_SCPM_PER')
alter table SCPM_PUESTO_HIST
   drop constraint FK_SCPM_PUE_RELATIONS_SCPM_PER
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_SECTORES') and o.name = 'FK_SCPM_SEC_RELATIONS_SCPM_PAR')
alter table SCPM_SECTORES
   drop constraint FK_SCPM_SEC_RELATIONS_SCPM_PAR
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_SUBROGA_HIST') and o.name = 'FK_SCPM_SUB_RELATIONS_SCPM_PUE')
alter table SCPM_SUBROGA_HIST
   drop constraint FK_SCPM_SUB_RELATIONS_SCPM_PUE
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SCPM_SUBROGA_HIST') and o.name = 'FK_SCPM_SUB_RELATIONS_SCPM_PER')
alter table SCPM_SUBROGA_HIST
   drop constraint FK_SCPM_SUB_RELATIONS_SCPM_PER
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_AREAS')
            and   name  = 'RELATIONSHIP_36_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_AREAS.RELATIONSHIP_36_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_AREAS')
            and   type = 'U')
   drop table SCPM_AREAS
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_CANTONES')
            and   name  = 'RELATIONSHIP_32_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_CANTONES.RELATIONSHIP_32_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_CANTONES')
            and   type = 'U')
   drop table SCPM_CANTONES
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_CARGOS')
            and   type = 'U')
   drop table SCPM_CARGOS
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_CONYUGES')
            and   name  = 'RELATIONSHIP_27_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_CONYUGES.RELATIONSHIP_27_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_CONYUGES')
            and   name  = 'RELATIONSHIP_8_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_CONYUGES.RELATIONSHIP_8_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_CONYUGES')
            and   type = 'U')
   drop table SCPM_CONYUGES
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_DENOMINACIONES')
            and   type = 'U')
   drop table SCPM_DENOMINACIONES
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_DISCAPACIDADES')
            and   name  = 'RELATIONSHIP_25_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_DISCAPACIDADES.RELATIONSHIP_25_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_DISCAPACIDADES')
            and   name  = 'RELATIONSHIP_14_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_DISCAPACIDADES.RELATIONSHIP_14_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_DISCAPACIDADES')
            and   name  = 'RELATIONSHIP_13_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_DISCAPACIDADES.RELATIONSHIP_13_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_DISCAPACIDADES')
            and   type = 'U')
   drop table SCPM_DISCAPACIDADES
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_EMERGENCIAS')
            and   name  = 'RELATIONSHIP_26_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_EMERGENCIAS.RELATIONSHIP_26_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_EMERGENCIAS')
            and   name  = 'RELATIONSHIP_12_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_EMERGENCIAS.RELATIONSHIP_12_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_EMERGENCIAS')
            and   type = 'U')
   drop table SCPM_EMERGENCIAS
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_ESTADOS_CIVILES')
            and   type = 'U')
   drop table SCPM_ESTADOS_CIVILES
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_PAIS')
            and   type = 'U')
   drop table SCPM_PAIS
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_PARENTESCOS')
            and   type = 'U')
   drop table SCPM_PARENTESCOS
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_PARROQUIAS')
            and   name  = 'RELATIONSHIP_29_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_PARROQUIAS.RELATIONSHIP_29_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_PARROQUIAS')
            and   type = 'U')
   drop table SCPM_PARROQUIAS
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_PERSONALES')
            and   name  = 'RELATIONSHIP_33_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_PERSONALES.RELATIONSHIP_33_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_PERSONALES')
            and   name  = 'RELATIONSHIP_28_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_PERSONALES.RELATIONSHIP_28_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_PERSONALES')
            and   name  = 'RELATIONSHIP_24_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_PERSONALES.RELATIONSHIP_24_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_PERSONALES')
            and   name  = 'RELATIONSHIP_11_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_PERSONALES.RELATIONSHIP_11_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_PERSONALES')
            and   name  = 'RELATIONSHIP_10_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_PERSONALES.RELATIONSHIP_10_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_PERSONALES')
            and   type = 'U')
   drop table SCPM_PERSONALES
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_PROFESIONES')
            and   type = 'U')
   drop table SCPM_PROFESIONES
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_PROVINCIAS')
            and   type = 'U')
   drop table SCPM_PROVINCIAS
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_PUESTOS')
            and   name  = 'RELATIONSHIP_37_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_PUESTOS.RELATIONSHIP_37_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_PUESTOS')
            and   name  = 'RELATIONSHIP_7_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_PUESTOS.RELATIONSHIP_7_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_PUESTOS')
            and   name  = 'RELATIONSHIP_6_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_PUESTOS.RELATIONSHIP_6_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_PUESTOS')
            and   name  = 'RELATIONSHIP_5_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_PUESTOS.RELATIONSHIP_5_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_PUESTOS')
            and   type = 'U')
   drop table SCPM_PUESTOS
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_PUESTO_HIST')
            and   name  = 'RELATIONSHIP_35_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_PUESTO_HIST.RELATIONSHIP_35_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_PUESTO_HIST')
            and   name  = 'RELATIONSHIP_31_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_PUESTO_HIST.RELATIONSHIP_31_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_PUESTO_HIST')
            and   type = 'U')
   drop table SCPM_PUESTO_HIST
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_RAZAS')
            and   type = 'U')
   drop table SCPM_RAZAS
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_RELACIONES_LABORALES')
            and   type = 'U')
   drop table SCPM_RELACIONES_LABORALES
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_SECTORES')
            and   name  = 'RELATIONSHIP_23_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_SECTORES.RELATIONSHIP_23_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_SECTORES')
            and   type = 'U')
   drop table SCPM_SECTORES
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_SUBROGA_HIST')
            and   name  = 'RELATIONSHIP_30_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_SUBROGA_HIST.RELATIONSHIP_30_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SCPM_SUBROGA_HIST')
            and   name  = 'RELATIONSHIP_34_FK'
            and   indid > 0
            and   indid < 255)
   drop index SCPM_SUBROGA_HIST.RELATIONSHIP_34_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_SUBROGA_HIST')
            and   type = 'U')
   drop table SCPM_SUBROGA_HIST
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_TIPO_DISCAPACIDADES')
            and   type = 'U')
   drop table SCPM_TIPO_DISCAPACIDADES
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_TIPO_IDENTIFICACIONES')
            and   type = 'U')
   drop table SCPM_TIPO_IDENTIFICACIONES
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SCPM_UNIDAD')
            and   type = 'U')
   drop table SCPM_UNIDAD
go

/*==============================================================*/
/* Table: SCPM_AREAS                                            */
/*==============================================================*/
create table SCPM_AREAS (
   ARE_COD              int                  identity,
   UNI_COD              int                  null,
   ARE_NOM              text                 null,
   ARE_EST              bit                  null,
   ORG_PAD              text                 null,
   constraint PK_SCPM_AREAS primary key nonclustered (ARE_COD)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('SCPM_AREAS') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'SCPM_AREAS' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Registra areas de la Scpm', 
   'user', @CurrentUser, 'table', 'SCPM_AREAS'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_AREAS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'ARE_COD')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_AREAS', 'column', 'ARE_COD'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla ',
   'user', @CurrentUser, 'table', 'SCPM_AREAS', 'column', 'ARE_COD'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_AREAS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'UNI_COD')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_AREAS', 'column', 'UNI_COD'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_AREAS', 'column', 'UNI_COD'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_AREAS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'ARE_NOM')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_AREAS', 'column', 'ARE_NOM'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'nombre de la area de la Scpm',
   'user', @CurrentUser, 'table', 'SCPM_AREAS', 'column', 'ARE_NOM'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_AREAS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'ARE_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_AREAS', 'column', 'ARE_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del registro activo o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_AREAS', 'column', 'ARE_EST'
go

/*==============================================================*/
/* Index: RELATIONSHIP_36_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_36_FK on SCPM_AREAS (
UNI_COD ASC
)
go

/*==============================================================*/
/* Table: SCPM_CANTONES                                         */
/*==============================================================*/
create table SCPM_CANTONES (
   CAN_ID               int                  identity,
   PRO_ID               int                  not null,
   CAN_NOM              text                 null,
   CAN_EST              bit                  null,
   constraint PK_SCPM_CANTONES primary key nonclustered (CAN_ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('SCPM_CANTONES') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'SCPM_CANTONES' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Cantones segun sus provincias', 
   'user', @CurrentUser, 'table', 'SCPM_CANTONES'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CANTONES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CAN_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CANTONES', 'column', 'CAN_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla ',
   'user', @CurrentUser, 'table', 'SCPM_CANTONES', 'column', 'CAN_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CANTONES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PRO_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CANTONES', 'column', 'PRO_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_CANTONES', 'column', 'PRO_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CANTONES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CAN_NOM')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CANTONES', 'column', 'CAN_NOM'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Nombre del canton',
   'user', @CurrentUser, 'table', 'SCPM_CANTONES', 'column', 'CAN_NOM'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CANTONES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CAN_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CANTONES', 'column', 'CAN_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del registro activo o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_CANTONES', 'column', 'CAN_EST'
go

/*==============================================================*/
/* Index: RELATIONSHIP_32_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_32_FK on SCPM_CANTONES (
PRO_ID ASC
)
go

/*==============================================================*/
/* Table: SCPM_CARGOS                                           */
/*==============================================================*/
create table SCPM_CARGOS (
   CAR_ID               int                  identity,
   CAR_NOM              text                 null,
   CAR_EST              bit                  null,
   constraint PK_SCPM_CARGOS primary key nonclustered (CAR_ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('SCPM_CARGOS') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'SCPM_CARGOS' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Cargos existentes en la Scpm', 
   'user', @CurrentUser, 'table', 'SCPM_CARGOS'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CARGOS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CAR_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CARGOS', 'column', 'CAR_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_CARGOS', 'column', 'CAR_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CARGOS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CAR_NOM')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CARGOS', 'column', 'CAR_NOM'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Nombre del cargo',
   'user', @CurrentUser, 'table', 'SCPM_CARGOS', 'column', 'CAR_NOM'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CARGOS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CAR_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CARGOS', 'column', 'CAR_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del registro activo o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_CARGOS', 'column', 'CAR_EST'
go

/*==============================================================*/
/* Table: SCPM_CONYUGES                                         */
/*==============================================================*/
create table SCPM_CONYUGES (
   PER_ID               int                  identity,
   CON_ID               int                  not null,
   PROF_ID              int                  null,
   CON_NUM_DOC          text                 null,
   CON_APE_PAT          text                 null,
   CON_APE_MAT          text                 null,
   CON_NOM1             text                 null,
   CON_NOM2             text                 null,
   CON_FEC_NAC          datetime             null,
   CON_CEL              int                  null,
   CON_TEL              int                  null,
   CON_DIR              text                 null,
   CON_COR_PER          text                 null,
   CON_PRO              text                 null,
   CON_TRA              bit                  null,
   CON_NOM_EMP          text                 null,
   CON_NUM_TRA          int                  null,
   CON_EST              bit                  null,
   constraint PK_SCPM_CONYUGES primary key nonclustered (PER_ID, CON_ID)
)
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CONYUGES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'PER_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'codigo unico del funcionario',
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'PER_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CONYUGES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CON_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CONYUGES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PROF_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'PROF_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'PROF_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CONYUGES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CON_NUM_DOC')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_NUM_DOC'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'numero de documento del conyugue',
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_NUM_DOC'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CONYUGES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CON_APE_PAT')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_APE_PAT'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Apellido paterno del conyugue',
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_APE_PAT'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CONYUGES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CON_APE_MAT')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_APE_MAT'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Aoellido materno del conyugue',
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_APE_MAT'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CONYUGES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CON_NOM1')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_NOM1'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Primer Nombre del conyugue',
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_NOM1'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CONYUGES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CON_NOM2')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_NOM2'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Segundo nombre del conyugue',
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_NOM2'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CONYUGES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CON_FEC_NAC')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_FEC_NAC'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Fecha de nacimiento del conyugue',
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_FEC_NAC'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CONYUGES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CON_CEL')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_CEL'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Numero celular del conyugue',
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_CEL'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CONYUGES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CON_TEL')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_TEL'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Numero telefono fijo del conyugue',
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_TEL'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CONYUGES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CON_DIR')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_DIR'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Direccion del conyugue',
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_DIR'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CONYUGES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CON_COR_PER')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_COR_PER'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Correo personal del conyugue',
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_COR_PER'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CONYUGES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CON_PRO')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_PRO'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Profesion del conyugue',
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_PRO'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CONYUGES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CON_TRA')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_TRA'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'trabaja si o no',
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_TRA'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CONYUGES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CON_NOM_EMP')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_NOM_EMP'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Nombre de la empresa donde trabaja el conyugue',
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_NOM_EMP'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CONYUGES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CON_NUM_TRA')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_NUM_TRA'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Numero de telefono donde trabaja el conyugue',
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_NUM_TRA'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_CONYUGES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CON_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del registro activo o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_CONYUGES', 'column', 'CON_EST'
go

/*==============================================================*/
/* Index: RELATIONSHIP_8_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_8_FK on SCPM_CONYUGES (
PER_ID ASC
)
go

/*==============================================================*/
/* Index: RELATIONSHIP_27_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_27_FK on SCPM_CONYUGES (
PROF_ID ASC
)
go

/*==============================================================*/
/* Table: SCPM_DENOMINACIONES                                   */
/*==============================================================*/
create table SCPM_DENOMINACIONES (
   DEN_ID               int                  identity,
   DEN_NOM              text                 null,
   DEN_GRA              text                 null,
   DEN_RMU              text                 null,
   DEN_RMU_ANT          text                 null,
   DEN_EST              bit                  null,
   constraint PK_SCPM_DENOMINACIONES primary key nonclustered (DEN_ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('SCPM_DENOMINACIONES') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'SCPM_DENOMINACIONES' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Contiene los cargos publicos', 
   'user', @CurrentUser, 'table', 'SCPM_DENOMINACIONES'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_DENOMINACIONES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'DEN_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_DENOMINACIONES', 'column', 'DEN_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_DENOMINACIONES', 'column', 'DEN_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_DENOMINACIONES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'DEN_NOM')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_DENOMINACIONES', 'column', 'DEN_NOM'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'El nombre de la Denominacion',
   'user', @CurrentUser, 'table', 'SCPM_DENOMINACIONES', 'column', 'DEN_NOM'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_DENOMINACIONES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'DEN_GRA')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_DENOMINACIONES', 'column', 'DEN_GRA'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'El grado de la denominacion',
   'user', @CurrentUser, 'table', 'SCPM_DENOMINACIONES', 'column', 'DEN_GRA'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_DENOMINACIONES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'DEN_RMU')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_DENOMINACIONES', 'column', 'DEN_RMU'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'La renumeracion de cada denominacion',
   'user', @CurrentUser, 'table', 'SCPM_DENOMINACIONES', 'column', 'DEN_RMU'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_DENOMINACIONES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'DEN_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_DENOMINACIONES', 'column', 'DEN_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del registro activo o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_DENOMINACIONES', 'column', 'DEN_EST'
go

/*==============================================================*/
/* Table: SCPM_DISCAPACIDADES                                   */
/*==============================================================*/
create table SCPM_DISCAPACIDADES (
   DIS_ID               int                  identity,
   PARE_ID              int                  null,
   PER_ID               int                  null,
   TIP_DIS_ID           int                  null,
   DIS_CLA              bit                  null,
   DIS_POR              decimal              null,
   DIS_EST              bit                  null,
   DIS_CONADIS          text                 null,
   constraint PK_SCPM_DISCAPACIDADES primary key nonclustered (DIS_ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('SCPM_DISCAPACIDADES') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'SCPM_DISCAPACIDADES' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Las discapacidades que tiene el funcionario', 
   'user', @CurrentUser, 'table', 'SCPM_DISCAPACIDADES'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_DISCAPACIDADES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'DIS_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_DISCAPACIDADES', 'column', 'DIS_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_DISCAPACIDADES', 'column', 'DIS_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_DISCAPACIDADES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PARE_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_DISCAPACIDADES', 'column', 'PARE_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_DISCAPACIDADES', 'column', 'PARE_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_DISCAPACIDADES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_DISCAPACIDADES', 'column', 'PER_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'codigo unico del funcionario',
   'user', @CurrentUser, 'table', 'SCPM_DISCAPACIDADES', 'column', 'PER_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_DISCAPACIDADES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'TIP_DIS_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_DISCAPACIDADES', 'column', 'TIP_DIS_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_DISCAPACIDADES', 'column', 'TIP_DIS_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_DISCAPACIDADES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'DIS_CLA')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_DISCAPACIDADES', 'column', 'DIS_CLA'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'La clase de discapacidad',
   'user', @CurrentUser, 'table', 'SCPM_DISCAPACIDADES', 'column', 'DIS_CLA'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_DISCAPACIDADES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'DIS_POR')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_DISCAPACIDADES', 'column', 'DIS_POR'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'El porcentaje del la tabla ',
   'user', @CurrentUser, 'table', 'SCPM_DISCAPACIDADES', 'column', 'DIS_POR'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_DISCAPACIDADES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'DIS_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_DISCAPACIDADES', 'column', 'DIS_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del registro activo o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_DISCAPACIDADES', 'column', 'DIS_EST'
go

/*==============================================================*/
/* Index: RELATIONSHIP_13_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_13_FK on SCPM_DISCAPACIDADES (
PER_ID ASC
)
go

/*==============================================================*/
/* Index: RELATIONSHIP_14_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_14_FK on SCPM_DISCAPACIDADES (
TIP_DIS_ID ASC
)
go

/*==============================================================*/
/* Index: RELATIONSHIP_25_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_25_FK on SCPM_DISCAPACIDADES (
PARE_ID ASC
)
go

/*==============================================================*/
/* Table: SCPM_EMERGENCIAS                                      */
/*==============================================================*/
create table SCPM_EMERGENCIAS (
   PER_ID               int                  identity,
   CON_FAM_EME_ID       int                  not null,
   PARE_ID              int                  null,
   CON_FAM_EME_NOM      text                 null,
   CON_FAM_EME_TEF      int                  null,
   CON_FAM_EME_CEL      int                  null,
   CON_FAM_EME_EST      bit                  null,
   constraint PK_SCPM_EMERGENCIAS primary key nonclustered (PER_ID, CON_FAM_EME_ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('SCPM_EMERGENCIAS') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'SCPM_EMERGENCIAS' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Cantactos de emergencia por funcionarios', 
   'user', @CurrentUser, 'table', 'SCPM_EMERGENCIAS'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_EMERGENCIAS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_EMERGENCIAS', 'column', 'PER_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'codigo unico del funcionario',
   'user', @CurrentUser, 'table', 'SCPM_EMERGENCIAS', 'column', 'PER_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_EMERGENCIAS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CON_FAM_EME_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_EMERGENCIAS', 'column', 'CON_FAM_EME_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_EMERGENCIAS', 'column', 'CON_FAM_EME_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_EMERGENCIAS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PARE_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_EMERGENCIAS', 'column', 'PARE_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_EMERGENCIAS', 'column', 'PARE_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_EMERGENCIAS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CON_FAM_EME_NOM')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_EMERGENCIAS', 'column', 'CON_FAM_EME_NOM'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Nombre del contacto de emergencia',
   'user', @CurrentUser, 'table', 'SCPM_EMERGENCIAS', 'column', 'CON_FAM_EME_NOM'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_EMERGENCIAS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CON_FAM_EME_TEF')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_EMERGENCIAS', 'column', 'CON_FAM_EME_TEF'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Telefono fijo de contacto de emergencia',
   'user', @CurrentUser, 'table', 'SCPM_EMERGENCIAS', 'column', 'CON_FAM_EME_TEF'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_EMERGENCIAS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CON_FAM_EME_CEL')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_EMERGENCIAS', 'column', 'CON_FAM_EME_CEL'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Telefono celular del contacto de emergencia',
   'user', @CurrentUser, 'table', 'SCPM_EMERGENCIAS', 'column', 'CON_FAM_EME_CEL'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_EMERGENCIAS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CON_FAM_EME_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_EMERGENCIAS', 'column', 'CON_FAM_EME_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del registro activo o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_EMERGENCIAS', 'column', 'CON_FAM_EME_EST'
go

/*==============================================================*/
/* Index: RELATIONSHIP_12_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_12_FK on SCPM_EMERGENCIAS (
PER_ID ASC
)
go

/*==============================================================*/
/* Index: RELATIONSHIP_26_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_26_FK on SCPM_EMERGENCIAS (
PARE_ID ASC
)
go

/*==============================================================*/
/* Table: SCPM_ESTADOS_CIVILES                                  */
/*==============================================================*/
create table SCPM_ESTADOS_CIVILES (
   EST_CIV_ID           int                  identity,
   EST_CIV_NOM          text                 null,
   EST_CIV_EST          bit                  null,
   constraint PK_SCPM_ESTADOS_CIVILES primary key nonclustered (EST_CIV_ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('SCPM_ESTADOS_CIVILES') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'SCPM_ESTADOS_CIVILES' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Todos los estados civiles', 
   'user', @CurrentUser, 'table', 'SCPM_ESTADOS_CIVILES'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_ESTADOS_CIVILES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'EST_CIV_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_ESTADOS_CIVILES', 'column', 'EST_CIV_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_ESTADOS_CIVILES', 'column', 'EST_CIV_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_ESTADOS_CIVILES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'EST_CIV_NOM')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_ESTADOS_CIVILES', 'column', 'EST_CIV_NOM'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Nombre del estado civil',
   'user', @CurrentUser, 'table', 'SCPM_ESTADOS_CIVILES', 'column', 'EST_CIV_NOM'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_ESTADOS_CIVILES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'EST_CIV_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_ESTADOS_CIVILES', 'column', 'EST_CIV_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del registro activo o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_ESTADOS_CIVILES', 'column', 'EST_CIV_EST'
go

/*==============================================================*/
/* Table: SCPM_PAIS                                             */
/*==============================================================*/
create table SCPM_PAIS (
   PAI_ID               int                  identity,
   PAI_CIU              text                 null,
   PAI_EST              bit                  null,
   PAI_NACIONALIDAD     text                 null,
   constraint PK_SCPM_PAIS primary key nonclustered (PAI_ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('SCPM_PAIS') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'SCPM_PAIS' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Contiene los paises con sus respectivas y principales ciudades', 
   'user', @CurrentUser, 'table', 'SCPM_PAIS'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PAIS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PAI_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PAIS', 'column', 'PAI_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_PAIS', 'column', 'PAI_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PAIS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PAI_CIU')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PAIS', 'column', 'PAI_CIU'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Nombre de la ciudad principales',
   'user', @CurrentUser, 'table', 'SCPM_PAIS', 'column', 'PAI_CIU'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PAIS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PAI_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PAIS', 'column', 'PAI_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del registro activo o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_PAIS', 'column', 'PAI_EST'
go

/*==============================================================*/
/* Table: SCPM_PARENTESCOS                                      */
/*==============================================================*/
create table SCPM_PARENTESCOS (
   PARE_ID              int                  identity,
   PARE_NOM             text                 null,
   PARE_EST             bit                  null,
   constraint PK_SCPM_PARENTESCOS primary key nonclustered (PARE_ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('SCPM_PARENTESCOS') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'SCPM_PARENTESCOS' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Contiene los parentescos', 
   'user', @CurrentUser, 'table', 'SCPM_PARENTESCOS'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PARENTESCOS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PARE_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PARENTESCOS', 'column', 'PARE_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_PARENTESCOS', 'column', 'PARE_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PARENTESCOS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PARE_NOM')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PARENTESCOS', 'column', 'PARE_NOM'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Nombre del parentesco',
   'user', @CurrentUser, 'table', 'SCPM_PARENTESCOS', 'column', 'PARE_NOM'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PARENTESCOS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PARE_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PARENTESCOS', 'column', 'PARE_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del registro activo o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_PARENTESCOS', 'column', 'PARE_EST'
go

/*==============================================================*/
/* Table: SCPM_PARROQUIAS                                       */
/*==============================================================*/
create table SCPM_PARROQUIAS (
   PAR_ID               int                  identity,
   CAN_ID               int                  not null,
   PAR_NOM              text                 null,
   PAR_EST              bit                  null,
   constraint PK_SCPM_PARROQUIAS primary key nonclustered (PAR_ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('SCPM_PARROQUIAS') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'SCPM_PARROQUIAS' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Las parroquias de cada canton', 
   'user', @CurrentUser, 'table', 'SCPM_PARROQUIAS'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PARROQUIAS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PAR_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PARROQUIAS', 'column', 'PAR_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_PARROQUIAS', 'column', 'PAR_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PARROQUIAS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CAN_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PARROQUIAS', 'column', 'CAN_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla ',
   'user', @CurrentUser, 'table', 'SCPM_PARROQUIAS', 'column', 'CAN_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PARROQUIAS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PAR_NOM')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PARROQUIAS', 'column', 'PAR_NOM'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'el nombre del la parroquia',
   'user', @CurrentUser, 'table', 'SCPM_PARROQUIAS', 'column', 'PAR_NOM'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PARROQUIAS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PAR_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PARROQUIAS', 'column', 'PAR_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del registro activo o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_PARROQUIAS', 'column', 'PAR_EST'
go

/*==============================================================*/
/* Index: RELATIONSHIP_29_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_29_FK on SCPM_PARROQUIAS (
CAN_ID ASC
)
go

/*==============================================================*/
/* Table: SCPM_PERSONALES                                       */
/*==============================================================*/
create table SCPM_PERSONALES (
   PER_ID               int                  identity,
   EST_CIV_ID           int                  null,
   TIP_IDE_COD          int                  null,
   RAZ_ID               int                  null,
   PAI_ID               int                  not null,
   SEC_ID               int                  not null,
   PER_NUM_DOC          char(20)             null,
   PER_APE_PAT          char(64)             null,
   PER_APE_MAT          char(20)             null,
   PER_NOM1             char(64)             null,
   PER_NOM2             char(64)             null,
   PER_FEC_NAC          datetime             null,
   PER_GEN              binary(1)            null,
   PER_CEL              int                  null,
   PER_TEL              int                  null,
   PER_TAR              bit                  null,
   PER_EXT              int                  null,
   PER_DIR              text                 null,
   PER_PAIS_NAC         int                  null,
   PER_LIB_MIL_NUM      int                  null,
   PER_TIP_SAN          char(4)              null,
   PER_COR_PER          text                 null,
   PER_EST              bit                  null,
   constraint PK_SCPM_PERSONALES primary key nonclustered (PER_ID)
)
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'codigo unico del funcionario',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'EST_CIV_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'EST_CIV_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'EST_CIV_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'TIP_IDE_COD')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'TIP_IDE_COD'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'TIP_IDE_COD'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'RAZ_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'RAZ_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'RAZ_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PAI_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PAI_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PAI_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'SEC_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'SEC_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'SEC_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_NUM_DOC')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_NUM_DOC'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Numero documento del funcionario',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_NUM_DOC'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_APE_PAT')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_APE_PAT'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Apellido paterno del funcionario',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_APE_PAT'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_APE_MAT')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_APE_MAT'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Apellido materno del funcionario',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_APE_MAT'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_NOM1')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_NOM1'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Primer nombre del funcionario',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_NOM1'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_NOM2')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_NOM2'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Segundo nombre del funcionario',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_NOM2'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_FEC_NAC')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_FEC_NAC'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Fecha de naciemiento del funcionario',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_FEC_NAC'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_GEN')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_GEN'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Sexo del funcionario',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_GEN'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_CEL')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_CEL'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Numero de celular del funcionario',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_CEL'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_TEL')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_TEL'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Numero de Telefono fijo del funcionario',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_TEL'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_TAR')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_TAR'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Tiene tarjeta el funcionario ',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_TAR'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_EXT')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_EXT'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Es la extencion del lugar de telefono del funcionario',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_EXT'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_DIR')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_DIR'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Direccion de donde vive el funcionario actualmente',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_DIR'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_PAIS_NAC')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_PAIS_NAC'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la tabla pais/ciudad con el campo nacionalidad',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_PAIS_NAC'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_LIB_MIL_NUM')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_LIB_MIL_NUM'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'El numero de libreta militar del funcionario',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_LIB_MIL_NUM'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_TIP_SAN')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_TIP_SAN'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'El tipo de sangre que contiene el funcionario',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_TIP_SAN'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_COR_PER')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_COR_PER'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Correo personal no institucional del Funcionario',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_COR_PER'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PERSONALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del fucionario activado o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_PERSONALES', 'column', 'PER_EST'
go

/*==============================================================*/
/* Index: RELATIONSHIP_10_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_10_FK on SCPM_PERSONALES (
TIP_IDE_COD ASC
)
go

/*==============================================================*/
/* Index: RELATIONSHIP_11_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_11_FK on SCPM_PERSONALES (
EST_CIV_ID ASC
)
go

/*==============================================================*/
/* Index: RELATIONSHIP_24_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_24_FK on SCPM_PERSONALES (
RAZ_ID ASC
)
go

/*==============================================================*/
/* Index: RELATIONSHIP_28_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_28_FK on SCPM_PERSONALES (
PAI_ID ASC
)
go

/*==============================================================*/
/* Index: RELATIONSHIP_33_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_33_FK on SCPM_PERSONALES (
SEC_ID ASC
)
go

/*==============================================================*/
/* Table: SCPM_PROFESIONES                                      */
/*==============================================================*/
create table SCPM_PROFESIONES (
   PROF_ID              int                  identity,
   PROF_NOM             text                 null,
   PROF_EST             bit                  null,
   constraint PK_SCPM_PROFESIONES primary key nonclustered (PROF_ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('SCPM_PROFESIONES') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'SCPM_PROFESIONES' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Almacena las profeciones', 
   'user', @CurrentUser, 'table', 'SCPM_PROFESIONES'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PROFESIONES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PROF_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PROFESIONES', 'column', 'PROF_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_PROFESIONES', 'column', 'PROF_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PROFESIONES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PROF_NOM')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PROFESIONES', 'column', 'PROF_NOM'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Nombre de las profeciones',
   'user', @CurrentUser, 'table', 'SCPM_PROFESIONES', 'column', 'PROF_NOM'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PROFESIONES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PROF_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PROFESIONES', 'column', 'PROF_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del registro activo o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_PROFESIONES', 'column', 'PROF_EST'
go

/*==============================================================*/
/* Table: SCPM_PROVINCIAS                                       */
/*==============================================================*/
create table SCPM_PROVINCIAS (
   PRO_ID               int                  identity,
   PRO_NOM              text                 null,
   PRO_EST              bit                  null,
   constraint PK_SCPM_PROVINCIAS primary key nonclustered (PRO_ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('SCPM_PROVINCIAS') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'SCPM_PROVINCIAS' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Es la tabla padre de cantones, parroquias, sectores', 
   'user', @CurrentUser, 'table', 'SCPM_PROVINCIAS'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PROVINCIAS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PRO_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PROVINCIAS', 'column', 'PRO_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_PROVINCIAS', 'column', 'PRO_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PROVINCIAS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PRO_NOM')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PROVINCIAS', 'column', 'PRO_NOM'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Nombre de la provincia',
   'user', @CurrentUser, 'table', 'SCPM_PROVINCIAS', 'column', 'PRO_NOM'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PROVINCIAS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PRO_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PROVINCIAS', 'column', 'PRO_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del registro activo o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_PROVINCIAS', 'column', 'PRO_EST'
go

/*==============================================================*/
/* Table: SCPM_PUESTOS                                          */
/*==============================================================*/
create table SCPM_PUESTOS (
   PUE_ID               int                  identity,
   REL_LAB_ID           int                  null,
   DEN_ID               int                  null,
   CAR_ID               int                  null,
   ARE_COD              int                  null,
   PUE_EST              bit                  null,
   constraint PK_SCPM_PUESTOS primary key nonclustered (PUE_ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('SCPM_PUESTOS') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'SCPM_PUESTOS' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Tabla Padre de Denominaciones, Cargos,Relacion Laboraes', 
   'user', @CurrentUser, 'table', 'SCPM_PUESTOS'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PUESTOS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PUE_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PUESTOS', 'column', 'PUE_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_PUESTOS', 'column', 'PUE_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PUESTOS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'REL_LAB_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PUESTOS', 'column', 'REL_LAB_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_PUESTOS', 'column', 'REL_LAB_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PUESTOS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'DEN_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PUESTOS', 'column', 'DEN_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_PUESTOS', 'column', 'DEN_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PUESTOS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'CAR_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PUESTOS', 'column', 'CAR_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_PUESTOS', 'column', 'CAR_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PUESTOS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'ARE_COD')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PUESTOS', 'column', 'ARE_COD'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla ',
   'user', @CurrentUser, 'table', 'SCPM_PUESTOS', 'column', 'ARE_COD'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PUESTOS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PUE_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PUESTOS', 'column', 'PUE_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del registro activo o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_PUESTOS', 'column', 'PUE_EST'
go

/*==============================================================*/
/* Index: RELATIONSHIP_5_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_5_FK on SCPM_PUESTOS (
DEN_ID ASC
)
go

/*==============================================================*/
/* Index: RELATIONSHIP_6_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_6_FK on SCPM_PUESTOS (
CAR_ID ASC
)
go

/*==============================================================*/
/* Index: RELATIONSHIP_7_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_7_FK on SCPM_PUESTOS (
REL_LAB_ID ASC
)
go

/*==============================================================*/
/* Index: RELATIONSHIP_37_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_37_FK on SCPM_PUESTOS (
ARE_COD ASC
)
go

/*==============================================================*/
/* Table: SCPM_PUESTO_HIST                                      */
/*==============================================================*/
create table SCPM_PUESTO_HIST (
   PST_HIS_ID           int                  identity,
   PER_ID               int                  null,
   PUE_ID               int                  null,
   PST_HIS_FEC_INI      datetime             null,
   PST_HIS_FEC_FIN      datetime             null,
   constraint PK_SCPM_PUESTO_HIST primary key nonclustered (PST_HIS_ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('SCPM_PUESTO_HIST') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'SCPM_PUESTO_HIST' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Historial del los puestos fijos del funcionario', 
   'user', @CurrentUser, 'table', 'SCPM_PUESTO_HIST'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PUESTO_HIST')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PST_HIS_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PUESTO_HIST', 'column', 'PST_HIS_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla ',
   'user', @CurrentUser, 'table', 'SCPM_PUESTO_HIST', 'column', 'PST_HIS_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PUESTO_HIST')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PUESTO_HIST', 'column', 'PER_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'codigo unico del funcionario',
   'user', @CurrentUser, 'table', 'SCPM_PUESTO_HIST', 'column', 'PER_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PUESTO_HIST')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PUE_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PUESTO_HIST', 'column', 'PUE_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_PUESTO_HIST', 'column', 'PUE_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PUESTO_HIST')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PST_HIS_FEC_INI')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PUESTO_HIST', 'column', 'PST_HIS_FEC_INI'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'La fecha de inicio del ese puesto fijo',
   'user', @CurrentUser, 'table', 'SCPM_PUESTO_HIST', 'column', 'PST_HIS_FEC_INI'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_PUESTO_HIST')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PST_HIS_FEC_FIN')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_PUESTO_HIST', 'column', 'PST_HIS_FEC_FIN'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'La fecha de final del ese puesto fijo',
   'user', @CurrentUser, 'table', 'SCPM_PUESTO_HIST', 'column', 'PST_HIS_FEC_FIN'
go

/*==============================================================*/
/* Index: RELATIONSHIP_31_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_31_FK on SCPM_PUESTO_HIST (
PUE_ID ASC
)
go

/*==============================================================*/
/* Index: RELATIONSHIP_35_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_35_FK on SCPM_PUESTO_HIST (
PER_ID ASC
)
go

/*==============================================================*/
/* Table: SCPM_RAZAS                                            */
/*==============================================================*/
create table SCPM_RAZAS (
   RAZ_ID               int                  identity,
   RAZ_NOM              text                 null,
   RAZ_EST              bit                  null,
   constraint PK_SCPM_RAZAS primary key nonclustered (RAZ_ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('SCPM_RAZAS') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'SCPM_RAZAS' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Amacena las Razas existentes', 
   'user', @CurrentUser, 'table', 'SCPM_RAZAS'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_RAZAS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'RAZ_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_RAZAS', 'column', 'RAZ_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_RAZAS', 'column', 'RAZ_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_RAZAS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'RAZ_NOM')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_RAZAS', 'column', 'RAZ_NOM'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Nombre de la raza',
   'user', @CurrentUser, 'table', 'SCPM_RAZAS', 'column', 'RAZ_NOM'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_RAZAS')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'RAZ_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_RAZAS', 'column', 'RAZ_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del registro activo o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_RAZAS', 'column', 'RAZ_EST'
go

/*==============================================================*/
/* Table: SCPM_RELACIONES_LABORALES                             */
/*==============================================================*/
create table SCPM_RELACIONES_LABORALES (
   REL_LAB_ID           int                  identity,
   REL_LAB_NOM          text                 null,
   REL_LAB_EST          bit                  null,
   constraint PK_SCPM_RELACIONES_LABORALES primary key nonclustered (REL_LAB_ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('SCPM_RELACIONES_LABORALES') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'SCPM_RELACIONES_LABORALES' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Contine los tipos de relacion Laboral', 
   'user', @CurrentUser, 'table', 'SCPM_RELACIONES_LABORALES'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_RELACIONES_LABORALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'REL_LAB_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_RELACIONES_LABORALES', 'column', 'REL_LAB_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_RELACIONES_LABORALES', 'column', 'REL_LAB_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_RELACIONES_LABORALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'REL_LAB_NOM')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_RELACIONES_LABORALES', 'column', 'REL_LAB_NOM'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Nombre del la relacion laboral',
   'user', @CurrentUser, 'table', 'SCPM_RELACIONES_LABORALES', 'column', 'REL_LAB_NOM'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_RELACIONES_LABORALES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'REL_LAB_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_RELACIONES_LABORALES', 'column', 'REL_LAB_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del registro activo o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_RELACIONES_LABORALES', 'column', 'REL_LAB_EST'
go

/*==============================================================*/
/* Table: SCPM_SECTORES                                         */
/*==============================================================*/
create table SCPM_SECTORES (
   SEC_ID               int                  identity,
   PAR_ID               int                  not null,
   SEC_NOM              text                 null,
   SEC_EST              bit                  null,
   constraint PK_SCPM_SECTORES primary key nonclustered (SEC_ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('SCPM_SECTORES') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'SCPM_SECTORES' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Almacena los sectores de cada parroquia', 
   'user', @CurrentUser, 'table', 'SCPM_SECTORES'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_SECTORES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'SEC_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_SECTORES', 'column', 'SEC_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_SECTORES', 'column', 'SEC_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_SECTORES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PAR_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_SECTORES', 'column', 'PAR_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_SECTORES', 'column', 'PAR_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_SECTORES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'SEC_NOM')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_SECTORES', 'column', 'SEC_NOM'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Nombre del sector o barrio',
   'user', @CurrentUser, 'table', 'SCPM_SECTORES', 'column', 'SEC_NOM'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_SECTORES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'SEC_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_SECTORES', 'column', 'SEC_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del registro activo o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_SECTORES', 'column', 'SEC_EST'
go

/*==============================================================*/
/* Index: RELATIONSHIP_23_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_23_FK on SCPM_SECTORES (
PAR_ID ASC
)
go

/*==============================================================*/
/* Table: SCPM_SUBROGA_HIST                                     */
/*==============================================================*/
create table SCPM_SUBROGA_HIST (
   SUB_HIS_ID           int                  identity,
   PER_ID               int                  null,
   PUE_ID               int                  null,
   SUB_HIS_IS_ENCARGO   bit                  null,
   SUB_HIS_FEC_INI      datetime             null,
   SUB_HIS_FEC_FIN      datetime             null,
   SUB_HIS_EST          bit                  null,
   constraint PK_SCPM_SUBROGA_HIST primary key nonclustered (SUB_HIS_ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('SCPM_SUBROGA_HIST') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'SCPM_SUBROGA_HIST' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Historial de registros de las subrogaciones y encargos por funcionarios', 
   'user', @CurrentUser, 'table', 'SCPM_SUBROGA_HIST'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_SUBROGA_HIST')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'SUB_HIS_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_SUBROGA_HIST', 'column', 'SUB_HIS_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_SUBROGA_HIST', 'column', 'SUB_HIS_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_SUBROGA_HIST')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PER_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_SUBROGA_HIST', 'column', 'PER_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'codigo unico del funcionario',
   'user', @CurrentUser, 'table', 'SCPM_SUBROGA_HIST', 'column', 'PER_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_SUBROGA_HIST')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'PUE_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_SUBROGA_HIST', 'column', 'PUE_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_SUBROGA_HIST', 'column', 'PUE_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_SUBROGA_HIST')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'SUB_HIS_IS_ENCARGO')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_SUBROGA_HIST', 'column', 'SUB_HIS_IS_ENCARGO'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'El tipo si es subrogacion o encargo',
   'user', @CurrentUser, 'table', 'SCPM_SUBROGA_HIST', 'column', 'SUB_HIS_IS_ENCARGO'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_SUBROGA_HIST')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'SUB_HIS_FEC_INI')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_SUBROGA_HIST', 'column', 'SUB_HIS_FEC_INI'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Fecha de inicio de la subrogacion o del encargo',
   'user', @CurrentUser, 'table', 'SCPM_SUBROGA_HIST', 'column', 'SUB_HIS_FEC_INI'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_SUBROGA_HIST')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'SUB_HIS_FEC_FIN')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_SUBROGA_HIST', 'column', 'SUB_HIS_FEC_FIN'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Fecha de final de la subrogacion o del encargo',
   'user', @CurrentUser, 'table', 'SCPM_SUBROGA_HIST', 'column', 'SUB_HIS_FEC_FIN'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_SUBROGA_HIST')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'SUB_HIS_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_SUBROGA_HIST', 'column', 'SUB_HIS_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del registro activo o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_SUBROGA_HIST', 'column', 'SUB_HIS_EST'
go

/*==============================================================*/
/* Index: RELATIONSHIP_34_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_34_FK on SCPM_SUBROGA_HIST (
PER_ID ASC
)
go

/*==============================================================*/
/* Index: RELATIONSHIP_30_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_30_FK on SCPM_SUBROGA_HIST (
PUE_ID ASC
)
go

/*==============================================================*/
/* Table: SCPM_TIPO_DISCAPACIDADES                              */
/*==============================================================*/
create table SCPM_TIPO_DISCAPACIDADES (
   TIP_DIS_ID           int                  identity,
   TIP_DIS_NOM          text                 null,
   TIP_DIS_EST          bit                  null,
   constraint PK_SCPM_TIPO_DISCAPACIDADES primary key nonclustered (TIP_DIS_ID)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('SCPM_TIPO_DISCAPACIDADES') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'SCPM_TIPO_DISCAPACIDADES' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Almacena todos los tipos de discapacidades', 
   'user', @CurrentUser, 'table', 'SCPM_TIPO_DISCAPACIDADES'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_TIPO_DISCAPACIDADES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'TIP_DIS_ID')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_TIPO_DISCAPACIDADES', 'column', 'TIP_DIS_ID'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_TIPO_DISCAPACIDADES', 'column', 'TIP_DIS_ID'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_TIPO_DISCAPACIDADES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'TIP_DIS_NOM')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_TIPO_DISCAPACIDADES', 'column', 'TIP_DIS_NOM'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Nombre de tipo discapacidades',
   'user', @CurrentUser, 'table', 'SCPM_TIPO_DISCAPACIDADES', 'column', 'TIP_DIS_NOM'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_TIPO_DISCAPACIDADES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'TIP_DIS_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_TIPO_DISCAPACIDADES', 'column', 'TIP_DIS_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del registro activo o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_TIPO_DISCAPACIDADES', 'column', 'TIP_DIS_EST'
go

/*==============================================================*/
/* Table: SCPM_TIPO_IDENTIFICACIONES                            */
/*==============================================================*/
create table SCPM_TIPO_IDENTIFICACIONES (
   TIP_IDE_COD          int                  identity,
   TIP_IDE_NOM          text                 null,
   TIP_IDE_EST          bit                  null,
   constraint PK_SCPM_TIPO_IDENTIFICACIONES primary key nonclustered (TIP_IDE_COD)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('SCPM_TIPO_IDENTIFICACIONES') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'SCPM_TIPO_IDENTIFICACIONES' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Contiene los tipos de identificaciones', 
   'user', @CurrentUser, 'table', 'SCPM_TIPO_IDENTIFICACIONES'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_TIPO_IDENTIFICACIONES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'TIP_IDE_COD')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_TIPO_IDENTIFICACIONES', 'column', 'TIP_IDE_COD'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_TIPO_IDENTIFICACIONES', 'column', 'TIP_IDE_COD'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_TIPO_IDENTIFICACIONES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'TIP_IDE_NOM')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_TIPO_IDENTIFICACIONES', 'column', 'TIP_IDE_NOM'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Nombre del tipo de documento',
   'user', @CurrentUser, 'table', 'SCPM_TIPO_IDENTIFICACIONES', 'column', 'TIP_IDE_NOM'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_TIPO_IDENTIFICACIONES')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'TIP_IDE_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_TIPO_IDENTIFICACIONES', 'column', 'TIP_IDE_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del registro activo o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_TIPO_IDENTIFICACIONES', 'column', 'TIP_IDE_EST'
go

/*==============================================================*/
/* Table: SCPM_UNIDAD                                           */
/*==============================================================*/
create table SCPM_UNIDAD (
   UNI_COD              int                  identity,
   UNI_NOM              text                 null,
   UNI_EST              bit                  null,
   constraint PK_SCPM_UNIDAD primary key nonclustered (UNI_COD)
)
go

if exists (select 1 from  sys.extended_properties
           where major_id = object_id('SCPM_UNIDAD') and minor_id = 0)
begin 
   declare @CurrentUser sysname 
select @CurrentUser = user_name() 
execute sp_dropextendedproperty 'MS_Description',  
   'user', @CurrentUser, 'table', 'SCPM_UNIDAD' 
 
end 


select @CurrentUser = user_name() 
execute sp_addextendedproperty 'MS_Description',  
   'Almacena las unidades de la Scpm', 
   'user', @CurrentUser, 'table', 'SCPM_UNIDAD'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_UNIDAD')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'UNI_COD')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_UNIDAD', 'column', 'UNI_COD'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Codigo de la clave primaria de la tabla',
   'user', @CurrentUser, 'table', 'SCPM_UNIDAD', 'column', 'UNI_COD'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_UNIDAD')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'UNI_NOM')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_UNIDAD', 'column', 'UNI_NOM'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Nombre de la unidad de la Scpm',
   'user', @CurrentUser, 'table', 'SCPM_UNIDAD', 'column', 'UNI_NOM'
go

if exists(select 1 from sys.extended_properties p where
      p.major_id = object_id('SCPM_UNIDAD')
  and p.minor_id = (select c.column_id from sys.columns c where c.object_id = p.major_id and c.name = 'UNI_EST')
)
begin
   declare @CurrentUser sysname
select @CurrentUser = user_name()
execute sp_dropextendedproperty 'MS_Description', 
   'user', @CurrentUser, 'table', 'SCPM_UNIDAD', 'column', 'UNI_EST'

end


select @CurrentUser = user_name()
execute sp_addextendedproperty 'MS_Description', 
   'Estado del registro activo o desactivado',
   'user', @CurrentUser, 'table', 'SCPM_UNIDAD', 'column', 'UNI_EST'
go

alter table SCPM_AREAS
   add constraint FK_SCPM_ARE_RELATIONS_SCPM_UNI foreign key (UNI_COD)
      references SCPM_UNIDAD (UNI_COD)
go

alter table SCPM_CANTONES
   add constraint FK_SCPM_CAN_RELATIONS_SCPM_PRO foreign key (PRO_ID)
      references SCPM_PROVINCIAS (PRO_ID)
go

alter table SCPM_CONYUGES
   add constraint FK_SCPM_CON_RELATIONS_SCPM_PRO foreign key (PROF_ID)
      references SCPM_PROFESIONES (PROF_ID)
go

alter table SCPM_CONYUGES
   add constraint FK_SCPM_CON_RELATIONS_SCPM_PER foreign key (PER_ID)
      references SCPM_PERSONALES (PER_ID)
go

alter table SCPM_DISCAPACIDADES
   add constraint FK_SCPM_DIS_RELATIONS_SCPM_PER foreign key (PER_ID)
      references SCPM_PERSONALES (PER_ID)
go

alter table SCPM_DISCAPACIDADES
   add constraint FK_SCPM_DIS_RELATIONS_SCPM_TIP foreign key (TIP_DIS_ID)
      references SCPM_TIPO_DISCAPACIDADES (TIP_DIS_ID)
go

alter table SCPM_DISCAPACIDADES
   add constraint FK_SCPM_DIS_RELATIONS_SCPM_PAR foreign key (PARE_ID)
      references SCPM_PARENTESCOS (PARE_ID)
go

alter table SCPM_EMERGENCIAS
   add constraint FK_SCPM_EME_RELATIONS_SCPM_PER foreign key (PER_ID)
      references SCPM_PERSONALES (PER_ID)
go

alter table SCPM_EMERGENCIAS
   add constraint FK_SCPM_EME_RELATIONS_SCPM_PAR foreign key (PARE_ID)
      references SCPM_PARENTESCOS (PARE_ID)
go

alter table SCPM_PARROQUIAS
   add constraint FK_SCPM_PAR_RELATIONS_SCPM_CAN foreign key (CAN_ID)
      references SCPM_CANTONES (CAN_ID)
go

alter table SCPM_PERSONALES
   add constraint FK_SCPM_PER_RELATIONS_SCPM_TIP foreign key (TIP_IDE_COD)
      references SCPM_TIPO_IDENTIFICACIONES (TIP_IDE_COD)
go

alter table SCPM_PERSONALES
   add constraint FK_SCPM_PER_RELATIONS_SCPM_EST foreign key (EST_CIV_ID)
      references SCPM_ESTADOS_CIVILES (EST_CIV_ID)
go

alter table SCPM_PERSONALES
   add constraint FK_SCPM_PER_RELATIONS_SCPM_RAZ foreign key (RAZ_ID)
      references SCPM_RAZAS (RAZ_ID)
go

alter table SCPM_PERSONALES
   add constraint FK_SCPM_PER_RELATIONS_SCPM_PAI foreign key (PAI_ID)
      references SCPM_PAIS (PAI_ID)
go

alter table SCPM_PERSONALES
   add constraint FK_SCPM_PER_RELATIONS_SCPM_SEC foreign key (SEC_ID)
      references SCPM_SECTORES (SEC_ID)
go

alter table SCPM_PUESTOS
   add constraint FK_SCPM_PUE_RELATIONS_SCPM_ARE foreign key (ARE_COD)
      references SCPM_AREAS (ARE_COD)
go

alter table SCPM_PUESTOS
   add constraint FK_SCPM_PUE_RELATIONS_SCPM_DEN foreign key (DEN_ID)
      references SCPM_DENOMINACIONES (DEN_ID)
go

alter table SCPM_PUESTOS
   add constraint FK_SCPM_PUE_RELATIONS_SCPM_CAR foreign key (CAR_ID)
      references SCPM_CARGOS (CAR_ID)
go

alter table SCPM_PUESTOS
   add constraint FK_SCPM_PUE_RELATIONS_SCPM_REL foreign key (REL_LAB_ID)
      references SCPM_RELACIONES_LABORALES (REL_LAB_ID)
go

alter table SCPM_PUESTO_HIST
   add constraint FK_SCPM_PUE_RELATIONS_SCPM_PUE foreign key (PUE_ID)
      references SCPM_PUESTOS (PUE_ID)
go

alter table SCPM_PUESTO_HIST
   add constraint FK_SCPM_PUE_RELATIONS_SCPM_PER foreign key (PER_ID)
      references SCPM_PERSONALES (PER_ID)
go

alter table SCPM_SECTORES
   add constraint FK_SCPM_SEC_RELATIONS_SCPM_PAR foreign key (PAR_ID)
      references SCPM_PARROQUIAS (PAR_ID)
go

alter table SCPM_SUBROGA_HIST
   add constraint FK_SCPM_SUB_RELATIONS_SCPM_PUE foreign key (PUE_ID)
      references SCPM_PUESTOS (PUE_ID)
go

alter table SCPM_SUBROGA_HIST
   add constraint FK_SCPM_SUB_RELATIONS_SCPM_PER foreign key (PER_ID)
      references SCPM_PERSONALES (PER_ID)
go

