import { Component } from 'react'
import style from "./MenuItems.module.css"
import { getData } from "../../model/AjaxRequests"



class MenuItems extends Component {

    handleClick = async (dataName) => {
        const data = await getData(dataName)
        this.props.setItemsStart(0, 1)
        this.props.dataSetter(data, dataName)
    }

    // put handleClick in should update to back and forward work on hash change
    shouldComponentUpdate() {
        onhashchange = async () => {
            const hash = window.location.hash.slice(1)
            await this.handleClick(hash)
        }
        return true
    }

    render() {
        return (
            <div className={style.sideNav} id="menuitems">
                <div className={style.sideDiv}>
                    <span className={style.sideSpan}>
                        <img className={style.sideImg} src="https://aux.iconspalace.com/uploads/dashboard-icon-256-1241939503.png" alt=''/></span>
                    <a className={style.sideLink} href="#customers" >Dashboard</a>
                </div>
                <div className={style.sideDiv}>
                    <span className={style.sideSpan}>
                        <img className={style.sideImg} src="https://img.icons8.com/pastel-glyph/2x/purchase-order.png" alt=''/></span>
                    <a className={style.sideLink} href="#orders" >Orders</a>
                </div>
                <div className={style.sideDiv}>
                    <span className={style.sideSpan}>
                        <img className={style.sideImg} src="https://cdn.iconscout.com/icon/free/png-256/customers-11-866159.png" alt=''/></span>
                    <a className={style.sideLink} href="#products" >Products</a>
                </div>
                <div className={style.sideDiv}>
                    <span className={style.sideSpan}>
                        <img className={style.sideImg} src="https://cdn2.iconfinder.com/data/icons/e-commerce-line-4-1/1024/open_box4-512.png" alt=''/></span>
                    <a className={style.sideLink} href="#customers" >Customers</a>
                </div>
            </div>
        )
    }
}

export { MenuItems }

