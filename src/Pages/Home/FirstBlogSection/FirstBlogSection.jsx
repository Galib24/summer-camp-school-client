import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import blog1Img from '../../../assets/blog1.jpg'
import './FirstBlogSection.css'
const FirstBlogSection = () => {
    return (
        <div className="First-blog-item w-full bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading='For make summer best'
                heading='We are Here'
            ></SectionTitle>
          <div className="md:flex justify-center items-center bg-purple-200 bg-opacity-50 py-20 px-36 pb-20 pt-12">
        
                
              <div>
              <img className="w-3/4" src={blog1Img} alt="" />
              </div>
                
            
            <div className="text-black">
               <strong> <p>June 18, 2023</p></strong>
               <strong className="font-bold"> <p>We want every one should proper use and fun summer time!</p></strong>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, nobis voluptate cumque dolorum provident numquam modi maxime asperiores in suscipit dolorem quisquam nulla laborum architecto! Quasi soluta vitae nulla nostrum asperiores dicta quod? Eligendi vel adipisci sit corrupti consectetur in soluta, eaque quisquam, vero corporis aperiam aliquid repellat est quas.</p>
           <button className="btn btn-outline border-0 border-b-4 mt-4 btn-primary text-black">Show More</button>
            </div>
          </div>
        </div>
    );
};

export default FirstBlogSection;