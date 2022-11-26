# Pwa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Deploying to digital ocean


a.	Install nginx
    i.	sudo apt update && sudo apt install nginx
    ii.	sudo ufw app list && sudo ufw allow 'Nginx HTTP' && sudo ufw status
    iii.	systemctl status nginx

b.	Login to github
c.	Go to actions  > Continuous integration > Node.js
d.	Paste node.js.yml code to the new file
 
e.	Add and commit the code
f.	Now go to settings > actions > runners
i.	Create a new selfhosted runner
g.	After successfully creation of runner
sudo ./svc.sh install &&
sudo ./svc.sh start
