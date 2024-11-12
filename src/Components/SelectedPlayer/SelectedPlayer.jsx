import { MdDeleteForever } from "react-icons/md";
import PropTypes from 'prop-types';
const SelectedPlayer = ({ player, handleDeletePlayer }) => {
    const { name, role, img } = player;

    return (
        <div>
            <div className="flex gap-x-5 items-center border-2 rounded-xl p-2 my-7 justify-between">
                <div className="flex gap-x-5 items-center">
                    <img className="h-20 w-32 object-cover rounded-xl" src={img} alt="" />
                    <div>
                        <h1 className="font-bold text-xl mb-2">{name}</h1>
                        <p className="font-normal text-base">{role}</p>
                    </div>
                </div>
                <button onClick={() => handleDeletePlayer(player)} className="text-3xl text-red-600 p-2">
                    <MdDeleteForever />
                </button>
            </div>

        </div>
    );
};
SelectedPlayer.propTypes = {
    player: PropTypes.object.isRequired,
    handleDeletePlayer: PropTypes.func
};

export default SelectedPlayer;
