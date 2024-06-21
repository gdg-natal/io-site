
export type StrapiCollectionType = {
  [key: string]: {
    data: {
      id: string,
      attributes: {
        title: string,
        image: {
          data: {
            attributes: {
              formats: {
                small?: {
                  url: string 
                },
                thumbnail?: {
                  url: string
                }
              }
            }
          }
        }
      }
    }[]
  }
}
