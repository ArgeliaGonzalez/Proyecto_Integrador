import React from "react";

function SeccionEvento({ imageSrc, altText, details, buttonText, buttonClassName }) {
    return (
        <div className="section">
            <div className="imagen">
                <img src={imageSrc} alt={altText} />
            </div>
            <p><strong>{details}</strong></p>
            <Button className={buttonClassName}>{buttonText}</Button>
        </div>
    );
}
 export default SeccionEvento; 