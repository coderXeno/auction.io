import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('userName', userName);
        navigate('/products');

        return <div>.....</div>
    }

    return(
        <div>
            <form className="home__form" onSubmit={handleSubmit}>
                <label htmlFor="username">Enter your username</label>
                <input
                    type="text"
                    name="username"
                    className="home__input"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    minLength={6}
                />
                <button className="home__cta">SIGN IN</button>
            </form>
        </div>
    )
}