import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Step, Container, Segment } from 'semantic-ui-react';

import AccountUser from './AccountUser';
import AccountShop from './AccountShop';
import AccountWareHouse from './AccountWareHouse';

const Account = ({ setStep, step, userCompleted, ...rest }) => (
  <Container fluid>
    <Segment>
      <Container textAlign="center">
        <p>
          ¡Estamos encantados que hayas elegido Outvio para gestionar tus pedidos y procesar tus
          pedidos! Para configurar Outvio necesitamos que completes el par de pasos de aquí abajo.
          Te llevará sólo 5 minutos.
        </p>
        <p>
          Puedes salir de esta página y continuar cuando quieras, pero te recomendamos que sigas
          estos pasos iniciales para ponerte a enviar pedidos lo antes posible y de manera muy
          sencilla.
        </p>
      </Container>
    </Segment>

    <Step.Group fluid>
      <Step onClick={() => setStep(1)} active={step === 1} completed={userCompleted}>
        <Icon name="user" />
        <Step.Content>
          <Step.Title>Your information</Step.Title>
          <Step.Description>We are Outvio, who are you? </Step.Description>
        </Step.Content>
      </Step>

      <Step onClick={() => setStep(2)} active={step === 2}>
        <Icon name="shop" />
        <Step.Content>
          <Step.Title>Your shop</Step.Title>
          <Step.Description>We would like to know more about your online store</Step.Description>
        </Step.Content>
      </Step>

      <Step onClick={() => setStep(3)} active={step === 3}>
        <Icon name="warehouse" />
        <Step.Content>
          <Step.Title>Your warehouse</Step.Title>
          <Step.Description>Where we need to pick up your orders? </Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>

    {step === 1 && <AccountUser {...rest} />}
    {step === 2 && <AccountShop {...rest} />}
    {step === 3 && <AccountWareHouse {...rest} />}
  </Container>
);

Account.propTypes = {
  setStep: PropTypes.func.isRequired,
  step: PropTypes.number,
  userCompleted: PropTypes.bool.isRequired,
};

Account.defaultProps = {
  step: 1,
};

export default Account;
