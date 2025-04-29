export default function JobCard({ jobs }) {
  const handleSubmit = async () => {
    
  }

  const handleClick = async () => {

  }

  // Handle submit will handle the updating the db with form data logic
  // Handle click will change  


  return (
    <>
      {Array.isArray(jobs) && jobs.map((job) => (
        <li key={job.id} className="bg-gray-900 text-white p-10 rounded-xl">
          <h3 className="font-bold">{job.title}</h3>
          <p className="text-sm mb-5">{job.companyName}</p>
          {job.salary && job.salary > 0 ? (
            <p>Salary: ${job.salary.toLocaleString()}</p>
          ) : null}
          {job.equity && job.equity > 0 ? <p>Equity: {job.equity}</p> : null}
          <form className="flex" onSubmit={handleSubmit}>
            <button className="ml-auto py-2 px-4 rounded-md bg-blue-500 cursor-pointer" onClick={handleClick}>
              Apply
            </button>
          </form>
        </li>
      ))}
    </>
  );
}
