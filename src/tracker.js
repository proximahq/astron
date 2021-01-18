import {doNotTrack, attach} from '../utils';
(window => {
  if (!window) return;

  const {
    screen: {width, height},
    navigator: {language, userAgentData, userAgent},
    location: {hostname, pathname, search},
    document,
    history,
  } = window;

  // Detect
  const isBot =
    nav.webdriver ||
    window.__nightmare ||
    'phantom' in window ||
    /(bot|spider|crawl)/i.test(userAgent);

  const warn = msg => {
    if (console && console.warn) con.warn('Proxima:', msg);
  };
  const script = document.querySelector('script[data-site]');
  if (!script) return;

  const attr = key => script && script.getAttribute(key);
  const site = attr('data-site');
  const off = attr('data-autotrack-off');

  let currentRef = document.referrer;

  let currentUrl;

  const isDnt = doNotTrack();
  const isLocal =
    hostname.indexOf('.') == -1 || /^[0-9]+$/.test(hostname.replace(/\./g, ''));

  const track = () => {
    if (isLocal) return warn(`Not sending from:${hostname}`);
  };

  const trackEvent = () => {
    if (isLocal) return warn(`Not sending event from:${hostname}`);
  };

  const onPush = (state, title, url) => {
    currentRef = currentUrl;
    const newUrl = url.toString();

    if (newUrl.substring(0, 4) === 'http') {
      currentUrl = '/' + newUrl.split('/').splice(3).join('/');
    } else {
      currentUrl = newUrl;
    }

    track(currentUrl, currentRef);
  };

  if (!window.proxima) {
    const proxima = {};
    proxima.trackView = track;
    proxima.trackEvent = trackEvent;
    window.proxima = proxima;
  }

  if (!off) {
    history.pushState = hook(history, 'pushState', onPush);
    history.replaceState = hook(history, 'replaceState', onPush);
    track(currentUrl, ref);
  }
})(window);
