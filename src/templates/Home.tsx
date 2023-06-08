import React from 'react';
import { Button } from '../shared';
import { Logo } from '../components/Logo';
// import communiLogo from '../assets/images/CommuniLogo.svg';
type SignTransaction = (xdr: string, submit: boolean) => void
type HomeProps = {
  component: React.ElementType;
  view: 'loginDiscordView' | 'defaultView' | 'loginWalletView';
  openWallet: () => void;
  signTransaction: SignTransaction
  restoreSession: () => void;
};

const DiscordLogin: React.FC<{ component: React.ElementType }> = ({
  component: Component
}) => {
  return (
    <div className="bg-secondary-900 h-screen">
      <div className="flex items-center h-screen">
        <div className="w-[480px] mx-auto px-[30px] py-[15px] bg-neutral-100 rounded-[20px]">
          <div className="w-[360px] mx-auto">
            <Logo />
          </div>
          <div className="flex flex-col">
            <Button
              text="Login with Discord"
              type="link"
              to="/verify"
              component={Component}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const WalletLogin: React.FC<{ openWallet: () => void; }> = ({
  openWallet
}) => {
  return (
    <div className="bg-secondary-900 h-screen">
      <div className="flex items-center h-screen">
        <div className="w-[480px] mx-auto px-[30px] py-[15px] bg-neutral-100 rounded-[20px]">
          <div className="w-[360px] mx-auto">
            <Logo />
          </div>
          <div className="flex flex-col">
            <Button
              text="Wallet Login"
              type="button"
              onClick={() => openWallet()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DefaultView: React.FC<{ component: React.ElementType, signTransaction: SignTransaction, openWallet: () => void }> = ({
  component: Component,
  openWallet,
  signTransaction,
}) => {
  return (
    <div className="bg-secondary-900 h-screen">
      <div className="flex items-center h-screen">
        <div className="w-[480px] mx-auto px-[30px] py-[15px] bg-neutral-100 rounded-[20px]">
          <div className="w-[360px] mx-auto"></div>
          <div className="flex flex-col">
            <Button text="Send XDR" type="button" onClick={() => signTransaction("xdr", false)} />
            <Button
              text="Wallet Login"
              type="button"
              onClick={() => openWallet()}
            />
     
            <Button
              text="Logout"
              type="link"
              to="/logout"
              component={Component}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Home: React.FC<HomeProps> = ({ component: Component, view, openWallet, signTransaction }) => {
  switch (view) {
    case 'loginDiscordView':
      return <DiscordLogin component={Component} />;
    case 'loginWalletView':
      return <WalletLogin openWallet={openWallet} />;
    case 'defaultView':
      return <DefaultView component={Component} signTransaction={signTransaction} openWallet={openWallet} />;
    default:
      return <></>;
  }
};
