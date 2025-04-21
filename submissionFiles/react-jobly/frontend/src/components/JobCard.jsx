export default function JobCard({jobs}) {
  return (
    <>
      {jobs.map((job) => (
        <li key={job.id} className="bg-gray-900 text-white p-10 rounded-xl">
          <h3 className="font-bold">{job.title}</h3>
          <p className="text-sm mb-5">{job.companyName}</p>
          {job.salary && job.salary > 0 ? (
            <p>Salary: ${job.salary.toLocaleString()}</p>
          ) : null}
          {job.equity && job.equity > 0 ? <p>Equity: {job.equity}</p> : null}
          <form className="flex ">
            <button className="ml-auto py-2 px-4 rounded-md bg-blue-500 cursor-pointer">
              Apply
            </button>
          </form>
        </li>
      ))}
    </>
  );
}
