import gql from "graphql-tag";

export const GET_COUNTRIES = gql`
  query {
    countries {
      continent {
        name
      }
      code
      capital
      name
    }
  }
`;

export const GET_COUNTRY = gql`
  query getCountry ($code: ID!){
    country(code: $code) {
      capital
      code
      continent {
        name
      }
      currency
      emoji
      languages {
        name
        native
      }
      name
      phone
      states {
        name
      }
    }
  }
`;

export const ADD_TODO = gql`
  mutation InsertTodo($title: String!, $is_public: Boolean!) {
    insert_todos(objects: { title: $title, is_public: $is_public }) {
      returning {
        id
        title
        created_at
        is_public
      }
    }
  }
`;
