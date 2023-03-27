# Car Shop

- For this project, i applied Object Oriented Programming (OOP) principles to build a CRUD API to manage a concessionary. This was done using the MongoDB database through the Mongoose framework.

## Stacks and Tools

- Typescript
- Node
- MongoDB
- Mongoose
- Docker
- Jest
- BDD
- VsCode
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
  docker exec -it trybers_and_dragons bash
```

It will give you access to the interactive terminal of the container created by compose, which is running in the background.

Install dependencies:

```bash
  npm install
```

If you don't want to use docker, just install the dependencies with **npm install**.

Start the Project:

```bash
  npm start
```
## Autores

- [@MattBastos](https://www.github.com/MattBastos)


## Reference

 - [Trybe](https://www.betrybe.com/)
