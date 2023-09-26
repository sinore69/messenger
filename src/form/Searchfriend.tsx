import { senddata } from '@/_actions/senddata';
import { userNumber } from '@/utils/types';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

function Searchfriend() {
    const { register, handleSubmit, formState: { errors } } = useForm<userNumber>();

    const onSubmit: SubmitHandler<userNumber> = data =>{
      senddata(data);
    };
  
  return (
    <div>
        <section>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='search' {...register("number")} />
            <input type='submit' />
            </form>
          </section>
    </div>
  )
}

export default Searchfriend