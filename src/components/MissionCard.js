import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <ul>
          <li><p data-testid="mission-name">{name}</p></li>
          <li><p data-testid="mission-year">{year}</p></li>
          <li><p data-testid="mission-country">{country}</p></li>
          <li><p data-testid="mission-destination">{destination}</p></li>
        </ul>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
