import React,{ useRef,useState } from "react";
import "./nav.scss"
import Logo from '../../assets/logo.svg';
import search from '../../assets/search.svg';
import notification from '../../assets/notifications.svg';
import avatar from '../../assets/avatar.svg';
import briefcase from '../../assets/briefcase.svg';
import home from '../../assets/home.svg';
import { Input } from "../Input/input";
import Navdata from "./navdata"
import { useClickAway } from "react-use";
import { Squash as Hamburger } from "hamburger-react";


export const Nav: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);
     useClickAway(ref, () => setOpen(false));
    return (
        <div ref={ref} className="navContainer">
            <div className="logoSearch">
                <img src={Logo} alt="" className="img" />
                <div className="mobile">

                <Hamburger toggled={isOpen} size={20} toggle={setOpen}  />
                {isOpen && (<SideNav/>)}
                </div>

                <div className="form-field">
                    <Input type="text" className="input2" placeholder="saerch for anything" />
                    <div className="icon">

                        <img src={search} alt="" />
                    </div>
                </div>
            </div>
            <div className="avatarGroup">
                <a href="">Docs</a>
                <img src={notification} alt="" />
                <div className="avatar">
                    <img src={avatar} alt="" />
                    <p>Adedeji</p>
                </div>
            </div>
        </div>
    )
}

interface SideNavProps {
    id?: string;
}

export const SideNav: React.FC<SideNavProps> = ({id}) => {
    return (
        <div className="sideNav" id={id}>
             <img className="imgs" src={Logo} alt="" />
            <NavItem src={briefcase} children={"switch Organizations"} />
            <NavItem src={home} children={"Dashboard"} />
            <h6> CUSTOMERS</h6>
            {Navdata.customers.map((item, index) => {
                return <NavItem key={index} src={item.icon} children={item.label} />
            })}
            <h6> BUSINESSES</h6>
            {Navdata.business.map((item, index) => {
                return <NavItem key={index} src={item.icon} children={item.label} />
            })}
            <h6> SETTINGS</h6>
            {Navdata.settings.map((item, index) => {
                return <NavItem key={index} src={item.icon} children={item.label} />
            })}
        </div>
    )

}



interface NavItemProps {
    src: string;
    children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ src, children }) => {
    return (
        <li className="navitem">
            <img src={src} alt="" style={{ marginBottom: -3 }} />
            {children}
        </li>
    );
};


