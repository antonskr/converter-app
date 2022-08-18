import React from 'react';
import { LayoutProps } from './Layout.props';

import NavBar from '../NavBar/NavBar';

const Layout = ( { children }: LayoutProps ):JSX.Element => {
    return (
        <>
            <div className={'container'}>
                <NavBar />
                <div className={'wrapper'}>
                    { children }
                </div>
            </div>
        </>
    )
}

export default Layout;