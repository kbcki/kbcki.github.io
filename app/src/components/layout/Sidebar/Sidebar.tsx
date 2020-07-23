import './Sidebar.scss';
import * as React from 'react';

export const Sidebar = () => {
    // TODO: Ucomment to include nav
    // const [navMenuOpen, setNaveMenuOpen] = React.useState(false);
    // const onMenuToggleClick = () => setNaveMenuOpen(!navMenuOpen);

    return (
        <header className="kbcki-sidebar">
            <div className="kbcki-sidebar__header">
                {/* <div className={`kbcki-sidebar__menu-toggle
                    ${navMenuOpen ? 'kbcki-sidebar__menu-toggle--open' : ''}`}
                    onClick={onMenuToggleClick}
                >
                    <i className="fa fa-bars"
                        aria-hidden="true"
                    />
                    <i className="fa fa-times"
                        aria-hidden="true"
                    />
                </div> */}
                <h1 className="kbcki-sidebar__title">
                    kbcki
                </h1>
            </div>
            <div className="kbcki-sidebar__pattern" />
            {/* <nav className={`kbcki-sidebar__nav
                ${navMenuOpen ? 'kbcki-sidebar__nav--open' : ''}`}
            >
                <ul>
                    <li>xddd</li>
                    <li>xddd</li>
                    <li>xddd</li>
                </ul>
            </nav> */}
        </header>
    );
};
