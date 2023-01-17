import {createContext, useContext, useState} from 'react'

const ModalContext = createContext();

export const ModalProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
        setShowModal(true);
    }
    const closeModalHandler = () => {
        setShowModal(false);
    }

    return <ModalContext.Provider value={{showModal, showModalHandler, closeModalHandler}}>{children}</ModalContext.Provider>
}


// custom hook to consume the modal context anywehre in our app
export const useModalContext = () => {
    return useContext(ModalContext);
}