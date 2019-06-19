import GenreSearch from "./component";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchSeedGenres, searchGenres, addItem, removeItem } from '../../actions/browseActions';
import { getVisibleGenres } from "../../selectors";

const mapStateToProps = (state) => {
    return {
        token: state.tokenReducer.token,
        genres: getVisibleGenres(state),
        selectedGenres: state.browseReducer.selectedGenres
    };

};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchSeedGenres,
        searchGenres,
        addItem,
        removeItem
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(GenreSearch);