import React, { FC } from 'react';
import './PageHeader.scss';
import logo from '/icon.svg';

const PageHeader: FC = () => {

    return (
        <>
            <div className="page-header">
                <img src={logo} className="logo" alt="logo" />
                <h1>Welcome to My toy boX</h1>
            </div>
        </>
    );
}

export default PageHeader;