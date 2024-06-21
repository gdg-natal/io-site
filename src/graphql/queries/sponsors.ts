import { gql } from '@apollo/client'

const query = gql`
  query GetSponsors {
    sponsors {
      data {
        id
        attributes {
          type
          title
          image {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`

export default query
