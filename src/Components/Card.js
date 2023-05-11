import React from 'react';

const Card = (props) => {
  const { foodName, img, options } = props;
  const priceOptions = Object.keys(options);
  let foodItem = props.foodItem
  const handAddCart = () =>{

  }
  return (
    <div>
      <div className="card mt-3" style={{ maxWidth: '18rem' }}>
        <img
          src={props.foodItem.img}
          className="card-img-top"
          alt="..."
          style={{ maxWidth: '100%', height: '120px',objectFit:"fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.foodName}</h5>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 col-md-4">
                <select className="form-select bg-dark text-white" style={{ width: '50' }}>
               
                  {Array.from(Array(6), (e, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-6 col-md-4">
                <select className="form-select bg-dark text-white rounded" style={{width: "100%"}}>
                  {priceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-md-4 d-flex align-items-center">
                <div className="fs-5 align-items-center">Total price</div>
             
             
              </div>
              <hr/>
              <button className='btn btn-dark justify-center ms-2' onClick={handAddCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
