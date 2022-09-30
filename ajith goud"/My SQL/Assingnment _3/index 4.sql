//add a coloumn in course table--course code varachat(4)?
-- Postgresql has text type, it's a character type that doesn't need length, 
-- it can be upto 1 GB
-- On Sql Server use varchar(max), this is upto 2 GB

create table course
(
    course_id serial primary key, -- surrogate key, aka dumb key

    course_code text unique, -- natural key. what's seen by users e.g. 'D61'

    course_name text unique, -- e.g. 'Database Structure'
    date_offered date
);


create table course
(
    course_code primary key, -- natural key. what's seen by users e.g. 'D61'

    course_name text unique, -- e.g. 'Database Structure'
    date_offered date
);


create table course
(
    course_code text, -- primary key
    course_language text, -- primary key

    course_name text unique,
    date_offered date,

    constraint pk_course primary key(course_code, course_language)
);


create table course
(
    course_id serial primary key,
    course_code text unique, -- natural key. what's seen by users e.g. 'D61'
    course_name text unique, -- e.g. 'Database Structure'
    date_offered date
);


create table course
(
    course_id serial primary key,

    course_code text, -- natural key. what's seen by users e.g. 'D61'
    course_language text, -- natural key. what's seen by users e.g. 'SPANISH'

    course_name text unique, -- e.g. 'Database Structure in Spanish'
    date_offered date,

    constraint uk_course unique key(course_code, course_language)
);


