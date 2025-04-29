import { useEffect, useState } from "react";
import JoblyApi from "../../api";
import JobCard from "../components/JobCard";
import { Link } from "react-router-dom";

export default function Jobs() {
  const INITIAL_STATE = {
    search: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getJobs = async () => {
      const response = await JoblyApi.request("jobs");
      const jobs = response.jobs;
      setJobs(jobs);
    };

    getJobs();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const term = formData.search;
    const response = await JoblyApi.searchJobs(term);
    setJobs(response)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  return (
    <ul className="flex flex-col mx-auto w-3/4 gap-3 text-black ">
      <form className="mt-10" onSubmit={handleSearch}>
        <input
          type="text"
          id="search"
          name="search"
          onChange={handleChange}
          value={formData.search}
          placeholder="Search jobs by name..."
          className="bg-gray-200 p-2 w-1/3 rounded-sm"
        />
        <button className="ml-3 py-2 px-4 rounded-md bg-blue-500 cursor-pointer">
          Search
        </button>
      </form>
      <h1 className="text-center text-2xl text-white p-3">Jobs</h1>
      <JobCard jobs={jobs}/>
    </ul>
  );
}
