const Footer = () => {
    return (
        <div className="bg-[#06091A] ">
            <div className="p-40"></div>
            <div className="flex justify-center">
                <img src="/assets/logo-footer.png" alt="" />
            </div>
            <footer className="flex justify-evenly footer p-20">
                <nav>
                    <h6 className="footer-title ml-3 text-white">About Us</h6>
                    <p className="font-medium  text-[#767880]   m-3 ">We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                </nav>
                <nav>
                    <h6 className="footer-title text-white">Quick Links</h6>
                    <a className="link link-hover font-medium  text-[#767880] ">Home</a>
                    <a className="link link-hover font-medium  text-[#767880]">Services</a>
                    <a className="link link-hover font-medium  text-[#767880]">About</a>
                    <a className="link link-hover font-medium  text-[#767880]">Contact</a>
                </nav>

                <form>
                    <h6 className="font-bold text-3xl  text-white">Subscribe</h6>
                    <p className="font-medium  text-[#767880]  mt-3 ">Get the latest updates and news right in your inbox!</p>
                    <fieldset className="form-control w-80">

                        <div className="join mt-3">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="input input-bordered join-item" />
                            <button className="btn bg-[#E3AB5F] text-black join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>

            </footer>
            <hr className="text-[#767880] opacity-30 p-2" />
            <p className="font-medium  text-[#767880] text-center  p-2 pb-3 ">@2024 Your Company All Rights Reserved.</p>
        </div>
    );
};

export default Footer;