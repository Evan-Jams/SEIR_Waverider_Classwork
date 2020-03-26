-- 1. List the names of all NFL teams'
SELECT name FROM teams;
         name
----------------------
 Buffalo Bills
 Miami Dolphins
 New England Patriots
 New York Jets
 Baltimore Ravens
 Cincinnati Bengals
 Cleveland Browns
 Pittsburgh Steelers
 Houston Texans
 Indianapolis Colts
 Jacksonville Jaguars
 Tennessee Titans
 Denver Broncos
 Kansas City Chiefs
 Oakland Raiders
 San Diego Chargers
 Dallas Cowboys
 New York Giants
 Philadelphia Eagles
 Washington Redskins
 Chicago Bears
 Chicago Bears
 Detroit Lions
 Green Bay Packers
 Minnesota Vikings
 Atlanta Falcons
 Carolina Panthers
 New Orleans Saints
 Tampa Bay Buccaneers
 Arizona Cardinals
 St. Louis Rams
 San Francisco 49ers
 Seattle Seahawks
(32 rows)


-- 2. List the stadium name and head coach of all NFC teams
SELECT stadium, head_coach FROM teams;
            stadium            |   head_coach
-------------------------------+----------------
 Ralph Wilson Stadium          | Doug Marrone
 Sun Life Stadium              | Joe Philbin
 Gillette Stadium              | Bill Belichick
 MetLife Stadium               | Rex Ryan
 M&T Bank Stadium              | John Harbaugh
 Paul Brown Stadium            | Marvin Lewis
 FirstEnergy Stadium           | Mike Pettine
 Heinz Field                   | Mike Tomlin
 NRG Stadium                   | Bill OBrien
 Lucas Oil Stadium             | Chuck Pagano
 EverBank Field                | Gus Bradley
 LP Field                      | Ken Whisenhunt
 Sports Authority Field        | John Fox
 Arrowhead Stadium             | Andy Reid
 O.co Coliseum                 | Tony Sparano
 Qualcomm Stadium              | Mike McCoy
 AT&T Stadium                  | Jason Garrett
 MetLife Stadium               | Tom Coughlin
 Lincoln Financial Field       | Chip Kelly
 FedExField                    | Jay Gruden
 Soldier Field                 | Marc Trestman
 Ford Field                    | Jim Caldwell
 Lambeau Field                 | Mike McCarthy
 TCF Bank Stadium              | Mike Zimmer
 Georgia Dome                  | Mike Smith
 Bank of America Stadium       | Ron Rivera
 Mercedes-Benz Superdome       | Sean Payton
 Raymond James Stadium         | Lovie Smith
 University of Phoenix Stadium | Bruce Arians
 Edward Jones Dome             | Jeff Fisher
 Levis Stadium                 | Jim Harbaugh
 CenturyLink Field             | Pete Carroll
(32 rows)


-- 3. List the head coaches of the AFC South
SELECT head_coach FROM teams WHERE conference = 'AFC' AND division = 'South';
   head_coach
----------------
 Bill OBrien
 Chuck Pagano
 Gus Bradley
 Ken Whisenhunt
(4 rows)


-- 4. The total number of players in the NFL
SELECT COUNT(*) FROM players;
 count
-------
  1532
(1 row)


-- 5. The team names and head coaches of the NFC North and AFC East
SELECT name, head_coach FROM teams WHERE conference = 'NFC' AND division = 'North' OR conference = 'AFC' AND division = 'East';
         name         |   head_coach
----------------------+----------------
 Buffalo Bills        | Doug Marrone
 Miami Dolphins       | Joe Philbin
 New England Patriots | Bill Belichick
 New York Jets        | Rex Ryan
 Chicago Bears        | Marc Trestman
 Detroit Lions        | Jim Caldwell
 Green Bay Packers    | Mike McCarthy
 Minnesota Vikings    | Mike Zimmer
(8 rows)


-- 6. The 50 players with the highest salaries
SELECT name FROM players ORDER BY salary DESC LIMIT 50;

(50 rows)


-- 7. The average salary of all NFL players
SELECT AVG(salary) FROM players;
         avg
----------------------
 1579692.539817232376
(1 row)

-- 8. The names and positions of players with a salary above 10_000_000
SELECT name, position FROM players WHERE salary > 10000000;
          name           | position
-------------------------+----------
 Jake Long               | T
 Joe Thomas              | T
 Dwight Freeney          | DE
 Peyton Manning (buyout) | QB
 Peyton Manning          | QB
 Elvis Dumervil          | DE
 Tamba Hali              | DE
 Philip Rivers           | QB
 Michael Vick            | QB
 Nnamdi Asomugha         | CB
 Trent Williams          | T
 Matthew Stafford        | QB
 Cliff Avril             | DE
 Jared Allen             | DE
 Matt Ryan               | QB
 Brent Grimes            | CB
 Drew Brees              | QB
 Vincent Jackson         | WR
 Calais Campbell         | DE
 Sam Bradford            | QB
 Chris Long              | DE
(21 rows)

-- 9. The player with the highest salary in the NFL
SELECT name FROM players ORDER BY salary DESC LIMIT 1;
      name
----------------
 Peyton Manning
(1 row)


-- 10. The name and position of the first 100 players with the lowest salaries
SELECT name, position FROM players ORDER BY salary ASC LIMIT 100;
-- Saved you the trouble of not seeing 100 players in a list :) I got them though.

-- 11. The average salary for a DE in the nfl
SELECT AVG(salary) FROM players WHERE position = 'DE';
         avg
----------------------
 2161326.377049180328
(1 row)

-- 12. The names of all the players on the Buffalo Bills
SELECT players.name, teams.name FROM players, teams WHERE players.team_id = teams.id AND teams.name = 'Buffalo Bills';

(59 rows)

-- 13. The total salary of all players on the New York Giants
SELECT SUM(players.salary) FROM players, teams WHERE players.team_id=teams.id AND teams.name = 'New York Giants';
   sum
----------
 74179466
(1 row)

-- 14. The player with the lowest salary on the Green Bay Packers
SELECT players.name FROM teams, players WHERE players.team_id = teams.id AND teams.name = 'Green Bay Packers' ORDER BY salary ASC LIMIT 1;
      name
----------------
 Shaky Smithson
(1 row)
