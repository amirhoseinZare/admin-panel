import { Component } from "react"
import styles from "./Modal.module.css"

class Modal extends Component {

    render() {
        const { activeStyle, generalStyle, children } = this.props
        return (
            <div className={styles.modal} style={{ ...generalStyle, ...activeStyle }} >
                {children}
            </div>
        )
    }

}

export {Modal}