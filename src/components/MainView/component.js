import React from 'react';
import BrowseView from '../BrowseView';
import GenreSearch from '../GenreSearch';

const MainView = ({ headerTitle, fetchCategories, fetchUser, fetchSeedGenres, token}) => {

    fetchCategories(token);
    fetchUser(token);
    fetchSeedGenres(token);

	return (
        <div className="container">
            <div className="header">
                <h1>Spotify Recommends</h1>
            </div>
            <GenreSearch/>
        </div>
    
	);

};

export default MainView;