# Food-Delivery Web Application
This project focuses on developing a comprehensive Food Delivery Web Application using Microservice Architecture.

## Demo Video
https://github.com/user-attachments/assets/08dd50b4-b72b-4165-af2a-d772740b0002

## Features Demo Video
**Watch the project in action:**
https://youtu.be/znQoBJfLpho

## Tech Stack
- ***Backend Framework:***
Nest.js
- ***Microservice Gateway:***
GraphQL
- ***Database ORM:***
Prisma
- ***Frontend Framework:***
Next.js (optimized for speed and superior SEO)

## Setup Instructions
Follow these steps to set up the project locally:

***1. Clone the repository:***
```
$ git clone https://github.com/KalhariEkanayake/nestJs-projects.git
$ cd nestJs-projects
```

***2. Install dependencies:***
```
$ npm install
```

***3. Start the Server:***
```
$ cd servers\apps\gateway
$ npm run start:dev users
```
This will open a local URL in your default web browser, such as ```http://localhost:4001/graphql```.

***4. Start the Client:***
```
$ cd clients\user-ui
$ npm run dev
```
This will open a local URL in your default web browser, such as ```http://localhost:3000```.


***5. Start the Prisma Studio:***
```
$ cd clients\user-ui
$ npx prisma studio
```
This will open a local URL in your default web browser, such as ```http://localhost:5555```.


