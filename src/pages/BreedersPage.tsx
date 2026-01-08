import { BreedersTable } from "../components/breeders/BreedersTable"
import React from "react"


export function BreedersPage() {
  const [showModal, setShowModal] = React.useState(false)


  const addButtonClick = (event: React.MouseEvent) => {
    setShowModal(true);
  }
  console.log(showModal);
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
          Modal
        </p>
        :
        null
      }
    </>
  )
}
