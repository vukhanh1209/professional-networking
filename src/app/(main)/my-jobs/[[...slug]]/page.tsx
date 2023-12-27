"use client";

import isAuth from "@/components/common/isAuth";
import MyJobList from "@/components/page/MyJob/MyJobList";
import MyJobsHeader from "@/components/page/MyJob/MyJobsHeader";

function MyJobs() {
  return (
    <div className="px-5">
      <MyJobsHeader />
      <MyJobList />
    </div>
  );
}
export default isAuth(MyJobs);
