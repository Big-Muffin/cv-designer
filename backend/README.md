# CV-Designer - backend

## How to run

- `docker-compose up -d` - creates the docker containers (needs to be run at least once)
- `yarn start` - starts the backend server locally
- `yarn start:complex` - formats, validates and generates objects based on the `schema.prisma` file, deploys latest migrations to the database and runs the backend server
- `yarn prisma:generate` - generates prisma objects based on `schema.prisma` file (needs to be run after changes to the `schema.prisma` file)
- `yarn prisma:studio` - runs the prisma studio app locally
- `yarn prisma:migrate:dev <migration_name>` - **MEANT ONLY FOR DEV** - creates a migration file with `migration_name` suffix and pushes it to the database
- `yarn prisma:migrate:dev:create_only <migration_name>` - **MEANT ONLY FOR DEV** - creates a migration file with `migration_name` suffix (doesn't push it to the database)
- `yarn prisma:migrate:deploy` - pushes all migratons to the database

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) - Created with latest version of Docker
- [Node.js](https://nodejs.org/en) - Created with version `18`

## Additional data

- [NestJS controller paths decorators](https://docs.nestjs.com/controllers#request-object)
- [Swagger decorators](https://docs.nestjs.com/openapi/decorators)
- for Swagger with Prisma documentation working properly we use [prisma-generator-nestjs-dto](https://github.com/vegardit/prisma-generator-nestjs-dto)
