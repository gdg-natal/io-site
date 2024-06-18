import { gql } from '@apollo/client'

const query = gql`
  query GetSpeakers {
    speakers {
      data {
        id
        attributes {
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
`

export default query
