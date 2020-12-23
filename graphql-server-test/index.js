const { ApolloServer, gql } = require('apollo-server');
const books = [
    {
      id: 1,
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      id: 2,
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];
  const resolvers = {
    Query: {
      books: () => books,
    },
  };

const typeDefs = gql`
  type Book {
    id: Int,
    title: String
    author: String,
    
  }

  type Query {
    books: [Book]
  }
`;


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});






