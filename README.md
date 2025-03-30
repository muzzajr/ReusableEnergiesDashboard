# Renewable Energies Dashboard

This project is a web application built with React and Vite to visualize renewable energy data. It provides insights into average installed capacities and other metrics using a clean and interactive user interface.

## Features

- **Data Visualization**: Displays renewable energy data in an easy-to-understand format.
- **API Integration**: Fetches data from a backend API for real-time updates.
- **Modern Frontend Stack**: Built with React, Vite, and TailwindCSS for fast development and performance.
- **Environment Configuration**: Uses `.env` files for managing API base URLs and other environment-specific settings.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup and Run the Web App

Follow these steps to set up and run the web application:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/reusable-energy-dashboard.git
   cd reusable-energy-dashboard
   ```

2. **Install Dependencies**:
   Run the following command to install all required dependencies:

   ```bash
   npm install
   ```

3. **Run the Development Server**:
   Start the development server with:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.

4. **Build for Production**:
   To create a production build, run:

   ```bash
   npm run build
   ```

   The production-ready files will be available in the `dist` folder.

5. **Preview the Production Build**:
   After building, you can preview the production build locally:

   ```bash
   npm run preview
   ```

6. **Serve the Production Build**:
   To serve the production build, use the provided batch script:

   ```bash
   z:\repos\HeatlyTaskBuiltApplications\RunFrontEnd.bat
   ```

   Ensure the `serve` package is installed globally.

## Environment Variables

The application uses environment variables for configuration. Create a `.env.production` file in the root directory with the following content:

```env
VITE_API_BASE_URL=https://your-api-url.com
```

Replace `https://your-api-url.com` with the actual URL of your backend API.

## Project Structure

- **`src/`**: Contains the source code for the application.
  - **`components/`**: Reusable React components.
  - **`utils/`**: Utility functions and configurations (e.g., `apiConfig.js`).
- **`dist/`**: Contains the production build files (generated after running `npm run build`).

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
