import { Container } from "./styles"

export function TransactionTable() {
  return (
    <Container> 
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>  Desenvolvimento de website </td>
            <td>R$12000</td>
            <td>Desenvolvimento</td>
            <td>16 de fevereireo</td>
          </tr>
          <tr>
            <td>  Desenvolvimento de website </td>
            <td>R$12000</td>
            <td>Desenvolvimento</td>
            <td>16 de fevereireo</td>
          </tr>
          <tr>
            <td>  Desenvolvimento de website </td>
            <td>R$12000</td>
            <td>Desenvolvimento</td>
            <td>16 de fevereireo</td>
          </tr>
        </tbody>
      </table> 
      </Container>
   
  )
}

