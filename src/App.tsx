import PageHeader from './components/PageHeader/PageHeader';
import React, { FC } from 'react';
import './App.scss';


const App: FC = () => {

    return (
        <>
            <PageHeader></PageHeader>
            <div className="toy-container">
                <div className="box box-1">

                </div>
                <div className="box box-2">

                </div>
                <div className="box box-3">

                </div>
            </div>
        </>
    );
}

export default App;
