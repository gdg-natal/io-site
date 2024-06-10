import { gql } from '@apollo/client'

const query = gql`
  query {
    speakers {
      data {
        id
        attributes {
          items {
            name
            title
            description
          }
        }
      }
    }
  }
`

export default query
