# TASK MANAGEMENT SYSTEM

##  GELETA DABA

### CRUD 
CREATE TASK
UPDATE TASK
DELETE TASK
READ TASK

### FEATURES
JWT based Authentication and Session managemenet
TASK CRUD capabilities 

### USED TECHNOLOGY STACKS
HTML , CSS, JAVASCRIPT, NEST JS, SQL

## INSTRUCTIONS TO RUN THE PROJECT

### SQL DATABASE 
The system requires for sql to be installed and have a database named "yeneta" 
You can use WampServer for the sql console to interact with the database or any interaction mechanisms such as DBEAVER 

### INSTALLING NEST JS CLI

Use this to install nestjs : npm i -g @nestjs/cli

TYPEORM has been used in the project
Use this for it : npm install --save typeorm mysql2

JWT PACKAGE HAS BEEN USED 
Use this for it : npm install --save @nestjs/jwt

These are not all the required packages but with the assistance of smart IDE such as vs code you can install all the necessary packages
Once all the packages has been added you can simply type nest run start:dev to run the backend on watch mode


### Front end

The frontend part consisted of css, javascript and html folders 
the javascript files render different data from the databas
Before trying to create any task please do remember to signup and then login as the system will not assist, create or do anything
in managing any tasks for a user that doesn't exist

Once succesfullt logged in you will be presented with two buttons "CREATE TASK" and "LOGOUT" 
the Create Task leades to a form where you can enter title, description and due date for the tasks
once the task has been created it returns you back to the previous page with the task added to the list
Every task will have an update, delete and done/not node buttons associated with them for
updating, deleting, and changing the status of the tusk purposes respectively.








