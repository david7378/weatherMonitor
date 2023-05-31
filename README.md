# Weather Monitor

<img src="/src/assets/img.png" alt="WeatherMonitor-app" width="260px">
This is a simple weather application built with React and Vite. It utilizes the WeatherAPI.com API to fetch weather data based on user input.

## Features

- Enter a location to get the current weather information.
- Displayed weather data includes temperature, condition, and icon.
- Responsive design for optimal viewing on different devices.

## Technologies Used

- React
- Typescript
- Tailwind
- Jest
- Testing Library
- Vite
- WeatherAPI.com
- Docker
- Nginx

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- Docker (optional)

## Getting Started

1. Clone the repository:

   ```bash
   https://github.com/david7378/weatherMonitor.git

   ```

2. Navigate to the project directory:

   ```bash
   cd weatherMonitor

   ```

3. Install the dependencies:

   ```bash
   npm install

   ```

4. Set up your WeatherAPI.com API key:
   Sign up for a free account at WeatherAPI.com.
   Copy your API key.
   Create a .env file in the project root.
   Add the following line to the .env file, replacing <YOUR_API_KEY> with your actual API key

   ```bash
     REACT_APP_API_KEY=<YOUR_API_KEY>

   ```

5. Set up your WeatherAPI.com API key:

   ```bash
   npm run dev

   ```

6. Open your browser and navigate to your localhost to see the application.

7. Docker (optional)   
The project includes Docker Compose files for both development and production environments. This allows for easy containerization and deployment of the Weather App.

- For development, use the docker-compose.dev.yml file.
- For production, use the docker-compose.prod.yml file.

  To run the Weather App using Docker Compose, follow these steps:

1. Make sure you have Docker installed and running on your machine.
2. Open a terminal and navigate to the project directory.
3. Run the following command to start the Weather App in development mode:

   ```bash
   docker-compose -f docker-compose.dev.yml up -d
   ```

   This will build the Docker containers and start the Weather App.

4. Open your browser and navigate to http://localhost:3001 to see the Weather App running in the Docker container.
5. To run the Weather App in production mode, use the following command:
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```
   This will build the Docker containers and start the Weather App with production settings.
   Open your browser and navigate to http://localhost to see the Weather App running in the Docker container in production mode.

If you need more information about Docker and its functionalities, you can refer to the [Docker documentation](https://docs.docker.com/). The Docker documentation provides detailed explanations, tutorials, and references to help you understand and work with Docker effectively.

Nginx
Nginx has been utilized as the web server for the Weather App. It serves the static files and handles routing requests to the appropriate endpoints.
