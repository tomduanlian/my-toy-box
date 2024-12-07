import logo from '/icon.svg';
import './PageHeader.scss';

function PageHeader() {

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