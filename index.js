//Dependencias imports
const{ ApolloServer} = require("apollo-server");
const mongoose = require("mongoose");

//Relative imports
const { MONGODB } = require("./config");
const resolvers = require("./graphql/resolvers/index.js")
const typeDefs = require("./graphql/typeDefs")



const server = new ApolloServer({
        typeDefs,
        resolvers
});
mongoose.connect(MONGODB, {useNewUrlParser: true})
         .then(()=> {
             console.log("Connected to Database")
            return server.listen({port: 5000 })
         })
        .then((res) => {
            console.log("Server running at §{res.url}")
        })