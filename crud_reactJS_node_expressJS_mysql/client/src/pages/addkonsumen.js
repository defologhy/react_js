import MainHeader from '../components/mainHeader';
import Sidebar from '../components/sidebar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from "axios";

function AddKonsumen(props) {

    const [notlp, setNotlp] = useState("");
    const [id, setId] = useState("");
    const [namakonsumen, setNama] = useState("");
    const [alamatkonsumen, setAlamat] = useState("");

    const addKonsumen = () => {
        Axios.post("http://localhost:3001/createKonsumen", {
            id: id,
            notlp: notlp,
            namakonsumen: namakonsumen,
            alamatkonsumen: alamatkonsumen
        }).then(() => {
            props.history.push("/konsumen");
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
                            <Link to={'/konsumen'} >Konsumen</Link>
                        </li>

                        <li className="separator">
                            <i className="flaticon-right-arrow"></i>
                        </li>

                        <li className="nav-item ">
                            <Link to={'/addkonsumen'} >Add Konsumen</Link>
                        </li>

						</ul>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="card">
								<div className="card-header">
									<div className="card-title">Add Konsumen</div>
								</div>
								<div className="card-body">
									<div className="row">
										<div className="col-md-6 col-lg-4">
                                        <div className="form-group">
												<label htmlFor="id">ID Konsumen</label>
												<input type="text" className="form-control" id="id" name="id" placeholder="Masukan ID" onChange={(event) => { setId (event.target.value); }}/>
											</div>
											<div className="form-group">
												<label htmlFor="notlp">No Telepon Konsumen</label>
												<input type="number" className="form-control" id="notlp" name="notlp" placeholder="Masukan Nomor Telepon" onChange={(event) => { setNotlp (event.target.value); }}/>
											</div>
                                            <div className="form-group">
												<label htmlFor="namakonsumen">Nama Konsumen</label>
												<input type="text" name="namakonsumen" className="form-control" id="namakonsumen" placeholder="Masukan Nama Konsumen" onChange={(event) => { setNama (event.target.value); }}/>
											</div>
                                            <div className="form-group">
												<label htmlFor="alamatkonsumen">Alamat Konsumen</label>
                                                <textarea className="form-control" id="alamatkonsumen" name="alamatkonsumen" placeholder="Masukan Alamat Konsumen" onChange={(event) => { setAlamat (event.target.value); }}></textarea>
											</div>
										</div>
									</div>
								</div>
								<div className="card-action">
									<button type="button" className="btn btn-success" onClick={addKonsumen}>Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
									<Link to={'/konsumen'} className="btn btn-danger">Cancel</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
      </div>
    );
  }
  
  export default AddKonsumen;
  