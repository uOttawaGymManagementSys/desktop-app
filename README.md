# Uottawa Gym Management Desktop App
This desktop application aims to improve the current fragmented Fitness attendants workfolow which includes:
* Excel sheets to track assigned tasks
* Excell sheets record employees punch in hours
* Excell sheets to track gym traffic
* Excell sheets to create work schedules
* Word documents to document training checklists and meeting notes
* etc ...

https://github.com/user-attachments/assets/0d0315ce-83e2-45f2-904b-0fe7ec396a0b




## Main Features :
* Dashboard: to display traffic data -> help make data driven dicisions
    * Monthly traffic charts
    * Weekly traffic charts
    * Daily traffic charts
* Traffic Counter -> Allows Fitness attendants to submit traffic every 30 minutes (submissions are stored in a cloud database)
* Equipment inspection Checklist
* First aid kit checklist
* Punch in - punch out tracker
## Features to implement in the Future:
* A schedule Feature that includes
  * ability to put shifts away to be covered
  * ability to pick up shifts for coverage
* A feature to predict Future traffic based on past data
* Role based login
* Sending a Reminder 10 minutes before a shift starts to the respective FA
* Send a reminder to submit traffic every 30 minutes
* Show a warning/heads up to the Fitness attendant when the gym is over capacity

## How to install and run the project :
* git clone https://github.com/uOttawaGymManagementSys/desktop-app.git
* cd desktop-app
* npm i
* npm run build
* npm run dev:react
* npm run transpile:electron
* npm run dev
* to package the project for mac os
  * npm run dist:mac
* to package project for windows os
  * npm run dist:win
* to package project for linux os
  * npm run dist:linux
## Tests
to be updated 
