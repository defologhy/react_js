import MainHeader from '../components/mainHeader';
import Sidebar from '../components/sidebar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Axios from "axios";

function Konsumenlist() {
    const [ValueList, setKonsumenlist] = useState([]);
    
    useEffect(() => {
        Axios.get("http://localhost:3001/getKonsumen").then((response) => {
            setKonsumenlist(response.data);
          });
        const script = document.createElement("script");
        script.src = "http://localhost:3000/ajax/custom.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const deleteKonsumen = (id) => {
        Axios.delete(`http://localhost:3001/deletekonsumen/`+ id).then((response) => {
            window.location.reload();
          });
      };

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
                            <Link to={'/konsumen'} >konsumen</Link>
                        </li>

                    </ul>
                </div>
                
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <Link to={'/addkonsumen'} className="btn btn-info pull-right">Add</Link>
                        </div>
                        
                        <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover" id="datatables">
                            <thead>
                                <tr>
                                <th width="60" style={{'textAlign': 'left'}}>No.</th>
                                <th width="120">No Telepon</th>
                                <th width="120">Nama Konsumen</th>
                                <th width="120">Alamat Konsumen</th>
                                <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                            {ValueList.map((val, key) => (
                                <tr>
                                    <td>{key+=1}</td>
                                    <td>{val.notlp}</td>
                                    <td>{val.namakonsumen}</td>
                                    <td>{val.alamatkonsumen}</td>
                                    <td>
                                        <Link to={'/konsumen/' + val.id} className="btn btn-sm btn-warning">Update</Link>&nbsp;&nbsp;&nbsp;&nbsp;

                                        <button className="btn btn-sm btn-danger" onClick={() => {if(window.confirm('Apakah Yakin ' + val.namakonsumen + ' Akan Dihapus ?')){ deleteKonsumen(val.id)};}}>Delete</button>    
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                            </table>
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
                                    <img src="" alt="" className="img-fluid" style={{'width':'130px'}}/>
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
  
  export default Konsumenlist;
  