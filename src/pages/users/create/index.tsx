import { NextPageWithLayout } from "@/pages/_app"
import SharedUpload from "@/shared/components/upload-file"
import MainLayout from "@/shared/layouts/main"
import { Button, Card, Col, Form, Input, List, Row, Segmented, Switch, Tag } from "antd"
import React from "react"



const CreateUser: NextPageWithLayout = () => {
    const roles =
        [
            {
                title: 'admin',
                tag: 'purple'
            },

            {
                title: 'customer',
                tag: 'green'
            },

            {
                title: 'customer',
                tag: 'cyan'
            },

            {
                title: 'developer',
                tag: 'volcano'
            },

            {
                title: 'tester',
                tag: 'lime'
            },
        ]

    return (
        <main>
            <Row gutter={12}>
                <Col xs={20}>
                    <Card title='Add New User'>
                        <Form layout="vertical">
                            <Row gutter={12}>
                                <Col xs={12}>
                                    <Form.Item label='First Name'>
                                        <Input></Input>
                                    </Form.Item>
                                </Col>
                                <Col xs={12}>
                                    <Form.Item label='Last Name'>
                                        <Input></Input>
                                    </Form.Item>
                                </Col>
                                <Col xs={24}>
                                    <Form.Item label='Username'>
                                        <Input></Input>
                                    </Form.Item>
                                </Col>

                                <Col xs={12}>
                                    <Form.Item label='E-mail'>
                                        <Input></Input>
                                    </Form.Item>
                                </Col>

                                <Col xs={12}>
                                    <Form.Item label='Phone Number'>
                                        <Input></Input>
                                    </Form.Item>
                                </Col>

                                <Col xs={12}>
                                    <Form.Item label='Subscription'>
                                        <Segmented size="large" options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
                                    </Form.Item>
                                </Col>

                                <Col xs={12}>
                                    <Form.Item label='Upload Picture'>
                                        <SharedUpload></SharedUpload>
                                    </Form.Item>
                                </Col>

                                <Col xs={8}>
                                    <Form.Item label='City'>
                                        <Input></Input>
                                    </Form.Item>
                                </Col>

                                <Col xs={8}>
                                    <Form.Item label='State'>
                                        <Input></Input>
                                    </Form.Item>
                                </Col>


                                <Col xs={8}>
                                    <Form.Item label='Country'>
                                        <Input></Input>
                                    </Form.Item>
                                </Col>


                                <Col xs={24}>
                                    <Form.Item label='Active'>
                                        <Switch></Switch>
                                    </Form.Item>
                                </Col>
                                <Col xs={24}>
                                    <Form.Item>
                                        <Button block type="primary">Submit</Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card title='Available Roles' bodyStyle={{ padding: 0 }}>
                        <List
                            itemLayout="horizontal"
                            dataSource={roles}
                            renderItem={(item) => (
                                <List.Item>
                                    <Tag color={item.tag}>{item.title}</Tag>
                                </List.Item>
                            )}
                        />

                    </Card>
                </Col>
            </Row>
        </main>
    )
}

export default CreateUser

CreateUser.getLayout = (page: React.ReactElement) => {
    return <MainLayout title="Add User">{page}</MainLayout>
}