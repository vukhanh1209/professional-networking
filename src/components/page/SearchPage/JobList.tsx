import JobCard from "./JobCard";

const JobList = () => {
    return (
        <div className="col-span-full lg:col-span-5 lg:pr-6">
            <JobCard isSelected={true}/>
            <JobCard isSelected={false}/>
            <JobCard isSelected={false}/>
            <JobCard isSelected={false}/>
            <JobCard isSelected={false}/>
            <JobCard isSelected={false}/>
            <JobCard isSelected={false}/>
            <JobCard isSelected={false}/>
            <JobCard isSelected={false}/>
            <JobCard isSelected={false}/>
            <JobCard isSelected={false}/>
            <JobCard isSelected={false}/>
            <JobCard isSelected={false}/>
            <JobCard isSelected={false}/>
        </div>
    )

}

export default JobList;