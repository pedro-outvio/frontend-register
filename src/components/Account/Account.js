import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Step, Container, Segment, Button } from 'semantic-ui-react';
import cn from 'classnames';

import AccountUser from './AccountUser';
import AccountShop from './AccountShop';
import AccountWareHouse from './AccountWareHouse';
import { LogoOutvio } from '../Common';
import styles from './styles.scss';

const Account = ({
  setStep,
  step,
  userCompleted,
  companyCompleted,
  warehousesCompleted,
  disableProfileAction,
  ...rest
}) => (
  <Container fluid className={styles.container}>
    <div className={styles.header}>
      <LogoOutvio />
      {`${userCompleted}`}
    </div>
    {!userCompleted &&
      !companyCompleted &&
      (!warehousesCompleted && (
        <div className={styles.accountSteps}>
          <Container>
            <h2 className={styles.title}>
              Para poder empezar a hacer envíos en Outvio solo necesitas completar tres sencillos
              pasos...
            </h2>
          </Container>

          <div className={styles.stepContainer}>
            <div
              className={cn({
                [styles.step]: true,
                [styles.stepUser]: true,
                [styles.stepActive]: step === 1,
              })}
            >
              <Icon name="user" className={styles.stepIcon} />
              <Container textAlign="center" className={styles.containerForm}>
                <h3 className={styles.subtitle}>... 1. Necesitamos saber más de ti</h3>
                {step === 1 && <AccountUser {...rest} />}
              </Container>
            </div>
            <div className={cn({ [styles.step]: true, [styles.stepShop]: true })}>
              <Icon name="shop" className={styles.stepIcon} />
              <Container textAlign="center" className={styles.containerForm}>
                <h3 className={styles.subtitle}>... 2. Cuéntanos cosas de tu tienda</h3>
                {step === 2 && <AccountShop {...rest} />}
              </Container>
            </div>

            <div className={cn({ [styles.step]: true, [styles.stepWarehouse]: true })}>
              <Icon name="warehouse" className={styles.stepIcon} />
              <Container textAlign="center" className={styles.containerForm}>
                <h3 className={styles.subtitle}>... 3. ¿Donde está tu almacén?</h3>
                {step === 3 && <AccountWareHouse {...rest} />}
              </Container>
            </div>

            <p className={styles.accountWithRegister}>
              <button onClick={disableProfileAction}>
                I do not wish to continue with the registration
              </button>
            </p>
          </div>
        </div>
      ))}
    {userCompleted &&
      companyCompleted &&
      warehousesCompleted && (
        <Segment>
          <Container textAlign="center">
            Your account is being activated. This process takes just 1 business day. Once activated
            you will be ready to ship, worldwide in 24/48h!
            <p className={styles.buttonAction}>
              <Button positive>Close</Button>
            </p>
          </Container>
        </Segment>
      )}
  </Container>
);

Account.propTypes = {
  setStep: PropTypes.func.isRequired,
  step: PropTypes.number,
  userCompleted: PropTypes.bool,
  companyCompleted: PropTypes.bool,
  warehousesCompleted: PropTypes.bool,
  disableProfileAction: PropTypes.func.isRequired,
};

Account.defaultProps = {
  userCompleted: false,
  companyCompleted: false,
  warehousesCompleted: false,
};

Account.defaultProps = {
  step: 1,
};

export default Account;
