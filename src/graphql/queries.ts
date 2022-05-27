import {gql} from '@apollo/client';

export const FETCH_JOKE = gql`
  query {
    joke {
      id
      joke
      permalink
    }
  }
`;
