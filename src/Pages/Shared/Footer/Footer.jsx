/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <Link><img style={{ borderRadius: '0 0 200px 200px' }} className="w-[120px]" src='https://i.ibb.co/nkYF0hz/summer-camp-logo.png' alt="" /> </Link>
                    <p>Summer camp School Learning zone.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">

                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        <ul className="ml-20">
                            <li>Address</li>
                            <li>New York, queens 1204</li>
                            <li>Phone: +00138403164</li>
                            <li>Email: human@gmail.com</li>
                        </ul>

                    </div>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;