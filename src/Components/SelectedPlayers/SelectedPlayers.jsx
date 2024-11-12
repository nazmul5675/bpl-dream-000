import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";
import PropTypes from 'prop-types';

const SelectedPlayers = ({ selectedPlayer, handleIsACtiveStatus, isActive, handleDeletePlayer }) => {

    return (
        <div className={`${isActive.selectedPlayers ? "hidden" : ""}`} >
            <div className="flex justify-between items-center mt-7">
                <h1 className="font-bold text-xl">
                    Selected players ({selectedPlayer.length}/6)
                </h1>
                <div className="join ">
                    <button onClick={() => handleIsACtiveStatus("selectedPlayers")} className="text-black font-semibold  rounded-l-lg border-l-2 border-t-2 border-b-2 p-4 hover:bg-slate-200 transition-colors duration-200">
                        Available
                    </button>
                    <button onClick={() => handleIsACtiveStatus("selectedPlayersNO")} className=" text-black font-semibold bg-[#E7FE29] border-r-2 border-t-2 border-b-2 rounded-r-lg p-4 hover:bg-slate-200 transition-colors duration-200">
                        Selected ({selectedPlayer.length})
                    </button>
                </div>
            </div>

            {selectedPlayer.map((player, index) => (
                <SelectedPlayer key={index} player={player} handleDeletePlayer={handleDeletePlayer} />
            ))}
            <div className={`${isActive.selectedPlayers ? "hidden" : ""}`}>
                <button onClick={() => handleIsACtiveStatus("selectedPlayers")} className="btn mx-auto text-black font-semibold bg-[#E7FE29] rounded-lg border-2 border-white hover:bg-[#e6fa2e] ">
                    Add More Player
                </button>
            </div>
        </div>
    );
};
SelectedPlayers.propTypes = {
    selectedPlayer: PropTypes.int,
    handleIsACtiveStatus: PropTypes.func,
    isActive: PropTypes.object,
    handleDeletePlayer: PropTypes.func,

};

export default SelectedPlayers;
