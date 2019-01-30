import React from 'react';

import GithubIcon from 'Images/github_icon';
import MoreInfoIcon from 'Images/more_info';
import Modal, { MODAL_SIZES } from 'PresentationalComponents/Modal/Modal';
import Icon from 'PresentationalComponents/Icon/Icon';

const InfoModal = () => (
  <Modal size={MODAL_SIZES.SMALL}>
    <Modal.Content>
      <h3>DISCLAIMER ON ACCURACY:</h3>
      <p>
        Although effort has been made to provide accurate information in this app, I (the developer
        of this app) provide no guarantees as to the accuracy of content on this website/app. This
        is just information that I compiled via Google searches, etc. Some attempt was made to
        provide legitimate sources for information listed here, but inaccuracies may exist.
      </p>
      <h3>What is this guide for?</h3>
      <p>
        This is a guide for those that want to make decisions on what can be done as an individual
        to help prevent climate change. If you think there's things missing from here you think
        should be added, feel free to put in an issue on Github (or put in a pull request).
      </p>
      <p>
        Source code on GitHub:
        <br />
        <a href="https://github.com/aarron-lee/climate_change_pwa/">
          <Icon svg={GithubIcon} link />
        </a>
      </p>
    </Modal.Content>
    <Modal.OpenButton>
      {({ openModal }) => {
        return <Icon svg={MoreInfoIcon} onClick={openModal} fill="white" link />;
      }}
    </Modal.OpenButton>
  </Modal>
);

export default InfoModal;
