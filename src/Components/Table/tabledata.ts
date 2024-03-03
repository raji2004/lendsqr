interface TableRowProps {
    organization: string;
    username: string;
    email: string;
    phoneNumber: number;
    dateJoined: Date;
    status: string;
}

const tableData: TableRowProps[] = [
    {
        organization: 'lendsqr',
        username: 'JohnDoe',
        email: 'john.doe@example.com',
        phoneNumber: 1234567890,
        dateJoined: new Date('May 15, 2020 10:00 AM'),
        status: 'active',
    },
    {
        organization: 'lendsqr',
        username: 'JaneSmith',
        email: 'jane.smith@example.com',
        phoneNumber: 9876543210,
        dateJoined: new Date('June 20, 2021 03:30 PM'),
        status: 'inactive',
    },
    {
        organization: 'lendsqr',
        username: 'AliceJohnson',
        email: 'alice.johnson@example.com',
        phoneNumber: 5555555555,
        dateJoined: new Date('July 25, 2019 08:45 AM'),
        status: 'pending',
    },
    {
        organization: 'lendsqr',
        username: 'BobMiller',
        email: 'bob.miller@example.com',
        phoneNumber: 9998887777,
        dateJoined: new Date('August 10, 2022 01:15 PM'),
        status: 'active',
    },
    {
        organization: 'lendsqr',
        username: 'EvaBrown',
        email: 'eva.brown@example.com',
        phoneNumber: 1112223333,
        dateJoined: new Date('September 5, 2020 09:20 AM'),
        status: 'inactive',
    },
    {
        organization: 'irorun',
        username: 'FrankWhite',
        email: 'frank.white@example.com',
        phoneNumber: 7778889999,
        dateJoined: new Date('October 12, 2021 11:45 AM'),
        status: 'pending',
    },
    {
        organization: 'irorun',
        username: 'GraceJones',
        email: 'grace.jones@example.com',
        phoneNumber: 4445556666,
        dateJoined: new Date('November 8, 2018 02:30 PM'),
        status: 'active',
    },
    {
        organization: 'irorun',
        username: 'HarryGreen',
        email: 'harry.green@example.com',
        phoneNumber: 6667778888,
        dateJoined: new Date('December 3, 2019 05:15 PM'),
        status: 'inactive',
    },
    {
        organization: 'irorun',
        username: 'IvyBlack',
        email: 'ivy.black@example.com',
        phoneNumber: 2223334444,
        dateJoined: new Date('January 18, 2022 07:30 AM'),
        status: 'blacklisted',
    },
    {
        organization: 'irorun',
        username: 'JackRed',
        email: 'jack.red@example.com',
        phoneNumber: 8889990000,
        dateJoined: new Date('February 22, 2020 12:00 PM'),
        status: 'active',
    },
];

export default tableData;
