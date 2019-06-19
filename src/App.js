
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { fetchUser } from './actions/userActions';
import { setToken } from './actions/tokenActions';
// import { playSong, stopSong, pauseSong, resumeSong } from './actions/songActions';
import './App.css';

// import Header from './components/Header';
// import Footer from './components/Footer';
// import UserPlaylists from './components/UserPlaylists';
import MainView from './components/MainView';
// import ArtWork from './components/ArtWork';
// import MainHeader from './components/MainHeader';
// import SideMenu from './components/SideMenu';


class App extends Component {

	componentDidMount() {

		let hashParams = {};
		let e, r = /([^&;=]+)=?([^&;]*)/g,
			q = window.location.hash.substring(1);
		while ( e = r.exec(q)) {
			hashParams[e[1]] = decodeURIComponent(e[2]);
		}

		if(!hashParams.access_token) {
			window.location.href = 'https://accounts.spotify.com/authorize?client_id=ceb9be711d7d46d8bdec35c613d38016&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/callback';
		} else {
			this.props.setToken(hashParams.access_token);
		}

    }

    render() {
		return (

			<div className='App'>
				<div className='app-container'>

					<div className='left-side-section'>
					</div>

					<div className='main-section'>
						<div className='main-section-container'>
							<MainView/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		token: state.tokenReducer.token
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		setToken,
	},dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
