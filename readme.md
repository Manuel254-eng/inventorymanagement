# Inventory Management Application

This project is a full-stack inventory management system, featuring a backend API developed with ASP.NET Core and a frontend built with Angular. It provides functionality to manage inventory items with operations for creating, reading, updating, and deleting (CRUD).

## Overview

- **Backend**: ASP.NET Core Web API
- **Frontend**: Angular with Angular Material

## Table of Contents

- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Branches](#branches)
- [Contributing](#contributing)
- [License](#license)

## Backend Setup

### Technology Stack

- **Framework**: ASP.NET Core Web API
- **Database**: SQL Server
- **ORM**: Entity Framework Core

### Features

- **GET /api/items**: Retrieve all inventory items.
- **GET /api/items/{id}**: Retrieve a single inventory item by its ID.
- **POST /api/items**: Create a new inventory item.
- **PUT /api/items/{id}**: Update an existing inventory item.
- **DELETE /api/items/{id}**: Delete an inventory item.

### Setup and Running

1. **Clone the Repository**:
   ```bash
 cd backend /open the backend folder in visual studio and run
 this will start a development server like localhost:7709
 2. Navigate to the front end directory
 and run 
 npm install
followed by
ng serve
The frontend application will be available at http://localhost:4200

