'use client'
import { getdata } from '@/_actions/getdata';
import { userNumber } from '@/utils/types';
import { AxiosResponse } from 'axios';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

const notify = (res:string) => toast(res);

function Searchfriend() {
    const { register, handleSubmit, formState: { errors } } = useForm<userNumber>();
    const onSubmit: SubmitHandler<userNumber> = async data =>{
      await getdata(data).then((res)=>notify(res?.data));
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
              <Toaster></Toaster>
          </section>
    </div>
  )
}

export default Searchfriend