"use client";

import isAuth from "@/components/common/isAuth";
import CandidateCV from "@/components/page/Profile/CV/CandidateCV";

function CVPage() {
  return (
    <div className="relative sm:px-5">
      <CandidateCV />
    </div>
  );
}
export default isAuth(CVPage);
