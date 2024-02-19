# Car Shop Backend

- For this project, i applied Object Oriented Programming (OOP) principles to build a CRUD API to manage a concessionary. This was done using the MongoDB database through the Mongoose framework.

## Stacks and Tools

- Typescript
- Node
- MongoDB
- Mongoose
- Docker
- Jest
- BDD
- VSCode
- Trello
- Git & Github
- Linux - Ubuntu

## Running Locally

Clone the project:

```bash
  git@github.com:MattBastos/car-shop.git
```

Enter the project directory:

```bash
  cd car-shop
```

## Using Docker

Run the node service with the command:

```bash
  docker-compose up -d
```

These services will initialize a container called car_shop and another called car_shop_db.
From here you can run the car_shop container via CLI or open it in VS Code.

Use the command:

```bash
  docker exec -it car_shop bash
```

It will give you access to the interactive terminal of the container created by compose, which is running in the background.

Install dependencies:

```bash
  npm install
```

If you don't want to use docker, just install the dependencies with **npm install**.

Start the Project:

```bash
  npm run dev
```

## Car Shop API

### Overview

The Car Shop API provides endpoints to manage information about cars and motorcycles.

### Base URL

```
  http://localhost:3001/cars/
  http://localhost:3001/motorcycles/
```

### Create Vehicle

**Endpoint:** /cars | /motorcycles
**Method:** POST
**Description:** Create a new vehicle entry.

**Request Car Endpoint Body Example:**

```json
{
  "model": "Example Model",
  "year": 2023,
  "color": "Black",
  "status": true,
  "buyValue": 25000.0,
  "doorsQty": 4,
  "seatsQty": 5
}
```

**Request Motorcycle Endpoint Body Example:**

```json
{
  "model": "Example Model",
  "year": 2023,
  "color": "Black",
  "status": true,
  "buyValue": 25000.0,
  "category": "Street",
  "engineCapacity": 600
}
```

### Get All Vehicles

**Endpoint:** /cars | /motorcycles
**Method:** GET
**Description:** Retrieve a list of all cars/motorcycles.

### Get Vehicle by ID

**Endpoint:** /cars/:id | /motorcycles/:id
**Method:** GET
**Description:** Retrieve details of a specific vehicle by ID.

### Update Vehicle by ID

**Endpoint:** /cars/:id | /motorcycles/:id
**Method:** PUT
**Description:** Update details of a specific vehicle by ID.

**Request Car Endpoint Body Example:**

```json
{
  "model": "Example Model",
  "year": 2023,
  "color": "Black",
  "status": true,
  "buyValue": 25000.0,
  "doorsQty": 4,
  "seatsQty": 5
}
```

**Request Motorcycle Endpoint Body Example:**

```json
{
  "model": "Example Model",
  "year": 2023,
  "color": "Black",
  "status": true,
  "buyValue": 25000.0,
  "category": "Street",
  "engineCapacity": 600
}
```

### Delete Vehicle by ID

**Endpoint:** /cars/:id | /motorcycles/:id
**Method:** DELETE
**Description:** Delete a specific vehicle by ID.

## Author

- [@MattBastos](https://www.github.com/MattBastos)

## Reference

- [Trybe](https://www.betrybe.com/)
