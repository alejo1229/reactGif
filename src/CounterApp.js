import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import "./index.css";

const CounterApp = ({ value = 0  })=>{

    const [counter, setCounter] = useState(value);

    const Aumentar = ()=>{
        //setCounter(counter + 1);
        setCounter((c)=> c + 1);
    }

    const Reset =()=>{
        setCounter(value);
    }

    const Disminuir = ()=>{
        setCounter((c)=> c - 1);
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ Aumentar }>Incrementar +1</button>
            <button onClick={ Reset }>Reset</button>
            <button onClick={ Disminuir }>Disminuir -1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;