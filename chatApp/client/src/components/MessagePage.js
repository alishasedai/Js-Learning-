import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Avatar from "./Avatar";
import { HiDotsVertical } from "react-icons/hi";
import { FaAngleLeft, FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaImage, FaVideo } from "react-icons/fa";
import uploadFile from "../helpers/uploadFile";
import { IoClose } from "react-icons/io5";
import Loading from "./Loading";
import download from "../assets/backgroundImage.jpeg";
import { IoMdSend } from "react-icons/io";
const MessagePage = () => {
  const params = useParams();
  const socketConnection = useSelector(
    (state) => state?.user?.socketConnection,
  );
  const user = useSelector((state) => state?.user);

  const [dataUser, setDataUser] = useState({
    name: "",
    email: "",
    profile_pic: "",
    online: false,
    _id: "",
  });

  const [openImageVideoUpload, setOpenImageVideoUpload] = useState(false);

  const [message, setMessage] = useState({
    text: "",
    imageUrl: "",
    videoUrl: "",
  });
  const [loading, setLoading] = useState(false);

  // ✅ OPEN DROPDOWN (no toggle issue)
  const handleUploadImageVideoOpen = () => {
    setOpenImageVideoUpload(true);
  };

  // ✅ IMAGE UPLOAD
  const handleUploadImage = async (e) => {
    console.log("Image selected");

    const file = e.target.files[0];
    console.log("file:", file);

    if (file.size > 50 * 1024 * 1024) {
      alert("Video must be under 50MB");
      return;
    }
    setLoading(true);

    const response = await uploadFile(file);
    setLoading(false);
    console.log("response:", response);

    setMessage((prev) => ({
      ...prev,
      imageUrl: response.url,
    }));

    setOpenImageVideoUpload(false); // close after selection
  };

  // ✅ VIDEO UPLOAD (FIXED)
  const handleUploadVideo = async (e) => {
    console.log("Video selected");

    const file = e.target.files[0];
    console.log("file:", file);

    if (!file) {
      console.log("No file selected ❌");
      return;
    }
    setLoading(true);
    const response = await uploadFile(file);
    setLoading(false);
    console.log("response:", response);

    setMessage((prev) => {
      const updated = {
        ...prev,
        videoUrl: response.url,
      };
      console.log("Updated videoUrl:", updated.videoUrl);
      return updated;
    });

    setOpenImageVideoUpload(false); // ✅ important
  };

  // ✅ CLEAR FUNCTIONS
  const handleClearUploadImage = () => {
    setMessage((prev) => ({
      ...prev,
      imageUrl: "",
    }));
  };

  const handleClearUploadVideo = () => {
    setMessage((prev) => ({
      ...prev,
      videoUrl: "",
    }));
  };

  // SOCKET
  useEffect(() => {
    if (socketConnection) {
      socketConnection.emit("message-page", params.userId);

      socketConnection.on("message-user", (data) => {
        setDataUser(data);
      });
      socketConnection.on("message", (data) => {
        console.log("Message data",data)
      })
    }
  }, [socketConnection, params?.userId, user]);

  const handleOnChange = (e) => {
    const {name, value}  = e.target;
    setMessage(prev => {
      return {
        ...prev,text : value
      }
    })
  }
  const handleSubmitMessage =(e) => {
    e.preventDefault();
    console.log("submit clicked...")
    if(message.text || message.imageUrl || message.videoUrl){
      if (socketConnection) {
        socketConnection.emit("new message", {
          sender: user._id,
          receiver: params.userId,
          text: message.text,
          imageUrl: message.imageUrl,
          videoUrl: message.videoUrl,
          msgByUserId : user?._id
        });
      }
    }

  }

  return (
    <div
      style={{ background: `url(${download})` }}
      className="bg-no-repeat bg-cover"
    >
      {/* HEADER */}
      <header className="sticky top-0 h-16 bg-white flex justify-between items-center px-5">
        <div className="flex items-center gap-4">
          <Link to={"/"} className="lg:hidden">
            <FaAngleLeft size={30} />
          </Link>

          <Avatar
            width={40}
            height={50}
            imageUrl={dataUser?.profile_pic}
            name={dataUser?.name}
            userId={dataUser?._id}
          />

          <div>
            <h3 className="font-semibold">{dataUser?.name}</h3>
            <p className="text-sm">
              {dataUser.onlineUser ? (
                <span className="text-blue-500">online</span>
              ) : (
                <span className="text-slate-500">offline</span>
              )}
            </p>
          </div>
        </div>

        <HiDotsVertical />
      </header>

      {/* MESSAGE AREA */}
      <section className="h-[calc(100vh-128px)] overflow-y-scroll relative bg-slate-200 bg-opacity-60">
        {/* IMAGE PREVIEW */}
        {message.imageUrl && (
          <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
            <IoClose
              onClick={handleClearUploadImage}
              className="absolute top-2 right-2 cursor-pointer text-white"
              size={30}
            />
            <img
              src={message.imageUrl}
              className="max-w-sm rounded"
              alt="preview"
            />
          </div>
        )}
        {/* VIDEO PREVIEW */}
        {message.videoUrl && (
          <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
            <IoClose
              onClick={handleClearUploadVideo}
              className="absolute top-2 right-2 cursor-pointer text-white"
              size={30}
            />
            <video
              src={message.videoUrl}
              className="max-w-sm rounded"
              controls
            />
          </div>
        )}
        {loading && (
          <div className="w-full h-full flex justify-center it">
            <Loading />
          </div>
        )}
        Show all messages
      </section>

      {/* INPUT SECTION */}
      <section className="h-16 bg-white flex items-center px-4">
        <div className="relative">
          <button
            onClick={handleUploadImageVideoOpen}
            className="h-11 w-11 rounded-full hover:bg-blue-500 hover:text-white flex justify-center items-center"
          >
            <FaPlus />
          </button>

          {/* DROPDOWN */}
          {openImageVideoUpload && (
            <div className="bg-white shadow rounded absolute bottom-14 w-36 p-2">
              <label
                htmlFor="uploadImage"
                className="flex items-center p-2 gap-3 hover:bg-slate-200 cursor-pointer"
              >
                <FaImage />
                Image
              </label>

              <button
                onClick={() => document.getElementById("uploadVideo").click()}
                className="flex items-center p-2 gap-3 hover:bg-slate-200 w-full"
              >
                <FaVideo />
                Video
              </button>
            </div>
          )}
        </div>

        <form
          className="h-full w-full flex gap-3"
          onSubmit={handleSubmitMessage}
        >
          <input
            type="text"
            placeholder="Type here message...."
            className="py-1 px-4 outline-none w-full h-full"
            value={message.text}
            onChange={handleOnChange}
          />
          <button className="hover:text-blue-600">
            <IoMdSend size={30} />
          </button>
        </form>
      </section>

      {/* ✅ INPUTS OUTSIDE (VERY IMPORTANT) */}
      <input
        type="file"
        id="uploadImage"
        hidden
        accept="image/*"
        onChange={handleUploadImage}
      />

      {/* <input
        type="file"
        id="uploadVideo"
        hidden
        accept="video/*"
        onChange={handleUploadVideo}
      /> */}
      <input
        type="file"
        id="uploadVideo"
        hidden
        accept="video/*"
        onChange={handleUploadVideo}
      />
    </div>
  );
};

export default MessagePage;
