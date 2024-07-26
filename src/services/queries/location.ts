import { gql } from '@apollo/client'

const query = gql`
  query GetLocation {
    location {
      data {
        id
        attributes {
          title
          address
          locationUrl
        }
      }
    }
  }
`

export default query
