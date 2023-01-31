// libraries/helpers
import { useState } from "react"

// styling
import '../styling/components/CoursesForm.scss'

const CourseForm = () => {

    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [year, setYear] = useState("")

    const postFormData = () => {
        setName("")
        setCity("")
        setState("")
        setCountry("")
        setYear("")
    }

    return(
        <form
            className="form modal-form courses-form"
            onSubmit={(e) => {
                e.preventDefault()
                postFormData()
            }}
        >
            <div className="input-container flex-container">
                <label
                    htmlFor="name"
                    className="flex-item flex-container"
                >
                    <span>Name:</span>
                    <input
                        id="name"
                        value={name}
                        placeholder="Brighton Park GC"
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label
                    htmlFor="city"
                    className="flex-item flex-container"
                >
                    <span>City:</span>
                    <input
                        id="city"
                        value={city}
                        placeholder="Tonawanda"
                        onChange={(e) => setCity(e.target.value)}
                    />
                </label>

                <label
                    htmlFor="state"
                    className="flex-item flex-container"
                >
                    <span>State:</span>
                    <input
                        id="state"
                        value={state}
                        placeholder="NY"
                        onChange={(e) => setState(e.target.value)}
                    />
                </label>

                <label
                    htmlFor="country"
                    className="flex-item flex-container"
                >
                    <span>Country:</span> 
                    <input
                        id="country"
                        value={country}
                        placeholder="USA"
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </label>

                <label
                    htmlFor="year"
                    className="flex-item flex-container"
                >
                    <span>Year:</span> 
                    <input
                        id="year"
                        value={year}
                        placeholder={ new Date().getFullYear() }
                        onChange={(e) => setYear(e.target.value)}
                    />
                </label>
            </div>

            <input className="btn-primary" type="submit" value="Submit" />
        </form>
    )
}

export default CourseForm