import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"

type DeleteBreederModalProps = {
    showModal: boolean
    onCloseModal: () => void
    onOpenModal: () => void
    breedeToDelete: Breeder | null
    onDeleteBreeder: (id: string) => void
}

export function DeleteBreederModal({
  showModal,
  onCloseModal,
  breederToDelete,
  onDeleteBreeder
}: DeleteBreederModalProps) {
  return (
    <Dialog open={showModal} onOpenChange={onCloseModal}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete Breeder</DialogTitle>
          <DialogDescription>
            {breederToDelete
              ? `Do you want to delete breeder "${breederToDelete.name}"?`
              : "Do you want to delete this breeder?"}
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-end gap-3 pt-4">
          <button
            className="px-4 py-2 text-sm border rounded-md"
            onClick={onCloseModal}
          >
            No
          </button>

          <button
            className="px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700"
            onClick={() => {
              if (breederToDelete) onDeleteBreeder(breederToDelete.id)
            }}
          >
            Yes
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}