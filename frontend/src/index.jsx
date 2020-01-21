import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/api/weather`);
    return response.json();
  } catch (error) {
    return {};
  }
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: '',
    };
  }

  async componentWillMount() {
    const weather = await getWeatherFromApi();
    this.setState({ icon: weather.icon.slice(0, -1),
      description: weather.description.slice(0, -1) });
  }

  render() {
    const { icon, description } = this.state;
    return (
      <div>
        <div className="icon">
          { icon && <img src={`/img/${icon}.svg`} alt={`${description}`} /> }
          <span>{ description }</span>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
