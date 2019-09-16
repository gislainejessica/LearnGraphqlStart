const {admin} = require('../util/admin');

const resolvers = {
    Query: {
      	greeting: () => {
          userq = {
            name :"Nana",
            age :  2,
            profession : "BeBê",
            text :"Nham",
          }
          return userq
        },
        getUsuario: (_, args) => {
          admin.firestore()
          .doc(`/usuarios/${args.id}`)
          .get()
          .then(doc => {
              if(doc.exists){
                  userx = {
                    id: doc.data().id,
                    name: doc.data().nome,
                    text:doc.data().apelido,
                  }
                  console.log(userx)
                  return userx
              }else{
                  return console.log("Não achei :-( ")
              }
              
          })
          .catch(erro => {
              return console.error(erro)
          });
        }
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
