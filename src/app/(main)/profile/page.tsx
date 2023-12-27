"use client";

import isAuth from "@/components/common/isAuth";
import CandidateProfile from "@/components/page/Profile/Profile/CandidateProfile";
function ProfilePage() {
  return (
    <div className="relative sm:px-5">
      <CandidateProfile />
    </div>
  );
}

export default isAuth(ProfilePage);
