import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JoblyApi from "../../api";
import JobCard from "../components/JobCard";

export default function Company() {
  const { company } = useParams();
  const [jobs, setJobs] = useState([]);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await JoblyApi.getCompany(company);
      const { jobs, name } = response;
      setJobs(jobs);
      setName(name);
    };

    fetchData();
  }, []);

  return (
    <>
      <ul className="flex flex-col mx-auto w-3/4 gap-3 text-black ">
        <h1 className="text-white text-xl pt-4">{name}</h1>
        <span className="text-gray-400">Positions available</span>
        <button
          className="py-1 px-3 text-sm rounded-md bg-gray-400 cursor-pointer w-fit"
          onClick={() => navigate(-1)}>
          Go back to all companies
        </button>
        <JobCard jobs={jobs} />
      </ul>
    </>
  );
}
