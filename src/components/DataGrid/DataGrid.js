import { Component } from "react"
import { Button } from "../index"
import { Modal } from "../index"
import style from "./DataGrid.module.css"
import { InputFile } from '../index'
class Datagrid extends Component {

    state = {
        showModel: false,
    }

    activeModalStyle = {
        opacity: 1,
        top: '100px',
        width: '550px',
        height: '550px'
    }

    generalModalStyle = {
        borderRadius: '12px',
        padding:'0 20px'
    }

    constructor(props) {
        super(props)
    }

    modalDisplayHandler = ({ target }) => {
        this.setState({ showModel: !this.state.showModel })
    }

    render() {
        const { data, title } = this.props
        const fields = Object.keys(data[0]).filter(field => field !== "id")
        return (
            <div id="datagrid">
                <Modal activeStyle={this.state.showModel ? this.activeModalStyle : {}} generalStyle={this.generalModalStyle}>
                 
                    <Button click={this.modalDisplayHandler} text="✖" cssClass={style.closeButton} />
                    <InputFile />
                </Modal>
                <div className={style.datagridContainer}>
                    <div className={style.datagridHeader}>
                        <h2>{title}</h2>
                        <div>
                            <Button text="Share" cssClass={style.shareButton} />
                            <Button text="Export" cssClass={style.exportButton} />
                            <Button text="This Week" cssClass={style.weekButton} cssStyle={{ marginLeft: "20px" }} />
                            <Button text="Add" cssClass={style.addButton} click={this.modalDisplayHandler} />
                        </div>
                    </div>
                    <table className={style.datagridTable}>
                        <thead>
                            <tr style={{ backgroundColor: "#eee" }}>
                                <th>#</th>
                                {fields.map((field, fieldIndex) => <th key={fieldIndex}>{field}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, dataIndex) => {
                                return (
                                    <tr key={dataIndex} style={{ backgroundColor: dataIndex % 2 === 0 ? "#fff" : "#eee" }} >
                                        <td>{item['id']}</td>
                                        {fields.map((field, fieldIndex) => <td key={fieldIndex}>{item[field]}</td>)}
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export { Datagrid }