import React from 'react';

class LimiteDeErro extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temErro: false, erro: null, infoErro: null };
  }

  static getDerivedStateFromError(erro) {
    return { temErro: true, erro };
  }

  componentDidCatch(erro, infoErro) {
    this.setState({ infoErro });
    console.error("Erro não tratado:", erro, infoErro);
  }

  render() {
    if (this.state.temErro) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Ops! Algo deu errado.</h1>
          <details style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>
            {this.state.erro && this.state.erro.toString()}
            <br />
            {this.state.infoErro && this.state.infoErro.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default LimiteDeErro;
