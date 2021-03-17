import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de Web',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1000,
          createAt: new Date('2021-02-14 10:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/trasactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/trasactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      data.createAt = new Date()

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
