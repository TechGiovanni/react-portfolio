import { Fragment } from "react"
import ReactDOM from 'react-dom'
import Card from "./Card"
import { useModalContext } from "../context/modal-context"
import './modal.css'



const Modal = ({className, children}) => {
    const {showModal, closeModalHandler} = useModalContext();

  return (
    <Fragment>
        {
            showModal && ReactDOM.createPortal(<>
                <section id="backdrop" onClick={closeModalHandler}></section>
                <Card className={className}>{children}</Card>
                </>, document.querySelector('#overlays'))
        }
    </Fragment>
  )
}

export default Modal