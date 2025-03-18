import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

export default function UploadForm() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      uploadImage(file);
    }
  };

  const uploadImage = async (file) => {
    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    console.log('Image URL:', url);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Image</h1>
      <input type="file" onChange={handleImageChange} className="border p-2" />
      {image && (
        <div className="mt-4">
          <img src={image} alt="Uploaded" width={300} height={200} />
        </div>
      )}
    </div>
  );
}
