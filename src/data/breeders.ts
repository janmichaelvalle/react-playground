
export type Breeder = {
  id: string
  name?: string
  gender: "male" | "female"
  breed?: string
  age?: string
  weight?: string
  litters?: number
  kits?: number
  color?: string
  status?: "Active" | "Inactive"
}

export const breeders: Breeder[] = [
  {
    id: "B-001",
    name: "Bubbles",
    gender: "male",
    breed: "Rex",
    age: "2 years",
    weight: "5 lbs",
    litters: 3,
    kits: 5,
    color: "Brown",
    status: "Active",
  },
  {
    id: "B-002",
    name: "Snow",
    gender: "female",
    breed: "Lionhead",
    age: "1 year",
    weight: "4 lbs",
    litters: 1,
    kits: 2,
    color: "White",
    status: "Inactive",
  },
  {
    id: "B-003",
    name: "Oreo",
    gender: "male",
    breed: "Dutch",
    age: "3 years",
    weight: "6 lbs",
    litters: 4,
    kits: 9,
    color: "Black & White",
    status: "Active",
  },
]