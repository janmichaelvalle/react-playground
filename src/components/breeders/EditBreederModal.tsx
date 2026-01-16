/*
1. [Done] When the Edit button is clicked in BreedersTable, the modal will pop-up with just static data
2. [Done] Populate the modal with the data based on what row the user clicked
3. User can change name, gender, breed and click save
    onEditBreeder in BreedersPage.tsx
4. Save changes will be applied 
*/ 

import type { Breeder } from "@/data/breeders"



import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { useState, useRef } from "react"


type EditBreederModalsProps  = {
    // Step 2 from breeder row
    // Step 1: Props from breeder row
    showModal: boolean
    onOpenModal: () => void
    onCloseModal: () => void
    onEditBreeder: (updatedBreeder: Breeder) => void
    breederToUpdate: Breeder
}

export function EditBreederModal ( {breederToUpdate, showModal, onOpenModal, onCloseModal, onEditBreeder}: EditBreederModalsProps) {
    
    
    const [gender, setGender] = useState(breederToUpdate.gender)
    const [breed, setBreed] = useState(breederToUpdate.breed)


    

     const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        // Get the value of input fields via the "name" property
        
        // Step 1. declare FormData
        const form = event.target;

        const formData = new FormData(form)

        // Step 2. Get the fields from formData using formData.get()

        const updatedName = formData.get("name-input")

        const updatedBreeder = {
            ...breederToUpdate,
            name: updatedName,
            gender,
            breed,
        };

        onEditBreeder(updatedBreeder)
         
        console.log(updatedBreeder)
        onCloseModal()
    }

    

    return (
 
        // Step 1
     <Dialog open={showModal} onOpenChange={
        (open) => {
            if (open) {
                onOpenModal()
            } else {
                onCloseModal()
            }
        }
     }>

          
            <DialogContent className={"sm:max-w-md"}>
                <DialogHeader>
                    <DialogTitle>Edit Breeder</DialogTitle>
                    <DialogDescription>
                        Edit breeder record.
                    </DialogDescription>
                </DialogHeader>

                   <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium">Name</label>
                        <input
                            name="name-input"
                            type="text"
                            className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                            // // Controlled input / Via "value" + "onChannge" prop and useState
                            // value={}
                            // onChange={}

                            // Uncontrolled input / not using "value" prop and "onChange" prop. defaultValue optional if you need to display inital value
                            defaultValue={breederToUpdate.name}
                        />
                    </div>

                    {/* Gender */}
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-medium">Gender</span>

                        <div className="flex gap-6">
                            <label className="flex items-center gap-2 text-sm">
                                <input
                                    type="radio"
                                    name="gender"
                                    checked={gender === "male"}
                                    onChange={() => setGender("male")}
                                />
                                Male
                            </label>

                            <label className="flex items-center gap-2 text-sm">
                                <input
                                    type="radio"
                                    name="gender"
                                    checked={gender === "female"}
                                    onChange={() => setGender("female")}
                                />
                                Female
                            </label>
                        </div>
                    </div>

                    {/* Breed */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium">Breed</label>
                        <input
                            type="text"
                            className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                            value={breed}
                            onChange={(e) => setBreed(e.target.value)}
                        />
                    </div>

                    {/* Footer */}
                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-black/90"
                        >
                            Save
                        </button>
                    </div>
                    </form>
              
            </DialogContent>
        </Dialog>
        )
}
