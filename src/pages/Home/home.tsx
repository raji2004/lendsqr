import "./home.scss";
import { Nav, SideNav, Card, Table, TableRow } from "../../Components";
import { useId, useState, useEffect } from "react";
import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import userpink from "../../assets/userpink.svg";
import activerusers from "../../assets/activeusers.svg";
import userloans from "../../assets/userloans.svg";
import usersavings from "../../assets/usersavings.svg";
import tableData from "../../Components/Table/tabledata";

import { cardDataType, ApiResponse, UserData } from '../../types'
import ReactPaginate from "react-paginate";
import { FadeLoader, } from "react-spinners";



const cardData: cardDataType[] = [
  {
    title: "Users",
    icon: userpink,
    content: "1000"
  },
  {
    title: "Active Users",
    icon: activerusers,
    content: "200"
  },
  {
    title: "Users with Loans",
    icon: userloans,
    content: "1000"
  },
  {
    title: "Users with Savings",
    icon: usersavings,
    content: "1000"
  }
]


const items: number[] = [];
const itemsPerPage: number = 10

for (let i = 0; i < 100; i++) { items.push(1) }

export const Home: React.FC = () => {
  const [sideBarIsShowing, setSideBarIsShowing] = useState<boolean>(false);
  const [currentItems, setCurrentItems] = useState<UserData[] | null | undefined>(null);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState(0);

  const { isLoading, data } = useQuery<ApiResponse>('users', async (): Promise<ApiResponse> => {
    const response = await axios.get<[]>('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
    return response; // Extract the UserData[] array from the ApiResponse
  });

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data?.data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data?.data]);



  const handlePageClick = (event: any) => {
    const newOffset = event.selected * itemsPerPage % items.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };


  return (
    <div className={'container'}>
      <Nav />
      <div className="main">
        <SideNav id={'side'} />
        <div className="content">
          <h1>Users</h1>
          <div className="cards">
            {cardData.map((card, index) => (
              <Card key={index} title={card.title} icon={card.icon} content={card.content} />
            ))}
          </div>
          <div className="mycontainer" style={isLoading?{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', height: '100dvh' } :{}}>
            {isLoading ? <FadeLoader color="#213F7D" /> : (<Table th={['Organization', 'Username', 'Email', 'Phone Number', 'Date Joined', 'Status']} itemsPerPage={10}>
              {currentItems?.map((data) => (
                <TableRow key={data.id} id={data.id} organization={data.orgName} username={data.userName} email={data.email} phoneNumber={data.phoneNumber} dateJoined={data.createdAt} />
              ))}
            </Table>)
            }

          </div>


          {!isLoading && (<ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={undefined}
          />)}
        </div>
      </div>
    </div>
  );
};
