"use client";
import { getAllSkill } from "@/redux/actions";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectIsOpeningSkillsForm } from "@/redux/reducers/candidateSlice";
import { useEffect, useMemo, useRef, useState } from "react";

export default function InputSkill({ skill, setSkill }: any) {
  const isOpeningSkillsForm = useAppSelector(selectIsOpeningSkillsForm);
  const [isFocusing, setIsFocusing] = useState<boolean>(false);

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
    setSkill(e.target.value);
  };

  const onChooseSkill = (skill: string) => {
    setSkill(skill);
  };

  const filteredSkill = useMemo(() => {
    if (!skill) return skillList;
    const suggestionSkillList = skillList.filter((skill: string) =>
      skill.toLowerCase().includes(skill.toLowerCase())
    );
    return suggestionSkillList;
  }, [skillList, skill]);

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
          id="skill"
          onChange={onChangeSkill}
          value={skill}
          placeholder="Nhập kỹ năng"
          className="text-primary-black w-full  px-4 rounded-lg border border-silver-grey h-12"
          name="skill"
          autoComplete="off"
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
                {`Thêm kỹ năng "${skill}"`}
              </div>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
}
