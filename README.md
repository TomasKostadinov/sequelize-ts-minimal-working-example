# Sequelize-Typescript Minimal Example

This repository provides a minimal working example of `seqeulize-typescript` using

* Docker-Compose
* Models
* Relations
* Migrations
* Seeders

## How to use

1. Create a `.env` file with the following content:

```dotenv
POSTGRES_PASSWORD=postgres
POSTGRES_USER=minimal
POSTGRES_DB=minimal
```

2. Execute `docker-compose up`. The database will be created, all migrations will be run and the data will be seeded
   with a preset Organization and User.
3. Open <a href="http://localhost/api/v1" target="_blank">localhost:80/api/v1</a>
4. You should see the following:

```json
[
  {
    "id": 1,
    "name": "Tomas",
    "org_id": 1,
    "createdAt": "2021-01-12T09:24:14.856Z",
    "updatedAt": "2021-01-12T09:24:14.856Z",
    "organization": {
      "id": 1,
      "name": "Firma",
      "createdAt": "2021-01-12T09:24:14.825Z",
      "updatedAt": "2021-01-12T09:24:14.825Z"
    }
  }
]
```
