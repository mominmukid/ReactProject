// import conf from "../conf/conf";
// import { Client, ID, Databases, Storage, Query } from "appwrite";

// export class AppwriteService {
//   client = new Client();
//   databases;
//   bucket;

//   constructor() {
//     this.client
//       .setEndpoint(conf.appwriteUrl)
//       .setProject(conf.appwriteProjectId);
//     this.databases = new Databases(this.client);
//     this.bucket = new Storage(this.client);
//   }
//   async createPost({ title, slug, content, status, userId, featuredImage }) {
//     try {
//       return await this.databases.createDoument(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionIdId,
//         slug,
//         {
//           title,
//           content,
//           status,
//           userId,
//           featuredImage,
//         }
//       );
//     } catch (error) {
//       console.log("bhi error hai :appwrite createPost me ", error);
//     }
//   }
//   async updatePost(slug, { title, content, status, featuredImage }) {
//     try {
//       return await this.databases.updateDocument(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionIdId,
//         slug,
//         {
//           title,
//           content,
//           status,
//           featuredImage,
//         }
//       );
//     } catch (error) {
//       console.log("bhi error hai :appwrite updatePost me ", error);
//     }
//   }

//   async deletePost(slug) {
//     try {
//       await this.databases.deleteDocument(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionIdId,
//         slug
//       );
//       return true;
//     } catch (error) {
//       console.log("bhi error hai :appwrite deletePost me ", error);
//       return false;
//     }
//   }

//   async getPost(slug) {
//     try {
//       return await this.databases.getDocument(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionIdId,
//         slug
//       );
//     } catch (error) {
//       console.log("bhi error hai :appwrite getPost me ", error);
//     }
//   }

//   async getAllPosts(query = [Query.equal("status", "active")]) {
//     try {
//       return await this.databases.listDocuments(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionIdId,
//         query
//       );
//     } catch (error) {
//       console.log("bhi error hai :appwrite getAllPost me ", error);
//     }
//   }

//   // start here for file opretuins  file opretions

//   async uploadFile(file) {
//     try {
//       return await this.bucket.createFile(conf.appwriteBucketIdId, file);
//     } catch (error) {
//       console.log("bhi error hai :appwrite uploadFile me ", error);
//     }
//   }

//   async deleteFile(fileId) {
//     try {
//       await this.bucket.deleteFile(conf.appwriteBucketIdId, fileId);
//       return true;
//     } catch (error) {
//       console.log("bhi error hai :appwrite uploadFile me ", error);
//       return false;
//     }
//   }

//   async getFilePreview({ fileId }) {
//     return this.bucket.getFilePreview(conf.appwriteBucketIdId, fileId);
//   }
// }

// const appwriteService = new AppwriteService();

// export default appwriteService;







import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getAllPosts (queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    // file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service()
export default service