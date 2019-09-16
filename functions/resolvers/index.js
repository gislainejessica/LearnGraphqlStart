const resolvers = {
    Query: {
      greeting: () => {
          userq = {
            name :"Nana",
            age :  2,
            profession : "BeBê",
            text :"Nham",
          }
          return userq      }
    },
    Mutation: {
      usuario : (_, args) => {
          user = {
            name :args.user,
            age :  2,
            profession : "Médico",
            text :"Karamba",
          }
          return user
      },
      usuarios : (_, input) => {
        user = {
          name : input.input.name,
          age :  input.input.age,
          profession : input.input.profession,
          text :"Karamba",
        }
        return user
      }
  }
};
module.exports = resolvers;