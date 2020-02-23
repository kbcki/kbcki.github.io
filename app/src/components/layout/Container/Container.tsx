import './Container.scss';
import * as React from 'react';

export const Container: React.FC = ({ children }) => (
    <main className="kbcki-container">
        { children }
    </main>
)
