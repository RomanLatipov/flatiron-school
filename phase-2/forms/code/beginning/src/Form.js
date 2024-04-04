import {useState} from "react";

export default function Form() {
    const [values, setValues] = useState({
        name : "",
        movies: ""
    });
    function print(event) {
        event.preventDefault();
        console.log(values["name"]);
        console.log(values["movies"]);
    }
    // function handleChange(event) {
    //     setValues({
    //         ...values,
    //         [event.target.name]: event.target.value
    //     })
    // }
    
    return (
        <form onSubmit={print}>
            <label><strong>Name </strong>
                <input name="name" value={values.name} onChange={event => setValues({...values, name: event.target.value})}/>
            </label>
            <br/><br/>
            <label><strong>Movie </strong>
            <input name="movies" value={values.movies} onChange={event => setValues({...values, movies: event.target.value})}/>
            </label>
            <br/><br/>
            <em>Your lucky number is</em> <strong>2</strong>!
            <br/><br/>
            <input type="submit" value="Sign Up"/>
            <h2>Members</h2>
            <sub>Fill out the form to add your first member!</sub>
        </form>
    )
}