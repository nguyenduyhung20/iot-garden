# IoT Garden

IoT Garden is a web application that allows users to monitor and control garden conditions through data from various sensors. It's designed for both gardening enthusiasts and professionals who want to leverage the power of technology to make their gardening experience smarter and more efficient.


## Project Overview

![](https://github.com/duyhung8a2/iot-garden/blob/master/screenshot/project.gif)

## Technologies

This project is built with a range of technologies to provide a seamless user experience and efficient performance. These include:

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MySQL with XAMPP
- Pattern: Model-View-Controller (MVC)

## Database Setup

To set up the database, follow these steps:

1. Start your XAMPP control panel and turn on the MySQL module.
2. Open the MySQL admin in your browser.
3. Create a new database named "iot_garden".
4. Import the `iot_garden_database.sql` file located in the `server` directory.


## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine using the following command:

   ```
   git clone https://github.com/duyhung8a2/iot-garden.git
   ```

2. Navigate to the `server` directory and install the dependencies by running the following command:

   ```
   cd server
   npm install
   ```

3. Start the server by running the following command:

   ```
   npm run dev
   ```

4. Open another terminal window by pressing 
   ```
   Ctrl + Shift + `
   ```

5. Navigate to the `client` directory and install the dependencies by running the following command:

   ```
   cd ../client
   npm install
   ```

6. Start the client by running the following command:

   ```
   npm start
   ```

7. Open your web browser and go to `http://localhost:3000` to see the web application.
8. Open Postman and go to `http://localhost:5000` to test web server.

## Project Structure

This project is structured as follows:
```
client
src
 ┣ assets
 ┃ ┗ images
 ┣ components
 ┃ ┣ hook
 ┃ ┣ image
 ┃ ┣ navbar
 ┃ ┣ style
 ┃ ┣ AnimatedTabPanel.js
 ┃ ┣ Button.js
 ┃ ┣ Chart.js
 ┃ ┣ CheckBox.js
 ┃ ┣ Control.js
 ┃ ┣ CustomTabHeader.js
 ┃ ┣ DataDisplay.js
 ┃ ┣ Garden.js
 ┃ ┣ GardenEdit.js
 ┃ ┣ GardenOverview.js
 ┃ ┣ GraphButton.js
 ┃ ┣ History.js
 ┃ ┣ HomeScreen.js
 ┃ ┣ InfomationTree.js
 ┃ ┣ Input.js
 ┃ ┣ LatestMessage.js
 ┃ ┣ Login.js
 ┃ ┣ Profile.js
 ┃ ┣ ProfileDetails.js
 ┃ ┣ ProfileOverview.js
 ┃ ┣ ProfileSiteSetting.js
 ┃ ┣ Pump.js
 ┃ ┣ PumpSetting.js
 ┃ ┣ Setting.js
 ┃ ┣ SignUp.js
 ┃ ┣ ThresholdAlert.js
 ┃ ┗ UserData.js
 ┣ App.js

server
 ┣ controllers
 ┣ middlewares
 ┣ models
 ┣ routes
 ┣ config.js
 ┣ iot-garden-database-source.sql
 ┣ iot_garden_database.sql
 ┣ server.js
```

Here's a brief explanation of important directory and file:

- `client/`: This directory contains the React client-side code.
  - `src/`: This directory contains the source code for the React app.
    - `components/`: This directory contains the reusable UI components.
    - `App.js`: This file is the root component of the React app.
    - `index.js`: This file is the entry point of the React app.

- `server/`: This directory contains the Node.js server-side code.
- `controllers/`: Contains all the logic for handling requests and sending responses.
- `middlewares/`: Contains middleware functions used across the server.
- `models/`: Contains all the data models used in the application.
- `routes/`: Contains all the route definitions for the server.
- `server.js`: The main file which bootstraps the server.


## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository to your own GitHub account.
2. Create a new branch from the `main` branch.
3. Name convention: "feature/your-feature".
4. Make your changes and commit them to your branch.
5. Push your branch to your forked repository.
6. Create a pull request from your branch to the `main` branch of the original repository.

## License

This project is intended solely for academic purposes as part of a university coursework project. Any commercial use or distribution of this project, or any part thereof, is strictly prohibited.
