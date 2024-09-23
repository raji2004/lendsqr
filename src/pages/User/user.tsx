import { Link, useParams } from "react-router-dom";
import "../Home/home.scss";
import './user.scss'
import { Button, Nav, SideNav, Tabs, TabsContent, TabsList, TabsTrigger, } from "../../Components";
import { ArrowLeft, } from 'lucide-react'
import Profile from '../../assets/profile.svg'
import StarRating from "../../Components/rating/rating";
import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { ApiResponse, UserData } from "../../types";
import { parsePhoneNumber } from "libphonenumber-js";
import { FadeLoader, GridLoader } from "react-spinners";



export const User = () => {
    const { userId } = useParams<{ userId: string }>(); // Ensure userId is typed
    const { isLoading, data } = useQuery<UserData, Error>('user', async (): Promise<UserData> => {
        const response: AxiosResponse<UserData> = await axios.get<UserData>(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`);
        return response.data; // Return only the data property
    });
    const personalInfoItems = [
        { label: 'FULL NAME', value: `${data?.profile.firstName} ${data?.profile.lastName}` },
        { label: 'PHONE NUMBER', value: data?.phoneNumber?.toLowerCase() },
        { label: 'EMAIL ADDRESS', value: data?.email?.toLowerCase() },
        { label: 'BVN', value: data?.profile.bvn?.toLowerCase() },
        { label: 'MARITAL STATUS', value: 'single' },
        { label: 'CHILDREN', value: 'none' },
        { label: 'TYPE OF RESIDENCE', value: "parent’s apartment" },
    ];

    const educationAndEmploymentItems = [
        { label: 'LEVEL OF EDUCATION', value: "b.sc" },
        { label: 'EMPLOYMENT STATUS', value: 'employed' },
        { label: 'SECTOR OF EMPLOYMENT', value: "fintech" },
        { label: 'DURATION OF EMPLOYMENT', value: "2 years" },
        { label: 'OFFICE EMAIL', value: "grace@lendsqr.com" },
        { label: 'MONTHLY INCOME', value: "₦200,000.00 - ₦400,000.00" },
        { label: 'LOAN REPAYMENT', value: "40,000" },
    ];

    const socialsItem = [
        { label: 'TWITTER', value: data?.socials.twitter?.toLowerCase() },
        { label: 'FACEBOOK', value: data?.socials.facebook?.toLowerCase() },
        { label: 'INSTAGRAM', value: data?.socials.instagram?.toLowerCase() },
    ];

    const GuarantorItems = [
        { label: 'FULL NAME', value: `${data?.guarantor.firstName} ${data?.guarantor.lastName}` },
        { label: 'PHONE NUMBER', value: data?.guarantor.phoneNumber?.toLowerCase() },
        { label: 'EMAIL ADDRESS', value: data?.email?.toLowerCase() },
        { label: 'RELATIONSHIP', value: "sister" },
    ];
    return (
        <div className={'container'}>
            <Nav />
            <div className="main">
                <SideNav id={'side'} />

                <div className="content">
                    <Link to={'/Home'} className="link"> <ArrowLeft />Back to Users</Link>
                    <div className="user-header">
                        <h1>User Details </h1>
                        <div>
                            <Button variant="outline" className={'blacklist'}>Blacklist User</Button>
                            <Button variant="outline">Activate User</Button>
                        </div>
                    </div>
                    <div className="user-details-container" style={isLoading ? { display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', height: '100dvh' } : {}}>

                        {
                            isLoading ? <FadeLoader color="#213F7D" /> : (<Tabs defaultValue="general-details" className="tabs-container">
                                <div className="tab-head-container">

                                    <div className="user-header">
                                        <img src={Profile} />
                                        <div>
                                            <h2 className="user-name">{data?.userName}</h2>
                                            <p className="user-title">LSQFf587g90r</p>
                                        </div>
                                        <div className="line"></div>
                                        <div style={{ alignItems: 'center' }}>
                                            {/* <p className="loan-amount">Loan Amount: ₦1,500,000</p> */}
                                            <p>{"User’s Tier"}</p>
                                            <StarRating maxRating={3} rating={1} />

                                        </div>
                                        <div className="line"></div>
                                        <div>
                                            <h2>₦{data?.accountBalance}</h2>
                                            <p>{data?.accountNumber}/Providus Bank</p>
                                        </div>
                                    </div>
                                    <TabsList className="tabs-list">
                                        <TabsTrigger value="general-details">General Details</TabsTrigger>
                                        <TabsTrigger value="documents">Documents</TabsTrigger>
                                        <TabsTrigger value="bank-details">Bank Details</TabsTrigger>
                                        <TabsTrigger value="loans">Loans</TabsTrigger>
                                        <TabsTrigger value="savings">Savings</TabsTrigger>
                                        <TabsTrigger value="app-system">App and System</TabsTrigger>
                                    </TabsList>
                                </div>

                                <TabsContent value="general-details">
                                    <div className="tab-content">
                                        <Section title="Personal Information" items={personalInfoItems} />
                                        <Section title="Education and Employment" items={educationAndEmploymentItems} />
                                        <Section title="Socials" items={socialsItem} />
                                        <Section title="Guarantor" items={GuarantorItems} />
                                    </div>
                                </TabsContent>


                                <TabsContent value="documents">
                                    <div className="tab-content">f</div>
                                </TabsContent>


                                <TabsContent value="bank-details">
                                    <div className="tab-content"></div>
                                </TabsContent>


                                <TabsContent value="loans">
                                    <div className="tab-content"></div>
                                </TabsContent>


                                <TabsContent value="savings">
                                    <div className="tab-content"></div>
                                </TabsContent>


                                <TabsContent value="app-system">
                                    <div className="tab-content"></div>
                                </TabsContent>
                            </Tabs>)}
                    </div>
                </div>
            </div>
        </div>
    )
}


interface Item {
    label?: string;
    value?: string;
}

interface PersonalInformationProps {
    title?: string;
    items?: Item[];
}

const Section: React.FC<PersonalInformationProps> = ({ title, items }) => {
    return (
        <div className="section">
            <h4>{title}</h4>
            <div className="itemlist">
                {items?.map((item, index) => (
                    <div className="item" key={index}>
                        <h5>{item.label}</h5>
                        <p>{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

