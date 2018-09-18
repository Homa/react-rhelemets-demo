import React, { Component } from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '@rhelements/rh-card/rh-card';
import '@rhelements/rh-cta/rh-cta';

class AddCard extends Component {

  componentDidMount() {
    this.props.fetchCardsData();
  }

  constructor() {
    super();
    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  addCard() {
    this.props.addCard(this.props.index);
  }

  removeCard(that) {
    that.props.removeCard(that.props.index);
  }

  renderContent() {
    if (this.props && this.props.allCards && this.props.index > 0) {
      let cards = [];
      for (var i = 0; i < this.props.index; i++) {
        cards.push(
          <div className="flex-item card card-light" key={i}>
            <rh-card theme="light">
              <h2 slot="header">{ this.props.allCards[i].title }</h2>
              <p>{ this.props.allCards[i].desc }</p>
              <p><rh-cta><a href="{ item.buttonLink }">{ this.props.allCards[i].buttonTitle }</a></rh-cta></p>
            </rh-card>
          </div>
        );
      };

      return cards;
    }
  }

  render() {
    return(
      <div className="band band-border-top">
        <div className="container">
          <div className="push-bottom">
            <button onClick={ this.addCard }>
              Add Card
            </button>
          </div>
          <div className="flex-grid">
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.addCards;
}

export default connect(mapStateToProps, actions)(AddCard);
