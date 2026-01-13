import { BreedersTable } from "../components/breeders/BreedersTable"
import { AddBreederModal } from "../components/breeders/AddBreederModal"
import { breeders as initialBreeders } from "@/data/breeders"
import React from "react"


export function BreedersPage() {

  // The state shows if the modal is visible right now
  const [showModal, setShowModal] = React.useState(false)
  const [breeders, setBreeders] = React.useState(initialBreeders)


  const addButtonClick = (event: React.MouseEvent) => {
    setShowModal(true);
  }
  return (
    <>
      <h1>Breeders</h1>
      <BreedersTable breeders={breeders} />
      <button onClick={
        addButtonClick
      }>Add</button>
     {showModal &&
  <AddBreederModal
    open={showModal}
    onOpenChange={setShowModal}
    onAddBreeder={(breeder) => {
      setBreeders([
        ...breeders,
        {
          ...breeder,
          id: Math.random().toString(36).slice(2), // generate unique id
          status: "active", // default status
        },
      ])
    }}
  />
}
    </>
  )
}
