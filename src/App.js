import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    country: "India",
    stAddress: "",
    city: "",
    state: "",
    postal: "",
    comments: false,
    candidates: false,
    offers: false,
  });

  function handler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg"
        onSubmit={submitHandler}
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-6">User Form</h1>

        <div className="mb-4">
          <label htmlFor="fname" className="block text-gray-700 font-medium">
            First Name
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={formData.fname}
            onChange={handler}
            placeholder="Aryan"
            className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lname" className="block text-gray-700 font-medium">
            Last Name
          </label>
          <input
            type="text"
            name="lname"
            id="lname"
            value={formData.lname}
            onChange={handler}
            placeholder="Singh"
            className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handler}
            placeholder="aryansingh01@gmail.com"
            className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700 font-medium">
            Country
          </label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={handler}
            className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
            <option>France</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="streetAddress" className="block text-gray-700 font-medium">
            Street Address
          </label>
          <input
            type="text"
            name="stAddress"
            id="streetAddress"
            value={formData.stAddress}
            onChange={handler}
            placeholder="House Number 5, Street Name 1"
            className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 font-medium">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={handler}
            placeholder="Meerut"
            className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="state" className="block text-gray-700 font-medium">
            State
          </label>
          <input
            type="text"
            name="state"
            id="state"
            value={formData.state}
            onChange={handler}
            placeholder="Uttar Pradesh"
            className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="postal" className="block text-gray-700 font-medium">
            Postal Address
          </label>
          <input
            type="text"
            name="postal"
            id="postal"
            value={formData.postal}
            onChange={handler}
            placeholder="250002"
            maxLength={6}
            className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <fieldset className="mb-6">
          <legend className="text-gray-700 font-medium">By Email</legend>
          <div className="mt-2 space-y-4">
            <div className="flex items-start gap-3">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                value={formData.comments}
                onChange={handler}
                className="h-5 w-5 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="comments" className="text-gray-700">
                Comments
              </label>
            </div>
            <div className="flex items-start gap-3">
              <input
                id="candidates"
                name="candidates"
                type="checkbox"
                value={formData.candidates}
                onChange={handler}
                className="h-5 w-5 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="candidates" className="text-gray-700">
                Candidates
              </label>
            </div>
            <div className="flex items-start gap-3">
              <input
                id="offers"
                name="offers"
                type="checkbox"
                value={formData.offers}
                onChange={handler}
                className="h-5 w-5 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="offers" className="text-gray-700">
                Offers
              </label>
            </div>
          </div>
        </fieldset>

        <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
