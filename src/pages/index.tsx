import * as React from 'react';
import './index.scss';
import { TwoSidedBackgroundContainer } from '../components/layout/TwoSidedBackgroundContainer/TwoSidedBackgroundContainer';
import { Content } from '../components/layout/Content/Content';
import { Sidebar } from '../components/layout/Sidebar/Sidebar';


const Index = () => (
    <TwoSidedBackgroundContainer>
        <Content>
            <Sidebar />
            <div style={{
                padding: '64px'
            }}>
                Work in progress
            </div>
        </Content>
    </TwoSidedBackgroundContainer>
);

export default Index;
