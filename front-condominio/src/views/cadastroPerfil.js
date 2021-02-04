import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group';

class CadastroPerfil extends React.Component{


    state={
       nome :'',
       descricao:''
    }

    cadastrar = () => {
        console.log(this.state)
    }



    render(){
        return(
            <div className="container">
            <Card title="Cadastro de Perfil">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                        <FormGroup label="Nome:*" htmlFor="inputNome">
                            <input  type="text" 
                                    id="inputNome" 
                                    className="form-control"
                                    name="nome"
                                    onChange={e => this.setState({nome: e.target.value})} />
                        </FormGroup>

                        <FormGroup label="Descrição:*" htmlFor="inputDescricao">
                            <input  type="text" 
                                    id="inputDescricao" 
                                    name="descricao"
                                    className="form-control"
                                    onChange={e => this.setState({descricao: e.target.value})} />
                        </FormGroup>
                        <button onClick={this.cadastrar} type="button" className="btn btn-success" >Salvar</button>
                        <button type="button" className="btn btn-danger" >Cancelar</button>
                        </div>
                    </div>
                </div>
            </Card>
            </div> 
        )
    }
}

export default CadastroPerfil;