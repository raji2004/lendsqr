import users from '../../assets/user.svg';
import guarantors from '../../assets/Guarrantors.svg';
import loans from '../../assets/loan.svg';
import handshake from '../../assets/handshake.svg';
import piggy from '../../assets/piggy.svg';
import loanreq from '../../assets/loanreq.svg';
import whitelist from '../../assets/whilelist.svg';
import karma from '../../assets/karma.svg';
//buissiness
import briefcase from '../../assets/briefcase.svg';
import savings from '../../assets/savings.svg';
import fee from '../../assets/fees.svg';
import transaction from '../../assets/transactions.svg';
import service from '../../assets/services.svg';
import serviceacc from '../../assets/serviceacc.svg';
import settlements from '../../assets/settlements.svg';
import reports from '../../assets/reports.svg';
//settings
import preferences from '../../assets/preferences.svg';
import pricing from '../../assets/pricing.svg';
import auditlog from '../../assets/auditlog.svg';
interface NavData {
    settings: NavItem[];
    business: NavItem[];
    customers: NavItem[];
}

interface NavItem {
    label: string;
    icon: string;
    
}
const navData: NavData = {
    settings: [
        { label: "Preferences", icon: preferences },
        { label: "Fees and Pricing", icon: pricing },
        { label: "Audit Logs", icon: auditlog }
    ],
    business: [
        { label: "Organizations", icon: briefcase },
        { label: "Loan Products", icon: loanreq },
        { label: "Savings Products", icon: savings },
        { label: "Fees and Charges", icon: fee },
        { label: "Transactions", icon: transaction },
        { label: "Services", icon: service },
        { label: "Service Account", icon: serviceacc },
        { label: "Settlements", icon: settlements },
        { label: "Reports", icon: reports },
    ],
    customers: [
        { label: "Users", icon: users },
        { label: "Guarantors", icon: guarantors },
        { label: "Loans", icon: loans },
        { label: "Decision Models", icon: handshake },
        { label: "Savings", icon: piggy },
        { label: "Loan Requests", icon: loanreq },
        { label: "Whitelist", icon: whitelist },
        { label: "Karma", icon: karma }
    ]
};


export default navData;