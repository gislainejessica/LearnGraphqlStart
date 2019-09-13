const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');
const { admin } = require('./util/admin');

const helloType = new GraphQLObjectType({
    name:'hello',
    fields: () => ({
        message: { 
            type: GraphQLString,
            resolve: ({message}) => message
        },
        id :{ 
            type: GraphQLString, 
            resolve: ({id}) => id,
        },
    })
});
const root = new GraphQLObjectType( 
    {
        name: 'root',
        fields: 
        { 
            mensagem: 
            {
                type: helloType ,
                args:
                {
                    id:      {type: new GraphQLNonNull(GraphQLString)},
                    message: {type: new GraphQLNonNull(GraphQLString)}
                },
                resolve: (parent, args)=> 
                    {
                        admin.firestore()
                        .doc(`/usuarios/${args.id}`)
                        .get()
                        .then(doc => {
                            if(doc.exists){
                                const user = {
                                    id:"1", 
                                    message:"oi"
                                }
                                user.id = doc.data().id
                                user.message = doc.data().apelido
                                console.log(user)
                                return user
                            }else{
                                return console.log("não achei")
                            }
                            
                        })
                        .catch(erro => {
                            return console.error(erro)
                        });
                    }
            }
        }
    }
);
module.exports = new GraphQLSchema({
    query: root,
});
