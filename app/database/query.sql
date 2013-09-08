-- #===
-- # name: query.sql
-- # date: 2013SEP06
-- # prog: pr
-- # desc: sql queries: a) used to check data
-- #                    b) REST API queries against Line endpoint
-- #===

-- #---
-- # USAGE: IN:  sqlite3 bigbox.db < ddl_bigbox.sql
-- #        OUT: sqlite3 -header -column -echo bigbox.db < query.sql > query.txt
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
       person.bio,
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
       entry.date_time,
       entry.flagged
FROM   
       entry
ORDER BY 
       entry.date_time ASC;


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
       Entry.id,
       Entry.line,
       Entry.length,
       Entry.date_time,
       Entry.flagged
FROM 
       Entry
ORDER BY 
       Entry.date_time DESC;

--- #--- 
--- # entry by id
--- #---
SELECT 
       Entry.id, 
       Entry.line,
       Entry.length,
       Entry.date_time,
       Entry.flagged
FROM 
       Entry
WHERE
       Entry.id > 0;  -- id here


--- #--- 
--- # entry by date_time
--- #---
SELECT 
       Entry.id,
       Entry.line,
       Entry.length,
       Entry.date_time,
       Entry.flagged
FROM 
       Entry
WHERE
       Entry.length > 1;

--- #--- 
--- # entry by status
--- #--- 
SELECT entry.line,
       entry.length,
       entry.date_time,
       status_type.count,
       status_type.description
FROM   
       entry, status_type, entry_status;
--WHERE  
--       entry.id = entry_status.entry_id AND
--       status_type.id = entry_status.status_id;
--     AND status_type =  (id)

--- #--- 
--- # entry by status
--- #--- 

--SELECT entry.line, 
--       entry.length,
--       entry.date_time
--       status_type.count,
--       status_type.description
--FROM   
--       entry, status_type, entry_status
--WHERE  
--       entry.id = entry_status.entry_id AND
--       status_type.id = entry_status.status_id;
--     AND status_type.id =  (id)
--     AND entry.date_time > (some date_time)

-- # 
-- # INSERT
-- #
-- # 
-- # UPDATE
-- #

-- # 
-- # DELETE
-- #


