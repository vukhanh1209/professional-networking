import { useEffect, useMemo, useState } from "react";
import FormWrapper from "./FormWrapper";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  closeIntroForm,
  closeSkillsForm,
  selectIntroduction,
  selectIsOpeningIntroForm,
  selectIsOpeningSkillsForm,
  selectSkills,
} from "@/redux/reducers/candidateSlice";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  addSkill,
  getAllSkill,
  getProfile,
  updateProfile,
  writeAboutMe,
} from "@/redux/actions";
import { LocalStorage } from "@/utils/LocalStorage";
import { notifySuccess } from "@/utils/notification";
import InputSkill from "./InputSkill";

const schema = yup.object().shape({
  skill: yup.string(),
});

export default function FormSkills() {
  const isOpeningSkillsForm = useAppSelector(selectIsOpeningSkillsForm);
  const [currentSkills, setCurrentSkills] = useState<string[]>([]);
  const skills = useAppSelector(selectSkills);

  useEffect(() => {
    setCurrentSkills(skills);
  }, [skills]);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

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
    }
  };

  const addNewSkill = () => {
    const skillName = watch("skill");
    if (skillName) {
      const newSkils = [...currentSkills, skillName];
      setCurrentSkills(newSkils);
    }
    reset();
  };

  const removeSkill = (index: number) => {
    let newSkills = currentSkills;
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
          <div className="flex flex-col w-full py-6 px-8 gap-6 h-[300px]">
            <div className="relative flex flex-col md:flex-row gap-x-2 gap-y-3">
              <InputSkill register={register} errors={errors} />

              <button
                onClick={addNewSkill}
                className="hover:bg-light-red md:max-w-[180px] border border-primary-red flex items-center justify-center py-3 px-6 h-12 w-full rounded-lg transition-all duration-100 text-base font-semibold text-primary-red"
              >
                Thêm
              </button>
            </div>
            <div className="flex flex-wrap w-full gap-2">
              {currentSkills?.map((skill: string, index: number) => (
                <button
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
