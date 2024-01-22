'use client'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { messages } from '@/utils/types';
function InputMessage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<messages>();
      const onSubmit: SubmitHandler<messages> = async (data) => {
        console.log(data);
      };
  return (
    <div className='relative'>
        <section className='absolute right-0.5 bottom-2'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-row'>
                <input placeholder='enter message' {...register("text")} className='h-10 w-80' />
                    <button type='submit'>enter</button>
            </form>
        </section>
    </div>
  )
}

export default InputMessage