import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useCallback } from 'react'
import Input  from '../Input'
import RTE from '../RTE'
import appwriteService from '../../appwrite/config'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({
   post
}) {
   const navigate = useNavigate();
   const userdata = useSelector(state => state.auth.userData);
   const { register, handleSubmit, setValue, watch, control, getValues } = useForm({
      defaultValues: {
         title: post?.title || '',
         content: post?.content || '',
         slug: post?.slug || '',
         status: post?.status || "active"
      }
   })

   const submit = async (data) => {
      if (post) {
         const file = data.image[0] ? appwriteService.uploadFile(data.image) : null
         if (file) {
            appwriteService.deleteFile(post.featurdImage)
         }
         const dbpost = await appwriteService.updatePost(
            post.$id, {
            ...data,
            featurdImage: file ? file.$id : undefined
         }
         )
         if (dbpost) {
            navigate(`/post${dbpost.$id}`);
         }

      } else {
         const file = await appwriteService.uploadFile(data.image[0]);
         if (file) {
            data.featurdImage = file.$id;
            const dbpost = await appwriteService.createPost({
               ...data,
               featurdImage: file.$id,
               userId: userdata.$id
            })
            if (dbpost) {
               navigate(`/post${dbpost.$id}`)
            }

         }

      }
   }
   const slugTrasfrom = useCallback((value) => {
      if (value && typeof value === 'string')
         return value
            .trim()
            .toLowerCase()
            .replace(/^[a-zA-Z\d\s]+/g, '-')
            .replace(/\s/g, '_')
      return ''
   }, [])

   useEffect(() => {
      const subscrib = watch((value, { name }) => {
         if (name === 'title') {
            setValue('slug', slugTrasfrom(value.title), { shouldValidate: true })
         }
         return () => {
            subscrib.unsubscribe();
         }
      })

   }, [setValue, watch, slugTrasfrom])
   return (
      <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
         <div className="w-2/3 px-2">
            <Input
               label="Title :"
               placeholder="Title"
               className="mb-4"
               {...register("title", { required: true })}
            />
            <Input
               label="Slug :"
               placeholder="Slug"
               className="mb-4"
               {...register("slug", { required: true })}
               onInput={(e) => {
                  setValue("slug", slugTrasfrom(e.currentTarget.value), { shouldValidate: true });
               }}
            />
            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
         </div>
         <div className="w-1/3 px-2">
            <Input
               label="Featured Image :"
               type="file"
               className="mb-4"
               accept="image/png, image/jpg, image/jpeg, image/gif"
               {...register("image", { required: !post })}
            />
            {post && (
               <div className="w-full mb-4">
                  <img
                     src={appwriteService.getFilePreview(post.featuredImage)}
                     alt={post.title}
                     className="rounded-lg"
                  />
               </div>
            )}
            <Select
               options={["active", "inactive"]}
               label="Status"
               className="mb-4"
               {...register("status", { required: true })}
            />
            <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
               {post ? "Update" : "Submit"}
            </Button>
         </div>
      </form>
   );
}

export default PostForm