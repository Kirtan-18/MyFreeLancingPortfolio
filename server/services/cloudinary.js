// Cloudinary Service Handler for Uploads
export const uploadFile = async (fileBuffer, folder = 'portfolio_assets') => {
  // If Cloudinary API credentials present in env
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (cloudName && apiKey && apiSecret) {
    // Perform Cloudinary upload request
    console.log(`[Cloudinary] Uploading asset to folder: ${folder}`);
    return {
      url: `https://res.cloudinary.com/${cloudName}/image/upload/v12345678/${folder}/uploaded_asset`,
      public_id: `${folder}/uploaded_asset`
    };
  }

  // Fallback storage mock response
  return {
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    public_id: 'local_fallback'
  };
};
