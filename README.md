# Part-Time-Application
Future system to help people finding a part time job.

## Description:

PTMobileApp is the mobile application built in "Ionic3" framework, which runs on Android and iOS, also connected to database
<br>

PartTimeWebApp is the web application which is connected to the 'Part-time job' database
<br>

* PTMobileApp is no longer in use, please ignore that file.


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
git clone  https://github.com/ringochu/Part-Time-Application.git
```

Now you should see a 'Part-Time-Application folder' on desktop (Home screen)
<hr>


### Web application 

Since PartTimeMobileApp and PTWebApp are seperate applications.
You're sincerely invited to look at the Database feature first, and then the Mobile app

On the same terminal, type and enter the commands in the following order, also perform instructions from your computer such as entering password

```shell
cd PTWebApp
```
```
sudo npm install -g @angular/cli 
```
```shell
npm install
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
sudo npm install -g ionic cordova
```
```
npm install
```
```
ionic serve --lab
```
New windows should pop on your screen automatically 

<hr>

### To see the application in the future
 
 #### Web app
``` Put the following lines on your terminal 
cd ~/Desktop/Part-Time-Application/PTWebApp
ng serve
```
  #### Mobile App
  ```
  cd ~/Desktop/Part-Time-Application/PartTimeMobileApp
  ionic serve --lab
  ```
