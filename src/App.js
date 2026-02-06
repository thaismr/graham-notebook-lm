import React, { useState } from "react";
import { grahamData } from "./data/grahamData";
import Card from "./components/Card";
import List from "./components/List";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [modalData, setModalData] = useState({
    isOpen: false,
    title: "",
    content: "",
  });

  const handleItemClick = (item) => {
    setModalData({
      isOpen: true,
      title: item.text,
      content: item.explanation,
    });
  };

  const closeModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">{grahamData.title}</h1>
          <p className="app-subtitle">
            Benjamin Graham's Investment Philosophy
          </p>
        </div>
      </header>

      <main className="app-main">
        <div className="cards-grid">
          {/* Princípios e Fundamentos */}
          <Card title="Princípios e Fundamentos" icon="⚖️">
            <div className="subsections">
              <List
                title="Investimento vs. Especulação"
                items={grahamData.sections[0].subsections[0].items}
                onItemClick={handleItemClick}
              />
              <List
                title="Margem de Segurança"
                items={grahamData.sections[0].subsections[1].items}
                onItemClick={handleItemClick}
              />
              <List
                title="Senhor Mercado"
                items={grahamData.sections[0].subsections[2].items}
                onItemClick={handleItemClick}
              />
              <List
                title="Disclaimer (Passivo)"
                items={grahamData.sections[0].subsections[3].items}
                onItemClick={handleItemClick}
              />
            </div>
          </Card>

          {/* Tipos de Investidor */}
          <Card title="Tipos de Investidor" icon="👤">
            <List
              title="Empreendedor (Ativo)"
              items={grahamData.sections[1].subsections[0].items}
              onItemClick={handleItemClick}
            />
          </Card>

          {/* Critérios de Seleção */}
          <Card title="Critérios de Seleção (quantitativos)" icon="📊">
            <List
              items={grahamData.sections[2].items}
              numbered={true}
              onItemClick={handleItemClick}
            />
          </Card>

          {/* Estratégias Quantitativas */}
          <Card title="Estratégias Quantitativas" icon="📈">
            <List
              title="Net-Net (NCAV)"
              items={grahamData.sections[3].subsections[0].items}
              onItemClick={handleItemClick}
            />
            <List
              title="Fórmula de Graham"
              items={grahamData.sections[3].subsections[1].items}
              onItemClick={handleItemClick}
            />
          </Card>

          {/* Psicologia e Comportamento */}
          <Card title="Psicologia e Comportamento" icon="🧠">
            <List
              items={grahamData.sections[4].items}
              onItemClick={handleItemClick}
            />
          </Card>

          {/* Legados e Discípulos */}
          <Card title="Legados e Discípulos" icon="🏆">
            <List
              items={grahamData.sections[5].items}
              onItemClick={handleItemClick}
            />
          </Card>
        </div>
      </main>

      <Modal
        isOpen={modalData.isOpen}
        onClose={closeModal}
        title={modalData.title}
      >
        {modalData.content}
      </Modal>

      <footer className="app-footer">
        <p>Based on Benjamin Graham's teachings - The Intelligent Investor</p>
      </footer>
    </div>
  );
}

export default App;
