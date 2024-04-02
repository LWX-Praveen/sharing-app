import React from 'react';

function ImageShareComponent({  pageURL }) {

    const shareOnFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageURL)}`, '_blank');
    }

    const shareOnTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageURL)}`, '_blank');
    }

    return (
        <div>
           
            <button onClick={shareOnFacebook}>Share on Facebook</button> &nbsp;
            <button onClick={shareOnTwitter}>Share on Twitter</button>
        </div>
    );
}

export default ImageShareComponent;
