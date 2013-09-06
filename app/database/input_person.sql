-- #===
-- # name: input_person.sql
-- # date: 2013SEP06
-- # prog: pr
-- # desc: sql queries to input person data
-- #===


-- #---
-- # USAGE: IN:  sqlite3 mydata.db < code.sql
-- #        OUT: sqlite3 -header -column -echo mydata.db < ex10.sql
-- #---

-- #---
-- # Person
-- #---
INSERT INTO Person (first_name, 
                    last_name, 
                    nick_name, 
                    bio,
                    twitter, 
                    www, 
                    email_one, 
                    email_two, 
                    phone_mobile, 
                    phone_land)
VALUES('Peter',
       'Renshaw', 
       'goon', 
       '☮ ♥ ♬ ⌨ ⾛', 
       'peterrenshaw',
       'goonmail@netspace.net.au',
       '',
       'selomlogical.com',
       '',
       '');
