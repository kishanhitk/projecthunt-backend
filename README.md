# ProjectHunt Backend


## Summary

[myproject.page](http://myproject.page) is a website for people to showcase their projects and discover projects by peers. Unlike a website like Product Hunt for example, the focus is not on how unique or how viable (business wise) the product is, but on how well the project is made as far as technicalities and design goes. 

A growing segment of the developer/designer/product market is looking for people with past projects having been made. A portfolio site where projects can be showcased, and also where great projects can be discovered can help foster this community. 


## Features

### Portfolio Building

The first important part of this portal is to signup, create accounts and add projects. We will use 'login with CodingBlocks' to hasten the signup process. 

Everyone gets a [myproject.page/@username](http://myproject.page/@username)  format profile landing page where there is basic information about them, plus a list of their projects. 

To add projects we need a high entry barrier, i.e. all details like title, description should have well defined min-max char count. Cover photo is important, options to add Youtube video, Github link etc should be available.
## Tech Stack
* Express
* Node
* TypeScript
* TypeORM

## Setup
1. Clone the repo.
    
        git clone https://github.com/kishanhitk/projecthunt-backend
2. Database Setup

    2.1. Enter `psql` as admin
    
    2.2.  Create Database, user and grant privilege
        
        
        create database conduit;
        create user conduit with encrypted password 'conduit';
        grant all privileges on database conduit to conduit;
    
3. Get dependencies
 
         yarn

4. Start Project 
 
         yarn start
