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


# Setup 
1. rails new cocktail_spirit --database=postgresql
2. rails db:create
3. bin/rails s
- Create Model 
1. bin/rails g model Glass name:string image:string
2. bin/rails g model Drink name:string image:string tags:string glass:references instruction:string
3. rails g model ingredient name:string description:string
4. bin/rails g model Drink_ingredient drink:references ingredient_id:integer ingredient_name:string measure:string
5. rails g migration AddForeignKeysToDrink_ingredient ingredient_id:ingeger ingredient_name:string


