// 1. Render modeal when add button click
// 2. Close modal when clicked close
// 3. Give data to table or page

type Props = {
    onClose: () => void
}

export function AddBreederModal() {
    return (
        <>
            <div className="overlay">
                <div className="modal">
                    Modal content
                </div>
            </div>

        </>
    )
}