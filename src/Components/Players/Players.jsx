import { useEffect, useState } from "react";
import Player from "../Player/player";
import PropTypes from 'prop-types';
const Players = ({ handleSelectedPlayer, handleIsACtiveStatus, isActive }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('Player.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);

    return (
        <>
            <div className={`${isActive.selectedPlayers ? "" : "hidden"}`}>
                <div >
                    <div className="flex justify-between items-center mt-7">
                        <h1 className="font-bold text-xl">Available players</h1>
                        <div className="join">
                            <button onClick={() => handleIsACtiveStatus("selectedPlayers ")} className="text-black font-semibold bg-[#E7FE29] rounded-l-lg border-l-2 border-t-2 border-b-2 p-4 hover:bg-slate-200 transition-colors duration-200">
                                Available
                            </button>
                            <button onClick={() => handleIsACtiveStatus("Available")} className="text-black font-semibold border-r-2 border-t-2 border-b-2 rounded-r-lg p-4 hover:bg-slate-200 transition-colors duration-200">
                                Selected
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-y-10">
                    {players.map(player => (
                        <Player key={player.id} player={player} handleSelectedPlayer={handleSelectedPlayer} />
                    ))}
                </div>
            </div>
        </>
    );
};
Players.propTypes = {
    player: PropTypes.object.isRequired,
    handleSelectedPlayer: PropTypes.func,
    handleIsACtiveStatus: PropTypes.func,
    isActive: PropTypes.object,

};

export default Players;
