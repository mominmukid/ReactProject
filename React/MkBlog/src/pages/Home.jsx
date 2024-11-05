import React from 'react'
import { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import Container from '../components/container/Container'
import PostCard from '../components/PostCard'
import { useSelector } from 'react-redux'

function Home() {
   const [posts, setPosts] = useState([]);
   const isauth = useSelector((state) => state.auth.status)
   
   
   useEffect(() => {
      if (isauth) {
         appwriteService.getAllPost()
            .then((post) => {
               if (post) setPosts(post.documents)
            })

      }
   }, [])


   if (posts.length === 0) {
      return (
         <div className=' w-full py-8 min-h-72 flex justify-center items-center'>
            <p className='text-3xl font-bold'>Post is Not Found</p>
         </div>
      );
   }
   return (
      <div className='w-full h-screen py-8'>
         <Container>
            <div className='flex flex-wrap'>
               {posts?.map((post) => (
                  <div key={post.$id} className='w-1/4 px-2'>
                     <PostCard {...post} />
                  </div>
               ))}
            </div>
         </Container>
      </div>
   );
}



export default Home