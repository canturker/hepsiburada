# Hepsiburada Product List

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Project has product list API which returns predefined products with filtering and sorting for client.

### Prerequisites

node v16.13.0

npm v8.1.0

### Installation for API and Client

#### Installing - API

After pulling project

```
cd api
```

Install packages with

```
npm install
```

Then start with

```
npm run watch:dev
```

Then visit to see product list

```
http://localhost:8080/api/products
```

#### Installing - Client

After pulling project

```
cd client
```

Install packages with

```
npm install
```

Then start with

```
npm run start
```

### Deployment for API and Client

#### Deployment - API

```
npm run prod
```

Then visit to see product list

```
http://localhost:8080/api/products
```

#### Deployment - Client

```
npm run build
```

Install serve if you don't have already

```
npm install -g serve
```

And then serve build

```
serve -s build
```

```
http://localhost:5000
```
