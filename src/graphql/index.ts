import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import resolvers from './resolvers'
import typeDefs from './typeDefs'

export const createApolloServer = async (): Promise<ApolloServer> => {

	const apolloServer = new ApolloServer({
		typeDefs,
		resolvers,
		playground: true,
		introspection: true,
	});

	return apolloServer;
};
