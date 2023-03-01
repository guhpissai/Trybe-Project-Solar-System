import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="solar-container">
        <Title headline="Planetas" />
        <div className="solar-system" data-testid="solar-system">
          { planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetImage={ planet.image }
              planetName={ planet.name }
            />
          )) }
        </div>
        <div className="line" />
      </div>
    );
  }
}

export default SolarSystem;
