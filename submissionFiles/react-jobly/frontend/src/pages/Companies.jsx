import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JoblyApi from "../../api";

export default function Companies() {
  const INITIAL_STATE = { search: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const getCompanies = async () => {
      const response = await JoblyApi.request("companies");
      const companies = response.companies;
      setCompanies(companies);
    };

    getCompanies();
  }, []);

  const handleSubmit = async (e) => {
      e.preventDefault();
      const term  = formData.search;
      const response = await JoblyApi.searchCompanies(term);
      setCompanies(response)
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
      <form className="mt-10" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          onChange={handleChange}
          value={formData.search}
          placeholder="Search Companies by name..."
          className="bg-gray-200 p-2 w-1/3 rounded-sm"
        />
        <button className="ml-3 py-2 px-4 rounded-md bg-blue-500 cursor-pointer">
          Search
        </button>
      </form>
      <h1 className="text-center text-2xl text-white p-3">Companies</h1>
      {companies.map((company) => (
        <Link
          to={`/companies/${company.handle}`}
          key={company.handle}
          className="bg-gray-900 text-white p-10 rounded-xl">
          <h3 className="font-bold">{company.name}</h3>
          <p>{company.description}</p>
        </Link>
      ))}
    </ul>
  );
}
