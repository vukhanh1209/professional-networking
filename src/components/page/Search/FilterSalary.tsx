import { useAppDispatch } from "@/redux/hook";
import {
  selectSalaryFilter,
  setSalaryFilter,
} from "@/redux/reducers/searchSlice";
import { useEffect, useState } from "react";

export default function FilterSalary() {
  const [typedMinSalary, setTypedMinSalary] = useState<number>(0);
  const [typedMaxSalary, setTypedMaxSalary] = useState<number>(0);
  const dispatch = useAppDispatch();

  const onChangeMinSalary = (e: any) => {
    setTypedMinSalary(e.target.value);
  };
  const onChangeMaxSalary = (e: any) => {
    setTypedMaxSalary(e.target.value);
  };
  useEffect(() => {
    const minSalryTimeout = setTimeout(() => {
      dispatch(setSalaryFilter({ minSalary: typedMinSalary }));
    }, 500);
    return () => {
      clearTimeout(minSalryTimeout);
    };
  }, [typedMinSalary]);

  useEffect(() => {
    const maxSalryTimeout = setTimeout(() => {
      dispatch(setSalaryFilter({ maxSalary: typedMaxSalary }));
    }, 500);
    return () => {
      clearTimeout(maxSalryTimeout);
    };
  }, [typedMaxSalary]);
  return (
    <div className="w-full mb-3">
      <div className="flex flex-col lg:flex-row gap-x-5 gap-y-3 w-full text-primary-black">
        <div className="flex flex-col gap-2 w-full">
          <h5 className="font-bold text-primary-black ">Mức lương thấp nhất</h5>
          <input
            value={typedMinSalary}
            name="minSalary"
            id="minSalary"
            type="number"
            onChange={onChangeMinSalary}
            className="w-full flex-1 border border-dark-grey px-4 py-3 rounded-md"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <h5 className="font-bold text-primary-black ">Mức lương cao nhất</h5>
          <input
            value={typedMaxSalary}
            name="maxSalary"
            type="number"
            id="maxSalary"
            onChange={onChangeMaxSalary}
            className="w-full flex-1 border border-dark-grey px-4 py-3 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
