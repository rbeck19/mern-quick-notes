export default function NoteCreate() {

    function handleChange (event) {
        let note = event.target.value
        console.log(note)
    }

    function handleSubmit (event) {
        event.preventDefault()
    }

    return (
        <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Enter Note</label>
                <input type="text" onChange={handleChange}></input>
                <button type="submit">Create Note</button>
        </form>
        </div>
    )
}