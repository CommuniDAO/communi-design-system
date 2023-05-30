import React from 'react';
import { Button } from '../shared/components/Button';
type AdminHeaderProps = {
  menu: { text: string, icon: "Users" | "Medal" | "Roles", to: string }[]
  component: React.ElementType;
};

export const AdminHeader: React.FC<AdminHeaderProps> = ({ menu, component: Component,}) => {

  return (
    <div className="flex justify-between bg-neutral-400 border-neutral-500 border-[4px] rounded-[8px] h-[80px] px-[20px]">
      <div className="flex items-center justify-start">
        {/* <Button text="Users" variant="basic" icon="Users"/>
        <Button text="Badges" variant="basic" icon="Medal" />
        <Button text="Roles" variant="basic" icon="Roles" /> */}
        {menu.map((item) => {
          return (
            <Button
              text={item.text}
              variant="basic"
              icon={item.icon}
              to={item.to}
              component={Component}
            />
          );
        })}
      </div>
      <div className="flex items-center">
        <Button icon="Clockwork" customCss='rounded-[100px]' size="small" to="/admin/settings"/>
      </div>
    </div>
  );
};
