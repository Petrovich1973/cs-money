import React, {useState} from 'react'
import classNames from 'classnames'

const Header = ({title = ''}) => {

    const [collapse, setCollapse] = useState(false)

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
                <a title={title} className="navbar-brand mr-auto mr-lg-0" href="/">LOGO <span
                    className="bg-danger dot"/> TYPE</a>
                <button className="navbar-toggler p-0 border-0" type="button"
                        onClick={() => setCollapse(!collapse)}>
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className={classNames("navbar-collapse collapse", {'show': collapse})}>
                    <ul className="navbar-nav mr-auto links">
                        <li className="nav-item">
                            <a className="nav-link" href="/"><i className="fa fa-bell-o"/><span>Release notes</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/"><i className="fa fa-wheelchair"/><span>F.A.Q.</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/"><i className="fa fa-user-o"/><span>You profile</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/"><i className="fa fa-cogs"/><span>View settings</span></a>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        <ul className="navbar-right">
                            <li className="nav-link balance">
                                <span><i className="fa fa-dollar"/></span>
                                <span>2 000.34</span>
                                <span><i className="fa fa-plus-circle"/></span>
                            </li>
                            <li className="nav-link profile">
                                <span>minin-deniska@gmail.com</span>
                                <img width={40} height={40} src={imgGrey} className="rounded-circle"
                                     alt="Minin Deniska"/>
                            </li>
                            <li className="nav-link">
                                <a href="/">Log out</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header


const imgGrey = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/
gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/
eHBhY2tldCBiZWdpbj0i77u/
IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8i
IHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAg
ICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnM
jIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8
xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA
6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv
dG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhBMjE5M0Q1RTJBRDExRTlCQjEwRUE3OD
ZDQTI4OTU0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhBMjE5M0Q2RTJBRDExRTlCQjEwRUE3ODZDQTI4OTU0Ij4g
PHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEEyMTkzRDNFMkFEMTFFOUJCMTBFQTc4Nk
NBMjg5NTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEEyMTkzRDRFMkFEMTFFOUJCMTBFQTc4NkNBMjg5NTQiLz4g
PC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4nl0LFAAAAokl
EQVR42uzQMQEAAAgDILV/ruWygp8PRKCTFDejQJYsWbJkyVIgS5YsWbJkKZAlS5YsWbIUyJIlS5YsWQpkyZIlS5YsBbJkyZ
IlS5YCWbJkyZIlS4EsWbJkyZKlQJYsWbJkyVIgS5YsWbJkKZAlS5YsWbIUyJIlS5YsWQpkyZIlS5YsBbJkyZIlS5YCWbJk
yZIlS4EsWbJkyZKlQJasbyvAAELZAxqpKhcSAAAAAElFTkSuQmCC`