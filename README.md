**Microservices Example** is a microservices demo application. The application is a
web-based e-commerce app. Currently, this demo has three services (product-catalog-service, order-service, payment-service).

## Quickstart

1. Install packages

```sh
npm i
```

2. Create .env file (reference .env.example file)

3. Create Postgres containers database

```sh
docker compose up -d
```

4. Run microservices

```sh
npm run dev
```
