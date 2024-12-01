import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
        gender
        location {
          name
        }
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      origin {
        name
      }
      location {
        name
      }
      image
      episode {
        name
        episode
      }
    }
  }
`;

export const SEARCH_CHARACTERS = gql`
  query SearchCharacters($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export const CREATE_PRODUCT = gql`
  query CreateProduct($name: String!, $quantityPerUnit: Int!) {
    createProduct(record: { name: $name, quantityPerUnit: $quantityPerUnit }) {
      record {
        name
      }
    }
  }
`;
