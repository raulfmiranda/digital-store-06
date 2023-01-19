import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

import TrendingProducts from "../../components/TrendingProducts";

export default function Home() {
    return (
        <div>
            <Header/>
            <Menu active="home"/>

            <Banner/>

            <TrendingProducts/>
        </div>
    );
}
