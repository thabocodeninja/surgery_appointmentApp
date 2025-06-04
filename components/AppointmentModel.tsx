"use client"


import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Appointment } from "@/types/appwrite.types"
import { AppointmentForm } from "./forms/AppointmentForm"

import "react-datepicker/dist/react-datepicker.css"
import { title } from "process"


export const AppointmentModel = ({
    patientId,
    userId,
    appointment,
    type,
}: {
    patientId: string;
    userId: string;
    appointment?: Appointment;
    type: "schedule" | "cancel"
    title: string;
    description:string
}) => {
    const [open, setOpen] = useState(false);


    return (
<Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild>
       <Button
       varient="ghost"
       className={`capitalize ${type === "schedule" && "text-green-500"}`}
       >
        {type}
        </Button> 
    </DialogTrigger>
    
</Dialog>


    )
}