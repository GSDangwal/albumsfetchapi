import React from "react";
import { useState, useEffect } from 'react';
import { AiTwotoneHome } from "react-icons/ai"
import { Link, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./index.css";

function ShowData({ e, keyprop }) {
    return (<div>
        <div key={keyprop} className="col">
            <div className="card">
                <img src={e.thumbnailUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Title: {e.title}</h5>
                    <p className="card-text"> {e.id}</p>
                </div>
            </div>
        </div>
    </div>
    );
}

function Data() {
    let { id, username } = useParams();
    console.log(id);
    const [all, updata] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos?_page=1&_limit=12`)
            .then(Response => Response.json())
            .then(data => updata(data));
    }, [id]);

    const handleClick = (data) => {
        let pageNo = data.selected + 1;
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos?_page=${pageNo}&_limit=12`)
            .then(res => res.json())
            .then(nextItem => updata(nextItem));
        console.log(data.selected);
    }
    return (<div className="dataCards">
        <h1 className="center">Dtails of Album</h1>
        <h3 className="center">Uploaded By:-  {username}</h3>
        <Link to="/" className="btn btn-primary" id="homebtn">
            <AiTwotoneHome /> Home
        </Link>
        <div className="row row-cols-1 row-cols-md-4 g-4" style={{ marginLeft: 100, marginRight: 100, marginTop: 20 }}>

            {all.map((e) => {
                return (
                    <ShowData e={e} keyprop={e.title} />
                    // <div className="col">
                    //     <div className="card">
                    //         <img src={e.thumbnailUrl} className="card-img-top" alt="..." />
                    //         <div className="card-body">
                    //             <h5 className="card-title">Title: {e.title}</h5>
                    //             <p className="card-text"> id. {e.id}</p>
                    //         </div>
                    //     </div>
                    // </div>

                );
            })}

        </div>
        {/* <div className="btnHomePage">
            <div>
                <button className=" btn btn-primary text-left">Previous</button>
            </div>
            <div>
                <button className=" btn btn-primary float-right">Next</button>
            </div>
        </div> */}

        <ReactPaginate
            previousLabel={"<< prev"}
            nextLabel={"next >>"}
            pageCount={Math.ceil(50 / 12)}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            activeClassName={"active"}
            onPageChange={handleClick}

        />


    </div>);
}

export default Data;