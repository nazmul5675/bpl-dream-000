import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Players from './Components/Players/Players'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import Subscribe from './Components/Subscribe/Subscribe'
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'

function App() {

  const [freeCoin, setFreeCoin] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState([]);


  const [isActive, setIsActive] = useState({
    selectedPlayers: true,
    status: 'hidden'
  })
  const handleIsACtiveStatus = (status) => {
    if (status == "selectedPlayers") {
      setIsActive({
        selectedPlayers: true,
        status: 'hidden'
      })
    } else {
      setIsActive({
        selectedPlayers: false,
        status: 'hidden'
      })
    }
  }
  console.log(isActive);

  const notify = (notifyText) => toast(notifyText, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light"
  });
  const handleFreeCredit = () => {
    const totalCoin = freeCoin + 60000000;
    setFreeCoin(totalCoin);
    const freeCoinText = 'Congrats! You Got Free Money!';
    notify(freeCoinText);

  }


  // const [freeCoin, setFreeCoin] = useState(0);
  const handleSelectedPlayer = (player) => {
    const { price } = player;

    if (selectedPlayer.length < 6) {
      if (!selectedPlayer.includes(player)) {
        if (freeCoin >= price) {
          const updatedCoin = freeCoin - price;
          setFreeCoin(updatedCoin);
          setSelectedPlayer(prevSelectedPlayer => [...prevSelectedPlayer, player]);
          const successMessage = `${player.name} selected successfully!`;
          notify(successMessage);
        } else {
          const notEnoughMoney = 'You do not have enough money.';
          notify(notEnoughMoney);
        }
      } else {
        const notTakeTwoTime = 'This player is already selected.';
        notify(notTakeTwoTime);
      }
    } else {
      const maxAlert = 'You cannot add more than 6 players.';
      notify(maxAlert);
    }
  }



  const handleDeletePlayer = (playerToDelete) => {
    const updatedSelectedPlayers = selectedPlayer.filter(player => player.id !== playerToDelete.id);
    const { price } = playerToDelete;
    setFreeCoin(prevFreeCoin => prevFreeCoin + price);
    setSelectedPlayer(updatedSelectedPlayers);
    const successMessage = `${playerToDelete.name} has been removed from your selection.`;
    notify(successMessage);
  }




  return (
    <>
      <div className='w-10/12 mx-auto'>
        <Navbar freeCoin={freeCoin}></Navbar>
        <Banner handleFreeCredit={handleFreeCredit} notify={notify} ></Banner>
        <Players handleSelectedPlayer={handleSelectedPlayer} handleIsACtiveStatus={handleIsACtiveStatus} isActive={isActive}></Players>
        <SelectedPlayers selectedPlayer={selectedPlayer} handleDeletePlayer={handleDeletePlayer} isActive={isActive} handleIsACtiveStatus={handleIsACtiveStatus} ></SelectedPlayers>
        <span className='relative top-48'>
          <Subscribe></Subscribe>
        </span>
      </div>
      <footer className='w-full'>
        <Footer></Footer>
      </footer>
      <ToastContainer />
    </>
  )

};

export default App;
