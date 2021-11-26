import React from 'react'; //Estructura básica del componente

function SideBar() { //La función se tiene que llamar como el componente

    return (
        <div>

        <li className="nav-item active">
            <a className="nav-link" href="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard - DH movies</span></a>
        </li>

            <div className="sidebar-heading">Actions</div>


            <li className="nav-item">
                <a className="nav-link collapsed" href="/">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
            </li>


            <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
            </li>


            <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
            </li>

        </div>
    )
}

export default SideBar;