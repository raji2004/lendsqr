import React, { useState, ReactNode,useEffect } from 'react';
import filter from '../../assets/filter.svg';
import {format} from 'date-fns';
import more from '../../assets/more.svg';
import  parsePhoneNumber  from 'libphonenumber-js';
import './table.scss';

interface TableRowProps {
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    
}
function getRandomStatus(): string {
    const statuses = ["active", "inactive", "blacklisted", "pending"];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
  }
  
export const TableRow: React.FC<TableRowProps> = ({ organization, username, email, phoneNumber, dateJoined }) => {
    const status = getRandomStatus()
    const bgcolor = status === 'pending' ? 'rgba(233, 178, 0, 0.3)' : status === 'inactive' ? 'rgba(84, 95, 125, 0.3)' : status === 'active' ? 'rgba(57, 205, 98, 0.3)' : 'rgba(228, 3, 59, 0.3)';
   const text =  status === 'pending' ? '#E9B200' : status === 'inactive' ? '#545F7D' : status === 'active' ? '#39CD62' : '#E4033B';

    return (
        <tr>
            <td>{organization}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{parsePhoneNumber(phoneNumber, 'NG')?.formatNational().split('ext')[0]}</td>
            <td>{format(new Date(dateJoined), "E d, yyyy hh:mm aaaaa'm'")}</td>
            <td className='parent'>
                <div className='status' style={{ backgroundColor: bgcolor, color: text, }}>{status}</div>
            </td>
            <td><img src={more} alt="" /></td>
        </tr>
    );
};

interface TableProps {
    children: ReactNode;
    th: string[];
    itemsPerPage: number;
}

export const Table: React.FC<TableProps> = ({ children, th,itemsPerPage }) => {
    const tableHeads = th.map((head) => {
        return <th key={head}>
            <div className='table-data-head-container'>
                <span className='table-data-head'>{head}</span>
                <span className='table-data-img-container'><img src={filter} alt="drop" /></span>
            </div>
        </th>;
    });

  
    return (
        <div className='table-container'>
            <table className='table'>
                <thead>
                    <tr>{tableHeads}</tr>
                </thead>
                <tbody>

                    {children}
                </tbody>
            </table>
        </div>
    );
};
