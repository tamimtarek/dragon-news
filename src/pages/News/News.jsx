import Header from "../Shered/Header/Header";
import Navbar from "../Shered/Navbar/Navbar";
import RightSideNav from "../Shered/RightSideNav/RightSideNav";


const News = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h3>News Details</h3>
                </div>
                <div className="col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;