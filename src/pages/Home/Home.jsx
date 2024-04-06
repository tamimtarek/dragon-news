import Header from "../Shered/Header/Header";
import LeftSideNav from "../Shered/LeftSideNav/LeftSideNav";
import Navbar from "../Shered/Navbar/Navbar";
import RightSideNav from "../Shered/RightSideNav/RightSideNav";
import {useLoaderData} from 'react-router-dom';
import NewsCard from "./NewsCard";
import BreakingNews from "./BreakingNews";


const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-2">
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;