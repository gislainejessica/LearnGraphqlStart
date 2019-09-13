const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');
const { admin } = require('./util/admin');

const usuario = { nome: "Karla", id: 2 }
const helloType = new GraphQLObjectType({
    name:'hello',
    fields: () => ({
        message: { 
            type: GraphQLString,
            resolve: ({message}) => message
        },
        id :{ 
            type: GraphQLInt, 
            resolve: ({id}) => id,
        },
    })
});

const root = new GraphQLObjectType( 
    {
        name: 'root',
        fields: { 
            mensagem: {
                type: helloType ,
                args:{
                    id: {type: new GraphQLNonNull(GraphQLInt)},
                    recado: {type: GraphQLString}
                },
                resolve: (parent, args)=> {
                   return { 
                       id : args.id,
                       message: args.recado
                    };
                }
            }
        }
    })

module.exports = new GraphQLSchema({
    query: root,
});
/** admin.firestore()
                    .doc(`/usuarios/${args.id}`)
                    .get()
                    .then((doc) => {
                        usuario.id = doc.id
                        return console.log(doc.data.name)
                    }
                        )
                    .catch(erro => console.error(erro)) */