
const initialState = {
	selectedGenres: [],
	genres: [],
	searchText: ''
}


export const browseReducer = (state = initialState, action) => {
	switch (action.type) {
	case "FETCH_CATEGORIES_SUCCESS":
		return {
			...state,
			view: action.categories.items,
			fetchCategoriesError: false
		};

	case "FETCH_CATEGORIES_ERROR":
		return {
			...state,
			fetchCategoriesError: true
		};

	case "FETCH_NEW_RELEASES_SUCCESS":
		return {
			...state,
			view: action.newReleases.items,
			fetchNewReleasesError: false
		};

	case "FETCH_NEW_RELEASES_ERROR":
		return {
			...state,
			fetchNewReleasesError: true
		};

	case "FETCH_FEATURED_SUCCESS":
		return {
			...state,
			view: action.featured.items,
			fetchFeaturedError: false,
			fetchComplete: true
		};

	case "FETCH_FEATURED_ERROR":
		return {
			...state,
			fetchFeaturedError: true
        };
    case "FETCH_GENRES_SUCCESS":
        return {
			...state,
			fetchGenreError: false,
			fetchComplete: true,
            genres: action.genres.map((item, key) => {
				return {
					id: key,
					isSelected: false,
					name: item
				}
			})
        }
    case "SEARCH_GENRES": 
        return {
            ...state, 
            searchText: action.searchText
        }
	case "ADD_ITEM": 
        return {
            ...state,
            selectedGenres: [...state.selectedGenres, action.genre]
        }
	case "REMOVE_ITEM": 
        return {
            ...state,
            selectedGenres: state.selectedGenres.filter(item => item.name !== action.genre.name)
        }

	default:
		return state;
	}
};

export default browseReducer;