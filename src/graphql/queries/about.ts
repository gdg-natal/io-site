import { gql } from '@apollo/client'

const query = gql`
  query GetAbout {
    about {
      data {
        attributes {
          title
          content
        }
      }
    }
  }
`

export default query
