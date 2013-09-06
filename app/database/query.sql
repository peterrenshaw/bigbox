-- #===
-- # name: query.sql
-- # date: 2013SEP06
-- # prog: pr
-- # desc: sql queries: a) used to check data
-- #                    b) REST API queries against Line endpoint
-- #===

-- #---
-- # USAGE: IN:  sqlite3 bigbox.db < ddl-bigbox.sql
-- #        OUT: sqlite3 -header -column -echo ddl-bigbox.db < query.sql
-- #---

-- #---
-- # queries
-- #---

-- #---
-- # PERSON
-- #--- 
SELECT id, 
       first_name, 
       nick_name, 
       last_name, 
       twitter, 
       email_one
FROM   person;

-- #---
-- # STATUS_TYPE
-- #---
SELECT count,
       description 
FROM   status_type;


SELECT count, 
       description 
FROM   quality_type;


-- # ==== ENTRY REST API QUERIES === 
-- # 
-- # SELECT
-- #

-- #---
-- # ENTRY
-- #---
SELECT id, 
       line, 
       length, 
       datetime
FROM   entry;


-- #---
-- # ENTRY_STATUS
-- #---
SELECT *
FROM   entry,
       entry_status,
       status_type
WHERE
       entry.id = entry_status.entry_id AND
       status_type.id = entry_status.status_id;


--- #---
--- # all entries 
--- #---
SELECT 
       line,
       length,
       datetime
FROM 
       Entry;

--- #--- 
--- # entry by id
--- #---
SELECT line,
       length,
       datetime
FROM 
       Entry
WHERE
       Entry.id > 1


--- #--- 
--- # entry by datetime
--- #---
SELECT 
       line,
       length,
       datetime
FROM 
       Entry
--WHERE
--       Entry.datetime > (some datetime in some format)

--- #--- 
--- # entry by status
--- #--- 
SELECT 
       entry.line, 
       entry.length,
       entry.datetime
       status_type.count,
       status_type.description
FROM   
       entry, status_type, entry_status
WHERE  
       entry.id = entry_status.entry_id AND
       status_type.id = entry_status.status_id
--     AND status_type =  (id)

--- #--- 
--- # entry by status
--- #--- 
SELECT 
       entry.line, 
       entry.length,
       entry.datetime
       status_type.count,
       status_type.description
FROM   
       entry, status_type, entry_status
WHERE  
       entry.id = entry_status.entry_id AND
       status_type.id = entry_status.status_id
--     AND status_type.id =  (id)
--     AND entry.datetime > (some datetime)

-- # 
-- # INSERT
-- #


-- # 
-- # UPDATE
-- #

-- # 
-- # DELETE
-- #


