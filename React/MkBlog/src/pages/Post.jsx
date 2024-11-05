import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import parse from 'html-react-parser'
import appwriteService from '../appwrite/config'
import Container from '../components/container/Container'
import Button from '../components/Button'


function Post() {
   const { slug } = useParams();
   const navigate = useNavigate();
   const userData = useSelector(state => state.auth.userData);
   const [post, setpost] = useState(null);
   const isAuthor = post && userData ? post.$id === userData.$id
      : false;
   useEffect(() => {
      if (slug) {
         appwriteService.getPost(slug)
            .then((post) => {
               if (post) {
                  setpost(post);
               } else {
                  navigate('/')
               }
            })
      }
   }, [ slug,navigate]);

    const deletePost= async()=>{
      try {
         const status =await appwriteService.deletePost(slug);
         if(status){
            await appwriteService.deleteFile(post.featurdImage)
            navigate('/')

         }
      } catch (error) {
         console.log(error.message);
      }
    }
   return post ? (
      <div className="py-8">
          <Container>
              <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                  <img
                      src={appwriteService.getFilePreview(post.featurdImage)}
                      alt={post.title}
                      className="rounded-xl"
                  />

                  {isAuthor && (
                      <div className="absolute right-6 top-6">
                          <Link to={`/edit-post/${post.$id}`}>
                              <Button bgColor="bg-green-500" className="mr-3">
                                  Edit
                              </Button>
                          </Link>
                          <Button bgColor="bg-red-500" onClick={deletePost}>
                              Delete
                          </Button>
                      </div>
                  )}
              </div>
              <div className="w-full mb-6">
                  <h1 className="text-2xl font-bold">{post.title}</h1>
              </div>
              <div className="browser-css">
                  {parse(post.content)}
                  </div>
          </Container>
      </div>
  ) : null;
}

export default Post