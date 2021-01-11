import { gql } from 'apollo-server-express'

export default gql`
    type Query{
        profile: User
        user: [User]!
        refreshToken: Auth!
        login(username: String!, password: String!): Auth!
    }

    type Mutation{
        register(
            name: String
            email: String!
            password: String
        ): Auth!
    }
    
    type User{
        id: ID!
        name: String
        email: String!
        createdAt: String!
        updatedAt: String!
    }

    type Auth{
        user: User
        token: String!
        refreshToken: String!
    }
`;