import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/config'


function AllPost() {
   const [posts, setPosts] = React.useState([])
   useEffect(() => {

      appwriteService.getAllPosts([])
         .then((post) => {
            if (post) {
               setPosts(post.documents)
            }
         })
   }, [])
      return (
      <div className='w- h-full py-8'>
         <Container>
            <div className='flex flex-wrap'>
               {posts.map((post) => {
                  return (
                        <div key={post.$id} className='p-2 w-1/2'>
                           <PostCard {...post} />
                        </div>
                  )
               })}
            </div>
         </Container>
      </div>
   ) 
}

export default AllPost

// import React from 'react'
// import { connect } from 'react-redux'

// export const AllPosts = (props) => {
//   return (
//     <div>AllPosts</div>
//   )
// }

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(AllPosts)