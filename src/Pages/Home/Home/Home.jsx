import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import PopularMenu from "../Popularmenu/PopularMenu";




const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;