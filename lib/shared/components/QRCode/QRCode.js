function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { isEqual } from "../../helpers";
import qrGenerator from 'qrcode-generator';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
var QRCode = /*#__PURE__*/function (_React$Component) {
  _inherits(QRCode, _React$Component);
  var _super = _createSuper(QRCode);
  function QRCode(props) {
    var _this;
    _classCallCheck(this, QRCode);
    _this = _super.call(this, props);
    _this.canvas = /*#__PURE__*/React.createRef();
    return _this;
  }
  _createClass(QRCode, [{
    key: "drawRoundedSquare",
    value:
    /**
     * Draw a rounded square in the canvas
     */
    function drawRoundedSquare(lineWidth, x, y, size, color, radii, fill, ctx) {
      ctx.lineWidth = lineWidth;
      ctx.fillStyle = color;
      ctx.strokeStyle = color;

      // Adjust coordinates so that the outside of the stroke is aligned to the edges
      y += lineWidth / 2;
      x += lineWidth / 2;
      size -= lineWidth;
      if (!Array.isArray(radii)) {
        radii = [radii, radii, radii, radii];
      }

      // Radius should not be greater than half the size or less than zero
      radii = radii.map(function (r) {
        r = Math.min(r, size / 2);
        return r < 0 ? 0 : r;
      });
      var rTopLeft = radii[0] || 0;
      var rTopRight = radii[1] || 0;
      var rBottomRight = radii[2] || 0;
      var rBottomLeft = radii[3] || 0;
      ctx.beginPath();
      ctx.moveTo(x + rTopLeft, y);
      ctx.lineTo(x + size - rTopRight, y);
      if (rTopRight) ctx.quadraticCurveTo(x + size, y, x + size, y + rTopRight);
      ctx.lineTo(x + size, y + size - rBottomRight);
      if (rBottomRight) ctx.quadraticCurveTo(x + size, y + size, x + size - rBottomRight, y + size);
      ctx.lineTo(x + rBottomLeft, y + size);
      if (rBottomLeft) ctx.quadraticCurveTo(x, y + size, x, y + size - rBottomLeft);
      ctx.lineTo(x, y + rTopLeft);
      if (rTopLeft) ctx.quadraticCurveTo(x, y, x + rTopLeft, y);
      ctx.closePath();
      ctx.stroke();
      if (fill) {
        ctx.fill();
      }
    }

    /**
     * Draw a single positional pattern eye.
     */
  }, {
    key: "drawPositioningPattern",
    value: function drawPositioningPattern(ctx, cellSize, offset, row, col, color) {
      var radii = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [0, 0, 0, 0];
      var lineWidth = Math.ceil(cellSize);
      var radiiOuter;
      var radiiInner;
      if (typeof radii !== 'number' && !Array.isArray(radii)) {
        radiiOuter = radii.outer || 0;
        radiiInner = radii.inner || 0;
      } else {
        radiiOuter = radii;
        radiiInner = radiiOuter;
      }
      var colorOuter;
      var colorInner;
      if (typeof color !== 'string') {
        colorOuter = color.outer;
        colorInner = color.inner;
      } else {
        colorOuter = color;
        colorInner = color;
      }
      var y = row * cellSize + offset;
      var x = col * cellSize + offset;
      var size = cellSize * 7;
      if (radiiOuter) return;
      // Outer box
      this.drawRoundedSquare(lineWidth, x, y, size, colorOuter, radiiOuter, false, ctx);
      if (radiiInner) return;
      // Inner box
      size = cellSize * 3;
      y += cellSize * 2;
      x += cellSize * 2;
      this.drawRoundedSquare(lineWidth, x, y, size, colorInner, radiiInner, true, ctx);
    }
  }, {
    key: "isInPositioninZone",
    value:
    /**
     * Is this dot inside a positional pattern zone.
     */
    function isInPositioninZone(col, row, zones) {
      return zones.some(function (zone) {
        return row >= zone.row && row <= zone.row + 7 && col >= zone.col && col <= zone.col + 7;
      });
    }
  }, {
    key: "transformPixelLengthIntoNumberOfCells",
    value: function transformPixelLengthIntoNumberOfCells(pixelLength, cellSize) {
      return pixelLength / cellSize;
    }
  }, {
    key: "isCoordinateInImage",
    value: function isCoordinateInImage(col, row, dWidthLogo, dHeightLogo, dxLogo, dyLogo, cellSize, logoImage) {
      if (logoImage) {
        var numberOfCellsMargin = 2;
        var firstRowOfLogo = this.transformPixelLengthIntoNumberOfCells(dxLogo, cellSize);
        var firstColumnOfLogo = this.transformPixelLengthIntoNumberOfCells(dyLogo, cellSize);
        var logoWidthInCells = this.transformPixelLengthIntoNumberOfCells(dWidthLogo, cellSize) - 1;
        var logoHeightInCells = this.transformPixelLengthIntoNumberOfCells(dHeightLogo, cellSize) - 1;
        return row >= firstRowOfLogo - numberOfCellsMargin && row <= firstRowOfLogo + logoWidthInCells + numberOfCellsMargin // check rows
        && col >= firstColumnOfLogo - numberOfCellsMargin && col <= firstColumnOfLogo + logoHeightInCells + numberOfCellsMargin; // check cols
      } else {
        return false;
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !isEqual(this.props, nextProps);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.update();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      var _this$props = this.props,
        value = _this$props.value,
        ecLevel = _this$props.ecLevel,
        enableCORS = _this$props.enableCORS,
        size = _this$props.size,
        quietZone = _this$props.quietZone,
        bgColor = _this$props.bgColor,
        fgColor = _this$props.fgColor,
        logoImage = _this$props.logoImage,
        logoWidth = _this$props.logoWidth,
        logoHeight = _this$props.logoHeight,
        logoOpacity = _this$props.logoOpacity,
        removeQrCodeBehindLogo = _this$props.removeQrCodeBehindLogo,
        qrStyle = _this$props.qrStyle,
        eyeRadius = _this$props.eyeRadius,
        eyeColor = _this$props.eyeColor;
      var qrCode = qrGenerator(0, ecLevel);
      qrCode.addData(QRCode.utf16to8(value));
      qrCode.make();
      var canvas = ReactDOM.findDOMNode(this.canvas.current);
      var ctx = canvas.getContext('2d');
      if (!ctx) return;
      var canvasSize = +size + 2 * +quietZone;
      var length = qrCode.getModuleCount();
      var cellSize = size / length;
      var scale = window.devicePixelRatio || 1;
      canvas.height = canvas.width = canvasSize * scale;
      ctx.scale(scale, scale);
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvasSize, canvasSize);
      var offset = +quietZone;
      var dWidthLogo = logoWidth || size * 0.2;
      var dHeightLogo = logoHeight || dWidthLogo;
      var dxLogo = (size - dWidthLogo) / 2;
      var dyLogo = (size - dHeightLogo) / 2;
      var positioningZones = [{
        row: 0,
        col: 0
      }, {
        row: 0,
        col: length - 7
      }, {
        row: length - 7,
        col: 0
      }];
      ctx.strokeStyle = fgColor;
      if (qrStyle === 'dots') {
        ctx.fillStyle = fgColor;
        var radius = cellSize / 2;
        for (var row = 0; row < length; row++) {
          for (var col = 0; col < length; col++) {
            if (qrCode.isDark(row, col) && !this.isInPositioninZone(row, col, positioningZones) && !(removeQrCodeBehindLogo && logoImage && this.isCoordinateInImage(row, col, dWidthLogo, dHeightLogo, dxLogo, dyLogo, cellSize, logoImage))) {
              ctx.beginPath();
              ctx.arc(Math.round(col * cellSize) + radius + offset, Math.round(row * cellSize) + radius + offset, radius / 100 * 75, 0, 2 * Math.PI, false);
              ctx.closePath();
              ctx.fill();
            }
          }
        }
      } else {
        for (var _row = 0; _row < length; _row++) {
          for (var _col = 0; _col < length; _col++) {
            if (qrCode.isDark(_row, _col) && !this.isInPositioninZone(_row, _col, positioningZones) && !(removeQrCodeBehindLogo && logoImage && this.isCoordinateInImage(_row, _col, dWidthLogo, dHeightLogo, dxLogo, dyLogo, cellSize, logoImage))) {
              ctx.fillStyle = fgColor;
              var w = Math.ceil((_col + 1) * cellSize) - Math.floor(_col * cellSize);
              var h = Math.ceil((_row + 1) * cellSize) - Math.floor(_row * cellSize);
              ctx.fillRect(Math.round(_col * cellSize) + offset, Math.round(_row * cellSize) + offset, w, h);
            }
          }
        }
      }

      // Draw positioning patterns
      for (var i = 0; i < 3; i++) {
        var _positioningZones$i = positioningZones[i],
          _row2 = _positioningZones$i.row,
          _col2 = _positioningZones$i.col;
        var radii = eyeRadius;
        var color = void 0;
        if (Array.isArray(radii)) {
          radii = radii[i];
        }
        if (typeof radii == 'number') {
          radii = [radii, radii, radii, radii];
        }
        if (!eyeColor) {
          // if not specified, eye color is the same as foreground, 
          color = fgColor;
        } else {
          if (Array.isArray(eyeColor)) {
            // if array, we pass the single color
            color = eyeColor[i];
          } else {
            color = eyeColor;
          }
        }
        this.drawPositioningPattern(ctx, cellSize, offset, _row2, _col2, color, radii);
      }
      if (logoImage) {
        var image = new Image();
        if (enableCORS) {
          image.crossOrigin = 'Anonymous';
        }
        image.onload = function () {
          ctx.save();
          ctx.globalAlpha = logoOpacity;
          ctx.drawImage(image, dxLogo + offset, dyLogo + offset, dWidthLogo, dHeightLogo);
          ctx.restore();
        };
        image.src = logoImage;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$id;
      var size = +this.props.size + 2 * +this.props.quietZone;
      return /*#__PURE__*/React.createElement('canvas', {
        id: (_this$props$id = this.props.id) !== null && _this$props$id !== void 0 ? _this$props$id : 'react-qrcode-logo',
        height: size,
        width: size,
        style: {
          height: size + 'px',
          width: size + 'px'
        },
        ref: this.canvas
      });
    }
  }], [{
    key: "utf16to8",
    value: function utf16to8(str) {
      var out = '',
        i,
        c;
      var len = str.length;
      for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if (c >= 0x0001 && c <= 0x007F) {
          out += str.charAt(i);
        } else if (c > 0x07FF) {
          out += String.fromCharCode(0xE0 | c >> 12 & 0x0F);
          out += String.fromCharCode(0x80 | c >> 6 & 0x3F);
          out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
        } else {
          out += String.fromCharCode(0xC0 | c >> 6 & 0x1F);
          out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
        }
      }
      return out;
    }
  }]);
  return QRCode;
}(React.Component);
_defineProperty(QRCode, "defaultProps", {
  value: 'https://reactjs.org/',
  ecLevel: 'M',
  enableCORS: false,
  size: 150,
  quietZone: 10,
  bgColor: '#FFFFFF',
  fgColor: '#000000',
  logoOpacity: 1,
  removeQrCodeBehindLogo: false,
  qrStyle: 'squares',
  eyeRadius: [0, 0, 0]
});
export { QRCode };