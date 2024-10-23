import React from 'react';

const App = () => {
  const produtos = [
    {
      id: 1,
      nome: 'fone',
      preco: 'R$ 150,00',
      image:
        'https://edifier.com.br/pub/media/catalog/product/cache/f1731b22860b0086fc34e14d5ee03543/h/e/headset_gamer_g2bt.jpg',
    },
    {
      id: 2,
      nome: 'mouse',
      preco: 'R$ 78,50',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp5KHuI3NkjzBJi_O4IXaDl4sYgkotU1Bt5g&s',
    },
    {
      id: 3,
      nome: 'mouse pad',
      preco: 'R$ 39,99',
      image:
        'https://t3.ftcdn.net/jpg/08/09/91/72/360_F_809917286_tlUjbJqgKv208EyxZH1C5cOSIgpIXNU9.jpg',
    },
    {
      id: 4,
      nome: 'gabinete',
      preco: 'R$ 230,99',
      image:
        'https://imgs.casasbahia.com.br/1567915595/1xg.jpg',
    },
    {
      id: 5,
      nome: 'placa mae',
      preco: 'R$ 650,99',
      image:
        'https://s2-techtudo.glbimg.com/Xuc0Hq4Uhf0BGvD0_XKlkOsvBmM=/0x0:695x449/984x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2016/08/05/5370968516_9ff93aee01_b.jpg',
    },
  ];

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <img
              src={produto.image}
              alt={produto.nome}
              style={{ width: '100px', height: 'auto' }}
            />
            {produto.nome} - {produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
