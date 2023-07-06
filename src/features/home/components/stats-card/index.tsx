import { Card } from "antd"

const StatsCard = () => {
    return (
        <Card title="Default size card" extra={<a href="#">More</a>}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    )
}

export default StatsCard