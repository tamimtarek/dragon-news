import logo from "../../../assets/logo.png";
import moment from 'moment';
import BreakingNews from "../../Home/BreakingNews";
const Header = () => {
    return (
        <div className="text-center">
            
            <img className="mx-auto" src={logo} alt="" />
            <p>Journalism Without Fear and Favour</p>
            <p className="text-xl">{moment().format("dddd, MMMM D YYYY")}</p>
            <BreakingNews></BreakingNews>
        </div>
    );
};

export default Header;