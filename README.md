# Recipes App

A Vue.js application for searching and displaying recipes.

## Table of Contents

- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [Previewing the Build](#previewing-the-build)

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/kirilnmitev/recipes.git
   cd recipes
2. **Install dependencies**
    ```sh
   npm install
3. **Fill .env file**
    
    Using the provided .env.example file create a .env file with the same properties
## Running the Application

```sh
npm run dev
```
    
This will start a development server and you can view the project at    http://localhost:8080.

## Building for Production
```sh
npm run build
```
The build artifacts will be stored in the dist/ directory

## Previewing the Build

After doing the [Building for Production](#building-for-production) steps you can run the command sown below and view the project at http://localhost:8081
```sh
npm run preview
```