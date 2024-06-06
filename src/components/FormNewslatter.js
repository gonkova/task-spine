'use client';
import React, { useState } from 'react';
import Button from './Button';
import { useForm } from 'react-hook-form';
import { FaCheck } from "react-icons/fa6";
import clsx from 'clsx';

const FormNewsletter = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [data, setData] = useState('');
    const [showThanks, setShowThanks] = useState(false);

    const onSubmit = (data) => {
        setData(JSON.stringify(data));
        setShowThanks(true);
        reset();

        setTimeout(() => {
            setShowThanks(false);
        }, 2000);
    };

    const handleBlur = (e) => {
        if (!e.target.value) {
            reset();
        }
    };

    return (
        <>
            {showThanks ? (
                <div className='flex flex-col space-y-4 rounded-2xl w-[200px] px-6 py-10 text-left'>
                    <FaCheck className='h-8 w-8 flex items-center justify-center rounded-full bg-primary text-white text-lg' />
                    <h2 className='text-white text-2xl font-semibold leading-120 font-poppins'>
                        Thanks for
                        subscribing!
                    </h2>
                </div>
            ) : (
                <div className='p-5 mt-8 md:mt-10'>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='flex flex-col justify-center items-center md:justify-start md:items-start gap-6'
                    >
                        <div>
                            <h2 className='text-white text-xl md:text-lg font-semibold font-sf-pro leading-140'>Join our newsletter</h2>
                        </div>

                        <div className="flex flex-col gap-2">
                            <input
                                {...register('email', {
                                    required: 'Valid email required',
                                    pattern: {
                                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                        message: 'Invalid email address'
                                    }
                                })}
                                placeholder='Enter email address'
                                className={clsx(
                                    'w-full border border-white bg-dark-1 placeholder:text-white h-11 px-4 placeholder:text-sm',
                                    {
                                        'border-red-400 bg-red-100 outline-red-400': errors.email
                                    }
                                )}
                                onBlur={handleBlur}
                            />
                            {errors.email && <p className="text-red-500 mt-2">{errors.email.message}</p>}
                        </div>

                        <Button className="w-28 bg-primary text-dark-1 border-none font-poppins leading-120 font-bold py-3 md:py-2 rounded-xl">
                            Get Start
                        </Button>
                    </form>
                </div>
            )}
        </>
    );
};

export default FormNewsletter;
