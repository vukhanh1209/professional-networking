import MyJobList from "@/components/page/MyJob/MyJobList";
import MyJobsHeader from "@/components/page/MyJob/MyJobsHeader";

export default function MyJobs () {
    return (
        <div className="px-5">
            <MyJobsHeader/>
            <MyJobList/>
        </div>
    )
}