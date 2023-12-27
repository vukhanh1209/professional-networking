"use client";

import isAuth from "@/components/common/isAuth";
import RecruiterBenefits from "@/components/page/Customer/Profile/RecruiterBenefits";
import RecruiterHead from "@/components/page/Customer/Profile/RecruiterHead";
import RecruiterInformation from "@/components/page/Customer/Profile/RecruiterInformation";
import RecruiterKeySkills from "@/components/page/Customer/Profile/RecruiterKeySkills";
import RecruiterOverview from "@/components/page/Customer/Profile/RecruiterOverview";

function RecruiterProfile() {
  return (
    <main className="flex flex-col gap-5 w-full min-h-screen bg-white px-5 lg:px-[1.875rem] py-5 pb-10 max-w-[1200px]">
      <RecruiterHead />
      <RecruiterInformation />
      <RecruiterOverview />
      <RecruiterKeySkills />
      <RecruiterBenefits />
    </main>
  );
}

export default isAuth(RecruiterProfile);
