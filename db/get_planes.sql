SELECT *
FROM airplanes
WHERE 0=0
and passenger_count > $1
and plane_id = $1               
;
-- $1 is the placeholder, and it can be used as an variable throughout the entire SQL query
-- $1 will be the first value put into the parameter array when call this SQL query. 