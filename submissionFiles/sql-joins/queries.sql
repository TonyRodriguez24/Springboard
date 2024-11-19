-- write your queries here

SELECT * 
FROM owners
CROSS JOIN vehicles;
-- Looked this up --

SELECT first_name, last_name, count(*) as number_of_vehicles
FROM owners
JOIN vehicles ON owners.id = vehicles.owner_id
GROUP BY first_name, last_name
ORDER BY number_of_vehicles asc;

SELECT first_name, 
        last_name, 
        ROUND(SUM(price) / count(*)) as average_price, 
        COUNT(*) as number_of_vehicles
FROM owners
JOIN vehicles ON owners.id = vehicles.owner_id
GROUP BY first_name, last_name
HAVING ROUND(SUM(price) / count(*)) > 10000
ORDER BY number_of_vehicles desc;