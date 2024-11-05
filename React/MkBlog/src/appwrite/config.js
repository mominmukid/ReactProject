import config from "../configEnv/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class AppwriteService {
  client = new Client();
  databeses;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.databeses = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }


  //post releted service
  
  async createPost({ title, slug, content, featurdImage, status, userId }) {
    try {
      return await this.databeses.createDocument(
        config.appwriteDataBaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featurdImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("error in service in appwrite::cratePost", error);
    }
  }
  async updatePost(slug, { title, content, featurdImage, status, userId }) {
    try {
      return await this.databeses.updateDocument(
        config.appwriteDataBaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featurdImage,
          status,
        }
      );
    } catch (error) {
      console.log("error in service in appwrite::updatePost", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databeses.deleteDocument(
        config.appwriteDataBaseId,
        config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("error in service in appwrite::deletePost", error);
      return false;
    }
    
  }

  async getPost(slug) {
    try {
      return await this.databeses.getDocument(
        config.appwriteDataBaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("error in service in appwrite::getPost", error);
      return false;
    }
  }

  async getAllPost(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databeses.listDocuments(
        config.appwriteDataBaseId,
        config.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("error in service in appwrite::getAllPost", error);
      return false;
    }
  }

  //   file upload services
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("error in service in appwrite::uploadFile", error);
      return false;
    }
    
  }

  async deleteFile(id) {
    try {
      await this.bucket.deleteFile(config.appwriteBucketId, id);
      return true;
    } catch (error) {
      console.log("error in service in appwrite::deleteFile", error);
      return false;
    }
  }

  async getFilePreview(fileid){
   try {
      return  this.bucket.getFilePreview(
         config.appwriteBucketId,
         fileid
      );
      
   } catch (error) {
      console.log("error in service in appwrite::getFilePreview", error);
      return false;
   }
  }


}

const appwriteService = new AppwriteService();

export default appwriteService;
