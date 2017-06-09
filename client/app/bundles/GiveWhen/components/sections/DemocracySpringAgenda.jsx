import PropTypes from 'prop-types';
import React from 'react';

export default class DemocracySpringAgenda extends React.Component {
  displayName: 'DemocracySpringAgenda';

  render () {
    return (
      <div className="section flex">
        <img src="/democracy-spring-capitol-small.jpg"
             className="big" />

        <div className="text color__calm big">
          <h3 className="content_headline">
            Support this campaign if you think the democrats must:
          </h3>

          <div style={{
            border: '2px solid white',
            width: '100%',
            margin: '10px 0'
          }} />

          <p style={{
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}>Fiercely resist Trump and his agenda of bigotry and greed</p>
          <p>a) Aggressively pursue impeachment</p>
          <p>b) Resist his voter suppression task force</p>
          <p>c) Filibuster appointees</p>

          <br/>

          <p style={{
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}>Embrace an unapologetically progressive agenda</p>
          <p>a) Support legislation to get big money out of politics, guarantee the right to vote, enact Medicare for all, combat climate change, ensure a living wage, end mass incarceration, protect immigrant families, close tax loopholes that benefit the wealthy, and make college tuition free.</p>
          <p>b) Resist and filibuster right-wing legislation attacking health care, voting rights, the planet, workers, immigrants, women, people of color, LGBTQ people, and the poor.</p>

          <br/>

          <p style={{
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}>Break with Big Money so they can represent everyday people</p>
          <p>a) Adopt the 76 Standard, stipulating that at least 76% of the money a candidate, campaign, or committee raises comes from grassroots donors giving less than $1,000 per two-year election cycle.</p>
          <p>b) Demand every member of the Democratic caucus support bills to overturn Citizens United, enact publicly funded elections, and strengthen voting rights.</p>
        </div>
      </div>
    );
  }
}
