# IoT Garden

This project is a web application that displays information from the sensor on the homepage. It is built using React, Node.js, and MySQL, and follows the MVC pattern.

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

my-project/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── public/
│   ├── package.json
│   └── ...
├── server/
│   ├── models/
│   │   └── db.js
│   ├── routes/
│   │   ├── user.js
│   │   └── ...
│   ├── controllers/
│   ├── server.js
│   ├── package.json
│   └── ...
└── package.json
```

Here's a brief explanation of each directory and file:

- `client/`: This directory contains the React client-side code.
  - `src/`: This directory contains the source code for the React app.
    - `components/`: This directory contains the reusable UI components.
    - `App.js`: This file is the root component of the React app.
    - `index.js`: This file is the entry point of the React app.
  - `public/`: This directory contains the static assets (e.g. images, fonts) for the React app.
  - `package.json`: This file contains the dependencies and scripts for the React app.

- `server/`: This directory contains the Node.js server-side code.
  - `models/`: This directory contains the database models.
    - `db.js`: This file contains the database connection code.
  - `routes/`: This directory contains the route handlers.
    - `user.js`: This file contains the route handler for the `/user` endpoint.
  - `controllers/`: This directory contains the business logic for the app.
  - `server.js`: This file is the entry point of the Node.js app.
  - `package.json`: This file contains the dependencies and scripts for the Node.js app.

- `package.json`: This file contains the dependencies and scripts for the entire project.

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
