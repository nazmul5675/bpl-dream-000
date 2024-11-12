

const Subscribe = () => {
    return (
        < div className="mt-7 " >
            <div className="bg-slate-200 border-[16px] border-white shadow-2xl rounded-3xl">
                <div className="bg-[url('/assets/bg-shadow.png')] bg-no-repeat bg-cover  py-20 rounded-xl" >
                    <div className="text-center ">
                        <form>
                            <h6 className="font-bold text-3xl m-3">Subscribe to our Newsletter</h6>
                            <p className="font-medium  text-[#5A5A5A] m-3">Get the latest updates and news right in your inbox!</p>
                            <fieldset className=" ">

                                <div className="m-3">
                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                        className="input join-item" />
                                    <button className="btn bg-[#E3AB5F] text-black mx-3">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Subscribe;