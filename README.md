# Part-Time-Application
Future system to help people finding a part time job. :shit: Co-authored with Ching and Ringo.

<div style="color:white;">

<pre style="color:none;"> <code>
______           _      _   _                   _____       
| ___ \         | |    | | (_)                 |  __ \      
| |_/ /__ _ _ __| |_   | |_ _ _ __ ___   ___   | |  \/ ___  
|  __// _` | '__| __|  | __| | '_ ` _ \ / _ \  | | __ / _ \ 
| |  | (_| | |  | |_   | |_| | | | | | |  __/  | |_\ \ (_) |
\_|   \__,_|_|   \__|   \__|_|_| |_| |_|\___|   \____/\___/ 
</code> </pre>

</div>

## Description:

PTMobileApp is the mobile application built in "Ionic3" framework, which runs on Android and iOS.<br>

PartTimeWebApp is the web application; PartTimeMobileApp is the mobile application, they're both connected to Database which stores all information
<br>

* PTMobileApp is no longer in use, please ignore that file.


## Objectives
- [x] Establish Channel with the DB
- [x] Updates depencenies 
- [ ]  Modify Data object type to increase query speed
- [ ] 

## General Guideline

### If you have installed the application, all you have to do are these...
 
 #### Web app 
 
 ##### Can also be viewed here temporary https://uclupasssystem.firebaseapp.com/
``` Put the following lines on your terminal 
cd ~/Desktop/Part-Time-Application/PTWebApp
ng serve
```
  #### Mobile App
  ```
  cd ~/Desktop/Part-Time-Application/PartTimeMobileApp
  ionic serve --lab
  ```
  
### If you want to update applications, open your terminal, then enter:
  ```
  cd ~/Desktop/Part-Time-Application
  git pull origin master
  ```

## Installation 

Please make sure you have git-bash and npm on your machine
<br>

For 1-st time user,

For mac, on your top right corner, search 'Terminal' and open it

On your terminal, put this line allowing you to have a copy on your machine, this only need to be done once

```
cd ~/Desktop
```
```
git clone https://github.com/ringochu/Part-Time-Application.git
```

Now you should see a 'Part-Time-Application folder' on desktop (Home screen)
<hr>


### Web application 

#### Link : <a href="https://uclupasssystem.firebaseapp.com/">https://uclupasssystem.firebaseapp.com/</a>

Since PartTimeMobileApp and PTWebApp are seperate applications.
You're sincerely invited to look at the Database feature first, and then the Mobile app

On the same terminal, type and enter the commands in the following order, also perform instructions from your computer such as entering password

```shell
cd PTWebApp
```
```
npm install
```
```shell
sudo npm install -g @angular/cli 
```

```shell
ng serve
```
Visit <a href='http://localhost:4200/'> http://localhost:4200/ </a> to check the web application on your web browser (IE, google chrome, firefox etc)

<hr> 

### Mobile application

Open another new terminal, (At the bottom, right click terminal icon, select new window), put following commands in order
```
cd ~/Desktop/Part-Time-Application/PartTimeMobileApp
```
```
npm install
```
```
sudo npm install -g ionic cordova
```
```
ionic serve --lab
```
New windows should pop on your screen automatically 

<hr>
