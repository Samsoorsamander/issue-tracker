"use client";

import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <h1 className="text-2xl font-bold">Upload Image</h1>

      <CldUploadWidget
        uploadPreset="fc1ys6dy"
        onSuccess={(result, { widget }) => {
          // The correct event handler is onSuccess, not onUpload
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
          console.log("Upload success, public_id:", info.public_id);
          widget.close();
        }}
      >
        {({ open }) => (
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            onClick={() => open()}
          >
            Upload Image
          </button>
        )}
      </CldUploadWidget>

      {publicId && (
        <div className="mt-4">
          <p className="mb-2 text-sm text-gray-600">Uploaded Image:</p>
          <CldImage
            width="300"
            height="300"
            className="rounded-lg"
            alt="Uploaded Image"
            src={publicId}
          />
        </div>
      )}
    </div>
  );
};

export default UploadPage;
