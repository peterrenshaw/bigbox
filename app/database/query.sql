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
SELECT person.id, 
       person.first_name, 
       person.nick_name, 
       person.last_name, 
       person.twitter, 
       person.email_one
FROM   person;

-- #---
-- # STATUS_TYPE
-- #---
SELECT status_type.count,
       status_type.description 
FROM   status_type;


SELECT quality_type.count, 
       quality_type.description 
FROM   quality_type;


-- # ==== ENTRY REST API QUERIES === 
-- # 
-- # SELECT
-- #

-- #---
-- # ENTRY
-- #---
SELECT 
       entry.id, 
       entry.line, 
       entry.length, 
       entry.datetime
FROM   
       entry
ORDER BY 
       entry.datetime DESC;


-- #---
-- # ENTRY_STATUS
-- #---
SELECT status_type.*
FROM   entry,
       entry_status,
       status_type
WHERE
       entry.id = entry_status.entry_id AND
       status_type.id = entry_status.status_id
ORDER BY entry.id, status_type.id;


--- #---
--- # all entries 
--- #---
SELECT 
       Entry.line,
       Entry.length,
       Entry.datetime
FROM 
       Entry
ORDER BY 
       Entry.datetime DESC;

--- #--- 
--- # entry by id
--- #---
SELECT line,
       length,
       datetime
FROM 
       Entry
WHERE
       Entry.id > 0;  -- id here


--- #--- 
--- # entry by datetime
--- #---
SELECT 
       Entry.line,
       Entry.length,
       Entry.datetime
FROM 
       Entry
WHERE
       Entry.datetime = 0;

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


