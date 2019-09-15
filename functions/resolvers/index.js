const resolvers = {
    Query: {
      greeting: () => {
      return ()=> {'world'}
      },
    },
    Mutation: {
      usuario : (root, args, context, info) => {
        return () =>({
          name : args.name,
          age :  2,
          profession : "Médico",
          text :"Karamba",
      } )
      }
    }
};
module.exports = resolvers;