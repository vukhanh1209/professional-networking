import FormWrapper from "./FormWrapper"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { closeIntroForm, selectIntroduction, selectIsOpeningIntroForm } from "@/redux/reducers/candidateSlice"
import {useForm} from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { getProfile, writeAboutMe } from "@/redux/actions"
import { notifySuccess } from "@/utils/notification"


const schema = yup.object().shape({
    aboutMe: yup
    .string()
});

export default function FormIntroduction() {
    const isOpeningIntroForm = useAppSelector(selectIsOpeningIntroForm)
    const introduction = useAppSelector(selectIntroduction)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const dispatch = useAppDispatch();
    const onClose = () => {
        dispatch(closeIntroForm())
    }

    const onSave = async (data: any) => {
        if(data) {
            const res = await dispatch(writeAboutMe(data)) 
            if(res.meta.requestStatus === "fulfilled") {
                notifySuccess(res.payload?.message)
                dispatch(getProfile({}))
            }
        }
    }

    return (
        <>
            {isOpeningIntroForm && 
                <FormWrapper title="Giới thiệu bản thân" onClose={onClose} onSave={onSave} handleSubmit={handleSubmit}>
                    <div className="py-6 pr-6 pl-8 max-h-[400px] overflow-auto">
                            <textarea 
                                    {...register("aboutMe")}
                                    name="aboutMe"
                                    rows={9}
                                    defaultValue={introduction}
                                    className="h-fit w-full overflow-auto max-w-[734px] placeholder:text-base placeholder:text-dark-grey text-primary-black outline-none  border border-silver-grey p-4 rounded-lg"
                                    placeholder="Giới thiệu về bản thân bạn..." 
                                    spellCheck="false"
                                />
                        </div>
                </FormWrapper>
                
            }
        </>
    )
}