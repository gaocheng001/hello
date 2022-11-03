-- auto-generated definition
create table _app_group_sys_dept_class
(
    id           varchar not null
        constraint _app_group_sys_dept_class_pk
        primary key,
    unique_code varchar,
    ec_code varchar,
    ec_name      varchar,
    parent_id         varchar,
    unique_code_user     varchar,
    create_date     varchar,
    flag     varchar,
    ec_level     varchar,
    zf_code     varchar,
    bend    varchar
);

comment on table _app_group_sys_dept_class is '部门支出经济分类';
comment on column _app_group_sys_dept_class.id is '主键';
comment on column _app_group_expenditure_class.unique_code is '唯一标识';
comment on column _app_group_sys_dept_class.ec_code is '编码';
comment on column _app_group_sys_dept_class.ec_name is '名称';
comment on column _app_group_sys_dept_class.parent_id is '上级id';
comment on column _app_group_sys_dept_class.unique_code_user is '创建人';
comment on column _app_group_sys_dept_class.ec_level is '级次';
comment on column _app_group_sys_dept_class.zf_code is '政府id';
comment on column _app_group_sys_dept_class.bend is '是否末级1末级';
comment on column _app_group_sys_dept_class.create_date is '创建日期';
comment on column _app_group_sys_dept_class.flag is '是否停用(1.启用;0停用)';

alter table _app_group_sys_dept_class
    owner to postgres;