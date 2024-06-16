import { gql } from '@apollo/client'

const query = gql`
  query {
    sponsors {
      data {
        id
        attributes {
          items {
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
  }
`

export default query
