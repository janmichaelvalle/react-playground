import { BreedersTable } from "../components/breeders/BreedersTable"
import { AddBreederModal } from "../components/breeders/AddBreederModal"
import React from "react"


export function BreedersPage() {

  // The state shows if the modal is visible right now
  const [showModal, setShowModal] = React.useState(false)


  const addButtonClick = (event: React.MouseEvent) => {
    setShowModal(true);
  }
  return (
    <>
      <h1>Breeders</h1>
      <BreedersTable />
      <button onClick={
        addButtonClick
      }>Add</button>
      {showModal
        ?
        <p>
          <AddBreederModal />
        </p>
        :
        null
      }
    </>
  )
}
