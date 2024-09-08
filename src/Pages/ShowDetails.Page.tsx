import { FC, useEffect } from "react";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { IoArrowBack } from "react-icons/io5"
import { Link } from "react-router-dom";
import { State } from "../store";
import { Show } from "../models/Show";
import { fetchShowDetails } from "../actions/Show";
import { connect } from "react-redux";

type ShowDetailPageProps = WithRouterProps & {
  showDetails: Show | null;
  fetchShowDetails: (showId: string) => void;
  error: string | null;
};

const ShowDetailPage: FC<ShowDetailPageProps> = ({ params, fetchShowDetails, showDetails, error }) => {
  const showId = params.showId;

  useEffect(() => {

    fetchShowDetails(showId);
  }, [showId, fetchShowDetails]);


  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!showDetails) {
    return <div>Loading...</div>;
  }
  const imagePlaceholder = "https://incakoala.github.io/top9movie/film-poster-placeholder.png"
  return (
    <div className="mt-2">
      <Link className="flex items-center" to='/'><IoArrowBack />Back</Link>
      <h2 className="text-4xl font-semibold tracking-wide">{showDetails.name}</h2>
      <div className="flex space-x-3 my-2 bg-gray-300 p-2 rounded-sm">
        {showDetails.genres.map((genre: string, index: number) => (
          <GenrePill key={index} name={genre} />
        ))}
      </div>

      <div className="mt-2 flex">
        <img
          src={showDetails.image?.medium || imagePlaceholder}
          alt={showDetails.name}
          className="object-cover object-center w-full rounded-t-md h-72"
        />
        <div className="ml-2">
          <p>
            {showDetails.summary}
          </p>
          <p className="mt-2 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
            Rating: <span className="text-gray-700">{showDetails.rating.average}/10</span>
          </p>
        </div>
      </div>

      <div className="mt-2">
        <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
        <div className="flex flex-wrap">
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = (state: State) => ({
  showDetails: state.shows.showDetails,
  error: state.shows.error,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchShowDetails: (showId: string) => {
    dispatch(fetchShowDetails(showId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ShowDetailPage));
