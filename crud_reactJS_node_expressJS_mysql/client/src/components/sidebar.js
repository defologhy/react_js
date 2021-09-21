import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return (
      <div>
        <div className="sidebar sidebar-style-2">	
        <div className="sidebar-wrapper scrollbar scrollbar-inner">
            <div className="sidebar-content">
                <div className="user">
                    <div className="avatar-sm float-left mr-2">
                        <img src="http://localhost:3000/assets/img/profile.jpg" alt="..." className="avatar-img rounded-circle" />
                    </div>
                    <div className="info">
                        <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                            <span>
                                Administrator
                                <span className="user-level">Admin</span>
                                <span className="caret"></span>
                            </span>
                        </a>
                        <div className="clearfix"></div>

                        <div className="collapse in" id="collapseExample">
                            <ul className="nav">
                                <li>
                                    <a href="Auth/logout">
                                        <span className="link-collapse">Logout</span>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <ul className="nav nav-primary">

                        <li className={splitLocation[1] === "" ? "nav-item active" : "nav-item"}>
                            <Link to={'/'} >
                                <i className="fas fa-home"></i>
                                <p>Beranda</p>
                            </Link>
                        </li>

                        <li className={splitLocation[1] === "konsumen" || splitLocation[1] === "addkonsumen" ? "nav-item active" : "nav-item"}>
                            <Link to={'/konsumen'} >
                                <i className="fas fa-users"></i>
                                <p>Master Konsumen</p>
                            </Link>
                        </li>
                </ul>
            </div>
        </div>
		</div>
      </div>
    );
  }
  
  export default Sidebar;
  