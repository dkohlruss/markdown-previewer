import React from 'react';

const MarkDown = (props) => {
    return (
        <div className="output">
            <div dangerouslySetInnerHTML={{__html: props.content}} />
        </div>
            );
}

export default MarkDown;
