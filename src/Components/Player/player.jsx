import PropTypes from 'prop-types';

const Player = ({ player, handleSelectedPlayer }) => {
    const { name, flag, country, ratings, leftHandBat, price, role, img } = player;

    return (
        <div className="flex justify-center mt-7">
            <div className="card bg-base-100 w-96 border-2">
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        alt="Player img"
                        className="rounded-xl h-60 object-cover"
                    />
                </figure>
                <div>
                    <div className="p-4">
                        <h2 className="text-2xl font-semibold">{name}</h2>
                        <div className="flex justify-between items-center j mt-2">
                            <div className="flex items-center gap-x-2">
                                <img
                                    src={flag}
                                    alt={`${country} flag`}
                                    className="w-6 h-4 rounded-sm"
                                />
                                <p className="text-center text-lg font-medium text-gray-700">{country}</p>
                            </div>
                            <button className="btn">{role}</button>
                        </div>
                        <hr />
                        <div className="mt-3">
                            <div className="flex items-center justify-between">
                                <p className="text-lg text-gray-800 font-semi-bold">Ratings: </p>
                                <p>{ratings}/10</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-lg text-gray-800 font-semi-bold">Batting Style: </p>
                                <p>{leftHandBat}</p>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                                <p className="text-lg text-gray-800 font-semi-bold">Price:${price}</p>
                                <button onClick={() => handleSelectedPlayer(player)} className="btn">
                                    Choose Player
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleSelectedPlayer: PropTypes.func,
};

export default Player;
