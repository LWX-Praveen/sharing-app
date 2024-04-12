import React from 'react';

function ImageShareComponent({  pageURL }) {

    const shareOnFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageURL)}`, '_blank');
    }

    const shareOnTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageURL)}`, '_blank');
    }

    const shareOnLinkedIn = () => {
        window.open(`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageURL)}`, '_blank')
    }

    return (
        <div>
           
            <button onClick={shareOnFacebook}>Share on Facebook</button> &nbsp;
            <button onClick={shareOnTwitter}>Share on Twitter</button>
            <button onClick={shareOnLinkedIn}>Share on Linkedin</button>
        </div>
    );
}

export default ImageShareComponent;
