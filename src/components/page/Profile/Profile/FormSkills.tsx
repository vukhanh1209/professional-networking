import { useEffect, useState } from "react";
import FormWrapper from "./FormWrapper";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  closeSkillsForm,
  selectIsOpeningSkillsForm,
  selectSkills,
} from "@/redux/reducers/candidateSlice";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addSkill, getProfile } from "@/redux/actions";
import { notifySuccess } from "@/utils/notification";
import InputSkill from "./InputSkill";

const schema = yup.object().shape({
  skill: yup.string(),
});

export default function FormSkills() {
  const isOpeningSkillsForm = useAppSelector(selectIsOpeningSkillsForm);
  const [currentSkills, setCurrentSkills] = useState<string[]>([]);
  const [skill, setSkill] = useState("");

  const skills = useAppSelector(selectSkills);

  useEffect(() => {
    setCurrentSkills(skills);
  }, [skills]);

  const { handleSubmit, reset } = useForm({ resolver: yupResolver(schema) });

  const dispatch = useAppDispatch();
  const onClose = () => {
    dispatch(closeSkillsForm());
  };

  const onSave = async () => {
    const reqBody = {
      skillName: currentSkills,
    };

    const res = await dispatch(addSkill(reqBody));
    if (res.meta.requestStatus === "fulfilled") {
      notifySuccess(res.payload?.message);
      dispatch(getProfile({}));
      onClose();
    }
  };

  const addNewSkill = () => {
    if (skill) {
      const newSkils = [...currentSkills, skill];
      setCurrentSkills(newSkils);
    }
    reset();
  };

  const removeSkill = (index: number) => {
    let newSkills = [...currentSkills];
    newSkills.splice(index, 1);
    setCurrentSkills(newSkills);
  };

  return (
    <>
      {isOpeningSkillsForm ? (
        <FormWrapper
          title="Kĩ năng"
          onClose={onClose}
          onSave={onSave}
          handleSubmit={handleSubmit}
        >
          <div className="flex flex-col w-full py-6 px-8 gap-6 h-[300px] overflow-auto">
            <div className="relative flex flex-col md:flex-row gap-x-2 gap-y-3">
              <InputSkill setSkill={setSkill} skill={skill} />

              <button
                type="button"
                onClick={addNewSkill}
                className="hover:bg-light-red md:max-w-[180px] border border-primary-red flex items-center justify-center py-3 px-6 h-12 w-full rounded-lg transition-all duration-100 text-base font-semibold text-primary-red"
              >
                Thêm
              </button>
            </div>
            <div className="flex flex-wrap w-full gap-2">
              {currentSkills?.map((skill: string, index: number) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => removeSkill(index)}
                  className="py-[6px] px-3 border border-dark-grey rounded-full text-rich-grey"
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </FormWrapper>
      ) : null}
    </>
  );
}
