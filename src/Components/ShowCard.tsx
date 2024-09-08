import { Link } from "react-router-dom";
import { Show } from "../models/Show";
import { FC } from "react";
import { connect } from "react-redux";
import { updateShowId } from "../actions/Show";
type ShowProps={
  show:Show,
  updateShowId: (id: string) => void;

}
const ShowCard:FC<ShowProps> =({show,updateShowId}) => {
  const imagePlaceholder = "https://incakoala.github.io/top9movie/film-poster-placeholder.png"
  const handleViewDetails = () => {
    if (show.id) {
      updateShowId("" + show.id); 
    } 
  };
  
  return (
    <div className="max-w-xs rounded-md shadow-md p-2 m-1">
      <img
        src={show.image?.medium || imagePlaceholder}
        alt={show.name}
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{show.name}</h2>
          <p>
            {show.summary}
          </p>
        </div>
        <Link
          to={"/show/"+show.id}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md"
          onClick={handleViewDetails}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  updateShowId:updateShowId,
};

export default connect(null, mapDispatchToProps)(ShowCard);
