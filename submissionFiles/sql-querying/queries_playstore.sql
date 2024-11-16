-- Comments in SQL Start with dash-dash --

--1--
playstore=# SELECT app_name from analytics WHERE id = 1880;
        app_name
-------------------------
 Web Browser for Android
(1 row)

--2--
playstore=# SELECT id, app_name FROM analytics WHERE last_updated = '2018-08-01';

--3--
playstore=# SELECT category, COUNT(*) AS app_count FROM analytics GROUP BY category;

--4--
playstore=# select app_name, reviews from analytics ORDER BY reviews desc limit 5;

--5--
playstore=# SELECT app_name, reviews FROM analytics WHERE rating >= 4.8 ORDER BY reviews DESC LIMIT 1;
  app_name  | reviews
------------+---------
 Chess Free | 4559407
(1 row)

--6--
playstore=# SELECT app_name, ROUND(AVG(rating)::NUMERIC, 2) AS avg_rating
FROM analytics
WHERE rating IS NOT NULL
GROUP BY app_name
ORDER BY avg_rating DESC;

--7--
playstore=# SELECT app_name, price, rating FROM analytics WHERE rating < 3 ORDER BY price DESC LIMIT 1;
      app_name      | price  | rating
--------------------+--------+--------
 Naruto & Boruto FR | 379.99 |    2.9

--8--
playstore=# select * from analytics WHERE min_installs < 50 AND rating IS NOT NULL ORDER BY rating desc;

--9--
playstore=# SELECT app_name FROM analytics WHERE rating < 3 AND Reviews >= 10000;
                    app_name
-------------------------------------------------
 The Wall Street Journal: Business & Market News
 Vikings: an Archer’s Journey
 Shoot Em Down Free
(3 rows)

--10--
playstore=# SELECT * from analytics WHERE price between .10 and 1 ORDER BY reviews desc limit 10;

--11--
playstore=# SELECT * FROM analytics ORDER BY last_updated asc limit 1;

--12--
playstore=# SELECT * FROM analytics ORDER BY price desc limit 1;

--13--
playstore=# SELECT COUNT(reviews) from analytics;

--14--
playstore=# SELECT category, COUNT(*) as category_count from analytics GROUP BY category HAVING COUNT(*) > 300;

--15--
playstore=# SELECT app_name, reviews, min_installs, min_installs / reviews as installs_to_reviews FROM analytics WHERE min_installs > 100000 ORDER BY installs_to_reviews desc LIMIT 1;