import { gql } from 'apollo-boost';

const GET_COUNTRIES = gql`
  query Countries {
    countries {
      code
      name
      continent {
        name
      }
      languages {
        native
        name
      }
    }
  }
`;

const GET_COUNTRY = gql`
  query Country($code: String!) {
    country(code: $code) {
      name
      phone
      currency
    }
  }
`;

export const QUERIES = {
  GET_COUNTRIES,
  GET_COUNTRY
};
