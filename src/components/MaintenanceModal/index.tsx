import React from 'react'
import { Modal, Table, TableHead, TableRow, TableCell, TableBody,TableContainer } from '@material-ui/core'
import { data } from "./ModalData.json"
import { useState } from 'react'
import "./index.scss"
interface ModalProps {
    isOpen: boolean
}
const MaintenanceModal = (props:ModalProps) => {
    const [open,setOpen]=useState(props.isOpen)
    const handleClose=()=>{
        setOpen(false)
    }
    return (

        <Modal className="Modal" open={open} onClose={handleClose}>
            <div className="Modal-Body">
                <div className="Modal-Head"><p className="Modal-Head-Title">Cleanliness & Maintenance</p></div>
                <TableContainer>
                <Table className="table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell >Standard</TableCell>
                            <TableCell >Item (Report)</TableCell>
                            <TableCell >Points Deducted</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((row, index) => <TableRow key={index}>
                                <TableCell>{index+1}</TableCell>
                                <TableCell >{row.standard}</TableCell>
                                <TableCell >{row.standard}</TableCell>
                                <TableCell >{row.pointsDeducted} pt</TableCell>
                            </TableRow>)
                        }
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
        </Modal>

    )
}

export default MaintenanceModal