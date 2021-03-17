import React from 'react'
import { useTransactions } from '../../hooks/useTransactions'
import { Container } from './styles'

export function TrasactionsTable() {
  const { transactions } = useTransactions()

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
          {transactions.map(transacion => (
            <tr key={transacion.id}>
              <td>{transacion.title}</td>
              <td className={transacion.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transacion.amount)}
              </td>
              <td>{transacion.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transacion.createAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
