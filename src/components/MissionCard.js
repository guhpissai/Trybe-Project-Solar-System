import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className='missions' data-testid="mission-card">
        <h2 data-testid="mission-name">{name}</h2>
        <div className='mission-info'>
          <div className='info-card'>
            <p className='info-1' data-testid="mission-year">{year}</p>
            <p className='info-2' data-testid="mission-country">{country}</p>
          </div>
            <p className='info-3' data-testid="mission-destination">{destination}</p>
        </div>
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
