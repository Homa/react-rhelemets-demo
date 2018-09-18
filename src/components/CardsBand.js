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
          <div className="col-md-4 sol-sm-12 col-sm-push-bottom" key={index}>
            <rh-card theme="light">
              <h2 slot="header">{ item.title }</h2>
              <p>{ item.desc }</p>
              <p><rh-cta><a href="{ item.buttonLink }">{ item.buttonTitle }</a></rh-cta></p>
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
      <div className="band band-narrow crossed band-first">
        <div className="container">
          <h3>{ this.props.title }</h3>
          <div className="row push-top">
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
