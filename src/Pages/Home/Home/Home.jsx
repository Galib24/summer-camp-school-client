import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FirstBlogSection from "../FirstBlogSection/FirstBlogSection";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import PopularMenu from "../Popularmenu/PopularMenu";
import Reviews from "../Reviews/Reviews";




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Summer Camp || Home</title>
            </Helmet>
            
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <PopularInstructor></PopularInstructor>
           <FirstBlogSection></FirstBlogSection>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;