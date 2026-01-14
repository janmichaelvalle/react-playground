import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { useState } from "react"
import { type Breeder } from "@/data/breeders"



type AddBreederModalProps = {
  showModal: boolean
  onOpenModal: () => void
  onCloseModal: () => void
  onAddBreeder: (breeder: { name: string; gender: string; breed: string }) => void
  setBreeders: React.Dispatch<React.SetStateAction<Breeder[]>>
}




export function AddBreederModal( {showModal, onOpenModal, onCloseModal, setBreeders }: AddBreederModalProps) {
    const [name, setName] = useState("Alex")
    const [gender, setGender] = useState<"male" | "female">("male")
    const [breed, setBreed] = useState("Holland Lop")

    const onAddBreeder = (newBreeder: { name: string; gender: string; breed: string }) => {
        setBreeders((prevBreeders) => {
            // Must return a new state value (breeders)
            return [
                ...prevBreeders,
                {
                    ...newBreeder,
                    id: Math.random().toString(36).slice(2), // generate unique id
                    status: "Active", // default status,
                    gender: gender
                },
            ]
        })
    }
    

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
         onAddBreeder({
            name,
            gender,
            breed,
        })

        console.log({
            name,
            gender,
            breed,
        })
        onCloseModal()
    }

    if (showModal === false) {
        return undefined
    }

    return (
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
                    <DialogTitle>Add Breeder</DialogTitle>
                    <DialogDescription>
                        Create a new breeder record.
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
