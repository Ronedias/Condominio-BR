import React from 'react';

import { Route, Switch, HashRouter } from 'react-router-dom';
import CadastroPerfil from '../views/cadastroPerfil';
import Login from '../views/login';

function Rotas() {
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}  />
                <Route path="/cadastro-perfil" component={CadastroPerfil}  />
            </Switch>
        </HashRouter>
    )
}

export default Rotas;