import React from 'react';
import './App.css';
import { Rotas } from './rotas';

function App() {
  return (
    <div className="container">
      <header>
        <h1 className='topo1'>Aplicativo de tarefas</h1>
        <nav>
          <a className='topo0' href="/Tarefas">Minhas Tarefas</a><br />
          <a className='topo2' href='/novas-tarefas'>Nova Tarefa</a>
        </nav>
      </header>
      <main>
        <Rotas/>
      </main>
      <footer>
        <p className='fim'>Feito com ReactJs + JsonServer + 1</p>
      </footer>
    </div>
  );
}

export default App;
