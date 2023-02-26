import React, { useState } from 'react';

const AddJobs = () => {
  const [formData, setFormData] = useState({
    companyname:'',
    name: '',
    email: '',
    duration: '',
    role: '',
    salary: '',
    deadline: '',
    auxPhoneNumber: '',
    description: '',
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


  const handlePhoneChange=(e)=>{
    e.preventDefault()

    setFormData({
    ...formData,
      auxPhoneNumber: e.target.value
    })
  }
  const handleCompanyNameChange=(e)=>{
    e.preventDefault()

    setFormData({
    ...formData,
      companyname: e.target.value
    })
  }
  const handleNameChange=(e)=>{
    e.preventDefault()

    setFormData({
    ...formData,
      name: e.target.value
    })
  }

  const handleEmailChange=(e)=>{
    e.preventDefault()

    setFormData({
    ...formData,
      email: e.target.value
    })
  }

  const handleDurationChange=(e)=>{
    e.preventDefault()

    setFormData({
    ...formData,
      duration: e.target.value
    })
  }
  const handleRoleChange=(e)=>{
    e.preventDefault()

    setFormData({
    ...formData,
      role: e.target.value
    })
  }

  const handleSalaryChange=(e)=>{
    e.preventDefault()

    setFormData({
    ...formData,
      salary: e.target.value
    })
  }

  const handleDeadlineChange=(e)=>{
    e.preventDefault()

    setFormData({
    ...formData,
      deadline: e.target.value
    })
  }

  const handleDetailsChange=(e)=>{
    e.preventDefault()

    setFormData({
    ...formData,
    description: e.target.value
    })
  }
 


  const handleSkillChange=(e)=>{
    e.preventDefault()

    setFormData({
    ...formData,
      skills: e.target.value
    })
  }
  const handleAddressChange=(e)=>{
    e.preventDefault()

    setFormData({
    ...formData,
      address: e.target.value
    })
  }
  const handleWorkmodeChange=(e)=>{
    e.preventDefault()

    setFormData({
    ...formData,
      workmode: e.target.value
    })
  }

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  // const handleFileChange = (event) => {
  //   const { name, files } = event.target;
  //   setFormValues({ ...formValues, [name]: files[0] });
  // };

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(formData);
    // TODO: Submit form to backend
    await fetch('http://localhost:4000/api/job/add_job', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        console.log(response.json());
      })
      .catch(error => {
        console.log(error);
      });

      alert("Submitted")
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
          value={formData.companyname}
          onChange={handleCompanyNameChange}
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
          onChange={handleNameChange}
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
          onChange={handleEmailChange}
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
          onChange={handleRoleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="sill" className="block font-medium text-gray-700 mb-2">
          Skill
        </label>
        <input
          type="text"
          name="skill"
          id="skill"
          className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Frontend Developer"
          value={formData.skills}
          onChange={handleSkillChange}
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
          onChange={handleDurationChange}
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
          onChange={handleSalaryChange}
          required
        />
      </div>

      

      <div>
          <label htmlFor="workmode" className="block font-medium pb-10">
            WorkMode
          </label>
          <select
            name="workmode"
            id="workmode"
            onChange={handleWorkmodeChange}
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
          onChange={handleDeadlineChange}
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
          onChange={handlePhoneChange}
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
          onChange={handleAddressChange}
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
          value={formData.description}
          onChange={handleDetailsChange}
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
