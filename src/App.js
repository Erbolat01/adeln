import { Header, Promo, Tabs, New, Popular, Discounts, Footer } from './components'

const App = () => {

  const items = [
  {
    key: '1',
    label: 'Новинки',
    children: <New/>
  },
  {
    key: '2',
    label: 'Скидки',
    children: <Discounts/>,
  },
  {
    key: '3',
    label: 'Популярные',
    children: <Popular/>,
  },
]


  return (
    <main>
      <Header/>
      <Promo/>
      <Tabs items={items}/>
      <Footer/>
    </main>
  )
}

export default App
