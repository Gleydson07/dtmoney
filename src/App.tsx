import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer } from 'miragejs';
import { useState } from "react";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

createServer({
  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 0,
          title: 'Processador CORE I5 10th 4.0ghz',
          amount: 1900,
          type: 'withdraw',
          category: 'Hardware',
          createdAt: new Date()
        },
        {
          id: 1,
          title: 'Placa mãe LG1200 B460 Corsair',
          amount: 700,
          type: 'withdraw',
          category: 'Hardware',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Memória RAM 8GB DDR4 2666mhz Corsair',
          amount: 1900,
          type: 'withdraw',
          category: 'Hardware',
          createdAt: new Date()
        },
        {
          id: 3,
          title: 'Monitor Philips 23,8"',
          amount: 1650,
          type: 'withdraw',
          category: 'Acessories',
          createdAt: new Date()
        },
        {
          id: 4,
          title: 'Desenvolvimento de software',
          amount: 6500,
          type: 'deposit',
          category: 'Job',
          createdAt: new Date()
        },
        {
          id: 5,
          title: 'Suporte ao cliente',
          amount: 200,
          type: 'deposit',
          category: 'Job',
          createdAt: new Date()
        },
      ]

    })
  }
})


export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    
    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }
    
    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }
    return (
    <>
      <GlobalStyle/>
      <Header 
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard/>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}
