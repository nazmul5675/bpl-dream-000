import PropTypes from 'prop-types';

const Banner = ({ handleFreeCredit, notify }) => {
    return (
        <div className="bg-black rounded-3xl mt-7">
            <div className="bg-[url('/assets/bg-shadow.png')] bg-no-repeat bg-cover py-20 rounded-3xl">

                <div className="flex flex-col justify-center text-center gap-y-10">
                    <img className="mx-auto" src="/assets/banner-main.png" alt="" />
                    <h2 className="text-white font-bold text-4xl ">Assemble Your Ultimate Dream 11 Cricket Team</h2>
                    <p className="font-medium text-2xl text-[#B8B8B8]">Beyond Boundaries Beyond Limits</p>
                    <button onClick={() => {
                        handleFreeCredit();

                    }} className="btn mx-auto text-black font-semibold bg-[#E7FE29] rounded-lg border-4 border-[#e5ff00] hover:bg-[#e6fa2e]">Claim Free Credit </button>
                </div>
            </div>
        </div>
    );
};
Banner.propTypes = {
    handleFreeCredit: PropTypes.func,
    notify: PropTypes.func

};

export default Banner;