import React from 'react';

import GithubIcon from 'Images/github_icon';
import Icon from 'PresentationalComponents/Icon/Icon';

const Home = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <p>Welcome to the Climate Change Guide!</p>
    <p>
      This is a <strong>progressive web app (PWA)</strong> with some basic information on what
      individual decisions you can make to help prevent climate change.
    </p>
    <p>
      My main source of inspiration for this guide is{' '}
      <a href="https://www.reddit.com/r/Futurology/comments/6rbzoz/heres_how_we_can_lower_our_personal_greenhouse/">
        this reddit thread
      </a>
      , I pretty much am just adding some more details + pictures + charts.
    </p>
    <figure>
      <img
        src="/static/home.jpg"
        width="100%"
        height="auto"
        style={{ maxWidth: '600px', alignSelf: 'center' }}
      />
      <figcaption>
        Image from Bloomberg{' '}
        <a href="https://www.geospatialworld.net/blogs/brazil-abandons-hosting-un-cop25/">source</a>
      </figcaption>
    </figure>
    <p>
      What is a Progressive Web App? It’s an application hosted on a web browser. What makes it cool
      is that you can download it, so <strong>it can work offline.</strong>
    </p>
    <p>
      This project was originally done just as a small side project to learn more about PWAs. If you
      want to learn more about PWAs, you should go check out Google's documentation{' '}
      <a href="https://developers.google.com/web/progressive-web-apps/">here</a>
    </p>
    <div>
      Source code:
      <a href="https://github.com/aarron-lee/climate_change_pwa/">
        <Icon svg={GithubIcon} link />
      </a>
    </div>
    <p>If you're curious about if this actually works offline, give it a shot!</p>
    <p>
      If you're using a{' '}
      <a href="https://jakearchibald.github.io/isserviceworkerready/">supported browser</a>, try
      turning off your wifi/internet and navigating to a different page on this site. You should
      still see stuff render (though some pictures might be missing, since some of them do need a
      internet connection for the initial load). Depending on your operating system (Android, etc),
      you can even add a shortcut to your desktop!
    </p>
    <p>
      <h5>
        Disclaimer: Although effort has been made to provide accurate information in this app, I
        (the developer of this app) provide no guarantees as to the accuracy of content on this
        website/app. This is just information that I compiled via Google searches, etc. Some attempt
        was made to provide legitimate sources for information listed here, but inaccuracies may
        exist.
      </h5>
    </p>
  </div>
);

export default Home;
