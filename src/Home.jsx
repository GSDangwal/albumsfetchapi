import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
const Home = () => {
    const [all, allupdate] = useState([]);
    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/users?_page=1&_limit=4")
            .then(Response => Response.json())
            .then(data => allupdate(data));
    }, []);
    const handlClcick = (click) => {
        let item = click.selected + 1;
        fetch(`http://jsonplaceholder.typicode.com/users?_page=${item}&_limit=4`)
            .then(res => res.json())
            .then(data => allupdate(data));
    }
    return (<div className="homeCard">
        <h1 className="center">LIst of Albums</h1>
        {all.map((e) => {
            return <div key={e.id} className="card" id="home" >
                <div className="card-body">
                    <h5 className="card-title">Album Title : {e.company.name}</h5>
                    <p className="card-text">UserName: {e.name}</p>
                    <Link to={`/data/${e.id}/${e.name}`} className="btn btn-primary">View More</Link>
                </div>
            </div>
        })}
        {/* <div className="btnHomePage">
            <div className="left">
                <button className="btn btn-success" type="button">prev</button>
            </div>
            <div className="">
                <button className="btn btn-success" type="button">next</button>
            </div>
        </div> */}
        <ReactPaginate
            previousLabel={"<< prev"}
            nextLabel={"next >>"}
            pageCount={Math.ceil(10 / 4)}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            activeClassName={"active"}
            onPageChange={handlClcick}
        />
    </div>);
}

export default Home;