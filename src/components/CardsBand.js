import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '@rhelements/rh-card/rh-card';
import '@rhelements/rh-cta/rh-cta';

class CardsBand extends Component {

  componentDidMount() {
    this.props.fetchCardsData();
  }

  renderContent() {
    if (this.props && this.props.cards) {
      return this.props.cards.map((item, index) => {
        return (
          <div className="flex-item card card-light" key={index}>
            <rh-card theme="light">
              <h2 slot="header">{ item.title }</h2>
              <p>{ item.desc }</p>
              <p><rh-cta priority={ item.priority } color={ item.color }><a href="{ item.buttonLink }">{ item.buttonTitle }</a></rh-cta></p>
            </rh-card>
          </div>
        );
      })
    } else {
      return <div>loading...</div>;
    }
  }

  render() {
    return(
      <div className="band">
        <div className="container">
          <h2 className="section-title text-center">{ this.props.title }</h2>
          <div className="flex-grid">
              { this.renderContent() }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.cardsBand;
}

export default connect(mapStateToProps, actions)(CardsBand);
