"use client"


import {zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"



import { Form } from "react-hook-form"
//import { createUser } from "@/lib/actions/patient.actions"
import { UserFormValidation } from "@/lib/validation"


import "react-phone-number-input/style.css"
import CustomFormField, {FormFieldType} from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"



export const PatientForm = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })


  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true)

    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone
      }

      const newUser = await createUser(user)

      if (newUser) {
        router.push(`/patients/${newUser.$id}/register`)
      }
    } catch(error) {
      console.log(error)
    }
    setIsLoading(false)
  }
  
}
