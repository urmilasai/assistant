import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Input, Layout, Switch } from 'antd';
import { logo, settingIcon, user } from 'imageConfig';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

const { Header } = Layout;
const { Search } = Input;

const MainLayoutHeader = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (e: any) => {
    if (e) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const items: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: <Link href={'/auth/login'}>My Profile</Link>,
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: <Link href={'/auth/login'}>Logout</Link>,
    },
  ];

  return (
    <div className="sticky z-10 top-[0rem] left-[0rem] dark:bg-dark bg-white overflow-hidden flex flex-row py-[0.75rem] px-[2rem] items-start justify-between text-left text-[1.25rem] text-dimgray font-manrope border-2 border-b border-solid border-t-0 border-r-0 border-l-0 border-[#e8e8e8] dark:border-[#2f2f2f]">
      <div className="flex items-center justify-start gap-[0.5rem]">
        <Image
          //   className="relative w-[3.18rem] h-[2.55rem]"
          height={40}
          width={40}
          alt="Logo"
          src={logo}
        />
        <div className="relative font-extrabold">Assistant</div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[1rem] text-[1rem]">
        <Switch
          checkedChildren="dark"
          unCheckedChildren="light"
          checked={theme === 'dark' && true}
          onChange={toggleTheme}
        />
        <Image
          className="shrink-0"
          alt="Setting Icon"
          height={24}
          width={24}
          src={settingIcon}
        />
        <Dropdown
          menu={{ items }}
          trigger={['click']}
          className="cursor-pointer"
        >
          <div className="flex flex-row items-center justify-center gap-[0.75rem]">
            <Image
              className="relative rounded-[50%] w-[2rem] h-[2rem] object-cover"
              height={32}
              width={32}
              alt="Profile picture"
              src={user}
            />
            <div className="flex flex-col items-start justify-start">
              <b className="relative">Ajan Maharjan</b>
              <div className="relative text-[0.88rem] font-semibold text-silver-100">
                Designer
              </div>
            </div>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default MainLayoutHeader;
