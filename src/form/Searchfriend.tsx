'use client'
import { getdata } from '@/_actions/getdata';
import { userNumber } from '@/utils/types';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
function Searchfriend() {
    const { register, handleSubmit, formState: { errors } } = useForm<userNumber>();
    const onSubmit: SubmitHandler<userNumber> = async data =>{
      const res=await getdata(data)
      console.log(res)
    };
  
  return (
    <div>
        <section>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='search' {...register("number")} />
            <button type='submit'>search</button>
            </form>
          </section>
          <section>
            {
              
            }
          </section>
    </div>
  )
}

export default Searchfriend