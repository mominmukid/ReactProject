import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import Container from '../components/container/Container'
import PostCard from '../components/PostCard'


function AllPost() {
   const [Posts, setPosts] = useState([]);
   useEffect(() => {
      appwriteService.getAllPost([])
         .then((post) => {
            if (post) setPosts(post.documents)
         })
   }, [])
   return (
      <div className='w-full py-8'>
         <Container>
            <div className='flex flex-wrap'>
               {Posts?.map((post) => (
                  <div key={post.$id} className='w-1/4 p-2'>
                     <PostCard post={post} />
                  </div>

               ))}
            </div>
         </Container>

      </div>
   )
}

export default AllPost