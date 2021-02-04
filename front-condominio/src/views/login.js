import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-group';


class Login extends React.Component {

    state = {
        cpf:'',
        senha:''
    }

    entrar = () => {
        console.log('CPF:', this.state.cpf)
        console.log('Senha:', this.state.senha)
    }


    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={ {position : 'relative', left : '300px'}}>
                        <div className="bs-docs-section">
                            <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label= "CPF: *" htmlFor="exampleInputCpf" >
                                                <input  type="cpf"
                                                        value={this.state.cpf} 
                                                        onChange={e => this.setState({cpf: e.target.value})}
                                                        className="form-control" 
                                                        id="exampleInputCpf" 
                                                        aria-describedby="CPFHelp" 
                                                        placeholder="Digite o CPF">
                                                </input>
                                            </FormGroup>

                                            <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                                <input  type="password" 
                                                        value={this.state.senha} 
                                                        onChange={e => this.setState({senha: e.target.value})}
                                                        className="form-control" 
                                                        id="exampleInputPassword1" 
                                                        placeholder="Password">
                                                </input>
                                            </FormGroup>

                                            <button onClick={this.entrar} className="btn btn-success">Entrar</button>
                                            <button className="btn btn-danger">Cadastrar</button>

                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;