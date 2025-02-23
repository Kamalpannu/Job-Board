import React, { useState } from "react";

function Searchbar(props) {
    const [jobCr, setJobCr] = useState({
        title: "",
        location: "",
        experience: "",
        type: "",
    });

    const handleChange = (e) => {
        setJobCr((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const search = async () => {
        await props.fetchJobsCustom(jobCr);
    };

    const clearFilters = () => {
        setJobCr({
            title: "",
            location: "",
            experience: "",
            type: "",
        });
        props.fetchJobs(); // Fetch all jobs again
    };

    return (
        <div className='flex gap-4 my-10 justify-center px-10'>
            <select onChange={handleChange} name="title" value={jobCr.title} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                <option value="">Job Role</option>
                <option value="iOS Developer">iOS Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="Developer Advocate">DevOps Engineer</option>
            </select>
            <select onChange={handleChange} name="location" value={jobCr.location} className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
                <option value="">Location</option>
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
                <option value="Hybrid">Hybrid</option>
            </select>
            <select onChange={handleChange} name="experience" value={jobCr.experience} className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
                <option value="">Experience</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
            </select>
            <button onClick={search} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>
                Search
            </button>
            <button onClick={clearFilters} className='w-64 bg-gray-500 text-white font-bold py-3 rounded-md'>
                Clear Filters
            </button>
        </div>
    );
}

export default Searchbar;
