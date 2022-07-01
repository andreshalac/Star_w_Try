export const Card = (props) => {
    const { store, actions } = useContext(Context);
  
   

    return (
      <div
        style={{ width: "20rem" }}
        className=" card  m-2"
      >
        <img
          src= {props.img}
          className="card-img-top"
          alt="Image not found" width="400" height="300"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <div className="d-flex"><p className="mx-2"> {props.description1}</p><p> {props.result1}</p></div>
          <div className="d-flex"><p className="mx-2"> {props.description2}</p><p> {props.result2}</p></div>
          <div className="d-flex"><p className="mx-2"> {props.description3}</p><p> {props.result3}</p></div>
          
          
          <div className="d-flex justify-content-between">
            <Link to={`/detail/${props.path}/${props.index}`}>
            <button  className="btn btn-outline-primary">Learn more!</button>
            </Link>
            <button onClick={() => actions.setFavorites(props.title)} className=" btn btn-outline-warning">
              <i className="far fa-heart" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  Card.propTypes={
    title: propTypes.string,
    description1: propTypes.string,
    result1: propTypes.string,
    description2: propTypes.string,
    result2: propTypes.string,
    description3: propTypes.string,
    result3: propTypes.string,
    path: propTypes.string,
    index: propTypes.number,
    img: propTypes.string
    
  }
  