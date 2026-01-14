import type { Breeder } from "../../data/breeders"
import { BreederRow } from "./BreederRow"




export function BreedersTable({breeders}: {breeders:Breeder[]}) {
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
          <BreederRow key={breeder.id} breeder={breeder} is_disabled={false} />
        ))}

      </tbody>
    </table>
  )
}
