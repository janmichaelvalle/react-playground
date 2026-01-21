import type { Breeder } from "../../data/breeders"
import { BreederRow } from "./BreederRow"

type BreedersTable = {
  breeders: Breeder[]
  editButtonClick: () => void
  deleteButtonClick: () => void
}


export function BreedersTable({ breeders, editButtonClick, deleteButtonClick }: BreedersTable) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Breed</th>
          <th>Status</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {breeders.map((breeder) => (
          // The code below passes props from this file to BreederRow.tsx.
        <BreederRow 
          key={breeder.id} 
          breeder={breeder} 
          is_disabled={false} 
          editButtonClick={editButtonClick}
          deleteButtonClick={deleteButtonClick}
        />
        ))}

      </tbody>
    </table>
  )
}
