import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router'
import appwriteService from '../appwrite/config';
import { Button, Container, } from '../components';
import parse from 'html-react-parser';

function Post() {
   const navigate = useNavigate();
   const [post, setpost] = useState(null);
   const { slug } = useParams();
   const userdata = useSelector((state) => state.auth.userData);
   const isauth = post && userdata ? userdata.$id === post.$id : false;

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
      } else {
         navigate('/')
      }
   }, [navigate, slug])

   const deletePost = async (slug) => {
      try {
         const response = await appwriteService.deletePost(post.$id);
         if (response) {
            const delfile = await appwriteService.deleteFile(post.featuredImage)
            if (delfile) {
               navigate('/')
            }
         }
      } catch (error) {
         throw (error.message)
      }
   }

   return post ? (
      <div className="py-8">
         <Container>
            <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
               <img
                  src={appwriteService.getFilePreview(post.featuredImage)}
                  alt={post.title}
                  className="rounded-xl"
               />

               {isauth && (
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
               {post.content}
            </div>
         </Container>
      </div>
   ) : null;
}

export default Post