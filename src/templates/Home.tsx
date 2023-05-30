import React from 'react';
import { Button } from '../shared';
import { Logo } from '../components/Logo';
// import communiLogo from '../assets/images/CommuniLogo.svg';

type HomeProps = {
  component: React.ElementType;
  session: boolean;
};

export const Home: React.FC<HomeProps> = ({
  component: Component,
  session
}) => {
  return (
    <>
      {session ? (
        <div className="bg-secondary-900 h-screen">
          <div className="flex items-center h-screen">
            <div className="w-[480px] mx-auto px-[30px] py-[15px] bg-neutral-100 rounded-[20px]">
              <div className="w-[360px] mx-auto"></div>
              <div className="flex flex-col">
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
      ) : (
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
      )}
    </>
  );
};
