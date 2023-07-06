import { TOAST_TYPES, showToast } from '@/shared/utils/toast-utils/toast.util';
import { Divider, Layout, Menu } from 'antd';
// import { databaseIcon, pdfIcon } from 'imageConfig';
import { clearAuthFromStorage } from '@/shared/utils/cookies-utils/cookies.util';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { myAppMenuItems, otherAppMenuItems, topMenuItems } from './menu-item';

const { Sider } = Layout;

const MainLayoutSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<any>([]);

  const router = useRouter();

  const handleLogout = () => {
    clearAuthFromStorage();
    router.push('/auth/login');
    showToast(TOAST_TYPES.success, 'You have been logged out.');
  };

  const combineMenuItems = [
    ...topMenuItems,
    ...myAppMenuItems,
    ...otherAppMenuItems,
  ];

  useEffect(() => {
    const currentPath = router.pathname;

    const menuItem: any = combineMenuItems.find((item: any) => {
      return item?.key === currentPath;
    });
    if (menuItem) {
      setSelectedKeys([menuItem?.key]);
    }
  }, [router.pathname]);

  const handleMenu = (path: string) => {
    if (path && path !== 'divider' && path !== 'title') router.push(path);
  };
  return (
    <Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={267}
      trigger={
        collapsed ? (
          <div>
            <EyeOutlined /> Show
          </div>
        ) : (
          <div>
            <EyeInvisibleOutlined /> Hide
          </div>
        )
      }
    >
      <Menu
        className={`${!collapsed && 'px-6'} py-6`}
        theme="light"
        mode="inline"
        selectedKeys={selectedKeys}
        defaultSelectedKeys={['1']}
        // items={combineMenuItems}
        onClick={(value: any) => handleMenu(value.key)}
      >
        {combineMenuItems.map((item: any) => (
          <>
            {item?.title && !collapsed && (
              <span className="uppercase text-sm font-bold block mb-4">
                {item?.title}
              </span>
            )}
            {item?.key && item?.key?.startsWith('/') && (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            )}

            {item?.divider && <Divider />}
          </>
        ))}
      </Menu>
    </Sider>
  );
};

export default MainLayoutSidebar;
