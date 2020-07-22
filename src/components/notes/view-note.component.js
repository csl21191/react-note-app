import React from 'react';

const ViewNote = ({title, date, content}) => {
    return (
        <div>
            <h6><strong>Title</strong></h6>
            <p>{title}</p>
            <h6><strong>Date</strong></h6>
            <p>{date.toString()}</p>
            <h6><strong>Content</strong></h6>
            <p>{content}</p>
        </div>
    );
}

export default ViewNote;