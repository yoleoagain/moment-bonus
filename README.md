# Moment bonus

## Instalation

```
npm i
npm run strapi-build
```

### CMS and DB

1. Sign up or Login in http://localhost:1337/admin
2. Set permissons for your user http://localhost:1337/admin/settings/users-permissions/roles
   (Or just enable free permisions on CRUD of all tables)

## Development

codegen.ts

```
npm run backend
npm run dev
```

## Build types from gql schema

```
npm run types
```

This command will generate a types, fetchers (based on `src/graphql` files), and observable svelte store.
Strapi export's a graphql schema by dafault, based on database meta after changing the DB strucure in to the file `src/codegen.ts`.
