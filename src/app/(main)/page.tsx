import Feature from "@/components/page/CandidateHome/Feature";
import SearchSection from "@/components/page/CandidateHome/SearchSection";
import TopRecruiters from "@/components/page/CandidateHome/TopRecuiters";

export default function Home() {
  return (
    <main className="w-full min-h-screen mt-[5.5rem]">
      <SearchSection/>
      <Feature/>
      <TopRecruiters/>
    </main>
  )
}
