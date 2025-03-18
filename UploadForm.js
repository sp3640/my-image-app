import { useState } from 'react';
import Image from 'next/image';

export default function UploadForm() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Image</h1>
      <input type="file" onChange={handleImageChange} className="border p-2" />
      {image && (
        <div className="mt-4">
          <Image src={image} alt="Uploaded" width={300} height={200} />
        </div>
      )}
    </div>
  );
}
