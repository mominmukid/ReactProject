import conf from '../conf.js';
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Service{
   client=new Client();
   databases;
   bucket;
   constructor(){
      this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(  conf.appwriteProjectId);
      this.account = new Account(this.client);
      this.databases = new Databases(this.client);
      this.bucket=new Storage(this.client);
   }

   async createPost({title,sluge,content,feturchedImage,status,userId}){
      try {
         return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteColllectionId,
            sluge,
            {
               title,
               content,
                feturchedImage ,
                status ,
               userId
            
            }
         )
      } catch (error) {
         console.log("Appwite services::createPost::error",error);
      }
   }

      async updatePost(sluge,{title,content,feturchedImage,status}){

         try {
            return await this.databases.updateDocument(
               conf.appwriteDatabaseId,
               conf.appwriteColllectionId,
               sluge,
               {
                  title,
                  content,
                   feturchedImage ,
                   status ,
                  userId
               }

            )
         } catch (error) {
            console.log( "services::updatePost::catch", error );
         }
      }

      async deletePost(slug){
         try {
            await this.databases.deleteDocument(
               conf.appwriteDatabaseId,
               conf.appwriteColllectionId,
               slug
            )
            return true;
         } catch (error) {
            console.log("services::deletePost::catch",error);
            return false;
         }
      }


      async getPost(slug){
         try {
            return await this.databases.getDocument( 
               conf.appwriteDatabaseId,
               conf.appwriteColllectionId,
               slug )

         } catch (error) {
            console.log("Appwrite servise::getPost:: error",error);
            return false;
         }
      }

      async getPosts(queris=[Query.equal("status","active")]){
         try {
            return await this.databases.listDocuments(
               conf.appwriteDatabaseId,
               conf.appwriteColllectionId,
               queris,
            )
            
         } catch (error) {
            console.log("Appwrite services::getPosteS::error",error);
            return false;
         }
      }

      //file uplode services

      async uploadeFile(file){
         try {
            return await this.bucket.createFile(
               conf.appwriteBucketId ,
                ID.unique()
               , file );
            
         } catch (error) {
            console.log("Appwrite services::Uploade::error".error);
            return false;
         }
      }

      async deleteFile(fileId){
         try {
            await this.bucket.deleteFile(
               conf.appwriteBucketId,
               fileId);
            return true;
         } catch (error) {
            console.log("Appwrite services:: deleteFile::error",error);
            return false;
         }
      }

      getFilePriview(fileId){
         return this.bucket,this.getFilePriview(
            conf.appwriteBucketId, 
            fileId, 
         )
      }

}
 const service=new Service();


export default service;