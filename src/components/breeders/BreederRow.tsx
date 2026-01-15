import type { Breeder } from "../../data/breeders"
import React from "react"
import { EditBreederModal } from "./EditBreederModal"



type BreederRowProps = {
  breeder: Breeder
  is_disabled: boolean
}

export function BreederRow({ breeder, is_disabled }: BreederRowProps) {

   const [showModal, setShowModal] = React.useState(false)

  const editButtonClick = (event: React.MouseEvent) => {
    setShowModal(true)
  }

  return (
    <tr>
      <td>{breeder.name}</td>
      <td>{breeder.gender}</td>
      <td>{breeder.breed}</td>
      <td>{breeder.status}</td>
      <td>
        <button onClick={editButtonClick}>Edit</button>
        <EditBreederModal 
        showModal={showModal}
        onOpenModal={() => {
          setShowModal(true)
        }}
        onCloseModal={() => {
          setShowModal(false)
        }}
        breeder={breeder}
      
        />
        </td>
    </tr>
  )
}