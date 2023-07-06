import { NextPageWithLayout } from "@/pages/_app"
import { useAppSelector } from "@/shared/hooks/store.hook"
import MainLayout from "@/shared/layouts/main"
import { RootState } from "@/store/index"
import { Card, Col, Row } from "antd"
import { useRouter } from "next/router"
import React from "react"

const User: NextPageWithLayout = () => {
    const router = useRouter()
    const { userId } = router.query
    const { user }: any = useAppSelector((state: RootState) => state.users)
    React.useEffect(() => {
        if (!router.isReady) {
            return
        }
    }, [router.isReady])


    return (
        <Row gutter={[16, 16]}>
            <Col xs={6}>
                <Row gutter={[0, 16]}>
                    <Col xs={24}>
                        <Card style={{ height: 190 }}>
                            User Profile Image
                        </Card>
                    </Col>
                    <Col xs={24}>
                        <Card style={{ height: 195 }}>
                            User Actions
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col xs={18}>
                <Card style={{ height: 400 }} title="User Details">
                    <h4 style={{ fontSize: 16 }}>Name: {user?.name}</h4>
                    <h4 style={{ fontSize: 16 }}>Age: {user?.age}</h4>
                    <h4 style={{ fontSize: 16 }}>Address: {user?.address}</h4>
                </Card>
            </Col>
            <Col xs={24}>
                <Card style={{ height: 240 }} title='Related Users'>

                </Card>
            </Col>
        </Row>
    )
}

export default User
User.getLayout = function getLayout(page: React.ReactElement) {
    return <MainLayout title="User Details">{page}</MainLayout>;
};