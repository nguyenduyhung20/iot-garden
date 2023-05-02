# IoT Garden

This project is a web application that displays information from the sensor on the homepage. It is built using React, Node.js, and MySQL with XAMPP, and follows the MVC pattern.

## Project Overview

![](https://github.com/screenshot/Project.gif)

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
 ┃ ┃ ┣ graph_temp.png
 ┃ ┃ ┣ humid.jpg
 ┃ ┃ ┣ index.js
 ┃ ┃ ┣ light.jpg
 ┃ ┃ ┣ temp.png
 ┃ ┃ ┗ user.jpg
 ┣ components
 ┃ ┣ hook
 ┃ ┃ ┗ useWindowHeight.js
 ┃ ┣ image
 ┃ ┃ ┣ bapcai.png
 ┃ ┃ ┣ logout.png
 ┃ ┃ ┣ reset.png
 ┃ ┃ ┣ setvalue.png
 ┃ ┃ ┗ update.png
 ┃ ┣ navbar
 ┃ ┃ ┣ index.js
 ┃ ┃ ┣ LOGO.png
 ┃ ┃ ┗ navbar.module.scss
 ┃ ┣ style
 ┃ ┃ ┣ Control.module.scss
 ┃ ┃ ┣ InfomationTree.module.scss
 ┃ ┃ ┗ setting.css
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
 ┣ App.module.scss
 ┣ App.test.js
 ┣ index.css
 ┣ index.js
 ┣ logo.svg
 ┣ reportWebVitals.js
 ┗ setupTests.js

server
 ┣ controllers
 ┃ ┣ authController.js
 ┃ ┣ conditionController.js
 ┃ ┣ gardenController.js
 ┃ ┣ mqttController.js
 ┃ ┣ sensorController.js
 ┃ ┗ userController.js
 ┣ middlewares
 ┃ ┣ authMiddleware.js
 ┃ ┗ document.txt
 ┣ models
 ┃ ┣ conditionModel.js
 ┃ ┣ db.js
 ┃ ┣ gardenModel.js
 ┃ ┣ mqttModel.js
 ┃ ┣ sensorModel.js
 ┃ ┗ userModel.js
 ┣ routes
 ┃ ┣ authRouter.js
 ┃ ┣ conditionRouter.js
 ┃ ┣ gardenRouter.js
 ┃ ┣ mqttRouter.js
 ┃ ┣ sensorRouter.js
 ┃ ┗ userRouter.js
 ┣ config.js
 ┣ iot-garden-database-source.sql
 ┣ iot_garden_database.sql
 ┣ server.js
 ┗ testmqtt.js
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

This project is licensed under the MIT License. See the `LICENSE` file for more information.
