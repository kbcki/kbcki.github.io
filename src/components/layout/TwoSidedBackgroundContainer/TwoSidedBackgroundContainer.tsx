import './TwoSidedBackgroundContainer.scss';
import * as React from 'react';

export const TwoSidedBackgroundContainer: React.FC = ({ children }) => (
    <div className="kbcki-two-sided-bg-container">
        <div className="kbcki-two-sided-bg-container__content">
            { children }
        </div>
        <div className="kbcki-two-sided-bg-container__bg-pane \
            kbcki-two-sided-bg-container__bg-pane--left" />
        <div className="kbcki-two-sided-bg-container__bg-pane \
            kbcki-two-sided-bg-container__bg-pane--right" />
    </div>
)
