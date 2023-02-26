import React, { useState } from 'react';

const AddJobs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    duration: '',
    role: '',
    salary: '',
    deadline: '',
    auxPhoneNumber: '',
    Details: '',
    skills: '',
    address:'',
    workmode:'',
 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      profileImage: e.target.files[0]
    }));
  };

  const handleResumeChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      resume: e.target.files[0]
    }));
  };




  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormValues({ ...formValues, [name]: files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    // TODO: Submit form to backend
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-500">Add Hob Here</h2>


      <div className="mb-4">
        <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
          Company Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>


      <div className="mb-4">
        <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
          Recruiter Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
          Recruiter Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="johndoe@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="role" className="block font-medium text-gray-700 mb-2">
          Role
        </label>
        <input
          type="text"
          name="role"
          id="role"
          className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Frontend Developer"
          value={formData.role}
          onChange={handleChange}
          required
        />
      </div>


      <div className="pb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="skills">
          Skills
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="skills"
          name="skills"
          type="text"
          placeholder="Enter your skills"
          value={formData.skills}
          onChange={handleInputChange}
          required
        />
      </div>


      <div className="mb-4">
        <label htmlFor="duration" className="block font-medium text-gray-700 mb-2">
          Duration:
        </label>
        <input
          type="duration"
          name="duration"
          id="duration"
          className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="********"
          value={formData.duration}
          onChange={handleChange}
          required
        />
      </div>



    
    
   
      <div className="pb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="salary">
          Salary
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="salary"
          name="salary"
          type="number"
          placeholder="Enter your salary"
          value={formData.salary}
          onChange={handleInputChange}
          required
        />
      </div>

      

      <div>
          <label htmlFor="workmode" className="block font-medium pb-10">
            Gender
          </label>
          <select
            name="workmode"
            id="workmode"
            className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2"
            required
          >
            <option value="">Choose a workmode</option>
            <option value="male">Remote</option>
            <option value="female">Part-Time</option>
            <option value="others">Contract</option>
            <option value="everyone">Full-Time</option>
          </select>
        </div>




     
      <div className="pb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="deadline">
          Deadline
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="deadline"
          name="deadline"
          type="text"
          placeholder="Enter your Deadline"
          value={formData.deadline}
          onChange={handleInputChange}
          required
        />
      </div> 

      <div className="pb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="auxPhoneNumber">
          Company Phone Number
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="auxPhoneNumber"
          name="auxPhoneNumber"
          type="tel"
          placeholder="Enter your auxilary phone number"
          value={formData.auxPhoneNumber}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="pb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="Details">
          Address
        </label>
        <textarea
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="address"
          name="address"
          rows="3"
          placeholder="Enter your Address"
          value={formData.address}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>

     

      <div className="pb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="Details">
          Details
        </label>
        <textarea
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Details"
          name="Details"
          rows="3"
          placeholder="Enter your Details"
          value={formData.Details}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>

     
      

      <div className="pb-6">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>

     </form>

  );

}

export default AddJobs
