# Moment bonus

Project build on svelte, sapper, strapi - headless cms, graphql, apollo.
Main goal is a try to create real world app, without client global state boilerplate, with one source of truth - API data.

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

```
npm run backend
npm run dev
```

## Build types from gql schema

```
npm run types
```

This command will generate a types, fetchers (based on `src/graphql` files), and observable svelte store.
Strapi export's a graphql schema by default, based on database meta after changing the DB strucure in to the file `src/codegen.ts`.
