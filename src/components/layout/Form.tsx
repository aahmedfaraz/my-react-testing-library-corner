import React, { useState } from 'react'

const Form = () => {

    // State
    const [validation, setValidation] = useState<any>({
        username: null,
        email: null,
        phone: null,
        password: null,
        occupation: null,
        hobbies: null,
    })

    // RegExps
    const usernameRegExp = new RegExp(/^[\w]{5,12}$/);
    const emailRegExp    = new RegExp(/^([\w.]+@[a-z]+.com)$/);
    const phoneRegExp    = new RegExp(/^03([\d]){9}$/);
    const passwordRegExp = new RegExp(/^([\w@_-]{8,20})$/);

    return (
        <form>

            {/* TEST 1 */}
            <fieldset>
                <legend><label htmlFor="username">🧪 Test 1</label></legend>
                <input data-testid="username" type="text"  id="username" name="username" placeholder="username" 
                    onChange={e => {
                        if(e.target.value === ""){
                            setValidation({
                                ...validation,
                                [e.target.name]: null
                            })
                            return;
                        }
                        setValidation({
                            ...validation,
                            [e.target.name]: (e.target.value.match(usernameRegExp) ? true : false)
                        })
                    }}
                />
                <small><strong>Check:</strong> username must be alphanumeric and contain 5 - 12 characters.</small>
                <small data-testid="username-badge" 
                    className={`${
                        validation.username === null ? 'nostatus' : validation.username ? 'success' : 'error'
                    } badge`}
                >
                    {
                        validation.username === null ? 'No Status' : validation.username ? 'Correct' : 'Incorrect'
                    }
                </small>
            </fieldset>

            {/* TEST 2 */}
            <fieldset>
                <legend><label htmlFor="email">🧪 Test 2</label></legend>
                <input data-testid="email" type="text"  id="email" name="email" placeholder="email"
                    onChange={e => {
                        if(e.target.value === ""){
                            setValidation({
                                ...validation,
                                [e.target.name]: null
                            })
                            return;
                        }
                        setValidation({
                            ...validation,
                            [e.target.name]: (e.target.value.match(emailRegExp) ? true : false)
                        })
                    }}
                />
                <small><strong>Check:</strong> email must be a valid address, e.g. ahmedfaraz.contact@gmail.com.</small>
                <small data-testid="email-badge" 
                    className={`${
                        validation.email === null ? 'nostatus' : validation.email ? 'success' : 'error'
                    } badge`}
                >
                    {
                        validation.email === null ? 'No Status' : validation.email ? 'Correct' : 'Incorrect'
                    }
                </small>
            </fieldset>

            {/* TEST 3 */}
            <fieldset>
                <legend><label htmlFor="phone">🧪 Test 3</label></legend>
                <input data-testid="phone" type="text"  id="phone" name="phone" placeholder="phone" 
                    onChange={e => {
                        if(e.target.value === ""){
                            setValidation({
                                ...validation,
                                [e.target.name]: null
                            })
                            return;
                        }
                        setValidation({
                            ...validation,
                            [e.target.name]: (e.target.value.match(phoneRegExp) ? true : false)
                        })
                    }}
                />
                <small><strong>Check:</strong> phone must be a valid PK telephone number (11 digits - 03xxxxxx).</small>
                <small data-testid="phone-badge" 
                    className={`${
                        validation.phone === null ? 'nostatus' : validation.phone ? 'success' : 'error'
                    } badge`}
                >
                    {
                        validation.phone === null ? 'No Status' : validation.phone ? 'Correct' : 'Incorrect'
                    }
                </small>
            </fieldset>

            {/* TEST 4 */}
            <fieldset>
                <legend><label htmlFor="password">🧪 Test 4</label></legend>
                <input data-testid="password" type="text"  id="password" name="password" placeholder="password" 
                    onChange={e => {
                        if(e.target.value === ""){
                            setValidation({
                                ...validation,
                                [e.target.name]: null
                            })
                            return;
                        }
                        setValidation({
                            ...validation,
                            [e.target.name]: (e.target.value.match(passwordRegExp) ? true : false)
                        })
                    }}
                />
                <small><strong>Check:</strong> password must be alphanumeric ( `@` , `_` and `-` are allowed) and be 8 - 20 characters.</small>
                <small data-testid="password-badge" 
                    className={`${
                        validation.password === null ? 'nostatus' : validation.password ? 'success' : 'error'
                    } badge`}
                >
                    {
                        validation.password === null ? 'No Status' : validation.password ? 'Correct' : 'Incorrect'
                    }
                </small>
            </fieldset>

            {/* TEST 5 */}
            <fieldset>
                <legend><label htmlFor="occupation">🧪 Test 5</label></legend>
                <span><input data-testid="occupation" type="radio" name="occupation" value="engineer" placeholder="occupation" 
                    onChange={e => {
                        if(e.target.checked) setValidation({...validation, [e.target.name]: true})
                    }}
                /> Engineer</span>
                <span><input data-testid="occupation" type="radio" name="occupation" value="doctor" placeholder="occupation" 
                    onChange={e => {
                        if(e.target.checked) setValidation({...validation, [e.target.name]: true})
                    }}
                /> Doctor</span>
                <span><input data-testid="occupation" type="radio" name="occupation" value="anonymous" placeholder="occupation" 
                    onChange={e => {
                        if(e.target.checked) setValidation({...validation, [e.target.name]: false})
                    }}
                /> Anonymous: For Error message</span>
                <small><strong>Check:</strong> occupation must be selected.</small>
                <small data-testid="occupation-badge" 
                    className={`${
                        validation.occupation === null ? 'nostatus' : validation.occupation ? 'success' : 'error'
                    } badge`}
                >
                    {
                        validation.occupation === null ? 'No Status' : validation.occupation ? 'Correct' : 'Incorrect'
                    }
                </small>
            </fieldset>

            {/* TEST 6 */}
            <fieldset>
                <legend><label htmlFor="hobbies">🧪 Test 6</label></legend>
                <span><input data-testid="hobbies" type="checkbox" name="hobbies" value="read-books" placeholder="hobbies" 
                    onChange={e => {
                        const anonymous : any = document.querySelectorAll("input[type='checkbox']")[3];
                        if(e.target.checked) {
                            if(!anonymous.checked) {
                                setValidation({...validation, [e.target.name]: true})
                            }
                        }
                        // If all checkboxes are unchecked
                        if(!Array.from(document.querySelectorAll("input[type='checkbox']")).map((checkbox:any) => checkbox.checked).includes(true)){
                            setValidation({...validation, [e.target.name]: null})
                        }
                    }}
                /> Read Books</span>
                <span><input data-testid="hobbies" type="checkbox" name="hobbies" value="watch-movies" placeholder="hobbies" 
                    onChange={e => {
                        const anonymous : any = document.querySelectorAll("input[type='checkbox']")[3];
                        if(e.target.checked) {
                            if(!anonymous.checked) {
                                setValidation({...validation, [e.target.name]: true})
                            }
                        }
                        // If all checkboxes are unchecked
                        if(!Array.from(document.querySelectorAll("input[type='checkbox']")).map((checkbox:any) => checkbox.checked).includes(true)){
                            setValidation({...validation, [e.target.name]: null})
                        }
                    }}
                /> Watch Movies</span>
                <span><input data-testid="hobbies" type="checkbox" name="hobbies"  value="outing" placeholder="hobbies" 
                    onChange={e => {
                        const anonymous : any = document.querySelectorAll("input[type='checkbox']")[3];
                        if(e.target.checked) {
                            if(!anonymous.checked) {
                                setValidation({...validation, [e.target.name]: true})
                            }
                        }
                        // If all checkboxes are unchecked
                        if(!Array.from(document.querySelectorAll("input[type='checkbox']")).map((checkbox:any) => checkbox.checked).includes(true)){
                            setValidation({...validation, [e.target.name]: null})
                        }
                    }}
                /> Outing</span>
                <span><input data-testid="hobbies" type="checkbox" name="hobbies" value="anonymous" placeholder="hobbies" 
                onChange={e => {
                    if(e.target.checked){
                        setValidation({...validation, [e.target.name]: false})
                    } else {
                        setValidation({...validation, [e.target.name]: true})
                    }
                    // If all checkboxes are unchecked
                    if(!Array.from(document.querySelectorAll("input[type='checkbox']")).map((checkbox:any) => checkbox.checked).includes(true)){
                        setValidation({...validation, [e.target.name]: null})
                    }
                }}
                /> Anonymous: For Error message</span>
                <small><strong>Check:</strong> hobbies can be more than one.</small>
                <small data-testid="hobbies-badge" 
                    className={`${
                        validation.hobbies === null ? 'nostatus' : validation.hobbies ? 'success' : 'error'
                    } badge`}
                >
                    {
                        validation.hobbies === null ? 'No Status' : validation.hobbies ? 'Correct' : 'Incorrect'
                    }
                </small>
            </fieldset>

            {/* TEST 7 */}
            <fieldset>
                <legend><label>🧪 Test 7</label></legend>
                <span>
                    <button data-testid="click-event-greeting" onClick={e => {
                        e.preventDefault();
                        const text : any = document.getElementById('click-event-text');
                        text.innerHTML = '👋 Hi there Champ.';
                    }} className="click-event-button">Greetings</button>
                    <button data-testid="click-event-morning" onClick={e => {
                        e.preventDefault();
                        const text : any = document.getElementById('click-event-text');
                        text.innerHTML = '🌄 Good Morning Champ.';
                    }} className="click-event-button">It's Morning</button>
                    <button data-testid="click-event-afternoon" onClick={e => {
                        e.preventDefault();
                        const text : any = document.getElementById('click-event-text');
                        text.innerHTML = '☀️ Good Afternoon Champ.'
                    }} className="click-event-button">It's Afternoon</button>
                </span>
                <small><strong>Check:</strong> Click button and text on it should display.</small>
                <h2 data-testid="click-event-text" id="click-event-text">Click any button.</h2>
            </fieldset>

            {/* TEST 8 */}
            <fieldset>
                <legend><label>🧪 Test 8</label></legend>
                <button data-testid="timer-button" onClick={e => {
                    e.preventDefault();
                    const text : any = document.getElementById('timer-text');
                    setTimeout(() => {
                        text.innerHTML = '👋 Hi there Champ.';
                    }, 5000);
                }} className="click-event-button">Greetings (after 5s)</button>
                <small><strong>Check:</strong> Click button and text should display after 5 seconds.</small>
                <h2 data-testid="timer-text" id="timer-text"></h2>
            </fieldset>
        </form>
    )
}

export default Form;
