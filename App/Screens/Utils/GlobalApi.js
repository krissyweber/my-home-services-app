import { request, gql } from 'graphql-request'

const MASTER_URL="https://api-ca-central-1.hygraph.com/v2/clsgmhadq22vg01wj4k7v1i5f/master"

const getSlider=async()=>{
    const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
      
  `
 const result =await request(MASTER_URL, query)
 return result;
}

export default{
    getSlider
}

