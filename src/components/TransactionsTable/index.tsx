import { useEffect, useState } from 'react';
import { api } from '../services/api';
import {  Container  } from './styles';

interface transactionProps {
    id: number,
    title: string;
    category: string;
    type: string;
    amount: number
}

export function TransactionsTable(){
    const [transactions, setTransactions] = useState<transactionProps[]>([]);

    useEffect(() => {
       api.get('transactions')
        .then(response => setTransactions(response.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>R$ {transaction.amount}</td>
                                <td>{transaction.category}</td>
                                <td>20/02/2021</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Container>
    )
}