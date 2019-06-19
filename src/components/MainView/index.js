import MainView from "./component";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchCategories, fetchNewReleases, fetchFeatured, fetchSeedGenres } from '../../actions/browseActions';
import { fetchUser } from '../../actions/userActions';

const mapStateToProps = (state) => {

    return {
        headerTitle: state.uiReducer.title,
        token: state.tokenReducer.token,
    };

};

const mapDispatchToProps = (dispatch) => {
    
    return bindActionCreators({
        fetchCategories,
        fetchNewReleases,
        fetchUser,
        fetchFeatured,
        fetchSeedGenres
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);