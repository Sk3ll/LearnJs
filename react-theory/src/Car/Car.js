import React from 'react';

// function Car(){
//     return (
//         <h2>This is my car</h2>
//     );
// }

export default (props)=>(
    <div>
        <h3>Car name: {props.name}</h3>
        <p> Year: {props.year}</p>
        { props.children }
    </div>
)