
const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "chat-app-file");
  
    const isVideo = file.type.startsWith("video");
const url = `https://api.cloudinary.com/v1_1/${
  process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
}/${isVideo ? "video" : "image"}/upload`;

console.log("Uploading to:", url);
console.log("Cloud name:", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
  const response = await fetch(url, {
    method: "post",
    body: formData,
  });
  const responseData = await response.json();
  return responseData;
};
export default uploadFile;
