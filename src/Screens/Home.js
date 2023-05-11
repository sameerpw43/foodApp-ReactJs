import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import Footer from '../Components/Footer';


const Home = () => {
  const [foodcat, setFoodCat] = useState([]);
  const [food, setFood] = useState(null);
  const[search,setSearch] = useState([]);

  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/foodData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setFood(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="false">
        <div className="carousel-inner">
          <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center" >
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) =>{setSearch(e.target.value)}} />
             
            </div>
          </div>
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/900x300/?burger" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x300/?chips" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x300/?donut" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <div className='container m-3'>
        {foodcat.map((data) => (
          <div className='mb-3' key={data._id}>
            <div className='fs-3 m-3'>{data.CategoryName}</div>
            <hr />
            <div className='row'>
              {food !== null &&
                food
                  .filter((item) => (item.CategoryName === data.CategoryName) &&(item.name.toLowerCase().includes(search)) )
                  .map((filterItems) => (
                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-3 mb-3'>
                      <Card foodItem = {filterItems}
                        options={filterItems.options[0]}
                       
                      />
                    </div>
                  ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
