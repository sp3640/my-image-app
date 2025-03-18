export default function UploadForm() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Image</h1>
      <input type="file" className="border p-2" />
      <button className="bg-blue-500 text-white p-2 ml-2">Upload</button>
    </div>
  );
}
