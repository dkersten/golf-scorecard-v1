// libraries/helpers
import { useState } from "react"

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
            onSubmit={(e) => {
                e.preventDefault()
                postFormData()
            }}
        >

            <label htmlFor="name">
            Name: 
            <input
                id="name"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            />
            </label>

            <label htmlFor="city">
            City: 
            <input
                id="city"
                value={city}
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
            />
            </label>

            <label htmlFor="state">
            State: 
            <input
                id="state"
                value={state}
                placeholder="State"
                onChange={(e) => setState(e.target.value)}
            />
            </label>

            <label htmlFor="country">
            Country: 
            <input
                id="country"
                value={country}
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
            />
            </label>

            <label htmlFor="year">
            Year: 
            <input
                id="year"
                value={year}
                placeholder="Year"
                onChange={(e) => setYear(e.target.value)}
            />
            </label>

            <input type="submit" value="Submit" />
        </form>
    )
}

export default CourseForm