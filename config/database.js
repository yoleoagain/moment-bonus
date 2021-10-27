module.exports = ({ env }) => ({
      defaultConnection: "default",
      connections: {
        default: {
          connector: "bookshelf",
          settings: {
            client: "postgres",
            host: env("DATABASE_HOST", "localhost"),
            port: env.int("DATABASE_PORT", process.env.DB_PORT),
            database: env("DATABASE_NAME", process.env.DB_NAME),
            username: env("DATABASE_USERNAME", process.env.DB_USER_NAME),
            password: env("DATABASE_PASSWORD", process.env.DB_PASSWORD),
            schema: env("DATABASE_SCHEMA", "public"),
          },
          options: {
            "strict": "true"
          },
        },
      },
    });