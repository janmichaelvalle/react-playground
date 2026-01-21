import type { Breeder } from "../../data/breeders"
import React from "react"
import { EditBreederModal } from "./EditBreederModal"



type BreederRowProps = {
  breeder: Breeder
  is_disabled: boolean
  editButtonClick: (id: string) => void
  deleteButtonClick: (id: string) => void
}

// The props from BreedersTalbe.tsx should be here.
export function BreederRow({ breeder, is_disabled, editButtonClick, deleteButtonClick }: BreederRowProps) {
 const passBreederIdToEditButtonClick = () => {
  editButtonClick(breeder.id)
}

const passBreederIdToDeleteButtonClick = () => {
  deleteButtonClick(breeder.id)
}
  
  return (
    <tr>
      <td>{breeder.name}</td>
      <td>{breeder.gender}</td>
      <td>{breeder.breed}</td>
      <td>{breeder.status}</td>
      <td>
        <button onClick={passBreederIdToEditButtonClick}>
          Edit ({breeder.id})
        </button>
        </td>
        <td>
        <button onClick={passBreederIdToDeleteButtonClick}>
          Delete ({breeder.id})
        </button>
        </td>
    </tr>
  )
}