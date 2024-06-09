'use client';
import React, { useState } from 'react';
import Button from './Button';
import { useForm } from 'react-hook-form';
import { FaCheck } from "react-icons/fa6";
import clsx from 'clsx';

const FormNewslаtter = ({
    thanksMessage = "Thanks for subscribing!",
    formTitle = "Join our newsletter",
    placeholderText = "Enter email address",
    buttonText = "Get Start",
    containerClass = '',
    formClass = '',
    titleClass = '',
    inputClass = '',
    buttonClass = '',
    thanksContainerClass = '',
    thanksIconClass = '',
    thanksTextClass = '',
    placeholderTextClass = '',
    inputBorderClass = ''
}) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [showThanks, setShowThanks] = useState(false);

    const onSubmit = (data) => {
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
                <div className={clsx('flex flex-col space-y-4 rounded-2xl w-[200px] px-6 py-10 text-left', thanksContainerClass)}>
                    <FaCheck className={clsx('h-8 w-8 flex items-center justify-center rounded-full bg-primary text-white text-lg', thanksIconClass)} />
                    <h2 className={clsx('text-white text-2xl font-semibold leading-120 font-poppins', thanksTextClass)}>
                        {thanksMessage}
                    </h2>
                </div>
            ) : (
                <div className={clsx('p-5 mt-8 md:mt-10', containerClass)}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={clsx('flex flex-col justify-center items-center md:justify-start md:items-start gap-6', formClass)}
                    >
                        <div>
                            <h2 className={clsx('text-white text-xl md:text-lg font-semibold font-sf-pro leading-140', titleClass)}>
                                {formTitle}
                            </h2>
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
                                placeholder={placeholderText}
                                className={clsx(
                                    'w-full border bg-dark-1 h-11 px-4 placeholder:text-sm',
                                    inputClass,
                                    placeholderTextClass,
                                    inputBorderClass,
                                    {
                                        'border-red-400 bg-red-100 outline-red-400': errors.email
                                    }
                                )}
                                onBlur={handleBlur}
                            />
                            {errors.email && <p className="text-red-500 mt-2">{errors.email.message}</p>}
                        </div>

                        <Button className={clsx('w-28 bg-primary text-dark-1 border-none font-poppins leading-120 font-bold py-3 md:py-2 rounded-xl', buttonClass)}>
                            {buttonText}
                        </Button>
                    </form>
                </div>
            )}
        </>
    );
};

export default FormNewslаtter;
