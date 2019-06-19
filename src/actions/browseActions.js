export const fetchCategoriesSuccess = (categories) => {
	return {
		type: 'FETCH_CATEGORIES_SUCCESS',
		categories
	};
};

export const fetchCategoriesError = () => {
	return {
		type: 'FETCH_CATEGORIES_ERROR'
	};
};

export const fetchGenresSuccess = (genres) => {
    return {
        type: 'FETCH_GENRES_SUCCESS',
        genres
    }
}

export const fetchGenresError = () => {
	return {
		type: 'FETCH_GENRES_ERROR'
	};
};

export const searchGenres = (searchText) => {
    return {
        type: 'SEARCH_GENRES',
        searchText
    }
}

export const addItem = (genre) => {
    return {
        type: 'ADD_ITEM',
        genre: genre
    }
}

export const removeItem = (genre) => {
    return {
        type: 'REMOVE_ITEM',
        genre: genre
    }
}

export const fetchSeedGenres = (accessToken) => {
    return dispatch => {
        const request = new Request(`https://api.spotify.com/v1/recommendations/available-genre-seeds`, {
            headers: new Headers({
				'Authorization': 'Bearer ' + accessToken
			})
        });
        fetch(request).then(res => {
			return res.json();
		}).then(res => {
			dispatch(fetchGenresSuccess(res.genres));
		}).catch(err => {
			dispatch(fetchGenresError(err));
		});
    }
}

export const fetchCategories = (accessToken) => {
	return dispatch => {
		const request = new Request(`https://api.spotify.com/v1/browse/categories`, {
			headers: new Headers({
				'Authorization': 'Bearer ' + accessToken
			})
		});
		fetch(request).then(res => {
			return res.json();
		}).then(res => {
			dispatch(fetchCategoriesSuccess(res.categories));
		}).catch(err => {
			dispatch(fetchCategoriesError(err));
		});
	};
};

export const fetchNewReleasesSuccess = (newReleases) => {
	return {
		type: 'FETCH_NEW_RELEASES_SUCCESS',
		newReleases
	};
};

export const fetchNewReleasesError = () => {
	return {
		type: 'FETCH_NEW_RELEASES_ERROR'
	};
};

export const fetchNewReleases = (accessToken) => {
	return dispatch => {
		const request = new Request(`https://api.spotify.com/v1/browse/new-releases`, {
			headers: new Headers({
				'Authorization': 'Bearer ' + accessToken
			})
		});
		fetch(request).then(res => {
			return res.json();
		}).then(res => {
			dispatch(fetchNewReleasesSuccess(res.albums));
		}).catch(err => {
			dispatch(fetchNewReleasesError(err));
		});
	};
};

export const fetchFeaturedSuccess = (featured) => {
	return {
		type: 'FETCH_FEATURED_SUCCESS',
		featured
	};
};

export const fetchFeaturedError = () => {
	return {
		type: 'FETCH_FEATURED_ERROR'
	};
};

export const fetchFeatured = (accessToken) => {
	return dispatch => {
		const request = new Request(`https://api.spotify.com/v1/browse/featured-playlists`, {
			headers: new Headers({
				'Authorization': 'Bearer ' + accessToken
			})
		});
		fetch(request).then(res => {
			return res.json();
		}).then(res => {
			dispatch(fetchFeaturedSuccess(res.playlists));
		}).catch(err => {
			dispatch(fetchFeaturedError(err));
		});
	};
};