import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/Searchbar'; 
import JobCard from './components/JobCard';
import { useState, useEffect } from "react";
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs = [];
    const jobsRef = collection(db, "jobs");
    const q = query(jobsRef, orderBy("postedOn", "desc"));

    try {
      const req = await getDocs(q);
      req.forEach((job) => {
        tempJobs.push({
          ...job.data(),
          id: job.id,
          postedOn: job.data().postedOn.toDate(),
        });
      });
      setJobs(tempJobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const fetchJobsCustom = async (jobCr) => {
    setCustomSearch(true);
    const tempJobs = [];
    let jobsRef = collection(db, "jobs");

    let q = query(jobsRef);

    // Apply filters dynamically
    if (jobCr.type) q = query(q, where("type", "==", jobCr.type));
    if (jobCr.experience) q = query(q, where("experience", "==", jobCr.experience));
    if (jobCr.location) q = query(q, where("location", "==", jobCr.location));
    if (jobCr.title) q = query(q, where("title", "==", jobCr.title));

    // Order by postedOn
    q = query(q, orderBy("postedOn", "desc"));

    try {
      const req = await getDocs(q);
      req.forEach((job) => {
        tempJobs.push({
          ...job.data(),
          id: job.id,
          postedOn: job.data().postedOn.toDate(),
        });
      });
      setJobs(tempJobs);
    } catch (error) {
      console.error("Error fetching filtered jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom} fetchJobs={fetchJobs} />
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;
