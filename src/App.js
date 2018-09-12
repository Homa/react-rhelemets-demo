import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions';
import './rhelements/rh-card'
import './rhelements/rh-button'
import './rhelements/rh-cta'
import './rhelements/rh-icon'

class App extends Component {

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

    return (
      <div className="App">
        <div className="band band-narrow crossed band-first">
          <div className="container">
            <h3>{ this.props.data.title }</h3>
            <div className="row push-top">
              { this.renderContent() }
            </div>
          </div>
        </div>
        <div id="labs" className="band band-alt band-narrow">
          <div className="container">
            <div>
              <div aria-label="false">
                <h2 className="section-title section-title-red">Red Hat Access Labs</h2>
              </div>
            </div>
            <div>
              <div className="row push-top">
                <div className="col-sm-6">
                  <div>
                    <div className="feature feature-w-icon feature-flush">
                      <span className="rh-icon-hosting-support feature-icon" aria-hidden="true"></span>
                      <div>
                        <h3 className="subheading subheading-flush" aria-label="false">
                          <a  href="https://access.redhat.com/labs/registrationassistant/" >Registration Assistant</a>
                        </h3>
                      </div>
                      <div>
                        <div aria-label="false" >A simple guide to registering Red Hat Enterprise Linux systems.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div>
                    <div className="feature feature-w-icon feature-flush">
                      <span className="labs-icon-performance feature-icon" aria-hidden="true"></span>
                      <div>
                        <h3 className="subheading subheading-flush" aria-label="false">
                          <a href="https://access.redhat.com/labs/kickstartconfig/" >Kickstart Generator</a>
                        </h3>
                      </div>
                      <div>
                        <div aria-label="false">Create optimal Kickstart configurations for Red Hat Enterprise Linux 5, 6, or 7 that are tailored to meet specific deployment goals.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
          <div className="row">
            <div className="col-sm-6">
              <div>
                <div className="feature feature-w-icon feature-flush">
                  <rh-icon icon="rh-icon-server feature-icon" data-size="2x" data-color="white"></rh-icon>
                  <div>
                    <h3 className="subheading subheading-flush" aria-label="false">
                      <a href="https://access.redhat.com/labs/kdumphelper/" >Kdump Helper</a>
                    </h3>
                  </div>
                  <div>
                    <div aria-label="false" >Configure Kdump to dump vmcores.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div>
                <div className="feature feature-w-icon feature-flush">
                  <span className="rh-icon-gears feature-icon" aria-hidden="true"></span>
                  <div>
                    <h3 className="subheading subheading-flush" aria-label="false">
                      <a href="https://access.redhat.com/labs/networkbondinghelper/" >Network Bonding Helper </a>
                    </h3>
                  </div>
                  <div>
                    <div aria-label="false" >Configure two or more network interfaces to act as one "bonded" interface, simultaneously increasing the bandwidth and providing redundancy.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
            <div>
              <div className="row text-center">
                <div className="col-md-12">
                  <div>
                    <a className="btn btn-open-white prima-editable" href="https://access.redhat.com/labs/#/?product=rhel#all-labs-main">Red Hat Enterprise Linux Labs</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(data) {
  return data;
}

export default connect(mapStateToProps, actions)(App);
