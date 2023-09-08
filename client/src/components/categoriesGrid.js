import React, { Component } from 'react';

class CategoryGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    // Make an HTTP GET request to your API endpoint when the component mounts.
    fetch('http://localhost:5000/api/recipes/categories')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
      })
      .then((categories) => {
        this.setState({
          categories,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: 'There was a problem with the fetch operation.',
          loading: false,
        });
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { categories, loading, error } = this.state;

    return (
      <div>
        <h2>Recipe Categories</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ul>
            {categories.map((category) => (
              <li key={category.idCategory}>
                {category.strCategory}
                <br />
                <img src={`${category.strCategoryThumb}`} alt='Thumbnail'></img>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default CategoryGrid;
