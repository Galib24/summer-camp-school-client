import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FirstBlogSection from "../FirstBlogSection/FirstBlogSection";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import PopularMenu from "../Popularmenu/PopularMenu";




const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <PopularInstructor></PopularInstructor>
           <FirstBlogSection></FirstBlogSection>
        </div>
    );
};

export default Home;