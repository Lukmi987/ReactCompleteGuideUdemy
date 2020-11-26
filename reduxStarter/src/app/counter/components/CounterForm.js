import React, {useCallback, useState} from 'react';

const CounterForm = ({ saveCounterForm }) => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')

    const handleFirstName = useCallback((value) => setFname(value.target.value), [fname])
    const handleSubmit = (e,...rest) => {
        // console.log(rest)
        // const e = rest[0]
        // console.log(e.target)
        console.log(rest)
        e.preventDefault()
        saveCounterForm(composeFormData());
    }

    const composeFormData = () => ({
            fname,
            lname,
    });

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fname">First name:</label><br/>
            <input pattern="[a-z]+" onChange={handleFirstName} value={fname} type="text" id="fname" name="fname"/><br/>
                <input onChange={(value) => setLname(value.target.value)} value={lname} type="text" id="lname" name="lname"/><br/>
            {`${fname} ${lname}`}<br/>
            <button type="submit">Odeslat</button>
        </form>
    )
}

export default  CounterForm;