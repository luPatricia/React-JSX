import React, { useEffect, useRef } from "react";

import './dialog.css';

export function IconClose() { 
return ( 
<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> 
<path d="M9.65625 1.28125L5.9375 5L9.65625 8.71875L8.71875 9.65625L5 5.9375L1.28125 9.65625L0.34375 8.71875L4.0625 5L0.34375 1.28125L1.28125 0.34375L5 4.0625L8.71875 0.34375L9.65625 1.28125Z" fill="#EAEAEA" />Add commentMore actions 
</svg> 
) 
}

export function Dialog({ isOpen, onClose, children }) {



    //Não devemos fazer buscas no DOM desse jeito!
    //const dialog = document.querySelector("dialog");
    
    const dialogRef = useRef(null)

     useEffect(()=> {
       console.log('Deveríamos mostrar o modal?', isOpen)

       if(isOpen) {
          openDialog()
       } else {
        closeDialog()
       }
     }, [isOpen])


    // "Show the dialog" button opens the dialog modally
     const openDialog = () => {
        dialogRef.current.showModal();
    };

    // "Close" button closes the dialog
     const closeDialog = () => {
        dialogRef.current.close();
    };

    return (
        <React.Fragment>
            <dialog ref={dialogRef} className="dialog">
                <div className="btn-close-wrapper">
                     <button autoFocus onClick={onClose} className="btn-close">
                       <IconClose/>
                     </button>
                </div>
                 
                <div className="body">
                       {children}
                </div>

               
            </dialog>
        </React.Fragment>
    )
}