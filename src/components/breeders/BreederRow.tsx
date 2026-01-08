import type { Breeder } from "../../data/breeders"


type BreederRowProps = {
  breeder: Breeder
  is_disabled: boolean
}

export function BreederRow({ breeder, is_disabled }: BreederRowProps) {
  return (
    <tr>
      <td>{breeder.name}</td>
      <td>{breeder.gender}</td>
      <td>{breeder.breed}</td>
      <td>{breeder.status}</td>
    </tr>
  )
}