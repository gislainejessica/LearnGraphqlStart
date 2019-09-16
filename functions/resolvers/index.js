const resolvers = {
    Query: {
      greeting: () => {
      return ()=> {'world'}
      }
    },
    Mutation: {
      usuario : (parent, args) => {
          user = {
            name :args.user,
            age :  2,
            profession : "Médico",
            text :"Karamba",
          }
          return user
      }
    }
};
module.exports = resolvers;