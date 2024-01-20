function Restcard(props) {
  const { resData } = props;

  return (
    <div className="body__res-card">
      <div className="body__res-card--image">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData.info?.cloudinaryImageId
          }
          alt=""
        />
      </div>
      <div className="body__res-card--description">
        <div className="body__res-card--description--name">
          <h3>{resData.info.name}</h3>
        </div>
        <div className="body__res-card--description--deli">
          <h3>{resData.info?.costForTwo}</h3>
        </div>
        {/* <div className="body__res-card--description--cuisines">
          <h3>{resData.cuisines.join(",")}</h3>
        </div> */}
        <div className="body__res-card--description--rating">
          <h3>{resData.info?.avgRating} stars</h3>
        </div>
        <div className="body__res-card--description--address">
          <h3>{resData.info?.areaName}</h3>
        </div>
      </div>
    </div>
  );
}

export default Restcard;
