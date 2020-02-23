import * as React from 'react';
import Head from 'next/head';

import './index.scss';
import { TwoSidedBackgroundContainer } from '../components/layout/TwoSidedBackgroundContainer/TwoSidedBackgroundContainer';
import { Content } from '../components/layout/Content/Content';
import { Sidebar } from '../components/layout/Sidebar/Sidebar';


const Index = () => (
    <>
        <Head>
            <title>kbcki</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width" 
            />
        </Head>
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
    </>
);

export default Index;
