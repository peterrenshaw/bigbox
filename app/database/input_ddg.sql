-- #===
-- # name: input_ddg.sql
-- # date: 2013SEP13
-- # prog: pr
-- # desc: sql queries to build duckduckgo table & input data
-- #===

CREATE TABLE DuckDuckgo (
    id INTEGER PRIMARY KEY,
    key, TEXT,
    heading TEXT, 
    answer TEXT,
    definition TEXT
);


