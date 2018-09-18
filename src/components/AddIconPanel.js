import React from 'react';
import '@rhelements/rh-icon-panel/rh-icon-panel';
import '@rhelements/rh-icon/rh-icon';
import '@rhelements/rh-cta/rh-cta';

const AddIconPanel = () => {
  return (
    <div className="band band-alt">
      <div className="container">

        <div className="row" aria-label="false">
          <h2 className="section-title section-title-red text-center">Red Hat Access Labs</h2>
        </div>

        <div className="row push-top">
          <div className="col-sm-6">
            <rh-icon-panel icon="rh-icon-server">
              <h3 slot="header"><a href="https://access.redhat.com/labs/registrationassistant/">Registration Assistant</a></h3>
              A simple guide to registering Red Hat Enterprise Linux systems.
              <rh-cta slot="footer"><a href="https://access.redhat.com/labs/registrationassistant/">Learn more</a></rh-cta>
            </rh-icon-panel>
          </div>
          <div className="col-sm-6">
            <rh-icon-panel icon="rh-icon-server">
              <h3 slot="header"><a href="https://access.redhat.com/labs/kickstartconfig/">Kickstart Generator</a></h3>
              Create optimal Kickstart configurations for Red Hat Enterprise Linux 5, 6, or 7 that are tailored to meet specific deployment goals.
              <rh-cta slot="footer"><a href="https://access.redhat.com/labs/kickstartconfig/">Learn more</a></rh-cta>
            </rh-icon-panel>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md-12 push-bottom push-top">
            <a className="btn btn-open-white" href="https://access.redhat.com/labs/#/?product=rhel#all-labs-main">Red Hat Enterprise Linux Labs</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddIconPanel;
