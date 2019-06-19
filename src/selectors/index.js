import { createSelector } from 'reselect'

const getSearchText = (state) => state.browseReducer.searchText
const getGenres = (state) => state.browseReducer.genres

export const getVisibleGenres = createSelector(
    [getSearchText, getGenres], 
    (searchText, genres) => {
        if(searchText === '') {
            return genres;
        } else {
            return genres.filter((item, key) => {
                return item.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
            })
        }
       
    }
)