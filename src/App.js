import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Items from './components/Items/Items'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair-grey.jpeg',
          desc: 'lolkek',
          category: 'chairs',
          price: '49,99 $',
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.webp',
          desc: 'lolkek',
          category: 'tables',
          price: '149,00 $',
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpeg',
          desc: 'lolkek',
          category: 'chairs',
          price: '549,99$',
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'wall-light.jpeg',
          desc: 'lolkek',
          category: 'chairs',
          price: '25,00$',
        },
        {
          id: 5,
          title: 'Стул белый',
          img: 'chair-white.jpeg',
          desc: 'lolkek',
          category: 'chairs',
          price: '49,99$',
        },
      ],
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    )
  }
}

export default App
