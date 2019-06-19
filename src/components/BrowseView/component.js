import React from 'react';

const BrowseView = ({ view, token}) => {

	let browseView;

	if(view) {

		browseView = view.map((item, i) => {

			return(
				<li className='category-item' key={ i }>
					<div className='category-image'>
						<p className='category-name'>{ item.name }</p>
					</div>
				</li>
			);
		});
	}

	return (
		<ul className='browse-view-container'>
			{ browseView }
		</ul>
	);

};

export default BrowseView;