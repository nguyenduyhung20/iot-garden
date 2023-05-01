// History.js
import React from "react";
import { Layout } from 'antd';
import DataDisplay from "./DataDisplay";

const { Content } = Layout;


const History = ({ gardenId }) => {
    return (
        <Layout style={{ backgroundColor: ' #def6e8' }}>
            <Content>
                {/* <Title level={1} style={{ margin: '3vh 3vw ' }}>History</Title> */}
                <div style={{ padding: '2rem 2rem 1rem' }}>
                    <DataDisplay gardenId={gardenId} />
                </div>
            </Content>
        </Layout>
    );
};

export default History;
