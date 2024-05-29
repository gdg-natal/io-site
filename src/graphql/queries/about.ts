import { gql } from '@apollo/client'

const query = gql`
  query {
    about(id: 1) {
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
