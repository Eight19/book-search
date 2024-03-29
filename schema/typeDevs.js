//Assistance received from classmates and tutors//
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
  _id: ID
  username: String!
  email: String!
  password: String!
  savedBooks: [Books]
}

type Book {
_it: ID
  bookId: String!
  authors: [String]
  description: String
  title: String!
  image: String
  link: String
  
}

type Auth {
  token: ID!
  user: User
}


type Query {
  getSingleUser(id: ID, username: String): User
  getAllUsers: [User]
  getSingleBook(id: ID, bookId: String): Book
  getAllBooks: [Book]
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  saveBook(bookId: String!, authors: [String], description: String, title: String!, image: String, link: String): User
  removeBook(bookId: String!): User
}
`;

module.exports = typeDefs;


