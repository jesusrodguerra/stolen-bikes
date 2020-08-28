import React, {useState}  from 'react'

const Filter = ({handlerInput}) => {

    const [textValue, setTextValue] = useState('')

    const handlerValue = (e) => {
        setTextValue(e.target.value)
        handlerInput(textValue)

    }


    return (
        <div className="margin">
            <nav className="navbar navbar-expand-sm justify-content-center">
                <ul className="navbar-nav">
                    <li>
                        <div className="field is-grouped">
                        <p className="control">
                                <input onChange={ (value) => {handlerValue(value)}} className="input" type="text" value={textValue} placeholder="Search by Description"/>
                            </p>
                            <p className="control">
                                <label> Start Date</label>
                                <input className="input" type="date" placeholder="Find a repository"/>
                            </p>
                            <p className="control">
                                <label> End Date</label>
                                <input className="input" type="date" placeholder="Find a repository"/>
                            </p>
                            <p className="control">
                                <a href="!#" className="button is-info">
                                Search
                                </a>
                            </p>
                        </div>
                    </li>
                    <li className="total-report nav-item ml-auto">
                        <p className="nav-link"> Total Reported: </p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Filter;
