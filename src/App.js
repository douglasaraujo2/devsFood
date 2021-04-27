import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container, Menu, PageBody } from "./AppStyles";
import ReactTooltip from "react-tooltip";

import PrivateRoute from "./components/PrivateRoute";

import HomeScreen from "./pages/HomeScreen";
import Tela2Screen from "./pages/Tela2Screen";
import MenuItem from "./components/MenuItem";
import Cart from "./components/Cart";
import Modal from './components/Modal';
import ModalAddress from './components/ModalAddress';

export default () => {
  const [addressModalStatus, setModalAddressStatus] = useState(false);

  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <MenuItem title="Loja" icon="/assets/store.png" link="/" />
          <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders" />
          <MenuItem title="Meu Perfil" icon="/assets/profile.png" link="/profile" />
        </Menu>
        <PageBody>
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <PrivateRoute path="/orders"></PrivateRoute>
            <PrivateRoute path="/profile"></PrivateRoute>
            <Route path="/tela2/:nome">
              <Tela2Screen />
            </Route>
          </Switch>
        </PageBody>
        <Cart setModalAddressStatus={setModalAddressStatus}/>
        <ReactTooltip id="tip-top" place="top" effect="solid" />
        <ReactTooltip id="tip-right" place="right" effect="solid" />
        <Modal status={addressModalStatus}
               setStatus={setModalAddressStatus}>
          <ModalAddress />
        </Modal>
      </Container>
    </BrowserRouter>
  );
};
