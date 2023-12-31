import { FormProvider, useForm } from 'react-hook-form'
import { useState } from 'react'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { Input } from './'
import {
  name_validation,
  desc_validation,
  birthdate_validation,
  email_validation,
  num_validation,
  password_validation,
} from '../utils/inputValidations'

export const Form = () => {
  const methods = useForm()
  const [success, setSuccess] = useState(false)

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    methods.reset()
    setSuccess(true)
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Input {...name_validation} />
          <Input {...birthdate_validation} />
          <Input {...email_validation} />
          <Input {...password_validation} />
          <Input {...num_validation} />
          <Input {...desc_validation} className="md:col-span-2" />
        </div>
        <div className="mt-5">
          {success && (
            <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
              <BsFillCheckSquareFill /> Form has been submitted successfully
            </p>
          )}
          <button
            id='submit'
            onClick={onSubmit}
            className="p-5 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800"
          >
            <GrMail />
            Submit Form
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
