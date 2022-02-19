import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root')
export function App() {
  const [isNewTransactionMoldalOpen, setIsNewTransactionMoldalOpen] = useState(false)

  function handleOpenNewTransactionModal(){
      setIsNewTransactionMoldalOpen(true)
  }
  function handleCloseNewTransactionModal(){
      setIsNewTransactionMoldalOpen(false)
  }
  return (
    <>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
     <Dashboard/>

     <NewTransactionModal 
     isOpen={isNewTransactionMoldalOpen} 
     onRequestClose={handleCloseNewTransactionModal}
     />
     
     <GlobalStyle/>
    </>
  );
}
