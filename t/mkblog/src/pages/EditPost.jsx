import React from 'react'
import { Form, Container, Button } from '../components';
import appwriteService from '../appwrite/config';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
function EditPost() {
   const [post, setPost] = useState(null);
   const { slug } = useParams();
   const navigate = useNavigate();
   useEffect(() => {
      if(slug){ 
      appwriteService.getPost(slug)
         .then((post) => {
            if (post) {
               setPost(post);
            }
         })
      }else{
         navigate('/');
      }
   }, [slug,navigate])
   return post ?(
      <div className=' py-8'>
         <Container>
            <Form post={post}/>
         </Container>
      </div>
   ):null;
}

export default EditPost