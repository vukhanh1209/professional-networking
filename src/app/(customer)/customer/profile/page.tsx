import RecruiterBenefits from "@/components/page/Customer/Profile/RecruiterBenefits";
import RecruiterHead from "@/components/page/Customer/Profile/RecruiterHead";
import RecruiterInformation from "@/components/page/Customer/Profile/RecruiterInformation";
import RecruiterKeySkills from "@/components/page/Customer/Profile/RecruiterKeySkills";
import RecruiterOverview from "@/components/page/Customer/Profile/RecruiterOverview";

export default function RecruiterProfile() {
  return (
    <main className="flex flex-col gap-5 w-full min-h-screen bg-white px-5 lg:px-[1.875rem] py-5 pb-10">
      <RecruiterHead />
      <RecruiterInformation />
      <RecruiterOverview />
      <RecruiterKeySkills />
      <RecruiterBenefits />
    </main>
  );
}
