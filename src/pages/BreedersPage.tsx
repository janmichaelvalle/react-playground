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
      <AddBreederModal
        showModal={showModal}
        onOpenModal={() => {
          setShowModal(true)
        }}
        onCloseModal={() => {
          setShowModal(false)
        }} // actual function
        
        setBreeders={setBreeders}
      />
    
    </>
  )
}
