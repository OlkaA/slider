import React from 'react';

function Slide(props) {
    console.log(props)
        return (
            <li props={props}>
                {props.slide}
            </li>
        );
}

export default Slide;