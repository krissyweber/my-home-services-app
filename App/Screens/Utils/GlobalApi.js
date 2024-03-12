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
 const result =await request(MASTER_URL, query);
 return result;
}

const getCategory=async()=>{
  const query = gql`
  query GetCategory {
    categories {
      id
      name
      icon {
        url
      }
    }
    }
  `
  const result =await request(MASTER_URL, query);
 return result;
  }
  
 const getBusinessList=async()=>{
  const query = gql`
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
  const result = await request(MASTER_URL, query);
 return result;
 
 }

 const getBusinessListByCategory=async(category)=>{
  const query = gql`
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
  const result = await request(MASTER_URL, query);
 return result;
}

const createBooking=async(data)=>{
  const mutationQuery = gql`
  mutation createBooking {
    createBooking(
      data: {bookingStatus: Booked, business: {connect: {id: "`+data.businessId+`"}},
       date: "`+data.date+`",
        userEmail: "`+data.userEmail+`",
        userName: "`+data.userName+`",
         time: "`+data.time+`"}
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED) {
      count
  }
}
  `
  const result = await request(MASTER_URL, mutationQuery)
  return result;
}

const getUserBookings=async(userEmail)=>{
  const query=gql`
  query GetUserBookings {
    bookings(orderBy: updatedAt_DESC, where: {userEmail: "`+userEmail+`"}) {
      time
      userEmail
      userName
      bookingStatus
      date
      id
      business {
        id
        images {
          url
        }
        address
        contact
        email
        name
        about
        category {
          name
        }
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result;
}

export default{
    getSlider, getCategory, getBusinessList, getBusinessListByCategory, createBooking, getUserBookings
}

