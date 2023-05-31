import React from 'react';
export var Loader = function Loader() {
  var isBrowser = typeof window !== "undefined";
  var lottieContainer = React.useRef(null);
  ;
  React.useEffect(function () {
    if (!!isBrowser) {
      var w = window;
      if (w.bodymovin) {
        w.bodymovin.loadAnimation({
          container: lottieContainer.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: 'https://assets10.lottiefiles.com/packages/lf20_phmllabo.json'
        });
      }
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center mb-[20px]"
  }, /*#__PURE__*/React.createElement("div", {
    ref: lottieContainer,
    className: "w-[200px] h-[200px]"
  }));
};