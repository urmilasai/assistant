import { NextPageWithLayout } from "@pages/_app";
import MainLayout from "@shared/layouts/main";

const Settings: NextPageWithLayout = () => {
    return (
        <div>Settings</div>
    )
}

export default Settings

Settings.getLayout = function getLayout(page: React.ReactElement) {
    return <MainLayout title="Settings">{page}</MainLayout>;
};