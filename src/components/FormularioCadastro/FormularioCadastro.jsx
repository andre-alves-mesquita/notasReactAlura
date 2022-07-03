import React, {Component} from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
    constructor(props) {
        super(props);
        this.titulo = "";
        this.nota = "";
    }

    handlerMudancaDeTitulo(evento) {
        this.titulo = evento.target.value;
        console.log(this.titulo);
    }

    handlerMudancaDeTexto(evento) {
        this.nota = evento.target.value;
        console.log(this.nota);
    }

    criarNota(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.nota);
    }

    render() {
        return (
            <form className="form-cadastro" onSubmit={this.criarNota.bind(this)}>
                <select className="form-cadastro_input">
                    {this.props.categorias.map((categoria, index) => {
                        return <option key={index}>{categoria}</option>

                    })}
                </select>
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this.handlerMudancaDeTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                    onChange={this.handlerMudancaDeTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;
