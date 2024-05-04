# Microservice Architecture + Shared Database

<p align="center">
  <img src="./assets/microservice-architecture.jpg" alt="banner">
</p>

> This project is a simple example of a microservice architecture using NodeJS and MongoDB. It consists of three services namely: `users`, `books` and `orders`. The `users` service is responsible for managing users, the `books` service is responsible for managing books and the `orders` service is responsible for managing orders. The services communicate with each other using HTTP requests.

## Explanation
- 3 different services: `users`, `books` and `orders`
- Each service has its own server and a shared database
- The services communicate with each other using HTTP requests
- Client will interact with the services through the API Gateway

## Service Endpoints
- Users Service: `http://localhost:3001`
- Books Service: `http://localhost:3002`
- Orders Service: `http://localhost:3003`
- API Gateway: `http://localhost:8080`

## How to run
#   N o d e J S - M i c r o s e r v i c e  
 