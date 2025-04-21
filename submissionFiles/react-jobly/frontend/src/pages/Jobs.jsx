import { useEffect, useState } from "react";
import JoblyApi from "../../api";
import JobCard from "../components/JobCard";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getJobs = async () => {
      const response = await JoblyApi.request("jobs");
      const jobs = response.jobs;
      setJobs(jobs);
    };

    getJobs();
  }, []);

  return (
    <ul className="flex flex-col mx-auto w-3/4 gap-3 text-black ">
      <form className="mt-10">
        <input type='text' placeholder="Search jobs by name..." className="bg-gray-200 p-2 w-1/3 rounded-sm" />
        <button className="ml-3 py-2 px-4 rounded-md bg-blue-500 cursor-pointer">Search</button>
      </form>
      <h1 className="text-center text-2xl text-white p-3">Jobs</h1>
     <JobCard jobs = {jobs}/>
    </ul>
  );
}
