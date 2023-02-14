//handle API calls

const BASE_URL = "/api/notes"

export async function createNote(noteData) {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(noteData)
    })
    if (res.ok) {
        return res.json()
    } else {
        throw new Error("create note failed")
    }
}


export async function indexNote() {
    const res = await fetch(BASE_URL)
    if (res.ok){
        return res.json()
    } else {
        throw new Error("failed to retrieve notes")
    }
}