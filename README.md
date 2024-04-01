# Tick Tack Backend

This is the backend server for the Tick Tack application, built with NestJS and TypeORM.

## Table of Contents

- [Tick Tack Backend](#tick-tack-backend)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Configuration](#configuration)
  - [API Documentation](#api-documentation)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

Tick Tack Backend is a RESTful API server that provides endpoints to manage winners for the Tick Tack application. It uses PostgreSQL as the database and provides a set of CRUD (Create, Read, Update, Delete) operations for managing winners.

## Features

- User authentication and authorization
- CRUD operations for winners
- Secure password hashing
- CORS support for cross-origin requests
- API documentation using Swagger

## Installation

1. Clone the repository:<code> git clone https://github.com/mehedihasansabbir220/Tick_Tac_Toe_Game_BE</code>


2. Navigate to the project directory:`cd tick-tack-backend`


3. Install dependencies: `npm install`
4. 
4. Set up the environment variables (see Configuration section below).

5. Run the server:`npm start`
   

## Usage

Once the server is running, you can access the API endpoints using tools like Postman or cURL. You can also integrate it with your frontend application to manage winners.

## Configuration

The server can be configured using environment variables. Create a `.env` file in the root directory of the project and add the following variables:

`PORT=3000
DATABASE_URL=postgres://username:password@localhost:5432/tick-tack-db
JWT_SECRET=your_jwt_secret`


Make sure to replace the values with your own configuration.

## API Documentation

The API documentation is automatically generated using Swagger. Once the server is running, you can access the API documentation at `http://localhost:3000/api-docs`.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).





# Tick_Tac_Toe_Game_BE
