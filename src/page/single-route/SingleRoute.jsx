import React from "react";
import { useGetProductDetailsQuery } from "../../context/api/productApi";
import { useParams } from "react-router-dom";
import "./SingleRoute.css";

const SingleRoute = () => {
  const { id } = useParams();
  const { data } = useGetProductDetailsQuery(id);
  return (
    <div>
      <section className="single">
        <div className="container">
          <div className="single__style">
            <img
              width={400}
              height={400}
              src={data?.data?.urls[0]}
              alt={data?.data?.title}
            />
            <div className="single__content">
              <h2 className="single__text">{data?.data?.title}</h2>
              <p className="single__par">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae quisquam accusamus tenetur asperiores, deleniti vero
                repellat nemo debitis nisi est!
              </p>
              <p className="single__price">${data?.data?.price}</p>
              <button className="single__btn">Add to cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleRoute;
