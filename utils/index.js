export const doNotTrack = () => {
  const {doNotTrack, navigator, external} = window;

  const msTracking = () => {
    return (
      external &&
      typeof external.msTrackingProtectionEnabled === 'function' &&
      external.msTrackingProtectionEnabled()
    );
  };

  const dnt =
    doNotTrack ||
    navigator.doNotTrack ||
    navigator.msDoNotTrack ||
    msTracking();

  return dnt === true || dnt === 1 || dnt === 'yes' || dnt === '1';
};

export const attach = (_this, method, callback) => {
  const orig = _this[method];

  return (...args) => {
    callback.apply(null, args);

    return orig.apply(_this, args);
  };
};
