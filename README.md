# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


# cocktail_wiza
final project 
#preparation
-Reference
  *Open Api/Portal of cocktail https://www.thecocktaildb.com/
-DB seeding
 to run the .JS, run 
  npm i fs
  npm i request
  node 1.js ...
-DB ERD
1. DB ERD draft
!["Database ERC drafting"](/doc/erd.jpg)

logic:

1. pickup a glass or a base liquor
2. show up all available ingrediants . 
3. pick next ingrediant 
4. go on till you get the result of drink and instruction.  

# Setup Database

1. make sure copy the directory /db/seed_assets
2. make sure schema.rb & seeds.rb are locate at /db
3. make sure /config/database.yml is replaced by the correct one from repository
4. in project directory , type command:
    > rails db:reset 
5. schema and data will import in your database, can be verify by psql
    > psql
    > \c cocktail_spirit_development
    > \d  #should see 4 tables
       cocktail_spirit_development=# select count(*) from drinks;
        count
        -------
        425

       cocktail_spirit_development=# select count(*) from drink_ingredients;
        count
       -------
         1672
       (1 row)
       
       cocktail_spirit_development=# select count(*) from ingredients
       cocktail_spirit_development-# ;
        count
       -------
          292
       (1 row)
       
       cocktail_spirit_development=# select count(*) from glasses;
        count
       -------
           32
       (1 row)
       

    

