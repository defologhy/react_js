import MainHeader from '../components/mainHeader';
import Sidebar from '../components/sidebar';
import { Link} from 'react-router-dom';

function Home() {
    return (
      <div>
        <MainHeader />
        <Sidebar />
        <div className="main-panel">
			<div className="content">
            <div className="page-inner">
                <div className="page-header">
                    <h4 className="page-title">Menu</h4>
                    <ul className="breadcrumbs">
                        <li className="separator">
                            <i className="flaticon-right-arrow"></i>
                        </li>

                        <li className="nav-item">
                            <Link to={'/'} >Beranda</Link>
                        </li>

                        <li className="separator">
                            <i className="flaticon-right-arrow"></i>
                        </li>

                        <li className="nav-item">
                            <Link to={'/'} >this</Link>
                        </li>

                    </ul>
                </div>

                <div className="col-12">
                    <div className="row">
                    
                    <div className="col-md-4">
                    <div className="card card-dark bg-primary-gradient">
                    <div className="card-body pb-0">
                    <div className="h1 fw-bold float-right">Tahun 2021</div>
                        <h2 className="mb-2">2000</h2>
                        <p>Total</p>
                    <div className="pull-in sparkline-fix chart-as-background">
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-4">
                    <div className="card card-dark bg-secondary-gradient">
                    <div className="card-body pb-0">
                    <div className="h1 fw-bold float-right">Tahun 2021</div>
                        <h2 className="mb-2">2000</h2>
                        <p>Total</p>
                    <div className="pull-in sparkline-fix chart-as-background">
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-4">
                    <div className="card card-dark bg-success2">
                    <div className="card-body pb-0">
                    <div className="h1 fw-bold float-right">Tahun 2021</div>
                        <h2 className="mb-2">2000</h2>
                        <p>Total</p>
                    <div className="pull-in sparkline-fix chart-as-background">
                    </div>
                    </div>
                    </div>
                    </div>

                    </div>
                </div>
			</div>
			<footer className="footer">
                <div className="container-fluid">
                    <nav className="pull-left">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href={{}}>
                                    Copyright  <i className="fa fa-copyright"></i>  2021 - 
                                    <img src="logo192.png" alt="" className="img-fluid" style={{"height" : "10%", "width" : "10%"}} />
                            </a>
                        </li>
                        
                    </ul>
                </nav>
                <div className="copyright ml-auto">
                    CRUD Node ReactJs Bootstrap V.1.0
                </div>				
                </div>
			</footer>
		</div>
      </div>
      </div>
    );
  }
  
  export default Home;
  