import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../rhelements/rh-card'
import '../rhelements/rh-button'
import '../rhelements/rh-cta'

class CardsBand extends Component {

  componentDidMount() {
    this.props.fetchCardsData();
  }

  renderContent() {
    if (this.props && this.props.data.cards) {
      return this.props.data.cards.map((item, index) => {
        return (
          <div className="col-md-4 sol-sm-12 col-sm-push-bottom" key="{index}">
            <rh-card theme="light">
              <h2 slot="header">{ item.title }</h2>
              <p>{ item.desc }</p>
              <p><rh-button><a href="{ item.buttonLink }">{ item.buttonTitle }</a></rh-button></p>
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
          <h3>{ this.props.data.title }</h3>
          <div className="row push-top">
            { this.renderContent() }
          </div>
        </div>
      </div>
    );
  }

}

function mapStateToProps(data) {
  return data;
}

export default connect(mapStateToProps, actions)(CardsBand);
