import { FC } from "react";
import SearchBar from "../Components/SearchBar";
import { connect } from "react-redux"
import ShowCard from "../Components/ShowCard";
import { Show } from "../models/Show";
import { ShowLoadedActions, ShowQueryChangeAction } from "../actions/Show";
import { State } from "../store";
import { showQuerySelector, showSelector } from "../selectors/Show";

type ShowDetailPageProps = {
  shows: Show[],
  query: string,
  showQueryChange : (query:string)=> void,
};
const ShowListPage:FC<ShowDetailPageProps>=({shows,query,showQueryChange})=> {
  return (
    <div className="mt-2">
      <SearchBar value={query} onChange={(event)=>{showQueryChange(event.target.value)}} />
      <div className="flex flex-wrap justify-center">
        {shows.map((s)=>(<ShowCard key = {s.id} show={s}></ShowCard>))}
      </div>
    </div>
  );
}
const mapStateToProps = (state:State) => {
  return{query: showQuerySelector(state),shows: showSelector(state)}
}
const mapDispatchToProps = {
  showLoaded : ShowLoadedActions,
  showQueryChange : ShowQueryChangeAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowListPage);
