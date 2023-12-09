"use client"
import FormIntroduction from "./FormIntroduction"
import FormEducation from "./FormEducation"
import IntroSection from "./IntroSection"
import EduSection from "./EduSection"
import SkillsSection from "./SkillSection"
import InfoSection from "./InfoSection"
import FormInfo from "./FormInfo"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { memo, useEffect } from "react"
import { getProfile } from "@/redux/actions"
import FormSkills from "./FormSkills"
import { selectSkills } from "@/redux/reducers/candidateSlice"

const CandidateProfile = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProfile({}));
    }, [])

    return (
        <section className="mx-auto max-w-[1340px] pt-6 pb-10">
            <InfoSection/>
            <IntroSection/>
            <EduSection/>
            <SkillsSection/>

            <FormInfo/>
            <FormIntroduction/>
            <FormEducation/>
            <FormSkills/>
        </section>
    )
}
export default CandidateProfile
