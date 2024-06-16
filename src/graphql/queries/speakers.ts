import { gql } from '@apollo/client'

const query = gql`
  query GetSpeakers {
    speakers {
      data {
        id
        attributes {
          items {
            name
            title
            description
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
