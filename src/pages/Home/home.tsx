import "./home.scss";
import { Nav, SideNav, Card,Table,TableRow } from "../../Components";
import { useId, useState } from "react";
import userpink from "../../assets/userpink.svg";
import activerusers from "../../assets/activeusers.svg";
import userloans from "../../assets/userloans.svg";
import usersavings from "../../assets/usersavings.svg";
import tableData from "../../Components/Table/tabledata";


interface cardDataType {
  title: string;
  icon: string;
  content: string;
}
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
export const Home: React.FC = () => {


  return (
    <div className={'container'}>
      <Nav />
      <div className="main">
        <SideNav />
        <div className="content">
          <h1>Users</h1>
          <div className="cards">
            {cardData.map((card, index) => (
              <Card key={index} title={card.title} icon={card.icon} content={card.content} />
            ))}
          </div>
          <Table th={['Organization', 'Username', 'Email', 'Phone Number', 'Date Joined', 'Status']}>
            {tableData.map((data, index) => (
              <TableRow key={index} organization={data.organization} username={data.username} email={data.email} phoneNumber={data.phoneNumber} dateJoined={data.dateJoined} status={data.status} />
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};
