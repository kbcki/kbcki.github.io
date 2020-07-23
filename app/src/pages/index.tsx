import * as React from 'react';
import Head from 'next/head';

import './index.scss';
import { TwoSidedBackgroundContainer } from '../components/layout/TwoSidedBackgroundContainer/TwoSidedBackgroundContainer';
import { Container } from '../components/layout/Container/Container';
import { Sidebar } from '../components/layout/Sidebar/Sidebar';
import { Content } from '../components/layout/Content/Content';

const Index = () => (
    <>
        <Head>
            <title>kbcki</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width" 
            />
            <link rel="icon" type="image/png" href="favicon.png" />
        </Head>
        <TwoSidedBackgroundContainer>
            <Container>
                <Sidebar />
                <Content>
                    <h3>Hello</h3>
                    <p>
                        My name is Jakub Kubacki. I'm a web developer.&nbsp;
                        <del>I work and live in Wrocław, Poland.</del>
                        Since March 2020, I work remotely. My technology
                        stack includes both frontend (React) and backend
                        (Node.JS, .NET) technologies.
                    </p>

                    <h3>Job-status</h3>
                    <p>
                        hired
                    </p>

                    <h3>Why did I decide to create this page?</h3>
                    <p>
                        Tbh, I have no idea. I thought I've enough free time
                        so I can write some blog posts. Well, it hasn't
                        happened so far.
                    </p>

                    <h3>For some reason, I'd like to contact you</h3>
                    <p>
                        I think that LinkedIn would be the most convenient
                        option. You can find my profile&nbsp;
                        <a href="https://www.linkedin.com/in/jakub-kubacki/">
                        here. </a>
                    </p>
                </Content>
            </Container>
        </TwoSidedBackgroundContainer>
    </>
);

export default Index;
