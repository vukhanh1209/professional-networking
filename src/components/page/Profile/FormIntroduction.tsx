import { useState } from "react"
import FormWrapper from "./FormWrapper"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { closeIntroForm, selectIsOpeningIntroForm } from "@/redux/reducers/candidateSlice"
import {useForm} from "react-hook-form"

export default function FormIntroduction() {
    const isOpeningIntroForm = useAppSelector(selectIsOpeningIntroForm)
    const {handleSubmit} = useForm()

    const dispatch = useAppDispatch();
    const onClose = () => {
        dispatch(closeIntroForm())
    }

    const onSave = (data: any) => {

    }

    return (
        <>
            {isOpeningIntroForm && 
                <FormWrapper title="Giới thiệu bản thân" onClose={onClose} onSave={onSave} handleSubmit={handleSubmit}>
                    <div className="py-6 pr-6 pl-8 max-h-[400px] overflow-auto">
                            <textarea 
                                    // {...register}
                                    name="coverLetter"
                                    rows={9}
                                    // onChange={handleChangeCoverLetter}
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