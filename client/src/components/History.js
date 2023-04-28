// History.js
import React from "react";
import { Layout } from 'antd';
import DataDisplay from "./DataDisplay";

const { Content } = Layout;

const History = ({ gardenId }) => {
    return (
        <Layout>
            <Content style={{ margin: '24px 16px 0' }}>
                <div style={{ padding: 24 }}>
                    <DataDisplay gardenId={gardenId} />
                </div>
            </Content>
        </Layout>
    );
};

export default History;
