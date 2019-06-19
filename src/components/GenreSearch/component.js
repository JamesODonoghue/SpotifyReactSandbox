
import React, { Component } from 'react';

class GenreSearch extends Component {

    componentDidMount() {

    }

	updateSearchTerm = (e) => {
		// this.setState({
		// 	searchTerm: e.target.value
        // });

        this.props.searchGenres(e.target.value);

    }
    
    // handleSelect = (e, genre) => {

    //     if(this.props.selectedGenres.find(item => item === genre)){
    //         genre.isSelected = true;
    //         this.props.removeItem({name: genre})
    //     } else {
    //         this.props.addItem({name: genre})
    //     }
        
    // }

    handleChange = (e, genre) => {

        if(this.props.selectedGenres.find(item => item.name === genre.name)){
            genre.isSelected = false;
            this.props.removeItem(genre);
        } else {
            genre.isSelected = true;
            this.props.addItem(genre)
        }

    }

	render() {

        const { filteredGenres, genres } = this.props;
        let genreView;

        console.log(this.props.selectedGenres);
        const Genre = (genre) => {
            return (
                <div className='list-group-item'>
                    <div className='form-check'>
                        <input checked={genre.isSelected} onChange={(e) => this.handleChange(e, genre)} className="form-check-input" type="checkbox" value={genre} id="defaultCheck1"></input>
                    </div>
                    <div key={genre.key} className='filter-item-text'>{genre.name}</div>
                </div>
            )
        }

        genreView = genres.map((genre, key) => {
            return Genre(genre)
        }) 
		return (
            <div className='multi-select-container container'>
                <div className='input-group input-group-lg'>
                    <input className="form-control" onChange={this.updateSearchTerm} type='text' placeholder='Search...' />
                </div>
                <div className='list-group'>
                    {genreView}
                </div>
             
            </div>
           
		);
	}
}

export default GenreSearch