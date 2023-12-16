"use client";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { openSkillsForm, selectSkills } from "@/redux/reducers/candidateSlice";

import AddCircle from "@/images/profile/add-circle.svg";
import Edit from "@/images/profile/edit.svg";

export default function SkillsSection() {
  const dispatch = useAppDispatch();
  const skills = useAppSelector(selectSkills);

  const onOpenSkillsForm = () => {
    dispatch(openSkillsForm());
  };

  return (
    <div className="flex flex-col mt-6 px-6 pt-6 pb-8 rounded-lg bg-white">
      <div className="flex justify-between w-full items-center">
        <span className="text-xl md:text-2xl font-bold text-primary-black">
          Kỹ năng
        </span>
        <button onClick={onOpenSkillsForm}>
          <Image
            src={AddCircle || Edit}
            width={20}
            height={20}
            alt="add"
            className="w-6 h-6 md:h-5 md:w-5"
          />
        </button>
      </div>
      {skills?.length > 0 ? (
        <div className="flex flex-wrap w-full gap-2 mt-5">
          {skills?.map((skill: string, index: number) => (
            <div
              key={index}
              className="py-[6px] px-3 border border-dark-grey rounded-full text-rich-grey"
            >
              {skill}
            </div>
          ))}
        </div>
      ) : (
        <span className="text-base text-dark-grey mt-[10px]">
          Chia sẻ kỹ năng của bạn
        </span>
      )}
    </div>
  );
}
