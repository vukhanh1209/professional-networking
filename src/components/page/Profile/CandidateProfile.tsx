import FormIntroduction from "./FormIntroduction"
import FormEducation from "./FormEducation"
import IntroSection from "./IntroSection"
import EduSection from "./EduSection"
import SkillsSection from "./SkillSection"
import InfoSection from "./InfoSection"
import FormInfo from "./FormInfo"

export default function CandidateProfile() {

    return (
        <section className="mx-auto max-w-[1340px] pt-6 pb-10">
            <InfoSection/>
            <IntroSection/>
            <EduSection/>
            <SkillsSection/>

            <FormInfo/>
            <FormIntroduction/>
            <FormEducation/>

        </section>
    )
}

