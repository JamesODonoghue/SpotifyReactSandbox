import BrowseView from "./component";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const mapStateToProps = (state) => {

	return {
		view: state.browseReducer.view,
		token: state.tokenReducer.token
	};

};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
	}, dispatch);
	
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseView);