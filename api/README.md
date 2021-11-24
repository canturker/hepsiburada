# Hepsiburada Product List

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

node v16.13.0

npm v8.1.0

#### Installation

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

#### Deployment - API

```
npm run prod
```

Then visit to see product list

```
http://localhost:8080/api/products
```

## Example Filtering, Sorting

### Filter

```
http://localhost:8080/api/products?filter=color:Red,Blue
```

### Sort

```
http://localhost:8080/api/products?sort=priceAsc
```

### Search

```
http://localhost:8080/api/products?search=searchText
```
