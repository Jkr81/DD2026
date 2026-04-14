// form fields: name, page, destination, iage
"use client";
import { useState } from "react";
export default function NewDestination() {
  const [formData, setFormData] = useState({
    name: "",
    page: "",
    destination: "",
    image: "",
    description: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log(formData);
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    console.log("Form submitted:", formData);
    try {
      console.log("Submitting form data:");
      // fetch the data 
      const response = await fetch("http://localhost:3001/api/destinations", {  
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Failed to add destination");
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
      console.log("Form submission completed");
    } 
  };

  return (
    <div className="max-w-[600px] w-full">
        <h1 className="text-3xl font-bold mb-4">Add New Destination</h1>
        <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block w-full font-bold" htmlFor="name">Name</label>
                <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded py-2 px-3 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
</div>
<div className="mb-4">
    <label className="block w-full font-bold" htmlFor="page">Page</label>
    <input
    type="text"
    id="page"
    name="page"
    onChange={handleChange}
    value={formData.page}
    className="border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
</div>
            <div className="mb-4">
                <label className="block w-full font-bold" htmlFor="image">Image</label>
                <input
                type="text"
                id="image"
                name="image"
                onChange={handleChange}
                value={formData.image}
                className="border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
    </div>
    <div className="mb-4">
        <label className="block w-full font-bold" htmlFor="description">Description</label>
        <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
<div className="mb-4">
  {error && <p className="text-red-500">{error}</p>}

  <button type="submit" 
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold 
  py-2 px-4 rounded"
  disabled={loading}
  >
    Add Destination
  </button>
</div>
    </form>
</div>
  );
}