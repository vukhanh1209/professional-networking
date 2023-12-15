"use client";
import { getAllSkill } from "@/redux/actions";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectIsOpeningSkillsForm } from "@/redux/reducers/candidateSlice";
import { useEffect, useMemo, useState } from "react";

const listSkill = [
  "Java",
  "ReactJs",
  "Angular",
  "NodeJS",
  "Java",
  "ReactJs",
  "Angular",
  "NodeJS",
];

export default function InputSkill({
  register,
  errors,
  onFocusInput,
  onBlurInput,
}: any) {
  const isOpeningSkillsForm = useAppSelector(selectIsOpeningSkillsForm);
  const [isFocusing, setIsFocusing] = useState<boolean>(false);
  const [skillValue, setSkillValue] = useState("");

  const [skillList, setSkillList] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isOpeningSkillsForm) {
      const skillResponse = dispatch(getAllSkill({}));
      skillResponse.then((data: any) => {
        setSkillList(data?.payload?.skills);
      });
    }
  }, [isOpeningSkillsForm]);

  const onChangeSkill = (e: any) => {
    setSkillValue(e.target.value);
  };

  const onChooseSkill = (skill: string) => {
    setSkillValue(skill);
  };

  const filteredSkill = useMemo(() => {
    if (!skillValue) return listSkill;
    const suggestionSkillList = listSkill.filter((skill: string) =>
      skill.toLowerCase().includes(skillValue.toLowerCase())
    );
    return suggestionSkillList;
  }, [listSkill, skillValue]);

  return (
    <>
      <div className="relative w-full">
        <input
          onFocus={() => setIsFocusing(true)}
          onBlurCapture={() => {
            setTimeout(() => {
              setIsFocusing(false);
            }, 100);
          }}
          {...register("skill")}
          id="skill"
          onChange={onChangeSkill}
          value={skillValue}
          placeholder="Nhập kỹ năng"
          className="text-primary-black w-full  px-4 rounded-lg border border-silver-grey h-12"
          name="skill"
          autocomplete="off"
        />
        {isFocusing ? (
          <div className="absolute top-[110%] w-full bg-white max-h-[140px] overflow-y-auto py-2 border border-silver-grey rounded-lg text-primary-black shadow-md cursor-pointer">
            {filteredSkill.length > 0 ? (
              filteredSkill.map((skill: string, index: number) => (
                <div
                  onClick={() => onChooseSkill(skill)}
                  key={index}
                  className="py-1 px-3 hover:bg-white-red"
                >
                  {skill}
                </div>
              ))
            ) : (
              <div className="py-1 px-3 bg-white-red">
                {`Thêm kỹ năng "${skillValue}"`}
              </div>
            )}
          </div>
        ) : null}
      </div>
      {errors?.skill ? (
        <span className=" absolute text-primary-red text-sm left-0 top-[105%]">
          {String(errors?.skill?.message)}
        </span>
      ) : null}
    </>
  );
}
