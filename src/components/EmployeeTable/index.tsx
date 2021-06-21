import React, { useState } from 'react'
import "./index.scss"
import {data} from "./EmpTable.json"
import { Table,TableBody,TableCell,TableHead,TableRow } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import RowChart from "../row-chart/index"

const EmployeeTable=()=>{

  const [page, setPage] = React.useState(1);  
  const [pageItems,setPageItems]=useState(data.slice(0,8))
  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setPageItems(data.slice((value-1)*8,value*8))
  };
    
    return(
        <div className="emp-table">
            <p className="emp-title">Employees</p>
            <div id="chart"></div>
            <RowChart/>
          
            <Table className="table">
                <TableHead>
                    <TableRow>
                        <TableCell className="emp-table-title">Restaurant #</TableCell>
                        <TableCell className="emp-table-title">Employee Name</TableCell>
                        <TableCell className="emp-table-title">Certification Completed</TableCell>
                        <TableCell className="emp-table-title">Certification In Progress</TableCell>
                        <TableCell className="emp-table-title">Certification Not Started</TableCell>
                        <TableCell className="emp-table-title">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
            {pageItems.map((emp,index)=>(
                <TableRow>
                     <TableCell className="emp-cell">{emp.number}</TableCell>
                    <TableCell className="emp-cell">{emp.name}</TableCell>
                    <TableCell className="emp-cell">{emp.certsCompleted}</TableCell>
                    <TableCell className="emp-cell">{emp.certsProgress}</TableCell>
                    <TableCell className="emp-cell">{emp.certsNotStarted}</TableCell>
                    <TableCell className="emp-cell">{emp.certsCompleted+emp.certsProgress+emp.certsNotStarted}</TableCell>
                </TableRow>
            ))}
            </TableBody>
            </Table>
            <Pagination variant="text" count={Math.ceil(data.length/8)} page={page}  onChange={handlePage}/>
        </div>
    )
}

export default EmployeeTable
