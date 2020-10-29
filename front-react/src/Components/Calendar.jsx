import React from 'react';
import CalendarHeader from './CalendarHeader';
// import CalendarMain from './CalendarMain';


class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    }
  }


componentDidMount() {
    fetch('http://localhost:3001')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          products: result.products
        });
        console.log(result)
    },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>;
    } else if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className='calendar'>
        <CalendarHeader
        productData={ this.state.products }
        />
        <CalendarMain
        
        />
      </div>
    );
  }
  }
}

export default Calendar