function MainHeader() {
  return (
    <div>
        <div className="main-header">
			
            <div className="logo-header" data-background-color="blue">
            <a href={{  }} className="logo">
                <div style={{ "color": "white" }} className="navbar-brand">CRUD</div>
                {/* <img src="static/img/logo.svg" alt="navbar brand" className="navbar-brand"> */}
            </a>
            {/* <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <i className="icon-menu"></i>
                </span>
            </button>
            <button className="topbar-toggler more"><i className="icon-options-vertical"></i></button>
            <div className="nav-toggle">
                <button className="btn btn-toggle toggle-sidebar">
                    <i className="icon-menu"></i>
                </button>
            </div> */}
            </div>
            
            <nav className="navbar navbar-header navbar-expand-lg" data-background-color="blue2">
                <div className="container-fluid">

                    <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
                        <img src="http://localhost:3000/logo192.png" alt="" className="img-fluid pull-right" style={{"height" : "30%", "width" : "30%"}} />
                        
                    </ul>
                </div>
            </nav>
			
		</div>
    </div>
  );
}

export default MainHeader;
