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

const getCategory=async()=>{
  const query = gql`
  query GetCategory {
    categories {
      id
      name
      icon{
        url
      }
    }
    }
  `
  const result =await request(MASTER_URL, query)
 return result;
  }
  
 const getBusinessList=async()=>{
  const query=gql`
  query GetBusinessList {
    businessLists {
      id
      name
      email
      contact
      category {
      name
    }
      address
      about
      images {
      url
      }
  }
  }
  `
  const result = await request(MASTER_URL, query)
 return result;
 
 }

 const getBusinessListByCategory=async(category)=>{
  const query=gql`
  query GetBusinessList {
    businessLists(where: {category: {name:"`+category+`"}}) {
      id
      name
      email
      contact
      category {
      name
    }
      address
      about
      images {
      url
      }
  }
  }
  `
  const result = await request(MASTER_URL, query)
 return result;
}

export default{
    getSlider, getCategory, getBusinessList, getBusinessListByCategory
}

