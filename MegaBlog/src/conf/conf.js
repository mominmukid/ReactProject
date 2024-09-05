const conf ={
  appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteColllectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBuckteId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf;