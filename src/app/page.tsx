import { Feature, TopRecruiters } from '@/components/CandidateHome'
import { SearchSection } from '@/components/Search'

export default function Home() {
  return (
    <main className="w-full min-h-screen mt-[5.5rem]">
      <SearchSection/>
      <Feature/>
      <TopRecruiters/>
    </main>
  )
}
