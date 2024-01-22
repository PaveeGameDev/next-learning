"use client";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

type CloudinaryResult = {
  public_id: string;
};

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="A user uploaded image"
        />
      )}
      <CldUploadWidget
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
        uploadPreset="mjffac3l"
        options={{
          sources: ["local"],
          multiple: false,
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};
export default UploadPage;
