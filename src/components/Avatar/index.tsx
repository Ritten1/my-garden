import React, { useCallback, useEffect, useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

const Avatar = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [hiddenAddAvatar, setHiddenAddAvatar] = useState<boolean>(false);

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      setHiddenAddAvatar(true);
      return;
    }
    console.log(info, "infoinfo");

    if (info.fileList.length > 0) {
      // Get this url from response in real world.
      //   getBase64(info.file.originFileObj as RcFile, url => {
      //     setLoading(false);
      //     setShowAvator(true);
      //     setImageUrl(url);
      //   });
      setHiddenAddAvatar(true);
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>添加头像</div>
    </div>
  );
  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const onRemove = useCallback(() => {
    setHiddenAddAvatar(false);
    setLoading(false);
  }, []);

  //   useEffect(() => {
  //     console.log(showAvator, "imageUrlimageUrl");
  //   }, [showAvator]);

  // 添加头像后，隐藏uploadButton
  return (
    <>
      <Upload
        name="avatar"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={true}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
        onRemove={onRemove}
      >
        {!hiddenAddAvatar && uploadButton}
        {/* {hiddenAddAvatar ? (
          <img src={imageUrl} alt="avatar" style={{ width: "auto" }} />
        ) : (
          uploadButton
        )} */}
      </Upload>
    </>
  );
};

export default Avatar;
