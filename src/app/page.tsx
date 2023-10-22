import Feature from "@/components/page/CandidateHomePage/Feature";
import SearchSection from "@/components/page/CandidateHomePage/SearchSection";
import TopRecruiters from "@/components/page/CandidateHomePage/TopRecuiters";

export default function Home() {
  return (
    <main className="w-full min-h-screen mt-[5.5rem]">
      <SearchSection/>
      <Feature/>
      <TopRecruiters/>
    </main>
  )
}
