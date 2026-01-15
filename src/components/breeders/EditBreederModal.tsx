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
import { useState } from "react"


type EditBreederModalsProps  = {
    // Step 2 from breeder row
    breeder: Breeder
    // Step 1: Props from breeder row
    showModal: boolean
    onOpenModal: () => void
    onCloseModal: () => void
    onEditBreeder: (updatedBreeder: Breeder) => void
}

export function EditBreederModal ( {breeder, showModal, onOpenModal, onCloseModal, onEditBreeder}: EditBreederModalsProps) {
    const [name, setName] = useState(breeder.name)
    const [gender, setGender] = useState(breeder.gender)
    const [breed, setBreed] = useState(breeder.breed)

    const updatedBreeder = {
        ...breeder,
        name,
        gender,
        breed,
    };

     const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
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
                            type="text"
                            className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
