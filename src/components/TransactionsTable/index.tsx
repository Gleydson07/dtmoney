import {  Container  } from './styles'

export function TransactionsTable(){
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
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Compra de veículo</td>
                        <td className="withdraw">- R$ 11.500</td>
                        <td>Automóveis</td>
                        <td>17/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}