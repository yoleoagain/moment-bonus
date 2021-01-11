import { User } from '../../models/'
import { Query, Resolver } from 'type-graphql'

export default{
    Query: {
        users: () => {},
        login: () => {},
        profile: () => {},
        refreshToken: () => {},
    },
    Mutation: {
        //@ts-ignore
        register: (root, args, { req }, info) => {
            return args
        },
    }
}