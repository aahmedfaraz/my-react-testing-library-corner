import React, { useState } from 'react'

const Form = () => {

    const [validation, setValidation] = useState({
        username: null,
        email: null,
        phone: null,
        password: null,
        occupation: null,
        hobbies: null,
    })

    return (
        <form>
            <fieldset>
                <legend><label htmlFor="username">🧪 Test 1</label></legend>
                <input data-testid="username" type="text"  id="username" name="username" placeholder="username" />
                <small><strong>Check:</strong> username must be alphanumeric and contain 5 - 12 characters.</small>
                <small data-testid="badge" 
                    className={`${
                        validation.username === null ? 'nostatus' : validation.username ? 'success' : 'error'
                    } badge`}
                >
                    {
                        validation.username === null ? 'No Status' : validation.username ? 'Correct' : 'Incorrect'
                    }
                </small>
            </fieldset>
            <fieldset>
                <legend><label htmlFor="email">🧪 Test 2</label></legend>
                <input data-testid="email" type="text"  id="email" name="email" placeholder="email" />
                <small><strong>Check:</strong> email must be a valid address, e.g. ahmedfaraz.contact@gmail.com.</small>
                <small data-testid="badge" 
                    className={`${
                        validation.email === null ? 'nostatus' : validation.email ? 'success' : 'error'
                    } badge`}
                >
                    {
                        validation.email === null ? 'No Status' : validation.email ? 'Correct' : 'Incorrect'
                    }
                </small>
            </fieldset>
            <fieldset>
                <legend><label htmlFor="phone">🧪 Test 3</label></legend>
                <input data-testid="phone" type="text"  id="phone" name="phone" placeholder="phone" />
                <small><strong>Check:</strong> phone must be a valid PK telephone number (11 digits).</small>
                <small data-testid="badge" 
                    className={`${
                        validation.phone === null ? 'nostatus' : validation.phone ? 'success' : 'error'
                    } badge`}
                >
                    {
                        validation.phone === null ? 'No Status' : validation.phone ? 'Correct' : 'Incorrect'
                    }
                </small>
            </fieldset>
            <fieldset>
                <legend><label htmlFor="password">🧪 Test 4</label></legend>
                <input data-testid="password" type="text"  id="password" name="password" placeholder="password" />
                <small><strong>Check:</strong> password must be alphanumeric ( `@` , `_` and `-` are allowed) and be 8 - 20 characters.</small>
                <small data-testid="badge" 
                    className={`${
                        validation.password === null ? 'nostatus' : validation.password ? 'success' : 'error'
                    } badge`}
                >
                    {
                        validation.password === null ? 'No Status' : validation.password ? 'Correct' : 'Incorrect'
                    }
                </small>
            </fieldset>
            <fieldset>
                <legend><label htmlFor="occupation">🧪 Test 5</label></legend>
                <span><input data-testid="occupation" type="radio" name="occupation" value="engineer" placeholder="occupation" /> Engineer</span>
                <span><input data-testid="occupation" type="radio" name="occupation" value="doctor" placeholder="occupation" /> Doctor</span>
                <span><input data-testid="occupation" type="radio" name="occupation" value="anonymous" placeholder="occupation" /> Anonymous: For Error message</span>
                <small><strong>Check:</strong> occupation must be selected.</small>
                <small data-testid="badge" 
                    className={`${
                        validation.occupation === null ? 'nostatus' : validation.occupation ? 'success' : 'error'
                    } badge`}
                >
                    {
                        validation.occupation === null ? 'No Status' : validation.occupation ? 'Correct' : 'Incorrect'
                    }
                </small>
            </fieldset>
            <fieldset>
                <legend><label htmlFor="hobbies">🧪 Test 6</label></legend>
                <span><input data-testid="hobbies" type="checkbox" name="hobbies" value="read-books" placeholder="hobbies" /> Read Books</span>
                <span><input data-testid="hobbies" type="checkbox" name="hobbies" value="watch-movies" placeholder="hobbies" /> Watch Movies</span>
                <span><input data-testid="hobbies" type="checkbox" name="hobbies" value="outing" placeholder="hobbies" /> Outing</span>
                <span><input data-testid="hobbies" type="checkbox" name="hobbies" value="anonymous" placeholder="hobbies" /> Anonymous: For Error message</span>
                <small><strong>Check:</strong> hobbies can be more than one.</small>
                <small data-testid="badge" 
                    className={`${
                        validation.hobbies === null ? 'nostatus' : validation.hobbies ? 'success' : 'error'
                    } badge`}
                >
                    {
                        validation.hobbies === null ? 'No Status' : validation.hobbies ? 'Correct' : 'Incorrect'
                    }
                </small>
            </fieldset>
            <fieldset>
                <legend><label htmlFor="click-event">🧪 Test 7</label></legend>
                <span>
                    <button data-testid="click-event-greeting" onClick={e => {
                        e.preventDefault();
                    }} className="click-event-button">Greetings</button>
                    <button data-testid="click-event-morning" onClick={e => {
                        e.preventDefault();
                    }} className="click-event-button">It's Morning</button>
                    <button data-testid="click-event-afternoon" onClick={e => {
                        e.preventDefault();
                    }} className="click-event-button">It's Afternoon</button>
                </span>
                <small><strong>Check:</strong> Click button and text on it should display.</small>
                <h2>Click any button.</h2>
            </fieldset>
        </form>
    )
}

export default Form;
