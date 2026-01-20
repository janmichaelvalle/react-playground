import { BreedersTable } from "../components/breeders/BreedersTable"
import { AddBreederModal } from "../components/breeders/AddBreederModal"
import { breeders as initialBreeders, type Breeder } from "@/data/breeders"
import React from "react"
import { EditBreederModal } from "@/components/breeders/EditBreederModal"


export function BreedersPage() {

  // The state shows if the modal is visible right now
  const [showModal, setShowModal] = React.useState(false)
  const [breeders, setBreeders] = React.useState(initialBreeders)

  // Should this be here?
  const [breederToUpdate, setBreederToUpdate] = React.useState<Breeder | null>(null)
  const [showEditModal, setshowEditModal] = React.useState(false)


  const addButtonClick = (event: React.MouseEvent) => {
    setShowModal(true);
  }


  
  const editButtonClick = (breederId: string) => {
    // Handle all edit logic here...

    setshowEditModal(true)

    
    
  // Find the passed breeder ID from the whole breeders list
  const findBreederToUpdate = (breederToUpdateId: string) => {
    //return breeders.find((existingBreeder) => {
    //   if (existingBreeder.id === breederToUpdateId) {
    //     return true
    //   }
    //   return false
    // })

   return breeders.find((existingBreeder) => existingBreeder.id === breederToUpdateId)
  }

    const breederToUpdate = findBreederToUpdate(breederId)

    console.log("BREEDER TO UPDATE: ", breederToUpdate)
    // setBreederToUpdate(breederToUpdate ?? null)

    if (breederToUpdate) {
      setBreederToUpdate(breederToUpdate)
    }
  }



  // Recevies updated breeder
function onEditBreeder(updatedBreeder) {
  setBreeders(prevBreeders =>
    prevBreeders.map(breeder =>
      breeder.id === updatedBreeder.id ? { ...breeder, ...updatedBreeder } : breeder
    )
  );
  setshowEditModal(false);      // Close the modal
  setBreederToUpdate(null);     // Clear the selected breeder
}

  return (
    <>
      <h1>Breeders</h1>
      <BreedersTable 
        breeders={breeders} 
        editButtonClick={editButtonClick}
      />
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
        }} 
        
        setBreeders={setBreeders}
      />
    
    {breederToUpdate && (
      <EditBreederModal 
        showModal={showEditModal}
        onOpenModal={() => {
          setshowEditModal(true)
        }}
        onCloseModal={() => {
          setshowEditModal(false)
        }} 
        breederToUpdate = {breederToUpdate}
        onEditBreeder={onEditBreeder}

      />
    ) }
      
    
    </>
  )
}
