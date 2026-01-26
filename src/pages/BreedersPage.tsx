import { BreedersTable } from "../components/breeders/BreedersTable"
import { AddBreederModal } from "../components/breeders/AddBreederModal"
import { breeders as initialBreeders, type Breeder } from "@/data/breeders"
import React from "react"
import { EditBreederModal } from "@/components/breeders/EditBreederModal"
import { DeleteBreederModal } from '@/components/breeders/DeleteBreederModal'


export function BreedersPage() {

  // The state shows if the modal is visible right now
  const [showModal, setShowModal] = React.useState(false)

  // Breeders is array of objects
  const [breeders, setBreeders] = React.useState<Breeders[]>(initialBreeders)

  // Should this be here?
  const [breederToUpdate, setBreederToUpdate] = React.useState<Breeder | null>(null)
  const [showEditModal, setshowEditModal] = React.useState(false)
  const [showDeleteModal, setShowDeleteModal] = React.useState(false)
  const [breederToDelete, setBreederToDelete] = React.useState<Breeder | null>(null)


  React.useEffect(
    () => {
      // When working with Promise, you wont know WHEN exactly it will get resolved   

      // Syntax callback:
      // fetch('https://dummyjson.com/users/1')
      //   .then((res) => res.json())
      //   .then((data) => { 
      //     setUser(data) 
      //   });

      // Syntax await (to avoid callback hell):
      const fetchUser = async () => {
        const res = await fetch('https://dummyjson.com/users/1')
        const data = await res.json()
        setUser(data)
       
        
      }

      fetchUser() // do not forget to call the function
    },
    []
  )

  const [user, setUser] = React.useState<{ firstName: string }>()


  // React.useEffect(
  //   () => {
  //     document.title = "HEY"; // side-effect
  //   }, 
  //   [] // empty === initial render
  // )

  // // Invalid use of useEffect. Why???
  // React.useEffect(
  //   () => {
  //     // Should only update page's title when breeders list actually updates
  //     document.title = "THIS WILL RUN WHEN THE DEPS UPDATE";  // not totally side effect. Depends ON WHEN you actually want to it

  //     // even for fetching data, it will ONLY be considered as effect based on WHEN YOU WANT TO FETCH the data
  //     const res = await fetch(thirdPartyServiceUrl)
  //     const data = await res.json()
  //   }, 
  //   [breeders] // if there's a deps === initial render + every time the deps updates
  // )

  // // Synchronize breedersCount state to breeders state
  // React.useEffect(
  //   () => {
  //     setBreedersCount(breeders.length)
  //   },
  //   [breeders]
  // )

  // // - initial load
  // // - subscribing to event/external api
  // // - during clean ups (desctruction) 

  // // React.useEffect(
  // //   () => {
  // //     // subscribe to 3rd partty api where data is provided
  // //     realtimeDashboard.subscribe(
  // //       () => {
  // //         // synchronize your app
  // //       }
  // //     )

  // //     // Clean up function: Will run upon component destruction
  // //     return () => {
  // //       document.title = "PAGE SWITCHED";
  // //       realtimeDashboard.unsubscribe()
  // //     }
  // //   },
  // //   []
  // // )


  const addButtonClick = (event: React.MouseEvent) => {
    setShowModal(true);
  }

  const deleteButtonClick = (id: string) => {
    const breeder = breeders.find(b => b.id === id) || null;
    setBreederToDelete(breeder);
    setShowDeleteModal(true);
  }

  const onDeleteBreeder = (id: string) => {
    setBreeders(
      (prev) => {
        // Make b => b.id !== id more explicit. Why is this shortcut valid?
        const updatedBreeder = prev.filter(b => b.id !== id)
        return updatedBreeder
      }
    );
    setShowDeleteModal(false);
    setBreederToDelete(null);
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
      <h1>{user && user.firstName}</h1>
      <h1>Breeders</h1>
      <BreedersTable
        breeders={breeders}
        editButtonClick={editButtonClick}
        deleteButtonClick={deleteButtonClick}
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
          breederToUpdate={breederToUpdate}
          onEditBreeder={onEditBreeder}

        />
      )}

      <DeleteBreederModal
        showModal={showDeleteModal}
        onOpenModal={() => {
          setShowDeleteModal(true)
        }}
        onCloseModal={() => {
          setShowDeleteModal(false)
        }}
        breederToDelete={breederToDelete}
        onDeleteBreeder={onDeleteBreeder}


      />



    </>
  )
}
