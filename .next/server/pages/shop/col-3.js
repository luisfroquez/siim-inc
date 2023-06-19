(() => {
var exports = {};
exports.id = "pages/shop/col-3";
exports.ids = ["pages/shop/col-3"];
exports.modules = {

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": true,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": true,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/shop/col-3.js":
/*!*****************************!*\
  !*** ./pages/shop/col-3.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_layouts_Shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/layouts/Shop */ "./src/layouts/Shop.js");

var _jsxFileName = "C:\\Web SIIM\\vue\\pages\\shop\\col-3.js";


const ShopCol3 = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layouts_Shop__WEBPACK_IMPORTED_MODULE_1__.default, {
    col: "col-xl-4 col-lg-4 col-md-4",
    banner: "/img/bg/bannerID.png"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopCol3);

/***/ }),

/***/ "./src/components/Paggination.js":
/*!***************************************!*\
  !*** ./src/components/Paggination.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\components\\Paggination.js";

const Paggination = ({
  setActive,
  active,
  length,
  sort
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "row",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-12",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "basic-pagination basic-pagination-2 text-center",
        children: length ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              onClick: e => {
                setActive(0);
                e.preventDefault();
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fas fa-angle-double-left"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 9,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 8,
            columnNumber: 15
          }, undefined), Array(Math.ceil(length / sort)).fill("p").map((m, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: `${active === i ? "active" : ""}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              onClick: e => {
                setActive(i);
                e.preventDefault();
              },
              children: i < 9 ? `0${i + 1}` : i + 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 21
            }, undefined)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 19
          }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              onClick: e => {
                setActive(Array(Math.ceil(length / sort)).length - 1);
                e.preventDefault();
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fas fa-angle-double-right"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 13
        }, undefined) : ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paggination);

/***/ }),

/***/ "./src/components/product/Product.js":
/*!*******************************************!*\
  !*** ./src/components/product/Product.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ "react-hot-toast");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_action_utilis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/action/utilis */ "./src/redux/action/utilis.js");
/* harmony import */ var _ProductModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductModal */ "./src/components/product/ProductModal.js");

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\components\\product\\Product.js";







const Product = ({
  product,
  wrapperPadding0,
  addToCart,
  addWishlist,
  compare,
  removeCompare
}) => {
  const wishlist = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.utilis.wishlist);
  const compares = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.utilis.compares);
  const {
    0: quickView,
    1: setQuickView
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: addCompare,
    1: setAddCompare
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: addCart,
    1: setaddCart
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: addWishlist_,
    1: setAddWishlist_
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  const onClickCompare = e => {
    e.preventDefault();
    setAddCompare(true);
    const exitsItem = compares.find(compare => compare.id === product.id);

    if (compares.length < 3) {
      if (exitsItem) {
        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error("Quitar elemento de comparación.");
        compare(product);
      } else {
        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success("Agregar elemento en Comparar.");
        compare(product);
      }
    } else {
      if (exitsItem) {
        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error("Quitar elemento de comparación.");
        removeCompare(product);
      } else {
        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error("Comparar está lleno, elimine el elemento de la lista de comparación.");
      }
    }
  };

  const onClickCart = e => {
    e.preventDefault();
    addToCart(product);
    setaddCart(true);
    react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success("Añadir artículo en el carrito.");
  };

  const onClickWishlist = e => {
    e.preventDefault();
    addWishlist(product);
    setAddWishlist_(true);
    const wishlist_ = wishlist.find(wishlist => wishlist.id === product.id);

    if (wishlist_) {
      react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error("Eliminar artículo en la lista de favoritos.");
    } else {
      react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success("Añadir artículo en lista de favoritos.");
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `product-wrapper mb-50 ${wrapperPadding0 ? "p-0" : ""}`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductModal__WEBPACK_IMPORTED_MODULE_6__.default, {
      show: quickView,
      handleClose: () => setQuickView(false),
      product: product
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "product-img mb-25",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/shop/${product.id}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: product.img1,
            alt: "img 1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "secondary-img",
            src: product.img2,
            alt: "imge 2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "product-action text-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          onClick: e => onClickCart(e),
          title: "Shoppingb Cart",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "flaticon-shopping-cart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          onClick: e => {
            e.preventDefault();
            setQuickView(true);
          },
          title: "Quick View",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "flaticon-eye"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          onClick: e => onClickCompare(e),
          "data-toggle": "tooltip",
          "data-placement": "right",
          title: "Compare",
          className: compares.find(compare => compare.id === product.id) ? "active" : "",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "flaticon-compare"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "sale-tag",
        children: [product.new && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "new",
          children: "Nuevo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 27
        }, undefined), product.sale && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "sale",
          children: "Oferta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 28
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "product-content",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "pro-cat mb-10",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: `/shop/${product.id}`,
          children: product.brand
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: `/shop/${product.id}`,
          children: product.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "product-meta",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pro-price",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: `$${Number(product.mainPrice).toFixed(3)} CLP`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, undefined), product.price && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "old-price",
            children: `$${Number(product.price).toFixed(3)} CLP`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "product-wishlist",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          onClick: e => onClickWishlist(e),
          className: ` ${wishlist && wishlist.find(pro => pro.id === product.id) ? "active" : ""} `,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "far fa-heart",
            title: "Wishlist"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(null, {
  addToCart: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_5__.addToCart,
  addWishlist: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_5__.addWishlist,
  getWishlist: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_5__.getWishlist,
  compare: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_5__.compare,
  removeCompare: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_5__.removeCompare
})(Product));

/***/ }),

/***/ "./src/components/product/ProductListView.js":
/*!***************************************************!*\
  !*** ./src/components/product/ProductListView.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ "react-hot-toast");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_action_utilis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/action/utilis */ "./src/redux/action/utilis.js");
/* harmony import */ var _ProductModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductModal */ "./src/components/product/ProductModal.js");

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\components\\product\\ProductListView.js";







const ProductListView = ({
  product,
  col5,
  addToCart,
  addWishlist
}) => {
  const wishlist = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.utilis.wishlist);
  const {
    0: quickView,
    1: setQuickView
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: addCart,
    1: setaddCart
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: addWishlist_,
    1: setAddWishlist_
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  const onClickCart = e => {
    e.preventDefault();
    addToCart(product);
    setaddCart(true);
    react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success("Add item in Cart.");
  };

  const onClickWishlist = e => {
    e.preventDefault();
    addWishlist(product);
    setAddWishlist_(true);
    const wishlist_ = wishlist.find(wishlist => wishlist.id === product.id);

    if (wishlist_) {
      react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error("Remove item in wishlist.");
    } else {
      react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success("Add item in wishlist.");
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "row",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductModal__WEBPACK_IMPORTED_MODULE_6__.default, {
      show: quickView,
      handleClose: () => setQuickView(false),
      product: product
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `col-xl-${col5 ? 5 : 4} col-lg-${col5 ? 5 : 4}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "product-wrapper mb-30",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "product-img",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: `/shop/${product.id}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: product.img1,
                alt: "img 1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                className: "secondary-img",
                src: product.img2,
                alt: "imge 2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "sale-tag",
            children: [product.new && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "new",
              children: "new"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 31
            }, undefined), product.sale && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "sale",
              children: "sale"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 32
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `col-xl-${col5 ? 7 : 8} col-lg-${col5 ? 7 : 8}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "product-content pro-list-content pr-0 mb-50",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pro-cat mb-10",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: `/shop/${product.id}`,
            children: "decor, "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: `/shop/${product.id}`,
            children: product.brand
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: `/shop/${product.id}`,
            children: product.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "product-meta mb-10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "pro-price",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: `$${Number(product.mainPrice).toFixed(2)} USD`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, undefined), product.price && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "old-price",
              children: `$${Number(product.price).toFixed(2)} USD`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "product-action",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            title: "Shoppingb Cart",
            onClick: e => onClickCart(e),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "flaticon-shopping-cart"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            onClick: e => {
              e.preventDefault();
              setQuickView(true);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "flaticon-eye"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: ` ${wishlist && wishlist.find(pro => pro.id === product.id) ? "active" : ""} `,
            onClick: e => onClickWishlist(e),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "flaticon-like"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(null, {
  addToCart: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_5__.addToCart,
  addWishlist: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_5__.addWishlist
})(ProductListView));

/***/ }),

/***/ "./src/components/product/ProductModal.js":
/*!************************************************!*\
  !*** ./src/components/product/ProductModal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ "react-hot-toast");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_action_utilis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/action/utilis */ "./src/redux/action/utilis.js");

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\components\\product\\ProductModal.js";





const ProductModal = ({
  show,
  handleClose,
  product,
  carts,
  wishlists,
  addToCart,
  addWishlist,
  decreaseCart
}) => {
  const size = ["L", "M", "X", "XL", "XXL"];
  const cart = product && carts && carts.find(cart => cart.id === product.id);
  const wishlist = product && wishlists && wishlists.find(wishlist => wishlist.id === product.id);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    show: show,
    onHide: handleClose,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-xl-6 col-lg-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Tab.Container, {
            defaultActiveKey: "tum-0",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "product-details-img mb-10",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Tab.Content, {
                id: "myTabContentpro",
                children: product && product.images.map((img, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Tab.Pane, {
                  eventKey: `tum-${i}`,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "product-large-img",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                      src: img.src,
                      alt: "tum"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 38,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 25
                  }, undefined)
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 23
                }, undefined))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "shop-thumb-tab ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Nav, {
                as: "ul",
                children: product && product.images.map((img, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Nav.Item, {
                  as: "li",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Nav.Link, {
                    as: "a",
                    href: "#",
                    onClick: e => e.preventDefault(),
                    eventKey: `tum-${i}`,
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                      src: img.src,
                      alt: "Tum"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 56,
                      columnNumber: 27
                    }, undefined), " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 25
                  }, undefined)
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 23
                }, undefined))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-xl-6 col-lg-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "product-details ",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "details-cat mb-10 d-flex align-items-center justify-content-between",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#",
                  children: "decor,"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#",
                  children: product && product.brand
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fa fa-times modal-icon ",
                onClick: () => handleClose()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: "pro-details-title mb-15 fs-30",
              children: product && product.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "details-price mb-10 fs-25",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: ["$", Number(product && product.mainPrice).toFixed(2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, undefined), product && product.price && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "old-price",
                children: ["$", Number(product.price).toFixed(2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "product-variant ",
              children: [product && product.colors && product.colors.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "product-color variant-item modal-p-15",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "variant-name",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: "Colors"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  className: "shop-link shop-color",
                  children: product.colors.map(color => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        className: color
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 99,
                        columnNumber: 29
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 27
                    }, undefined)
                  }, color, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 25
                  }, undefined))
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 19
              }, undefined), product && product.size && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "product-size variant-item modal-p-15",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "variant-name",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: "size"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  className: "shop-link shop-size",
                  children: size && size.map(size => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    className: size.toLowerCase() === product.size.toLowerCase() ? "active" : "",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: size
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 123,
                      columnNumber: 29
                    }, undefined)
                  }, size, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 27
                  }, undefined))
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "product-desc variant-item modal-p-15",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "product-info-list variant-item modal-p-15",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    className: "text-capitalize",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: "Brands:"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 142,
                      columnNumber: 23
                    }, undefined), " ", product && product.brand]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: "Product Code:"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 23
                    }, undefined), " ", product && product.category[0].split("")[0] + product.id]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: "Reward Points:"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 149,
                      columnNumber: 23
                    }, undefined), " 100"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: "Stock:"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 152,
                      columnNumber: 23
                    }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "in-stock",
                      children: product && product.stock ? "In Stock" : "Out Of Stock"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 153,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "product-action-details variant-item modal-p-15",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "product-details-action d-flex",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "product-quantity",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "cart-plus-minus",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                        children: cart ? cart.qty : 1
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 163,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "dec qtybutton",
                        onClick: () => {
                          cart && cart.qty !== 1 && decreaseCart(cart);
                        },
                        children: "-"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 164,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "inc qtybutton",
                        onClick: () => {
                          addToCart(product);
                          react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default().success("Successfully add to cart.");
                        },
                        children: "+"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 172,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 162,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 161,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                    className: `${wishlist ? "active" : ""} details-action-icon`,
                    type: "submit",
                    onClick: () => {
                      addWishlist(product);
                      react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default().success("Successfully add item in wishlist.");
                    },
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "fas fa-heart"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 193,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                    className: "details-action-icon",
                    type: "submit",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "fas fa-hourglass"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 196,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 195,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 19
                }, undefined), !cart && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "details-cart mt-20",
                  onClick: () => {
                    addToCart(product);
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default().success("Successfully add to cart.");
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                    className: "btn theme-btn",
                    children: "purchase now"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 207,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};

const mapStateToProps = state => ({
  carts: state.utilis.carts,
  wishlists: state.utilis.wishlist
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, {
  addToCart: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_4__.addToCart,
  addWishlist: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_4__.addWishlist,
  decreaseCart: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_4__.decreaseCart
})(ProductModal));

/***/ }),

/***/ "./src/components/product/filter/ColorFilter.js":
/*!******************************************************!*\
  !*** ./src/components/product/filter/ColorFilter.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.js");

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\components\\product\\filter\\ColorFilter.js";



const ColorFilter = ({
  filterByColor,
  setActive_
}) => {
  const colors = ["black", "green", "blue", "white", "red", "gray"];
  const {
    0: active,
    1: setActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  const activeFun = value => {
    filterByColor(value);
    setActive_();
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.clickToActive)(active, value, setActive);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "shop-widget",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      className: "shop-title",
      children: "color"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "shop-link",
      children: colors && colors.map(color => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "text-capitalize c-pointer",
          onClick: () => activeFun(color),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: `${color} ${active.includes(color) ? "" : "box-shadow-none"}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 17
          }, undefined), " ", color]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 15
        }, undefined)
      }, color, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorFilter);

/***/ }),

/***/ "./src/components/product/filter/Filter.js":
/*!*************************************************!*\
  !*** ./src/components/product/filter/Filter.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_action_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/action/filter */ "./src/redux/action/filter.js");
/* harmony import */ var _ColorFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ColorFilter */ "./src/components/product/filter/ColorFilter.js");
/* harmony import */ var _FilterByCheckBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FilterByCheckBox */ "./src/components/product/filter/FilterByCheckBox.js");
/* harmony import */ var _FilterByTags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterByTags */ "./src/components/product/filter/FilterByTags.js");
/* harmony import */ var _PriceFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PriceFilter */ "./src/components/product/filter/PriceFilter.js");

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\components\\product\\filter\\Filter.js";








const Filter = ({
  filterByName,
  search,
  filterByBrand,
  filterByCatagory,
  filterBySize,
  filterByPrice,
  filterByColor,
  setActive_,
  filterByTags,
  products
}) => {
  const size = ["L", "M", "X", "XL", "XXL"],
        brand = ["SIIM distribuidora"],
        category = ["Sistemas de Protección Contra Incendio", "Detección de Incendio", "Aspiración", "Accesorios", "Canastillos", "Detectores de Flujo", "Extinción de Incendio", "Extintores", "Fittings", "Flanges", "Cañerías", "Hierro Maleable", "Palancas", "Sirenas y Balizas", "Direccionable", "Fotoeléctricos", "PernosU", "Ranurado", "Straps", "Soportacion", "Tee Mecanicas", "Uniones", "Juntas de Dilatacion", "Manometros", "Mangueras", "Rosetas", "Storz", "Sprinklers", "Valvulas", "Electronica", "Citofonia", "Control de Acceso", "Computación", "Cables", "Adaptadores", "Ángulos", "Ferreteria", "Abrazaderas", "Cajas", "Cintas", "Candados", "EPP", "Espárragos", "Herramientas", "Líquidos/Químicos", "Mangueras", "Riel", "Soldadura", "Teflón"];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "col-xl-4 col-lg-4",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "sidebar-box",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "shop-widget",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "shop-title",
          children: "Buscar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          action: "#",
          className: "shop-search",
          onSubmit: e => e.preventDefault(),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            value: search,
            onChange: e => filterByName(e.target.value),
            placeholder: "Buscar producto...."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "fa fa-search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterByCheckBox__WEBPACK_IMPORTED_MODULE_5__.default, {
        title: "Categorias",
        arr: category,
        funtion: filterByCatagory,
        setActive_: setActive_
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "shop-widget",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "shop-title",
          children: "Productos Recientes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "shop-sidebar-product",
          children: products && products.map((product, i) => i < 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "side-pro-img",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: `/shop/${product.id}`,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: product.img2,
                  alt: "Product"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 27
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 23
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "side-pro-content",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "side-pro-rating",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fas fa-star"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 27
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fas fa-star"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 27
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fas fa-star"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 27
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fas fa-star"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 27
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fas fa-star"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 27
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 25
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: `/shop/${product.id}`,
                  children: product.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 27
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 25
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "side-pro-price",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: ["$", Number(product.mainPrice).toFixed(2), " USD"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 27
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 25
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 23
            }, undefined)]
          }, product.id, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 21
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "shop-widget",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "shop-sidebar-banner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/shop",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/img/bg/extintor.png",
              alt: "Banner"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }, undefined);
};

const mapStateToProps = state => ({
  search: state.filter.search,
  products: state.product.products
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, {
  filterByName: _redux_action_filter__WEBPACK_IMPORTED_MODULE_3__.filterByName,
  filterByBrand: _redux_action_filter__WEBPACK_IMPORTED_MODULE_3__.filterByBrand,
  filterByCatagory: _redux_action_filter__WEBPACK_IMPORTED_MODULE_3__.filterByCatagory,
  filterBySize: _redux_action_filter__WEBPACK_IMPORTED_MODULE_3__.filterBySize,
  filterByPrice: _redux_action_filter__WEBPACK_IMPORTED_MODULE_3__.filterByPrice,
  filterByColor: _redux_action_filter__WEBPACK_IMPORTED_MODULE_3__.filterByColor,
  filterByTags: _redux_action_filter__WEBPACK_IMPORTED_MODULE_3__.filterByTags
})(Filter));

/***/ }),

/***/ "./src/components/product/filter/FilterByCheckBox.js":
/*!***********************************************************!*\
  !*** ./src/components/product/filter/FilterByCheckBox.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\components\\product\\filter\\FilterByCheckBox.js";

const FilterByCheckBox = ({
  title,
  arr,
  funtion,
  setActive_
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "shop-widget",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      className: "shop-title",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "shop-link",
      children: arr && arr.map((b, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "checkBox",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            id: b,
            name: b,
            defaultValue: "Categorias",
            onClick: e => {
              funtion(e.target.name);
              setActive_();
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 17
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: b,
            children: b
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 15
        }, undefined)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterByCheckBox);

/***/ }),

/***/ "./src/components/product/filter/FilterByTags.js":
/*!*******************************************************!*\
  !*** ./src/components/product/filter/FilterByTags.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.js");

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\components\\product\\filter\\FilterByTags.js";



const FilterByTags = ({
  filterByTags,
  setActive_
}) => {
  const tags = ["Sistemas de Protección Contra Incendio", "Detección de Incendio", "Aspiración", "Accesorios", "Canastillos", "Detectores de Flujo", "Extinción de Incendio", "Extintores", "Fittings", "Flanges", "Cañerías", "Hierro Maleable", "Palancas", "Sirenas y Balizas", "Direccionable", "Fotoeléctricos", "PernosU", "Ranurado", "Straps", "Soportacion", "Tee Mecanicas", "Uniones", "Juntas de Dilatacion", "Manometros", "Mangueras", "Rosetas", "Storz", "Sprinklers", "Valvulas", "Electronica", "Citofonia", "Control de Acceso", "Computación", "Cables", "Adaptadores", "Ángulos", "Ferreteria", "Abrazaderas", "Cajas", "Cintas", "Candados", "EPP", "Espárragos", "Herramientas", "Líquidos/Químicos", "Mangueras", "Riel", "Soldadura", "Teflón"];
  const {
    0: active,
    1: setActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  const activeFun = value => {
    filterByTags(value);
    setActive_();
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.clickToActive)(active, value, setActive);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "shop-widget",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      className: "shop-title",
      children: "Tags"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "shop-tag",
      children: tags && tags.map(tag => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          className: `text-capitalize ${active.includes(tag) ? "activeTag" : ""}`,
          onClick: e => {
            activeFun(tag);
            e.preventDefault();
          },
          children: [" ", tag]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 15
        }, undefined)
      }, tag, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterByTags);

/***/ }),

/***/ "./src/components/product/filter/PriceFilter.js":
/*!******************************************************!*\
  !*** ./src/components/product/filter/PriceFilter.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-input-range */ "react-input-range");
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_input_range__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\components\\product\\filter\\PriceFilter.js";



const PriceFilter = ({
  filterByPrice,
  setActive_
}) => {
  const {
    0: price,
    1: setPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    value: {
      min: 0,
      max: 200
    }
  });
  const prices = [{
    min: "0",
    max: "50"
  }, {
    min: "50",
    max: "100"
  }, {
    min: "100",
    max: "150"
  }, {
    min: "150",
    max: "200"
  }, {
    min: "200"
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "shop-widget",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "shop-title",
        children: "Filter selection"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_input_range__WEBPACK_IMPORTED_MODULE_2___default()), {
        formatLabel: value => ``,
        maxValue: 300,
        minValue: 0,
        value: price.value,
        onChange: value => {
          setPrice({
            value
          });
          filterByPrice(value);
          setActive_();
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "mt-20 d-block",
        children: ["$", price.value.min, " - $", price.value.max]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PriceFilter);

/***/ }),

/***/ "./src/layouts/CompareIcon.js":
/*!************************************!*\
  !*** ./src/layouts/CompareIcon.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_action_utilis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/action/utilis */ "./src/redux/action/utilis.js");

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\layouts\\CompareIcon.js";





const CompareIcon = ({
  getCompare
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    getCompare();
  }, []);
  const compares = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.utilis.compares);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "wishlist-container compare",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/compare",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "icon",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: `flaticon-compare ${compares.length === 0 ? "mt-1 mr-1" : "mt-2 mr-2"}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "count",
          children: compares && compares.length <= 9 && compares.length !== 0 ? `0${compares.length}` : compares.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, {
  getCompare: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_4__.getCompare
})(CompareIcon));

/***/ }),

/***/ "./src/layouts/Footer.js":
/*!*******************************!*\
  !*** ./src/layouts/Footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_banner_fotoFooter_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/img/banner/fotoFooter.png */ "./public/img/banner/fotoFooter.png");
/* harmony import */ var _public_img_icon_time_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/icon/time.png */ "./public/img/icon/time.png");
/* harmony import */ var _public_img_logo_logoFooter_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/img/logo/logoFooter.png */ "./public/img/logo/logoFooter.png");

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\layouts\\Footer.js";






const Footer = ({
  container,
  footerBg,
  textCenter
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `${!container ? "footer-area box-90 pt-100 pb-60" : "footer-area pl-100 pr-100 mt-100"}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: footerBg ? "footer-area box-90 pt-100 pb-60" : "",
        "data-background": footerBg ? "/img/bg/footer300.png" : "",
        style: {
          backgroundImage: footerBg ? 'url("/img/bg/footer300.png")' : ""
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: `${container ? "container" : "container-fluid"}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-xl-3 col-lg-5 col-md-6 ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "footer-widget mb-40",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "footer-logo",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: _public_img_logo_logoFooter_png__WEBPACK_IMPORTED_MODULE_5__.default,
                        alt: "Logo"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 30,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 29,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: "SIIM Ingenier\xEDa, tiene experiencia en la instalaci\xF3n de sistemas en muchas aplicaciones diferentes como comercial, industrial y residencial."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-xl-2 col-lg-2 col-md-3 d-lg-none d-xl-block",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "footer-widget pl-50 mb-40",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                  children: "Redes sociales"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  className: "footer-link",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Facebook"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 54,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Instagram"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Linkedin"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-xl-2 col-lg-2 col-md-3 d-lg-none d-xl-block",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "footer-widget pl-30 mb-40",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                  children: "Menu"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  className: "footer-link",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Inicio"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Quienes somos"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Distribuidora SIIM"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: [" ", "Contacto"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 91,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-xl-2 col-lg-2 col-md-3",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "footer-widget mb-40",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                  children: "Informaci\xF3n"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  className: "footer-link",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Pol\xEDtica de Privacidad"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 114,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: [" ", "Pol\xEDtica de Devoluciones y Reembolsos"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 119,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Direcci\xF3n"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "FAQ"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 130,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-xl-3 col-lg-5 col-md-6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "footer-widget mb-40",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "footer-banner",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/shop",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: _public_img_banner_fotoFooter_png__WEBPACK_IMPORTED_MODULE_3__.default,
                        alt: "Banner"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 152,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 151,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "copyright-area box-105",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container-fluid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: `${footerBg ? "" : "copyright-border"} pt-30 pb-30`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: `${textCenter ? "col-xl-12" : "col-xl-6 col-lg-6 col-md-6"}`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: `copyright text-center  ${textCenter ? "" : "text-md-left"}`,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: ["Copyright \xA9 ", new Date().getFullYear(), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "#",
                    onClick: e => e.preventDefault(),
                    children: "Siim"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 21
                  }, undefined), ". Todos los derechos reservados"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 15
            }, undefined), !textCenter && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-xl-6 col-lg-6 col-md-6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "footer-icon text-center text-md-right ",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#",
                  onClick: e => e.preventDefault(),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fab fa-facebook-f"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#",
                  onClick: e => e.preventDefault(),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fab fa-twitter"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#",
                  onClick: e => e.preventDefault(),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fab fa-linkedin-in"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 198,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/layouts/Header.js":
/*!*******************************!*\
  !*** ./src/layouts/Header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _header_Catagory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/Catagory */ "./src/layouts/header/Catagory.js");
/* harmony import */ var _header_DasktopHeader1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/DasktopHeader1 */ "./src/layouts/header/DasktopHeader1.js");
/* harmony import */ var _header_MobileHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/MobileHeader */ "./src/layouts/header/MobileHeader.js");
/* harmony import */ var _header_SearchTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/SearchTrigger */ "./src/layouts/header/SearchTrigger.js");
/* harmony import */ var _header_ShopCart_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/ShopCart.js */ "./src/layouts/header/ShopCart.js");

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\layouts\\Header.js";









const Header = ({
  sticky,
  container,
  transparent,
  whiteMenu,
  extraTransparentClass
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    sticky && window.addEventListener("scroll", _utils_utils__WEBPACK_IMPORTED_MODULE_3__.scroll);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: `${transparent ? `transparent-header ${extraTransparentClass ? extraTransparentClass : ""}` : ""}`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header-area box-90",
      id: `${sticky ? "header-sticky" : ""}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: `${container ? "container" : "container-fluid"}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-xl-3 col-lg-6 col-md-6 col-7 col-sm-3 d-flex align-items-center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_Catagory__WEBPACK_IMPORTED_MODULE_4__.default, {
              whiteMenu: whiteMenu
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-xl-6 col-lg-6 col-md-8 col-8 d-none d-xl-block",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_DasktopHeader1__WEBPACK_IMPORTED_MODULE_5__.default, {
              whiteMenu: whiteMenu
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-xl-3 col-lg-6 col-md-6 col-5 col-sm-9 pl-0",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "header-right f-right",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_SearchTrigger__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_ShopCart_js__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-12 d-xl-none",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_MobileHeader__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/layouts/Header2.js":
/*!********************************!*\
  !*** ./src/layouts/Header2.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_DasktopHeader2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/DasktopHeader2 */ "./src/layouts/header/DasktopHeader2.js");
/* harmony import */ var _header_MobileHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/MobileHeader */ "./src/layouts/header/MobileHeader.js");
/* harmony import */ var _header_SearchTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/SearchTrigger */ "./src/layouts/header/SearchTrigger.js");
/* harmony import */ var _header_ShopCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/ShopCart */ "./src/layouts/header/ShopCart.js");

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\layouts\\Header2.js";







const Header2 = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header-area header-3 pt-35 pb-35",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-xl-4 col-lg-5 col-md-4 col-5",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "logo text-left text-md-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/shop",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: "img/logo/logo.svg",
                    alt: "img"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 21
                  }, undefined), "  "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-xl-4 col-lg-4 col-md-8 col-7 pl-0",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "header-right header-right-3 f-right",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_SearchTrigger__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "login-btn",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/login",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                        className: "far fa-user"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 33,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_ShopCart__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-12 d-lg-none",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_MobileHeader__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header-sep",
      "data-background": "img/bg/header-sep.png",
      style: {
        backgroundImage: 'url("img/bg/header-sep.png")'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header2);

/***/ }),

/***/ "./src/layouts/Layout.js":
/*!*******************************!*\
  !*** ./src/layouts/Layout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_action_utilis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/action/utilis */ "./src/redux/action/utilis.js");
/* harmony import */ var _CompareIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CompareIcon */ "./src/layouts/CompareIcon.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./src/layouts/Footer.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header */ "./src/layouts/Header.js");
/* harmony import */ var _Header2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header2 */ "./src/layouts/Header2.js");
/* harmony import */ var _WishListIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WishListIcon */ "./src/layouts/WishListIcon.js");

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\layouts\\Layout.js";









const Layout = ({
  children,
  sticky,
  container,
  footerBg,
  transparent,
  extraTransparentClass,
  header2,
  textCenter,
  whiteMenu,
  getWishlist,
  getCompare
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getWishlist();
    getCompare();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [header2 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header2__WEBPACK_IMPORTED_MODULE_7__.default, {
      whiteMenu: whiteMenu
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_6__.default, {
      sticky: sticky,
      container: container,
      transparent: transparent,
      extraTransparentClass: extraTransparentClass,
      whiteMenu: whiteMenu
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WishListIcon__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CompareIcon__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {
      container: container,
      footerBg: footerBg,
      textCenter: textCenter
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(null, {
  getWishlist: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_3__.getWishlist,
  getCompare: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_3__.getCompare
})(Layout));

/***/ }),

/***/ "./src/layouts/PageTitle.js":
/*!**********************************!*\
  !*** ./src/layouts/PageTitle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\layouts\\PageTitle.js";




const PageTitle = ({
  pageHeading,
  active,
  thankupage,
  id
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.dataImage)();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "breadcrumb-area",
    "data-background": "/img/bg/BgProducto.png",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-xl-12",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "breadcrumb-text text-center",
            children: [thankupage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "fa fa-check-circle text-success fs-100 mb-3",
              "aria-hidden": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: thankupage ? "mb-2" : "",
              children: pageHeading
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, undefined), thankupage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "fs-20",
              children: ["El pago se ha realizado exitosamente y su pedido est\xE1 proceso de env\xEDo ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 90
              }, undefined), " Transaction ID:", id]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              className: "breadcrumb-menu",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "/",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: "Inicio"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: active
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageTitle);

/***/ }),

/***/ "./src/layouts/Shop.js":
/*!*****************************!*\
  !*** ./src/layouts/Shop.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Paggination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Paggination */ "./src/components/Paggination.js");
/* harmony import */ var _components_product_filter_Filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/product/filter/Filter */ "./src/components/product/filter/Filter.js");
/* harmony import */ var _components_product_Product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/product/Product */ "./src/components/product/Product.js");
/* harmony import */ var _components_product_ProductListView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/product/ProductListView */ "./src/components/product/ProductListView.js");
/* harmony import */ var _redux_action_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/action/product */ "./src/redux/action/product.js");
/* harmony import */ var _utils_filterProduct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/filterProduct */ "./src/utils/filterProduct.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Layout */ "./src/layouts/Layout.js");
/* harmony import */ var _PageTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PageTitle */ "./src/layouts/PageTitle.js");

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\layouts\\Shop.js";













const Shop = ({
  products,
  getProducts,
  col,
  banner,
  defultActive,
  leftSideBar
}) => {
  const {
    0: active,
    1: setActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  let sort = 6;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getProducts();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout__WEBPACK_IMPORTED_MODULE_11__.default, {
    footerBg: true,
    container: true,
    textCenter: true,
    transparent: true,
    whiteMenu: true,
    extraTransparentClass: "transparent-header-2",
    children: ["  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PageTitle__WEBPACK_IMPORTED_MODULE_12__.default, {
        active: "Tienda SIIM",
        pageHeading: "Nuestra Tienda"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "shop-area pt-100 pb-100",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "row",
            children: [leftSideBar && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_product_filter_Filter__WEBPACK_IMPORTED_MODULE_5__.default, {
              setActive_: () => setActive(0)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 31
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-xl-8 col-lg-8",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "shop-banner mb-50",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: banner,
                  alt: "Banner"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.TabContainer, {
                defaultActiveKey: defultActive ? defultActive : "grid",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "col-xl-5 col-lg-5 col-md-6",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "product-showing mb-40",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                        children: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_10__.activeData)(active, sort, products)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 50,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "col-xl-7 col-lg-7 col-md-6",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "shop-tab f-right",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {
                        as: "ul",
                        className: "nav text-center",
                        id: "myTab",
                        role: "tablist",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Item, {
                          as: "li",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {
                            as: "a",
                            href: "#",
                            onClick: e => e.preventDefault(),
                            eventKey: "list",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                              className: "fas fa-list-ul"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 68,
                              columnNumber: 31
                            }, undefined), " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 62,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 61,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Item, {
                          as: "li",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {
                            as: "a",
                            href: "#",
                            onClick: e => e.preventDefault(),
                            eventKey: "grid",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                              className: "fas fa-th-large"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 78,
                              columnNumber: 31
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 72,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 71,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 55,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 54,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.TabContent, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.TabPane, {
                    eventKey: "grid",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "row",
                      children: products && products.length > 0 ? products.map((product, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: `${col} ${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_10__.dblock)(active, i, sort)}`,
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_product_Product__WEBPACK_IMPORTED_MODULE_6__.default, {
                          wrapperPadding0: true,
                          product: product
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 95,
                          columnNumber: 31
                        }, undefined)
                      }, product.id, false, {
                        fileName: _jsxFileName,
                        lineNumber: 91,
                        columnNumber: 29
                      }, undefined)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                        className: "text-center d-block w-100 mt-5",
                        children: "No se encontr\xF3 ning\xFAn producto"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 27
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 88,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.TabPane, {
                    eventKey: "list",
                    children: products && products.map((product, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: `${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_10__.dblock)(active, i, sort)}`,
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_product_ProductListView__WEBPACK_IMPORTED_MODULE_7__.default, {
                        product: product,
                        col5: true
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 112,
                        columnNumber: 29
                      }, undefined)
                    }, i, false, {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                      columnNumber: 27
                    }, undefined))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Paggination__WEBPACK_IMPORTED_MODULE_4__.default, {
                active: active,
                setActive: setActive,
                sort: sort,
                length: products && products.length
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, undefined), !leftSideBar && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_product_filter_Filter__WEBPACK_IMPORTED_MODULE_5__.default, {
              setActive_: () => setActive(0)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 32
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

const mapStateToProps = state => ({
  products: (0,_utils_filterProduct__WEBPACK_IMPORTED_MODULE_9__.getProductByFilter)(state.product.products, state.filter)
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, {
  getProducts: _redux_action_product__WEBPACK_IMPORTED_MODULE_8__.getProducts
})(Shop));

/***/ }),

/***/ "./src/layouts/WishListIcon.js":
/*!*************************************!*\
  !*** ./src/layouts/WishListIcon.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_action_utilis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/action/utilis */ "./src/redux/action/utilis.js");

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\layouts\\WishListIcon.js";





const WishListIcon = ({
  getWishlist
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    getWishlist();
  }, []);
  const wishlist = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.utilis.wishlist);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "wishlist-container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/wishlist",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "icon",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: `fas fa-heart  ${wishlist.length === 0 ? "mt-1 mr-1" : "mt-2 mr-2"}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "count",
          children: wishlist && wishlist.length <= 9 && wishlist.length !== 0 ? `0${wishlist.length}` : wishlist.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, {
  getWishlist: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_4__.getWishlist
})(WishListIcon));

/***/ }),

/***/ "./src/layouts/header/Catagory.js":
/*!****************************************!*\
  !*** ./src/layouts/header/Catagory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\layouts\\header\\Catagory.js";
// import Image from "next/image";

 // import logoWhite from "/img/logo/logo-white.png";
// import logo from "/img/logo/logo.png";

const Catagory = ({
  whiteMenu
}) => {
  const {
    0: catMenu,
    1: setCatMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  let category = ["Detección de incendios", "Extinción de incendios", "Electrónica", "Ferreteria", "Electricidad"];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "logo mt-1",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: whiteMenu ? "/img/logo/logoSIIM.png" : "/img/logo/logoSIIM.png",
            alt: "Logo",
            width: 215
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Catagory);

/***/ }),

/***/ "./src/layouts/header/DasktopHeader1.js":
/*!**********************************************!*\
  !*** ./src/layouts/header/DasktopHeader1.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\layouts\\header\\DasktopHeader1.js";


const DasktopHeader = ({
  whiteMenu
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `main-menu text-center ${whiteMenu ? "menu-white" : ""}`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      id: "mobile-menu",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "Inicio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 9,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 8,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "mega-menu",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/shop/col-3",
            children: "Tienda"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/about",
            onClick: e => e.preventDefault(),
            children: "Nosotros"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/contact",
            children: "Contacto"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DasktopHeader);

/***/ }),

/***/ "./src/layouts/header/DasktopHeader2.js":
/*!**********************************************!*\
  !*** ./src/layouts/header/DasktopHeader2.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_logo_logo_white_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/img/logo/logo-white.png */ "./public/img/logo/logo-white.png");

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\layouts\\header\\DasktopHeader2.js";





const DasktopHeader3 = () => {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "basic-bar info-bar",
      onClick: () => setIsOpen(true),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "bar1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "bar2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "bar3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `extra-info ${isOpen ? "info-open" : ""}`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "close-icon",
        onClick: () => setIsOpen(false),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "far fa-window-close"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "logo-side",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: _public_img_logo_logo_white_png__WEBPACK_IMPORTED_MODULE_4__.default,
            alt: "",
            width: 300
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "side-info mb-30",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "main-menu side-menu",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
            id: "mobile-menu-3",
            style: {
              display: "block"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: "Home"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  className: "submenu",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                      href: "/",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        children: "Home Style 1"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 37,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 36,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                      href: "/index-2",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        children: "Home Style 2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 42,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 41,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                      href: "/index-3",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        children: "Home Style 3"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 47,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 46,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                      href: "/index-4",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        children: "Home Style 4"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 52,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 51,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                      href: "/index-5",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        children: "Home Style 5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 57,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 56,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "mega-menu",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/shop",
                  children: "Shop"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  className: "submenu ",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Category View"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                      className: "submenu  level-1",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                          href: "/shop",
                          children: "Shop 2 Column"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 71,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 70,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                          href: "/products",
                          children: "Shop Filter Style"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 74,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 73,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                          href: "/products",
                          children: "Shop Full"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 77,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 76,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                          href: "/shop/col-3",
                          children: "Shop 3 Column"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 80,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 79,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                          href: "/shop/list",
                          children: "List View"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 83,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 82,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Category View"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 88,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                      className: "submenu",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                          href: "/shop/left-sidebar",
                          children: "Sidebar Left"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 93,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 92,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                          href: "/shop/sidebar-right",
                          children: "Sidebar Right"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 96,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                          href: "/cart",
                          children: "Shopping Cart"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 99,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 98,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                          href: "/checkout",
                          children: "Checkout"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 102,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                          href: "/wishlist",
                          children: "My Wishlist"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 105,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 104,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 91,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "#",
                      onClick: e => e.preventDefault(),
                      children: "Products Types"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                      className: "submenu",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                          href: "/shop/1",
                          children: "Simple Product"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 115,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 114,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                          href: "/shop/19",
                          children: "Variable Product"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 118,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 117,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                          href: "/shop/upcoming/16",
                          children: "Product Upcoming"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 121,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 120,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                          href: "/shop/up-thumb/16",
                          children: "Thumb Top Product"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 124,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 123,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                          href: "/compare",
                          children: "Compare"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 130,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 129,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/products",
                  children: "Products "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/blog",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: "Blog"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  className: "submenu",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                      href: "/blog/col-2",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        children: "Blog 2 Column"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 146,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                      href: "/blog/col-mas-2",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        children: "Blog 2 Col Masonry"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                      href: "/blog/col-3",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        children: "Blog 3 Column"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 156,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                      href: "/blog/col-mas-3",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        children: "Blog 3 Col Masonry"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 161,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 160,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                      href: "/blog/1",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        children: "Blog Details"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 166,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 165,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 164,
                    columnNumber: 21
                  }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                      href: "/blog/10",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        children: "Blog Details Video"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 171,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 170,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 169,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#",
                  onClick: e => e.preventDefault(),
                  children: "Pages"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  className: "submenu",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                      href: "/about",
                      children: "About Us"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 182,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                      href: "/contact",
                      children: "Contact Us"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 185,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                      href: "/login",
                      children: "login"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 188,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                      href: "/register",
                      children: "Register"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 191,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                      href: "/cart",
                      children: "Shoping Cart"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 194,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 193,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                      href: "/checkout",
                      children: "Checkout"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 197,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 196,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                      href: "/wishlist",
                      children: "Wishlist"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 200,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 199,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                      href: "/compare",
                      children: "Compare"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 203,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                      href: "/order-success",
                      children: "Order Success"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 206,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/contact",
                  children: "Contact"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "side-info-bottom",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "side-cta",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "info@example.com"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: "+(090) 8765 86543 85"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "social-icon-right mt-20",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            onClick: e => e.preventDefault(),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "fab fa-facebook-f"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            onClick: e => e.preventDefault(),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "fab fa-twitter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            onClick: e => e.preventDefault(),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "fab fa-google-plus-g"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            onClick: e => e.preventDefault(),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "fab fa-instagram"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DasktopHeader3);

/***/ }),

/***/ "./src/layouts/header/MobileHeader.js":
/*!********************************************!*\
  !*** ./src/layouts/header/MobileHeader.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\layouts\\header\\MobileHeader.js";



const MobileHeader = () => {
  const {
    0: mainHeader,
    1: setMainHeader
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: subMenu,
    1: setSubMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: multiMenu,
    1: setMultiMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "mobile-menu mean-container",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mean-bar",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#nav",
        className: `meanmenu-reveal ${mainHeader ? "d-flex align-items-center justify-content-center fs-18" : ""}`,
        onClick: e => {
          setMainHeader(!mainHeader);
          e.preventDefault();
        },
        children: mainHeader ? "X" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        className: `mean-nav mobile-header ${mainHeader ? "block" : ""}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "mega-menu",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/shop/col-3",
              children: "Tienda"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              className: `submenu ${subMenu === "shop" ? "block" : ""}`,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#",
                  children: "Category View"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  className: `submenu ${multiMenu === "1" ? "block" : ""}`,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      href: "/shop",
                      children: "Shop 2 Column"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 47,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      href: "/products",
                      children: "Shop Filter Style"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 50,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      href: "/products",
                      children: "Shop Full"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 53,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      href: "/shop/col-3",
                      children: "Shop 3 Column"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 56,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      href: "/shop/list",
                      children: "List View"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "mean-expand",
                  href: "#",
                  onClick: e => {
                    setMultiMenu(multiMenu === "1" ? false : "1");
                    e.preventDefault();
                  },
                  children: multiMenu === "1" ? "-" : "+"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#",
                  onClick: e => e.preventDefault(),
                  children: "Category View"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  className: `submenu ${multiMenu === "2" ? "block" : ""}`,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      href: "/shop/left-sidebar",
                      children: "Sidebar Left"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      href: "/shop/sidebar-right",
                      children: "Sidebar Right"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      href: "/cart",
                      children: "Shopping Cart"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      href: "/checkout",
                      children: "Checkout"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 88,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      href: "/wishlist",
                      children: "My Wishlist"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 91,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "mean-expand",
                  href: "#",
                  onClick: e => {
                    setMultiMenu(multiMenu === "2" ? false : "2");
                    e.preventDefault();
                  },
                  children: multiMenu === "2" ? "-" : "+"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#",
                  children: "Products Types"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  className: `submenu ${multiMenu === "3" ? "block" : ""}`,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      href: "/shop/1",
                      children: "Simple Product"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      href: "/shop/19",
                      children: "Variable Product"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 112,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      href: "/shop/upcoming/16",
                      children: "Product Upcoming"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 115,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      href: "/shop/up-thumb/16",
                      children: "Thumb Top Product"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 118,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      href: "/compare",
                      children: "Compare"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 121,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "mean-expand",
                  href: "#",
                  onClick: e => {
                    setMultiMenu(multiMenu === "3" ? false : "3");
                    e.preventDefault();
                  },
                  children: multiMenu === "3" ? "-" : "+"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/about",
              children: "Nosotros"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "mean-last",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/contact",
              children: "Contacto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileHeader);

/***/ }),

/***/ "./src/layouts/header/SearchTrigger.js":
/*!*********************************************!*\
  !*** ./src/layouts/header/SearchTrigger.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_action_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/action/filter */ "./src/redux/action/filter.js");

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\layouts\\header\\SearchTrigger.js";





const SearchTrigger = ({
  filterByName
}) => {
  const {
    0: isSearch,
    1: setIsSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  if (text) {
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push({
      pathname: "/shop" // query: { sortBy: 'price' }

    }, undefined, {
      shallow: true
    });
  }

  const onSubmit = e => {
    e.preventDefault();
    setText(true);
    setIsSearch(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      className: "search-btn",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "search-btn nav-search search-trigger",
        href: "#",
        onClick: e => {
          setIsSearch(true);
          e.preventDefault();
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fas fa-search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `search-wrap ${isSearch ? "d-block" : ""}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "search-inner",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fas fa-times search-close",
          id: "search-close",
          onClick: () => setIsSearch(false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "search-cell",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            method: "get",
            onSubmit: e => onSubmit(e),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "search-field-holder",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "search",
                className: "main-search-input",
                placeholder: "Search Entire Store...",
                onChange: e => filterByName(e.target.value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, {
  filterByName: _redux_action_filter__WEBPACK_IMPORTED_MODULE_4__.filterByName
})(SearchTrigger));

/***/ }),

/***/ "./src/layouts/header/ShopCart.js":
/*!****************************************!*\
  !*** ./src/layouts/header/ShopCart.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ "react-hot-toast");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_action_utilis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/action/utilis */ "./src/redux/action/utilis.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");

var _jsxFileName = "C:\\Web SIIM\\vue\\src\\layouts\\header\\ShopCart.js";







const ShopCart = ({
  removeCart,
  getCarts
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    getCarts();
  }, []);
  const carts = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.utilis.carts);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    className: "d-shop-cart",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: "flaticon-shopping-cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "cart-count",
        children: carts && carts.length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "minicart",
      children: [carts && carts.length > 0 ? carts.map(cart => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "cart-img",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: `/shop/${cart.id}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: cart.img1,
                alt: "Cart"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "cart-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: `/shop/${cart.id}`,
              children: cart.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "cart-price",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "new",
              children: ["$", cart.mainPrice, " * ", cart.qty]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 19
            }, undefined), " =", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "new ml-1 ",
              children: ["$", cart.totalPrice]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "del-icon",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            onClick: e => {
              e.preventDefault();
              removeCart(cart.id);
              react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default().error("Remove item from carts");
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "far fa-trash-alt"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 15
        }, undefined)]
      }, cart.id, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, undefined)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Carrito vacio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "total-price",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "f-left",
            children: "Total:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, undefined), carts && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "f-right",
            children: ["$", (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.totalPrice)(carts)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 23
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "checkout-link",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/cart",
            children: "Productos compra"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/checkout",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "red-color",
              children: "Ir a Checkout"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(null, {
  removeCart: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_5__.removeCart,
  getCarts: _redux_action_utilis__WEBPACK_IMPORTED_MODULE_5__.getCarts
})(ShopCart));

/***/ }),

/***/ "./src/redux/action/filter.js":
/*!************************************!*\
  !*** ./src/redux/action/filter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterByName": () => (/* binding */ filterByName),
/* harmony export */   "filterByBrand": () => (/* binding */ filterByBrand),
/* harmony export */   "filterByCatagory": () => (/* binding */ filterByCatagory),
/* harmony export */   "filterBySize": () => (/* binding */ filterBySize),
/* harmony export */   "filterByPrice": () => (/* binding */ filterByPrice),
/* harmony export */   "filterByColor": () => (/* binding */ filterByColor),
/* harmony export */   "filterByTags": () => (/* binding */ filterByTags)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./src/redux/action/type.js");

const filterByName = value => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__.FILTER_NAME,
    payload: value
  });
};
const filterByBrand = value => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__.FILTER_BRAND,
    payload: value
  });
};
const filterByCatagory = value => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__.FILTER_CATAGORY,
    payload: value
  });
};
const filterBySize = value => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__.FILTER_SIZE,
    payload: value
  });
};
const filterByPrice = value => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__.FILTER_PRICE,
    payload: value
  });
};
const filterByColor = value => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__.FILTER_COLOR,
    payload: value
  });
};
const filterByTags = value => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__.FILTER_TAG,
    payload: value
  });
};

/***/ }),

/***/ "./src/redux/action/product.js":
/*!*************************************!*\
  !*** ./src/redux/action/product.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProducts": () => (/* binding */ getProducts),
/* harmony export */   "getSingleProduct": () => (/* binding */ getSingleProduct)
/* harmony export */ });
/* harmony import */ var _utils_fatchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/fatchData */ "./src/utils/fatchData.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./src/redux/action/type.js");


const getProducts = () => async dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_1__.GET_PRODUCT,
    payload: await (0,_utils_fatchData__WEBPACK_IMPORTED_MODULE_0__.fatchData)("/static/product.json")
  });
};
const getSingleProduct = id => async dispatch => {
  const data = await (0,_utils_fatchData__WEBPACK_IMPORTED_MODULE_0__.fatchData)("/static/product.json");
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_1__.GET_SINGLE,
    payload: data.find(data => data.id === id)
  });
};

/***/ }),

/***/ "./src/redux/action/type.js":
/*!**********************************!*\
  !*** ./src/redux/action/type.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HOME_1": () => (/* binding */ HOME_1),
/* harmony export */   "GET_BLOG": () => (/* binding */ GET_BLOG),
/* harmony export */   "GET_MAS_BLOG": () => (/* binding */ GET_MAS_BLOG),
/* harmony export */   "GET_SINGLE_BLOG": () => (/* binding */ GET_SINGLE_BLOG),
/* harmony export */   "NEXT_POST": () => (/* binding */ NEXT_POST),
/* harmony export */   "PREV_POST": () => (/* binding */ PREV_POST),
/* harmony export */   "TOP_SELLER": () => (/* binding */ TOP_SELLER),
/* harmony export */   "GET_FEATURES": () => (/* binding */ GET_FEATURES),
/* harmony export */   "HOME_2": () => (/* binding */ HOME_2),
/* harmony export */   "GET_UPCOMING_PRODUCT": () => (/* binding */ GET_UPCOMING_PRODUCT),
/* harmony export */   "HOME_3": () => (/* binding */ HOME_3),
/* harmony export */   "HOME_4": () => (/* binding */ HOME_4),
/* harmony export */   "HOME_5": () => (/* binding */ HOME_5),
/* harmony export */   "GET_PRODUCT": () => (/* binding */ GET_PRODUCT),
/* harmony export */   "GET_SINGLE": () => (/* binding */ GET_SINGLE),
/* harmony export */   "FILTER_NAME": () => (/* binding */ FILTER_NAME),
/* harmony export */   "FILTER_BRAND": () => (/* binding */ FILTER_BRAND),
/* harmony export */   "FILTER_CATAGORY": () => (/* binding */ FILTER_CATAGORY),
/* harmony export */   "FILTER_SIZE": () => (/* binding */ FILTER_SIZE),
/* harmony export */   "FILTER_PRICE": () => (/* binding */ FILTER_PRICE),
/* harmony export */   "FILTER_COLOR": () => (/* binding */ FILTER_COLOR),
/* harmony export */   "FILTER_TAG": () => (/* binding */ FILTER_TAG),
/* harmony export */   "GET_CARTS": () => (/* binding */ GET_CARTS),
/* harmony export */   "ADD_TO_CART": () => (/* binding */ ADD_TO_CART),
/* harmony export */   "REMOVE_CART": () => (/* binding */ REMOVE_CART),
/* harmony export */   "DECREASE_CART": () => (/* binding */ DECREASE_CART),
/* harmony export */   "CART_AMOUNT": () => (/* binding */ CART_AMOUNT),
/* harmony export */   "COMPARE": () => (/* binding */ COMPARE),
/* harmony export */   "GET_COMPARE": () => (/* binding */ GET_COMPARE),
/* harmony export */   "REMOVE_COMPARE": () => (/* binding */ REMOVE_COMPARE),
/* harmony export */   "QUICK_VIEW": () => (/* binding */ QUICK_VIEW),
/* harmony export */   "ADD_WISHLIST": () => (/* binding */ ADD_WISHLIST),
/* harmony export */   "GET_WISHLIST": () => (/* binding */ GET_WISHLIST),
/* harmony export */   "CHECKOUT_USER": () => (/* binding */ CHECKOUT_USER)
/* harmony export */ });
const HOME_1 = "HOME_1";
const GET_BLOG = "GET_BLOG";
const GET_MAS_BLOG = "GET_MAS_BLOG";
const GET_SINGLE_BLOG = "GET_SINGLE_BLOG";
const NEXT_POST = "NEXT_POST";
const PREV_POST = "PREV_POST";
const TOP_SELLER = "TOP_SELLER";
const GET_FEATURES = "GET_FEATURES";
const HOME_2 = "HOME_2";
const GET_UPCOMING_PRODUCT = "GET_UPCOMING_PRODUCT";
const HOME_3 = "HOME_3";
const HOME_4 = "HOME_4";
const HOME_5 = "HOME_5"; // Product

const GET_PRODUCT = "GET_PRODUCT";
const GET_SINGLE = "GET_SINGLE"; // filter

const FILTER_NAME = "FILTER_NAME";
const FILTER_BRAND = "FILTER_BRAND";
const FILTER_CATAGORY = "FILTER_CATAGORY";
const FILTER_SIZE = "FILTER_SIZE";
const FILTER_PRICE = "FILTER_PRICE";
const FILTER_COLOR = "FILTER_COLOR";
const FILTER_TAG = "FILTER_TAG"; // Utiles

const GET_CARTS = "GET_CARTS";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_CART = "REMOVE_CART";
const DECREASE_CART = "DECREASE_CART";
const CART_AMOUNT = "CART_AMOUNT";
const COMPARE = "COMPARE";
const GET_COMPARE = "GET_COMPARE";
const REMOVE_COMPARE = "REMOVE_COMPARE";
const QUICK_VIEW = "QUICK_VIEW";
const ADD_WISHLIST = "ADD_WISHLIST";
const GET_WISHLIST = "GET_WISHLIST";
const CHECKOUT_USER = "CHECKOUT_USER";

/***/ }),

/***/ "./src/redux/action/utilis.js":
/*!************************************!*\
  !*** ./src/redux/action/utilis.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCarts": () => (/* binding */ getCarts),
/* harmony export */   "addToCart": () => (/* binding */ addToCart),
/* harmony export */   "removeCart": () => (/* binding */ removeCart),
/* harmony export */   "decreaseCart": () => (/* binding */ decreaseCart),
/* harmony export */   "addWishlist": () => (/* binding */ addWishlist),
/* harmony export */   "getWishlist": () => (/* binding */ getWishlist),
/* harmony export */   "getCompare": () => (/* binding */ getCompare),
/* harmony export */   "compare": () => (/* binding */ compare),
/* harmony export */   "removeCompare": () => (/* binding */ removeCompare),
/* harmony export */   "setCheckoutData": () => (/* binding */ setCheckoutData)
/* harmony export */ });
/* harmony import */ var _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/localstorage */ "./src/utils/localstorage.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./src/redux/action/type.js");


const getCarts = () => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_1__.GET_CARTS,
    payload: (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)("vue-ecommerce")
  });
};
const addToCart = product => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_1__.ADD_TO_CART,
    payload: product
  });
};
const removeCart = id => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_1__.REMOVE_CART,
    payload: id
  });
};
const decreaseCart = product => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_1__.DECREASE_CART,
    payload: product
  });
};
const addWishlist = product => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_1__.ADD_WISHLIST,
    payload: product
  });
};
const getWishlist = () => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_1__.GET_WISHLIST,
    payload: (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)("vue-wishlist")
  });
};
const getCompare = () => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_1__.GET_COMPARE,
    payload: (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)("vue-compares")
  });
};
const compare = product => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_1__.COMPARE,
    payload: product
  });
};
const removeCompare = product => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_1__.REMOVE_COMPARE,
    payload: product
  });
};
const setCheckoutData = data => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_1__.CHECKOUT_USER,
    payload: data
  });
};

/***/ }),

/***/ "./src/utils/fatchData.js":
/*!********************************!*\
  !*** ./src/utils/fatchData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fatchData": () => (/* binding */ fatchData)
/* harmony export */ });
const fatchData = async url => {
  const res = await fetch(`${url}`);
  const data = await res.json();
  return data;
};

/***/ }),

/***/ "./src/utils/filterProduct.js":
/*!************************************!*\
  !*** ./src/utils/filterProduct.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProductByFilter": () => (/* binding */ getProductByFilter),
/* harmony export */   "simpleProductFilter": () => (/* binding */ simpleProductFilter),
/* harmony export */   "exitsProduct": () => (/* binding */ exitsProduct),
/* harmony export */   "updateCart": () => (/* binding */ updateCart)
/* harmony export */ });
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage */ "./src/utils/localstorage.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const getProductByFilter = (data, filters) => {
  let filteredList = data && [...data];

  for (const key in filters) {
    if (key !== "price") {
      if (key === "search") {
        filteredList = filteredList && filteredList.filter(data => data.name.toLowerCase().includes(filters[key].toLowerCase()));
      } else {
        if (key === "colors" || key === "category" || key === "tags") {
          filteredList = filterInArray(filteredList, filters[key], key);
        } else {
          filteredList = filterByKey(filteredList, filters[key], key);
        }
      }
    } else {
      filteredList = filterByPrice(filteredList, filters[key]);
    }
  }

  return filteredList;
};

function filterByKey(filteredList, size, key) {
  let list = [];
  if (!size || size.length === 0) return filteredList;

  for (let index = 0; index < filteredList.length; index++) {
    const product = filteredList[index];
    const isOk = size.indexOf(product[key]);

    if (isOk !== -1) {
      list.push(product);
    }
  }

  return list;
}

function filterByPrice(filteredList, price) {
  return filteredList = filteredList && filteredList.filter(product => Number(product.mainPrice) >= price.min && Number(product.mainPrice) <= price.max);
}

function filterInArray(filteredList, value, key) {
  return filteredList && value.length > 0 ? filteredList.filter(data => data[key] && data[key].find(f => value.includes(f))) : filteredList;
}

const simpleProductFilter = (key, arr) => {
  let isArr = typeof key !== "string" ? true : false;
  var sorted = isArr ? key && key.map(function (value) {
    return value.toLowerCase();
  }).sort() : [key.toLowerCase()];
  return arr && arr.filter(arr => arr.category.find(e => e.toLowerCase().includes(sorted && sorted.join(","))));
};
const exitsProduct = (state, item) => {
  console.log(item);
  let value = state && state.find(product => Number(product.id) === Number(item.id));
  return value;
};
const updateCart = (state, item, type) => {
  const exitsCarts = state.carts && state.carts.find(product => Number(product.id) === Number(item.id));
  let result = {};

  if (state.carts) {
    if (exitsCarts) {
      exitsCarts.qty = type === "+" ? exitsCarts.qty += 1 : exitsCarts.qty -= 1;
      exitsCarts.totalPrice = Number(exitsCarts.qty) * Number(exitsCarts.mainPrice);
      (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)("vue-ecommerce", state.carts);
      result = _objectSpread(_objectSpread({}, state), {}, {
        carts: [...state.carts]
      });
    } else {
      item.qty = 1;
      item.totalPrice = Number(item.mainPrice);
      (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)("vue-ecommerce", [...state.carts, item]);
      result = _objectSpread(_objectSpread({}, state), {}, {
        carts: [...state.carts, item]
      });
    }
  }

  return result;
};

/***/ }),

/***/ "./src/utils/localstorage.js":
/*!***********************************!*\
  !*** ./src/utils/localstorage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setLocalStorage": () => (/* binding */ setLocalStorage),
/* harmony export */   "getLocalStorage": () => (/* binding */ getLocalStorage)
/* harmony export */ });
const setLocalStorage = (name, items) => {
  localStorage.setItem(name, JSON.stringify(items));
};
const getLocalStorage = name => {
  const data = localStorage.getItem(name);

  if (data) {
    return JSON.parse(data);
  } else {
    localStorage.setItem(name, JSON.stringify([]));
    return [];
  }
};

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeData": () => (/* binding */ activeData),
/* harmony export */   "updateState": () => (/* binding */ updateState),
/* harmony export */   "clickToActive": () => (/* binding */ clickToActive),
/* harmony export */   "getDiscount": () => (/* binding */ getDiscount),
/* harmony export */   "scroll": () => (/* binding */ scroll),
/* harmony export */   "dblock": () => (/* binding */ dblock),
/* harmony export */   "dataImage": () => (/* binding */ dataImage),
/* harmony export */   "totalPrice": () => (/* binding */ totalPrice)
/* harmony export */ });
const activeData = (active, sort, products) => {
  function _(number) {
    return number <= 9 ? `0${number}` : number;
  }

  return `Showing ${products && products.length ? _(active * sort + 1) : "00"}–${products && products.length > (active + 1) * sort ? _((active + 1) * sort) : _(products && products.length)}
     of ${_(products && products.length)} results`;
};
const updateState = (state, payload) => {
  return state && state.includes(payload) ? state.filter(brand => brand !== payload) : [...state, payload];
};
const clickToActive = (activeArr, value, setActiveArr) => {
  if (activeArr.includes(value)) {
    setActiveArr(activeArr.filter(active => active !== value));
  } else {
    setActiveArr([...activeArr, value]);
  }
};
const getDiscount = (value, discount) => {
  const valueBeforDiscount = value - value * discount / 100;
  return valueBeforDiscount.toFixed(2);
};
const scroll = () => {
  let offset = window.scrollY;
  const sticky = document.getElementById("header-sticky");

  if (sticky) {
    if (offset > 300) {
      sticky.classList.add("sticky-header");
    } else {
      sticky.classList.remove("sticky-header");
    }
  }
};
const dblock = (active, id, sort) => {
  if (active === 0) {
    return id + 1 >= 0 && id + 1 <= sort ? "d-block" : "d-none";
  } else {
    return id + 1 > active * sort && id + 1 <= (active + 1) * sort ? "d-block" : "d-none";
  }
};
const dataImage = () => {
  let d = document.querySelectorAll("[data-background");

  for (let i = 0; i < d.length; i++) {
    const element = d[i];
    element.style.backgroundImage = `url(${element.getAttribute("data-background")})`; // console.log(element.getAttribute("data-background"));
  }
};
const totalPrice = items => {
  return items && items.map(item => item.totalPrice).reduce((prev, next) => prev + next, 0).toFixed(2);
};

/***/ }),

/***/ "./public/img/banner/fotoFooter.png":
/*!******************************************!*\
  !*** ./public/img/banner/fotoFooter.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/img/banner/fotoFooter.6fdf251f3051b9d4ba54f97789c20cae.png","height":235,"width":405,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Fbanner%2FfotoFooter.6fdf251f3051b9d4ba54f97789c20cae.png&w=8&q=70"});

/***/ }),

/***/ "./public/img/icon/time.png":
/*!**********************************!*\
  !*** ./public/img/icon/time.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/img/icon/time.84f4cf33bdf53dca06042df7e47bce57.png","height":40,"width":40,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Ficon%2Ftime.84f4cf33bdf53dca06042df7e47bce57.png&w=8&q=70"});

/***/ }),

/***/ "./public/img/logo/logo-white.png":
/*!****************************************!*\
  !*** ./public/img/logo/logo-white.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/img/logo/logo-white.1c374e0b66279e8975e74290a6b05a46.png","height":22,"width":76,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Flogo%2Flogo-white.1c374e0b66279e8975e74290a6b05a46.png&w=8&q=70"});

/***/ }),

/***/ "./public/img/logo/logoFooter.png":
/*!****************************************!*\
  !*** ./public/img/logo/logoFooter.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/img/logo/logoFooter.d9c05baaa1ed6dc1e83c360455a6d977.png","height":886,"width":564,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Flogo%2FlogoFooter.d9c05baaa1ed6dc1e83c360455a6d977.png&w=8&q=70"});

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-toast");

/***/ }),

/***/ "react-input-range":
/*!************************************!*\
  !*** external "react-input-range" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-input-range");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/shop/col-3.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvc2hvcC9jb2wtMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWE7O0FBQ2JBLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELGVBQUEsR0FBa0JHLE1BQWxCOztBQUNBLElBQUlDLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJQyxLQUFLLEdBQUdGLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDhDQUFELENBQVIsQ0FBbEM7O0FBQ0EsSUFBSUUsU0FBUyxHQUFHRixtQkFBTyxDQUFDLDBEQUFELENBQXZCOztBQUNBLElBQUlHLFlBQVksR0FBR0gsbUJBQU8sQ0FBQyxzREFBRCxDQUExQjs7QUFDQSxJQUFJSSxnQkFBZ0IsR0FBR0osbUJBQU8sQ0FBQywrRUFBRCxDQUE5Qjs7QUFDQSxTQUFTSyxlQUFULENBQXlCQyxHQUF6QixFQUE4QkMsR0FBOUIsRUFBbUNaLEtBQW5DLEVBQTBDO0FBQ3RDLE1BQUlZLEdBQUcsSUFBSUQsR0FBWCxFQUFnQjtBQUNaZCxJQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JhLEdBQXRCLEVBQTJCQyxHQUEzQixFQUFnQztBQUM1QlosTUFBQUEsS0FBSyxFQUFFQSxLQURxQjtBQUU1QmEsTUFBQUEsVUFBVSxFQUFFLElBRmdCO0FBRzVCQyxNQUFBQSxZQUFZLEVBQUUsSUFIYztBQUk1QkMsTUFBQUEsUUFBUSxFQUFFO0FBSmtCLEtBQWhDO0FBTUgsR0FQRCxNQU9PO0FBQ0hKLElBQUFBLEdBQUcsQ0FBQ0MsR0FBRCxDQUFILEdBQVdaLEtBQVg7QUFDSDs7QUFDRCxTQUFPVyxHQUFQO0FBQ0g7O0FBQ0QsU0FBU1Asc0JBQVQsQ0FBZ0NPLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDSyxVQUFYLEdBQXdCTCxHQUF4QixHQUE4QjtBQUNqQ1YsSUFBQUEsT0FBTyxFQUFFVTtBQUR3QixHQUFyQztBQUdIOztBQUNELFNBQVNNLGFBQVQsQ0FBdUJDLE1BQXZCLEVBQStCO0FBQzNCLE9BQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQTdCLEVBQXFDRixDQUFDLEVBQXRDLEVBQXlDO0FBQ3JDLFFBQUlHLE1BQU0sR0FBR0YsU0FBUyxDQUFDRCxDQUFELENBQVQsSUFBZ0IsSUFBaEIsR0FBdUJDLFNBQVMsQ0FBQ0QsQ0FBRCxDQUFoQyxHQUFzQyxFQUFuRDtBQUVBLFFBQUlJLE9BQU8sR0FBRzFCLE1BQU0sQ0FBQzJCLElBQVAsQ0FBWUYsTUFBWixDQUFkOztBQUNBLFFBQUksT0FBT3pCLE1BQU0sQ0FBQzRCLHFCQUFkLEtBQXdDLFVBQTVDLEVBQXdEO0FBQ3BERixNQUFBQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ0csTUFBUixDQUFlN0IsTUFBTSxDQUFDNEIscUJBQVAsQ0FBNkJILE1BQTdCLEVBQXFDSyxNQUFyQyxDQUE0QyxVQUFTQyxHQUFULEVBQWM7QUFDL0UsZUFBTy9CLE1BQU0sQ0FBQ2dDLHdCQUFQLENBQWdDUCxNQUFoQyxFQUF3Q00sR0FBeEMsRUFBNkNmLFVBQXBEO0FBQ0gsT0FGd0IsQ0FBZixDQUFWO0FBR0g7O0FBQ0RVLElBQUFBLE9BQU8sQ0FBQ08sT0FBUixDQUFnQixVQUFTbEIsR0FBVCxFQUFjO0FBQzFCRixNQUFBQSxlQUFlLENBQUNRLE1BQUQsRUFBU04sR0FBVCxFQUFjVSxNQUFNLENBQUNWLEdBQUQsQ0FBcEIsQ0FBZjtBQUNILEtBRkQ7QUFHSDs7QUFDRCxTQUFPTSxNQUFQO0FBQ0g7O0FBQ0QsU0FBU2Esd0JBQVQsQ0FBa0NULE1BQWxDLEVBQTBDVSxRQUExQyxFQUFvRDtBQUNoRCxNQUFJVixNQUFNLElBQUksSUFBZCxFQUFvQixPQUFPLEVBQVA7O0FBRXBCLE1BQUlKLE1BQU0sR0FBR2UsNkJBQTZCLENBQUNYLE1BQUQsRUFBU1UsUUFBVCxDQUExQzs7QUFDQSxNQUFJcEIsR0FBSixFQUFTTyxDQUFUOztBQUNBLE1BQUl0QixNQUFNLENBQUM0QixxQkFBWCxFQUFrQztBQUM5QixRQUFJUyxnQkFBZ0IsR0FBR3JDLE1BQU0sQ0FBQzRCLHFCQUFQLENBQTZCSCxNQUE3QixDQUF2Qjs7QUFDQSxTQUFJSCxDQUFDLEdBQUcsQ0FBUixFQUFXQSxDQUFDLEdBQUdlLGdCQUFnQixDQUFDYixNQUFoQyxFQUF3Q0YsQ0FBQyxFQUF6QyxFQUE0QztBQUN4Q1AsTUFBQUEsR0FBRyxHQUFHc0IsZ0JBQWdCLENBQUNmLENBQUQsQ0FBdEI7QUFDQSxVQUFJYSxRQUFRLENBQUNHLE9BQVQsQ0FBaUJ2QixHQUFqQixLQUF5QixDQUE3QixFQUFnQztBQUNoQyxVQUFJLENBQUNmLE1BQU0sQ0FBQ3VDLFNBQVAsQ0FBaUJDLG9CQUFqQixDQUFzQ0MsSUFBdEMsQ0FBMkNoQixNQUEzQyxFQUFtRFYsR0FBbkQsQ0FBTCxFQUE4RDtBQUM5RE0sTUFBQUEsTUFBTSxDQUFDTixHQUFELENBQU4sR0FBY1UsTUFBTSxDQUFDVixHQUFELENBQXBCO0FBQ0g7QUFDSjs7QUFDRCxTQUFPTSxNQUFQO0FBQ0g7O0FBQ0QsU0FBU2UsNkJBQVQsQ0FBdUNYLE1BQXZDLEVBQStDVSxRQUEvQyxFQUF5RDtBQUNyRCxNQUFJVixNQUFNLElBQUksSUFBZCxFQUFvQixPQUFPLEVBQVA7QUFFcEIsTUFBSUosTUFBTSxHQUFHLEVBQWI7QUFFQSxNQUFJcUIsVUFBVSxHQUFHMUMsTUFBTSxDQUFDMkIsSUFBUCxDQUFZRixNQUFaLENBQWpCO0FBQ0EsTUFBSVYsR0FBSixFQUFTTyxDQUFUOztBQUNBLE9BQUlBLENBQUMsR0FBRyxDQUFSLEVBQVdBLENBQUMsR0FBR29CLFVBQVUsQ0FBQ2xCLE1BQTFCLEVBQWtDRixDQUFDLEVBQW5DLEVBQXNDO0FBQ2xDUCxJQUFBQSxHQUFHLEdBQUcyQixVQUFVLENBQUNwQixDQUFELENBQWhCO0FBQ0EsUUFBSWEsUUFBUSxDQUFDRyxPQUFULENBQWlCdkIsR0FBakIsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFDaENNLElBQUFBLE1BQU0sQ0FBQ04sR0FBRCxDQUFOLEdBQWNVLE1BQU0sQ0FBQ1YsR0FBRCxDQUFwQjtBQUNIOztBQUNELFNBQU9NLE1BQVA7QUFDSDs7QUFDRCxNQUFNc0IsZUFBZSxHQUFHLElBQUlDLEdBQUosRUFBeEI7O0FBQ0EsSUFBSSxNQUErQjtBQUMvQkMsRUFBQUEsTUFBTSxDQUFDQyxxQkFBUCxHQUErQixJQUEvQjtBQUNIOztBQUNELE1BQU1DLG9CQUFvQixHQUFHLENBQ3pCLE1BRHlCLEVBRXpCLE9BRnlCLEVBR3pCQyxTQUh5QixDQUE3QjtBQUtBLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyxHQUFKLENBQVEsQ0FDcEIsQ0FDSSxTQURKLEVBRUlDLGFBRkosQ0FEb0IsRUFLcEIsQ0FDSSxPQURKLEVBRUlDLFdBRkosQ0FMb0IsRUFTcEIsQ0FDSSxZQURKLEVBRUlDLGdCQUZKLENBVG9CLEVBYXBCLENBQ0ksUUFESixFQUVJQyxZQUZKLENBYm9CLEVBaUJwQixDQUNJLFFBREosRUFFSUMsWUFGSixDQWpCb0IsQ0FBUixDQUFoQjtBQXNCQSxNQUFNQyxtQkFBbUIsR0FBRyxDQUN4QixNQUR3QixFQUV4QixPQUZ3QixFQUd4QixXQUh3QixFQUl4QixZQUp3QixFQUt4QlIsU0FMd0IsQ0FBNUI7O0FBT0EsU0FBU1MsZUFBVCxDQUF5QkMsR0FBekIsRUFBOEI7QUFDMUIsU0FBT0EsR0FBRyxDQUFDdEQsT0FBSixLQUFnQjRDLFNBQXZCO0FBQ0g7O0FBQ0QsU0FBU1csaUJBQVQsQ0FBMkJELEdBQTNCLEVBQWdDO0FBQzVCLFNBQU9BLEdBQUcsQ0FBQ0EsR0FBSixLQUFZVixTQUFuQjtBQUNIOztBQUNELFNBQVNZLGNBQVQsQ0FBd0JGLEdBQXhCLEVBQTZCO0FBQ3pCLFNBQU8sT0FBT0EsR0FBUCxLQUFlLFFBQWYsS0FBNEJELGVBQWUsQ0FBQ0MsR0FBRCxDQUFmLElBQXdCQyxpQkFBaUIsQ0FBQ0QsR0FBRCxDQUFyRSxDQUFQO0FBQ0g7O0FBQ0QsTUFBTTtBQUFFRyxFQUFBQSxXQUFXLEVBQUVDLGlCQUFmO0FBQW1DQyxFQUFBQSxVQUFVLEVBQUVDLGdCQUEvQztBQUFrRUMsRUFBQUEsTUFBTSxFQUFFQyxZQUExRTtBQUF5RkMsRUFBQUEsSUFBSSxFQUFFQyxVQUEvRjtBQUE0R0MsRUFBQUEsT0FBTyxFQUFFQztBQUFySCxJQUEwSUMsc0pBQUEsSUFBaUM1RCxZQUFZLENBQUMrRCxrQkFBOUwsRUFDQTs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsQ0FDYixHQUFHYixpQkFEVSxFQUViLEdBQUdFLGdCQUZVLENBQWpCO0FBSUFGLGlCQUFpQixDQUFDYyxJQUFsQixDQUF1QixDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBUUQsQ0FBQyxHQUFHQyxDQUFuQztBQUVBSCxRQUFRLENBQUNDLElBQVQsQ0FBYyxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBUUQsQ0FBQyxHQUFHQyxDQUExQjs7QUFFQSxTQUFTQyxTQUFULENBQW1CQyxLQUFuQixFQUEwQkMsTUFBMUIsRUFBa0NDLEtBQWxDLEVBQXlDO0FBQ3JDLE1BQUlBLEtBQUssS0FBS0QsTUFBTSxLQUFLLE1BQVgsSUFBcUJBLE1BQU0sS0FBSyxZQUFyQyxDQUFULEVBQTZEO0FBQ3pEO0FBQ0EsVUFBTUUsZUFBZSxHQUFHLG9CQUF4QjtBQUNBLFVBQU1DLFlBQVksR0FBRyxFQUFyQjs7QUFDQSxTQUFJLElBQUlDLEtBQVIsRUFBZUEsS0FBSyxHQUFHRixlQUFlLENBQUNHLElBQWhCLENBQXFCSixLQUFyQixDQUF2QixFQUFvREcsS0FBcEQsRUFBMEQ7QUFDdERELE1BQUFBLFlBQVksQ0FBQ0csSUFBYixDQUFrQkMsUUFBUSxDQUFDSCxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQTFCO0FBQ0g7O0FBQ0QsUUFBSUQsWUFBWSxDQUFDNUQsTUFBakIsRUFBeUI7QUFDckIsWUFBTWlFLGFBQWEsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsR0FBR1AsWUFBWixJQUE0QixJQUFsRDtBQUNBLGFBQU87QUFDSFEsUUFBQUEsTUFBTSxFQUFFakIsUUFBUSxDQUFDN0MsTUFBVCxDQUFpQitELENBQUQsSUFBS0EsQ0FBQyxJQUFJL0IsaUJBQWlCLENBQUMsQ0FBRCxDQUFqQixHQUF1QjJCLGFBQWpELENBREw7QUFHSEssUUFBQUEsSUFBSSxFQUFFO0FBSEgsT0FBUDtBQUtIOztBQUNELFdBQU87QUFDSEYsTUFBQUEsTUFBTSxFQUFFakIsUUFETDtBQUVIbUIsTUFBQUEsSUFBSSxFQUFFO0FBRkgsS0FBUDtBQUlIOztBQUNELE1BQUksT0FBT2QsS0FBUCxLQUFpQixRQUFqQixJQUE2QkMsTUFBTSxLQUFLLE1BQXhDLElBQWtEQSxNQUFNLEtBQUssWUFBakUsRUFBK0U7QUFDM0UsV0FBTztBQUNIVyxNQUFBQSxNQUFNLEVBQUU5QixpQkFETDtBQUVIZ0MsTUFBQUEsSUFBSSxFQUFFO0FBRkgsS0FBUDtBQUlIOztBQUNELFFBQU1GLE1BQU0sR0FBRyxDQUNYLEdBQUcsSUFBSWhELEdBQUosRUFBUTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDSW9DLEtBREosRUFFSUEsS0FBSyxHQUFHO0FBQUU7QUFGZCxJQUdFZSxHQUhGLENBR09DLENBQUQsSUFBS3JCLFFBQVEsQ0FBQ3NCLElBQVQsQ0FBZUMsQ0FBRCxJQUFLQSxDQUFDLElBQUlGLENBQXhCLEtBQ0ZyQixRQUFRLENBQUNBLFFBQVEsQ0FBQ25ELE1BQVQsR0FBa0IsQ0FBbkIsQ0FKakIsQ0FSRyxDQURRLENBQWY7QUFnQkEsU0FBTztBQUNIb0UsSUFBQUEsTUFERztBQUVIRSxJQUFBQSxJQUFJLEVBQUU7QUFGSCxHQUFQO0FBSUg7O0FBQ0QsU0FBU0ssZ0JBQVQsQ0FBMEI7QUFBRXpDLEVBQUFBLEdBQUY7QUFBUTBDLEVBQUFBLFdBQVI7QUFBc0JuQixFQUFBQSxNQUF0QjtBQUErQkQsRUFBQUEsS0FBL0I7QUFBdUNxQixFQUFBQSxPQUF2QztBQUFpRG5CLEVBQUFBLEtBQWpEO0FBQXlEakIsRUFBQUE7QUFBekQsQ0FBMUIsRUFBOEY7QUFDMUYsTUFBSW1DLFdBQUosRUFBaUI7QUFDYixXQUFPO0FBQ0gxQyxNQUFBQSxHQURHO0FBRUg0QyxNQUFBQSxNQUFNLEVBQUV0RCxTQUZMO0FBR0hrQyxNQUFBQSxLQUFLLEVBQUVsQztBQUhKLEtBQVA7QUFLSDs7QUFDRCxRQUFNO0FBQUU0QyxJQUFBQSxNQUFGO0FBQVdFLElBQUFBO0FBQVgsTUFBcUJmLFNBQVMsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQWdCQyxLQUFoQixDQUFwQztBQUNBLFFBQU1xQixJQUFJLEdBQUdYLE1BQU0sQ0FBQ3BFLE1BQVAsR0FBZ0IsQ0FBN0I7QUFDQSxTQUFPO0FBQ0gwRCxJQUFBQSxLQUFLLEVBQUUsQ0FBQ0EsS0FBRCxJQUFVWSxJQUFJLEtBQUssR0FBbkIsR0FBeUIsT0FBekIsR0FBbUNaLEtBRHZDO0FBRUhvQixJQUFBQSxNQUFNLEVBQUVWLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLENBQUNDLENBQUQsRUFBSTFFLENBQUosS0FBUyxHQUFFMkMsTUFBTSxDQUFDO0FBQzdCUCxNQUFBQSxHQUQ2QjtBQUU3QjJDLE1BQUFBLE9BRjZCO0FBRzdCckIsTUFBQUEsS0FBSyxFQUFFZ0I7QUFIc0IsS0FBRCxDQUk3QixJQUFHRixJQUFJLEtBQUssR0FBVCxHQUFlRSxDQUFmLEdBQW1CMUUsQ0FBQyxHQUFHLENBQUUsR0FBRXdFLElBQUssRUFKbEMsRUFLTlUsSUFMTSxDQUtELElBTEMsQ0FGTDtBQVFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOUMsSUFBQUEsR0FBRyxFQUFFTyxNQUFNLENBQUM7QUFDUlAsTUFBQUEsR0FEUTtBQUVSMkMsTUFBQUEsT0FGUTtBQUdSckIsTUFBQUEsS0FBSyxFQUFFWSxNQUFNLENBQUNXLElBQUQ7QUFITCxLQUFEO0FBZFIsR0FBUDtBQW9CSDs7QUFDRCxTQUFTRSxNQUFULENBQWdCQyxDQUFoQixFQUFtQjtBQUNmLE1BQUksT0FBT0EsQ0FBUCxLQUFhLFFBQWpCLEVBQTJCO0FBQ3ZCLFdBQU9BLENBQVA7QUFDSDs7QUFDRCxNQUFJLE9BQU9BLENBQVAsS0FBYSxRQUFqQixFQUEyQjtBQUN2QixXQUFPbEIsUUFBUSxDQUFDa0IsQ0FBRCxFQUFJLEVBQUosQ0FBZjtBQUNIOztBQUNELFNBQU8xRCxTQUFQO0FBQ0g7O0FBQ0QsU0FBUzJELGtCQUFULENBQTRCQyxXQUE1QixFQUF5QztBQUNyQyxRQUFNQyxJQUFJLEdBQUc1RCxPQUFPLENBQUM2RCxHQUFSLENBQVk1QyxZQUFaLENBQWI7O0FBQ0EsTUFBSTJDLElBQUosRUFBVTtBQUNOLFdBQU9BLElBQUksQ0FBQ3pGLGFBQWEsQ0FBQztBQUN0QjJGLE1BQUFBLElBQUksRUFBRTNDO0FBRGdCLEtBQUQsRUFFdEJ3QyxXQUZzQixDQUFkLENBQVg7QUFHSDs7QUFDRCxRQUFNLElBQUlJLEtBQUosQ0FBVyx5REFBd0RyRyxZQUFZLENBQUNzRyxhQUFiLENBQTJCVCxJQUEzQixDQUFnQyxJQUFoQyxDQUFzQyxlQUFjdEMsWUFBYSxFQUFwSSxDQUFOO0FBQ0gsRUFDRDtBQUNBOzs7QUFDQSxTQUFTZ0QsYUFBVCxDQUF1QkMsR0FBdkIsRUFBNEJ6RCxHQUE1QixFQUFpQzBELFdBQWpDLEVBQThDQyxpQkFBOUMsRUFBaUU7QUFDN0QsTUFBSSxDQUFDRixHQUFMLEVBQVU7QUFDTjtBQUNIOztBQUNELFFBQU1HLFVBQVUsR0FBRyxNQUFJO0FBQ25CLFFBQUksQ0FBQ0gsR0FBRyxDQUFDekQsR0FBSixDQUFRNkQsVUFBUixDQUFtQixPQUFuQixDQUFMLEVBQWtDO0FBQzlCLFlBQU1yQixDQUFDLEdBQUcsWUFBWWlCLEdBQVosR0FBa0JBLEdBQUcsQ0FBQ0ssTUFBSixFQUFsQixHQUFpQ0MsT0FBTyxDQUFDQyxPQUFSLEVBQTNDO0FBQ0F4QixNQUFBQSxDQUFDLENBQUN5QixLQUFGLENBQVEsTUFBSSxDQUNYLENBREQsRUFDR0MsSUFESCxDQUNRLE1BQUk7QUFDUixZQUFJUixXQUFXLEtBQUssTUFBcEIsRUFBNEI7QUFDeEJELFVBQUFBLEdBQUcsQ0FBQ1UsS0FBSixDQUFVL0YsTUFBVixHQUFtQixNQUFuQjtBQUNBcUYsVUFBQUEsR0FBRyxDQUFDVSxLQUFKLENBQVVDLGNBQVYsR0FBMkIsTUFBM0I7QUFDQVgsVUFBQUEsR0FBRyxDQUFDVSxLQUFKLENBQVVFLGVBQVYsR0FBNEIsTUFBNUI7QUFDSDs7QUFDRHBGLFFBQUFBLGVBQWUsQ0FBQ3FGLEdBQWhCLENBQW9CdEUsR0FBcEI7O0FBQ0EsWUFBSTJELGlCQUFKLEVBQXVCO0FBQ25CLGdCQUFNO0FBQUVZLFlBQUFBLFlBQUY7QUFBaUJDLFlBQUFBO0FBQWpCLGNBQW9DZixHQUExQyxDQURtQixDQUVuQjtBQUNBOztBQUNBRSxVQUFBQSxpQkFBaUIsQ0FBQztBQUNkWSxZQUFBQSxZQURjO0FBRWRDLFlBQUFBO0FBRmMsV0FBRCxDQUFqQjtBQUlIO0FBQ0osT0FqQkQ7QUFrQkg7QUFDSixHQXRCRDs7QUF1QkEsTUFBSWYsR0FBRyxDQUFDZ0IsUUFBUixFQUFrQjtBQUNkO0FBQ0E7QUFDQTtBQUNBYixJQUFBQSxVQUFVO0FBQ2IsR0FMRCxNQUtPO0FBQ0hILElBQUFBLEdBQUcsQ0FBQ2lCLE1BQUosR0FBYWQsVUFBYjtBQUNIO0FBQ0o7O0FBQ0QsU0FBU2pILE1BQVQsQ0FBZ0JnSSxNQUFoQixFQUF3QjtBQUNwQixNQUFJO0FBQUUzRSxJQUFBQSxHQUFGO0FBQVF3QixJQUFBQSxLQUFSO0FBQWdCa0IsSUFBQUEsV0FBVyxHQUFFLEtBQTdCO0FBQXFDa0MsSUFBQUEsUUFBUSxHQUFFLEtBQS9DO0FBQXVEQyxJQUFBQSxPQUF2RDtBQUFpRUMsSUFBQUEsWUFBWSxHQUFFLE9BQS9FO0FBQXlGQyxJQUFBQSxTQUF6RjtBQUFxR3BDLElBQUFBLE9BQXJHO0FBQStHckIsSUFBQUEsS0FBL0c7QUFBdUgwRCxJQUFBQSxNQUF2SDtBQUFnSUMsSUFBQUEsU0FBaEk7QUFBNElDLElBQUFBLGNBQTVJO0FBQTZKdkIsSUFBQUEsaUJBQTdKO0FBQWlMcEQsSUFBQUEsTUFBTSxHQUFFMEMsa0JBQXpMO0FBQThNUyxJQUFBQSxXQUFXLEdBQUUsT0FBM047QUFBcU95QixJQUFBQTtBQUFyTyxNQUFzUFIsTUFBMVA7QUFBQSxNQUFrUVMsR0FBRyxHQUFHNUcsd0JBQXdCLENBQUNtRyxNQUFELEVBQVMsQ0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixhQUFqQixFQUFnQyxVQUFoQyxFQUE0QyxTQUE1QyxFQUF1RCxjQUF2RCxFQUF1RSxXQUF2RSxFQUFvRixTQUFwRixFQUErRixPQUEvRixFQUF3RyxRQUF4RyxFQUFrSCxXQUFsSCxFQUErSCxnQkFBL0gsRUFBaUosbUJBQWpKLEVBQXNLLFFBQXRLLEVBQWdMLGFBQWhMLEVBQStMLGFBQS9MLENBQVQsQ0FBaFM7O0FBQ0EsTUFBSVUsSUFBSSxHQUFHRCxHQUFYO0FBQ0EsTUFBSTdELE1BQU0sR0FBR0MsS0FBSyxHQUFHLFlBQUgsR0FBa0IsV0FBcEM7O0FBQ0EsTUFBSSxZQUFZNkQsSUFBaEIsRUFBc0I7QUFDbEI7QUFDQSxRQUFJQSxJQUFJLENBQUM5RCxNQUFULEVBQWlCQSxNQUFNLEdBQUc4RCxJQUFJLENBQUM5RCxNQUFkLENBRkMsQ0FHbEI7O0FBQ0EsV0FBTzhELElBQUksQ0FBQyxRQUFELENBQVg7QUFDSDs7QUFDRCxNQUFJQyxTQUFTLEdBQUcsRUFBaEI7O0FBQ0EsTUFBSXBGLGNBQWMsQ0FBQ0YsR0FBRCxDQUFsQixFQUF5QjtBQUNyQixVQUFNdUYsZUFBZSxHQUFHeEYsZUFBZSxDQUFDQyxHQUFELENBQWYsR0FBdUJBLEdBQUcsQ0FBQ3RELE9BQTNCLEdBQXFDc0QsR0FBN0Q7O0FBQ0EsUUFBSSxDQUFDdUYsZUFBZSxDQUFDdkYsR0FBckIsRUFBMEI7QUFDdEIsWUFBTSxJQUFJc0QsS0FBSixDQUFXLDhJQUE2SWtDLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixlQUFmLENBQWdDLEVBQXhMLENBQU47QUFDSDs7QUFDREosSUFBQUEsV0FBVyxHQUFHQSxXQUFXLElBQUlJLGVBQWUsQ0FBQ0osV0FBN0M7QUFDQUcsSUFBQUEsU0FBUyxHQUFHQyxlQUFlLENBQUN2RixHQUE1Qjs7QUFDQSxRQUFJLENBQUN1QixNQUFELElBQVdBLE1BQU0sS0FBSyxNQUExQixFQUFrQztBQUM5QnlELE1BQUFBLE1BQU0sR0FBR0EsTUFBTSxJQUFJTyxlQUFlLENBQUNQLE1BQW5DO0FBQ0ExRCxNQUFBQSxLQUFLLEdBQUdBLEtBQUssSUFBSWlFLGVBQWUsQ0FBQ2pFLEtBQWpDOztBQUNBLFVBQUksQ0FBQ2lFLGVBQWUsQ0FBQ1AsTUFBakIsSUFBMkIsQ0FBQ08sZUFBZSxDQUFDakUsS0FBaEQsRUFBdUQ7QUFDbkQsY0FBTSxJQUFJZ0MsS0FBSixDQUFXLDJKQUEwSmtDLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixlQUFmLENBQWdDLEVBQXJNLENBQU47QUFDSDtBQUNKO0FBQ0o7O0FBQ0R2RixFQUFBQSxHQUFHLEdBQUcsT0FBT0EsR0FBUCxLQUFlLFFBQWYsR0FBMEJBLEdBQTFCLEdBQWdDc0YsU0FBdEM7QUFDQSxRQUFNSSxRQUFRLEdBQUczQyxNQUFNLENBQUN6QixLQUFELENBQXZCO0FBQ0EsUUFBTXFFLFNBQVMsR0FBRzVDLE1BQU0sQ0FBQ2lDLE1BQUQsQ0FBeEI7QUFDQSxRQUFNWSxVQUFVLEdBQUc3QyxNQUFNLENBQUNKLE9BQUQsQ0FBekI7QUFDQSxNQUFJa0QsTUFBTSxHQUFHLENBQUNqQixRQUFELEtBQWNDLE9BQU8sS0FBSyxNQUFaLElBQXNCLE9BQU9BLE9BQVAsS0FBbUIsV0FBdkQsQ0FBYjs7QUFDQSxNQUFJN0UsR0FBRyxDQUFDNkQsVUFBSixDQUFlLE9BQWYsQ0FBSixFQUE2QjtBQUN6QjtBQUNBbkIsSUFBQUEsV0FBVyxHQUFHLElBQWQ7QUFDQW1ELElBQUFBLE1BQU0sR0FBRyxLQUFUO0FBQ0g7O0FBQ0QsTUFBSSxLQUFKLEVBQStELEVBRTlEOztBQUNELFlBQTJDO0FBQ3ZDLFFBQUksQ0FBQzdGLEdBQUwsRUFBVTtBQUNOLFlBQU0sSUFBSXNELEtBQUosQ0FBVywwSEFBeUhrQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNySm5FLFFBQUFBLEtBRHFKO0FBRXJKMEQsUUFBQUEsTUFGcUo7QUFHckpyQyxRQUFBQTtBQUhxSixPQUFmLENBSXZJLEVBSkcsQ0FBTjtBQUtIOztBQUNELFFBQUksQ0FBQzdDLG1CQUFtQixDQUFDaUcsUUFBcEIsQ0FBNkJ4RSxNQUE3QixDQUFMLEVBQTJDO0FBQ3ZDLFlBQU0sSUFBSStCLEtBQUosQ0FBVyxtQkFBa0J0RCxHQUFJLDhDQUE2Q3VCLE1BQU8sc0JBQXFCekIsbUJBQW1CLENBQUN1QyxHQUFwQixDQUF3QjJELE1BQXhCLEVBQWdDbEQsSUFBaEMsQ0FBcUMsR0FBckMsQ0FBMEMsR0FBcEosQ0FBTjtBQUNIOztBQUNELFFBQUksT0FBTzRDLFFBQVAsS0FBb0IsV0FBcEIsSUFBbUNPLEtBQUssQ0FBQ1AsUUFBRCxDQUF4QyxJQUFzRCxPQUFPQyxTQUFQLEtBQXFCLFdBQXJCLElBQW9DTSxLQUFLLENBQUNOLFNBQUQsQ0FBbkcsRUFBZ0g7QUFDNUcsWUFBTSxJQUFJckMsS0FBSixDQUFXLG1CQUFrQnRELEdBQUksNkVBQWpDLENBQU47QUFDSDs7QUFDRCxRQUFJdUIsTUFBTSxLQUFLLE1BQVgsS0FBc0JELEtBQUssSUFBSTBELE1BQS9CLENBQUosRUFBNEM7QUFDeENrQixNQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYyxtQkFBa0JuRyxHQUFJLDJGQUFwQztBQUNIOztBQUNELFFBQUksQ0FBQ1gsb0JBQW9CLENBQUMwRyxRQUFyQixDQUE4QmxCLE9BQTlCLENBQUwsRUFBNkM7QUFDekMsWUFBTSxJQUFJdkIsS0FBSixDQUFXLG1CQUFrQnRELEdBQUksK0NBQThDNkUsT0FBUSxzQkFBcUJ4RixvQkFBb0IsQ0FBQ2dELEdBQXJCLENBQXlCMkQsTUFBekIsRUFBaUNsRCxJQUFqQyxDQUFzQyxHQUF0QyxDQUEyQyxHQUF2SixDQUFOO0FBQ0g7O0FBQ0QsUUFBSThCLFFBQVEsSUFBSUMsT0FBTyxLQUFLLE1BQTVCLEVBQW9DO0FBQ2hDLFlBQU0sSUFBSXZCLEtBQUosQ0FBVyxtQkFBa0J0RCxHQUFJLGlGQUFqQyxDQUFOO0FBQ0g7O0FBQ0QsUUFBSTBELFdBQVcsS0FBSyxNQUFwQixFQUE0QjtBQUN4QixVQUFJbkMsTUFBTSxLQUFLLE1BQVgsSUFBcUIsQ0FBQ21FLFFBQVEsSUFBSSxDQUFiLEtBQW1CQyxTQUFTLElBQUksQ0FBaEMsSUFBcUMsSUFBOUQsRUFBb0U7QUFDaEVPLFFBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFjLG1CQUFrQm5HLEdBQUksc0dBQXBDO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDbUYsV0FBTCxFQUFrQjtBQUNkLGNBQU1pQixjQUFjLEdBQUcsQ0FDbkIsTUFEbUIsRUFFbkIsS0FGbUIsRUFHbkIsTUFIbUIsQ0FBdkIsQ0FJRTtBQUpGO0FBTUEsY0FBTSxJQUFJOUMsS0FBSixDQUFXLG1CQUFrQnRELEdBQUk7QUFDdkQ7QUFDQTtBQUNBLG1HQUFtR29HLGNBQWMsQ0FBQ3RELElBQWYsQ0FBb0IsR0FBcEIsQ0FBeUI7QUFDNUg7QUFDQSxnRkFMc0IsQ0FBTjtBQU1IO0FBQ0o7O0FBQ0QsUUFBSSxTQUFTdUMsSUFBYixFQUFtQjtBQUNmYSxNQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYyxtQkFBa0JuRyxHQUFJLGlHQUFwQztBQUNIOztBQUNELFFBQUksV0FBV3FGLElBQWYsRUFBcUI7QUFDakJhLE1BQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFjLG1CQUFrQm5HLEdBQUksdUZBQXBDO0FBQ0g7O0FBQ0QsVUFBTXFHLElBQUksR0FBR3JFLElBQUksQ0FBQ3NFLEtBQUwsQ0FBV3RFLElBQUksQ0FBQ3VFLE1BQUwsS0FBZ0IsSUFBM0IsSUFBbUMsR0FBaEQ7O0FBQ0EsUUFBSSxDQUFDN0QsV0FBRCxJQUFnQixDQUFDbkMsTUFBTSxDQUFDO0FBQ3hCUCxNQUFBQSxHQUR3QjtBQUV4QnNCLE1BQUFBLEtBQUssRUFBRStFLElBRmlCO0FBR3hCMUQsTUFBQUEsT0FBTyxFQUFFO0FBSGUsS0FBRCxDQUFOLENBSWxCb0QsUUFKa0IsQ0FJVE0sSUFBSSxDQUFDRyxRQUFMLEVBSlMsQ0FBckIsRUFJOEI7QUFDMUJOLE1BQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFjLG1CQUFrQm5HLEdBQUkseUhBQXZCLEdBQW1KLCtFQUFoSztBQUNIO0FBQ0o7O0FBQ0QsUUFBTSxDQUFDeUcsTUFBRCxFQUFTQyxhQUFULElBQTBCLENBQUMsR0FBR3hKLGdCQUFKLEVBQXNCeUosZUFBdEIsQ0FBc0M7QUFDbEVDLElBQUFBLFVBQVUsRUFBRTlCLFlBRHNEO0FBRWxFK0IsSUFBQUEsUUFBUSxFQUFFLENBQUNoQjtBQUZ1RCxHQUF0QyxDQUFoQztBQUlBLFFBQU1pQixTQUFTLEdBQUcsQ0FBQ2pCLE1BQUQsSUFBV2EsYUFBN0I7QUFDQSxNQUFJSyxZQUFKO0FBQ0EsTUFBSUMsVUFBSjtBQUNBLE1BQUlDLFFBQUo7QUFDQSxNQUFJQyxRQUFRLEdBQUc7QUFDWEMsSUFBQUEsUUFBUSxFQUFFLFVBREM7QUFFWEMsSUFBQUEsR0FBRyxFQUFFLENBRk07QUFHWEMsSUFBQUEsSUFBSSxFQUFFLENBSEs7QUFJWEMsSUFBQUEsTUFBTSxFQUFFLENBSkc7QUFLWEMsSUFBQUEsS0FBSyxFQUFFLENBTEk7QUFNWEMsSUFBQUEsU0FBUyxFQUFFLFlBTkE7QUFPWEMsSUFBQUEsT0FBTyxFQUFFLENBUEU7QUFRWEMsSUFBQUEsTUFBTSxFQUFFLE1BUkc7QUFTWEMsSUFBQUEsTUFBTSxFQUFFLE1BVEc7QUFVWEMsSUFBQUEsT0FBTyxFQUFFLE9BVkU7QUFXWHRHLElBQUFBLEtBQUssRUFBRSxDQVhJO0FBWVgwRCxJQUFBQSxNQUFNLEVBQUUsQ0FaRztBQWFYNkMsSUFBQUEsUUFBUSxFQUFFLE1BYkM7QUFjWEMsSUFBQUEsUUFBUSxFQUFFLE1BZEM7QUFlWEMsSUFBQUEsU0FBUyxFQUFFLE1BZkE7QUFnQlhDLElBQUFBLFNBQVMsRUFBRSxNQWhCQTtBQWlCWC9DLElBQUFBLFNBakJXO0FBa0JYQyxJQUFBQTtBQWxCVyxHQUFmO0FBb0JBLFFBQU0rQyxTQUFTLEdBQUd2RSxXQUFXLEtBQUssTUFBaEIsR0FBeUI7QUFDdkN0RixJQUFBQSxNQUFNLEVBQUUsWUFEK0I7QUFFdkNnRyxJQUFBQSxjQUFjLEVBQUVhLFNBQVMsSUFBSSxPQUZVO0FBR3ZDWixJQUFBQSxlQUFlLEVBQUcsUUFBT2MsV0FBWSxJQUhFO0FBSXZDK0MsSUFBQUEsa0JBQWtCLEVBQUVoRCxjQUFjLElBQUk7QUFKQyxHQUF6QixHQUtkLEVBTEo7O0FBT0EsTUFBSTNELE1BQU0sS0FBSyxNQUFmLEVBQXVCO0FBQ25CO0FBQ0F3RixJQUFBQSxZQUFZLEdBQUc7QUFDWGEsTUFBQUEsT0FBTyxFQUFFLE9BREU7QUFFWE8sTUFBQUEsUUFBUSxFQUFFLFFBRkM7QUFHWGhCLE1BQUFBLFFBQVEsRUFBRSxVQUhDO0FBSVhDLE1BQUFBLEdBQUcsRUFBRSxDQUpNO0FBS1hDLE1BQUFBLElBQUksRUFBRSxDQUxLO0FBTVhDLE1BQUFBLE1BQU0sRUFBRSxDQU5HO0FBT1hDLE1BQUFBLEtBQUssRUFBRSxDQVBJO0FBUVhDLE1BQUFBLFNBQVMsRUFBRSxZQVJBO0FBU1hHLE1BQUFBLE1BQU0sRUFBRTtBQVRHLEtBQWY7QUFXSCxHQWJELE1BYU8sSUFBSSxPQUFPakMsUUFBUCxLQUFvQixXQUFwQixJQUFtQyxPQUFPQyxTQUFQLEtBQXFCLFdBQTVELEVBQXlFO0FBQzVFO0FBQ0EsVUFBTXlDLFFBQVEsR0FBR3pDLFNBQVMsR0FBR0QsUUFBN0I7QUFDQSxVQUFNMkMsVUFBVSxHQUFHcEMsS0FBSyxDQUFDbUMsUUFBRCxDQUFMLEdBQWtCLE1BQWxCLEdBQTRCLEdBQUVBLFFBQVEsR0FBRyxHQUFJLEdBQWhFOztBQUNBLFFBQUk3RyxNQUFNLEtBQUssWUFBZixFQUE2QjtBQUN6QjtBQUNBd0YsTUFBQUEsWUFBWSxHQUFHO0FBQ1hhLFFBQUFBLE9BQU8sRUFBRSxPQURFO0FBRVhPLFFBQUFBLFFBQVEsRUFBRSxRQUZDO0FBR1hoQixRQUFBQSxRQUFRLEVBQUUsVUFIQztBQUlYSyxRQUFBQSxTQUFTLEVBQUUsWUFKQTtBQUtYRyxRQUFBQSxNQUFNLEVBQUU7QUFMRyxPQUFmO0FBT0FYLE1BQUFBLFVBQVUsR0FBRztBQUNUWSxRQUFBQSxPQUFPLEVBQUUsT0FEQTtBQUVUSixRQUFBQSxTQUFTLEVBQUUsWUFGRjtBQUdUYSxRQUFBQTtBQUhTLE9BQWI7QUFLSCxLQWRELE1BY08sSUFBSTlHLE1BQU0sS0FBSyxXQUFmLEVBQTRCO0FBQy9CO0FBQ0F3RixNQUFBQSxZQUFZLEdBQUc7QUFDWGEsUUFBQUEsT0FBTyxFQUFFLGNBREU7QUFFWEUsUUFBQUEsUUFBUSxFQUFFLE1BRkM7QUFHWEssUUFBQUEsUUFBUSxFQUFFLFFBSEM7QUFJWGhCLFFBQUFBLFFBQVEsRUFBRSxVQUpDO0FBS1hLLFFBQUFBLFNBQVMsRUFBRSxZQUxBO0FBTVhHLFFBQUFBLE1BQU0sRUFBRTtBQU5HLE9BQWY7QUFRQVgsTUFBQUEsVUFBVSxHQUFHO0FBQ1RRLFFBQUFBLFNBQVMsRUFBRSxZQURGO0FBRVRJLFFBQUFBLE9BQU8sRUFBRSxPQUZBO0FBR1RFLFFBQUFBLFFBQVEsRUFBRTtBQUhELE9BQWI7QUFLQWIsTUFBQUEsUUFBUSxHQUFJLGVBQWN2QixRQUFTLGFBQVlDLFNBQVUsc0RBQXpEO0FBQ0gsS0FoQk0sTUFnQkEsSUFBSXBFLE1BQU0sS0FBSyxPQUFmLEVBQXdCO0FBQzNCO0FBQ0F3RixNQUFBQSxZQUFZLEdBQUc7QUFDWG9CLFFBQUFBLFFBQVEsRUFBRSxRQURDO0FBRVhYLFFBQUFBLFNBQVMsRUFBRSxZQUZBO0FBR1hJLFFBQUFBLE9BQU8sRUFBRSxjQUhFO0FBSVhULFFBQUFBLFFBQVEsRUFBRSxVQUpDO0FBS1g3RixRQUFBQSxLQUFLLEVBQUVvRSxRQUxJO0FBTVhWLFFBQUFBLE1BQU0sRUFBRVc7QUFORyxPQUFmO0FBUUg7QUFDSixHQTdDTSxNQTZDQTtBQUNIO0FBQ0EsY0FBMkM7QUFDdkMsWUFBTSxJQUFJckMsS0FBSixDQUFXLG1CQUFrQnRELEdBQUkseUVBQWpDLENBQU47QUFDSDtBQUNKOztBQUNELE1BQUlzSSxhQUFhLEdBQUc7QUFDaEJ0SSxJQUFBQSxHQUFHLEVBQUUsZ0ZBRFc7QUFFaEI0QyxJQUFBQSxNQUFNLEVBQUV0RCxTQUZRO0FBR2hCa0MsSUFBQUEsS0FBSyxFQUFFbEM7QUFIUyxHQUFwQjs7QUFLQSxNQUFJd0gsU0FBSixFQUFlO0FBQ1h3QixJQUFBQSxhQUFhLEdBQUc3RixnQkFBZ0IsQ0FBQztBQUM3QnpDLE1BQUFBLEdBRDZCO0FBRTdCMEMsTUFBQUEsV0FGNkI7QUFHN0JuQixNQUFBQSxNQUg2QjtBQUk3QkQsTUFBQUEsS0FBSyxFQUFFb0UsUUFKc0I7QUFLN0IvQyxNQUFBQSxPQUFPLEVBQUVpRCxVQUxvQjtBQU03QnBFLE1BQUFBLEtBTjZCO0FBTzdCakIsTUFBQUE7QUFQNkIsS0FBRCxDQUFoQztBQVNIOztBQUNELE1BQUlnSSxTQUFTLEdBQUd2SSxHQUFoQjtBQUNBLFNBQU8sYUFBY3BELE1BQU0sQ0FBQ0YsT0FBUCxDQUFlOEwsYUFBZixDQUE2QixLQUE3QixFQUFvQztBQUNyRHJFLElBQUFBLEtBQUssRUFBRTRDO0FBRDhDLEdBQXBDLEVBRWxCQyxVQUFVLEdBQUcsYUFBY3BLLE1BQU0sQ0FBQ0YsT0FBUCxDQUFlOEwsYUFBZixDQUE2QixLQUE3QixFQUFvQztBQUM5RHJFLElBQUFBLEtBQUssRUFBRTZDO0FBRHVELEdBQXBDLEVBRTNCQyxRQUFRLEdBQUcsYUFBY3JLLE1BQU0sQ0FBQ0YsT0FBUCxDQUFlOEwsYUFBZixDQUE2QixLQUE3QixFQUFvQztBQUM1RHJFLElBQUFBLEtBQUssRUFBRTtBQUNIMkQsTUFBQUEsUUFBUSxFQUFFLE1BRFA7QUFFSEYsTUFBQUEsT0FBTyxFQUFFLE9BRk47QUFHSEQsTUFBQUEsTUFBTSxFQUFFLENBSEw7QUFJSEQsTUFBQUEsTUFBTSxFQUFFLE1BSkw7QUFLSEQsTUFBQUEsT0FBTyxFQUFFO0FBTE4sS0FEcUQ7QUFRNURnQixJQUFBQSxHQUFHLEVBQUUsRUFSdUQ7QUFTNUQsbUJBQWUsSUFUNkM7QUFVNUR6SSxJQUFBQSxHQUFHLEVBQUcsNkJBQTRCLENBQUMsR0FBR2hELFNBQUosRUFBZTBMLFFBQWYsQ0FBd0J6QixRQUF4QixDQUFrQztBQVZSLEdBQXBDLENBQWpCLEdBV04sSUFieUIsQ0FBakIsR0FhQSxJQWZRLEVBZUYsQ0FBQ0gsU0FBRCxJQUFjLGFBQWNsSyxNQUFNLENBQUNGLE9BQVAsQ0FBZThMLGFBQWYsQ0FBNkIsVUFBN0IsRUFBeUMsSUFBekMsRUFBK0MsYUFBYzVMLE1BQU0sQ0FBQ0YsT0FBUCxDQUFlOEwsYUFBZixDQUE2QixLQUE3QixFQUFvQ2xNLE1BQU0sQ0FBQ3FNLE1BQVAsQ0FBYyxFQUFkLEVBQzdJdEQsSUFENkksRUFDdkk1QyxnQkFBZ0IsQ0FBQztBQUN0QnpDLElBQUFBLEdBRHNCO0FBRXRCMEMsSUFBQUEsV0FGc0I7QUFHdEJuQixJQUFBQSxNQUhzQjtBQUl0QkQsSUFBQUEsS0FBSyxFQUFFb0UsUUFKZTtBQUt0Qi9DLElBQUFBLE9BQU8sRUFBRWlELFVBTGE7QUFNdEJwRSxJQUFBQSxLQU5zQjtBQU90QmpCLElBQUFBO0FBUHNCLEdBQUQsQ0FEdUgsRUFTNUk7QUFDQXFJLElBQUFBLFFBQVEsRUFBRSxPQURWO0FBRUEsaUJBQWEsSUFGYjtBQUdBekUsSUFBQUEsS0FBSyxFQUFFK0MsUUFIUDtBQUlBbkMsSUFBQUEsU0FBUyxFQUFFQTtBQUpYLEdBVDRJLENBQXBDLENBQTdELENBZjFCLEVBNkJmLGFBQWNuSSxNQUFNLENBQUNGLE9BQVAsQ0FBZThMLGFBQWYsQ0FBNkIsS0FBN0IsRUFBb0NsTSxNQUFNLENBQUNxTSxNQUFQLENBQWMsRUFBZCxFQUNyRHRELElBRHFELEVBQy9DaUQsYUFEK0MsRUFDaEM7QUFDcEJNLElBQUFBLFFBQVEsRUFBRSxPQURVO0FBRXBCLGlCQUFhLElBRk87QUFHcEI3RCxJQUFBQSxTQUFTLEVBQUVBLFNBSFM7QUFJcEI4RCxJQUFBQSxHQUFHLEVBQUdwRixHQUFELElBQU87QUFDUmdELE1BQUFBLE1BQU0sQ0FBQ2hELEdBQUQsQ0FBTjtBQUNBRCxNQUFBQSxhQUFhLENBQUNDLEdBQUQsRUFBTThFLFNBQU4sRUFBaUI3RSxXQUFqQixFQUE4QkMsaUJBQTlCLENBQWI7QUFDSCxLQVBtQjtBQVFwQlEsSUFBQUEsS0FBSyxFQUFFekcsYUFBYSxDQUFDLEVBQUQsRUFDakJ3SixRQURpQixFQUNQZSxTQURPO0FBUkEsR0FEZ0MsQ0FBcEMsQ0E3QkMsRUF3Q2hCckQsUUFBUSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQWNoSSxFQUFBQSxNQUFNLENBQUNGLE9BQVAsQ0FBZThMLGFBQWYsQ0FBNkJ6TCxLQUFLLENBQUNMLE9BQW5DLEVBQTRDLElBQTVDLEVBQWtELGFBQWNFLE1BQU0sQ0FBQ0YsT0FBUCxDQUFlOEwsYUFBZixDQUE2QixNQUE3QixFQUFxQztBQUMvR25MLElBQUFBLEdBQUcsRUFBRSxZQUFZaUwsYUFBYSxDQUFDdEksR0FBMUIsR0FBZ0NzSSxhQUFhLENBQUMxRixNQUE5QyxHQUF1RDBGLGFBQWEsQ0FBQzlHLEtBRHFDO0FBRS9Hc0gsSUFBQUEsR0FBRyxFQUFFLFNBRjBHO0FBRy9HQyxJQUFBQSxFQUFFLEVBQUUsT0FIMkc7QUFJL0dDLElBQUFBLElBQUksRUFBRVYsYUFBYSxDQUFDMUYsTUFBZCxHQUF1QnRELFNBQXZCLEdBQW1DZ0osYUFBYSxDQUFDdEksR0FKd0Q7QUFLL0c7QUFDQWlKLElBQUFBLFdBQVcsRUFBRVgsYUFBYSxDQUFDMUYsTUFOb0Y7QUFPL0c7QUFDQXNHLElBQUFBLFVBQVUsRUFBRVosYUFBYSxDQUFDOUc7QUFScUYsR0FBckMsQ0FBaEUsQ0FMRCxHQWNQLElBdERlLENBQXJCO0FBdURIOztBQUNELFNBQVMySCxZQUFULENBQXNCbkosR0FBdEIsRUFBMkI7QUFDdkIsU0FBT0EsR0FBRyxDQUFDLENBQUQsQ0FBSCxLQUFXLEdBQVgsR0FBaUJBLEdBQUcsQ0FBQ29KLEtBQUosQ0FBVSxDQUFWLENBQWpCLEdBQWdDcEosR0FBdkM7QUFDSDs7QUFDRCxTQUFTTixXQUFULENBQXFCO0FBQUUyRCxFQUFBQSxJQUFGO0FBQVNyRCxFQUFBQSxHQUFUO0FBQWVzQixFQUFBQSxLQUFmO0FBQXVCcUIsRUFBQUE7QUFBdkIsQ0FBckIsRUFBd0Q7QUFDcEQ7QUFDQSxRQUFNMEcsR0FBRyxHQUFHLElBQUlDLEdBQUosQ0FBUyxHQUFFakcsSUFBSyxHQUFFOEYsWUFBWSxDQUFDbkosR0FBRCxDQUFNLEVBQXBDLENBQVo7QUFDQSxRQUFNdUosTUFBTSxHQUFHRixHQUFHLENBQUNHLFlBQW5CO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLE1BQVgsRUFBbUJGLE1BQU0sQ0FBQ25HLEdBQVAsQ0FBVyxNQUFYLEtBQXNCLFFBQXpDO0FBQ0FtRyxFQUFBQSxNQUFNLENBQUNFLEdBQVAsQ0FBVyxLQUFYLEVBQWtCRixNQUFNLENBQUNuRyxHQUFQLENBQVcsS0FBWCxLQUFxQixLQUF2QztBQUNBbUcsRUFBQUEsTUFBTSxDQUFDRSxHQUFQLENBQVcsR0FBWCxFQUFnQkYsTUFBTSxDQUFDbkcsR0FBUCxDQUFXLEdBQVgsS0FBbUI5QixLQUFLLENBQUNrRixRQUFOLEVBQW5DOztBQUNBLE1BQUk3RCxPQUFKLEVBQWE7QUFDVDRHLElBQUFBLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLEdBQVgsRUFBZ0I5RyxPQUFPLENBQUM2RCxRQUFSLEVBQWhCO0FBQ0g7O0FBQ0QsU0FBTzZDLEdBQUcsQ0FBQ0wsSUFBWDtBQUNIOztBQUNELFNBQVNwSixZQUFULENBQXNCO0FBQUV5RCxFQUFBQSxJQUFGO0FBQVNyRCxFQUFBQSxHQUFUO0FBQWVzQixFQUFBQTtBQUFmLENBQXRCLEVBQStDO0FBQzNDLFNBQVEsR0FBRStCLElBQUssR0FBRThGLFlBQVksQ0FBQ25KLEdBQUQsQ0FBTSxZQUFXc0IsS0FBTSxFQUFwRDtBQUNIOztBQUNELFNBQVMzQixnQkFBVCxDQUEwQjtBQUFFMEQsRUFBQUEsSUFBRjtBQUFTckQsRUFBQUEsR0FBVDtBQUFlc0IsRUFBQUEsS0FBZjtBQUF1QnFCLEVBQUFBO0FBQXZCLENBQTFCLEVBQTZEO0FBQ3pEO0FBQ0EsUUFBTTRHLE1BQU0sR0FBRyxDQUNYLFFBRFcsRUFFWCxTQUZXLEVBR1gsT0FBT2pJLEtBSEksRUFJWCxRQUFRcUIsT0FBTyxJQUFJLE1BQW5CLENBSlcsQ0FBZjtBQU1BLE1BQUkrRyxZQUFZLEdBQUdILE1BQU0sQ0FBQ3pHLElBQVAsQ0FBWSxHQUFaLElBQW1CLEdBQXRDO0FBQ0EsU0FBUSxHQUFFTyxJQUFLLEdBQUVxRyxZQUFhLEdBQUVQLFlBQVksQ0FBQ25KLEdBQUQsQ0FBTSxFQUFsRDtBQUNIOztBQUNELFNBQVNILFlBQVQsQ0FBc0I7QUFBRUcsRUFBQUE7QUFBRixDQUF0QixFQUFnQztBQUM1QixRQUFNLElBQUlzRCxLQUFKLENBQVcsbUJBQWtCdEQsR0FBSSw2QkFBdkIsR0FBdUQseUVBQWpFLENBQU47QUFDSDs7QUFDRCxTQUFTUCxhQUFULENBQXVCO0FBQUU0RCxFQUFBQSxJQUFGO0FBQVNyRCxFQUFBQSxHQUFUO0FBQWVzQixFQUFBQSxLQUFmO0FBQXVCcUIsRUFBQUE7QUFBdkIsQ0FBdkIsRUFBMEQ7QUFDdEQsWUFBMkM7QUFDdkMsVUFBTWdILGFBQWEsR0FBRyxFQUF0QixDQUR1QyxDQUV2Qzs7QUFDQSxRQUFJLENBQUMzSixHQUFMLEVBQVUySixhQUFhLENBQUM5SCxJQUFkLENBQW1CLEtBQW5CO0FBQ1YsUUFBSSxDQUFDUCxLQUFMLEVBQVlxSSxhQUFhLENBQUM5SCxJQUFkLENBQW1CLE9BQW5COztBQUNaLFFBQUk4SCxhQUFhLENBQUM3TCxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzFCLFlBQU0sSUFBSXdGLEtBQUosQ0FBVyxvQ0FBbUNxRyxhQUFhLENBQUM3RyxJQUFkLENBQW1CLElBQW5CLENBQXlCLGdHQUErRjBDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ3ZMekYsUUFBQUEsR0FEdUw7QUFFdkxzQixRQUFBQSxLQUZ1TDtBQUd2THFCLFFBQUFBO0FBSHVMLE9BQWYsQ0FJekssRUFKRyxDQUFOO0FBS0g7O0FBQ0QsUUFBSTNDLEdBQUcsQ0FBQzZELFVBQUosQ0FBZSxJQUFmLENBQUosRUFBMEI7QUFDdEIsWUFBTSxJQUFJUCxLQUFKLENBQVcsd0JBQXVCdEQsR0FBSSwwR0FBdEMsQ0FBTjtBQUNIOztBQUNELFFBQUksQ0FBQ0EsR0FBRyxDQUFDNkQsVUFBSixDQUFlLEdBQWYsQ0FBRCxJQUF3QmpELGFBQTVCLEVBQTJDO0FBQ3ZDLFVBQUlnSixTQUFKOztBQUNBLFVBQUk7QUFDQUEsUUFBQUEsU0FBUyxHQUFHLElBQUlOLEdBQUosQ0FBUXRKLEdBQVIsQ0FBWjtBQUNILE9BRkQsQ0FFRSxPQUFPNkosR0FBUCxFQUFZO0FBQ1YzRCxRQUFBQSxPQUFPLENBQUM0RCxLQUFSLENBQWNELEdBQWQ7QUFDQSxjQUFNLElBQUl2RyxLQUFKLENBQVcsd0JBQXVCdEQsR0FBSSxpSUFBdEMsQ0FBTjtBQUNIOztBQUNELFVBQUksU0FBbUMsQ0FBQ1ksYUFBYSxDQUFDbUYsUUFBZCxDQUF1QjZELFNBQVMsQ0FBQ0csUUFBakMsQ0FBeEMsRUFBb0Y7QUFDaEYsY0FBTSxJQUFJekcsS0FBSixDQUFXLHFCQUFvQnRELEdBQUksa0NBQWlDNEosU0FBUyxDQUFDRyxRQUFTLCtEQUE3RSxHQUErSSw4RUFBekosQ0FBTjtBQUNIO0FBQ0o7QUFDSjs7QUFDRCxTQUFRLEdBQUUxRyxJQUFLLFFBQU8yRyxrQkFBa0IsQ0FBQ2hLLEdBQUQsQ0FBTSxNQUFLc0IsS0FBTSxNQUFLcUIsT0FBTyxJQUFJLEVBQUcsRUFBNUU7QUFDSDs7Ozs7Ozs7Ozs7QUNwbEJZOztBQUNickcsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsZUFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUlJLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJbU4sT0FBTyxHQUFHbk4sbUJBQU8sQ0FBQyx5RkFBRCxDQUFyQjs7QUFDQSxJQUFJb04sUUFBUSxHQUFHcE4sbUJBQU8sQ0FBQywyREFBRCxDQUF0Qjs7QUFDQSxJQUFJSSxnQkFBZ0IsR0FBR0osbUJBQU8sQ0FBQywrRUFBRCxDQUE5Qjs7QUFDQSxTQUFTRCxzQkFBVCxDQUFnQ08sR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNLLFVBQVgsR0FBd0JMLEdBQXhCLEdBQThCO0FBQ2pDVixJQUFBQSxPQUFPLEVBQUVVO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsTUFBTStNLFVBQVUsR0FBRyxFQUFuQjs7QUFFQSxTQUFTQyxRQUFULENBQWtCQyxNQUFsQixFQUEwQnJCLElBQTFCLEVBQWdDRCxFQUFoQyxFQUFvQ3VCLE9BQXBDLEVBQTZDO0FBQ3pDLE1BQUksSUFBSixFQUE4QztBQUM5QyxNQUFJLENBQUMsQ0FBQyxHQUFHTCxPQUFKLEVBQWFNLFVBQWIsQ0FBd0J2QixJQUF4QixDQUFMLEVBQW9DLE9BRkssQ0FHekM7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FxQixFQUFBQSxNQUFNLENBQUNELFFBQVAsQ0FBZ0JwQixJQUFoQixFQUFzQkQsRUFBdEIsRUFBMEJ1QixPQUExQixFQUFtQ3JHLEtBQW5DLENBQTBDNEYsR0FBRCxJQUFPO0FBQzVDLGNBQTJDO0FBQ3ZDO0FBQ0EsWUFBTUEsR0FBTjtBQUNIO0FBQ0osR0FMRDtBQU1BLFFBQU1XLFNBQVMsR0FBR0YsT0FBTyxJQUFJLE9BQU9BLE9BQU8sQ0FBQ0csTUFBZixLQUEwQixXQUFyQyxHQUFtREgsT0FBTyxDQUFDRyxNQUEzRCxHQUFvRUosTUFBTSxJQUFJQSxNQUFNLENBQUNJLE1BQXZHLENBYnlDLENBY3pDOztBQUNBTixFQUFBQSxVQUFVLENBQUNuQixJQUFJLEdBQUcsR0FBUCxHQUFhRCxFQUFiLElBQW1CeUIsU0FBUyxHQUFHLE1BQU1BLFNBQVQsR0FBcUIsRUFBakQsQ0FBRCxDQUFWLEdBQW1FLElBQW5FO0FBQ0g7O0FBQ0QsU0FBU0UsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDNUIsUUFBTTtBQUFFaE4sSUFBQUE7QUFBRixNQUFjZ04sS0FBSyxDQUFDQyxhQUExQjtBQUNBLFNBQU9qTixNQUFNLElBQUlBLE1BQU0sS0FBSyxPQUFyQixJQUFnQ2dOLEtBQUssQ0FBQ0UsT0FBdEMsSUFBaURGLEtBQUssQ0FBQ0csT0FBdkQsSUFBa0VILEtBQUssQ0FBQ0ksUUFBeEUsSUFBb0ZKLEtBQUssQ0FBQ0ssTUFBMUYsSUFBb0dMLEtBQUssQ0FBQ00sV0FBTixJQUFxQk4sS0FBSyxDQUFDTSxXQUFOLENBQWtCQyxLQUFsQixLQUE0QixDQUE1SjtBQUNIOztBQUNELFNBQVNDLFdBQVQsQ0FBcUJDLENBQXJCLEVBQXdCZixNQUF4QixFQUFnQ3JCLElBQWhDLEVBQXNDRCxFQUF0QyxFQUEwQ3NDLE9BQTFDLEVBQW1EQyxPQUFuRCxFQUE0REMsTUFBNUQsRUFBb0VkLE1BQXBFLEVBQTRFO0FBQ3hFLFFBQU07QUFBRWUsSUFBQUE7QUFBRixNQUFnQkosQ0FBQyxDQUFDUixhQUF4Qjs7QUFDQSxNQUFJWSxRQUFRLEtBQUssR0FBYixLQUFxQmQsZUFBZSxDQUFDVSxDQUFELENBQWYsSUFBc0IsQ0FBQyxDQUFDLEdBQUduQixPQUFKLEVBQWFNLFVBQWIsQ0FBd0J2QixJQUF4QixDQUE1QyxDQUFKLEVBQWdGO0FBQzVFO0FBQ0E7QUFDSDs7QUFDRG9DLEVBQUFBLENBQUMsQ0FBQ0ssY0FBRixHQU53RSxDQU94RTs7QUFDQSxNQUFJRixNQUFNLElBQUksSUFBVixJQUFrQnhDLEVBQUUsQ0FBQ25LLE9BQUgsQ0FBVyxHQUFYLEtBQW1CLENBQXpDLEVBQTRDO0FBQ3hDMk0sSUFBQUEsTUFBTSxHQUFHLEtBQVQ7QUFDSCxHQVZ1RSxDQVd4RTs7O0FBQ0FsQixFQUFBQSxNQUFNLENBQUNnQixPQUFPLEdBQUcsU0FBSCxHQUFlLE1BQXZCLENBQU4sQ0FBcUNyQyxJQUFyQyxFQUEyQ0QsRUFBM0MsRUFBK0M7QUFDM0N1QyxJQUFBQSxPQUQyQztBQUUzQ2IsSUFBQUEsTUFGMkM7QUFHM0NjLElBQUFBO0FBSDJDLEdBQS9DO0FBS0g7O0FBQ0QsU0FBU0csSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ2pCLFlBQTJDO0FBQ3ZDLGFBQVNDLGVBQVQsQ0FBeUJDLElBQXpCLEVBQStCO0FBQzNCLGFBQU8sSUFBSXZJLEtBQUosQ0FBVyxnQ0FBK0J1SSxJQUFJLENBQUN4TyxHQUFJLGdCQUFld08sSUFBSSxDQUFDQyxRQUFTLDZCQUE0QkQsSUFBSSxDQUFDRSxNQUFPLGFBQTlHLElBQThILFNBQWdDLENBQWhDLEdBQXFHLEVBQW5PLENBQVYsQ0FBUDtBQUNILEtBSHNDLENBSXZDOzs7QUFDQSxVQUFNQyxrQkFBa0IsR0FBRztBQUN2QmhELE1BQUFBLElBQUksRUFBRTtBQURpQixLQUEzQjtBQUdBLFVBQU1pRCxhQUFhLEdBQUczUCxNQUFNLENBQUMyQixJQUFQLENBQVkrTixrQkFBWixDQUF0QjtBQUNBQyxJQUFBQSxhQUFhLENBQUMxTixPQUFkLENBQXVCbEIsR0FBRCxJQUFPO0FBQ3pCLFVBQUlBLEdBQUcsS0FBSyxNQUFaLEVBQW9CO0FBQ2hCLFlBQUlzTyxLQUFLLENBQUN0TyxHQUFELENBQUwsSUFBYyxJQUFkLElBQXNCLE9BQU9zTyxLQUFLLENBQUN0TyxHQUFELENBQVosS0FBc0IsUUFBdEIsSUFBa0MsT0FBT3NPLEtBQUssQ0FBQ3RPLEdBQUQsQ0FBWixLQUFzQixRQUFsRixFQUE0RjtBQUN4RixnQkFBTXVPLGVBQWUsQ0FBQztBQUNsQnZPLFlBQUFBLEdBRGtCO0FBRWxCeU8sWUFBQUEsUUFBUSxFQUFFLHNCQUZRO0FBR2xCQyxZQUFBQSxNQUFNLEVBQUVKLEtBQUssQ0FBQ3RPLEdBQUQsQ0FBTCxLQUFlLElBQWYsR0FBc0IsTUFBdEIsR0FBK0IsT0FBT3NPLEtBQUssQ0FBQ3RPLEdBQUQ7QUFIakMsV0FBRCxDQUFyQjtBQUtIO0FBQ0osT0FSRCxNQVFPO0FBQ0g7QUFDQTtBQUNBLGNBQU02TyxDQUFDLEdBQUc3TyxHQUFWO0FBQ0g7QUFDSixLQWRELEVBVHVDLENBd0J2Qzs7QUFDQSxVQUFNOE8sa0JBQWtCLEdBQUc7QUFDdkJwRCxNQUFBQSxFQUFFLEVBQUUsSUFEbUI7QUFFdkJzQyxNQUFBQSxPQUFPLEVBQUUsSUFGYztBQUd2QkUsTUFBQUEsTUFBTSxFQUFFLElBSGU7QUFJdkJELE1BQUFBLE9BQU8sRUFBRSxJQUpjO0FBS3ZCYyxNQUFBQSxRQUFRLEVBQUUsSUFMYTtBQU12QmhDLE1BQUFBLFFBQVEsRUFBRSxJQU5hO0FBT3ZCSyxNQUFBQSxNQUFNLEVBQUU7QUFQZSxLQUEzQjtBQVNBLFVBQU00QixhQUFhLEdBQUcvUCxNQUFNLENBQUMyQixJQUFQLENBQVlrTyxrQkFBWixDQUF0QjtBQUNBRSxJQUFBQSxhQUFhLENBQUM5TixPQUFkLENBQXVCbEIsR0FBRCxJQUFPO0FBQ3pCLFlBQU1pUCxPQUFPLEdBQUcsT0FBT1gsS0FBSyxDQUFDdE8sR0FBRCxDQUE1Qjs7QUFDQSxVQUFJQSxHQUFHLEtBQUssSUFBWixFQUFrQjtBQUNkLFlBQUlzTyxLQUFLLENBQUN0TyxHQUFELENBQUwsSUFBY2lQLE9BQU8sS0FBSyxRQUExQixJQUFzQ0EsT0FBTyxLQUFLLFFBQXRELEVBQWdFO0FBQzVELGdCQUFNVixlQUFlLENBQUM7QUFDbEJ2TyxZQUFBQSxHQURrQjtBQUVsQnlPLFlBQUFBLFFBQVEsRUFBRSxzQkFGUTtBQUdsQkMsWUFBQUEsTUFBTSxFQUFFTztBQUhVLFdBQUQsQ0FBckI7QUFLSDtBQUNKLE9BUkQsTUFRTyxJQUFJalAsR0FBRyxLQUFLLFFBQVosRUFBc0I7QUFDekIsWUFBSXNPLEtBQUssQ0FBQ3RPLEdBQUQsQ0FBTCxJQUFjaVAsT0FBTyxLQUFLLFFBQTlCLEVBQXdDO0FBQ3BDLGdCQUFNVixlQUFlLENBQUM7QUFDbEJ2TyxZQUFBQSxHQURrQjtBQUVsQnlPLFlBQUFBLFFBQVEsRUFBRSxVQUZRO0FBR2xCQyxZQUFBQSxNQUFNLEVBQUVPO0FBSFUsV0FBRCxDQUFyQjtBQUtIO0FBQ0osT0FSTSxNQVFBLElBQUlqUCxHQUFHLEtBQUssU0FBUixJQUFxQkEsR0FBRyxLQUFLLFFBQTdCLElBQXlDQSxHQUFHLEtBQUssU0FBakQsSUFBOERBLEdBQUcsS0FBSyxVQUF0RSxJQUFvRkEsR0FBRyxLQUFLLFVBQWhHLEVBQTRHO0FBQy9HLFlBQUlzTyxLQUFLLENBQUN0TyxHQUFELENBQUwsSUFBYyxJQUFkLElBQXNCaVAsT0FBTyxLQUFLLFNBQXRDLEVBQWlEO0FBQzdDLGdCQUFNVixlQUFlLENBQUM7QUFDbEJ2TyxZQUFBQSxHQURrQjtBQUVsQnlPLFlBQUFBLFFBQVEsRUFBRSxXQUZRO0FBR2xCQyxZQUFBQSxNQUFNLEVBQUVPO0FBSFUsV0FBRCxDQUFyQjtBQUtIO0FBQ0osT0FSTSxNQVFBO0FBQ0g7QUFDQTtBQUNBLGNBQU1KLENBQUMsR0FBRzdPLEdBQVY7QUFDSDtBQUNKLEtBL0JELEVBbkN1QyxDQW1FdkM7QUFDQTs7QUFDQSxVQUFNa1AsU0FBUyxHQUFHM1AsTUFBTSxDQUFDRixPQUFQLENBQWU4UCxNQUFmLENBQXNCLEtBQXRCLENBQWxCOztBQUNBLFFBQUliLEtBQUssQ0FBQ3ZCLFFBQU4sSUFBa0IsQ0FBQ21DLFNBQVMsQ0FBQ0UsT0FBakMsRUFBMEM7QUFDdENGLE1BQUFBLFNBQVMsQ0FBQ0UsT0FBVixHQUFvQixJQUFwQjtBQUNBdkcsTUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsc0tBQWI7QUFDSDtBQUNKOztBQUNELFFBQU0zRCxDQUFDLEdBQUdtSixLQUFLLENBQUN2QixRQUFOLEtBQW1CLEtBQTdCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLENBQUMsR0FBR0gsUUFBSixFQUFjd0MsU0FBZCxFQUFmOztBQUNBLFFBQU07QUFBRTFELElBQUFBLElBQUY7QUFBU0QsSUFBQUE7QUFBVCxNQUFpQm5NLE1BQU0sQ0FBQ0YsT0FBUCxDQUFlaVEsT0FBZixDQUF1QixNQUFJO0FBQzlDLFVBQU0sQ0FBQ0MsWUFBRCxFQUFlQyxVQUFmLElBQTZCLENBQUMsR0FBRzVDLE9BQUosRUFBYTZDLFdBQWIsQ0FBeUJ6QyxNQUF6QixFQUFpQ3NCLEtBQUssQ0FBQzNDLElBQXZDLEVBQTZDLElBQTdDLENBQW5DO0FBQ0EsV0FBTztBQUNIQSxNQUFBQSxJQUFJLEVBQUU0RCxZQURIO0FBRUg3RCxNQUFBQSxFQUFFLEVBQUU0QyxLQUFLLENBQUM1QyxFQUFOLEdBQVcsQ0FBQyxHQUFHa0IsT0FBSixFQUFhNkMsV0FBYixDQUF5QnpDLE1BQXpCLEVBQWlDc0IsS0FBSyxDQUFDNUMsRUFBdkMsQ0FBWCxHQUF3RDhELFVBQVUsSUFBSUQ7QUFGdkUsS0FBUDtBQUlILEdBTnNCLEVBTXBCLENBQ0N2QyxNQURELEVBRUNzQixLQUFLLENBQUMzQyxJQUZQLEVBR0MyQyxLQUFLLENBQUM1QyxFQUhQLENBTm9CLENBQXZCOztBQVdBLE1BQUk7QUFBRWdFLElBQUFBLFFBQUY7QUFBYTFCLElBQUFBLE9BQWI7QUFBdUJDLElBQUFBLE9BQXZCO0FBQWlDQyxJQUFBQSxNQUFqQztBQUEwQ2QsSUFBQUE7QUFBMUMsTUFBc0RrQixLQUExRCxDQXpGaUIsQ0EwRmpCOztBQUNBLE1BQUksT0FBT29CLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDOUJBLElBQUFBLFFBQVEsR0FBRyxhQUFjblEsTUFBTSxDQUFDRixPQUFQLENBQWU4TCxhQUFmLENBQTZCLEdBQTdCLEVBQWtDLElBQWxDLEVBQXdDdUUsUUFBeEMsQ0FBekI7QUFDSCxHQTdGZ0IsQ0E4RmpCOzs7QUFDQSxNQUFJQyxLQUFKOztBQUNBLFlBQTRDO0FBQ3hDLFFBQUk7QUFDQUEsTUFBQUEsS0FBSyxHQUFHcFEsTUFBTSxDQUFDRixPQUFQLENBQWV1USxRQUFmLENBQXdCQyxJQUF4QixDQUE2QkgsUUFBN0IsQ0FBUjtBQUNILEtBRkQsQ0FFRSxPQUFPbEQsR0FBUCxFQUFZO0FBQ1YsWUFBTSxJQUFJdkcsS0FBSixDQUFXLDhEQUE2RHFJLEtBQUssQ0FBQzNDLElBQUssNEZBQXpFLElBQXdLLFNBQWdDLENBQWhDLEdBQXFHLEVBQTdRLENBQVYsQ0FBTjtBQUNIO0FBQ0osR0FORCxNQU1PLEVBRU47O0FBQ0QsUUFBTW1FLFFBQVEsR0FBR0gsS0FBSyxJQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBMUIsSUFBc0NBLEtBQUssQ0FBQ25FLEdBQTdEO0FBQ0EsUUFBTSxDQUFDdUUsa0JBQUQsRUFBcUJ0RyxTQUFyQixJQUFrQyxDQUFDLEdBQUc1SixnQkFBSixFQUFzQnlKLGVBQXRCLENBQXNDO0FBQzFFQyxJQUFBQSxVQUFVLEVBQUU7QUFEOEQsR0FBdEMsQ0FBeEM7O0FBR0EsUUFBTUgsTUFBTSxHQUFHN0osTUFBTSxDQUFDRixPQUFQLENBQWUyUSxXQUFmLENBQTRCQyxFQUFELElBQU07QUFDNUNGLElBQUFBLGtCQUFrQixDQUFDRSxFQUFELENBQWxCOztBQUNBLFFBQUlILFFBQUosRUFBYztBQUNWLFVBQUksT0FBT0EsUUFBUCxLQUFvQixVQUF4QixFQUFvQ0EsUUFBUSxDQUFDRyxFQUFELENBQVIsQ0FBcEMsS0FDSyxJQUFJLE9BQU9ILFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDbkNBLFFBQUFBLFFBQVEsQ0FBQ1YsT0FBVCxHQUFtQmEsRUFBbkI7QUFDSDtBQUNKO0FBQ0osR0FSYyxFQVFaLENBQ0NILFFBREQsRUFFQ0Msa0JBRkQsQ0FSWSxDQUFmOztBQVlBeFEsRUFBQUEsTUFBTSxDQUFDRixPQUFQLENBQWU2USxTQUFmLENBQXlCLE1BQUk7QUFDekIsVUFBTUMsY0FBYyxHQUFHMUcsU0FBUyxJQUFJdEUsQ0FBYixJQUFrQixDQUFDLEdBQUd5SCxPQUFKLEVBQWFNLFVBQWIsQ0FBd0J2QixJQUF4QixDQUF6QztBQUNBLFVBQU13QixTQUFTLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixHQUFnQ0EsTUFBaEMsR0FBeUNKLE1BQU0sSUFBSUEsTUFBTSxDQUFDSSxNQUE1RTtBQUNBLFVBQU1nRCxZQUFZLEdBQUd0RCxVQUFVLENBQUNuQixJQUFJLEdBQUcsR0FBUCxHQUFhRCxFQUFiLElBQW1CeUIsU0FBUyxHQUFHLE1BQU1BLFNBQVQsR0FBcUIsRUFBakQsQ0FBRCxDQUEvQjs7QUFDQSxRQUFJZ0QsY0FBYyxJQUFJLENBQUNDLFlBQXZCLEVBQXFDO0FBQ2pDckQsTUFBQUEsUUFBUSxDQUFDQyxNQUFELEVBQVNyQixJQUFULEVBQWVELEVBQWYsRUFBbUI7QUFDdkIwQixRQUFBQSxNQUFNLEVBQUVEO0FBRGUsT0FBbkIsQ0FBUjtBQUdIO0FBQ0osR0FURCxFQVNHLENBQ0N6QixFQURELEVBRUNDLElBRkQsRUFHQ2xDLFNBSEQsRUFJQzJELE1BSkQsRUFLQ2pJLENBTEQsRUFNQzZILE1BTkQsQ0FUSDs7QUFpQkEsUUFBTXFELFVBQVUsR0FBRztBQUNmN0UsSUFBQUEsR0FBRyxFQUFFcEMsTUFEVTtBQUVma0gsSUFBQUEsT0FBTyxFQUFHdkMsQ0FBRCxJQUFLO0FBQ1YsVUFBSTRCLEtBQUssQ0FBQ3JCLEtBQU4sSUFBZSxPQUFPcUIsS0FBSyxDQUFDckIsS0FBTixDQUFZZ0MsT0FBbkIsS0FBK0IsVUFBbEQsRUFBOEQ7QUFDMURYLFFBQUFBLEtBQUssQ0FBQ3JCLEtBQU4sQ0FBWWdDLE9BQVosQ0FBb0J2QyxDQUFwQjtBQUNIOztBQUNELFVBQUksQ0FBQ0EsQ0FBQyxDQUFDd0MsZ0JBQVAsRUFBeUI7QUFDckJ6QyxRQUFBQSxXQUFXLENBQUNDLENBQUQsRUFBSWYsTUFBSixFQUFZckIsSUFBWixFQUFrQkQsRUFBbEIsRUFBc0JzQyxPQUF0QixFQUErQkMsT0FBL0IsRUFBd0NDLE1BQXhDLEVBQWdEZCxNQUFoRCxDQUFYO0FBQ0g7QUFDSjtBQVRjLEdBQW5COztBQVdBaUQsRUFBQUEsVUFBVSxDQUFDRyxZQUFYLEdBQTJCekMsQ0FBRCxJQUFLO0FBQzNCLFFBQUksQ0FBQyxDQUFDLEdBQUduQixPQUFKLEVBQWFNLFVBQWIsQ0FBd0J2QixJQUF4QixDQUFMLEVBQW9DOztBQUNwQyxRQUFJZ0UsS0FBSyxDQUFDckIsS0FBTixJQUFlLE9BQU9xQixLQUFLLENBQUNyQixLQUFOLENBQVlrQyxZQUFuQixLQUFvQyxVQUF2RCxFQUFtRTtBQUMvRGIsTUFBQUEsS0FBSyxDQUFDckIsS0FBTixDQUFZa0MsWUFBWixDQUF5QnpDLENBQXpCO0FBQ0g7O0FBQ0RoQixJQUFBQSxRQUFRLENBQUNDLE1BQUQsRUFBU3JCLElBQVQsRUFBZUQsRUFBZixFQUFtQjtBQUN2Qm5FLE1BQUFBLFFBQVEsRUFBRTtBQURhLEtBQW5CLENBQVI7QUFHSCxHQVJELENBckppQixDQThKakI7QUFDQTs7O0FBQ0EsTUFBSStHLEtBQUssQ0FBQ1MsUUFBTixJQUFrQlksS0FBSyxDQUFDYyxJQUFOLEtBQWUsR0FBZixJQUFzQixFQUFFLFVBQVVkLEtBQUssQ0FBQ3JCLEtBQWxCLENBQTVDLEVBQXNFO0FBQ2xFLFVBQU1uQixTQUFTLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixHQUFnQ0EsTUFBaEMsR0FBeUNKLE1BQU0sSUFBSUEsTUFBTSxDQUFDSSxNQUE1RSxDQURrRSxDQUVsRTtBQUNBOztBQUNBLFVBQU1zRCxZQUFZLEdBQUcxRCxNQUFNLElBQUlBLE1BQU0sQ0FBQzJELGNBQWpCLElBQW1DLENBQUMsR0FBRy9ELE9BQUosRUFBYWdFLGVBQWIsQ0FBNkJsRixFQUE3QixFQUFpQ3lCLFNBQWpDLEVBQTRDSCxNQUFNLElBQUlBLE1BQU0sQ0FBQzZELE9BQTdELEVBQXNFN0QsTUFBTSxJQUFJQSxNQUFNLENBQUM4RCxhQUF2RixDQUF4RDtBQUNBVCxJQUFBQSxVQUFVLENBQUMxRSxJQUFYLEdBQWtCK0UsWUFBWSxJQUFJLENBQUMsR0FBRzlELE9BQUosRUFBYW1FLFdBQWIsQ0FBeUIsQ0FBQyxHQUFHbkUsT0FBSixFQUFhb0UsU0FBYixDQUF1QnRGLEVBQXZCLEVBQTJCeUIsU0FBM0IsRUFBc0NILE1BQU0sSUFBSUEsTUFBTSxDQUFDaUUsYUFBdkQsQ0FBekIsQ0FBbEM7QUFDSDs7QUFDRCxTQUFPLGFBQWMxUixNQUFNLENBQUNGLE9BQVAsQ0FBZTZSLFlBQWYsQ0FBNEJ2QixLQUE1QixFQUFtQ1UsVUFBbkMsQ0FBckI7QUFDSDs7QUFDRCxJQUFJYyxRQUFRLEdBQUc5QyxJQUFmO0FBQ0FsUCxlQUFBLEdBQWtCZ1MsUUFBbEI7Ozs7Ozs7Ozs7O0FDak9hOztBQUNibFMsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsK0JBQUEsR0FBa0NpUyx1QkFBbEM7QUFDQWpTLGtDQUFBLEdBQXFDLEtBQUssQ0FBMUM7O0FBQ0EsU0FBU2lTLHVCQUFULENBQWlDaE8sSUFBakMsRUFBdUM7QUFDbkMsU0FBT0EsSUFBSSxDQUFDa08sUUFBTCxDQUFjLEdBQWQsS0FBc0JsTyxJQUFJLEtBQUssR0FBL0IsR0FBcUNBLElBQUksQ0FBQzJJLEtBQUwsQ0FBVyxDQUFYLEVBQWMsQ0FBQyxDQUFmLENBQXJDLEdBQXlEM0ksSUFBaEU7QUFDSDs7QUFDRCxNQUFNaU8sMEJBQTBCLEdBQUc3TixNQUFBLEdBQXFDSixDQUFyQyxHQVEvQmdPLHVCQVJKO0FBU0FqUyxrQ0FBQSxHQUFxQ2tTLDBCQUFyQzs7Ozs7Ozs7Ozs7QUNsQmE7O0FBQ2JwUyw4Q0FBNkM7QUFDekNHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBRCwyQkFBQSxHQUE4QkEsMEJBQUEsR0FBNkIsS0FBSyxDQUFoRTs7QUFDQSxNQUFNc1MsbUJBQW1CLEdBQUcsT0FBT0UsSUFBUCxLQUFnQixXQUFoQixJQUErQkEsSUFBSSxDQUFDRixtQkFBcEMsSUFBMkRFLElBQUksQ0FBQ0YsbUJBQUwsQ0FBeUJHLElBQXpCLENBQThCQyxNQUE5QixDQUEzRCxJQUFvRyxVQUFTQyxFQUFULEVBQWE7QUFDekksTUFBSUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsRUFBWjtBQUNBLFNBQU9DLFVBQVUsQ0FBQyxZQUFXO0FBQ3pCSixJQUFBQSxFQUFFLENBQUM7QUFDQ0ssTUFBQUEsVUFBVSxFQUFFLEtBRGI7QUFFQ0MsTUFBQUEsYUFBYSxFQUFFLFlBQVc7QUFDdEIsZUFBT3pOLElBQUksQ0FBQzBOLEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBTUwsSUFBSSxDQUFDQyxHQUFMLEtBQWFGLEtBQW5CLENBQVosQ0FBUDtBQUNIO0FBSkYsS0FBRCxDQUFGO0FBTUgsR0FQZ0IsRUFPZCxDQVBjLENBQWpCO0FBUUgsQ0FWRDs7QUFXQTVTLDJCQUFBLEdBQThCc1MsbUJBQTlCOztBQUNBLE1BQU1DLGtCQUFrQixHQUFHLE9BQU9DLElBQVAsS0FBZ0IsV0FBaEIsSUFBK0JBLElBQUksQ0FBQ0Qsa0JBQXBDLElBQTBEQyxJQUFJLENBQUNELGtCQUFMLENBQXdCRSxJQUF4QixDQUE2QkMsTUFBN0IsQ0FBMUQsSUFBa0csVUFBU1MsRUFBVCxFQUFhO0FBQ3RJLFNBQU9DLFlBQVksQ0FBQ0QsRUFBRCxDQUFuQjtBQUNILENBRkQ7O0FBR0FuVCwwQkFBQSxHQUE2QnVTLGtCQUE3Qjs7Ozs7Ozs7Ozs7QUNwQmE7O0FBQ2J6Uyw4Q0FBNkM7QUFDekNHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBRCxzQkFBQSxHQUF5QnFULGNBQXpCO0FBQ0FyVCxvQkFBQSxHQUF1QnNULFlBQXZCO0FBQ0F0VCw4QkFBQSxHQUFpQ3VULHNCQUFqQztBQUNBdlQseUJBQUEsR0FBNEJ3VCxpQkFBNUI7O0FBQ0EsSUFBSUMsc0JBQXNCLEdBQUdwVCxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxrSEFBRCxDQUFSLENBQW5EOztBQUNBLElBQUlvVCxvQkFBb0IsR0FBR3BULG1CQUFPLENBQUMseUZBQUQsQ0FBbEM7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NPLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDSyxVQUFYLEdBQXdCTCxHQUF4QixHQUE4QjtBQUNqQ1YsSUFBQUEsT0FBTyxFQUFFVTtBQUR3QixHQUFyQztBQUdILEVBQ0Q7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU0rUyxpQkFBaUIsR0FBRyxJQUExQjs7QUFDQSxTQUFTQyxVQUFULENBQW9CL1MsR0FBcEIsRUFBeUJnRixHQUF6QixFQUE4QmdPLFNBQTlCLEVBQXlDO0FBQ3JDLE1BQUlDLEtBQUssR0FBR2pPLEdBQUcsQ0FBQ2UsR0FBSixDQUFRL0YsR0FBUixDQUFaOztBQUNBLE1BQUlpVCxLQUFKLEVBQVc7QUFDUCxRQUFJLFlBQVlBLEtBQWhCLEVBQXVCO0FBQ25CLGFBQU9BLEtBQUssQ0FBQ0MsTUFBYjtBQUNIOztBQUNELFdBQU94TSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JzTSxLQUFoQixDQUFQO0FBQ0g7O0FBQ0QsTUFBSUUsUUFBSjtBQUNBLFFBQU1DLElBQUksR0FBRyxJQUFJMU0sT0FBSixDQUFhQyxPQUFELElBQVc7QUFDaEN3TSxJQUFBQSxRQUFRLEdBQUd4TSxPQUFYO0FBQ0gsR0FGWSxDQUFiO0FBR0EzQixFQUFBQSxHQUFHLENBQUNvSCxHQUFKLENBQVFwTSxHQUFSLEVBQWFpVCxLQUFLLEdBQUc7QUFDakJ0TSxJQUFBQSxPQUFPLEVBQUV3TSxRQURRO0FBRWpCRCxJQUFBQSxNQUFNLEVBQUVFO0FBRlMsR0FBckI7QUFJQSxTQUFPSixTQUFTLEdBQUdBLFNBQVMsR0FBR25NLElBQVosQ0FBa0J6SCxLQUFELEtBQVUrVCxRQUFRLENBQUMvVCxLQUFELENBQVIsRUFBaUJBLEtBQTNCLENBQWpCLENBQUgsR0FDWmdVLElBREo7QUFFSDs7QUFDRCxTQUFTQyxXQUFULENBQXFCQyxJQUFyQixFQUEyQjtBQUN2QixNQUFJO0FBQ0FBLElBQUFBLElBQUksR0FBR0MsUUFBUSxDQUFDcEksYUFBVCxDQUF1QixNQUF2QixDQUFQO0FBQ0EsV0FBTztBQUNQO0FBQ0MsT0FBQyxDQUFDMEcsTUFBTSxDQUFDMkIsb0JBQVQsSUFBaUMsQ0FBQyxDQUFDRCxRQUFRLENBQUNFLFlBQTdDLElBQThESCxJQUFJLENBQUNJLE9BQUwsQ0FBYUMsUUFBYixDQUFzQixVQUF0QjtBQUY5RDtBQUdILEdBTEQsQ0FLRSxPQUFPNUYsQ0FBUCxFQUFVO0FBQ1IsV0FBTyxLQUFQO0FBQ0g7QUFDSjs7QUFDRCxNQUFNNkYsV0FBVyxHQUFHUCxXQUFXLEVBQS9COztBQUNBLFNBQVNRLGNBQVQsQ0FBd0JsSSxJQUF4QixFQUE4QkQsRUFBOUIsRUFBa0M0SCxJQUFsQyxFQUF3QztBQUNwQyxTQUFPLElBQUk1TSxPQUFKLENBQVksQ0FBQ29OLEdBQUQsRUFBTUMsR0FBTixLQUFZO0FBQzNCLFFBQUlSLFFBQVEsQ0FBQ1MsYUFBVCxDQUF3QiwrQkFBOEJySSxJQUFLLElBQTNELENBQUosRUFBcUU7QUFDakUsYUFBT21JLEdBQUcsRUFBVjtBQUNIOztBQUNEUixJQUFBQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ3BJLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBUCxDQUoyQixDQUszQjs7QUFDQSxRQUFJTyxFQUFKLEVBQVE0SCxJQUFJLENBQUM1SCxFQUFMLEdBQVVBLEVBQVY7QUFDUjRILElBQUFBLElBQUksQ0FBQzdILEdBQUwsR0FBWSxVQUFaO0FBQ0E2SCxJQUFBQSxJQUFJLENBQUNXLFdBQUwsR0FBbUJ6USxTQUFuQjtBQUNBOFAsSUFBQUEsSUFBSSxDQUFDak0sTUFBTCxHQUFjeU0sR0FBZDtBQUNBUixJQUFBQSxJQUFJLENBQUNhLE9BQUwsR0FBZUosR0FBZixDQVYyQixDQVczQjs7QUFDQVQsSUFBQUEsSUFBSSxDQUFDM0gsSUFBTCxHQUFZQSxJQUFaO0FBQ0E0SCxJQUFBQSxRQUFRLENBQUNhLElBQVQsQ0FBY0MsV0FBZCxDQUEwQmYsSUFBMUI7QUFDSCxHQWRNLENBQVA7QUFlSDs7QUFDRCxNQUFNZ0IsZ0JBQWdCLEdBQUdDLE1BQU0sQ0FBQyxrQkFBRCxDQUEvQjs7QUFDQSxTQUFTL0IsY0FBVCxDQUF3QmhHLEdBQXhCLEVBQTZCO0FBQ3pCLFNBQU92TixNQUFNLENBQUNDLGNBQVAsQ0FBc0JzTixHQUF0QixFQUEyQjhILGdCQUEzQixFQUE2QyxFQUE3QyxDQUFQO0FBRUg7O0FBQ0QsU0FBUzdCLFlBQVQsQ0FBc0JqRyxHQUF0QixFQUEyQjtBQUN2QixTQUFPQSxHQUFHLElBQUk4SCxnQkFBZ0IsSUFBSTlILEdBQWxDO0FBQ0g7O0FBQ0QsU0FBU2dJLFlBQVQsQ0FBc0I3UixHQUF0QixFQUEyQjhSLE1BQTNCLEVBQW1DO0FBQy9CLFNBQU8sSUFBSS9OLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVUrTixNQUFWLEtBQW1CO0FBQ2xDRCxJQUFBQSxNQUFNLEdBQUdsQixRQUFRLENBQUNwSSxhQUFULENBQXVCLFFBQXZCLENBQVQsQ0FEa0MsQ0FFbEM7QUFDQTtBQUNBOztBQUNBc0osSUFBQUEsTUFBTSxDQUFDcE4sTUFBUCxHQUFnQlYsT0FBaEI7O0FBQ0E4TixJQUFBQSxNQUFNLENBQUNOLE9BQVAsR0FBaUIsTUFBSU8sTUFBTSxDQUFDbEMsY0FBYyxDQUFDLElBQUl2TSxLQUFKLENBQVcsMEJBQXlCdEQsR0FBSSxFQUF4QyxDQUFELENBQWYsQ0FBM0IsQ0FOa0MsQ0FRbEM7QUFDQTs7O0FBQ0E4UixJQUFBQSxNQUFNLENBQUNSLFdBQVAsR0FBcUJ6USxTQUFyQixDQVZrQyxDQVdsQztBQUNBOztBQUNBaVIsSUFBQUEsTUFBTSxDQUFDOVIsR0FBUCxHQUFhQSxHQUFiO0FBQ0E0USxJQUFBQSxRQUFRLENBQUNvQixJQUFULENBQWNOLFdBQWQsQ0FBMEJJLE1BQTFCO0FBQ0gsR0FmTSxDQUFQO0FBZ0JILEVBQ0Q7QUFDQTs7O0FBQ0EsSUFBSUcsZUFBSixFQUNBOztBQUNBLFNBQVNDLHlCQUFULENBQW1DMVAsQ0FBbkMsRUFBc0MyUCxFQUF0QyxFQUEwQ3RJLEdBQTFDLEVBQStDO0FBQzNDLFNBQU8sSUFBSTlGLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVUrTixNQUFWLEtBQW1CO0FBQ2xDLFFBQUlLLFNBQVMsR0FBRyxLQUFoQjtBQUNBNVAsSUFBQUEsQ0FBQyxDQUFDMEIsSUFBRixDQUFRbU8sQ0FBRCxJQUFLO0FBQ1I7QUFDQUQsTUFBQUEsU0FBUyxHQUFHLElBQVo7QUFDQXBPLE1BQUFBLE9BQU8sQ0FBQ3FPLENBQUQsQ0FBUDtBQUNILEtBSkQsRUFJR3BPLEtBSkgsQ0FJUzhOLE1BSlQsRUFGa0MsQ0FPbEM7QUFDQTs7QUFDQSxjQUE0QztBQUN4QyxPQUFDRSxlQUFlLElBQUlsTyxPQUFPLENBQUNDLE9BQVIsRUFBcEIsRUFBdUNFLElBQXZDLENBQTRDLE1BQUk7QUFDNUMsU0FBQyxHQUFHZ00sb0JBQUosRUFBMEJwQixtQkFBMUIsQ0FBOEMsTUFBSVMsVUFBVSxDQUFDLE1BQUk7QUFDekQsY0FBSSxDQUFDNkMsU0FBTCxFQUFnQjtBQUNaTCxZQUFBQSxNQUFNLENBQUNsSSxHQUFELENBQU47QUFDSDtBQUNKLFNBSnVELEVBSXJEc0ksRUFKcUQsQ0FBNUQ7QUFNSCxPQVBEO0FBUUg7O0FBQ0QsZUFBNEMsRUFPM0M7QUFDSixHQTNCTSxDQUFQO0FBNEJIOztBQUNELFNBQVNwQyxzQkFBVCxHQUFrQztBQUM5QixNQUFJZixJQUFJLENBQUNzRCxnQkFBVCxFQUEyQjtBQUN2QixXQUFPdk8sT0FBTyxDQUFDQyxPQUFSLENBQWdCZ0wsSUFBSSxDQUFDc0QsZ0JBQXJCLENBQVA7QUFDSDs7QUFDRCxRQUFNQyxlQUFlLEdBQUcsSUFBSXhPLE9BQUosQ0FBYUMsT0FBRCxJQUFXO0FBQzNDO0FBQ0EsVUFBTW1MLEVBQUUsR0FBR0gsSUFBSSxDQUFDd0QsbUJBQWhCOztBQUNBeEQsSUFBQUEsSUFBSSxDQUFDd0QsbUJBQUwsR0FBMkIsTUFBSTtBQUMzQnhPLE1BQUFBLE9BQU8sQ0FBQ2dMLElBQUksQ0FBQ3NELGdCQUFOLENBQVA7QUFDQW5ELE1BQUFBLEVBQUUsSUFBSUEsRUFBRSxFQUFSO0FBQ0gsS0FIRDtBQUlILEdBUHVCLENBQXhCO0FBUUEsU0FBTytDLHlCQUF5QixDQUFDSyxlQUFELEVBQWtCcEMsaUJBQWxCLEVBQXFDTixjQUFjLENBQUMsSUFBSXZNLEtBQUosQ0FBVSxzQ0FBVixDQUFELENBQW5ELENBQWhDO0FBQ0g7O0FBQ0QsU0FBU21QLGdCQUFULENBQTBCQyxXQUExQixFQUF1Q0MsS0FBdkMsRUFBOEM7QUFDMUMsWUFBNEM7QUFDeEMsV0FBTzVPLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjtBQUNuQjRPLE1BQUFBLE9BQU8sRUFBRSxDQUNMRixXQUFXLEdBQUcsNEJBQWQsR0FBNkNHLFNBQVMsQ0FBQyxDQUFDLEdBQUc1QyxzQkFBSixFQUE0QnZULE9BQTVCLENBQW9DaVcsS0FBcEMsRUFBMkMsS0FBM0MsQ0FBRCxDQURqRCxDQURVO0FBSW5CO0FBQ0FHLE1BQUFBLEdBQUcsRUFBRTtBQUxjLEtBQWhCLENBQVA7QUFPSDs7QUFDRCxTQUFPL0Msc0JBQXNCLEdBQUc3TCxJQUF6QixDQUErQjZPLFFBQUQsSUFBWTtBQUM3QyxRQUFJLEVBQUVKLEtBQUssSUFBSUksUUFBWCxDQUFKLEVBQTBCO0FBQ3RCLFlBQU1sRCxjQUFjLENBQUMsSUFBSXZNLEtBQUosQ0FBVywyQkFBMEJxUCxLQUFNLEVBQTNDLENBQUQsQ0FBcEI7QUFDSDs7QUFDRCxVQUFNSyxRQUFRLEdBQUdELFFBQVEsQ0FBQ0osS0FBRCxDQUFSLENBQWdCdFEsR0FBaEIsQ0FBcUJpTyxLQUFELElBQVNvQyxXQUFXLEdBQUcsU0FBZCxHQUEwQkcsU0FBUyxDQUFDdkMsS0FBRCxDQUFoRSxDQUFqQjtBQUVBLFdBQU87QUFDSHNDLE1BQUFBLE9BQU8sRUFBRUksUUFBUSxDQUFDNVUsTUFBVCxDQUFpQjZVLENBQUQsSUFBS0EsQ0FBQyxDQUFDdEUsUUFBRixDQUFXLEtBQVgsQ0FBckIsQ0FETjtBQUdIbUUsTUFBQUEsR0FBRyxFQUFFRSxRQUFRLENBQUM1VSxNQUFULENBQWlCNlUsQ0FBRCxJQUFLQSxDQUFDLENBQUN0RSxRQUFGLENBQVcsTUFBWCxDQUFyQjtBQUhGLEtBQVA7QUFNSCxHQVpNLENBQVA7QUFhSDs7QUFDRCxTQUFTcUIsaUJBQVQsQ0FBMkIwQyxXQUEzQixFQUF3QztBQUNwQyxRQUFNUSxXQUFXLEdBQUcsSUFBSTFULEdBQUosRUFBcEI7QUFDQSxRQUFNMlQsYUFBYSxHQUFHLElBQUkzVCxHQUFKLEVBQXRCO0FBQ0EsUUFBTTRULFdBQVcsR0FBRyxJQUFJNVQsR0FBSixFQUFwQjtBQUNBLFFBQU02VCxNQUFNLEdBQUcsSUFBSTdULEdBQUosRUFBZjs7QUFDQSxXQUFTOFQsa0JBQVQsQ0FBNEJ0VCxHQUE1QixFQUFpQztBQUM3QixRQUFJeVEsSUFBSSxHQUFHMEMsYUFBYSxDQUFDL1AsR0FBZCxDQUFrQnBELEdBQWxCLENBQVg7O0FBQ0EsUUFBSXlRLElBQUosRUFBVTtBQUNOLGFBQU9BLElBQVA7QUFDSCxLQUo0QixDQUs3Qjs7O0FBQ0EsUUFBSUcsUUFBUSxDQUFDUyxhQUFULENBQXdCLGdCQUFlclIsR0FBSSxJQUEzQyxDQUFKLEVBQXFEO0FBQ2pELGFBQU8rRCxPQUFPLENBQUNDLE9BQVIsRUFBUDtBQUNIOztBQUNEbVAsSUFBQUEsYUFBYSxDQUFDMUosR0FBZCxDQUFrQnpKLEdBQWxCLEVBQXVCeVEsSUFBSSxHQUFHb0IsWUFBWSxDQUFDN1IsR0FBRCxDQUExQztBQUNBLFdBQU95USxJQUFQO0FBQ0g7O0FBQ0QsV0FBUzhDLGVBQVQsQ0FBeUJ2SyxJQUF6QixFQUErQjtBQUMzQixRQUFJeUgsSUFBSSxHQUFHMkMsV0FBVyxDQUFDaFEsR0FBWixDQUFnQjRGLElBQWhCLENBQVg7O0FBQ0EsUUFBSXlILElBQUosRUFBVTtBQUNOLGFBQU9BLElBQVA7QUFDSDs7QUFDRDJDLElBQUFBLFdBQVcsQ0FBQzNKLEdBQVosQ0FBZ0JULElBQWhCLEVBQXNCeUgsSUFBSSxHQUFHK0MsS0FBSyxDQUFDeEssSUFBRCxDQUFMLENBQVk5RSxJQUFaLENBQWtCaU4sR0FBRCxJQUFPO0FBQ2pELFVBQUksQ0FBQ0EsR0FBRyxDQUFDc0MsRUFBVCxFQUFhO0FBQ1QsY0FBTSxJQUFJblEsS0FBSixDQUFXLDhCQUE2QjBGLElBQUssRUFBN0MsQ0FBTjtBQUNIOztBQUNELGFBQU9tSSxHQUFHLENBQUN1QyxJQUFKLEdBQVd4UCxJQUFYLENBQWlCd1AsSUFBRCxLQUFTO0FBQ3hCMUssUUFBQUEsSUFBSSxFQUFFQSxJQURrQjtBQUV4QjJLLFFBQUFBLE9BQU8sRUFBRUQ7QUFGZSxPQUFULENBQWhCLENBQVA7QUFLSCxLQVQ0QixFQVMxQnpQLEtBVDBCLENBU25CNEYsR0FBRCxJQUFPO0FBQ1osWUFBTWdHLGNBQWMsQ0FBQ2hHLEdBQUQsQ0FBcEI7QUFDSCxLQVg0QixDQUE3QjtBQVlBLFdBQU80RyxJQUFQO0FBQ0g7O0FBQ0QsU0FBTztBQUNIbUQsSUFBQUEsY0FBYyxDQUFFakIsS0FBRixFQUFTO0FBQ25CLGFBQU92QyxVQUFVLENBQUN1QyxLQUFELEVBQVFPLFdBQVIsQ0FBakI7QUFDSCxLQUhFOztBQUlIVyxJQUFBQSxZQUFZLENBQUVsQixLQUFGLEVBQVNtQixPQUFULEVBQWtCO0FBQzFCL1AsTUFBQUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCOFAsT0FBaEIsRUFBeUI1UCxJQUF6QixDQUErQjZQLEVBQUQsSUFBTUEsRUFBRSxFQUF0QyxFQUNFN1AsSUFERixDQUNRMUgsT0FBRCxLQUFZO0FBQ1h3WCxRQUFBQSxTQUFTLEVBQUV4WCxPQUFPLElBQUlBLE9BQU8sQ0FBQ0UsT0FBbkIsSUFBOEJGLE9BRDlCO0FBRVhBLFFBQUFBLE9BQU8sRUFBRUE7QUFGRSxPQUFaLENBRFAsRUFLR3FOLEdBQUQsS0FBUTtBQUNGQyxRQUFBQSxLQUFLLEVBQUVEO0FBREwsT0FBUixDQUxGLEVBUUUzRixJQVJGLENBUVErUCxLQUFELElBQVM7QUFDWixjQUFNQyxHQUFHLEdBQUdoQixXQUFXLENBQUM5UCxHQUFaLENBQWdCdVAsS0FBaEIsQ0FBWjtBQUNBTyxRQUFBQSxXQUFXLENBQUN6SixHQUFaLENBQWdCa0osS0FBaEIsRUFBdUJzQixLQUF2QjtBQUNBLFlBQUlDLEdBQUcsSUFBSSxhQUFhQSxHQUF4QixFQUE2QkEsR0FBRyxDQUFDbFEsT0FBSixDQUFZaVEsS0FBWjtBQUNoQyxPQVpEO0FBYUgsS0FsQkU7O0FBbUJIRSxJQUFBQSxTQUFTLENBQUV4QixLQUFGLEVBQVN2SSxRQUFULEVBQW1CO0FBQ3hCLGFBQU9nRyxVQUFVLENBQUN1QyxLQUFELEVBQVFVLE1BQVIsRUFBZ0IsTUFBSTtBQUNqQyxjQUFNZSxpQkFBaUIsR0FBRzNCLGdCQUFnQixDQUFDQyxXQUFELEVBQWNDLEtBQWQsQ0FBaEIsQ0FBcUN6TyxJQUFyQyxDQUEwQyxDQUFDO0FBQUUwTyxVQUFBQSxPQUFGO0FBQVlFLFVBQUFBO0FBQVosU0FBRCxLQUFzQjtBQUN0RixpQkFBTy9PLE9BQU8sQ0FBQ3FCLEdBQVIsQ0FBWSxDQUNmOE4sV0FBVyxDQUFDcE4sR0FBWixDQUFnQjZNLEtBQWhCLElBQXlCLEVBQXpCLEdBQThCNU8sT0FBTyxDQUFDcUIsR0FBUixDQUFZd04sT0FBTyxDQUFDdlEsR0FBUixDQUFZaVIsa0JBQVosQ0FBWixDQURmLEVBRWZ2UCxPQUFPLENBQUNxQixHQUFSLENBQVkwTixHQUFHLENBQUN6USxHQUFKLENBQVFrUixlQUFSLENBQVosQ0FGZSxDQUFaLENBQVA7QUFJSCxTQUx5QixFQUt2QnJQLElBTHVCLENBS2pCaU4sR0FBRCxJQUFPO0FBQ1gsaUJBQU8sS0FBS3lDLGNBQUwsQ0FBb0JqQixLQUFwQixFQUEyQnpPLElBQTNCLENBQWlDbVEsVUFBRCxLQUFlO0FBQzlDQSxZQUFBQSxVQUQ4QztBQUU5Q0MsWUFBQUEsTUFBTSxFQUFFbkQsR0FBRyxDQUFDLENBQUQ7QUFGbUMsV0FBZixDQUFoQyxDQUFQO0FBS0gsU0FYeUIsQ0FBMUI7O0FBWUEsa0JBQTRDO0FBQ3hDYyxVQUFBQSxlQUFlLEdBQUcsSUFBSWxPLE9BQUosQ0FBYUMsT0FBRCxJQUFXO0FBQ3JDLGdCQUFJb1EsaUJBQUosRUFBdUI7QUFDbkIscUJBQU9BLGlCQUFpQixDQUFDRyxPQUFsQixDQUEwQixNQUFJO0FBQ2pDdlEsZ0JBQUFBLE9BQU87QUFDVixlQUZNLENBQVA7QUFHSDtBQUNKLFdBTmlCLENBQWxCO0FBT0g7O0FBQ0QsZUFBT2tPLHlCQUF5QixDQUFDa0MsaUJBQUQsRUFBb0JqRSxpQkFBcEIsRUFBdUNOLGNBQWMsQ0FBQyxJQUFJdk0sS0FBSixDQUFXLG1DQUFrQ3FQLEtBQU0sRUFBbkQsQ0FBRCxDQUFyRCxDQUF6QixDQUF1SXpPLElBQXZJLENBQTRJLENBQUM7QUFBRW1RLFVBQUFBLFVBQUY7QUFBZUMsVUFBQUE7QUFBZixTQUFELEtBQTRCO0FBQzNLLGdCQUFNbkQsR0FBRyxHQUFHN1UsTUFBTSxDQUFDcU0sTUFBUCxDQUFjO0FBQ3RCMkwsWUFBQUEsTUFBTSxFQUFFQTtBQURjLFdBQWQsRUFFVEQsVUFGUyxDQUFaO0FBR0EsaUJBQU8sV0FBV0EsVUFBWCxHQUF3QkEsVUFBeEIsR0FBcUNsRCxHQUE1QztBQUNILFNBTE0sRUFLSmxOLEtBTEksQ0FLRzRGLEdBQUQsSUFBTztBQUNaLGNBQUlPLFFBQUosRUFBYztBQUNWO0FBQ0Esa0JBQU1QLEdBQU47QUFDSDs7QUFDRCxpQkFBTztBQUNIQyxZQUFBQSxLQUFLLEVBQUVEO0FBREosV0FBUDtBQUdILFNBYk0sQ0FBUDtBQWNILE9BcENnQixDQUFqQjtBQXFDSCxLQXpERTs7QUEwREhPLElBQUFBLFFBQVEsQ0FBRXVJLEtBQUYsRUFBUztBQUNiO0FBQ0E7QUFDQSxVQUFJNkIsRUFBSjs7QUFDQSxVQUFJQSxFQUFFLEdBQUdDLFNBQVMsQ0FBQ0MsVUFBbkIsRUFBK0I7QUFDM0I7QUFDQSxZQUFJRixFQUFFLENBQUNHLFFBQUgsSUFBZSxLQUFLOUYsSUFBTCxDQUFVMkYsRUFBRSxDQUFDSSxhQUFiLENBQW5CLEVBQWdELE9BQU83USxPQUFPLENBQUNDLE9BQVIsRUFBUDtBQUNuRDs7QUFDRCxhQUFPeU8sZ0JBQWdCLENBQUNDLFdBQUQsRUFBY0MsS0FBZCxDQUFoQixDQUFxQ3pPLElBQXJDLENBQTJDMlEsTUFBRCxJQUFVOVEsT0FBTyxDQUFDcUIsR0FBUixDQUFZNkwsV0FBVyxHQUFHNEQsTUFBTSxDQUFDakMsT0FBUCxDQUFldlEsR0FBZixDQUFvQnlQLE1BQUQsSUFBVVosY0FBYyxDQUFDWSxNQUFELEVBQVMsUUFBVCxDQUEzQyxDQUFILEdBQzFFLEVBRG1ELENBQXBELEVBRUw1TixJQUZLLENBRUEsTUFBSTtBQUNQLFNBQUMsR0FBR2dNLG9CQUFKLEVBQTBCcEIsbUJBQTFCLENBQThDLE1BQUksS0FBS3FGLFNBQUwsQ0FBZXhCLEtBQWYsRUFBc0IsSUFBdEIsRUFBNEIxTyxLQUE1QixDQUFrQyxNQUFJLENBQ25GLENBRDZDLENBQWxEO0FBR0gsT0FOTSxFQU1KQSxLQU5JLEVBTUU7QUFDVCxZQUFJLENBQ0gsQ0FSTSxDQUFQO0FBU0g7O0FBM0VFLEdBQVA7QUE2RUg7Ozs7Ozs7Ozs7O0FDdFJZOztBQUNiM0gsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUgsMENBQXlDO0FBQ3JDZ0IsRUFBQUEsVUFBVSxFQUFFLElBRHlCO0FBRXJDOEYsRUFBQUEsR0FBRyxFQUFFLFlBQVc7QUFDWixXQUFPNkcsT0FBTyxDQUFDdk4sT0FBZjtBQUNIO0FBSm9DLENBQXpDO0FBTUFKLDhDQUE2QztBQUN6Q2dCLEVBQUFBLFVBQVUsRUFBRSxJQUQ2QjtBQUV6QzhGLEVBQUFBLEdBQUcsRUFBRSxZQUFXO0FBQ1osV0FBTzBSLFdBQVcsQ0FBQ3BZLE9BQW5CO0FBQ0g7QUFKd0MsQ0FBN0M7QUFNQUYsaUJBQUEsR0FBb0JrUSxTQUFwQjtBQUNBbFEsb0JBQUEsR0FBdUJ1WSxZQUF2QjtBQUNBdlksZ0NBQUEsR0FBbUN3WSx3QkFBbkM7QUFDQXhZLGVBQUEsR0FBa0IsS0FBSyxDQUF2Qjs7QUFDQSxJQUFJSSxNQUFNLEdBQUdDLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBbkM7O0FBQ0EsSUFBSW1OLE9BQU8sR0FBR3BOLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHlGQUFELENBQVIsQ0FBcEM7O0FBQ0EsSUFBSW1ZLGNBQWMsR0FBR25ZLG1CQUFPLENBQUMsa0VBQUQsQ0FBNUI7O0FBQ0EsSUFBSWdZLFdBQVcsR0FBR2pZLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHFFQUFELENBQVIsQ0FBeEM7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NPLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDSyxVQUFYLEdBQXdCTCxHQUF4QixHQUE4QjtBQUNqQ1YsSUFBQUEsT0FBTyxFQUFFVTtBQUR3QixHQUFyQztBQUdIOztBQUNELE1BQU04WCxlQUFlLEdBQUc7QUFDcEI3SyxFQUFBQSxNQUFNLEVBQUUsSUFEWTtBQUVwQjhLLEVBQUFBLGNBQWMsRUFBRSxFQUZJOztBQUdwQkMsRUFBQUEsS0FBSyxDQUFFakcsRUFBRixFQUFNO0FBQ1AsUUFBSSxLQUFLOUUsTUFBVCxFQUFpQixPQUFPOEUsRUFBRSxFQUFUOztBQUNqQixlQUFtQyxFQUVsQztBQUNKOztBQVJtQixDQUF4QixFQVVBOztBQUNBLE1BQU1rRyxpQkFBaUIsR0FBRyxDQUN0QixVQURzQixFQUV0QixPQUZzQixFQUd0QixPQUhzQixFQUl0QixRQUpzQixFQUt0QixZQUxzQixFQU10QixZQU5zQixFQU90QixVQVBzQixFQVF0QixRQVJzQixFQVN0QixTQVRzQixFQVV0QixlQVZzQixFQVd0QixTQVhzQixFQVl0QixXQVpzQixFQWF0QixnQkFic0IsRUFjdEIsZUFkc0IsQ0FBMUI7QUFnQkEsTUFBTUMsWUFBWSxHQUFHLENBQ2pCLGtCQURpQixFQUVqQixxQkFGaUIsRUFHakIscUJBSGlCLEVBSWpCLGtCQUppQixFQUtqQixpQkFMaUIsRUFNakIsb0JBTmlCLENBQXJCO0FBUUEsTUFBTUMsZ0JBQWdCLEdBQUcsQ0FDckIsTUFEcUIsRUFFckIsU0FGcUIsRUFHckIsUUFIcUIsRUFJckIsTUFKcUIsRUFLckIsVUFMcUIsRUFNckIsZ0JBTnFCLENBQXpCLEVBUUE7O0FBQ0FqWixNQUFNLENBQUNDLGNBQVAsQ0FBc0IyWSxlQUF0QixFQUF1QyxRQUF2QyxFQUFpRDtBQUM3QzlSLEVBQUFBLEdBQUcsR0FBSTtBQUNILFdBQU82RyxPQUFPLENBQUN2TixPQUFSLENBQWdCOFksTUFBdkI7QUFDSDs7QUFINEMsQ0FBakQ7QUFLQUgsaUJBQWlCLENBQUM5VyxPQUFsQixDQUEyQmtYLEtBQUQsSUFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBblosRUFBQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCMlksZUFBdEIsRUFBdUNPLEtBQXZDLEVBQThDO0FBQzFDclMsSUFBQUEsR0FBRyxHQUFJO0FBQ0gsWUFBTWlILE1BQU0sR0FBR3FMLFNBQVMsRUFBeEI7QUFDQSxhQUFPckwsTUFBTSxDQUFDb0wsS0FBRCxDQUFiO0FBQ0g7O0FBSnlDLEdBQTlDO0FBTUgsQ0FYRDtBQVlBRixnQkFBZ0IsQ0FBQ2hYLE9BQWpCLENBQTBCa1gsS0FBRCxJQUFTO0FBQzlCUCxFQUFBQSxlQUFlLENBQUNPLEtBQUQsQ0FBZixHQUF5QixDQUFDLEdBQUc1SixJQUFKLEtBQVc7QUFDaEMsVUFBTXhCLE1BQU0sR0FBR3FMLFNBQVMsRUFBeEI7QUFDQSxXQUFPckwsTUFBTSxDQUFDb0wsS0FBRCxDQUFOLENBQWMsR0FBRzVKLElBQWpCLENBQVA7QUFDSCxHQUhEO0FBSUgsQ0FMRDtBQU1BeUosWUFBWSxDQUFDL1csT0FBYixDQUFzQm9NLEtBQUQsSUFBUztBQUMxQnVLLEVBQUFBLGVBQWUsQ0FBQ0UsS0FBaEIsQ0FBc0IsTUFBSTtBQUN0Qm5MLElBQUFBLE9BQU8sQ0FBQ3ZOLE9BQVIsQ0FBZ0I4WSxNQUFoQixDQUF1QkcsRUFBdkIsQ0FBMEJoTCxLQUExQixFQUFpQyxDQUFDLEdBQUdrQixJQUFKLEtBQVc7QUFDeEMsWUFBTStKLFVBQVUsR0FBSSxLQUFJakwsS0FBSyxDQUFDa0wsTUFBTixDQUFhLENBQWIsRUFBZ0JDLFdBQWhCLEVBQThCLEdBQUVuTCxLQUFLLENBQUNvTCxTQUFOLENBQWdCLENBQWhCLENBQW1CLEVBQTNFO0FBQ0EsWUFBTUMsZ0JBQWdCLEdBQUdkLGVBQXpCOztBQUNBLFVBQUljLGdCQUFnQixDQUFDSixVQUFELENBQXBCLEVBQWtDO0FBQzlCLFlBQUk7QUFDQUksVUFBQUEsZ0JBQWdCLENBQUNKLFVBQUQsQ0FBaEIsQ0FBNkIsR0FBRy9KLElBQWhDO0FBQ0gsU0FGRCxDQUVFLE9BQU9oQyxHQUFQLEVBQVk7QUFDVjNELFVBQUFBLE9BQU8sQ0FBQzRELEtBQVIsQ0FBZSx3Q0FBdUM4TCxVQUFXLEVBQWpFO0FBQ0ExUCxVQUFBQSxPQUFPLENBQUM0RCxLQUFSLENBQWUsR0FBRUQsR0FBRyxDQUFDb00sT0FBUSxLQUFJcE0sR0FBRyxDQUFDcU0sS0FBTSxFQUEzQztBQUNIO0FBQ0o7QUFDSixLQVhEO0FBWUgsR0FiRDtBQWNILENBZkQ7O0FBZ0JBLFNBQVNSLFNBQVQsR0FBcUI7QUFDakIsTUFBSSxDQUFDUixlQUFlLENBQUM3SyxNQUFyQixFQUE2QjtBQUN6QixVQUFNNEwsT0FBTyxHQUFHLGdDQUFnQyxxRUFBaEQ7QUFDQSxVQUFNLElBQUkzUyxLQUFKLENBQVUyUyxPQUFWLENBQU47QUFDSDs7QUFDRCxTQUFPZixlQUFlLENBQUM3SyxNQUF2QjtBQUNIOztBQUNELElBQUltRSxRQUFRLEdBQUcwRyxlQUFmO0FBQ0ExWSxlQUFBLEdBQWtCZ1MsUUFBbEI7O0FBQ0EsU0FBUzlCLFNBQVQsR0FBcUI7QUFDakIsU0FBTzlQLE1BQU0sQ0FBQ0YsT0FBUCxDQUFleVosVUFBZixDQUEwQmxCLGNBQWMsQ0FBQ21CLGFBQXpDLENBQVA7QUFDSDs7QUFDRCxTQUFTckIsWUFBVCxDQUFzQixHQUFHbEosSUFBekIsRUFBK0I7QUFDM0JxSixFQUFBQSxlQUFlLENBQUM3SyxNQUFoQixHQUF5QixJQUFJSixPQUFPLENBQUN2TixPQUFaLENBQW9CLEdBQUdtUCxJQUF2QixDQUF6QjtBQUNBcUosRUFBQUEsZUFBZSxDQUFDQyxjQUFoQixDQUErQjVXLE9BQS9CLENBQXdDNFEsRUFBRCxJQUFNQSxFQUFFLEVBQS9DO0FBRUErRixFQUFBQSxlQUFlLENBQUNDLGNBQWhCLEdBQWlDLEVBQWpDO0FBQ0EsU0FBT0QsZUFBZSxDQUFDN0ssTUFBdkI7QUFDSDs7QUFDRCxTQUFTMkssd0JBQVQsQ0FBa0MzSyxNQUFsQyxFQUEwQztBQUN0QyxRQUFNSCxRQUFRLEdBQUdHLE1BQWpCO0FBQ0EsUUFBTWdNLFFBQVEsR0FBRyxFQUFqQjs7QUFFQSxPQUFLLE1BQU1DLFFBQVgsSUFBdUJqQixpQkFBdkIsRUFBeUM7QUFDckMsUUFBSSxPQUFPbkwsUUFBUSxDQUFDb00sUUFBRCxDQUFmLEtBQThCLFFBQWxDLEVBQTRDO0FBQ3hDRCxNQUFBQSxRQUFRLENBQUNDLFFBQUQsQ0FBUixHQUFxQmhhLE1BQU0sQ0FBQ3FNLE1BQVAsQ0FBYzROLEtBQUssQ0FBQ0MsT0FBTixDQUFjdE0sUUFBUSxDQUFDb00sUUFBRCxDQUF0QixJQUFvQyxFQUFwQyxHQUF5QyxFQUF2RCxFQUNsQnBNLFFBQVEsQ0FBQ29NLFFBQUQsQ0FEVSxDQUFyQixDQUN1QjtBQUR2QjtBQUdBO0FBQ0g7O0FBQ0RELElBQUFBLFFBQVEsQ0FBQ0MsUUFBRCxDQUFSLEdBQXFCcE0sUUFBUSxDQUFDb00sUUFBRCxDQUE3QjtBQUNILEdBWnFDLENBYXRDOzs7QUFDQUQsRUFBQUEsUUFBUSxDQUFDYixNQUFULEdBQWtCdkwsT0FBTyxDQUFDdk4sT0FBUixDQUFnQjhZLE1BQWxDO0FBQ0FELEVBQUFBLGdCQUFnQixDQUFDaFgsT0FBakIsQ0FBMEJrWCxLQUFELElBQVM7QUFDOUJZLElBQUFBLFFBQVEsQ0FBQ1osS0FBRCxDQUFSLEdBQWtCLENBQUMsR0FBRzVKLElBQUosS0FBVztBQUN6QixhQUFPM0IsUUFBUSxDQUFDdUwsS0FBRCxDQUFSLENBQWdCLEdBQUc1SixJQUFuQixDQUFQO0FBQ0gsS0FGRDtBQUdILEdBSkQ7QUFLQSxTQUFPd0ssUUFBUDtBQUNIOzs7Ozs7Ozs7OztBQ3hKWTs7QUFDYi9aLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELHVCQUFBLEdBQTBCbUssZUFBMUI7O0FBQ0EsSUFBSS9KLE1BQU0sR0FBR0UsbUJBQU8sQ0FBQyxvQkFBRCxDQUFwQjs7QUFDQSxJQUFJb1Qsb0JBQW9CLEdBQUdwVCxtQkFBTyxDQUFDLHlGQUFELENBQWxDOztBQUNBLE1BQU0yWix1QkFBdUIsR0FBRyxPQUFPQyxvQkFBUCxLQUFnQyxXQUFoRTs7QUFDQSxTQUFTL1AsZUFBVCxDQUF5QjtBQUFFQyxFQUFBQSxVQUFGO0FBQWVDLEVBQUFBO0FBQWYsQ0FBekIsRUFBcUQ7QUFDakQsUUFBTThQLFVBQVUsR0FBRzlQLFFBQVEsSUFBSSxDQUFDNFAsdUJBQWhDO0FBQ0EsUUFBTUcsU0FBUyxHQUFHLENBQUMsR0FBR2hhLE1BQUosRUFBWTRQLE1BQVosRUFBbEI7QUFDQSxRQUFNLENBQUNxSyxPQUFELEVBQVVDLFVBQVYsSUFBd0IsQ0FBQyxHQUFHbGEsTUFBSixFQUFZbWEsUUFBWixDQUFxQixLQUFyQixDQUE5QjtBQUNBLFFBQU10USxNQUFNLEdBQUcsQ0FBQyxHQUFHN0osTUFBSixFQUFZeVEsV0FBWixDQUF5QkMsRUFBRCxJQUFNO0FBQ3pDLFFBQUlzSixTQUFTLENBQUNuSyxPQUFkLEVBQXVCO0FBQ25CbUssTUFBQUEsU0FBUyxDQUFDbkssT0FBVjtBQUNBbUssTUFBQUEsU0FBUyxDQUFDbkssT0FBVixHQUFvQm5OLFNBQXBCO0FBQ0g7O0FBQ0QsUUFBSXFYLFVBQVUsSUFBSUUsT0FBbEIsRUFBMkI7O0FBQzNCLFFBQUl2SixFQUFFLElBQUlBLEVBQUUsQ0FBQzBKLE9BQWIsRUFBc0I7QUFDbEJKLE1BQUFBLFNBQVMsQ0FBQ25LLE9BQVYsR0FBb0J3SyxPQUFPLENBQUMzSixFQUFELEVBQU14RyxTQUFELElBQWFBLFNBQVMsSUFBSWdRLFVBQVUsQ0FBQ2hRLFNBQUQsQ0FBekMsRUFDekI7QUFDRUYsUUFBQUE7QUFERixPQUR5QixDQUEzQjtBQUlIO0FBQ0osR0FaYyxFQVlaLENBQ0MrUCxVQURELEVBRUMvUCxVQUZELEVBR0NpUSxPQUhELENBWlksQ0FBZjtBQWlCQSxHQUFDLEdBQUdqYSxNQUFKLEVBQVkyUSxTQUFaLENBQXNCLE1BQUk7QUFDdEIsUUFBSSxDQUFDa0osdUJBQUwsRUFBOEI7QUFDMUIsVUFBSSxDQUFDSSxPQUFMLEVBQWM7QUFDVixjQUFNSyxZQUFZLEdBQUcsQ0FBQyxHQUFHaEgsb0JBQUosRUFBMEJwQixtQkFBMUIsQ0FBOEMsTUFBSWdJLFVBQVUsQ0FBQyxJQUFELENBQTVELENBQXJCO0FBRUEsZUFBTyxNQUFJLENBQUMsR0FBRzVHLG9CQUFKLEVBQTBCbkIsa0JBQTFCLENBQTZDbUksWUFBN0MsQ0FBWDtBQUVIO0FBQ0o7QUFDSixHQVRELEVBU0csQ0FDQ0wsT0FERCxDQVRIO0FBWUEsU0FBTyxDQUNIcFEsTUFERyxFQUVIb1EsT0FGRyxDQUFQO0FBSUg7O0FBQ0QsU0FBU0ksT0FBVCxDQUFpQkUsT0FBakIsRUFBMEJDLFFBQTFCLEVBQW9DOU0sT0FBcEMsRUFBNkM7QUFDekMsUUFBTTtBQUFFcUYsSUFBQUEsRUFBRjtBQUFPMEgsSUFBQUEsUUFBUDtBQUFrQkMsSUFBQUE7QUFBbEIsTUFBZ0NDLGNBQWMsQ0FBQ2pOLE9BQUQsQ0FBcEQ7QUFDQWdOLEVBQUFBLFFBQVEsQ0FBQzdOLEdBQVQsQ0FBYTBOLE9BQWIsRUFBc0JDLFFBQXRCO0FBQ0FDLEVBQUFBLFFBQVEsQ0FBQ0osT0FBVCxDQUFpQkUsT0FBakI7QUFDQSxTQUFPLFNBQVNQLFNBQVQsR0FBcUI7QUFDeEJVLElBQUFBLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQkwsT0FBaEI7QUFDQUUsSUFBQUEsUUFBUSxDQUFDVCxTQUFULENBQW1CTyxPQUFuQixFQUZ3QixDQUd4Qjs7QUFDQSxRQUFJRyxRQUFRLENBQUNHLElBQVQsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckJKLE1BQUFBLFFBQVEsQ0FBQ0ssVUFBVDtBQUNBQyxNQUFBQSxTQUFTLENBQUNILE1BQVYsQ0FBaUI3SCxFQUFqQjtBQUNIO0FBQ0osR0FSRDtBQVNIOztBQUNELE1BQU1nSSxTQUFTLEdBQUcsSUFBSW5ZLEdBQUosRUFBbEI7O0FBQ0EsU0FBUytYLGNBQVQsQ0FBd0JqTixPQUF4QixFQUFpQztBQUM3QixRQUFNcUYsRUFBRSxHQUFHckYsT0FBTyxDQUFDMUQsVUFBUixJQUFzQixFQUFqQztBQUNBLE1BQUl5UCxRQUFRLEdBQUdzQixTQUFTLENBQUN2VSxHQUFWLENBQWN1TSxFQUFkLENBQWY7O0FBQ0EsTUFBSTBHLFFBQUosRUFBYztBQUNWLFdBQU9BLFFBQVA7QUFDSDs7QUFDRCxRQUFNaUIsUUFBUSxHQUFHLElBQUk5WCxHQUFKLEVBQWpCO0FBQ0EsUUFBTTZYLFFBQVEsR0FBRyxJQUFJWCxvQkFBSixDQUEwQmtCLE9BQUQsSUFBVztBQUNqREEsSUFBQUEsT0FBTyxDQUFDclosT0FBUixDQUFpQitSLEtBQUQsSUFBUztBQUNyQixZQUFNOEcsUUFBUSxHQUFHRSxRQUFRLENBQUNsVSxHQUFULENBQWFrTixLQUFLLENBQUMzUyxNQUFuQixDQUFqQjtBQUNBLFlBQU1tSixTQUFTLEdBQUd3SixLQUFLLENBQUN1SCxjQUFOLElBQXdCdkgsS0FBSyxDQUFDd0gsaUJBQU4sR0FBMEIsQ0FBcEU7O0FBQ0EsVUFBSVYsUUFBUSxJQUFJdFEsU0FBaEIsRUFBMkI7QUFDdkJzUSxRQUFBQSxRQUFRLENBQUN0USxTQUFELENBQVI7QUFDSDtBQUNKLEtBTkQ7QUFPSCxHQVJnQixFQVFkd0QsT0FSYyxDQUFqQjtBQVNBcU4sRUFBQUEsU0FBUyxDQUFDbE8sR0FBVixDQUFja0csRUFBZCxFQUFrQjBHLFFBQVEsR0FBRztBQUN6QjFHLElBQUFBLEVBRHlCO0FBRXpCMEgsSUFBQUEsUUFGeUI7QUFHekJDLElBQUFBO0FBSHlCLEdBQTdCO0FBS0EsU0FBT2pCLFFBQVA7QUFDSDs7Ozs7Ozs7Ozs7QUNuRlk7O0FBQ2IvWiw4Q0FBNkM7QUFDekNHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBRCxlQUFBLEdBQWtCdWIsVUFBbEI7O0FBQ0EsSUFBSW5iLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJbU4sT0FBTyxHQUFHbk4sbUJBQU8sQ0FBQywyREFBRCxDQUFyQjs7QUFDQSxTQUFTRCxzQkFBVCxDQUFnQ08sR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNLLFVBQVgsR0FBd0JMLEdBQXhCLEdBQThCO0FBQ2pDVixJQUFBQSxPQUFPLEVBQUVVO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsU0FBUzJhLFVBQVQsQ0FBb0JDLGlCQUFwQixFQUF1QztBQUNuQyxXQUFTQyxpQkFBVCxDQUEyQnRNLEtBQTNCLEVBQWtDO0FBQzlCLFdBQU8sYUFBYy9PLE1BQU0sQ0FBQ0YsT0FBUCxDQUFlOEwsYUFBZixDQUE2QndQLGlCQUE3QixFQUFnRDFiLE1BQU0sQ0FBQ3FNLE1BQVAsQ0FBYztBQUMvRTBCLE1BQUFBLE1BQU0sRUFBRSxDQUFDLEdBQUdKLE9BQUosRUFBYXlDLFNBQWI7QUFEdUUsS0FBZCxFQUVsRWYsS0FGa0UsQ0FBaEQsQ0FBckI7QUFHSDs7QUFDRHNNLEVBQUFBLGlCQUFpQixDQUFDQyxlQUFsQixHQUFvQ0YsaUJBQWlCLENBQUNFLGVBQXREO0FBQ0FELEVBQUFBLGlCQUFpQixDQUFDRSxtQkFBbEIsR0FBd0NILGlCQUFpQixDQUFDRyxtQkFBMUQ7O0FBQ0EsWUFBMkM7QUFDdkMsVUFBTUMsSUFBSSxHQUFHSixpQkFBaUIsQ0FBQ0ssV0FBbEIsSUFBaUNMLGlCQUFpQixDQUFDSSxJQUFuRCxJQUEyRCxTQUF4RTtBQUNBSCxJQUFBQSxpQkFBaUIsQ0FBQ0ksV0FBbEIsR0FBaUMsY0FBYUQsSUFBSyxHQUFuRDtBQUNIOztBQUNELFNBQU9ILGlCQUFQO0FBQ0g7Ozs7Ozs7Ozs7O0FDekJZOztBQUNiM2IsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsdUJBQUEsR0FBMEJ5UixlQUExQjtBQUNBelIsaUJBQUEsR0FBb0I2UixTQUFwQjtBQUNBN1IsaUJBQUEsR0FBb0I4YixTQUFwQjtBQUNBOWIsbUJBQUEsR0FBc0IrYixXQUF0QjtBQUNBL2IsbUJBQUEsR0FBc0I0UixXQUF0QjtBQUNBNVIsbUJBQUEsR0FBc0JnYyxXQUF0QjtBQUNBaGMsa0JBQUEsR0FBcUIrTixVQUFyQjtBQUNBL04scUJBQUEsR0FBd0JpYyxhQUF4QjtBQUNBamMsbUJBQUEsR0FBc0JzUSxXQUF0QjtBQUNBdFEsZUFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUlrYyx1QkFBdUIsR0FBRzViLG1CQUFPLENBQUMsNkdBQUQsQ0FBckM7O0FBQ0EsSUFBSTZiLFlBQVksR0FBRzdiLG1CQUFPLENBQUMscUZBQUQsQ0FBMUI7O0FBQ0EsSUFBSThiLG9CQUFvQixHQUFHOWIsbUJBQU8sQ0FBQyxvRkFBRCxDQUFsQzs7QUFDQSxJQUFJK2Isb0JBQW9CLEdBQUcvYixtQkFBTyxDQUFDLG9FQUFELENBQWxDOztBQUNBLElBQUlnYyxLQUFLLEdBQUdqYyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyx3QkFBRCxDQUFSLENBQWxDOztBQUNBLElBQUlpYyxNQUFNLEdBQUdqYyxtQkFBTyxDQUFDLHFDQUFELENBQXBCOztBQUNBLElBQUlrYyxVQUFVLEdBQUdsYyxtQkFBTyxDQUFDLDhDQUFELENBQXhCOztBQUNBLElBQUltYyxpQkFBaUIsR0FBR25jLG1CQUFPLENBQUMsOERBQUQsQ0FBL0I7O0FBQ0EsSUFBSW9jLFlBQVksR0FBR3BjLG1CQUFPLENBQUMsZ0RBQUQsQ0FBMUI7O0FBQ0EsSUFBSXFjLGdCQUFnQixHQUFHdGMsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsdUNBQUQsQ0FBUixDQUE3Qzs7QUFDQSxJQUFJc2MsYUFBYSxHQUFHdGMsbUJBQU8sQ0FBQyxvREFBRCxDQUEzQjs7QUFDQSxJQUFJdWMsV0FBVyxHQUFHdmMsbUJBQU8sQ0FBQyxnREFBRCxDQUF6Qjs7QUFDQSxTQUFTRCxzQkFBVCxDQUFnQ08sR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNLLFVBQVgsR0FBd0JMLEdBQXhCLEdBQThCO0FBQ2pDVixJQUFBQSxPQUFPLEVBQUVVO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsSUFBSWtjLGtCQUFKOztBQUNBLElBQUl6WSxLQUFKLEVBQXFDLEVBRXBDOztBQUNELE1BQU0yWSxRQUFRLEdBQUczWSxNQUFBLElBQXNDLEVBQXZEOztBQUNBLFNBQVM2WSxzQkFBVCxHQUFrQztBQUM5QixTQUFPcGQsTUFBTSxDQUFDcU0sTUFBUCxDQUFjLElBQUlyRixLQUFKLENBQVUsaUJBQVYsQ0FBZCxFQUE0QztBQUMvQzhPLElBQUFBLFNBQVMsRUFBRTtBQURvQyxHQUE1QyxDQUFQO0FBR0g7O0FBQ0QsU0FBU3VILGFBQVQsQ0FBdUJsWixJQUF2QixFQUE2Qm1aLE1BQTdCLEVBQXFDO0FBQ2pDLFNBQU9BLE1BQU0sSUFBSW5aLElBQUksQ0FBQ29ELFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBVixHQUFpQ3BELElBQUksS0FBSyxHQUFULEdBQWUsQ0FBQyxHQUFHaVksdUJBQUosRUFBNkJoSywwQkFBN0IsQ0FBd0RrTCxNQUF4RCxDQUFmLEdBQWtGLEdBQUVBLE1BQU8sR0FBRUMsZUFBZSxDQUFDcFosSUFBRCxDQUFmLEtBQTBCLEdBQTFCLEdBQWdDQSxJQUFJLENBQUNzVixTQUFMLENBQWUsQ0FBZixDQUFoQyxHQUFvRHRWLElBQUssRUFBdkwsR0FBMkxBLElBQWxNO0FBQ0g7O0FBQ0QsU0FBU3dOLGVBQVQsQ0FBeUJ4TixJQUF6QixFQUErQmdLLE1BQS9CLEVBQXVDeUQsT0FBdkMsRUFBZ0RDLGFBQWhELEVBQStEO0FBQzNELE1BQUl0TixLQUFKLEVBQXFDLEVBQXJDLE1BT087QUFDSCxXQUFPLEtBQVA7QUFDSDtBQUNKOztBQUNELFNBQVN3TixTQUFULENBQW1CNU4sSUFBbkIsRUFBeUJnSyxNQUF6QixFQUFpQzZELGFBQWpDLEVBQWdEO0FBQzVDLE1BQUl6TixLQUFKLEVBQXFDLEVBS3BDOztBQUNELFNBQU9KLElBQVA7QUFDSDs7QUFDRCxTQUFTNlgsU0FBVCxDQUFtQjdYLElBQW5CLEVBQXlCZ0ssTUFBekIsRUFBaUM7QUFDN0IsTUFBSTVKLEtBQUosRUFBcUMsRUFLcEM7O0FBQ0QsU0FBT0osSUFBUDtBQUNIOztBQUNELFNBQVNvWixlQUFULENBQXlCcFosSUFBekIsRUFBK0I7QUFDM0IsUUFBTStaLFVBQVUsR0FBRy9aLElBQUksQ0FBQzdCLE9BQUwsQ0FBYSxHQUFiLENBQW5CO0FBQ0EsUUFBTTZiLFNBQVMsR0FBR2hhLElBQUksQ0FBQzdCLE9BQUwsQ0FBYSxHQUFiLENBQWxCOztBQUNBLE1BQUk0YixVQUFVLEdBQUcsQ0FBQyxDQUFkLElBQW1CQyxTQUFTLEdBQUcsQ0FBQyxDQUFwQyxFQUF1QztBQUNuQ2hhLElBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDc1YsU0FBTCxDQUFlLENBQWYsRUFBa0J5RSxVQUFVLEdBQUcsQ0FBQyxDQUFkLEdBQWtCQSxVQUFsQixHQUErQkMsU0FBakQsQ0FBUDtBQUNIOztBQUNELFNBQU9oYSxJQUFQO0FBQ0g7O0FBQ0QsU0FBUzhYLFdBQVQsQ0FBcUI5WCxJQUFyQixFQUEyQjtBQUN2QkEsRUFBQUEsSUFBSSxHQUFHb1osZUFBZSxDQUFDcFosSUFBRCxDQUF0QjtBQUNBLFNBQU9BLElBQUksS0FBSytZLFFBQVQsSUFBcUIvWSxJQUFJLENBQUNvRCxVQUFMLENBQWdCMlYsUUFBUSxHQUFHLEdBQTNCLENBQTVCO0FBQ0g7O0FBQ0QsU0FBU3BMLFdBQVQsQ0FBcUIzTixJQUFyQixFQUEyQjtBQUN2QjtBQUNBLFNBQU9rWixhQUFhLENBQUNsWixJQUFELEVBQU8rWSxRQUFQLENBQXBCO0FBQ0g7O0FBQ0QsU0FBU2hCLFdBQVQsQ0FBcUIvWCxJQUFyQixFQUEyQjtBQUN2QkEsRUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUMySSxLQUFMLENBQVdvUSxRQUFRLENBQUMxYixNQUFwQixDQUFQO0FBQ0EsTUFBSSxDQUFDMkMsSUFBSSxDQUFDb0QsVUFBTCxDQUFnQixHQUFoQixDQUFMLEVBQTJCcEQsSUFBSSxHQUFJLElBQUdBLElBQUssRUFBaEI7QUFDM0IsU0FBT0EsSUFBUDtBQUNIOztBQUNELFNBQVM4SixVQUFULENBQW9CbEIsR0FBcEIsRUFBeUI7QUFDckI7QUFDQSxNQUFJQSxHQUFHLENBQUN4RixVQUFKLENBQWUsR0FBZixLQUF1QndGLEdBQUcsQ0FBQ3hGLFVBQUosQ0FBZSxHQUFmLENBQXZCLElBQThDd0YsR0FBRyxDQUFDeEYsVUFBSixDQUFlLEdBQWYsQ0FBbEQsRUFBdUUsT0FBTyxJQUFQOztBQUN2RSxNQUFJO0FBQ0E7QUFDQSxVQUFNNlcsY0FBYyxHQUFHLENBQUMsR0FBRzNCLE1BQUosRUFBWTRCLGlCQUFaLEVBQXZCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLElBQUl0UixHQUFKLENBQVFELEdBQVIsRUFBYXFSLGNBQWIsQ0FBakI7QUFDQSxXQUFPRSxRQUFRLENBQUNDLE1BQVQsS0FBb0JILGNBQXBCLElBQXNDbkMsV0FBVyxDQUFDcUMsUUFBUSxDQUFDVCxRQUFWLENBQXhEO0FBQ0gsR0FMRCxDQUtFLE9BQU9qTyxDQUFQLEVBQVU7QUFDUixXQUFPLEtBQVA7QUFDSDtBQUNKOztBQUNELFNBQVN1TSxhQUFULENBQXVCOUYsS0FBdkIsRUFBOEJtSSxVQUE5QixFQUEwQ0MsS0FBMUMsRUFBaUQ7QUFDN0MsTUFBSUMsaUJBQWlCLEdBQUcsRUFBeEI7QUFDQSxRQUFNQyxZQUFZLEdBQUcsQ0FBQyxHQUFHNUIsV0FBSixFQUFpQjZCLGFBQWpCLENBQStCdkksS0FBL0IsQ0FBckI7QUFDQSxRQUFNd0ksYUFBYSxHQUFHRixZQUFZLENBQUNHLE1BQW5DO0FBQ0EsUUFBTUMsY0FBYyxHQUFHO0FBQ3ZCLEdBQUNQLFVBQVUsS0FBS25JLEtBQWYsR0FBdUIsQ0FBQyxHQUFHeUcsYUFBSixFQUFtQmtDLGVBQW5CLENBQW1DTCxZQUFuQyxFQUFpREgsVUFBakQsQ0FBdkIsR0FBc0YsRUFBdkYsS0FBOEY7QUFDOUY7QUFDQUMsRUFBQUEsS0FIQTtBQUlBQyxFQUFBQSxpQkFBaUIsR0FBR3JJLEtBQXBCO0FBQ0EsUUFBTXBKLE1BQU0sR0FBR2pOLE1BQU0sQ0FBQzJCLElBQVAsQ0FBWWtkLGFBQVosQ0FBZjs7QUFDQSxNQUFJLENBQUM1UixNQUFNLENBQUNnUyxLQUFQLENBQWNDLEtBQUQsSUFBUztBQUN2QixRQUFJL2UsS0FBSyxHQUFHNGUsY0FBYyxDQUFDRyxLQUFELENBQWQsSUFBeUIsRUFBckM7QUFDQSxVQUFNO0FBQUVDLE1BQUFBLE1BQUY7QUFBV0MsTUFBQUE7QUFBWCxRQUF5QlAsYUFBYSxDQUFDSyxLQUFELENBQTVDLENBRnVCLENBR3ZCO0FBQ0E7O0FBQ0EsUUFBSUcsUUFBUSxHQUFJLElBQUdGLE1BQU0sR0FBRyxLQUFILEdBQVcsRUFBRyxHQUFFRCxLQUFNLEdBQS9DOztBQUNBLFFBQUlFLFFBQUosRUFBYztBQUNWQyxNQUFBQSxRQUFRLEdBQUksR0FBRSxDQUFDbGYsS0FBRCxHQUFTLEdBQVQsR0FBZSxFQUFHLElBQUdrZixRQUFTLEdBQTVDO0FBQ0g7O0FBQ0QsUUFBSUYsTUFBTSxJQUFJLENBQUNsRixLQUFLLENBQUNDLE9BQU4sQ0FBYy9aLEtBQWQsQ0FBZixFQUFxQ0EsS0FBSyxHQUFHLENBQ3pDQSxLQUR5QyxDQUFSO0FBR3JDLFdBQU8sQ0FBQ2lmLFFBQVEsSUFBSUYsS0FBSyxJQUFJSCxjQUF0QixPQUF5QztBQUMvQ0wsSUFBQUEsaUJBQWlCLEdBQUdBLGlCQUFpQixDQUFDM1AsT0FBbEIsQ0FBMEJzUSxRQUExQixFQUFvQ0YsTUFBTSxHQUFHaGYsS0FBSyxDQUFDNEYsR0FBTixFQUFVO0FBQzVFO0FBQ0E7QUFDQTtBQUNDdVosSUFBQUEsT0FBRCxJQUFXNVIsa0JBQWtCLENBQUM0UixPQUFELENBSnFDLEVBS2hFOVksSUFMZ0UsQ0FLM0QsR0FMMkQsQ0FBSCxHQUtqRGtILGtCQUFrQixDQUFDdk4sS0FBRCxDQUxYLEtBS3VCLEdBTnJDLENBQVA7QUFPSCxHQW5CSSxDQUFMLEVBbUJJO0FBQ0F1ZSxJQUFBQSxpQkFBaUIsR0FBRyxFQUFwQixDQUF1QjtBQUF2QixLQURBLENBR0o7QUFDQTtBQUNDOztBQUNELFNBQU87QUFDSHpSLElBQUFBLE1BREc7QUFFSHNTLElBQUFBLE1BQU0sRUFBRWI7QUFGTCxHQUFQO0FBSUg7O0FBQ0QsU0FBU2Msa0JBQVQsQ0FBNEJmLEtBQTVCLEVBQW1DeFIsTUFBbkMsRUFBMkM7QUFDdkMsUUFBTXdTLGFBQWEsR0FBRyxFQUF0QjtBQUVBemYsRUFBQUEsTUFBTSxDQUFDMkIsSUFBUCxDQUFZOGMsS0FBWixFQUFtQnhjLE9BQW5CLENBQTRCbEIsR0FBRCxJQUFPO0FBQzlCLFFBQUksQ0FBQ2tNLE1BQU0sQ0FBQ3hELFFBQVAsQ0FBZ0IxSSxHQUFoQixDQUFMLEVBQTJCO0FBQ3ZCMGUsTUFBQUEsYUFBYSxDQUFDMWUsR0FBRCxDQUFiLEdBQXFCMGQsS0FBSyxDQUFDMWQsR0FBRCxDQUExQjtBQUNIO0FBQ0osR0FKRDtBQUtBLFNBQU8wZSxhQUFQO0FBQ0g7O0FBQ0QsU0FBU2pQLFdBQVQsQ0FBcUJ6QyxNQUFyQixFQUE2QnJCLElBQTdCLEVBQW1DZ1QsU0FBbkMsRUFBOEM7QUFDMUM7QUFDQSxNQUFJQyxJQUFKO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLE9BQU9sVCxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCQSxJQUEzQixHQUFrQyxDQUFDLEdBQUcrUCxNQUFKLEVBQVlvRCxvQkFBWixDQUFpQ25ULElBQWpDLENBQXBELENBSDBDLENBSTFDO0FBQ0E7O0FBQ0EsUUFBTW9ULGFBQWEsR0FBR0YsV0FBVyxDQUFDdmEsS0FBWixDQUFrQixvQkFBbEIsQ0FBdEI7QUFDQSxRQUFNMGEsa0JBQWtCLEdBQUdELGFBQWEsR0FBR0YsV0FBVyxDQUFDM0IsTUFBWixDQUFtQjZCLGFBQWEsQ0FBQyxDQUFELENBQWIsQ0FBaUJ0ZSxNQUFwQyxDQUFILEdBQWlEb2UsV0FBekY7QUFDQSxRQUFNSSxRQUFRLEdBQUdELGtCQUFrQixDQUFDRSxLQUFuQixDQUF5QixHQUF6QixDQUFqQjs7QUFDQSxNQUFJLENBQUNELFFBQVEsQ0FBQyxDQUFELENBQVIsSUFBZSxFQUFoQixFQUFvQjNhLEtBQXBCLENBQTBCLFdBQTFCLENBQUosRUFBNEM7QUFDeEN1RSxJQUFBQSxPQUFPLENBQUM0RCxLQUFSLENBQWUsdUNBQXNDb1MsV0FBWSw2RUFBakU7QUFDQSxVQUFNTSxhQUFhLEdBQUcsQ0FBQyxHQUFHekQsTUFBSixFQUFZMEQsd0JBQVosQ0FBcUNKLGtCQUFyQyxDQUF0QjtBQUNBSCxJQUFBQSxXQUFXLEdBQUcsQ0FBQ0UsYUFBYSxHQUFHQSxhQUFhLENBQUMsQ0FBRCxDQUFoQixHQUFzQixFQUFwQyxJQUEwQ0ksYUFBeEQ7QUFDSCxHQWJ5QyxDQWMxQzs7O0FBQ0EsTUFBSSxDQUFDalMsVUFBVSxDQUFDMlIsV0FBRCxDQUFmLEVBQThCO0FBQzFCLFdBQU9GLFNBQVMsR0FBRyxDQUNmRSxXQURlLENBQUgsR0FFWkEsV0FGSjtBQUdIOztBQUNELE1BQUk7QUFDQUQsSUFBQUEsSUFBSSxHQUFHLElBQUkzUyxHQUFKLENBQVE0UyxXQUFXLENBQUNyWSxVQUFaLENBQXVCLEdBQXZCLElBQThCd0csTUFBTSxDQUFDcVMsTUFBckMsR0FBOENyUyxNQUFNLENBQUM4UCxRQUE3RCxFQUF1RSxVQUF2RSxDQUFQO0FBQ0gsR0FGRCxDQUVFLE9BQU9qTyxDQUFQLEVBQVU7QUFDUjtBQUNBK1AsSUFBQUEsSUFBSSxHQUFHLElBQUkzUyxHQUFKLENBQVEsR0FBUixFQUFhLFVBQWIsQ0FBUDtBQUNIOztBQUNELE1BQUk7QUFDQSxVQUFNcVQsUUFBUSxHQUFHLElBQUlyVCxHQUFKLENBQVE0UyxXQUFSLEVBQXFCRCxJQUFyQixDQUFqQjtBQUNBVSxJQUFBQSxRQUFRLENBQUN4QyxRQUFULEdBQW9CLENBQUMsR0FBR3pCLHVCQUFKLEVBQTZCaEssMEJBQTdCLENBQXdEaU8sUUFBUSxDQUFDeEMsUUFBakUsQ0FBcEI7QUFDQSxRQUFJeUMsY0FBYyxHQUFHLEVBQXJCOztBQUNBLFFBQUksQ0FBQyxHQUFHNUQsVUFBSixFQUFnQjZELGNBQWhCLENBQStCRixRQUFRLENBQUN4QyxRQUF4QyxLQUFxRHdDLFFBQVEsQ0FBQ25ULFlBQTlELElBQThFd1MsU0FBbEYsRUFBNkY7QUFDekYsWUFBTWpCLEtBQUssR0FBRyxDQUFDLEdBQUc3QixZQUFKLEVBQWtCNEQsc0JBQWxCLENBQXlDSCxRQUFRLENBQUNuVCxZQUFsRCxDQUFkO0FBQ0EsWUFBTTtBQUFFcVMsUUFBQUEsTUFBRjtBQUFXdFMsUUFBQUE7QUFBWCxVQUF1QmtQLGFBQWEsQ0FBQ2tFLFFBQVEsQ0FBQ3hDLFFBQVYsRUFBb0J3QyxRQUFRLENBQUN4QyxRQUE3QixFQUF1Q1ksS0FBdkMsQ0FBMUM7O0FBQ0EsVUFBSWMsTUFBSixFQUFZO0FBQ1JlLFFBQUFBLGNBQWMsR0FBRyxDQUFDLEdBQUc3RCxNQUFKLEVBQVlvRCxvQkFBWixDQUFpQztBQUM5Q2hDLFVBQUFBLFFBQVEsRUFBRTBCLE1BRG9DO0FBRTlDa0IsVUFBQUEsSUFBSSxFQUFFSixRQUFRLENBQUNJLElBRitCO0FBRzlDaEMsVUFBQUEsS0FBSyxFQUFFZSxrQkFBa0IsQ0FBQ2YsS0FBRCxFQUFReFIsTUFBUjtBQUhxQixTQUFqQyxDQUFqQjtBQUtIO0FBQ0osS0FkRCxDQWVBOzs7QUFDQSxVQUFNcUQsWUFBWSxHQUFHK1AsUUFBUSxDQUFDOUIsTUFBVCxLQUFvQm9CLElBQUksQ0FBQ3BCLE1BQXpCLEdBQWtDOEIsUUFBUSxDQUFDM1QsSUFBVCxDQUFjSSxLQUFkLENBQW9CdVQsUUFBUSxDQUFDOUIsTUFBVCxDQUFnQi9jLE1BQXBDLENBQWxDLEdBQWdGNmUsUUFBUSxDQUFDM1QsSUFBOUc7QUFDQSxXQUFPZ1QsU0FBUyxHQUFHLENBQ2ZwUCxZQURlLEVBRWZnUSxjQUFjLElBQUloUSxZQUZILENBQUgsR0FHWkEsWUFISjtBQUlILEdBckJELENBcUJFLE9BQU9WLENBQVAsRUFBVTtBQUNSLFdBQU84UCxTQUFTLEdBQUcsQ0FDZkUsV0FEZSxDQUFILEdBRVpBLFdBRko7QUFHSDtBQUNKOztBQUNELFNBQVNjLFdBQVQsQ0FBcUIzVCxHQUFyQixFQUEwQjtBQUN0QixRQUFNd1IsTUFBTSxHQUFHLENBQUMsR0FBRzlCLE1BQUosRUFBWTRCLGlCQUFaLEVBQWY7QUFDQSxTQUFPdFIsR0FBRyxDQUFDeEYsVUFBSixDQUFlZ1gsTUFBZixJQUF5QnhSLEdBQUcsQ0FBQzBNLFNBQUosQ0FBYzhFLE1BQU0sQ0FBQy9jLE1BQXJCLENBQXpCLEdBQXdEdUwsR0FBL0Q7QUFDSDs7QUFDRCxTQUFTNFQsWUFBVCxDQUFzQjVTLE1BQXRCLEVBQThCaEIsR0FBOUIsRUFBbUNOLEVBQW5DLEVBQXVDO0FBQ25DO0FBQ0E7QUFDQSxNQUFJLENBQUM2RCxZQUFELEVBQWVDLFVBQWYsSUFBNkJDLFdBQVcsQ0FBQ3pDLE1BQUQsRUFBU2hCLEdBQVQsRUFBYyxJQUFkLENBQTVDO0FBQ0EsUUFBTXdSLE1BQU0sR0FBRyxDQUFDLEdBQUc5QixNQUFKLEVBQVk0QixpQkFBWixFQUFmO0FBQ0EsUUFBTXVDLGFBQWEsR0FBR3RRLFlBQVksQ0FBQy9JLFVBQWIsQ0FBd0JnWCxNQUF4QixDQUF0QjtBQUNBLFFBQU1zQyxXQUFXLEdBQUd0USxVQUFVLElBQUlBLFVBQVUsQ0FBQ2hKLFVBQVgsQ0FBc0JnWCxNQUF0QixDQUFsQztBQUNBak8sRUFBQUEsWUFBWSxHQUFHb1EsV0FBVyxDQUFDcFEsWUFBRCxDQUExQjtBQUNBQyxFQUFBQSxVQUFVLEdBQUdBLFVBQVUsR0FBR21RLFdBQVcsQ0FBQ25RLFVBQUQsQ0FBZCxHQUE2QkEsVUFBcEQ7QUFDQSxRQUFNdVEsV0FBVyxHQUFHRixhQUFhLEdBQUd0USxZQUFILEdBQWtCd0IsV0FBVyxDQUFDeEIsWUFBRCxDQUE5RDtBQUNBLFFBQU15USxVQUFVLEdBQUd0VSxFQUFFLEdBQUdpVSxXQUFXLENBQUNsUSxXQUFXLENBQUN6QyxNQUFELEVBQVN0QixFQUFULENBQVosQ0FBZCxHQUEwQzhELFVBQVUsSUFBSUQsWUFBN0U7QUFDQSxTQUFPO0FBQ0h2RCxJQUFBQSxHQUFHLEVBQUUrVCxXQURGO0FBRUhyVSxJQUFBQSxFQUFFLEVBQUVvVSxXQUFXLEdBQUdFLFVBQUgsR0FBZ0JqUCxXQUFXLENBQUNpUCxVQUFEO0FBRnZDLEdBQVA7QUFJSDs7QUFDRCxTQUFTQyxtQkFBVCxDQUE2Qm5ELFFBQTdCLEVBQXVDb0QsS0FBdkMsRUFBOEM7QUFDMUMsUUFBTUMsYUFBYSxHQUFHLENBQUMsR0FBRzlFLHVCQUFKLEVBQTZCakssdUJBQTdCLENBQXFELENBQUMsR0FBR21LLG9CQUFKLEVBQTBCNkUsbUJBQTFCLENBQThDdEQsUUFBOUMsQ0FBckQsQ0FBdEI7O0FBQ0EsTUFBSXFELGFBQWEsS0FBSyxNQUFsQixJQUE0QkEsYUFBYSxLQUFLLFNBQWxELEVBQTZEO0FBQ3pELFdBQU9yRCxRQUFQO0FBQ0gsR0FKeUMsQ0FLMUM7OztBQUNBLE1BQUksQ0FBQ29ELEtBQUssQ0FBQ3hYLFFBQU4sQ0FBZXlYLGFBQWYsQ0FBTCxFQUFvQztBQUNoQztBQUNBRCxJQUFBQSxLQUFLLENBQUNHLElBQU4sQ0FBWUMsSUFBRCxJQUFRO0FBQ2YsVUFBSSxDQUFDLEdBQUczRSxVQUFKLEVBQWdCNkQsY0FBaEIsQ0FBK0JjLElBQS9CLEtBQXdDLENBQUMsR0FBR3RFLFdBQUosRUFBaUI2QixhQUFqQixDQUErQnlDLElBQS9CLEVBQXFDQyxFQUFyQyxDQUF3Qy9PLElBQXhDLENBQTZDMk8sYUFBN0MsQ0FBNUMsRUFBeUc7QUFDckdyRCxRQUFBQSxRQUFRLEdBQUd3RCxJQUFYO0FBQ0EsZUFBTyxJQUFQO0FBQ0g7QUFDSixLQUxEO0FBTUg7O0FBQ0QsU0FBTyxDQUFDLEdBQUdqRix1QkFBSixFQUE2QmpLLHVCQUE3QixDQUFxRDBMLFFBQXJELENBQVA7QUFDSDs7QUFDRCxNQUFNMEQsdUJBQXVCLEdBQUdoZCxNQUFBLElBQW1ILENBQW5KO0FBUUEsTUFBTXVkLGtCQUFrQixHQUFHeE0sTUFBTSxDQUFDLG9CQUFELENBQWpDOztBQUNBLFNBQVN5TSxVQUFULENBQW9CaFYsR0FBcEIsRUFBeUJpVixRQUF6QixFQUFtQztBQUMvQixTQUFPOUssS0FBSyxDQUFDbkssR0FBRCxFQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBa1YsSUFBQUEsV0FBVyxFQUFFO0FBWkMsR0FBTixDQUFMLENBYUpyYSxJQWJJLENBYUVpTixHQUFELElBQU87QUFDWCxRQUFJLENBQUNBLEdBQUcsQ0FBQ3NDLEVBQVQsRUFBYTtBQUNULFVBQUk2SyxRQUFRLEdBQUcsQ0FBWCxJQUFnQm5OLEdBQUcsQ0FBQ3FOLE1BQUosSUFBYyxHQUFsQyxFQUF1QztBQUNuQyxlQUFPSCxVQUFVLENBQUNoVixHQUFELEVBQU1pVixRQUFRLEdBQUcsQ0FBakIsQ0FBakI7QUFDSDs7QUFDRCxVQUFJbk4sR0FBRyxDQUFDcU4sTUFBSixLQUFlLEdBQW5CLEVBQXdCO0FBQ3BCLGVBQU9yTixHQUFHLENBQUNzTixJQUFKLEdBQVd2YSxJQUFYLENBQWlCd2EsSUFBRCxJQUFRO0FBQzNCLGNBQUlBLElBQUksQ0FBQ0MsUUFBVCxFQUFtQjtBQUNmLG1CQUFPO0FBQ0hBLGNBQUFBLFFBQVEsRUFBRVA7QUFEUCxhQUFQO0FBR0g7O0FBQ0QsZ0JBQU0sSUFBSTlhLEtBQUosQ0FBVyw2QkFBWCxDQUFOO0FBQ0gsU0FQTSxDQUFQO0FBUUg7O0FBQ0QsWUFBTSxJQUFJQSxLQUFKLENBQVcsNkJBQVgsQ0FBTjtBQUNIOztBQUNELFdBQU82TixHQUFHLENBQUNzTixJQUFKLEVBQVA7QUFDSCxHQS9CTSxDQUFQO0FBZ0NIOztBQUNELFNBQVNHLGFBQVQsQ0FBdUJDLFFBQXZCLEVBQWlDQyxjQUFqQyxFQUFpRDtBQUM3QyxTQUFPVCxVQUFVLENBQUNRLFFBQUQsRUFBV0MsY0FBYyxHQUFHLENBQUgsR0FBTyxDQUFoQyxDQUFWLENBQTZDN2EsS0FBN0MsQ0FBb0Q0RixHQUFELElBQU87QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsUUFBSSxDQUFDaVYsY0FBTCxFQUFxQjtBQUNqQixPQUFDLEdBQUduRyxZQUFKLEVBQWtCOUksY0FBbEIsQ0FBaUNoRyxHQUFqQztBQUNIOztBQUNELFVBQU1BLEdBQU47QUFDSCxHQVJNLENBQVA7QUFTSDs7QUFDRCxNQUFNa1YsTUFBTixDQUFhO0FBQ1RDLEVBQUFBLFdBQVcsQ0FBQ0MsU0FBRCxFQUFZQyxNQUFaLEVBQW9CQyxHQUFwQixFQUF5QjtBQUFFQyxJQUFBQSxZQUFGO0FBQWlCQyxJQUFBQSxVQUFqQjtBQUE4QkMsSUFBQUEsR0FBOUI7QUFBb0NDLElBQUFBLE9BQXBDO0FBQThDQyxJQUFBQSxTQUFTLEVBQUVDLFVBQXpEO0FBQXNFNVYsSUFBQUEsR0FBRyxFQUFFNlYsSUFBM0U7QUFBa0ZDLElBQUFBLFlBQWxGO0FBQWlHQyxJQUFBQSxVQUFqRztBQUE4R25WLElBQUFBLE1BQTlHO0FBQXVIeUQsSUFBQUEsT0FBdkg7QUFBaUlJLElBQUFBLGFBQWpJO0FBQWlKSCxJQUFBQSxhQUFqSjtBQUFpSzBSLElBQUFBO0FBQWpLLEdBQXpCLEVBQXVNO0FBQzlNO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEVBQVgsQ0FGOE0sQ0FJOU07O0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEVBQVg7QUFFQSxTQUFLQyxJQUFMLEdBQVksQ0FBWjs7QUFDQSxTQUFLQyxVQUFMLEdBQW1CN1UsQ0FBRCxJQUFLO0FBQ25CLFlBQU04VSxLQUFLLEdBQUc5VSxDQUFDLENBQUM4VSxLQUFoQjs7QUFDQSxVQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFBRS9GLFVBQUFBLFFBQVEsRUFBRThFLFNBQVo7QUFBd0JsRSxVQUFBQSxLQUFLLEVBQUVtRTtBQUEvQixZQUEyQyxJQUFqRDtBQUNBLGFBQUtpQixXQUFMLENBQWlCLGNBQWpCLEVBQWlDLENBQUMsR0FBR3BILE1BQUosRUFBWW9ELG9CQUFaLENBQWlDO0FBQzlEaEMsVUFBQUEsUUFBUSxFQUFFL0wsV0FBVyxDQUFDNlEsU0FBRCxDQUR5QztBQUU5RGxFLFVBQUFBLEtBQUssRUFBRW1FO0FBRnVELFNBQWpDLENBQWpDLEVBR0ksQ0FBQyxHQUFHbkcsTUFBSixFQUFZcUgsTUFBWixFQUhKO0FBSUE7QUFDSDs7QUFDRCxVQUFJLENBQUNGLEtBQUssQ0FBQ0csR0FBWCxFQUFnQjtBQUNaO0FBQ0g7O0FBQ0QsVUFBSUMsWUFBSjtBQUNBLFlBQU07QUFBRWpYLFFBQUFBLEdBQUY7QUFBUU4sUUFBQUEsRUFBRSxFQUFFb1csR0FBWjtBQUFrQjdVLFFBQUFBLE9BQWxCO0FBQTRCaVcsUUFBQUE7QUFBNUIsVUFBcUNMLEtBQTNDOztBQUNBLFVBQUlyZixLQUFKLEVBQTJDLEVBdUIxQzs7QUFDRCxXQUFLbWYsSUFBTCxHQUFZTyxHQUFaO0FBQ0EsWUFBTTtBQUFFcEcsUUFBQUEsUUFBUSxFQUFFOEU7QUFBWixVQUEyQixDQUFDLEdBQUdoRyxpQkFBSixFQUF1QjRILGdCQUF2QixDQUF3Q3hYLEdBQXhDLENBQWpDLENBakRtQixDQWtEbkI7QUFDQTs7QUFDQSxVQUFJLEtBQUt5WCxLQUFMLElBQWMzQixHQUFHLEtBQUssS0FBS3pDLE1BQTNCLElBQXFDdUMsU0FBUyxLQUFLLEtBQUs5RSxRQUE1RCxFQUFzRTtBQUNsRTtBQUNILE9BdERrQixDQXVEbkI7QUFDQTs7O0FBQ0EsVUFBSSxLQUFLNEcsSUFBTCxJQUFhLENBQUMsS0FBS0EsSUFBTCxDQUFVYixLQUFWLENBQWxCLEVBQW9DO0FBQ2hDO0FBQ0g7O0FBQ0QsV0FBS2MsTUFBTCxDQUFZLGNBQVosRUFBNEIzWCxHQUE1QixFQUFpQzhWLEdBQWpDLEVBQXNDN2lCLE1BQU0sQ0FBQ3FNLE1BQVAsQ0FBYyxFQUFkLEVBQ25DMkIsT0FEbUMsRUFDMUI7QUFDUmdCLFFBQUFBLE9BQU8sRUFBRWhCLE9BQU8sQ0FBQ2dCLE9BQVIsSUFBbUIsS0FBSzJWLFFBRHpCO0FBRVJ4VyxRQUFBQSxNQUFNLEVBQUVILE9BQU8sQ0FBQ0csTUFBUixJQUFrQixLQUFLNkQ7QUFGdkIsT0FEMEIsQ0FBdEMsRUFJSWdTLFlBSko7QUFLSCxLQWpFRCxDQVI4TSxDQTBFOU07OztBQUNBLFNBQUszTixLQUFMLEdBQWEsQ0FBQyxHQUFHK0YsdUJBQUosRUFBNkJqSyx1QkFBN0IsQ0FBcUR3USxTQUFyRCxDQUFiLENBM0U4TSxDQTRFOU07O0FBQ0EsU0FBS2lDLFVBQUwsR0FBa0IsRUFBbEIsQ0E3RThNLENBK0U5TTtBQUNBO0FBQ0E7O0FBQ0EsUUFBSWpDLFNBQVMsS0FBSyxTQUFsQixFQUE2QjtBQUN6QixXQUFLaUMsVUFBTCxDQUFnQixLQUFLdk8sS0FBckIsSUFBOEI7QUFDMUI2TSxRQUFBQSxTQUFTLEVBQUVDLFVBRGU7QUFFMUIwQixRQUFBQSxPQUFPLEVBQUUsSUFGaUI7QUFHMUJ4VixRQUFBQSxLQUFLLEVBQUV5VCxZQUhtQjtBQUkxQnZWLFFBQUFBLEdBQUcsRUFBRTZWLElBSnFCO0FBSzFCMEIsUUFBQUEsT0FBTyxFQUFFaEMsWUFBWSxJQUFJQSxZQUFZLENBQUNnQyxPQUxaO0FBTTFCQyxRQUFBQSxPQUFPLEVBQUVqQyxZQUFZLElBQUlBLFlBQVksQ0FBQ2lDO0FBTlosT0FBOUI7QUFRSDs7QUFDRCxTQUFLSCxVQUFMLENBQWdCLE9BQWhCLElBQTJCO0FBQ3ZCMUIsTUFBQUEsU0FBUyxFQUFFRixHQURZO0FBRXZCbE0sTUFBQUEsV0FBVyxFQUFFO0FBRlUsS0FBM0IsQ0E1RjhNLENBZ0c5TTtBQUNBOztBQUNBLFNBQUtvQyxNQUFMLEdBQWN1SixNQUFNLENBQUN2SixNQUFyQjtBQUNBLFNBQUs2SixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtsRixRQUFMLEdBQWdCOEUsU0FBaEI7QUFDQSxTQUFLbEUsS0FBTCxHQUFhbUUsTUFBYixDQXJHOE0sQ0FzRzlNO0FBQ0E7O0FBQ0EsVUFBTW9DLGlCQUFpQixHQUFHLENBQUMsR0FBR3RJLFVBQUosRUFBZ0I2RCxjQUFoQixDQUErQm9DLFNBQS9CLEtBQTZDalEsSUFBSSxDQUFDdVMsYUFBTCxDQUFtQkMsVUFBMUY7O0FBQ0EsU0FBSzlFLE1BQUwsR0FBYzRFLGlCQUFpQixHQUFHckMsU0FBSCxHQUFlRSxHQUE5QztBQUNBLFNBQUszRixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtpSSxHQUFMLEdBQVc5QixZQUFYO0FBQ0EsU0FBSytCLEdBQUwsR0FBVyxJQUFYO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQnBDLE9BQWhCLENBN0c4TSxDQThHOU07QUFDQTs7QUFDQSxTQUFLdUIsS0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLbEIsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLZ0MsT0FBTCxHQUFlLENBQUMsRUFBRTVTLElBQUksQ0FBQ3VTLGFBQUwsQ0FBbUJNLElBQW5CLElBQTJCN1MsSUFBSSxDQUFDdVMsYUFBTCxDQUFtQk8sR0FBOUMsSUFBcUQ5UyxJQUFJLENBQUN1UyxhQUFMLENBQW1CUSxNQUFuQixJQUE2QixDQUFDL1MsSUFBSSxDQUFDdVMsYUFBTCxDQUFtQlMsR0FBdEcsSUFBNkcsQ0FBQ1YsaUJBQUQsSUFBc0IsQ0FBQ3RTLElBQUksQ0FBQ2lULFFBQUwsQ0FBY0MsTUFBckMsSUFBK0MsQ0FBQ3JoQixLQUEvSixDQUFoQjtBQUNBLFNBQUtnZixTQUFMLEdBQWlCLENBQUMsQ0FBQ0EsU0FBbkI7QUFDQSxTQUFLN1IsY0FBTCxHQUFzQixLQUF0Qjs7QUFDQSxRQUFJbk4sS0FBSixFQUFxQyxFQU1wQzs7QUFDRCxlQUFtQyxFQXVCbEM7QUFDSjs7QUFDRDBoQixFQUFBQSxNQUFNLEdBQUc7QUFDTHJULElBQUFBLE1BQU0sQ0FBQytTLFFBQVAsQ0FBZ0JNLE1BQWhCO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7OztBQUFNQyxFQUFBQSxJQUFJLEdBQUc7QUFDTHRULElBQUFBLE1BQU0sQ0FBQzZPLE9BQVAsQ0FBZXlFLElBQWY7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQU0zZ0IsRUFBQUEsSUFBSSxDQUFDd0gsR0FBRCxFQUFNTixFQUFOLEVBQVV1QixPQUFPLEdBQUcsRUFBcEIsRUFDSDtBQUNDLFFBQUl6SixLQUFKLEVBQTJDLEVBYTFDOztBQUNELEtBQUM7QUFBRXdJLE1BQUFBLEdBQUY7QUFBUU4sTUFBQUE7QUFBUixRQUFnQmtVLFlBQVksQ0FBQyxJQUFELEVBQU81VCxHQUFQLEVBQVlOLEVBQVosQ0FBN0I7QUFDQSxXQUFPLEtBQUtpWSxNQUFMLENBQVksV0FBWixFQUF5QjNYLEdBQXpCLEVBQThCTixFQUE5QixFQUFrQ3VCLE9BQWxDLENBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQU1lLEVBQUFBLE9BQU8sQ0FBQ2hDLEdBQUQsRUFBTU4sRUFBTixFQUFVdUIsT0FBTyxHQUFHLEVBQXBCLEVBQ047QUFDQyxLQUFDO0FBQUVqQixNQUFBQSxHQUFGO0FBQVFOLE1BQUFBO0FBQVIsUUFBZ0JrVSxZQUFZLENBQUMsSUFBRCxFQUFPNVQsR0FBUCxFQUFZTixFQUFaLENBQTdCO0FBQ0EsV0FBTyxLQUFLaVksTUFBTCxDQUFZLGNBQVosRUFBNEIzWCxHQUE1QixFQUFpQ04sRUFBakMsRUFBcUN1QixPQUFyQyxDQUFQO0FBQ0g7O0FBQ0QsUUFBTTBXLE1BQU4sQ0FBYXlCLE1BQWIsRUFBcUJwWixHQUFyQixFQUEwQk4sRUFBMUIsRUFBOEJ1QixPQUE5QixFQUF1Q2dXLFlBQXZDLEVBQXFEO0FBQ2pELFFBQUksQ0FBQy9WLFVBQVUsQ0FBQ2xCLEdBQUQsQ0FBZixFQUFzQjtBQUNsQjZGLE1BQUFBLE1BQU0sQ0FBQytTLFFBQVAsQ0FBZ0JqWixJQUFoQixHQUF1QkssR0FBdkI7QUFDQSxhQUFPLEtBQVA7QUFDSDs7QUFDRCxVQUFNcVosaUJBQWlCLEdBQUdyWixHQUFHLEtBQUtOLEVBQVIsSUFBY3VCLE9BQU8sQ0FBQ3FZLEVBQXRCLElBQTRCclksT0FBTyxDQUFDOFgsa0JBQTlELENBTGlELENBTWpEO0FBQ0E7O0FBQ0EsUUFBSTlYLE9BQU8sQ0FBQ3FZLEVBQVosRUFBZ0I7QUFDWixXQUFLZixPQUFMLEdBQWUsSUFBZjtBQUNIOztBQUNELFVBQU1nQixVQUFVLEdBQUcsS0FBS25ZLE1BQXhCOztBQUNBLFFBQUk1SixLQUFKLEVBQXFDLFlBNkNwQzs7QUFDRCxRQUFJLENBQUN5SixPQUFPLENBQUNxWSxFQUFiLEVBQWlCO0FBQ2IsV0FBSzdCLEtBQUwsR0FBYSxLQUFiO0FBQ0gsS0E1RGdELENBNkRqRDs7O0FBQ0EsUUFBSS9ILE1BQU0sQ0FBQ2tLLEVBQVgsRUFBZTtBQUNYQyxNQUFBQSxXQUFXLENBQUNDLElBQVosQ0FBaUIsYUFBakI7QUFDSDs7QUFDRCxVQUFNO0FBQUU3WCxNQUFBQSxPQUFPLEdBQUU7QUFBWCxRQUFzQmhCLE9BQTVCO0FBQ0EsVUFBTThZLFVBQVUsR0FBRztBQUNmOVgsTUFBQUE7QUFEZSxLQUFuQjs7QUFHQSxRQUFJLEtBQUsrWCxjQUFULEVBQXlCO0FBQ3JCLFdBQUtDLGtCQUFMLENBQXdCLEtBQUtELGNBQTdCLEVBQTZDRCxVQUE3QztBQUNIOztBQUNEcmEsSUFBQUEsRUFBRSxHQUFHcUYsV0FBVyxDQUFDQyxTQUFTLENBQUNrSyxXQUFXLENBQUN4UCxFQUFELENBQVgsR0FBa0J5UCxXQUFXLENBQUN6UCxFQUFELENBQTdCLEdBQW9DQSxFQUFyQyxFQUF5Q3VCLE9BQU8sQ0FBQ0csTUFBakQsRUFBeUQsS0FBSzZELGFBQTlELENBQVYsQ0FBaEI7QUFDQSxVQUFNaVYsU0FBUyxHQUFHakwsU0FBUyxDQUFDQyxXQUFXLENBQUN4UCxFQUFELENBQVgsR0FBa0J5UCxXQUFXLENBQUN6UCxFQUFELENBQTdCLEdBQW9DQSxFQUFyQyxFQUF5QyxLQUFLMEIsTUFBOUMsQ0FBM0I7QUFDQSxTQUFLNFksY0FBTCxHQUFzQnRhLEVBQXRCO0FBQ0EsUUFBSXlhLFlBQVksR0FBR1osVUFBVSxLQUFLLEtBQUtuWSxNQUF2QyxDQTNFaUQsQ0E0RWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBSSxDQUFDSCxPQUFPLENBQUNxWSxFQUFULElBQWUsS0FBS2MsZUFBTCxDQUFxQkYsU0FBckIsQ0FBZixJQUFrRCxDQUFDQyxZQUF2RCxFQUFxRTtBQUNqRSxXQUFLOUcsTUFBTCxHQUFjNkcsU0FBZDtBQUNBeEUsTUFBQUEsTUFBTSxDQUFDdkosTUFBUCxDQUFja08sSUFBZCxDQUFtQixpQkFBbkIsRUFBc0MzYSxFQUF0QyxFQUEwQ3FhLFVBQTFDLEVBRmlFLENBR2pFOztBQUNBLFdBQUtqRCxXQUFMLENBQWlCc0MsTUFBakIsRUFBeUJwWixHQUF6QixFQUE4Qk4sRUFBOUIsRUFBa0N1QixPQUFsQztBQUNBLFdBQUtxWixZQUFMLENBQWtCSixTQUFsQjtBQUNBLFdBQUtLLE1BQUwsQ0FBWSxLQUFLMUMsVUFBTCxDQUFnQixLQUFLdk8sS0FBckIsQ0FBWixFQUF5QyxJQUF6QztBQUNBb00sTUFBQUEsTUFBTSxDQUFDdkosTUFBUCxDQUFja08sSUFBZCxDQUFtQixvQkFBbkIsRUFBeUMzYSxFQUF6QyxFQUE2Q3FhLFVBQTdDO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7O0FBQ0QsUUFBSVMsTUFBTSxHQUFHLENBQUMsR0FBRzVLLGlCQUFKLEVBQXVCNEgsZ0JBQXZCLENBQXdDeFgsR0FBeEMsQ0FBYjtBQUNBLFFBQUk7QUFBRThRLE1BQUFBLFFBQVEsRUFBRThFLFNBQVo7QUFBd0JsRSxNQUFBQSxLQUFLLEVBQUVtRTtBQUEvQixRQUEyQzJFLE1BQS9DLENBNUZpRCxDQTZGakQ7QUFDQTtBQUNBOztBQUNBLFFBQUl0RyxLQUFKLEVBQVd1RyxRQUFYOztBQUNBLFFBQUk7QUFDQXZHLE1BQUFBLEtBQUssR0FBRyxNQUFNLEtBQUs4QixVQUFMLENBQWdCMEUsV0FBaEIsRUFBZDtBQUNBLE9BQUM7QUFBRUMsUUFBQUEsVUFBVSxFQUFFRjtBQUFkLFVBQTRCLE1BQU0sQ0FBQyxHQUFHbkwsWUFBSixFQUFrQjVJLHNCQUFsQixFQUFuQztBQUNILEtBSEQsQ0FHRSxPQUFPMlAsSUFBUCxFQUFhO0FBQ1g7QUFDQTtBQUNBeFEsTUFBQUEsTUFBTSxDQUFDK1MsUUFBUCxDQUFnQmpaLElBQWhCLEdBQXVCRCxFQUF2QjtBQUNBLGFBQU8sS0FBUDtBQUNILEtBekdnRCxDQTBHakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBSSxDQUFDLEtBQUtrYixRQUFMLENBQWNWLFNBQWQsQ0FBRCxJQUE2QixDQUFDQyxZQUFsQyxFQUFnRDtBQUM1Q2YsTUFBQUEsTUFBTSxHQUFHLGNBQVQ7QUFDSCxLQWpIZ0QsQ0FrSGpEO0FBQ0E7OztBQUNBLFFBQUk1VixVQUFVLEdBQUc5RCxFQUFqQixDQXBIaUQsQ0FxSGpEO0FBQ0E7QUFDQTs7QUFDQWtXLElBQUFBLFNBQVMsR0FBR0EsU0FBUyxHQUFHLENBQUMsR0FBR3ZHLHVCQUFKLEVBQTZCakssdUJBQTdCLENBQXFEK0osV0FBVyxDQUFDeUcsU0FBRCxDQUFoRSxDQUFILEdBQWtGQSxTQUF2Rzs7QUFDQSxRQUFJeUQsaUJBQWlCLElBQUl6RCxTQUFTLEtBQUssU0FBdkMsRUFBa0Q7QUFDOUMzVSxNQUFBQSxPQUFPLENBQUM4WCxrQkFBUixHQUE2QixJQUE3Qjs7QUFDQSxVQUFJdmhCLEtBQUosRUFBMkQsRUFBM0QsTUFXTztBQUNIZ2pCLFFBQUFBLE1BQU0sQ0FBQzFKLFFBQVAsR0FBa0JtRCxtQkFBbUIsQ0FBQzJCLFNBQUQsRUFBWTFCLEtBQVosQ0FBckM7O0FBQ0EsWUFBSXNHLE1BQU0sQ0FBQzFKLFFBQVAsS0FBb0I4RSxTQUF4QixFQUFtQztBQUMvQkEsVUFBQUEsU0FBUyxHQUFHNEUsTUFBTSxDQUFDMUosUUFBbkI7QUFDQTBKLFVBQUFBLE1BQU0sQ0FBQzFKLFFBQVAsR0FBa0IvTCxXQUFXLENBQUM2USxTQUFELENBQTdCO0FBQ0E1VixVQUFBQSxHQUFHLEdBQUcsQ0FBQyxHQUFHMFAsTUFBSixFQUFZb0Qsb0JBQVosQ0FBaUMwSCxNQUFqQyxDQUFOO0FBQ0g7QUFDSjtBQUNKOztBQUNELFVBQU1sUixLQUFLLEdBQUcsQ0FBQyxHQUFHK0YsdUJBQUosRUFBNkJqSyx1QkFBN0IsQ0FBcUR3USxTQUFyRCxDQUFkOztBQUNBLFFBQUksQ0FBQzFVLFVBQVUsQ0FBQ3hCLEVBQUQsQ0FBZixFQUFxQjtBQUNqQixnQkFBMkM7QUFDdkMsY0FBTSxJQUFJekYsS0FBSixDQUFXLGtCQUFpQitGLEdBQUksY0FBYU4sRUFBRywyQ0FBdEMsR0FBb0Ysb0ZBQTlGLENBQU47QUFDSDs7QUFDRG1HLE1BQUFBLE1BQU0sQ0FBQytTLFFBQVAsQ0FBZ0JqWixJQUFoQixHQUF1QkQsRUFBdkI7QUFDQSxhQUFPLEtBQVA7QUFDSDs7QUFDRDhELElBQUFBLFVBQVUsR0FBR3lMLFNBQVMsQ0FBQ0UsV0FBVyxDQUFDM0wsVUFBRCxDQUFaLEVBQTBCLEtBQUtwQyxNQUEvQixDQUF0Qjs7QUFDQSxRQUFJLENBQUMsR0FBR3VPLFVBQUosRUFBZ0I2RCxjQUFoQixDQUErQmxLLEtBQS9CLENBQUosRUFBMkM7QUFDdkMsWUFBTWtRLFFBQVEsR0FBRyxDQUFDLEdBQUc1SixpQkFBSixFQUF1QjRILGdCQUF2QixDQUF3Q2hVLFVBQXhDLENBQWpCO0FBQ0EsWUFBTWlPLFVBQVUsR0FBRytILFFBQVEsQ0FBQzFJLFFBQTVCO0FBQ0EsWUFBTWlLLFVBQVUsR0FBRyxDQUFDLEdBQUcvSyxXQUFKLEVBQWlCNkIsYUFBakIsQ0FBK0J2SSxLQUEvQixDQUFuQjtBQUNBLFlBQU0wUixVQUFVLEdBQUcsQ0FBQyxHQUFHakwsYUFBSixFQUFtQmtDLGVBQW5CLENBQW1DOEksVUFBbkMsRUFBK0N0SixVQUEvQyxDQUFuQjtBQUNBLFlBQU13SixpQkFBaUIsR0FBRzNSLEtBQUssS0FBS21JLFVBQXBDO0FBQ0EsWUFBTThCLGNBQWMsR0FBRzBILGlCQUFpQixHQUFHN0wsYUFBYSxDQUFDOUYsS0FBRCxFQUFRbUksVUFBUixFQUFvQm9FLE1BQXBCLENBQWhCLEdBQThDLEVBQXRGOztBQUVBLFVBQUksQ0FBQ21GLFVBQUQsSUFBZUMsaUJBQWlCLElBQUksQ0FBQzFILGNBQWMsQ0FBQ2YsTUFBeEQsRUFBZ0U7QUFDNUQsY0FBTTBJLGFBQWEsR0FBR2pvQixNQUFNLENBQUMyQixJQUFQLENBQVltbUIsVUFBVSxDQUFDaEosTUFBdkIsRUFBK0JoZCxNQUEvQixDQUF1Q29kLEtBQUQsSUFBUyxDQUFDMEQsTUFBTSxDQUFDMUQsS0FBRCxDQUF0RCxDQUF0Qjs7QUFFQSxZQUFJK0ksYUFBYSxDQUFDem1CLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDMUIsb0JBQTJDO0FBQ3ZDb0ksWUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWMsR0FBRW1lLGlCQUFpQixHQUFJLG9CQUFKLEdBQTJCLGlDQUFpQyw4QkFBaEYsR0FBaUgsZUFBY0MsYUFBYSxDQUFDemhCLElBQWQsQ0FBbUIsSUFBbkIsQ0FBeUIsOEJBQXJLO0FBQ0g7O0FBQ0QsZ0JBQU0sSUFBSVEsS0FBSixDQUFVLENBQUNnaEIsaUJBQWlCLEdBQUksMEJBQXlCamIsR0FBSSxvQ0FBbUNrYixhQUFhLENBQUN6aEIsSUFBZCxDQUFtQixJQUFuQixDQUF5QixpQ0FBN0YsR0FBaUksOEJBQTZCZ1ksVUFBVyw4Q0FBNkNuSSxLQUFNLEtBQTlPLElBQXVQLCtDQUE4QzJSLGlCQUFpQixHQUFHLDJCQUFILEdBQWlDLHNCQUF1QixFQUF4WCxDQUFOO0FBQ0g7QUFDSixPQVRELE1BU08sSUFBSUEsaUJBQUosRUFBdUI7QUFDMUJ2YixRQUFBQSxFQUFFLEdBQUcsQ0FBQyxHQUFHZ1EsTUFBSixFQUFZb0Qsb0JBQVosQ0FBaUM3ZixNQUFNLENBQUNxTSxNQUFQLENBQWMsRUFBZCxFQUNuQ2thLFFBRG1DLEVBQ3pCO0FBQ1QxSSxVQUFBQSxRQUFRLEVBQUV5QyxjQUFjLENBQUNmLE1BRGhCO0FBRVRkLFVBQUFBLEtBQUssRUFBRWUsa0JBQWtCLENBQUNvRCxNQUFELEVBQVN0QyxjQUFjLENBQUNyVCxNQUF4QjtBQUZoQixTQUR5QixDQUFqQyxDQUFMO0FBS0gsT0FOTSxNQU1BO0FBQ0g7QUFDQWpOLFFBQUFBLE1BQU0sQ0FBQ3FNLE1BQVAsQ0FBY3VXLE1BQWQsRUFBc0JtRixVQUF0QjtBQUNIO0FBQ0o7O0FBQ0R0RixJQUFBQSxNQUFNLENBQUN2SixNQUFQLENBQWNrTyxJQUFkLENBQW1CLGtCQUFuQixFQUF1QzNhLEVBQXZDLEVBQTJDcWEsVUFBM0M7O0FBQ0EsUUFBSTtBQUNBLFVBQUl2YSxHQUFKLEVBQVMyYixJQUFUO0FBQ0EsVUFBSUMsU0FBUyxHQUFHLE1BQU0sS0FBS0MsWUFBTCxDQUFrQi9SLEtBQWxCLEVBQXlCc00sU0FBekIsRUFBb0NDLE1BQXBDLEVBQTRDblcsRUFBNUMsRUFBZ0Q4RCxVQUFoRCxFQUE0RHVXLFVBQTVELENBQXRCO0FBQ0EsVUFBSTtBQUFFdFosUUFBQUEsS0FBRjtBQUFVNkIsUUFBQUEsS0FBVjtBQUFrQnlWLFFBQUFBLE9BQWxCO0FBQTRCQyxRQUFBQTtBQUE1QixVQUF5Q29ELFNBQTdDLENBSEEsQ0FJQTs7QUFDQSxVQUFJLENBQUNyRCxPQUFPLElBQUlDLE9BQVosS0FBd0IxVixLQUE1QixFQUFtQztBQUMvQixZQUFJQSxLQUFLLENBQUNnWixTQUFOLElBQW1CaFosS0FBSyxDQUFDZ1osU0FBTixDQUFnQkMsWUFBdkMsRUFBcUQ7QUFDakQsZ0JBQU1DLFdBQVcsR0FBR2xaLEtBQUssQ0FBQ2daLFNBQU4sQ0FBZ0JDLFlBQXBDLENBRGlELENBRWpEO0FBQ0E7QUFDQTs7QUFDQSxjQUFJQyxXQUFXLENBQUNoaEIsVUFBWixDQUF1QixHQUF2QixDQUFKLEVBQWlDO0FBQzdCLGtCQUFNaWhCLFVBQVUsR0FBRyxDQUFDLEdBQUc3TCxpQkFBSixFQUF1QjRILGdCQUF2QixDQUF3Q2dFLFdBQXhDLENBQW5CO0FBQ0FDLFlBQUFBLFVBQVUsQ0FBQzNLLFFBQVgsR0FBc0JtRCxtQkFBbUIsQ0FBQ3dILFVBQVUsQ0FBQzNLLFFBQVosRUFBc0JvRCxLQUF0QixDQUF6QztBQUNBLGtCQUFNO0FBQUVsVSxjQUFBQSxHQUFHLEVBQUUwYixNQUFQO0FBQWdCaGMsY0FBQUEsRUFBRSxFQUFFaWM7QUFBcEIsZ0JBQStCL0gsWUFBWSxDQUFDLElBQUQsRUFBTzRILFdBQVAsRUFBb0JBLFdBQXBCLENBQWpEO0FBQ0EsbUJBQU8sS0FBSzdELE1BQUwsQ0FBWXlCLE1BQVosRUFBb0JzQyxNQUFwQixFQUE0QkMsS0FBNUIsRUFBbUMxYSxPQUFuQyxDQUFQO0FBQ0g7O0FBQ0Q0RSxVQUFBQSxNQUFNLENBQUMrUyxRQUFQLENBQWdCalosSUFBaEIsR0FBdUI2YixXQUF2QjtBQUNBLGlCQUFPLElBQUk5Z0IsT0FBSixDQUFZLE1BQUksQ0FDdEIsQ0FETSxDQUFQO0FBRUg7O0FBQ0QsYUFBSzhiLFNBQUwsR0FBaUIsQ0FBQyxDQUFDbFUsS0FBSyxDQUFDc1osV0FBekIsQ0FoQitCLENBaUIvQjs7QUFDQSxZQUFJdFosS0FBSyxDQUFDZ1QsUUFBTixLQUFtQlAsa0JBQXZCLEVBQTJDO0FBQ3ZDLGNBQUk4RyxhQUFKOztBQUNBLGNBQUk7QUFDQSxrQkFBTSxLQUFLQyxjQUFMLENBQW9CLE1BQXBCLENBQU47QUFDQUQsWUFBQUEsYUFBYSxHQUFHLE1BQWhCO0FBQ0gsV0FIRCxDQUdFLE9BQU9oWixDQUFQLEVBQVU7QUFDUmdaLFlBQUFBLGFBQWEsR0FBRyxTQUFoQjtBQUNIOztBQUNEVCxVQUFBQSxTQUFTLEdBQUcsTUFBTSxLQUFLQyxZQUFMLENBQWtCUSxhQUFsQixFQUFpQ0EsYUFBakMsRUFBZ0RoRyxNQUFoRCxFQUF3RG5XLEVBQXhELEVBQTREOEQsVUFBNUQsRUFBd0U7QUFDdEZ2QixZQUFBQSxPQUFPLEVBQUU7QUFENkUsV0FBeEUsQ0FBbEI7QUFHSDtBQUNKOztBQUNEeVQsTUFBQUEsTUFBTSxDQUFDdkosTUFBUCxDQUFja08sSUFBZCxDQUFtQixxQkFBbkIsRUFBMEMzYSxFQUExQyxFQUE4Q3FhLFVBQTlDO0FBQ0EsV0FBS2pELFdBQUwsQ0FBaUJzQyxNQUFqQixFQUF5QnBaLEdBQXpCLEVBQThCTixFQUE5QixFQUFrQ3VCLE9BQWxDOztBQUNBLGdCQUEyQztBQUN2QyxjQUFNOGEsT0FBTyxHQUFHLEtBQUtsRSxVQUFMLENBQWdCLE9BQWhCLEVBQXlCMUIsU0FBekM7QUFDQXRRLFFBQUFBLE1BQU0sQ0FBQ21XLElBQVAsQ0FBWUMsYUFBWixHQUE0QkYsT0FBTyxDQUFDbE4sZUFBUixLQUE0QmtOLE9BQU8sQ0FBQ2pOLG1CQUFwQyxJQUEyRCxDQUFDc00sU0FBUyxDQUFDakYsU0FBVixDQUFvQnRILGVBQTVHO0FBQ0g7O0FBQ0QsVUFBSTVOLE9BQU8sQ0FBQ3FZLEVBQVIsSUFBYzFELFNBQVMsS0FBSyxTQUE1QixJQUF5QyxDQUFDLENBQUNwVyxHQUFHLEdBQUdtRyxJQUFJLENBQUN1UyxhQUFMLENBQW1CNVYsS0FBMUIsTUFBcUMsSUFBckMsSUFBNkM5QyxHQUFHLEtBQUssS0FBSyxDQUExRCxHQUE4RCxLQUFLLENBQW5FLEdBQXVFLENBQUMyYixJQUFJLEdBQUczYixHQUFHLENBQUM4YixTQUFaLE1BQTJCLElBQTNCLElBQW1DSCxJQUFJLEtBQUssS0FBSyxDQUFqRCxHQUFxRCxLQUFLLENBQTFELEdBQThEQSxJQUFJLENBQUNlLFVBQTNJLE1BQTJKLEdBQXBNLEtBQTRNNVosS0FBSyxLQUFLLElBQVYsSUFBa0JBLEtBQUssS0FBSyxLQUFLLENBQWpDLEdBQXFDLEtBQUssQ0FBMUMsR0FBOENBLEtBQUssQ0FBQ2daLFNBQWhRLENBQUosRUFBZ1I7QUFDNVE7QUFDQTtBQUNBaFosUUFBQUEsS0FBSyxDQUFDZ1osU0FBTixDQUFnQlksVUFBaEIsR0FBNkIsR0FBN0I7QUFDSCxPQTlDRCxDQStDQTs7O0FBQ0EsWUFBTUMsbUJBQW1CLEdBQUdsYixPQUFPLENBQUNnQixPQUFSLElBQW1CLEtBQUtxSCxLQUFMLEtBQWVBLEtBQTlEOztBQUNBLFVBQUk4UyxPQUFKOztBQUNBLFlBQU1DLFlBQVksR0FBRyxDQUFDRCxPQUFPLEdBQUduYixPQUFPLENBQUNpQixNQUFuQixNQUErQixJQUEvQixJQUF1Q2thLE9BQU8sS0FBSyxLQUFLLENBQXhELEdBQTREQSxPQUE1RCxHQUFzRSxDQUFDRCxtQkFBNUY7QUFDQSxZQUFNRyxXQUFXLEdBQUdELFlBQVksR0FBRztBQUMvQjFpQixRQUFBQSxDQUFDLEVBQUUsQ0FENEI7QUFFL0J5ZCxRQUFBQSxDQUFDLEVBQUU7QUFGNEIsT0FBSCxHQUc1QixJQUhKO0FBSUEsWUFBTSxLQUFLaFgsR0FBTCxDQUFTa0osS0FBVCxFQUFnQnNNLFNBQWhCLEVBQTJCQyxNQUEzQixFQUFtQ3FFLFNBQW5DLEVBQThDa0IsU0FBOUMsRUFBeURuRSxZQUFZLEtBQUssSUFBakIsSUFBeUJBLFlBQVksS0FBSyxLQUFLLENBQS9DLEdBQW1EQSxZQUFuRCxHQUFrRXFGLFdBQTNILEVBQXdJMWhCLEtBQXhJLENBQStJbUgsQ0FBRCxJQUFLO0FBQ3JKLFlBQUlBLENBQUMsQ0FBQ2dILFNBQU4sRUFBaUJ0SSxLQUFLLEdBQUdBLEtBQUssSUFBSXNCLENBQWpCLENBQWpCLEtBQ0ssTUFBTUEsQ0FBTjtBQUNSLE9BSEssQ0FBTjs7QUFJQSxVQUFJdEIsS0FBSixFQUFXO0FBQ1BpVixRQUFBQSxNQUFNLENBQUN2SixNQUFQLENBQWNrTyxJQUFkLENBQW1CLGtCQUFuQixFQUF1QzVaLEtBQXZDLEVBQThDeVosU0FBOUMsRUFBeURILFVBQXpEO0FBQ0EsY0FBTXRaLEtBQU47QUFDSDs7QUFDRCxVQUFJakosS0FBSixFQUFxQyxFQUlwQzs7QUFDRGtlLE1BQUFBLE1BQU0sQ0FBQ3ZKLE1BQVAsQ0FBY2tPLElBQWQsQ0FBbUIscUJBQW5CLEVBQTBDM2EsRUFBMUMsRUFBOENxYSxVQUE5QztBQUNBLGFBQU8sSUFBUDtBQUNILEtBdEVELENBc0VFLE9BQU8xRCxJQUFQLEVBQWE7QUFDWCxVQUFJQSxJQUFJLENBQUN0TixTQUFULEVBQW9CO0FBQ2hCLGVBQU8sS0FBUDtBQUNIOztBQUNELFlBQU1zTixJQUFOO0FBQ0g7QUFDSjs7QUFDRFMsRUFBQUEsV0FBVyxDQUFDc0MsTUFBRCxFQUFTcFosR0FBVCxFQUFjTixFQUFkLEVBQWtCdUIsT0FBTyxHQUFHLEVBQTVCLEVBQ1I7QUFDQyxjQUEyQztBQUN2QyxVQUFJLE9BQU80RSxNQUFNLENBQUM2TyxPQUFkLEtBQTBCLFdBQTlCLEVBQTJDO0FBQ3ZDN1gsUUFBQUEsT0FBTyxDQUFDNEQsS0FBUixDQUFlLDJDQUFmO0FBQ0E7QUFDSDs7QUFDRCxVQUFJLE9BQU9vRixNQUFNLENBQUM2TyxPQUFQLENBQWUwRSxNQUFmLENBQVAsS0FBa0MsV0FBdEMsRUFBbUQ7QUFDL0N2YyxRQUFBQSxPQUFPLENBQUM0RCxLQUFSLENBQWUsMkJBQTBCMlksTUFBTyxtQkFBaEQ7QUFDQTtBQUNIO0FBQ0o7O0FBQ0QsUUFBSUEsTUFBTSxLQUFLLFdBQVgsSUFBMEIsQ0FBQyxHQUFHMUosTUFBSixFQUFZcUgsTUFBWixPQUF5QnJYLEVBQXZELEVBQTJEO0FBQ3ZELFdBQUtrWSxRQUFMLEdBQWdCM1csT0FBTyxDQUFDZ0IsT0FBeEI7QUFDQTRELE1BQUFBLE1BQU0sQ0FBQzZPLE9BQVAsQ0FBZTBFLE1BQWYsRUFBdUI7QUFDbkJwWixRQUFBQSxHQURtQjtBQUVuQk4sUUFBQUEsRUFGbUI7QUFHbkJ1QixRQUFBQSxPQUhtQjtBQUluQitWLFFBQUFBLEdBQUcsRUFBRSxJQUpjO0FBS25CRSxRQUFBQSxHQUFHLEVBQUUsS0FBS1AsSUFBTCxHQUFZeUMsTUFBTSxLQUFLLFdBQVgsR0FBeUIsS0FBS3pDLElBQTlCLEdBQXFDLEtBQUtBLElBQUwsR0FBWTtBQUwvQyxPQUF2QixFQU1HO0FBQ0g7QUFDQTtBQUNBLFFBVEEsRUFTSWpYLEVBVEo7QUFVSDtBQUNKOztBQUNELFFBQU0rYyxvQkFBTixDQUEyQmpjLEdBQTNCLEVBQWdDc1EsUUFBaEMsRUFBMENZLEtBQTFDLEVBQWlEaFMsRUFBakQsRUFBcURxYSxVQUFyRCxFQUFpRTJDLGFBQWpFLEVBQWdGO0FBQzVFLFFBQUlsYyxHQUFHLENBQUN1SSxTQUFSLEVBQW1CO0FBQ2Y7QUFDQSxZQUFNdkksR0FBTjtBQUNIOztBQUNELFFBQUksQ0FBQyxHQUFHOE8sWUFBSixFQUFrQjdJLFlBQWxCLENBQStCakcsR0FBL0IsS0FBdUNrYyxhQUEzQyxFQUEwRDtBQUN0RGhILE1BQUFBLE1BQU0sQ0FBQ3ZKLE1BQVAsQ0FBY2tPLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDN1osR0FBdkMsRUFBNENkLEVBQTVDLEVBQWdEcWEsVUFBaEQsRUFEc0QsQ0FFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQWxVLE1BQUFBLE1BQU0sQ0FBQytTLFFBQVAsQ0FBZ0JqWixJQUFoQixHQUF1QkQsRUFBdkIsQ0FQc0QsQ0FRdEQ7QUFDQTs7QUFDQSxZQUFNMlEsc0JBQXNCLEVBQTVCO0FBQ0g7O0FBQ0QsUUFBSTtBQUNBLFVBQUkrRixVQUFKO0FBQ0EsVUFBSXJNLFdBQUo7QUFDQSxVQUFJekgsS0FBSjs7QUFDQSxVQUFJLE9BQU84VCxVQUFQLEtBQXNCLFdBQXRCLElBQXFDLE9BQU9yTSxXQUFQLEtBQXVCLFdBQWhFLEVBQTZFO0FBQ3pFLFNBQUM7QUFBRXVLLFVBQUFBLElBQUksRUFBRThCLFVBQVI7QUFBcUJyTSxVQUFBQTtBQUFyQixZQUFzQyxNQUFNLEtBQUsrUixjQUFMLENBQW9CLFNBQXBCLENBQTdDO0FBQ0g7O0FBQ0QsWUFBTVYsU0FBUyxHQUFHO0FBQ2Q5WSxRQUFBQSxLQURjO0FBRWQ2VCxRQUFBQSxTQUFTLEVBQUVDLFVBRkc7QUFHZHJNLFFBQUFBLFdBSGM7QUFJZHZKLFFBQUFBLEdBSmM7QUFLZEMsUUFBQUEsS0FBSyxFQUFFRDtBQUxPLE9BQWxCOztBQU9BLFVBQUksQ0FBQzRhLFNBQVMsQ0FBQzlZLEtBQWYsRUFBc0I7QUFDbEIsWUFBSTtBQUNBOFksVUFBQUEsU0FBUyxDQUFDOVksS0FBVixHQUFrQixNQUFNLEtBQUt1TSxlQUFMLENBQXFCdUgsVUFBckIsRUFBaUM7QUFDckQ1VixZQUFBQSxHQURxRDtBQUVyRHNRLFlBQUFBLFFBRnFEO0FBR3JEWSxZQUFBQTtBQUhxRCxXQUFqQyxDQUF4QjtBQUtILFNBTkQsQ0FNRSxPQUFPaUwsTUFBUCxFQUFlO0FBQ2I5ZixVQUFBQSxPQUFPLENBQUM0RCxLQUFSLENBQWMseUNBQWQsRUFBeURrYyxNQUF6RDtBQUNBdkIsVUFBQUEsU0FBUyxDQUFDOVksS0FBVixHQUFrQixFQUFsQjtBQUVIO0FBQ0o7O0FBQ0QsYUFBTzhZLFNBQVA7QUFDSCxLQTVCRCxDQTRCRSxPQUFPd0IsWUFBUCxFQUFxQjtBQUNuQixhQUFPLEtBQUtILG9CQUFMLENBQTBCRyxZQUExQixFQUF3QzlMLFFBQXhDLEVBQWtEWSxLQUFsRCxFQUF5RGhTLEVBQXpELEVBQTZEcWEsVUFBN0QsRUFBeUUsSUFBekUsQ0FBUDtBQUNIO0FBQ0o7O0FBQ0QsUUFBTXNCLFlBQU4sQ0FBbUIvUixLQUFuQixFQUEwQndILFFBQTFCLEVBQW9DWSxLQUFwQyxFQUEyQ2hTLEVBQTNDLEVBQStDOEQsVUFBL0MsRUFBMkR1VyxVQUEzRCxFQUF1RTtBQUNuRSxRQUFJO0FBQ0EsWUFBTThDLGlCQUFpQixHQUFHLEtBQUtoRixVQUFMLENBQWdCdk8sS0FBaEIsQ0FBMUI7O0FBQ0EsVUFBSXlRLFVBQVUsQ0FBQzlYLE9BQVgsSUFBc0I0YSxpQkFBdEIsSUFBMkMsS0FBS3ZULEtBQUwsS0FBZUEsS0FBOUQsRUFBcUU7QUFDakUsZUFBT3VULGlCQUFQO0FBQ0g7O0FBQ0QsWUFBTUMsZUFBZSxHQUFHRCxpQkFBaUIsSUFBSSxhQUFhQSxpQkFBbEMsR0FBc0Q1bUIsU0FBdEQsR0FBa0U0bUIsaUJBQTFGO0FBQ0EsWUFBTXpCLFNBQVMsR0FBRzBCLGVBQWUsR0FBR0EsZUFBSCxHQUFxQixNQUFNLEtBQUtoQixjQUFMLENBQW9CeFMsS0FBcEIsRUFBMkJ6TyxJQUEzQixDQUFpQ2lOLEdBQUQsS0FBUTtBQUM1RnFPLFFBQUFBLFNBQVMsRUFBRXJPLEdBQUcsQ0FBQ3dNLElBRDZFO0FBRTVGdkssUUFBQUEsV0FBVyxFQUFFakMsR0FBRyxDQUFDaUMsV0FGMkU7QUFHNUZnTyxRQUFBQSxPQUFPLEVBQUVqUSxHQUFHLENBQUNpVixHQUFKLENBQVFoRixPQUgyRTtBQUk1RkMsUUFBQUEsT0FBTyxFQUFFbFEsR0FBRyxDQUFDaVYsR0FBSixDQUFRL0U7QUFKMkUsT0FBUixDQUFoQyxDQUE1RDtBQU9BLFlBQU07QUFBRTdCLFFBQUFBLFNBQVMsRUFBRUMsVUFBYjtBQUEwQjJCLFFBQUFBLE9BQTFCO0FBQW9DQyxRQUFBQTtBQUFwQyxVQUFpRG9ELFNBQXZEOztBQUNBLGdCQUEyQztBQUN2QyxjQUFNO0FBQUU0QixVQUFBQTtBQUFGLFlBQTBCdnBCLG1CQUFPLENBQUMsb0VBQUQsQ0FBdkM7O0FBQ0EsWUFBSSxDQUFDdXBCLGtCQUFrQixDQUFDNUcsVUFBRCxDQUF2QixFQUFxQztBQUNqQyxnQkFBTSxJQUFJbmMsS0FBSixDQUFXLHlEQUF3RDZXLFFBQVMsR0FBNUUsQ0FBTjtBQUNIO0FBQ0o7O0FBQ0QsVUFBSTBFLFFBQUo7O0FBQ0EsVUFBSXVDLE9BQU8sSUFBSUMsT0FBZixFQUF3QjtBQUNwQnhDLFFBQUFBLFFBQVEsR0FBRyxLQUFLUSxVQUFMLENBQWdCaUgsV0FBaEIsQ0FBNEIsQ0FBQyxHQUFHdk4sTUFBSixFQUFZb0Qsb0JBQVosQ0FBaUM7QUFDcEVoQyxVQUFBQSxRQURvRTtBQUVwRVksVUFBQUE7QUFGb0UsU0FBakMsQ0FBNUIsRUFHUGxPLFVBSE8sRUFHS3VVLE9BSEwsRUFHYyxLQUFLM1csTUFIbkIsQ0FBWDtBQUlIOztBQUNELFlBQU1rQixLQUFLLEdBQUcsTUFBTSxLQUFLNGEsUUFBTCxDQUFjLE1BQUluRixPQUFPLEdBQUcsS0FBS29GLGNBQUwsQ0FBb0IzSCxRQUFwQixDQUFILEdBQW1Dd0MsT0FBTyxHQUFHLEtBQUtvRixjQUFMLENBQW9CNUgsUUFBcEIsQ0FBSCxHQUFtQyxLQUFLM0csZUFBTCxDQUFxQnVILFVBQXJCLEVBQWlDO0FBQ3ZKO0FBQ0l0RixRQUFBQSxRQURKO0FBRUlZLFFBQUFBLEtBRko7QUFHSTJCLFFBQUFBLE1BQU0sRUFBRTNULEVBSFo7QUFJSTBCLFFBQUFBLE1BQU0sRUFBRSxLQUFLQSxNQUpqQjtBQUtJeUQsUUFBQUEsT0FBTyxFQUFFLEtBQUtBLE9BTGxCO0FBTUlJLFFBQUFBLGFBQWEsRUFBRSxLQUFLQTtBQU54QixPQURzSCxDQUF0RyxDQUFwQjtBQVVBbVcsTUFBQUEsU0FBUyxDQUFDOVksS0FBVixHQUFrQkEsS0FBbEI7QUFDQSxXQUFLdVYsVUFBTCxDQUFnQnZPLEtBQWhCLElBQXlCOFIsU0FBekI7QUFDQSxhQUFPQSxTQUFQO0FBQ0gsS0F4Q0QsQ0F3Q0UsT0FBT2lDLElBQVAsRUFBYTtBQUNYLGFBQU8sS0FBS1osb0JBQUwsQ0FBMEJZLElBQTFCLEVBQWdDdk0sUUFBaEMsRUFBMENZLEtBQTFDLEVBQWlEaFMsRUFBakQsRUFBcURxYSxVQUFyRCxDQUFQO0FBQ0g7QUFDSjs7QUFDRDNaLEVBQUFBLEdBQUcsQ0FBQ2tKLEtBQUQsRUFBUXdILFFBQVIsRUFBa0JZLEtBQWxCLEVBQXlCaFMsRUFBekIsRUFBNkIyVixJQUE3QixFQUFtQ2lILFdBQW5DLEVBQWdEO0FBQy9DLFNBQUsvRixVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsU0FBS2pOLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUt3SCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtZLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUsyQixNQUFMLEdBQWMzVCxFQUFkO0FBQ0EsV0FBTyxLQUFLNmEsTUFBTCxDQUFZbEYsSUFBWixFQUFrQmlILFdBQWxCLENBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBOzs7QUFBTWdCLEVBQUFBLGNBQWMsQ0FBQ3hYLEVBQUQsRUFBSztBQUNqQixTQUFLNFIsSUFBTCxHQUFZNVIsRUFBWjtBQUNIOztBQUNEc1UsRUFBQUEsZUFBZSxDQUFDMWEsRUFBRCxFQUFLO0FBQ2hCLFFBQUksQ0FBQyxLQUFLMlQsTUFBVixFQUFrQixPQUFPLEtBQVA7QUFDbEIsVUFBTSxDQUFDa0ssWUFBRCxFQUFlQyxPQUFmLElBQTBCLEtBQUtuSyxNQUFMLENBQVlILEtBQVosQ0FBa0IsR0FBbEIsQ0FBaEM7QUFDQSxVQUFNLENBQUN1SyxZQUFELEVBQWVDLE9BQWYsSUFBMEJoZSxFQUFFLENBQUN3VCxLQUFILENBQVMsR0FBVCxDQUFoQyxDQUhnQixDQUloQjs7QUFDQSxRQUFJd0ssT0FBTyxJQUFJSCxZQUFZLEtBQUtFLFlBQTVCLElBQTRDRCxPQUFPLEtBQUtFLE9BQTVELEVBQXFFO0FBQ2pFLGFBQU8sSUFBUDtBQUNILEtBUGUsQ0FRaEI7OztBQUNBLFFBQUlILFlBQVksS0FBS0UsWUFBckIsRUFBbUM7QUFDL0IsYUFBTyxLQUFQO0FBQ0gsS0FYZSxDQVloQjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsV0FBT0QsT0FBTyxLQUFLRSxPQUFuQjtBQUNIOztBQUNEcEQsRUFBQUEsWUFBWSxDQUFDNWEsRUFBRCxFQUFLO0FBQ2IsVUFBTSxHQUFHZ1UsSUFBSCxJQUFXaFUsRUFBRSxDQUFDd1QsS0FBSCxDQUFTLEdBQVQsQ0FBakIsQ0FEYSxDQUViO0FBQ0E7O0FBQ0EsUUFBSVEsSUFBSSxLQUFLLEVBQVQsSUFBZUEsSUFBSSxLQUFLLEtBQTVCLEVBQW1DO0FBQy9CN04sTUFBQUEsTUFBTSxDQUFDOFgsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNBO0FBQ0gsS0FQWSxDQVFiOzs7QUFDQSxVQUFNQyxJQUFJLEdBQUdyVyxRQUFRLENBQUNzVyxjQUFULENBQXdCbkssSUFBeEIsQ0FBYjs7QUFDQSxRQUFJa0ssSUFBSixFQUFVO0FBQ05BLE1BQUFBLElBQUksQ0FBQ0UsY0FBTDtBQUNBO0FBQ0gsS0FiWSxDQWNiO0FBQ0E7OztBQUNBLFVBQU1DLE1BQU0sR0FBR3hXLFFBQVEsQ0FBQ3lXLGlCQUFULENBQTJCdEssSUFBM0IsRUFBaUMsQ0FBakMsQ0FBZjs7QUFDQSxRQUFJcUssTUFBSixFQUFZO0FBQ1JBLE1BQUFBLE1BQU0sQ0FBQ0QsY0FBUDtBQUNIO0FBQ0o7O0FBQ0RsRCxFQUFBQSxRQUFRLENBQUN2SCxNQUFELEVBQVM7QUFDYixXQUFPLEtBQUtBLE1BQUwsS0FBZ0JBLE1BQXZCO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFNLFFBQU10UyxRQUFOLENBQWVmLEdBQWYsRUFBb0JxVCxNQUFNLEdBQUdyVCxHQUE3QixFQUFrQ2lCLE9BQU8sR0FBRyxFQUE1QyxFQUNDO0FBQ0MsUUFBSXVaLE1BQU0sR0FBRyxDQUFDLEdBQUc1SyxpQkFBSixFQUF1QjRILGdCQUF2QixDQUF3Q3hYLEdBQXhDLENBQWI7QUFDQSxRQUFJO0FBQUU4USxNQUFBQSxRQUFRLEVBQUVtTjtBQUFaLFFBQTJCekQsTUFBL0I7O0FBQ0EsUUFBSWhqQixLQUFKLEVBQXFDLEVBV3BDOztBQUNELFVBQU0wYyxLQUFLLEdBQUcsTUFBTSxLQUFLOEIsVUFBTCxDQUFnQjBFLFdBQWhCLEVBQXBCO0FBQ0EsUUFBSWxYLFVBQVUsR0FBRzZQLE1BQWpCOztBQUNBLFFBQUk3YixLQUFKLEVBQStELEVBQS9ELE1BYU87QUFDSGdqQixNQUFBQSxNQUFNLENBQUMxSixRQUFQLEdBQWtCbUQsbUJBQW1CLENBQUN1RyxNQUFNLENBQUMxSixRQUFSLEVBQWtCb0QsS0FBbEIsQ0FBckM7O0FBQ0EsVUFBSXNHLE1BQU0sQ0FBQzFKLFFBQVAsS0FBb0JtTixTQUF4QixFQUFtQztBQUMvQkEsUUFBQUEsU0FBUyxHQUFHekQsTUFBTSxDQUFDMUosUUFBbkI7QUFDQTBKLFFBQUFBLE1BQU0sQ0FBQzFKLFFBQVAsR0FBa0JtTixTQUFsQjtBQUNBamUsUUFBQUEsR0FBRyxHQUFHLENBQUMsR0FBRzBQLE1BQUosRUFBWW9ELG9CQUFaLENBQWlDMEgsTUFBakMsQ0FBTjtBQUNIO0FBQ0o7O0FBQ0QsVUFBTWxSLEtBQUssR0FBRyxDQUFDLEdBQUcrRix1QkFBSixFQUE2QmpLLHVCQUE3QixDQUFxRDZZLFNBQXJELENBQWQsQ0F0Q0QsQ0F1Q0M7O0FBQ0EsY0FBMkM7QUFDdkM7QUFDSDs7QUFDRCxVQUFNdmpCLE9BQU8sQ0FBQ3FCLEdBQVIsQ0FBWSxDQUNkLEtBQUtpYSxVQUFMLENBQWdCa0ksTUFBaEIsQ0FBdUI1VSxLQUF2QixFQUE4QnpPLElBQTlCLENBQW9Dc2pCLEtBQUQsSUFBUztBQUN4QyxhQUFPQSxLQUFLLEdBQUcsS0FBS2hCLGNBQUwsQ0FBb0IsS0FBS25ILFVBQUwsQ0FBZ0JpSCxXQUFoQixDQUE0QmpkLEdBQTVCLEVBQWlDd0QsVUFBakMsRUFBNkMsSUFBN0MsRUFBbUQsT0FBT3ZDLE9BQU8sQ0FBQ0csTUFBZixLQUEwQixXQUExQixHQUF3Q0gsT0FBTyxDQUFDRyxNQUFoRCxHQUF5RCxLQUFLQSxNQUFqSCxDQUFwQixDQUFILEdBQW1KLEtBQS9KO0FBQ0gsS0FGRCxDQURjLEVBSWQsS0FBSzRVLFVBQUwsQ0FBZ0IvVSxPQUFPLENBQUMxRixRQUFSLEdBQW1CLFVBQW5CLEdBQWdDLFVBQWhELEVBQTREK04sS0FBNUQsQ0FKYyxDQUFaLENBQU47QUFNSDs7QUFDRCxRQUFNd1MsY0FBTixDQUFxQnhTLEtBQXJCLEVBQTRCO0FBQ3hCLFFBQUlQLFNBQVMsR0FBRyxLQUFoQjs7QUFDQSxVQUFNcVYsTUFBTSxHQUFHLEtBQUsvRixHQUFMLEdBQVcsTUFBSTtBQUMxQnRQLE1BQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0gsS0FGRDs7QUFHQSxVQUFNc1YsZUFBZSxHQUFHLE1BQU0sS0FBS3JJLFVBQUwsQ0FBZ0JzSSxRQUFoQixDQUF5QmhWLEtBQXpCLENBQTlCOztBQUNBLFFBQUlQLFNBQUosRUFBZTtBQUNYLFlBQU10SSxLQUFLLEdBQUcsSUFBSXhHLEtBQUosQ0FBVyx3Q0FBdUNxUCxLQUFNLEdBQXhELENBQWQ7QUFDQTdJLE1BQUFBLEtBQUssQ0FBQ3NJLFNBQU4sR0FBa0IsSUFBbEI7QUFDQSxZQUFNdEksS0FBTjtBQUNIOztBQUNELFFBQUkyZCxNQUFNLEtBQUssS0FBSy9GLEdBQXBCLEVBQXlCO0FBQ3JCLFdBQUtBLEdBQUwsR0FBVyxJQUFYO0FBQ0g7O0FBQ0QsV0FBT2dHLGVBQVA7QUFDSDs7QUFDRG5CLEVBQUFBLFFBQVEsQ0FBQ3hTLEVBQUQsRUFBSztBQUNULFFBQUkzQixTQUFTLEdBQUcsS0FBaEI7O0FBQ0EsVUFBTXFWLE1BQU0sR0FBRyxNQUFJO0FBQ2ZyVixNQUFBQSxTQUFTLEdBQUcsSUFBWjtBQUNILEtBRkQ7O0FBR0EsU0FBS3NQLEdBQUwsR0FBVytGLE1BQVg7QUFDQSxXQUFPMVQsRUFBRSxHQUFHN1AsSUFBTCxDQUFXd2EsSUFBRCxJQUFRO0FBQ3JCLFVBQUkrSSxNQUFNLEtBQUssS0FBSy9GLEdBQXBCLEVBQXlCO0FBQ3JCLGFBQUtBLEdBQUwsR0FBVyxJQUFYO0FBQ0g7O0FBQ0QsVUFBSXRQLFNBQUosRUFBZTtBQUNYLGNBQU1zVSxJQUFJLEdBQUcsSUFBSXBqQixLQUFKLENBQVUsaUNBQVYsQ0FBYjtBQUNBb2pCLFFBQUFBLElBQUksQ0FBQ3RVLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxjQUFNc1UsSUFBTjtBQUNIOztBQUNELGFBQU9oSSxJQUFQO0FBQ0gsS0FWTSxDQUFQO0FBV0g7O0FBQ0Q4SCxFQUFBQSxjQUFjLENBQUMzSCxRQUFELEVBQVc7QUFDckIsVUFBTTtBQUFFN1YsTUFBQUEsSUFBSSxFQUFFNGU7QUFBUixRQUFzQixJQUFJdGUsR0FBSixDQUFRdVYsUUFBUixFQUFrQjNQLE1BQU0sQ0FBQytTLFFBQVAsQ0FBZ0JqWixJQUFsQyxDQUE1Qjs7QUFDQSxRQUFJLEtBQUosRUFBb0YsRUFFbkY7O0FBQ0QsV0FBTzRWLGFBQWEsQ0FBQ0MsUUFBRCxFQUFXLEtBQUtpQyxLQUFoQixDQUFiLENBQW9DNWMsSUFBcEMsQ0FBMEN3YSxJQUFELElBQVE7QUFDcEQsV0FBS29CLEdBQUwsQ0FBUzhILFFBQVQsSUFBcUJsSixJQUFyQjtBQUNBLGFBQU9BLElBQVA7QUFDSCxLQUhNLENBQVA7QUFJSDs7QUFDRCtILEVBQUFBLGNBQWMsQ0FBQzVILFFBQUQsRUFBVztBQUNyQixVQUFNO0FBQUU3VixNQUFBQSxJQUFJLEVBQUU2ZTtBQUFSLFFBQXlCLElBQUl2ZSxHQUFKLENBQVF1VixRQUFSLEVBQWtCM1AsTUFBTSxDQUFDK1MsUUFBUCxDQUFnQmpaLElBQWxDLENBQS9COztBQUNBLFFBQUksS0FBSytXLEdBQUwsQ0FBUzhILFdBQVQsQ0FBSixFQUEyQjtBQUN2QixhQUFPLEtBQUs5SCxHQUFMLENBQVM4SCxXQUFULENBQVA7QUFDSDs7QUFDRCxXQUFPLEtBQUs5SCxHQUFMLENBQVM4SCxXQUFULElBQXdCakosYUFBYSxDQUFDQyxRQUFELEVBQVcsS0FBS2lDLEtBQWhCLENBQWIsQ0FBb0M1YyxJQUFwQyxDQUEwQ3dhLElBQUQsSUFBUTtBQUM1RSxhQUFPLEtBQUtxQixHQUFMLENBQVM4SCxXQUFULENBQVA7QUFDQSxhQUFPbkosSUFBUDtBQUNILEtBSDhCLEVBRzVCemEsS0FINEIsQ0FHckJ5aUIsSUFBRCxJQUFRO0FBQ2IsYUFBTyxLQUFLM0csR0FBTCxDQUFTOEgsV0FBVCxDQUFQO0FBQ0EsWUFBTW5CLElBQU47QUFDSCxLQU44QixDQUEvQjtBQU9IOztBQUNEeE8sRUFBQUEsZUFBZSxDQUFDc0gsU0FBRCxFQUFZc0ksR0FBWixFQUFpQjtBQUM1QixVQUFNO0FBQUV0SSxNQUFBQSxTQUFTLEVBQUV1STtBQUFiLFFBQXVCLEtBQUs3RyxVQUFMLENBQWdCLE9BQWhCLENBQTdCOztBQUNBLFVBQU04RyxPQUFPLEdBQUcsS0FBS3JHLFFBQUwsQ0FBY29HLElBQWQsQ0FBaEI7O0FBQ0FELElBQUFBLEdBQUcsQ0FBQ0UsT0FBSixHQUFjQSxPQUFkO0FBQ0EsV0FBTyxDQUFDLEdBQUdqUCxNQUFKLEVBQVlrUCxtQkFBWixDQUFnQ0YsSUFBaEMsRUFBc0M7QUFDekNDLE1BQUFBLE9BRHlDO0FBRXpDeEksTUFBQUEsU0FGeUM7QUFHekNuVixNQUFBQSxNQUFNLEVBQUUsSUFIaUM7QUFJekN5ZCxNQUFBQTtBQUp5QyxLQUF0QyxDQUFQO0FBTUg7O0FBQ0R4RSxFQUFBQSxrQkFBa0IsQ0FBQ3ZhLEVBQUQsRUFBS3FhLFVBQUwsRUFBaUI7QUFDL0IsUUFBSSxLQUFLMUIsR0FBVCxFQUFjO0FBQ1YzQyxNQUFBQSxNQUFNLENBQUN2SixNQUFQLENBQWNrTyxJQUFkLENBQW1CLGtCQUFuQixFQUF1Q2hLLHNCQUFzQixFQUE3RCxFQUFpRTNRLEVBQWpFLEVBQXFFcWEsVUFBckU7QUFDQSxXQUFLMUIsR0FBTDtBQUNBLFdBQUtBLEdBQUwsR0FBVyxJQUFYO0FBQ0g7QUFDSjs7QUFDRGtDLEVBQUFBLE1BQU0sQ0FBQ2xGLElBQUQsRUFBT2lILFdBQVAsRUFBb0I7QUFDdEIsV0FBTyxLQUFLbEUsR0FBTCxDQUFTL0MsSUFBVCxFQUFlLEtBQUt3QyxVQUFMLENBQWdCLE9BQWhCLEVBQXlCMUIsU0FBeEMsRUFBbURtRyxXQUFuRCxDQUFQO0FBQ0g7O0FBdnZCUTs7QUF5dkJiNUcsTUFBTSxDQUFDdkosTUFBUCxHQUFnQixDQUFDLEdBQUdzRCxLQUFKLEVBQVdwYyxPQUFYLEVBQWhCO0FBQ0FGLGVBQUEsR0FBa0J1aUIsTUFBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdmlDQTs7QUFFQSxNQUFNb0osUUFBUSxHQUFHLE1BQU07QUFDckIsc0JBQ0UsOERBQUMsc0RBQUQ7QUFBTSxPQUFHLEVBQUMsNEJBQVY7QUFBdUMsVUFBTSxFQUFDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUdELENBSkQ7O0FBTUEsaUVBQWVBLFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkEsTUFBTUMsV0FBVyxHQUFHLENBQUM7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQSxNQUFiO0FBQXFCeHFCLEVBQUFBLE1BQXJCO0FBQTZCb0QsRUFBQUE7QUFBN0IsQ0FBRCxLQUF5QztBQUMzRCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxpREFBZjtBQUFBLGtCQUNHcEQsTUFBTSxnQkFDTDtBQUFBLGtDQUNFO0FBQUEsbUNBQ0U7QUFDRSxrQkFBSSxFQUFDLEdBRFA7QUFFRSxxQkFBTyxFQUFHc04sQ0FBRCxJQUFPO0FBQ2RpZCxnQkFBQUEsU0FBUyxDQUFDLENBQUQsQ0FBVDtBQUNBamQsZ0JBQUFBLENBQUMsQ0FBQ0ssY0FBRjtBQUNELGVBTEg7QUFBQSxxQ0FPRTtBQUFHLHlCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFhRzhLLEtBQUssQ0FBQ3ZVLElBQUksQ0FBQ3VtQixJQUFMLENBQVV6cUIsTUFBTSxHQUFHb0QsSUFBbkIsQ0FBRCxDQUFMLENBQ0VzbkIsSUFERixDQUNPLEdBRFAsRUFFRW5tQixHQUZGLENBRU0sQ0FBQ29tQixDQUFELEVBQUk3cUIsQ0FBSixrQkFDSDtBQUFZLHFCQUFTLEVBQUcsR0FBRTBxQixNQUFNLEtBQUsxcUIsQ0FBWCxHQUFlLFFBQWYsR0FBMEIsRUFBRyxFQUF2RDtBQUFBLG1DQUNFO0FBQ0Usa0JBQUksRUFBQyxHQURQO0FBRUUscUJBQU8sRUFBR3dOLENBQUQsSUFBTztBQUNkaWQsZ0JBQUFBLFNBQVMsQ0FBQ3pxQixDQUFELENBQVQ7QUFDQXdOLGdCQUFBQSxDQUFDLENBQUNLLGNBQUY7QUFDRCxlQUxIO0FBQUEsd0JBT0c3TixDQUFDLEdBQUcsQ0FBSixHQUFTLElBQUdBLENBQUMsR0FBRyxDQUFFLEVBQWxCLEdBQXNCQSxDQUFDLEdBQUc7QUFQN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQVNBLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISCxDQWJILGVBNkJFO0FBQUEsbUNBQ0U7QUFDRSxrQkFBSSxFQUFDLEdBRFA7QUFFRSxxQkFBTyxFQUFHd04sQ0FBRCxJQUFPO0FBQ2RpZCxnQkFBQUEsU0FBUyxDQUFDOVIsS0FBSyxDQUFDdlUsSUFBSSxDQUFDdW1CLElBQUwsQ0FBVXpxQixNQUFNLEdBQUdvRCxJQUFuQixDQUFELENBQUwsQ0FBZ0NwRCxNQUFoQyxHQUF5QyxDQUExQyxDQUFUO0FBQ0FzTixnQkFBQUEsQ0FBQyxDQUFDSyxjQUFGO0FBQ0QsZUFMSDtBQUFBLHFDQU9FO0FBQUcseUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURLLEdBMkNMO0FBNUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBcURELENBdEREOztBQXdEQSxpRUFBZTJjLFdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTs7QUFDQSxNQUFNZSxPQUFPLEdBQUcsQ0FBQztBQUNmQyxFQUFBQSxPQURlO0FBRWZDLEVBQUFBLGVBRmU7QUFHZlIsRUFBQUEsU0FIZTtBQUlmQyxFQUFBQSxXQUplO0FBS2ZDLEVBQUFBLE9BTGU7QUFNZkUsRUFBQUE7QUFOZSxDQUFELEtBT1Y7QUFDSixRQUFNSyxRQUFRLEdBQUdWLHdEQUFXLENBQUUxSSxLQUFELElBQVdBLEtBQUssQ0FBQ3FKLE1BQU4sQ0FBYUQsUUFBekIsQ0FBNUI7QUFDQSxRQUFNRSxRQUFRLEdBQUdaLHdEQUFXLENBQUUxSSxLQUFELElBQVdBLEtBQUssQ0FBQ3FKLE1BQU4sQ0FBYUMsUUFBekIsQ0FBNUI7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEIzUywrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQzRTLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCN1MsK0NBQVEsQ0FBQyxLQUFELENBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUM4UyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3Qi9TLCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDZ1QsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NqVCwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEQ7O0FBRUEsUUFBTWtULGNBQWMsR0FBSTdlLENBQUQsSUFBTztBQUM1QkEsSUFBQUEsQ0FBQyxDQUFDSyxjQUFGO0FBQ0FtZSxJQUFBQSxhQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0EsVUFBTU0sU0FBUyxHQUFHVixRQUFRLENBQUNqbkIsSUFBVCxDQUFld21CLE9BQUQsSUFBYUEsT0FBTyxDQUFDcFosRUFBUixLQUFleVosT0FBTyxDQUFDelosRUFBbEQsQ0FBbEI7O0FBQ0EsUUFBSTZaLFFBQVEsQ0FBQzFyQixNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLFVBQUlvc0IsU0FBSixFQUFlO0FBQ2J4QixRQUFBQSx3REFBQSxDQUFZLGlDQUFaO0FBQ0FLLFFBQUFBLE9BQU8sQ0FBQ0ssT0FBRCxDQUFQO0FBQ0QsT0FIRCxNQUdPO0FBQ0xWLFFBQUFBLDBEQUFBLENBQWMsK0JBQWQ7QUFDQUssUUFBQUEsT0FBTyxDQUFDSyxPQUFELENBQVA7QUFDRDtBQUNGLEtBUkQsTUFRTztBQUNMLFVBQUljLFNBQUosRUFBZTtBQUNieEIsUUFBQUEsd0RBQUEsQ0FBWSxpQ0FBWjtBQUNBTyxRQUFBQSxhQUFhLENBQUNHLE9BQUQsQ0FBYjtBQUNELE9BSEQsTUFHTztBQUNMVixRQUFBQSx3REFBQSxDQUFZLHNFQUFaO0FBQ0Q7QUFDRjtBQUNGLEdBcEJEOztBQXNCQSxRQUFNMEIsV0FBVyxHQUFJaGYsQ0FBRCxJQUFPO0FBQ3pCQSxJQUFBQSxDQUFDLENBQUNLLGNBQUY7QUFDQW9kLElBQUFBLFNBQVMsQ0FBQ08sT0FBRCxDQUFUO0FBQ0FVLElBQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7QUFDQXBCLElBQUFBLDBEQUFBLENBQWMsZ0NBQWQ7QUFDRCxHQUxEOztBQU1BLFFBQU0yQixlQUFlLEdBQUlqZixDQUFELElBQU87QUFDN0JBLElBQUFBLENBQUMsQ0FBQ0ssY0FBRjtBQUNBcWQsSUFBQUEsV0FBVyxDQUFDTSxPQUFELENBQVg7QUFDQVksSUFBQUEsZUFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBLFVBQU1NLFNBQVMsR0FBR2hCLFFBQVEsQ0FBQy9tQixJQUFULENBQWUrbUIsUUFBRCxJQUFjQSxRQUFRLENBQUMzWixFQUFULEtBQWdCeVosT0FBTyxDQUFDelosRUFBcEQsQ0FBbEI7O0FBQ0EsUUFBSTJhLFNBQUosRUFBZTtBQUNiNUIsTUFBQUEsd0RBQUEsQ0FBWSw2Q0FBWjtBQUNELEtBRkQsTUFFTztBQUNMQSxNQUFBQSwwREFBQSxDQUFjLHdDQUFkO0FBQ0Q7QUFDRixHQVZEOztBQVlBLHNCQUNFO0FBQUssYUFBUyxFQUFHLHlCQUF3QlcsZUFBZSxHQUFHLEtBQUgsR0FBVyxFQUFHLEVBQXRFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFDRSxVQUFJLEVBQUVJLFNBRFI7QUFFRSxpQkFBVyxFQUFFLE1BQU1DLFlBQVksQ0FBQyxLQUFELENBRmpDO0FBR0UsYUFBTyxFQUFFTjtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFHLFNBQVFBLE9BQU8sQ0FBQ3paLEVBQUcsRUFBaEM7QUFBQSwrQkFDRTtBQUFBLGtDQUNFO0FBQUssZUFBRyxFQUFFeVosT0FBTyxDQUFDbUIsSUFBbEI7QUFBd0IsZUFBRyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFLLHFCQUFTLEVBQUMsZUFBZjtBQUErQixlQUFHLEVBQUVuQixPQUFPLENBQUNvQixJQUE1QztBQUFrRCxlQUFHLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBUUU7QUFBSyxpQkFBUyxFQUFDLDRCQUFmO0FBQUEsZ0NBQ0U7QUFBRyxjQUFJLEVBQUMsR0FBUjtBQUFZLGlCQUFPLEVBQUdwZixDQUFELElBQU9nZixXQUFXLENBQUNoZixDQUFELENBQXZDO0FBQTRDLGVBQUssRUFBQyxnQkFBbEQ7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFO0FBQ0UsY0FBSSxFQUFDLEdBRFA7QUFFRSxpQkFBTyxFQUFHQSxDQUFELElBQU87QUFDZEEsWUFBQUEsQ0FBQyxDQUFDSyxjQUFGO0FBQ0FpZSxZQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0QsV0FMSDtBQU1FLGVBQUssRUFBQyxZQU5SO0FBQUEsaUNBUUU7QUFBRyxxQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsZUFjRTtBQUNFLGNBQUksRUFBQyxHQURQO0FBRUUsaUJBQU8sRUFBR3RlLENBQUQsSUFBTzZlLGNBQWMsQ0FBQzdlLENBQUQsQ0FGaEM7QUFHRSx5QkFBWSxTQUhkO0FBSUUsNEJBQWUsT0FKakI7QUFLRSxlQUFLLEVBQUMsU0FMUjtBQU1FLG1CQUFTLEVBQ1BvZSxRQUFRLENBQUNqbkIsSUFBVCxDQUFld21CLE9BQUQsSUFBYUEsT0FBTyxDQUFDcFosRUFBUixLQUFleVosT0FBTyxDQUFDelosRUFBbEQsSUFDSSxRQURKLEdBRUksRUFUUjtBQUFBLGlDQVlFO0FBQUcscUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixlQXFDRTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLG1CQUNHeVosT0FBTyxDQUFDcUIsR0FBUixpQkFBZTtBQUFNLG1CQUFTLEVBQUMsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGxCLEVBRUdyQixPQUFPLENBQUNzQixJQUFSLGlCQUFnQjtBQUFNLG1CQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFyQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBaURFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQSwrQkFFRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBRyxTQUFRdEIsT0FBTyxDQUFDelosRUFBRyxFQUFoQztBQUFBLG9CQUFvQ3laLE9BQU8sQ0FBQ3VCO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBS0U7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBRyxTQUFRdkIsT0FBTyxDQUFDelosRUFBRyxFQUFoQztBQUFBLG9CQUFvQ3laLE9BQU8sQ0FBQ2hSO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBUUU7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGtDQUNFO0FBQUEsc0JBQVEsSUFBR3dTLE1BQU0sQ0FBQ3hCLE9BQU8sQ0FBQ3lCLFNBQVQsQ0FBTixDQUEwQkMsT0FBMUIsQ0FBa0MsQ0FBbEMsQ0FBcUM7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUVHMUIsT0FBTyxDQUFDMkIsS0FBUixpQkFDQztBQUFNLHFCQUFTLEVBQUMsV0FBaEI7QUFBQSxzQkFDSSxJQUFHSCxNQUFNLENBQUN4QixPQUFPLENBQUMyQixLQUFULENBQU4sQ0FBc0JELE9BQXRCLENBQThCLENBQTlCLENBQWlDO0FBRHhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixlQWtCRTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQSwrQkFDRTtBQUNFLGNBQUksRUFBQyxHQURQO0FBRUUsaUJBQU8sRUFBRzFmLENBQUQsSUFBT2lmLGVBQWUsQ0FBQ2pmLENBQUQsQ0FGakM7QUFHRSxtQkFBUyxFQUFHLElBQ1ZrZSxRQUFRLElBQUlBLFFBQVEsQ0FBQy9tQixJQUFULENBQWV5b0IsR0FBRCxJQUFTQSxHQUFHLENBQUNyYixFQUFKLEtBQVd5WixPQUFPLENBQUN6WixFQUExQyxDQUFaLEdBQ0ksUUFESixHQUVJLEVBQ0wsR0FQSDtBQUFBLGlDQVNFO0FBQUcscUJBQVMsRUFBQyxjQUFiO0FBQTRCLGlCQUFLLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBb0ZELENBNUlEOztBQThJQSxpRUFBZWdaLG9EQUFPLENBQUMsSUFBRCxFQUFPO0FBQzNCRSxFQUFBQSxTQUQyQjtBQUUzQkMsRUFBQUEsV0FGMkI7QUFHM0JFLEVBQUFBLFdBSDJCO0FBSTNCRCxFQUFBQSxPQUoyQjtBQUszQkUsRUFBQUEsYUFBYUEsaUVBQUFBO0FBTGMsQ0FBUCxDQUFQLENBTVpFLE9BTlksQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU04QixlQUFlLEdBQUcsQ0FBQztBQUFFN0IsRUFBQUEsT0FBRjtBQUFXOEIsRUFBQUEsSUFBWDtBQUFpQnJDLEVBQUFBLFNBQWpCO0FBQTRCQyxFQUFBQTtBQUE1QixDQUFELEtBQStDO0FBQ3JFLFFBQU1RLFFBQVEsR0FBR1Ysd0RBQVcsQ0FBRTFJLEtBQUQsSUFBV0EsS0FBSyxDQUFDcUosTUFBTixDQUFhRCxRQUF6QixDQUE1QjtBQUNBLFFBQU07QUFBQSxPQUFDRyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QjNTLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDOFMsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0IvUywrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ2dULFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDalQsK0NBQVEsQ0FBQyxLQUFELENBQWhEOztBQUVBLFFBQU1xVCxXQUFXLEdBQUloZixDQUFELElBQU87QUFDekJBLElBQUFBLENBQUMsQ0FBQ0ssY0FBRjtBQUNBb2QsSUFBQUEsU0FBUyxDQUFDTyxPQUFELENBQVQ7QUFDQVUsSUFBQUEsVUFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBcEIsSUFBQUEsMERBQUEsQ0FBYyxtQkFBZDtBQUNELEdBTEQ7O0FBTUEsUUFBTTJCLGVBQWUsR0FBSWpmLENBQUQsSUFBTztBQUM3QkEsSUFBQUEsQ0FBQyxDQUFDSyxjQUFGO0FBQ0FxZCxJQUFBQSxXQUFXLENBQUNNLE9BQUQsQ0FBWDtBQUNBWSxJQUFBQSxlQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0EsVUFBTU0sU0FBUyxHQUFHaEIsUUFBUSxDQUFDL21CLElBQVQsQ0FBZSttQixRQUFELElBQWNBLFFBQVEsQ0FBQzNaLEVBQVQsS0FBZ0J5WixPQUFPLENBQUN6WixFQUFwRCxDQUFsQjs7QUFDQSxRQUFJMmEsU0FBSixFQUFlO0FBQ2I1QixNQUFBQSx3REFBQSxDQUFZLDBCQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLE1BQUFBLDBEQUFBLENBQWMsdUJBQWQ7QUFDRDtBQUNGLEdBVkQ7O0FBWUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQ0UsVUFBSSxFQUFFZSxTQURSO0FBRUUsaUJBQVcsRUFBRSxNQUFNQyxZQUFZLENBQUMsS0FBRCxDQUZqQztBQUdFLGFBQU8sRUFBRU47QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUU7QUFBSyxlQUFTLEVBQUcsVUFBUzhCLElBQUksR0FBRyxDQUFILEdBQU8sQ0FBRSxXQUFVQSxJQUFJLEdBQUcsQ0FBSCxHQUFPLENBQUUsRUFBOUQ7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsdUJBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLGtDQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBRyxTQUFROUIsT0FBTyxDQUFDelosRUFBRyxFQUFoQztBQUFBLG1DQUNFO0FBQUEsc0NBQ0U7QUFBSyxtQkFBRyxFQUFFeVosT0FBTyxDQUFDbUIsSUFBbEI7QUFBd0IsbUJBQUcsRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBRUU7QUFDRSx5QkFBUyxFQUFDLGVBRFo7QUFFRSxtQkFBRyxFQUFFbkIsT0FBTyxDQUFDb0IsSUFGZjtBQUdFLG1CQUFHLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFXRTtBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUFBLHVCQUNHcEIsT0FBTyxDQUFDcUIsR0FBUixpQkFBZTtBQUFNLHVCQUFTLEVBQUMsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRGxCLEVBRUdyQixPQUFPLENBQUNzQixJQUFSLGlCQUFnQjtBQUFNLHVCQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQTBCRTtBQUFLLGVBQVMsRUFBRyxVQUFTUSxJQUFJLEdBQUcsQ0FBSCxHQUFPLENBQUUsV0FBVUEsSUFBSSxHQUFHLENBQUgsR0FBTyxDQUFFLEVBQTlEO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLDZDQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQSxrQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUcsU0FBUTlCLE9BQU8sQ0FBQ3paLEVBQUcsRUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUcsU0FBUXlaLE9BQU8sQ0FBQ3paLEVBQUcsRUFBaEM7QUFBQSxzQkFBb0N5WixPQUFPLENBQUN1QjtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUtFO0FBQUEsaUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFHLFNBQVF2QixPQUFPLENBQUN6WixFQUFHLEVBQWhDO0FBQUEsc0JBQW9DeVosT0FBTyxDQUFDaFI7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEYsZUFRRTtBQUFLLG1CQUFTLEVBQUMsb0JBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsV0FBZjtBQUFBLG9DQUNFO0FBQUEsd0JBQVEsSUFBR3dTLE1BQU0sQ0FBQ3hCLE9BQU8sQ0FBQ3lCLFNBQVQsQ0FBTixDQUEwQkMsT0FBMUIsQ0FBa0MsQ0FBbEMsQ0FBcUM7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQUVHMUIsT0FBTyxDQUFDMkIsS0FBUixpQkFDQztBQUFNLHVCQUFTLEVBQUMsV0FBaEI7QUFBQSx3QkFDSSxJQUFHSCxNQUFNLENBQUN4QixPQUFPLENBQUMyQixLQUFULENBQU4sQ0FBc0JELE9BQXRCLENBQThCLENBQTlCLENBQWlDO0FBRHhDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixlQWtCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFsQkYsZUEwQkU7QUFBSyxtQkFBUyxFQUFDLGdCQUFmO0FBQUEsa0NBQ0U7QUFBRyxnQkFBSSxFQUFDLEdBQVI7QUFBWSxpQkFBSyxFQUFDLGdCQUFsQjtBQUFtQyxtQkFBTyxFQUFHMWYsQ0FBRCxJQUFPZ2YsV0FBVyxDQUFDaGYsQ0FBRCxDQUE5RDtBQUFBLG1DQUNFO0FBQUcsdUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBSUU7QUFDRSxnQkFBSSxFQUFDLEdBRFA7QUFFRSxtQkFBTyxFQUFHQSxDQUFELElBQU87QUFDZEEsY0FBQUEsQ0FBQyxDQUFDSyxjQUFGO0FBQ0FpZSxjQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0QsYUFMSDtBQUFBLG1DQU9FO0FBQUcsdUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGLGVBYUU7QUFDRSxnQkFBSSxFQUFDLEdBRFA7QUFFRSxxQkFBUyxFQUFHLElBQ1ZKLFFBQVEsSUFBSUEsUUFBUSxDQUFDL21CLElBQVQsQ0FBZXlvQixHQUFELElBQVNBLEdBQUcsQ0FBQ3JiLEVBQUosS0FBV3laLE9BQU8sQ0FBQ3paLEVBQTFDLENBQVosR0FDSSxRQURKLEdBRUksRUFDTCxHQU5IO0FBT0UsbUJBQU8sRUFBR3ZFLENBQUQsSUFBT2lmLGVBQWUsQ0FBQ2pmLENBQUQsQ0FQakM7QUFBQSxtQ0FTRTtBQUFHLHVCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBbUZELENBM0dEOztBQTZHQSxpRUFBZXVkLG9EQUFPLENBQUMsSUFBRCxFQUFPO0FBQUVFLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUEsV0FBV0EsK0RBQUFBO0FBQXhCLENBQVAsQ0FBUCxDQUEwQ21DLGVBQTFDLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBOztBQUtBLE1BQU0vQixZQUFZLEdBQUcsQ0FBQztBQUNwQnFDLEVBQUFBLElBRG9CO0FBRXBCQyxFQUFBQSxXQUZvQjtBQUdwQnBDLEVBQUFBLE9BSG9CO0FBSXBCcUMsRUFBQUEsS0FKb0I7QUFLcEJDLEVBQUFBLFNBTG9CO0FBTXBCN0MsRUFBQUEsU0FOb0I7QUFPcEJDLEVBQUFBLFdBUG9CO0FBUXBCd0MsRUFBQUE7QUFSb0IsQ0FBRCxLQVNmO0FBQ0osUUFBTTdULElBQUksR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixJQUFoQixFQUFzQixLQUF0QixDQUFiO0FBRUEsUUFBTWtVLElBQUksR0FBR3ZDLE9BQU8sSUFBSXFDLEtBQVgsSUFBb0JBLEtBQUssQ0FBQ2xwQixJQUFOLENBQVlvcEIsSUFBRCxJQUFVQSxJQUFJLENBQUNoYyxFQUFMLEtBQVl5WixPQUFPLENBQUN6WixFQUF6QyxDQUFqQztBQUNBLFFBQU0yWixRQUFRLEdBQ1pGLE9BQU8sSUFDUHNDLFNBREEsSUFFQUEsU0FBUyxDQUFDbnBCLElBQVYsQ0FBZ0IrbUIsUUFBRCxJQUFjQSxRQUFRLENBQUMzWixFQUFULEtBQWdCeVosT0FBTyxDQUFDelosRUFBckQsQ0FIRjtBQUlBLHNCQUNFLDhEQUFDLGtEQUFEO0FBQU8sUUFBSSxFQUFFNGIsSUFBYjtBQUFtQixVQUFNLEVBQUVDLFdBQTNCO0FBQUEsMkJBQ0UsOERBQUMsdURBQUQ7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxtQkFBZjtBQUFBLGlDQUNFLDhEQUFDLDBEQUFEO0FBQWUsNEJBQWdCLEVBQUMsT0FBaEM7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUMsMkJBQWY7QUFBQSxxQ0FDRSw4REFBQyx3REFBRDtBQUFhLGtCQUFFLEVBQUMsaUJBQWhCO0FBQUEsMEJBQ0dwQyxPQUFPLElBQ05BLE9BQU8sQ0FBQ3dDLE1BQVIsQ0FBZXZwQixHQUFmLENBQW1CLENBQUNvQixHQUFELEVBQU03RixDQUFOLGtCQUNqQiw4REFBQyxxREFBRDtBQUFrQiwwQkFBUSxFQUFHLE9BQU1BLENBQUUsRUFBckM7QUFBQSx5Q0FDRTtBQUFLLDZCQUFTLEVBQUMsbUJBQWY7QUFBQSwyQ0FDRTtBQUFLLHlCQUFHLEVBQUU2RixHQUFHLENBQUN6RCxHQUFkO0FBQW1CLHlCQUFHLEVBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFBZXBDLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBY0U7QUFBSyx1QkFBUyxFQUFDLGlCQUFmO0FBQUEscUNBQ0UsOERBQUMsZ0RBQUQ7QUFBSyxrQkFBRSxFQUFDLElBQVI7QUFBQSwwQkFDR3dyQixPQUFPLElBQ05BLE9BQU8sQ0FBQ3dDLE1BQVIsQ0FBZXZwQixHQUFmLENBQW1CLENBQUNvQixHQUFELEVBQU03RixDQUFOLGtCQUNqQiw4REFBQyxxREFBRDtBQUFVLG9CQUFFLEVBQUMsSUFBYjtBQUFBLHlDQUNFLDhEQUFDLHFEQUFEO0FBQ0Usc0JBQUUsRUFBQyxHQURMO0FBRUUsd0JBQUksRUFBQyxHQUZQO0FBR0UsMkJBQU8sRUFBR3dOLENBQUQsSUFBT0EsQ0FBQyxDQUFDSyxjQUFGLEVBSGxCO0FBSUUsNEJBQVEsRUFBRyxPQUFNN04sQ0FBRSxFQUpyQjtBQUFBLDRDQU1FO0FBQUsseUJBQUcsRUFBRTZGLEdBQUcsQ0FBQ3pELEdBQWQ7QUFBbUIseUJBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQU5GLEVBTWtDLEdBTmxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQUF1QnBDLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREY7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBbUNFO0FBQUssbUJBQVMsRUFBQyxtQkFBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxrQkFBZjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQyxxRUFBZjtBQUFBLHNDQUNFO0FBQUEsMkJBQ0csR0FESCxlQUVFO0FBQUcsc0JBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGLGVBR0U7QUFBRyxzQkFBSSxFQUFDLEdBQVI7QUFBQSw0QkFBYXdyQixPQUFPLElBQUlBLE9BQU8sQ0FBQ3VCO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBT0U7QUFDRSx5QkFBUyxFQUFDLHlCQURaO0FBRUUsdUJBQU8sRUFBRSxNQUFNYSxXQUFXO0FBRjVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBYUU7QUFBSSx1QkFBUyxFQUFDLCtCQUFkO0FBQUEsd0JBQ0dwQyxPQUFPLElBQUlBLE9BQU8sQ0FBQ2hSO0FBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBYkYsZUFnQkU7QUFBSyx1QkFBUyxFQUFDLDJCQUFmO0FBQUEsc0NBQ0U7QUFBQSxnQ0FBUXdTLE1BQU0sQ0FBQ3hCLE9BQU8sSUFBSUEsT0FBTyxDQUFDeUIsU0FBcEIsQ0FBTixDQUFxQ0MsT0FBckMsQ0FBNkMsQ0FBN0MsQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsRUFFRzFCLE9BQU8sSUFBSUEsT0FBTyxDQUFDMkIsS0FBbkIsaUJBQ0M7QUFBTSx5QkFBUyxFQUFDLFdBQWhCO0FBQUEsZ0NBQ0lILE1BQU0sQ0FBQ3hCLE9BQU8sQ0FBQzJCLEtBQVQsQ0FBTixDQUFzQkQsT0FBdEIsQ0FBOEIsQ0FBOUIsQ0FESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWhCRixlQXdCRTtBQUFLLHVCQUFTLEVBQUMsa0JBQWY7QUFBQSx5QkFDRzFCLE9BQU8sSUFBSUEsT0FBTyxDQUFDeUMsTUFBbkIsSUFBNkJ6QyxPQUFPLENBQUN5QyxNQUFSLENBQWUvdEIsTUFBZixHQUF3QixDQUFyRCxpQkFDQztBQUFLLHlCQUFTLEVBQUMsdUNBQWY7QUFBQSx3Q0FDRTtBQUFLLDJCQUFTLEVBQUMsY0FBZjtBQUFBLHlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQUlFO0FBQUksMkJBQVMsRUFBQyxzQkFBZDtBQUFBLDRCQUNHc3JCLE9BQU8sQ0FBQ3lDLE1BQVIsQ0FBZXhwQixHQUFmLENBQW9CeXBCLEtBQUQsaUJBQ2xCO0FBQUEsMkNBQ0U7QUFBRywwQkFBSSxFQUFDLEdBQVI7QUFBWSw2QkFBTyxFQUFHMWdCLENBQUQsSUFBT0EsQ0FBQyxDQUFDSyxjQUFGLEVBQTVCO0FBQUEsNkNBQ0U7QUFBTSxpQ0FBUyxFQUFFcWdCO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYscUJBQVNBLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZKLEVBa0JHMUMsT0FBTyxJQUFJQSxPQUFPLENBQUMzUixJQUFuQixpQkFDQztBQUFLLHlCQUFTLEVBQUMsc0NBQWY7QUFBQSx3Q0FDRTtBQUFLLDJCQUFTLEVBQUMsY0FBZjtBQUFBLHlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQUlFO0FBQUksMkJBQVMsRUFBQyxxQkFBZDtBQUFBLDRCQUNHQSxJQUFJLElBQ0hBLElBQUksQ0FBQ3BWLEdBQUwsQ0FBVW9WLElBQUQsaUJBQ1A7QUFFRSw2QkFBUyxFQUNQQSxJQUFJLENBQUM0QyxXQUFMLE9BQXVCK08sT0FBTyxDQUFDM1IsSUFBUixDQUFhNEMsV0FBYixFQUF2QixHQUNJLFFBREosR0FFSSxFQUxSO0FBQUEsMkNBUUU7QUFBRywwQkFBSSxFQUFDLEdBQVI7QUFBWSw2QkFBTyxFQUFHalAsQ0FBRCxJQUFPQSxDQUFDLENBQUNLLGNBQUYsRUFBNUI7QUFBQSxnQ0FDR2dNO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGLHFCQUNPQSxJQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREY7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFuQkosZUEwQ0U7QUFBSyx5QkFBUyxFQUFDLHNDQUFmO0FBQUEsdUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQTFDRixlQWtERTtBQUFLLHlCQUFTLEVBQUMsMkNBQWY7QUFBQSx1Q0FDRTtBQUFBLDBDQUNFO0FBQUksNkJBQVMsRUFBQyxpQkFBZDtBQUFBLDRDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLE9BQ3dCMlIsT0FBTyxJQUFJQSxPQUFPLENBQUN1QixLQUQzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsZUFJRTtBQUFBLDRDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLEVBQzZCLEdBRDdCLEVBRUd2QixPQUFPLElBQUlBLE9BQU8sQ0FBQzJDLFFBQVIsQ0FBaUIsQ0FBakIsRUFBb0J4UCxLQUFwQixDQUEwQixFQUExQixFQUE4QixDQUE5QixJQUFtQzZNLE9BQU8sQ0FBQ3paLEVBRnpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFKRixlQVFFO0FBQUEsNENBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVJGLGVBV0U7QUFBQSw0Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixFQUNzQixHQUR0QixlQUVFO0FBQU0sK0JBQVMsRUFBQyxVQUFoQjtBQUFBLGdDQUNHeVosT0FBTyxJQUFJQSxPQUFPLENBQUM0QyxLQUFuQixHQUEyQixVQUEzQixHQUF3QztBQUQzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWxERixlQXNFRTtBQUFLLHlCQUFTLEVBQUMsZ0RBQWY7QUFBQSx3Q0FDRTtBQUFLLDJCQUFTLEVBQUMsK0JBQWY7QUFBQSwwQ0FDRTtBQUFLLDZCQUFTLEVBQUMsa0JBQWY7QUFBQSwyQ0FDRTtBQUFLLCtCQUFTLEVBQUMsaUJBQWY7QUFBQSw4Q0FDRTtBQUFBLGtDQUFJTCxJQUFJLEdBQUdBLElBQUksQ0FBQ00sR0FBUixHQUFjO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREYsZUFFRTtBQUNFLGlDQUFTLEVBQUMsZUFEWjtBQUVFLCtCQUFPLEVBQUUsTUFBTTtBQUNiTiwwQkFBQUEsSUFBSSxJQUFJQSxJQUFJLENBQUNNLEdBQUwsS0FBYSxDQUFyQixJQUEwQlgsWUFBWSxDQUFDSyxJQUFELENBQXRDO0FBQ0QseUJBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBRkYsZUFVRTtBQUNFLGlDQUFTLEVBQUMsZUFEWjtBQUVFLCtCQUFPLEVBQUUsTUFBTTtBQUNiOUMsMEJBQUFBLFNBQVMsQ0FBQ08sT0FBRCxDQUFUO0FBQ0FWLDBCQUFBQSw4REFBQSxDQUFjLDJCQUFkO0FBQ0QseUJBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERixlQXVCRTtBQUNFLDZCQUFTLEVBQUcsR0FDVlksUUFBUSxHQUFHLFFBQUgsR0FBYyxFQUN2QixzQkFISDtBQUlFLHdCQUFJLEVBQUMsUUFKUDtBQUtFLDJCQUFPLEVBQUUsTUFBTTtBQUNiUixzQkFBQUEsV0FBVyxDQUFDTSxPQUFELENBQVg7QUFDQVYsc0JBQUFBLDhEQUFBLENBQWMsb0NBQWQ7QUFDRCxxQkFSSDtBQUFBLDJDQVVFO0FBQUcsK0JBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQXZCRixlQW1DRTtBQUFRLDZCQUFTLEVBQUMscUJBQWxCO0FBQXdDLHdCQUFJLEVBQUMsUUFBN0M7QUFBQSwyQ0FDRTtBQUFHLCtCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLEVBd0NHLENBQUNpRCxJQUFELGlCQUNDO0FBQ0UsMkJBQVMsRUFBQyxvQkFEWjtBQUVFLHlCQUFPLEVBQUUsTUFBTTtBQUNiOUMsb0JBQUFBLFNBQVMsQ0FBQ08sT0FBRCxDQUFUO0FBQ0FWLG9CQUFBQSw4REFBQSxDQUFjLDJCQUFkO0FBQ0QsbUJBTEg7QUFBQSx5Q0FPRTtBQUFRLDZCQUFTLEVBQUMsZUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQXpDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBdEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWdNRCxDQWpORDs7QUFtTkEsTUFBTXdELGVBQWUsR0FBSWhNLEtBQUQsS0FBWTtBQUNsQ3VMLEVBQUFBLEtBQUssRUFBRXZMLEtBQUssQ0FBQ3FKLE1BQU4sQ0FBYWtDLEtBRGM7QUFFbENDLEVBQUFBLFNBQVMsRUFBRXhMLEtBQUssQ0FBQ3FKLE1BQU4sQ0FBYUQ7QUFGVSxDQUFaLENBQXhCOztBQUtBLGlFQUFlWCxvREFBTyxDQUFDdUQsZUFBRCxFQUFrQjtBQUN0Q3JELEVBQUFBLFNBRHNDO0FBRXRDQyxFQUFBQSxXQUZzQztBQUd0Q3dDLEVBQUFBLFlBQVlBLGdFQUFBQTtBQUgwQixDQUFsQixDQUFQLENBSVpwQyxZQUpZLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoT0E7QUFDQTs7QUFFQSxNQUFNa0QsV0FBVyxHQUFHLENBQUM7QUFBRUMsRUFBQUEsYUFBRjtBQUFpQkMsRUFBQUE7QUFBakIsQ0FBRCxLQUFtQztBQUNyRCxRQUFNVCxNQUFNLEdBQUcsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixNQUFuQixFQUEyQixPQUEzQixFQUFvQyxLQUFwQyxFQUEyQyxNQUEzQyxDQUFmO0FBQ0EsUUFBTTtBQUFBLE9BQUN2RCxNQUFEO0FBQUEsT0FBU0Q7QUFBVCxNQUFzQnRSLCtDQUFRLENBQUMsRUFBRCxDQUFwQzs7QUFDQSxRQUFNd1YsU0FBUyxHQUFJOXZCLEtBQUQsSUFBVztBQUMzQjR2QixJQUFBQSxhQUFhLENBQUM1dkIsS0FBRCxDQUFiO0FBQ0E2dkIsSUFBQUEsVUFBVTtBQUNWSCxJQUFBQSwyREFBYSxDQUFDN0QsTUFBRCxFQUFTN3JCLEtBQVQsRUFBZ0I0ckIsU0FBaEIsQ0FBYjtBQUNELEdBSkQ7O0FBS0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFJLGVBQVMsRUFBQyxXQUFkO0FBQUEsZ0JBQ0d3RCxNQUFNLElBQ0xBLE1BQU0sQ0FBQ3hwQixHQUFQLENBQVl5cEIsS0FBRCxpQkFDVDtBQUFBLCtCQUNFO0FBQ0UsbUJBQVMsRUFBQywyQkFEWjtBQUVFLGlCQUFPLEVBQUUsTUFBTVMsU0FBUyxDQUFDVCxLQUFELENBRjFCO0FBQUEsa0NBSUU7QUFDRSxxQkFBUyxFQUFHLEdBQUVBLEtBQU0sSUFDbEJ4RCxNQUFNLENBQUN2aUIsUUFBUCxDQUFnQitsQixLQUFoQixJQUF5QixFQUF6QixHQUE4QixpQkFDL0I7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGLEVBUUssR0FSTCxFQVNHQSxLQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQVNBLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF1QkQsQ0EvQkQ7O0FBaUNBLGlFQUFlTSxXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1hLE1BQU0sR0FBRyxDQUFDO0FBQ2RQLEVBQUFBLFlBRGM7QUFFZHhLLEVBQUFBLE1BRmM7QUFHZHNLLEVBQUFBLGFBSGM7QUFJZEMsRUFBQUEsZ0JBSmM7QUFLZEcsRUFBQUEsWUFMYztBQU1kRCxFQUFBQSxhQU5jO0FBT2ROLEVBQUFBLGFBUGM7QUFRZEMsRUFBQUEsVUFSYztBQVNkTyxFQUFBQSxZQVRjO0FBVWRLLEVBQUFBO0FBVmMsQ0FBRCxLQVdUO0FBQ0osUUFBTXpWLElBQUksR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixJQUFoQixFQUFzQixLQUF0QixDQUFiO0FBQUEsUUFDRWtULEtBQUssR0FBRyxDQUNOLG9CQURNLENBRFY7QUFBQSxRQUlFb0IsUUFBUSxHQUFHLENBQ1gsd0NBRFcsRUFFWCx1QkFGVyxFQUdYLFlBSFcsRUFJWCxZQUpXLEVBS1gsYUFMVyxFQU1YLHFCQU5XLEVBT1gsdUJBUFcsRUFRWCxZQVJXLEVBU1gsVUFUVyxFQVVYLFNBVlcsRUFXWCxVQVhXLEVBWVgsaUJBWlcsRUFhWCxVQWJXLEVBY1gsbUJBZFcsRUFlWCxlQWZXLEVBZ0JYLGdCQWhCVyxFQWlCWCxTQWpCVyxFQWtCWCxVQWxCVyxFQW1CWCxRQW5CVyxFQW9CWCxhQXBCVyxFQXFCWCxlQXJCVyxFQXNCWCxTQXRCVyxFQXVCWCxzQkF2QlcsRUF3QlgsWUF4QlcsRUF5QlgsV0F6QlcsRUEwQlgsU0ExQlcsRUEyQlgsT0EzQlcsRUE0QlgsWUE1QlcsRUE2QlgsVUE3QlcsRUE4QlgsYUE5QlcsRUErQlgsV0EvQlcsRUFnQ1gsbUJBaENXLEVBaUNYLGFBakNXLEVBa0NYLFFBbENXLEVBbUNYLGFBbkNXLEVBb0NYLFNBcENXLEVBcUNYLFlBckNXLEVBc0NYLGFBdENXLEVBdUNYLE9BdkNXLEVBd0NYLFFBeENXLEVBeUNYLFVBekNXLEVBMENYLEtBMUNXLEVBMkNYLFlBM0NXLEVBNENYLGNBNUNXLEVBNkNYLG1CQTdDVyxFQThDWCxXQTlDVyxFQStDWCxNQS9DVyxFQWdEWCxXQWhEVyxFQWlEWCxRQWpEVyxDQUpiO0FBd0RBLHNCQUNFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUNFLGdCQUFNLEVBQUMsR0FEVDtBQUVFLG1CQUFTLEVBQUMsYUFGWjtBQUdFLGtCQUFRLEVBQUczZ0IsQ0FBRCxJQUFPQSxDQUFDLENBQUNLLGNBQUYsRUFIbkI7QUFBQSxrQ0FLRTtBQUNFLGdCQUFJLEVBQUMsTUFEUDtBQUVFLGlCQUFLLEVBQUV5VyxNQUZUO0FBR0Usb0JBQVEsRUFBRzlXLENBQUQsSUFBT3NoQixZQUFZLENBQUN0aEIsQ0FBQyxDQUFDek4sTUFBRixDQUFTbEIsS0FBVixDQUgvQjtBQUlFLHVCQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxGLGVBV0U7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBZ0NFLDhEQUFDLHNEQUFEO0FBQ0UsYUFBSyxFQUFDLFlBRFI7QUFFRSxXQUFHLEVBQUVzdkIsUUFGUDtBQUdFLGVBQU8sRUFBRVUsZ0JBSFg7QUFJRSxrQkFBVSxFQUFFSDtBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaENGLGVBMENFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFJLG1CQUFTLEVBQUMsc0JBQWQ7QUFBQSxvQkFDR1ksUUFBUSxJQUNQQSxRQUFRLENBQUM3cUIsR0FBVCxDQUNFLENBQUMrbUIsT0FBRCxFQUFVeHJCLENBQVYsS0FDRUEsQ0FBQyxHQUFHLENBQUosaUJBQ0U7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUMsY0FBZjtBQUFBLHFDQUNFLDhEQUFDLGtEQUFEO0FBQU0sb0JBQUksRUFBRyxTQUFRd3JCLE9BQU8sQ0FBQ3paLEVBQUcsRUFBaEM7QUFBQSx1Q0FDRTtBQUFLLHFCQUFHLEVBQUV5WixPQUFPLENBQUNvQixJQUFsQjtBQUF3QixxQkFBRyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQU1FO0FBQUssdUJBQVMsRUFBQyxrQkFBZjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyxpQkFBZjtBQUFBLHdDQUNFO0FBQUcsMkJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFFRTtBQUFHLDJCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGLGVBR0U7QUFBRywyQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFIRixlQUlFO0FBQUcsMkJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSkYsZUFLRTtBQUFHLDJCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQVFFO0FBQUEsdUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxzQkFBSSxFQUFHLFNBQVFwQixPQUFPLENBQUN6WixFQUFHLEVBQWhDO0FBQUEsNEJBQ0d5WixPQUFPLENBQUNoUjtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVJGLGVBYUU7QUFBSyx5QkFBUyxFQUFDLGdCQUFmO0FBQUEsdUNBQ0U7QUFBQSxrQ0FDSXdTLE1BQU0sQ0FBQ3hCLE9BQU8sQ0FBQ3lCLFNBQVQsQ0FBTixDQUEwQkMsT0FBMUIsQ0FBa0MsQ0FBbEMsQ0FESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFORjtBQUFBLGFBQVMxQixPQUFPLENBQUN6WixFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhOO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBMUNGLGVBK0VFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQUEsaUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLE9BQVg7QUFBQSxtQ0FDRTtBQUFLLGlCQUFHLEVBQUMsc0JBQVQ7QUFBZ0MsaUJBQUcsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQS9FRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUEyRkQsQ0EvSkQ7O0FBaUtBLE1BQU11YyxlQUFlLEdBQUloTSxLQUFELEtBQVk7QUFDbENnQyxFQUFBQSxNQUFNLEVBQUVoQyxLQUFLLENBQUM5aEIsTUFBTixDQUFhOGpCLE1BRGE7QUFFbENnTCxFQUFBQSxRQUFRLEVBQUVoTixLQUFLLENBQUNrSixPQUFOLENBQWM4RDtBQUZVLENBQVosQ0FBeEI7O0FBS0EsaUVBQWV2RSxvREFBTyxDQUFDdUQsZUFBRCxFQUFrQjtBQUN0Q1EsRUFBQUEsWUFEc0M7QUFFdENGLEVBQUFBLGFBRnNDO0FBR3RDQyxFQUFBQSxnQkFIc0M7QUFJdENHLEVBQUFBLFlBSnNDO0FBS3RDRCxFQUFBQSxhQUxzQztBQU10Q04sRUFBQUEsYUFOc0M7QUFPdENRLEVBQUFBLFlBQVlBLGdFQUFBQTtBQVAwQixDQUFsQixDQUFQLENBUVpJLE1BUlksQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TEEsTUFBTUgsZ0JBQWdCLEdBQUcsQ0FBQztBQUFFSyxFQUFBQSxLQUFGO0FBQVNDLEVBQUFBLEdBQVQ7QUFBY0MsRUFBQUEsT0FBZDtBQUF1QmYsRUFBQUE7QUFBdkIsQ0FBRCxLQUF5QztBQUNoRSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsWUFBZDtBQUFBLGdCQUE0QmE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUksZUFBUyxFQUFDLFdBQWQ7QUFBQSxnQkFDR0MsR0FBRyxJQUNGQSxHQUFHLENBQUMvcUIsR0FBSixDQUFRLENBQUNqQixDQUFELEVBQUl4RCxDQUFKLGtCQUNOO0FBQUEsK0JBQ0U7QUFBRyxtQkFBUyxFQUFDLFVBQWI7QUFBQSxrQ0FDRTtBQUNFLGdCQUFJLEVBQUMsVUFEUDtBQUVFLGNBQUUsRUFBRXdELENBRk47QUFHRSxnQkFBSSxFQUFFQSxDQUhSO0FBSUUsd0JBQVksRUFBQyxZQUpmO0FBS0UsbUJBQU8sRUFBR2dLLENBQUQsSUFBTztBQUNkaWlCLGNBQUFBLE9BQU8sQ0FBQ2ppQixDQUFDLENBQUN6TixNQUFGLENBQVN5YSxJQUFWLENBQVA7QUFDQWtVLGNBQUFBLFVBQVU7QUFDWDtBQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFVSyxHQVZMLGVBV0U7QUFBTyxtQkFBTyxFQUFFbHJCLENBQWhCO0FBQUEsc0JBQW9CQTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQVN4RCxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBeUJELENBMUJEOztBQTRCQSxpRUFBZWt2QixnQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBOztBQUVBLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUVGLEVBQUFBLFlBQUY7QUFBZ0JQLEVBQUFBO0FBQWhCLENBQUQsS0FBa0M7QUFDckQsUUFBTWdCLElBQUksR0FBRyxDQUNYLHdDQURXLEVBRVgsdUJBRlcsRUFHWCxZQUhXLEVBSVgsWUFKVyxFQUtYLGFBTFcsRUFNWCxxQkFOVyxFQU9YLHVCQVBXLEVBUVgsWUFSVyxFQVNYLFVBVFcsRUFVWCxTQVZXLEVBV1gsVUFYVyxFQVlYLGlCQVpXLEVBYVgsVUFiVyxFQWNYLG1CQWRXLEVBZVgsZUFmVyxFQWdCWCxnQkFoQlcsRUFpQlgsU0FqQlcsRUFrQlgsVUFsQlcsRUFtQlgsUUFuQlcsRUFvQlgsYUFwQlcsRUFxQlgsZUFyQlcsRUFzQlgsU0F0QlcsRUF1Qlgsc0JBdkJXLEVBd0JYLFlBeEJXLEVBeUJYLFdBekJXLEVBMEJYLFNBMUJXLEVBMkJYLE9BM0JXLEVBNEJYLFlBNUJXLEVBNkJYLFVBN0JXLEVBOEJYLGFBOUJXLEVBK0JYLFdBL0JXLEVBZ0NYLG1CQWhDVyxFQWlDWCxhQWpDVyxFQWtDWCxRQWxDVyxFQW1DWCxhQW5DVyxFQW9DWCxTQXBDVyxFQXFDWCxZQXJDVyxFQXNDWCxhQXRDVyxFQXVDWCxPQXZDVyxFQXdDWCxRQXhDVyxFQXlDWCxVQXpDVyxFQTBDWCxLQTFDVyxFQTJDWCxZQTNDVyxFQTRDWCxjQTVDVyxFQTZDWCxtQkE3Q1csRUE4Q1gsV0E5Q1csRUErQ1gsTUEvQ1csRUFnRFgsV0FoRFcsRUFpRFgsUUFqRFcsQ0FBYjtBQW1EQSxRQUFNO0FBQUEsT0FBQ2hGLE1BQUQ7QUFBQSxPQUFTRDtBQUFULE1BQXNCdFIsK0NBQVEsQ0FBQyxFQUFELENBQXBDOztBQUNBLFFBQU13VixTQUFTLEdBQUk5dkIsS0FBRCxJQUFXO0FBQzNCb3dCLElBQUFBLFlBQVksQ0FBQ3B3QixLQUFELENBQVo7QUFDQTZ2QixJQUFBQSxVQUFVO0FBQ1ZILElBQUFBLDJEQUFhLENBQUM3RCxNQUFELEVBQVM3ckIsS0FBVCxFQUFnQjRyQixTQUFoQixDQUFiO0FBQ0QsR0FKRDs7QUFLQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQSxnQkFDR2lGLElBQUksSUFDSEEsSUFBSSxDQUFDanJCLEdBQUwsQ0FBVWtyQixHQUFELGlCQUNQO0FBQUEsK0JBQ0U7QUFDRSxjQUFJLEVBQUMsR0FEUDtBQUVFLG1CQUFTLEVBQUcsbUJBQ1ZqRixNQUFNLENBQUN2aUIsUUFBUCxDQUFnQnduQixHQUFoQixJQUF1QixXQUF2QixHQUFxQyxFQUN0QyxFQUpIO0FBS0UsaUJBQU8sRUFBR25pQixDQUFELElBQU87QUFDZG1oQixZQUFBQSxTQUFTLENBQUNnQixHQUFELENBQVQ7QUFDQW5pQixZQUFBQSxDQUFDLENBQUNLLGNBQUY7QUFDRCxXQVJIO0FBQUEscUJBVUcsR0FWSCxFQVdHOGhCLEdBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBU0EsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXlCRCxDQW5GRDs7QUFxRkEsaUVBQWVSLFlBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLENBQUM7QUFBRUwsRUFBQUEsYUFBRjtBQUFpQkwsRUFBQUE7QUFBakIsQ0FBRCxLQUFtQztBQUNyRCxRQUFNO0FBQUEsT0FBQ3ZCLEtBQUQ7QUFBQSxPQUFRMkM7QUFBUixNQUFvQjNXLCtDQUFRLENBQUM7QUFBRXRhLElBQUFBLEtBQUssRUFBRTtBQUFFd0YsTUFBQUEsR0FBRyxFQUFFLENBQVA7QUFBVXlOLE1BQUFBLEdBQUcsRUFBRTtBQUFmO0FBQVQsR0FBRCxDQUFsQztBQUNBLFFBQU1pZSxNQUFNLEdBQUcsQ0FDYjtBQUFFMXJCLElBQUFBLEdBQUcsRUFBRSxHQUFQO0FBQVl5TixJQUFBQSxHQUFHLEVBQUU7QUFBakIsR0FEYSxFQUViO0FBQUV6TixJQUFBQSxHQUFHLEVBQUUsSUFBUDtBQUFheU4sSUFBQUEsR0FBRyxFQUFFO0FBQWxCLEdBRmEsRUFHYjtBQUFFek4sSUFBQUEsR0FBRyxFQUFFLEtBQVA7QUFBY3lOLElBQUFBLEdBQUcsRUFBRTtBQUFuQixHQUhhLEVBSWI7QUFBRXpOLElBQUFBLEdBQUcsRUFBRSxLQUFQO0FBQWN5TixJQUFBQSxHQUFHLEVBQUU7QUFBbkIsR0FKYSxFQUtiO0FBQUV6TixJQUFBQSxHQUFHLEVBQUU7QUFBUCxHQUxhLENBQWY7QUFRQSxzQkFDRSw4REFBQywyQ0FBRDtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLDBEQUFEO0FBQ0UsbUJBQVcsRUFBR3hGLEtBQUQsSUFBWSxFQUQzQjtBQUVFLGdCQUFRLEVBQUUsR0FGWjtBQUdFLGdCQUFRLEVBQUUsQ0FIWjtBQUlFLGFBQUssRUFBRXN1QixLQUFLLENBQUN0dUIsS0FKZjtBQUtFLGdCQUFRLEVBQUdBLEtBQUQsSUFBVztBQUNuQml4QixVQUFBQSxRQUFRLENBQUM7QUFBRWp4QixZQUFBQTtBQUFGLFdBQUQsQ0FBUjtBQUNBa3dCLFVBQUFBLGFBQWEsQ0FBQ2x3QixLQUFELENBQWI7QUFDQTZ2QixVQUFBQSxVQUFVO0FBQ1g7QUFUSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBYUU7QUFBTSxpQkFBUyxFQUFDLGVBQWhCO0FBQUEsd0JBQ0l2QixLQUFLLENBQUN0dUIsS0FBTixDQUFZd0YsR0FEaEIsVUFDeUI4b0IsS0FBSyxDQUFDdHVCLEtBQU4sQ0FBWWlULEdBRHJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUE4Q0QsQ0F4REQ7O0FBMERBLGlFQUFlc2QsV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTWEsV0FBVyxHQUFHLENBQUM7QUFBRUQsRUFBQUE7QUFBRixDQUFELEtBQW9CO0FBQ3RDcmdCLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkcWdCLElBQUFBLFVBQVU7QUFDWCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0EsUUFBTXBFLFFBQVEsR0FBR1osd0RBQVcsQ0FBRTFJLEtBQUQsSUFBV0EsS0FBSyxDQUFDcUosTUFBTixDQUFhQyxRQUF6QixDQUE1QjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBQyxNQUFiO0FBQUEsZ0NBQ0U7QUFDRSxtQkFBUyxFQUFHLG9CQUNWQSxRQUFRLENBQUMxckIsTUFBVCxLQUFvQixDQUFwQixHQUF3QixXQUF4QixHQUFzQyxXQUN2QztBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFNRTtBQUFNLG1CQUFTLEVBQUMsT0FBaEI7QUFBQSxvQkFDRzByQixRQUFRLElBQUlBLFFBQVEsQ0FBQzFyQixNQUFULElBQW1CLENBQS9CLElBQW9DMHJCLFFBQVEsQ0FBQzFyQixNQUFULEtBQW9CLENBQXhELEdBQ0ksSUFBRzByQixRQUFRLENBQUMxckIsTUFBTyxFQUR2QixHQUVHMHJCLFFBQVEsQ0FBQzFyQjtBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW1CRCxDQXhCRDs7QUEwQkEsaUVBQWU2cUIsb0RBQU8sQ0FBQyxJQUFELEVBQU87QUFBRWlGLEVBQUFBLFVBQVVBLDhEQUFBQTtBQUFaLENBQVAsQ0FBUCxDQUE4QkMsV0FBOUIsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNSyxNQUFNLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBLFFBQWI7QUFBdUJDLEVBQUFBO0FBQXZCLENBQUQsS0FBeUM7QUFDdEQsc0JBQ0U7QUFBQSw0QkFDRTtBQUNFLGVBQVMsRUFBRyxHQUNWLENBQUNGLFNBQUQsR0FDSSxpQ0FESixHQUVJLGtDQUNMLEVBTEg7QUFBQSw2QkFPRTtBQUNFLGlCQUFTLEVBQUVDLFFBQVEsR0FBRyxpQ0FBSCxHQUF1QyxFQUQ1RDtBQUVFLDJCQUFpQkEsUUFBUSxHQUFHLHVCQUFILEdBQTZCLEVBRnhEO0FBR0UsYUFBSyxFQUFFO0FBQ0wvcEIsVUFBQUEsZUFBZSxFQUFFK3BCLFFBQVEsR0FBRyw4QkFBSCxHQUFvQztBQUR4RCxTQUhUO0FBQUEsK0JBT0U7QUFBSyxtQkFBUyxFQUFHLEdBQUVELFNBQVMsR0FBRyxXQUFILEdBQWlCLGlCQUFrQixFQUEvRDtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxLQUFmO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDLDZCQUFmO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFDLHFCQUFmO0FBQUEsd0NBQ0U7QUFBSywyQkFBUyxFQUFDLGFBQWY7QUFBQSx5Q0FDRSw4REFBQyxrREFBRDtBQUFNLHdCQUFJLEVBQUMsR0FBWDtBQUFBLDJDQUNFO0FBQUEsNkNBQ0UsOERBQUMsbURBQUQ7QUFBTywyQkFBRyxFQUFFRixvRUFBWjtBQUFrQiwyQkFBRyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBeUJFO0FBQUssdUJBQVMsRUFBQyxpREFBZjtBQUFBLHFDQUNFO0FBQUsseUJBQVMsRUFBQywyQkFBZjtBQUFBLHdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLGVBRUU7QUFBSSwyQkFBUyxFQUFDLGFBQWQ7QUFBQSwwQ0FDRTtBQUFBLDJDQUNFO0FBQUcsMEJBQUksRUFBQyxHQUFSO0FBQVksNkJBQU8sRUFBRzdpQixDQUFELElBQU9BLENBQUMsQ0FBQ0ssY0FBRixFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsZUFNRTtBQUFBLDJDQUNFO0FBQUcsMEJBQUksRUFBQyxHQUFSO0FBQVksNkJBQU8sRUFBR0wsQ0FBRCxJQUFPQSxDQUFDLENBQUNLLGNBQUYsRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQU5GLGVBV0U7QUFBQSwyQ0FDRTtBQUFHLDBCQUFJLEVBQUMsR0FBUjtBQUFZLDZCQUFPLEVBQUdMLENBQUQsSUFBT0EsQ0FBQyxDQUFDSyxjQUFGLEVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF6QkYsZUErQ0U7QUFBSyx1QkFBUyxFQUFDLGlEQUFmO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFDLDJCQUFmO0FBQUEsd0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFFRTtBQUFJLDJCQUFTLEVBQUMsYUFBZDtBQUFBLDBDQUNFO0FBQUEsMkNBQ0U7QUFBRywwQkFBSSxFQUFDLEdBQVI7QUFBWSw2QkFBTyxFQUFHTCxDQUFELElBQU9BLENBQUMsQ0FBQ0ssY0FBRixFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsZUFNRTtBQUFBLDJDQUNFO0FBQUcsMEJBQUksRUFBQyxHQUFSO0FBQVksNkJBQU8sRUFBR0wsQ0FBRCxJQUFPQSxDQUFDLENBQUNLLGNBQUYsRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQU5GLGVBV0U7QUFBQSwyQ0FDRTtBQUFHLDBCQUFJLEVBQUMsR0FBUjtBQUFZLDZCQUFPLEVBQUdMLENBQUQsSUFBT0EsQ0FBQyxDQUFDSyxjQUFGLEVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFYRixlQWdCRTtBQUFBLDJDQUNFO0FBQUcsMEJBQUksRUFBQyxHQUFSO0FBQVksNkJBQU8sRUFBR0wsQ0FBRCxJQUFPQSxDQUFDLENBQUNLLGNBQUYsRUFBNUI7QUFBQSxpQ0FDRyxHQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQS9DRixlQXFGRTtBQUFLLHVCQUFTLEVBQUMsNEJBQWY7QUFBQSxxQ0FDRTtBQUFLLHlCQUFTLEVBQUMscUJBQWY7QUFBQSx3Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQUVFO0FBQUksMkJBQVMsRUFBQyxhQUFkO0FBQUEsMENBQ0U7QUFBQSwyQ0FDRTtBQUFHLDBCQUFJLEVBQUMsR0FBUjtBQUFZLDZCQUFPLEVBQUdMLENBQUQsSUFBT0EsQ0FBQyxDQUFDSyxjQUFGLEVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERixlQU1FO0FBQUEsMkNBQ0U7QUFBRywwQkFBSSxFQUFDLEdBQVI7QUFBWSw2QkFBTyxFQUFHTCxDQUFELElBQU9BLENBQUMsQ0FBQ0ssY0FBRixFQUE1QjtBQUFBLGlDQUNHLEdBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFORixlQVlFO0FBQUEsMkNBQ0U7QUFBRywwQkFBSSxFQUFDLEdBQVI7QUFBWSw2QkFBTyxFQUFHTCxDQUFELElBQU9BLENBQUMsQ0FBQ0ssY0FBRixFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBWkYsZUFpQkU7QUFBQSwyQ0FDRTtBQUFHLDBCQUFJLEVBQUMsR0FBUjtBQUFZLDZCQUFPLEVBQUdMLENBQUQsSUFBT0EsQ0FBQyxDQUFDSyxjQUFGLEVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBckZGLGVBMkhFO0FBQUssdUJBQVMsRUFBQyw0QkFBZjtBQUFBLHFDQUNFO0FBQUsseUJBQVMsRUFBQyxxQkFBZjtBQUFBLHVDQUNFO0FBQUssMkJBQVMsRUFBQyxlQUFmO0FBQUEseUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSx3QkFBSSxFQUFDLE9BQVg7QUFBQSwyQ0FDRTtBQUFBLDZDQUNFLDhEQUFDLG1EQUFEO0FBQU8sMkJBQUcsRUFBRXNpQixzRUFBWjtBQUFvQiwyQkFBRyxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkEzSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBMEpFO0FBQUssZUFBUyxFQUFDLHdCQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFHLEdBQUVLLFFBQVEsR0FBRyxFQUFILEdBQVEsa0JBQW1CLGNBQXREO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxvQ0FDRTtBQUNFLHVCQUFTLEVBQUcsR0FDVkMsVUFBVSxHQUFHLFdBQUgsR0FBaUIsNEJBQzVCLEVBSEg7QUFBQSxxQ0FLRTtBQUNFLHlCQUFTLEVBQUcsMEJBQ1ZBLFVBQVUsR0FBRyxFQUFILEdBQVEsY0FDbkIsRUFISDtBQUFBLHVDQUtFO0FBQUEsZ0RBQ2UsSUFBSWhmLElBQUosR0FBV2lmLFdBQVgsRUFEZixFQUN5QyxHQUR6QyxlQUVFO0FBQUcsd0JBQUksRUFBQyxHQUFSO0FBQVksMkJBQU8sRUFBR2xqQixDQUFELElBQU9BLENBQUMsQ0FBQ0ssY0FBRixFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQW9CRyxDQUFDNGlCLFVBQUQsaUJBQ0M7QUFBSyx1QkFBUyxFQUFDLDRCQUFmO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFDLHdDQUFmO0FBQUEsd0NBQ0U7QUFBRyxzQkFBSSxFQUFDLEdBQVI7QUFBWSx5QkFBTyxFQUFHampCLENBQUQsSUFBT0EsQ0FBQyxDQUFDSyxjQUFGLEVBQTVCO0FBQUEseUNBQ0U7QUFBRyw2QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFJRTtBQUFHLHNCQUFJLEVBQUMsR0FBUjtBQUFZLHlCQUFPLEVBQUdMLENBQUQsSUFBT0EsQ0FBQyxDQUFDSyxjQUFGLEVBQTVCO0FBQUEseUNBQ0U7QUFBRyw2QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSkYsZUFVRTtBQUFHLHNCQUFJLEVBQUMsR0FBUjtBQUFZLHlCQUFPLEVBQUdMLENBQUQsSUFBT0EsQ0FBQyxDQUFDSyxjQUFGLEVBQTVCO0FBQUEseUNBQ0U7QUFBRyw2QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTZNRCxDQTlNRDs7QUFnTkEsaUVBQWV5aUIsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNVyxNQUFNLEdBQUcsQ0FBQztBQUNkQyxFQUFBQSxNQURjO0FBRWRYLEVBQUFBLFNBRmM7QUFHZFksRUFBQUEsV0FIYztBQUlkQyxFQUFBQSxTQUpjO0FBS2RDLEVBQUFBO0FBTGMsQ0FBRCxLQU1UO0FBQ0oxaEIsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2R1aEIsSUFBQUEsTUFBTSxJQUFJNWYsTUFBTSxDQUFDbVQsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0M5VyxnREFBbEMsQ0FBVjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxzQkFDRTtBQUNFLGFBQVMsRUFBRyxHQUNWd2pCLFdBQVcsR0FDTixzQkFDQ0UscUJBQXFCLEdBQUdBLHFCQUFILEdBQTJCLEVBQ2pELEVBSE0sR0FJUCxFQUNMLEVBUEg7QUFBQSwyQkFTRTtBQUNFLGVBQVMsRUFBQyxvQkFEWjtBQUVFLFFBQUUsRUFBRyxHQUFFSCxNQUFNLEdBQUcsZUFBSCxHQUFxQixFQUFHLEVBRnZDO0FBQUEsNkJBSUU7QUFBSyxpQkFBUyxFQUFHLEdBQUVYLFNBQVMsR0FBRyxXQUFILEdBQWlCLGlCQUFrQixFQUEvRDtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyx3QkFBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxxRUFBZjtBQUFBLG1DQUNFLDhEQUFDLHFEQUFEO0FBQVUsdUJBQVMsRUFBRWE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRTtBQUFLLHFCQUFTLEVBQUMsb0RBQWY7QUFBQSxtQ0FDRSw4REFBQywyREFBRDtBQUFnQix1QkFBUyxFQUFFQTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRixlQU9FO0FBQUsscUJBQVMsRUFBQyxnREFBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxzQkFBZjtBQUFBLHFDQUNFO0FBQUEsd0NBQ0UsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQVNFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEYsZUFzQkU7QUFBSyxxQkFBUyxFQUFDLGtCQUFmO0FBQUEsbUNBQ0UsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBNkNELENBdkREOztBQXlEQSxpRUFBZUgsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNTSxPQUFPLEdBQUcsTUFBTTtBQUNwQixzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLGtDQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsd0JBQWY7QUFBQSxrQ0FJRTtBQUFLLHFCQUFTLEVBQUMsa0NBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsK0JBQWY7QUFBQSxxQ0FDRSw4REFBQyxrREFBRDtBQUFNLG9CQUFJLEVBQUMsT0FBWDtBQUFBLHVDQUNFO0FBQUEsMENBQ0U7QUFBSyx1QkFBRyxFQUFDLG1CQUFUO0FBQTZCLHVCQUFHLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkYsZUFhRTtBQUFLLHFCQUFTLEVBQUMsdUNBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMscUNBQWY7QUFBQSxxQ0FDRTtBQUFBLHdDQUNFLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFFRTtBQUFJLDJCQUFTLEVBQUMsV0FBZDtBQUFBLHlDQUNFLDhEQUFDLGtEQUFEO0FBQU0sd0JBQUksRUFBQyxRQUFYO0FBQUEsMkNBQ0U7QUFBQSw2Q0FDRTtBQUFHLGlDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGLGVBU0UsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFiRixlQTRCRTtBQUFLLHFCQUFTLEVBQUMsa0JBQWY7QUFBQSxtQ0FDRSw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFxQ0U7QUFDRSxlQUFTLEVBQUMsWUFEWjtBQUVFLHlCQUFnQix1QkFGbEI7QUFHRSxXQUFLLEVBQUU7QUFBRTlxQixRQUFBQSxlQUFlLEVBQUU7QUFBbkI7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTZDRCxDQTlDRDs7QUFnREEsaUVBQWU4cUIsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRSxNQUFNLEdBQUcsQ0FBQztBQUNkdGlCLEVBQUFBLFFBRGM7QUFFZCtoQixFQUFBQSxNQUZjO0FBR2RYLEVBQUFBLFNBSGM7QUFJZEMsRUFBQUEsUUFKYztBQUtkVyxFQUFBQSxXQUxjO0FBTWRFLEVBQUFBLHFCQU5jO0FBT2RLLEVBQUFBLE9BUGM7QUFRZGpCLEVBQUFBLFVBUmM7QUFTZFcsRUFBQUEsU0FUYztBQVVkaEcsRUFBQUEsV0FWYztBQVdkNEUsRUFBQUE7QUFYYyxDQUFELEtBWVQ7QUFDSnJnQixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZHliLElBQUFBLFdBQVc7QUFDWDRFLElBQUFBLFVBQVU7QUFDWCxHQUhRLEVBR04sRUFITSxDQUFUO0FBSUEsc0JBQ0UsOERBQUMsMkNBQUQ7QUFBQSxlQUNHMEIsT0FBTyxnQkFDTiw4REFBQyw2Q0FBRDtBQUFTLGVBQVMsRUFBRU47QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETSxnQkFHTiw4REFBQyw0Q0FBRDtBQUNFLFlBQU0sRUFBRUYsTUFEVjtBQUVFLGVBQVMsRUFBRVgsU0FGYjtBQUdFLGlCQUFXLEVBQUVZLFdBSGY7QUFJRSwyQkFBcUIsRUFBRUUscUJBSnpCO0FBS0UsZUFBUyxFQUFFRDtBQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosZUFZRSw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBYUUsOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRixFQWVHamlCLFFBZkgsZUFnQkUsOERBQUMsNENBQUQ7QUFDRSxlQUFTLEVBQUVvaEIsU0FEYjtBQUVFLGNBQVEsRUFBRUMsUUFGWjtBQUdFLGdCQUFVLEVBQUVDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF5QkQsQ0ExQ0Q7O0FBNENBLGlFQUFlMUYsb0RBQU8sQ0FBQyxJQUFELEVBQU87QUFBRUssRUFBQUEsV0FBRjtBQUFlNEUsRUFBQUEsVUFBVUEsOERBQUFBO0FBQXpCLENBQVAsQ0FBUCxDQUEyQ3lCLE1BQTNDLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUcsU0FBUyxHQUFHLENBQUM7QUFBRUMsRUFBQUEsV0FBRjtBQUFlbkgsRUFBQUEsTUFBZjtBQUF1Qm9ILEVBQUFBLFVBQXZCO0FBQW1DL2YsRUFBQUE7QUFBbkMsQ0FBRCxLQUE2QztBQUM3RHBDLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkZ2lCLElBQUFBLHVEQUFTO0FBQ1YsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBLHNCQUNFO0FBQ0UsYUFBUyxFQUFDLGlCQURaO0FBRUUsdUJBQWdCLHdCQUZsQjtBQUFBLDJCQUlFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLDZCQUFmO0FBQUEsdUJBQ0dHLFVBQVUsaUJBQ1Q7QUFDRSx1QkFBUyxFQUFDLDZDQURaO0FBRUUsNkJBQVk7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKLGVBUUU7QUFBSSx1QkFBUyxFQUFFQSxVQUFVLEdBQUcsTUFBSCxHQUFZLEVBQXJDO0FBQUEsd0JBQTBDRDtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVJGLEVBU0dDLFVBQVUsaUJBQ1Q7QUFBRyx1QkFBUyxFQUFDLE9BQWI7QUFBQSx1SEFDeUU7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEekUsc0JBRUcvZixFQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFWSixlQWVFO0FBQUksdUJBQVMsRUFBQyxpQkFBZDtBQUFBLHNDQUNFO0FBQUEsdUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxzQkFBSSxFQUFDLEdBQVg7QUFBQSx5Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBTUU7QUFBQSx1Q0FDRTtBQUFBLDRCQUFPMlk7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBdUNELENBM0NEOztBQTZDQSxpRUFBZWtILFNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU10SCxJQUFJLEdBQUcsQ0FBQztBQUNaZ0YsRUFBQUEsUUFEWTtBQUVaNEMsRUFBQUEsV0FGWTtBQUdaSSxFQUFBQSxHQUhZO0FBSVpDLEVBQUFBLE1BSlk7QUFLWkMsRUFBQUEsWUFMWTtBQU1aQyxFQUFBQTtBQU5ZLENBQUQsS0FPUDtBQUNKLFFBQU07QUFBQSxPQUFDL0gsTUFBRDtBQUFBLE9BQVNEO0FBQVQsTUFBc0J0UiwrQ0FBUSxDQUFDLENBQUQsQ0FBcEM7QUFDQSxNQUFJN1YsSUFBSSxHQUFHLENBQVg7QUFDQXFNLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkdWlCLElBQUFBLFdBQVc7QUFDWixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0UsOERBQUMsNkNBQUQ7QUFBUSxZQUFRLE1BQWhCO0FBQWlCLGFBQVMsTUFBMUI7QUFBMkIsY0FBVSxNQUFyQztBQUFzQyxlQUFXLE1BQWpEO0FBQ0EsYUFBUyxNQURUO0FBRUEseUJBQXFCLEVBQUUsc0JBRnZCO0FBQUEsa0NBR0U7QUFBQSw4QkFDRSw4REFBQyxnREFBRDtBQUFXLGNBQU0sRUFBQyxhQUFsQjtBQUFnQyxtQkFBVyxFQUFDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFTLGlCQUFTLEVBQUMseUJBQW5CO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBLHVCQUNHTyxXQUFXLGlCQUFJLDhEQUFDLHNFQUFEO0FBQVEsd0JBQVUsRUFBRSxNQUFNaEksU0FBUyxDQUFDLENBQUQ7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEbEIsZUFFRTtBQUFLLHVCQUFTLEVBQUMsbUJBQWY7QUFBQSxzQ0FDRTtBQUFLLHlCQUFTLEVBQUMsbUJBQWY7QUFBQSx1Q0FDRTtBQUFLLHFCQUFHLEVBQUU4SCxNQUFWO0FBQWtCLHFCQUFHLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFLRSw4REFBQyx5REFBRDtBQUNFLGdDQUFnQixFQUFFQyxZQUFZLEdBQUdBLFlBQUgsR0FBa0IsTUFEbEQ7QUFBQSx3Q0FHRTtBQUFLLDJCQUFTLEVBQUMsS0FBZjtBQUFBLDBDQUNFO0FBQUssNkJBQVMsRUFBQyw0QkFBZjtBQUFBLDJDQUNFO0FBQUssK0JBQVMsRUFBQyx1QkFBZjtBQUFBLDZDQUVFO0FBQUEsa0NBQUlKLHlEQUFVLENBQUMxSCxNQUFELEVBQVNwbkIsSUFBVCxFQUFlZ3NCLFFBQWY7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsZUFPRTtBQUFLLDZCQUFTLEVBQUMsNEJBQWY7QUFBQSwyQ0FDRTtBQUFLLCtCQUFTLEVBQUMsa0JBQWY7QUFBQSw2Q0FDRSw4REFBQyxnREFBRDtBQUNFLDBCQUFFLEVBQUMsSUFETDtBQUVFLGlDQUFTLEVBQUMsaUJBRlo7QUFHRSwwQkFBRSxFQUFDLE9BSEw7QUFJRSw0QkFBSSxFQUFDLFNBSlA7QUFBQSxnREFNRSw4REFBQyxxREFBRDtBQUFVLDRCQUFFLEVBQUMsSUFBYjtBQUFBLGlEQUNFLDhEQUFDLHFEQUFEO0FBQ0UsOEJBQUUsRUFBQyxHQURMO0FBRUUsZ0NBQUksRUFBQyxHQUZQO0FBR0UsbUNBQU8sRUFBRzloQixDQUFELElBQU9BLENBQUMsQ0FBQ0ssY0FBRixFQUhsQjtBQUlFLG9DQUFRLEVBQUMsTUFKWDtBQUFBLG9EQU1FO0FBQUcsdUNBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBTkYsRUFNbUMsR0FObkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FORixlQWdCRSw4REFBQyxxREFBRDtBQUFVLDRCQUFFLEVBQUMsSUFBYjtBQUFBLGlEQUNFLDhEQUFDLHFEQUFEO0FBQ0UsOEJBQUUsRUFBQyxHQURMO0FBRUUsZ0NBQUksRUFBQyxHQUZQO0FBR0UsbUNBQU8sRUFBR0wsQ0FBRCxJQUFPQSxDQUFDLENBQUNLLGNBQUYsRUFIbEI7QUFJRSxvQ0FBUSxFQUFDLE1BSlg7QUFBQSxtREFNRTtBQUFHLHVDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFIRixlQTJDRSw4REFBQyx1REFBRDtBQUFBLDBDQUNFLDhEQUFDLG9EQUFEO0FBQVMsNEJBQVEsRUFBQyxNQUFsQjtBQUFBLDJDQUNFO0FBQUssK0JBQVMsRUFBQyxLQUFmO0FBQUEsZ0NBQ0d5aEIsUUFBUSxJQUFJQSxRQUFRLENBQUNwdkIsTUFBVCxHQUFrQixDQUE5QixHQUNDb3ZCLFFBQVEsQ0FBQzdxQixHQUFULENBQWEsQ0FBQyttQixPQUFELEVBQVV4ckIsQ0FBVixrQkFDWDtBQUNFLGlDQUFTLEVBQUcsR0FBRXN5QixHQUFJLElBQUdELHFEQUFNLENBQUMzSCxNQUFELEVBQVMxcUIsQ0FBVCxFQUFZc0QsSUFBWixDQUFrQixFQUQvQztBQUFBLCtDQUlFLDhEQUFDLGdFQUFEO0FBQ0UseUNBQWUsRUFBRSxJQURuQjtBQUVFLGlDQUFPLEVBQUVrb0I7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkYseUJBRU9BLE9BQU8sQ0FBQ3paLEVBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERixDQURELGdCQWFDO0FBQUksaUNBQVMsRUFBQyxnQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLGVBc0JFLDhEQUFDLG9EQUFEO0FBQVMsNEJBQVEsRUFBQyxNQUFsQjtBQUFBLDhCQUNHdWQsUUFBUSxJQUNQQSxRQUFRLENBQUM3cUIsR0FBVCxDQUFhLENBQUMrbUIsT0FBRCxFQUFVeHJCLENBQVYsa0JBQ1g7QUFBYSwrQkFBUyxFQUFHLEdBQUVxeUIscURBQU0sQ0FBQzNILE1BQUQsRUFBUzFxQixDQUFULEVBQVlzRCxJQUFaLENBQWtCLEVBQW5EO0FBQUEsNkNBQ0UsOERBQUMsd0VBQUQ7QUFBaUIsK0JBQU8sRUFBRWtvQixPQUExQjtBQUFtQyw0QkFBSSxFQUFFO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix1QkFBVXhyQixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREY7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBM0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFMRixlQWlGRSw4REFBQyw0REFBRDtBQUNFLHNCQUFNLEVBQUUwcUIsTUFEVjtBQUVFLHlCQUFTLEVBQUVELFNBRmI7QUFHRSxvQkFBSSxFQUFFbm5CLElBSFI7QUFJRSxzQkFBTSxFQUFFZ3NCLFFBQVEsSUFBSUEsUUFBUSxDQUFDcHZCO0FBSi9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBakZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixFQTJGRyxDQUFDdXlCLFdBQUQsaUJBQWdCLDhEQUFDLHNFQUFEO0FBQVEsd0JBQVUsRUFBRSxNQUFNaEksU0FBUyxDQUFDLENBQUQ7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkEzRm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTBHRCxDQXhIRDs7QUEwSEEsTUFBTTZELGVBQWUsR0FBSWhNLEtBQUQsS0FBWTtBQUNsQ2dOLEVBQUFBLFFBQVEsRUFBRTZDLHdFQUFrQixDQUFDN1AsS0FBSyxDQUFDa0osT0FBTixDQUFjOEQsUUFBZixFQUF5QmhOLEtBQUssQ0FBQzloQixNQUEvQjtBQURNLENBQVosQ0FBeEI7O0FBSUEsaUVBQWV1cUIsb0RBQU8sQ0FBQ3VELGVBQUQsRUFBa0I7QUFBRTRELEVBQUFBLFdBQVdBLGdFQUFBQTtBQUFiLENBQWxCLENBQVAsQ0FBMEM1SCxJQUExQyxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNa0gsWUFBWSxHQUFHLENBQUM7QUFBRXBHLEVBQUFBO0FBQUYsQ0FBRCxLQUFxQjtBQUN4Q3piLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkeWIsSUFBQUEsV0FBVztBQUNaLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxRQUFNTSxRQUFRLEdBQUdWLHdEQUFXLENBQUUxSSxLQUFELElBQVdBLEtBQUssQ0FBQ3FKLE1BQU4sQ0FBYUQsUUFBekIsQ0FBNUI7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLFdBQVg7QUFBQSw2QkFDRTtBQUFHLGlCQUFTLEVBQUMsTUFBYjtBQUFBLGdDQUNFO0FBQ0UsbUJBQVMsRUFBRyxpQkFDVkEsUUFBUSxDQUFDeHJCLE1BQVQsS0FBb0IsQ0FBcEIsR0FBd0IsV0FBeEIsR0FBc0MsV0FDdkM7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBTUU7QUFBTSxtQkFBUyxFQUFDLE9BQWhCO0FBQUEsb0JBQ0d3ckIsUUFBUSxJQUFJQSxRQUFRLENBQUN4ckIsTUFBVCxJQUFtQixDQUEvQixJQUFvQ3dyQixRQUFRLENBQUN4ckIsTUFBVCxLQUFvQixDQUF4RCxHQUNJLElBQUd3ckIsUUFBUSxDQUFDeHJCLE1BQU8sRUFEdkIsR0FFR3dyQixRQUFRLENBQUN4ckI7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFtQkQsQ0F4QkQ7O0FBMEJBLGlFQUFlNnFCLG9EQUFPLENBQUMsSUFBRCxFQUFPO0FBQUVLLEVBQUFBLFdBQVdBLCtEQUFBQTtBQUFiLENBQVAsQ0FBUCxDQUErQm9HLFlBQS9CLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7Q0FFQTtBQUNBOztBQUVBLE1BQU1aLFFBQVEsR0FBRyxDQUFDO0FBQUVRLEVBQUFBO0FBQUYsQ0FBRCxLQUFtQjtBQUNsQyxRQUFNO0FBQUEsT0FBQ3NCLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCeFosK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQ0EsTUFBSWdWLFFBQVEsR0FBRyxDQUNiLHdCQURhLEVBRWIsd0JBRmEsRUFHYixhQUhhLEVBSWIsWUFKYSxFQUtiLGNBTGEsQ0FBZjtBQU9BLHNCQUNFLDhEQUFDLDJDQUFEO0FBQUEsMkJBV0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDRTtBQUFBLGlDQUNFO0FBQ0UsZUFBRyxFQUNEaUQsU0FBUyxHQUFHLHdCQUFILEdBQThCLHdCQUYzQztBQUlFLGVBQUcsRUFBQyxNQUpOO0FBS0UsaUJBQUssRUFBRTtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUEyQ0QsQ0FwREQ7O0FBc0RBLGlFQUFlUixRQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REE7O0FBQ0EsTUFBTWdDLGFBQWEsR0FBRyxDQUFDO0FBQUV4QixFQUFBQTtBQUFGLENBQUQsS0FBbUI7QUFDdkMsc0JBQ0U7QUFBSyxhQUFTLEVBQUcseUJBQXdCQSxTQUFTLEdBQUcsWUFBSCxHQUFrQixFQUFHLEVBQXZFO0FBQUEsMkJBQ0U7QUFBSyxRQUFFLEVBQUMsYUFBUjtBQUFBLDZCQUNFO0FBQUEsZ0NBQ0U7QUFBQSxpQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBLG1DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFpQ0U7QUFBSSxtQkFBUyxFQUFDLFdBQWQ7QUFBQSxpQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakNGLGVBZ0pFO0FBQUEsaUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLFFBQVg7QUFBb0IsbUJBQU8sRUFBRzVqQixDQUFELElBQU9BLENBQUMsQ0FBQ0ssY0FBRixFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaEpGLGVBa0xFO0FBQUEsaUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWxMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBNExELENBN0xEOztBQStMQSxpRUFBZStrQixhQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hNQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxjQUFjLEdBQUcsTUFBTTtBQUMzQixRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0I1WiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7QUFDQSxzQkFDRSw4REFBQywyQ0FBRDtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQW9DLGFBQU8sRUFBRSxNQUFNNFosU0FBUyxDQUFDLElBQUQsQ0FBNUQ7QUFBQSw4QkFDRTtBQUFNLGlCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU0saUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBTSxpQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUU7QUFBSyxlQUFTLEVBQUcsY0FBYUQsTUFBTSxHQUFHLFdBQUgsR0FBaUIsRUFBRyxFQUF4RDtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQTRCLGVBQU8sRUFBRSxNQUFNQyxTQUFTLENBQUMsS0FBRCxDQUFwRDtBQUFBLCtCQUNFO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBTUU7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0UsOERBQUMsbURBQUQ7QUFBTyxlQUFHLEVBQUUxQyxvRUFBWjtBQUFrQixlQUFHLEVBQUMsRUFBdEI7QUFBeUIsaUJBQUssRUFBRTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFXRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMscUJBQWY7QUFBQSxpQ0FDRTtBQUFLLGNBQUUsRUFBQyxlQUFSO0FBQXdCLGlCQUFLLEVBQUU7QUFBRXJtQixjQUFBQSxPQUFPLEVBQUU7QUFBWCxhQUEvQjtBQUFBLG1DQUNFO0FBQUEsc0NBQ0U7QUFBQSx3Q0FDRSw4REFBQyxrREFBRDtBQUFNLHNCQUFJLEVBQUMsR0FBWDtBQUFBLHlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQUlFO0FBQUksMkJBQVMsRUFBQyxTQUFkO0FBQUEsMENBQ0U7QUFBQSwyQ0FDRSw4REFBQyxrREFBRDtBQUFNLDBCQUFJLEVBQUMsR0FBWDtBQUFBLDZDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsZUFNRTtBQUFBLDJDQUNFLDhEQUFDLGtEQUFEO0FBQU0sMEJBQUksRUFBQyxVQUFYO0FBQUEsNkNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFORixlQVdFO0FBQUEsMkNBQ0UsOERBQUMsa0RBQUQ7QUFBTSwwQkFBSSxFQUFDLFVBQVg7QUFBQSw2Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVhGLGVBZ0JFO0FBQUEsMkNBQ0UsOERBQUMsa0RBQUQ7QUFBTSwwQkFBSSxFQUFDLFVBQVg7QUFBQSw2Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWhCRixlQXFCRTtBQUFBLDJDQUNFLDhEQUFDLGtEQUFEO0FBQU0sMEJBQUksRUFBQyxVQUFYO0FBQUEsNkNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQWlDRTtBQUFJLHlCQUFTLEVBQUMsV0FBZDtBQUFBLHdDQUNFLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLGVBRUU7QUFBSSwyQkFBUyxFQUFDLFVBQWQ7QUFBQSwwQ0FDRTtBQUFBLDRDQUNFO0FBQUcsMEJBQUksRUFBQyxHQUFSO0FBQVksNkJBQU8sRUFBR3dELENBQUQsSUFBT0EsQ0FBQyxDQUFDSyxjQUFGLEVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLGVBSUU7QUFBSSwrQkFBUyxFQUFDLGtCQUFkO0FBQUEsOENBQ0U7QUFBQSwrQ0FDRSw4REFBQyxrREFBRDtBQUFNLDhCQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREYsZUFJRTtBQUFBLCtDQUNFLDhEQUFDLGtEQUFEO0FBQU0sOEJBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FKRixlQU9FO0FBQUEsK0NBQ0UsOERBQUMsa0RBQUQ7QUFBTSw4QkFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQVBGLGVBVUU7QUFBQSwrQ0FDRSw4REFBQyxrREFBRDtBQUFNLDhCQUFJLEVBQUMsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBVkYsZUFhRTtBQUFBLCtDQUNFLDhEQUFDLGtEQUFEO0FBQU0sOEJBQUksRUFBQyxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLGVBdUJFO0FBQUEsNENBQ0U7QUFBRywwQkFBSSxFQUFDLEdBQVI7QUFBWSw2QkFBTyxFQUFHTCxDQUFELElBQU9BLENBQUMsQ0FBQ0ssY0FBRixFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixlQUlFO0FBQUksK0JBQVMsRUFBQyxTQUFkO0FBQUEsOENBQ0U7QUFBQSwrQ0FDRSw4REFBQyxrREFBRDtBQUFNLDhCQUFJLEVBQUMsb0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGLGVBSUU7QUFBQSwrQ0FDRSw4REFBQyxrREFBRDtBQUFNLDhCQUFJLEVBQUMscUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUpGLGVBT0U7QUFBQSwrQ0FDRSw4REFBQyxrREFBRDtBQUFNLDhCQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBUEYsZUFVRTtBQUFBLCtDQUNFLDhEQUFDLGtEQUFEO0FBQU0sOEJBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FWRixlQWFFO0FBQUEsK0NBQ0UsOERBQUMsa0RBQUQ7QUFBTSw4QkFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBdkJGLGVBNkNFO0FBQUEsNENBQ0U7QUFBRywwQkFBSSxFQUFDLEdBQVI7QUFBWSw2QkFBTyxFQUFHTCxDQUFELElBQU9BLENBQUMsQ0FBQ0ssY0FBRixFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixlQUlFO0FBQUksK0JBQVMsRUFBQyxTQUFkO0FBQUEsOENBQ0U7QUFBQSwrQ0FDRSw4REFBQyxrREFBRDtBQUFNLDhCQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREYsZUFJRTtBQUFBLCtDQUNFLDhEQUFDLGtEQUFEO0FBQU0sOEJBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FKRixlQU9FO0FBQUEsK0NBQ0UsOERBQUMsa0RBQUQ7QUFBTSw4QkFBSSxFQUFDLG1CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FQRixlQVVFO0FBQUEsK0NBQ0UsOERBQUMsa0RBQUQ7QUFBTSw4QkFBSSxFQUFDLG1CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FWRixlQWdCRTtBQUFBLCtDQUNFLDhEQUFDLGtEQUFEO0FBQU0sOEJBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkE3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFqQ0YsZUEyR0U7QUFBQSx1Q0FDRSw4REFBQyxrREFBRDtBQUFNLHNCQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBM0dGLGVBOEdFO0FBQUEsd0NBQ0UsOERBQUMsa0RBQUQ7QUFBTSxzQkFBSSxFQUFDLE9BQVg7QUFBQSx5Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFJRTtBQUFJLDJCQUFTLEVBQUMsU0FBZDtBQUFBLDBDQUNFO0FBQUEsMkNBQ0UsOERBQUMsa0RBQUQ7QUFBTSwwQkFBSSxFQUFDLGFBQVg7QUFBQSw2Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLGVBTUU7QUFBQSwyQ0FDRSw4REFBQyxrREFBRDtBQUFNLDBCQUFJLEVBQUMsaUJBQVg7QUFBQSw2Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQU5GLGVBV0U7QUFBQSwyQ0FDRSw4REFBQyxrREFBRDtBQUFNLDBCQUFJLEVBQUMsYUFBWDtBQUFBLDZDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBWEYsZUFnQkU7QUFBQSwyQ0FDRSw4REFBQyxrREFBRDtBQUFNLDBCQUFJLEVBQUMsaUJBQVg7QUFBQSw2Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWhCRixlQXFCRTtBQUFBLDJDQUNFLDhEQUFDLGtEQUFEO0FBQU0sMEJBQUksRUFBQyxTQUFYO0FBQUEsNkNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFyQkYsRUF5QlEsR0F6QlIsZUEwQkU7QUFBQSwyQ0FDRSw4REFBQyxrREFBRDtBQUFNLDBCQUFJLEVBQUMsVUFBWDtBQUFBLDZDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBOUdGLGVBbUpFO0FBQUEsd0NBQ0U7QUFBRyxzQkFBSSxFQUFDLEdBQVI7QUFBWSx5QkFBTyxFQUFHTCxDQUFELElBQU9BLENBQUMsQ0FBQ0ssY0FBRixFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQUlFO0FBQUksMkJBQVMsRUFBQyxTQUFkO0FBQUEsMENBQ0U7QUFBQSwyQ0FDRSw4REFBQyxrREFBRDtBQUFNLDBCQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsZUFJRTtBQUFBLDJDQUNFLDhEQUFDLGtEQUFEO0FBQU0sMEJBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFKRixlQU9FO0FBQUEsMkNBQ0UsOERBQUMsa0RBQUQ7QUFBTSwwQkFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVBGLGVBVUU7QUFBQSwyQ0FDRSw4REFBQyxrREFBRDtBQUFNLDBCQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBVkYsZUFhRTtBQUFBLDJDQUNFLDhEQUFDLGtEQUFEO0FBQU0sMEJBQUksRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFiRixlQWdCRTtBQUFBLDJDQUNFLDhEQUFDLGtEQUFEO0FBQU0sMEJBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFoQkYsZUFtQkU7QUFBQSwyQ0FDRSw4REFBQyxrREFBRDtBQUFNLDBCQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBbkJGLGVBc0JFO0FBQUEsMkNBQ0UsOERBQUMsa0RBQUQ7QUFBTSwwQkFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQXRCRixlQXlCRTtBQUFBLDJDQUNFLDhEQUFDLGtEQUFEO0FBQU0sMEJBQUksRUFBQyxnQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBbkpGLGVBcUxFO0FBQUEsdUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxzQkFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQXJMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEYsZUEwTUU7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUtFO0FBQUssbUJBQVMsRUFBQyx5QkFBZjtBQUFBLGtDQUNFO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQVksbUJBQU8sRUFBR0wsQ0FBRCxJQUFPQSxDQUFDLENBQUNLLGNBQUYsRUFBNUI7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQVksbUJBQU8sRUFBR0wsQ0FBRCxJQUFPQSxDQUFDLENBQUNLLGNBQUYsRUFBNUI7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRixlQU9FO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQVksbUJBQU8sRUFBR0wsQ0FBRCxJQUFPQSxDQUFDLENBQUNLLGNBQUYsRUFBNUI7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQRixlQVVFO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQVksbUJBQU8sRUFBR0wsQ0FBRCxJQUFPQSxDQUFDLENBQUNLLGNBQUYsRUFBNUI7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTFNRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF3T0QsQ0ExT0Q7O0FBNE9BLGlFQUFlZ2xCLGNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDalBBO0FBQ0E7O0FBRUEsTUFBTS9CLFlBQVksR0FBRyxNQUFNO0FBQ3pCLFFBQU07QUFBQSxPQUFDa0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEI5WiwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQytaLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCaGEsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNpYSxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QmxhLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBLDhCQUNFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxpQkFBUyxFQUFHLG1CQUNWNlosVUFBVSxHQUNOLHdEQURNLEdBRU4sRUFDTCxFQU5IO0FBT0UsZUFBTyxFQUFHeGxCLENBQUQsSUFBTztBQUNkeWxCLFVBQUFBLGFBQWEsQ0FBQyxDQUFDRCxVQUFGLENBQWI7QUFDQXhsQixVQUFBQSxDQUFDLENBQUNLLGNBQUY7QUFDRCxTQVZIO0FBQUEsa0JBWUdtbEIsVUFBVSxHQUNULEdBRFMsZ0JBR1QsOERBQUMsMkNBQUQ7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZko7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQXVCRTtBQUFLLGlCQUFTLEVBQUcsMEJBQXlCQSxVQUFVLEdBQUcsT0FBSCxHQUFhLEVBQUcsRUFBcEU7QUFBQSwrQkFDRTtBQUFBLGtDQUNFO0FBQUEsbUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLEdBQVg7QUFBQSxxQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBTUU7QUFBSSxxQkFBUyxFQUFDLFdBQWQ7QUFBQSxvQ0FDRSw4REFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUMsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQUksdUJBQVMsRUFBRyxXQUFVRSxPQUFPLEtBQUssTUFBWixHQUFxQixPQUFyQixHQUErQixFQUFHLEVBQTVEO0FBQUEsc0NBQ0U7QUFBQSx3Q0FDRTtBQUFHLHNCQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQUVFO0FBQUksMkJBQVMsRUFBRyxXQUFVRSxTQUFTLEtBQUssR0FBZCxHQUFvQixPQUFwQixHQUE4QixFQUFHLEVBQTNEO0FBQUEsMENBQ0U7QUFBQSwyQ0FDRSw4REFBQyxrREFBRDtBQUFNLDBCQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsZUFJRTtBQUFBLDJDQUNFLDhEQUFDLGtEQUFEO0FBQU0sMEJBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFKRixlQU9FO0FBQUEsMkNBQ0UsOERBQUMsa0RBQUQ7QUFBTSwwQkFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVBGLGVBVUU7QUFBQSwyQ0FDRSw4REFBQyxrREFBRDtBQUFNLDBCQUFJLEVBQUMsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBVkYsZUFhRTtBQUFBLDJDQUNFLDhEQUFDLGtEQUFEO0FBQU0sMEJBQUksRUFBQyxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkYsZUFtQkU7QUFDRSwyQkFBUyxFQUFDLGFBRFo7QUFFRSxzQkFBSSxFQUFDLEdBRlA7QUFHRSx5QkFBTyxFQUFHNWxCLENBQUQsSUFBTztBQUNkNmxCLG9CQUFBQSxZQUFZLENBQUNELFNBQVMsS0FBSyxHQUFkLEdBQW9CLEtBQXBCLEdBQTRCLEdBQTdCLENBQVo7QUFDQTVsQixvQkFBQUEsQ0FBQyxDQUFDSyxjQUFGO0FBQ0QsbUJBTkg7QUFBQSw0QkFRR3VsQixTQUFTLEtBQUssR0FBZCxHQUFvQixHQUFwQixHQUEwQjtBQVI3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUErQkU7QUFBQSx3Q0FDRTtBQUFHLHNCQUFJLEVBQUMsR0FBUjtBQUFZLHlCQUFPLEVBQUc1bEIsQ0FBRCxJQUFPQSxDQUFDLENBQUNLLGNBQUYsRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFJRTtBQUFJLDJCQUFTLEVBQUcsV0FBVXVsQixTQUFTLEtBQUssR0FBZCxHQUFvQixPQUFwQixHQUE4QixFQUFHLEVBQTNEO0FBQUEsMENBQ0U7QUFBQSwyQ0FDRSw4REFBQyxrREFBRDtBQUFNLDBCQUFJLEVBQUMsb0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLGVBSUU7QUFBQSwyQ0FDRSw4REFBQyxrREFBRDtBQUFNLDBCQUFJLEVBQUMscUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUpGLGVBT0U7QUFBQSwyQ0FDRSw4REFBQyxrREFBRDtBQUFNLDBCQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBUEYsZUFVRTtBQUFBLDJDQUNFLDhEQUFDLGtEQUFEO0FBQU0sMEJBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFWRixlQWFFO0FBQUEsMkNBQ0UsOERBQUMsa0RBQUQ7QUFBTSwwQkFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKRixlQXFCRTtBQUNFLDJCQUFTLEVBQUMsYUFEWjtBQUVFLHNCQUFJLEVBQUMsR0FGUDtBQUdFLHlCQUFPLEVBQUc1bEIsQ0FBRCxJQUFPO0FBQ2Q2bEIsb0JBQUFBLFlBQVksQ0FBQ0QsU0FBUyxLQUFLLEdBQWQsR0FBb0IsS0FBcEIsR0FBNEIsR0FBN0IsQ0FBWjtBQUNBNWxCLG9CQUFBQSxDQUFDLENBQUNLLGNBQUY7QUFDRCxtQkFOSDtBQUFBLDRCQVFHdWxCLFNBQVMsS0FBSyxHQUFkLEdBQW9CLEdBQXBCLEdBQTBCO0FBUjdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkEvQkYsZUErREU7QUFBQSx3Q0FDRTtBQUFHLHNCQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQUVFO0FBQUksMkJBQVMsRUFBRyxXQUFVQSxTQUFTLEtBQUssR0FBZCxHQUFvQixPQUFwQixHQUE4QixFQUFHLEVBQTNEO0FBQUEsMENBQ0U7QUFBQSwyQ0FDRSw4REFBQyxrREFBRDtBQUFNLDBCQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsZUFJRTtBQUFBLDJDQUNFLDhEQUFDLGtEQUFEO0FBQU0sMEJBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFKRixlQU9FO0FBQUEsMkNBQ0UsOERBQUMsa0RBQUQ7QUFBTSwwQkFBSSxFQUFDLG1CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFQRixlQVVFO0FBQUEsMkNBQ0UsOERBQUMsa0RBQUQ7QUFBTSwwQkFBSSxFQUFDLG1CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFWRixlQWFFO0FBQUEsMkNBQ0UsOERBQUMsa0RBQUQ7QUFBTSwwQkFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGRixlQW1CRTtBQUNFLDJCQUFTLEVBQUMsYUFEWjtBQUVFLHNCQUFJLEVBQUMsR0FGUDtBQUdFLHlCQUFPLEVBQUc1bEIsQ0FBRCxJQUFPO0FBQ2Q2bEIsb0JBQUFBLFlBQVksQ0FBQ0QsU0FBUyxLQUFLLEdBQWQsR0FBb0IsS0FBcEIsR0FBNEIsR0FBN0IsQ0FBWjtBQUNBNWxCLG9CQUFBQSxDQUFDLENBQUNLLGNBQUY7QUFDRCxtQkFOSDtBQUFBLDRCQVFHdWxCLFNBQVMsS0FBSyxHQUFkLEdBQW9CLEdBQXBCLEdBQTBCO0FBUjdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkEvREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORixlQXVHRTtBQUFBLG1DQUNFLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkF2R0YsZUEyR0U7QUFBSSxxQkFBUyxFQUFDLFdBQWQ7QUFBQSxtQ0FDRSw4REFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBM0dGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTZJRCxDQWpKRDs7QUFtSkEsaUVBQWV0QyxZQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsQ0FBQztBQUFFakMsRUFBQUE7QUFBRixDQUFELEtBQXNCO0FBQzFDLFFBQU07QUFBQSxPQUFDd0UsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJwYSwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ3JELElBQUQ7QUFBQSxPQUFPMGQ7QUFBUCxNQUFrQnJhLCtDQUFRLENBQUMsS0FBRCxDQUFoQzs7QUFDQSxNQUFJckQsSUFBSixFQUFVO0FBQ1JxTCxJQUFBQSx1REFBQSxDQUNFO0FBQ0U1RSxNQUFBQSxRQUFRLEVBQUUsT0FEWixDQUVFOztBQUZGLEtBREYsRUFLRTdhLFNBTEYsRUFNRTtBQUFFZ00sTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FORjtBQVFEOztBQUVELFFBQU0rbEIsUUFBUSxHQUFJam1CLENBQUQsSUFBTztBQUN0QkEsSUFBQUEsQ0FBQyxDQUFDSyxjQUFGO0FBQ0EybEIsSUFBQUEsT0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNBRCxJQUFBQSxXQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0QsR0FKRDs7QUFNQSxzQkFDRSw4REFBQywyQ0FBRDtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBQSw2QkFDRTtBQUNFLGlCQUFTLEVBQUMsc0NBRFo7QUFFRSxZQUFJLEVBQUMsR0FGUDtBQUdFLGVBQU8sRUFBRy9sQixDQUFELElBQU87QUFDZCtsQixVQUFBQSxXQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0EvbEIsVUFBQUEsQ0FBQyxDQUFDSyxjQUFGO0FBQ0QsU0FOSDtBQUFBLCtCQVFFO0FBQUcsbUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWFFO0FBQUssZUFBUyxFQUFHLGVBQWN5bEIsUUFBUSxHQUFHLFNBQUgsR0FBZSxFQUFHLEVBQXpEO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUMsMkJBRFo7QUFFRSxZQUFFLEVBQUMsY0FGTDtBQUdFLGlCQUFPLEVBQUUsTUFBTUMsV0FBVyxDQUFDLEtBQUQ7QUFINUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU1FO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQUEsaUNBQ0U7QUFBTSxrQkFBTSxFQUFDLEtBQWI7QUFBbUIsb0JBQVEsRUFBRy9sQixDQUFELElBQU9pbUIsUUFBUSxDQUFDam1CLENBQUQsQ0FBNUM7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMscUJBQWY7QUFBQSxxQ0FDRTtBQUNFLG9CQUFJLEVBQUMsUUFEUDtBQUVFLHlCQUFTLEVBQUMsbUJBRlo7QUFHRSwyQkFBVyxFQUFDLHdCQUhkO0FBSUUsd0JBQVEsRUFBR0EsQ0FBRCxJQUFPc2hCLFlBQVksQ0FBQ3RoQixDQUFDLENBQUN6TixNQUFGLENBQVNsQixLQUFWO0FBSi9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXFDRCxDQXpERDs7QUEyREEsaUVBQWVrc0Isb0RBQU8sQ0FBQyxJQUFELEVBQU87QUFBRStELEVBQUFBLFlBQVlBLGdFQUFBQTtBQUFkLENBQVAsQ0FBUCxDQUFnQ2lDLGFBQWhDLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQztBQUFFMkMsRUFBQUEsVUFBRjtBQUFjRCxFQUFBQTtBQUFkLENBQUQsS0FBOEI7QUFDN0MvakIsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QrakIsSUFBQUEsUUFBUTtBQUNULEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxRQUFNN0YsS0FBSyxHQUFHN0Msd0RBQVcsQ0FBRTFJLEtBQUQsSUFBV0EsS0FBSyxDQUFDcUosTUFBTixDQUFha0MsS0FBekIsQ0FBekI7QUFFQSxzQkFDRTtBQUFJLGFBQVMsRUFBQyxhQUFkO0FBQUEsNEJBQ0U7QUFBRyxVQUFJLEVBQUMsR0FBUjtBQUFZLGFBQU8sRUFBR3JnQixDQUFELElBQU9BLENBQUMsQ0FBQ0ssY0FBRixFQUE1QjtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFDMkMsR0FEM0MsZUFFRTtBQUFNLGlCQUFTLEVBQUMsWUFBaEI7QUFBQSxrQkFBOEJnZ0IsS0FBSyxJQUFJQSxLQUFLLENBQUMzdEI7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUEsaUJBQ0cydEIsS0FBSyxJQUFJQSxLQUFLLENBQUMzdEIsTUFBTixHQUFlLENBQXhCLEdBQ0MydEIsS0FBSyxDQUFDcHBCLEdBQU4sQ0FBV3NwQixJQUFELGlCQUNSO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxpQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUcsU0FBUUEsSUFBSSxDQUFDaGMsRUFBRyxFQUE3QjtBQUFBLG1DQUNFO0FBQUEscUNBQ0U7QUFBSyxtQkFBRyxFQUFFZ2MsSUFBSSxDQUFDcEIsSUFBZjtBQUFxQixtQkFBRyxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFRRTtBQUFLLG1CQUFTLEVBQUMsY0FBZjtBQUFBLGtDQUNFO0FBQUEsbUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFHLFNBQVFvQixJQUFJLENBQUNoYyxFQUFHLEVBQTdCO0FBQUEsd0JBQWlDZ2MsSUFBSSxDQUFDdlQ7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRTtBQUFLLHFCQUFTLEVBQUMsWUFBZjtBQUFBLG9DQUNFO0FBQU0sdUJBQVMsRUFBQyxLQUFoQjtBQUFBLDhCQUNJdVQsSUFBSSxDQUFDZCxTQURULFNBQ3VCYyxJQUFJLENBQUNNLEdBRDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQUlHLElBSkgsZUFLRTtBQUFNLHVCQUFTLEVBQUMsV0FBaEI7QUFBQSw4QkFBOEJOLElBQUksQ0FBQzZGLFVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLGVBb0JFO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsaUNBQ0U7QUFDRSxnQkFBSSxFQUFDLEdBRFA7QUFFRSxtQkFBTyxFQUFHcG1CLENBQUQsSUFBTztBQUNkQSxjQUFBQSxDQUFDLENBQUNLLGNBQUY7QUFDQThsQixjQUFBQSxVQUFVLENBQUM1RixJQUFJLENBQUNoYyxFQUFOLENBQVY7QUFDQStZLGNBQUFBLDREQUFBLENBQVksd0JBQVo7QUFDRCxhQU5IO0FBQUEsbUNBUUU7QUFBRyx1QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXBCRjtBQUFBLFNBQVNpRCxJQUFJLENBQUNoYyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FERCxnQkFxQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdENKLGVBd0NFO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxrQ0FDRTtBQUFNLHFCQUFTLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFFRzhiLEtBQUssaUJBQUk7QUFBTSxxQkFBUyxFQUFDLFNBQWhCO0FBQUEsNEJBQTRCK0Ysd0RBQVUsQ0FBQy9GLEtBQUQsQ0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBeENGLGVBOENFO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQSxrQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxXQUFYO0FBQUEsbUNBQ0U7QUFBRyx1QkFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBOUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQStERCxDQXJFRDs7QUF1RUEsaUVBQWU5QyxvREFBTyxDQUFDLElBQUQsRUFBTztBQUFFNEksRUFBQUEsVUFBRjtBQUFjRCxFQUFBQSxRQUFRQSw0REFBQUE7QUFBdEIsQ0FBUCxDQUFQLENBQXdDMUMsUUFBeEMsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTtBQVVPLE1BQU1sQyxZQUFZLEdBQUlqd0IsS0FBRCxJQUFZdTFCLFFBQUQsSUFBYztBQUNuREEsRUFBQUEsUUFBUSxDQUFDO0FBQ1Bsa0IsSUFBQUEsSUFBSSxFQUFFOGpCLDhDQURDO0FBRVBLLElBQUFBLE9BQU8sRUFBRXgxQjtBQUZGLEdBQUQsQ0FBUjtBQUlELENBTE07QUFPQSxNQUFNK3ZCLGFBQWEsR0FBSS92QixLQUFELElBQVl1MUIsUUFBRCxJQUFjO0FBQ3BEQSxFQUFBQSxRQUFRLENBQUM7QUFDUGxrQixJQUFBQSxJQUFJLEVBQUUyakIsK0NBREM7QUFFUFEsSUFBQUEsT0FBTyxFQUFFeDFCO0FBRkYsR0FBRCxDQUFSO0FBSUQsQ0FMTTtBQU9BLE1BQU1nd0IsZ0JBQWdCLEdBQUlod0IsS0FBRCxJQUFZdTFCLFFBQUQsSUFBYztBQUN2REEsRUFBQUEsUUFBUSxDQUFDO0FBQ1Bsa0IsSUFBQUEsSUFBSSxFQUFFNGpCLGtEQURDO0FBRVBPLElBQUFBLE9BQU8sRUFBRXgxQjtBQUZGLEdBQUQsQ0FBUjtBQUlELENBTE07QUFNQSxNQUFNbXdCLFlBQVksR0FBSW53QixLQUFELElBQVl1MUIsUUFBRCxJQUFjO0FBQ25EQSxFQUFBQSxRQUFRLENBQUM7QUFDUGxrQixJQUFBQSxJQUFJLEVBQUVna0IsOENBREM7QUFFUEcsSUFBQUEsT0FBTyxFQUFFeDFCO0FBRkYsR0FBRCxDQUFSO0FBSUQsQ0FMTTtBQU9BLE1BQU1rd0IsYUFBYSxHQUFJbHdCLEtBQUQsSUFBWXUxQixRQUFELElBQWM7QUFDcERBLEVBQUFBLFFBQVEsQ0FBQztBQUNQbGtCLElBQUFBLElBQUksRUFBRStqQiwrQ0FEQztBQUVQSSxJQUFBQSxPQUFPLEVBQUV4MUI7QUFGRixHQUFELENBQVI7QUFJRCxDQUxNO0FBT0EsTUFBTTR2QixhQUFhLEdBQUk1dkIsS0FBRCxJQUFZdTFCLFFBQUQsSUFBYztBQUNwREEsRUFBQUEsUUFBUSxDQUFDO0FBQUVsa0IsSUFBQUEsSUFBSSxFQUFFNmpCLCtDQUFSO0FBQXNCTSxJQUFBQSxPQUFPLEVBQUV4MUI7QUFBL0IsR0FBRCxDQUFSO0FBQ0QsQ0FGTTtBQUdBLE1BQU1vd0IsWUFBWSxHQUFJcHdCLEtBQUQsSUFBWXUxQixRQUFELElBQWM7QUFDbkRBLEVBQUFBLFFBQVEsQ0FBQztBQUFFbGtCLElBQUFBLElBQUksRUFBRWlrQiw2Q0FBUjtBQUFvQkUsSUFBQUEsT0FBTyxFQUFFeDFCO0FBQTdCLEdBQUQsQ0FBUjtBQUNELENBRk07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DUDtBQUNBO0FBRU8sTUFBTXF6QixXQUFXLEdBQUcsTUFBTSxNQUFPa0MsUUFBUCxJQUFvQjtBQUNuREEsRUFBQUEsUUFBUSxDQUFDO0FBQ1Bsa0IsSUFBQUEsSUFBSSxFQUFFcWtCLDhDQURDO0FBRVBGLElBQUFBLE9BQU8sRUFBRSxNQUFNQywyREFBUyxDQUFDLHNCQUFEO0FBRmpCLEdBQUQsQ0FBUjtBQUlELENBTE07QUFNQSxNQUFNRyxnQkFBZ0IsR0FBSTFpQixFQUFELElBQVEsTUFBT3FpQixRQUFQLElBQW9CO0FBQzFELFFBQU10VCxJQUFJLEdBQUcsTUFBTXdULDJEQUFTLENBQUMsc0JBQUQsQ0FBNUI7QUFDQUYsRUFBQUEsUUFBUSxDQUFDO0FBQ1Bsa0IsSUFBQUEsSUFBSSxFQUFFc2tCLDZDQURDO0FBRVBILElBQUFBLE9BQU8sRUFBRXZULElBQUksQ0FBQ25jLElBQUwsQ0FBV21jLElBQUQsSUFBVUEsSUFBSSxDQUFDL08sRUFBTCxLQUFZQSxFQUFoQztBQUZGLEdBQUQsQ0FBUjtBQUlELENBTk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBLE1BQU0yaUIsTUFBTSxHQUFHLFFBQWY7QUFDQSxNQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFdBQWxCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFdBQWxCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLFFBQWY7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxNQUFNLEdBQUcsUUFBZjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxRQUFmO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLFFBQWYsRUFFUDs7QUFDTyxNQUFNZixXQUFXLEdBQUcsYUFBcEI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsWUFBbkIsRUFFUDs7QUFDTyxNQUFNUixXQUFXLEdBQUcsYUFBcEI7QUFDQSxNQUFNSCxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUksV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTUQsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsTUFBTUYsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsTUFBTUksVUFBVSxHQUFHLFlBQW5CLEVBRVA7O0FBQ08sTUFBTW9CLFNBQVMsR0FBRyxXQUFsQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsWUFBbkI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFFQSxNQUFNQyxhQUFhLEdBQUcsZUFBdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENQO0FBQ0E7QUFhTyxNQUFNeEMsUUFBUSxHQUFHLE1BQU9VLFFBQUQsSUFBYztBQUMxQ0EsRUFBQUEsUUFBUSxDQUFDO0FBQ1Bsa0IsSUFBQUEsSUFBSSxFQUFFcWxCLDRDQURDO0FBRVBsQixJQUFBQSxPQUFPLEVBQUU4QixvRUFBZSxDQUFDLGVBQUQ7QUFGakIsR0FBRCxDQUFSO0FBSUQsQ0FMTTtBQU9BLE1BQU1sTCxTQUFTLEdBQUlPLE9BQUQsSUFBYzRJLFFBQUQsSUFBYztBQUNsREEsRUFBQUEsUUFBUSxDQUFDO0FBQ1Bsa0IsSUFBQUEsSUFBSSxFQUFFc2xCLDhDQURDO0FBRVBuQixJQUFBQSxPQUFPLEVBQUU3STtBQUZGLEdBQUQsQ0FBUjtBQUlELENBTE07QUFPQSxNQUFNbUksVUFBVSxHQUFJNWhCLEVBQUQsSUFBU3FpQixRQUFELElBQWM7QUFDOUNBLEVBQUFBLFFBQVEsQ0FBQztBQUNQbGtCLElBQUFBLElBQUksRUFBRXVsQiw4Q0FEQztBQUVQcEIsSUFBQUEsT0FBTyxFQUFFdGlCO0FBRkYsR0FBRCxDQUFSO0FBSUQsQ0FMTTtBQU9BLE1BQU0yYixZQUFZLEdBQUlsQyxPQUFELElBQWM0SSxRQUFELElBQWM7QUFDckRBLEVBQUFBLFFBQVEsQ0FBQztBQUNQbGtCLElBQUFBLElBQUksRUFBRXdsQixnREFEQztBQUVQckIsSUFBQUEsT0FBTyxFQUFFN0k7QUFGRixHQUFELENBQVI7QUFJRCxDQUxNO0FBT0EsTUFBTU4sV0FBVyxHQUFJTSxPQUFELElBQWM0SSxRQUFELElBQWM7QUFDcERBLEVBQUFBLFFBQVEsQ0FBQztBQUNQbGtCLElBQUFBLElBQUksRUFBRThsQiwrQ0FEQztBQUVQM0IsSUFBQUEsT0FBTyxFQUFFN0k7QUFGRixHQUFELENBQVI7QUFJRCxDQUxNO0FBT0EsTUFBTUosV0FBVyxHQUFHLE1BQU9nSixRQUFELElBQWM7QUFDN0NBLEVBQUFBLFFBQVEsQ0FBQztBQUNQbGtCLElBQUFBLElBQUksRUFBRStsQiwrQ0FEQztBQUVQNUIsSUFBQUEsT0FBTyxFQUFFOEIsb0VBQWUsQ0FBQyxjQUFEO0FBRmpCLEdBQUQsQ0FBUjtBQUlELENBTE07QUFNQSxNQUFNbkcsVUFBVSxHQUFHLE1BQU9vRSxRQUFELElBQWM7QUFDNUNBLEVBQUFBLFFBQVEsQ0FBQztBQUNQbGtCLElBQUFBLElBQUksRUFBRTJsQiw4Q0FEQztBQUVQeEIsSUFBQUEsT0FBTyxFQUFFOEIsb0VBQWUsQ0FBQyxjQUFEO0FBRmpCLEdBQUQsQ0FBUjtBQUlELENBTE07QUFPQSxNQUFNaEwsT0FBTyxHQUFJSyxPQUFELElBQWM0SSxRQUFELElBQWM7QUFDaERBLEVBQUFBLFFBQVEsQ0FBQztBQUNQbGtCLElBQUFBLElBQUksRUFBRTBsQiwwQ0FEQztBQUVQdkIsSUFBQUEsT0FBTyxFQUFFN0k7QUFGRixHQUFELENBQVI7QUFJRCxDQUxNO0FBTUEsTUFBTUgsYUFBYSxHQUFJRyxPQUFELElBQWM0SSxRQUFELElBQWM7QUFDdERBLEVBQUFBLFFBQVEsQ0FBQztBQUNQbGtCLElBQUFBLElBQUksRUFBRTRsQixpREFEQztBQUVQekIsSUFBQUEsT0FBTyxFQUFFN0k7QUFGRixHQUFELENBQVI7QUFJRCxDQUxNO0FBT0EsTUFBTTRLLGVBQWUsR0FBSXRWLElBQUQsSUFBV3NULFFBQUQsSUFBYztBQUNyREEsRUFBQUEsUUFBUSxDQUFDO0FBQ1Bsa0IsSUFBQUEsSUFBSSxFQUFFZ21CLGdEQURDO0FBRVA3QixJQUFBQSxPQUFPLEVBQUV2VDtBQUZGLEdBQUQsQ0FBUjtBQUlELENBTE07Ozs7Ozs7Ozs7Ozs7OztBQzNFQSxNQUFNd1QsU0FBUyxHQUFHLE1BQU83b0IsR0FBUCxJQUFlO0FBQ3RDLFFBQU04SCxHQUFHLEdBQUcsTUFBTXFDLEtBQUssQ0FBRSxHQUFFbkssR0FBSSxFQUFSLENBQXZCO0FBQ0EsUUFBTXFWLElBQUksR0FBRyxNQUFNdk4sR0FBRyxDQUFDc04sSUFBSixFQUFuQjtBQUNBLFNBQU9DLElBQVA7QUFDRCxDQUpNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7QUFFTyxNQUFNcVIsa0JBQWtCLEdBQUcsQ0FBQ3JSLElBQUQsRUFBT3dWLE9BQVAsS0FBbUI7QUFDbkQsTUFBSUMsWUFBWSxHQUFHelYsSUFBSSxJQUFJLENBQUMsR0FBR0EsSUFBSixDQUEzQjs7QUFFQSxPQUFLLE1BQU1yaEIsR0FBWCxJQUFrQjYyQixPQUFsQixFQUEyQjtBQUN6QixRQUFJNzJCLEdBQUcsS0FBSyxPQUFaLEVBQXFCO0FBQ25CLFVBQUlBLEdBQUcsS0FBSyxRQUFaLEVBQXNCO0FBQ3BCODJCLFFBQUFBLFlBQVksR0FDVkEsWUFBWSxJQUNaQSxZQUFZLENBQUMvMUIsTUFBYixDQUFxQnNnQixJQUFELElBQ2xCQSxJQUFJLENBQUN0RyxJQUFMLENBQVVpQyxXQUFWLEdBQXdCdFUsUUFBeEIsQ0FBaUNtdUIsT0FBTyxDQUFDNzJCLEdBQUQsQ0FBUCxDQUFhZ2QsV0FBYixFQUFqQyxDQURGLENBRkY7QUFLRCxPQU5ELE1BTU87QUFDTCxZQUFJaGQsR0FBRyxLQUFLLFFBQVIsSUFBb0JBLEdBQUcsS0FBSyxVQUE1QixJQUEwQ0EsR0FBRyxLQUFLLE1BQXRELEVBQThEO0FBQzVEODJCLFVBQUFBLFlBQVksR0FBR0MsYUFBYSxDQUFDRCxZQUFELEVBQWVELE9BQU8sQ0FBQzcyQixHQUFELENBQXRCLEVBQTZCQSxHQUE3QixDQUE1QjtBQUNELFNBRkQsTUFFTztBQUNMODJCLFVBQUFBLFlBQVksR0FBR0UsV0FBVyxDQUFDRixZQUFELEVBQWVELE9BQU8sQ0FBQzcyQixHQUFELENBQXRCLEVBQTZCQSxHQUE3QixDQUExQjtBQUNEO0FBQ0Y7QUFDRixLQWRELE1BY087QUFDTDgyQixNQUFBQSxZQUFZLEdBQUd4SCxhQUFhLENBQUN3SCxZQUFELEVBQWVELE9BQU8sQ0FBQzcyQixHQUFELENBQXRCLENBQTVCO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPODJCLFlBQVA7QUFDRCxDQXZCTTs7QUF5QlAsU0FBU0UsV0FBVCxDQUFxQkYsWUFBckIsRUFBbUMxYyxJQUFuQyxFQUF5Q3BhLEdBQXpDLEVBQThDO0FBQzVDLE1BQUlpM0IsSUFBSSxHQUFHLEVBQVg7QUFDQSxNQUFJLENBQUM3YyxJQUFELElBQVNBLElBQUksQ0FBQzNaLE1BQUwsS0FBZ0IsQ0FBN0IsRUFBZ0MsT0FBT3EyQixZQUFQOztBQUNoQyxPQUFLLElBQUlJLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHSixZQUFZLENBQUNyMkIsTUFBekMsRUFBaUR5MkIsS0FBSyxFQUF0RCxFQUEwRDtBQUN4RCxVQUFNbkwsT0FBTyxHQUFHK0ssWUFBWSxDQUFDSSxLQUFELENBQTVCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHL2MsSUFBSSxDQUFDN1ksT0FBTCxDQUFhd3FCLE9BQU8sQ0FBQy9yQixHQUFELENBQXBCLENBQWI7O0FBQ0EsUUFBSW0zQixJQUFJLEtBQUssQ0FBQyxDQUFkLEVBQWlCO0FBQ2ZGLE1BQUFBLElBQUksQ0FBQ3p5QixJQUFMLENBQVV1bkIsT0FBVjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT2tMLElBQVA7QUFDRDs7QUFFRCxTQUFTM0gsYUFBVCxDQUF1QndILFlBQXZCLEVBQXFDcEosS0FBckMsRUFBNEM7QUFDMUMsU0FBUW9KLFlBQVksR0FDbEJBLFlBQVksSUFDWkEsWUFBWSxDQUFDLzFCLE1BQWIsQ0FDR2dyQixPQUFELElBQ0V3QixNQUFNLENBQUN4QixPQUFPLENBQUN5QixTQUFULENBQU4sSUFBNkJFLEtBQUssQ0FBQzlvQixHQUFuQyxJQUNBMm9CLE1BQU0sQ0FBQ3hCLE9BQU8sQ0FBQ3lCLFNBQVQsQ0FBTixJQUE2QkUsS0FBSyxDQUFDcmIsR0FIdkMsQ0FGRjtBQU9EOztBQUVELFNBQVMwa0IsYUFBVCxDQUF1QkQsWUFBdkIsRUFBcUMxM0IsS0FBckMsRUFBNENZLEdBQTVDLEVBQWlEO0FBQy9DLFNBQU84MkIsWUFBWSxJQUFJMTNCLEtBQUssQ0FBQ3FCLE1BQU4sR0FBZSxDQUEvQixHQUNIcTJCLFlBQVksQ0FBQy8xQixNQUFiLENBQ0dzZ0IsSUFBRCxJQUFVQSxJQUFJLENBQUNyaEIsR0FBRCxDQUFKLElBQWFxaEIsSUFBSSxDQUFDcmhCLEdBQUQsQ0FBSixDQUFVa0YsSUFBVixDQUFnQmt5QixDQUFELElBQU9oNEIsS0FBSyxDQUFDc0osUUFBTixDQUFlMHVCLENBQWYsQ0FBdEIsQ0FEekIsQ0FERyxHQUlITixZQUpKO0FBS0Q7O0FBRU0sTUFBTU8sbUJBQW1CLEdBQUcsQ0FBQ3IzQixHQUFELEVBQU0rdkIsR0FBTixLQUFjO0FBQy9DLE1BQUl1SCxLQUFLLEdBQUcsT0FBT3QzQixHQUFQLEtBQWUsUUFBZixHQUEwQixJQUExQixHQUFpQyxLQUE3QztBQUNBLE1BQUl1M0IsTUFBTSxHQUFHRCxLQUFLLEdBQ2R0M0IsR0FBRyxJQUNIQSxHQUFHLENBQ0FnRixHQURILENBQ08sVUFBVTVGLEtBQVYsRUFBaUI7QUFDcEIsV0FBT0EsS0FBSyxDQUFDNGQsV0FBTixFQUFQO0FBQ0QsR0FISCxFQUlHblosSUFKSCxFQUZjLEdBT2QsQ0FBQzdELEdBQUcsQ0FBQ2dkLFdBQUosRUFBRCxDQVBKO0FBU0EsU0FDRStTLEdBQUcsSUFDSEEsR0FBRyxDQUFDaHZCLE1BQUosQ0FBWWd2QixHQUFELElBQ1RBLEdBQUcsQ0FBQ3JCLFFBQUosQ0FBYXhwQixJQUFiLENBQW1CNkksQ0FBRCxJQUNoQkEsQ0FBQyxDQUFDaVAsV0FBRixHQUFnQnRVLFFBQWhCLENBQXlCNnVCLE1BQU0sSUFBSUEsTUFBTSxDQUFDOXhCLElBQVAsQ0FBWSxHQUFaLENBQW5DLENBREYsQ0FERixDQUZGO0FBUUQsQ0FuQk07QUFxQkEsTUFBTSt4QixZQUFZLEdBQUcsQ0FBQzNVLEtBQUQsRUFBUTRVLElBQVIsS0FBaUI7QUFDM0M1dUIsRUFBQUEsT0FBTyxDQUFDNnVCLEdBQVIsQ0FBWUQsSUFBWjtBQUNBLE1BQUlyNEIsS0FBSyxHQUNQeWpCLEtBQUssSUFBSUEsS0FBSyxDQUFDM2QsSUFBTixDQUFZNm1CLE9BQUQsSUFBYXdCLE1BQU0sQ0FBQ3hCLE9BQU8sQ0FBQ3paLEVBQVQsQ0FBTixLQUF1QmliLE1BQU0sQ0FBQ2tLLElBQUksQ0FBQ25sQixFQUFOLENBQXJELENBRFg7QUFFQSxTQUFPbFQsS0FBUDtBQUNELENBTE07QUFPQSxNQUFNdTRCLFVBQVUsR0FBRyxDQUFDOVUsS0FBRCxFQUFRNFUsSUFBUixFQUFjaG5CLElBQWQsS0FBdUI7QUFDL0MsUUFBTW1uQixVQUFVLEdBQ2QvVSxLQUFLLENBQUN1TCxLQUFOLElBQ0F2TCxLQUFLLENBQUN1TCxLQUFOLENBQVlscEIsSUFBWixDQUFrQjZtQixPQUFELElBQWF3QixNQUFNLENBQUN4QixPQUFPLENBQUN6WixFQUFULENBQU4sS0FBdUJpYixNQUFNLENBQUNrSyxJQUFJLENBQUNubEIsRUFBTixDQUEzRCxDQUZGO0FBR0EsTUFBSWtNLE1BQU0sR0FBRyxFQUFiOztBQUVBLE1BQUlxRSxLQUFLLENBQUN1TCxLQUFWLEVBQWlCO0FBQ2YsUUFBSXdKLFVBQUosRUFBZ0I7QUFDZEEsTUFBQUEsVUFBVSxDQUFDaEosR0FBWCxHQUNFbmUsSUFBSSxLQUFLLEdBQVQsR0FBZ0JtbkIsVUFBVSxDQUFDaEosR0FBWCxJQUFrQixDQUFsQyxHQUF3Q2dKLFVBQVUsQ0FBQ2hKLEdBQVgsSUFBa0IsQ0FENUQ7QUFFQWdKLE1BQUFBLFVBQVUsQ0FBQ3pELFVBQVgsR0FDRTVHLE1BQU0sQ0FBQ3FLLFVBQVUsQ0FBQ2hKLEdBQVosQ0FBTixHQUF5QnJCLE1BQU0sQ0FBQ3FLLFVBQVUsQ0FBQ3BLLFNBQVosQ0FEakM7QUFFQW9KLE1BQUFBLDhEQUFlLENBQUMsZUFBRCxFQUFrQi9ULEtBQUssQ0FBQ3VMLEtBQXhCLENBQWY7QUFDQTVQLE1BQUFBLE1BQU0sbUNBQ0RxRSxLQURDO0FBRUp1TCxRQUFBQSxLQUFLLEVBQUUsQ0FBQyxHQUFHdkwsS0FBSyxDQUFDdUwsS0FBVjtBQUZILFFBQU47QUFJRCxLQVZELE1BVU87QUFDTHFKLE1BQUFBLElBQUksQ0FBQzdJLEdBQUwsR0FBVyxDQUFYO0FBQ0E2SSxNQUFBQSxJQUFJLENBQUN0RCxVQUFMLEdBQWtCNUcsTUFBTSxDQUFDa0ssSUFBSSxDQUFDakssU0FBTixDQUF4QjtBQUNBb0osTUFBQUEsOERBQWUsQ0FBQyxlQUFELEVBQWtCLENBQUMsR0FBRy9ULEtBQUssQ0FBQ3VMLEtBQVYsRUFBaUJxSixJQUFqQixDQUFsQixDQUFmO0FBQ0FqWixNQUFBQSxNQUFNLG1DQUNEcUUsS0FEQztBQUVKdUwsUUFBQUEsS0FBSyxFQUFFLENBQUMsR0FBR3ZMLEtBQUssQ0FBQ3VMLEtBQVYsRUFBaUJxSixJQUFqQjtBQUZILFFBQU47QUFJRDtBQUNGOztBQUNELFNBQU9qWixNQUFQO0FBQ0QsQ0E1Qk07Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkEsTUFBTW9ZLGVBQWUsR0FBRyxDQUFDN2IsSUFBRCxFQUFPOGMsS0FBUCxLQUFpQjtBQUM5Q0MsRUFBQUEsWUFBWSxDQUFDbFgsT0FBYixDQUFxQjdGLElBQXJCLEVBQTJCNVMsSUFBSSxDQUFDQyxTQUFMLENBQWV5dkIsS0FBZixDQUEzQjtBQUNELENBRk07QUFHQSxNQUFNbkIsZUFBZSxHQUFJM2IsSUFBRCxJQUFVO0FBQ3ZDLFFBQU1zRyxJQUFJLEdBQUd5VyxZQUFZLENBQUN4VSxPQUFiLENBQXFCdkksSUFBckIsQ0FBYjs7QUFDQSxNQUFJc0csSUFBSixFQUFVO0FBQ1IsV0FBT2xaLElBQUksQ0FBQ29iLEtBQUwsQ0FBV2xDLElBQVgsQ0FBUDtBQUNELEdBRkQsTUFFTztBQUNMeVcsSUFBQUEsWUFBWSxDQUFDbFgsT0FBYixDQUFxQjdGLElBQXJCLEVBQTJCNVMsSUFBSSxDQUFDQyxTQUFMLENBQWUsRUFBZixDQUEzQjtBQUNBLFdBQU8sRUFBUDtBQUNEO0FBQ0YsQ0FSTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLE1BQU11cUIsVUFBVSxHQUFHLENBQUMxSCxNQUFELEVBQVNwbkIsSUFBVCxFQUFlZ3NCLFFBQWYsS0FBNEI7QUFDcEQsV0FBU2hoQixDQUFULENBQVdrcEIsTUFBWCxFQUFtQjtBQUNqQixXQUFPQSxNQUFNLElBQUksQ0FBVixHQUFlLElBQUdBLE1BQU8sRUFBekIsR0FBNkJBLE1BQXBDO0FBQ0Q7O0FBQ0QsU0FBUSxXQUNObEksUUFBUSxJQUFJQSxRQUFRLENBQUNwdkIsTUFBckIsR0FBOEJvTyxDQUFDLENBQUNvYyxNQUFNLEdBQUdwbkIsSUFBVCxHQUFnQixDQUFqQixDQUEvQixHQUFxRCxJQUN0RCxJQUNDZ3NCLFFBQVEsSUFBSUEsUUFBUSxDQUFDcHZCLE1BQVQsR0FBa0IsQ0FBQ3dxQixNQUFNLEdBQUcsQ0FBVixJQUFlcG5CLElBQTdDLEdBQ0lnTCxDQUFDLENBQUMsQ0FBQ29jLE1BQU0sR0FBRyxDQUFWLElBQWVwbkIsSUFBaEIsQ0FETCxHQUVJZ0wsQ0FBQyxDQUFDZ2hCLFFBQVEsSUFBSUEsUUFBUSxDQUFDcHZCLE1BQXRCLENBQ047QUFDSCxVQUFVb08sQ0FBQyxDQUFDZ2hCLFFBQVEsSUFBSUEsUUFBUSxDQUFDcHZCLE1BQXRCLENBQThCLFVBUHZDO0FBUUQsQ0FaTTtBQWNBLE1BQU11M0IsV0FBVyxHQUFHLENBQUNuVixLQUFELEVBQVErUixPQUFSLEtBQW9CO0FBQzdDLFNBQU8vUixLQUFLLElBQUlBLEtBQUssQ0FBQ25hLFFBQU4sQ0FBZWtzQixPQUFmLENBQVQsR0FDSC9SLEtBQUssQ0FBQzloQixNQUFOLENBQWN1c0IsS0FBRCxJQUFXQSxLQUFLLEtBQUtzSCxPQUFsQyxDQURHLEdBRUgsQ0FBQyxHQUFHL1IsS0FBSixFQUFXK1IsT0FBWCxDQUZKO0FBR0QsQ0FKTTtBQU1BLE1BQU05RixhQUFhLEdBQUcsQ0FBQ21KLFNBQUQsRUFBWTc0QixLQUFaLEVBQW1CODRCLFlBQW5CLEtBQW9DO0FBQy9ELE1BQUlELFNBQVMsQ0FBQ3Z2QixRQUFWLENBQW1CdEosS0FBbkIsQ0FBSixFQUErQjtBQUM3Qjg0QixJQUFBQSxZQUFZLENBQUNELFNBQVMsQ0FBQ2wzQixNQUFWLENBQWtCa3FCLE1BQUQsSUFBWUEsTUFBTSxLQUFLN3JCLEtBQXhDLENBQUQsQ0FBWjtBQUNELEdBRkQsTUFFTztBQUNMODRCLElBQUFBLFlBQVksQ0FBQyxDQUFDLEdBQUdELFNBQUosRUFBZTc0QixLQUFmLENBQUQsQ0FBWjtBQUNEO0FBQ0YsQ0FOTTtBQVFBLE1BQU0rNEIsV0FBVyxHQUFHLENBQUMvNEIsS0FBRCxFQUFRZzVCLFFBQVIsS0FBcUI7QUFDOUMsUUFBTUMsa0JBQWtCLEdBQUdqNUIsS0FBSyxHQUFJQSxLQUFLLEdBQUdnNUIsUUFBVCxHQUFxQixHQUF4RDtBQUNBLFNBQU9DLGtCQUFrQixDQUFDNUssT0FBbkIsQ0FBMkIsQ0FBM0IsQ0FBUDtBQUNELENBSE07QUFLQSxNQUFNdmYsTUFBTSxHQUFHLE1BQU07QUFDMUIsTUFBSW9xQixNQUFNLEdBQUd6bUIsTUFBTSxDQUFDMG1CLE9BQXBCO0FBQ0EsUUFBTTlHLE1BQU0sR0FBR2xlLFFBQVEsQ0FBQ3NXLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBZjs7QUFDQSxNQUFJNEgsTUFBSixFQUFZO0FBQ1YsUUFBSTZHLE1BQU0sR0FBRyxHQUFiLEVBQWtCO0FBQ2hCN0csTUFBQUEsTUFBTSxDQUFDK0csU0FBUCxDQUFpQnZ4QixHQUFqQixDQUFxQixlQUFyQjtBQUNELEtBRkQsTUFFTztBQUNMd3FCLE1BQUFBLE1BQU0sQ0FBQytHLFNBQVAsQ0FBaUJDLE1BQWpCLENBQXdCLGVBQXhCO0FBQ0Q7QUFDRjtBQUNGLENBVk07QUFZQSxNQUFNN0YsTUFBTSxHQUFHLENBQUMzSCxNQUFELEVBQVMzWSxFQUFULEVBQWF6TyxJQUFiLEtBQXNCO0FBQzFDLE1BQUlvbkIsTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDaEIsV0FBTzNZLEVBQUUsR0FBRyxDQUFMLElBQVUsQ0FBVixJQUFlQSxFQUFFLEdBQUcsQ0FBTCxJQUFVek8sSUFBekIsR0FBZ0MsU0FBaEMsR0FBNEMsUUFBbkQ7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPeU8sRUFBRSxHQUFHLENBQUwsR0FBUzJZLE1BQU0sR0FBR3BuQixJQUFsQixJQUEwQnlPLEVBQUUsR0FBRyxDQUFMLElBQVUsQ0FBQzJZLE1BQU0sR0FBRyxDQUFWLElBQWVwbkIsSUFBbkQsR0FDSCxTQURHLEdBRUgsUUFGSjtBQUdEO0FBQ0YsQ0FSTTtBQVVBLE1BQU1xdUIsU0FBUyxHQUFHLE1BQU07QUFDN0IsTUFBSXdHLENBQUMsR0FBR25sQixRQUFRLENBQUNvbEIsZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQVI7O0FBQ0EsT0FBSyxJQUFJcDRCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdtNEIsQ0FBQyxDQUFDajRCLE1BQXRCLEVBQThCRixDQUFDLEVBQS9CLEVBQW1DO0FBQ2pDLFVBQU11WixPQUFPLEdBQUc0ZSxDQUFDLENBQUNuNEIsQ0FBRCxDQUFqQjtBQUNBdVosSUFBQUEsT0FBTyxDQUFDaFQsS0FBUixDQUFjRSxlQUFkLEdBQWlDLE9BQU04UyxPQUFPLENBQUM4ZSxZQUFSLENBQ3JDLGlCQURxQyxDQUVyQyxHQUZGLENBRmlDLENBS2pDO0FBQ0Q7QUFDRixDQVRNO0FBV0EsTUFBTXpFLFVBQVUsR0FBSTBELEtBQUQsSUFBVztBQUNuQyxTQUNFQSxLQUFLLElBQ0xBLEtBQUssQ0FDRjd5QixHQURILENBQ1F5eUIsSUFBRCxJQUFVQSxJQUFJLENBQUN0RCxVQUR0QixFQUVHMEUsTUFGSCxDQUVVLENBQUNDLElBQUQsRUFBTzlRLElBQVAsS0FBZ0I4USxJQUFJLEdBQUc5USxJQUZqQyxFQUV1QyxDQUZ2QyxFQUdHeUYsT0FISCxDQUdXLENBSFgsQ0FGRjtBQU9ELENBUk07Ozs7Ozs7Ozs7Ozs7OztBQ2xFUCxpRUFBZSxDQUFDLHFRQUFxUTs7Ozs7Ozs7Ozs7Ozs7O0FDQXJSLGlFQUFlLENBQUMsbVBBQW1QOzs7Ozs7Ozs7Ozs7Ozs7QUNBblEsaUVBQWUsQ0FBQywrUEFBK1A7Ozs7Ozs7Ozs7Ozs7OztBQ0EvUSxpRUFBZSxDQUFDLGlRQUFpUTs7Ozs7Ozs7OztBQ0FqUiwyR0FBK0M7Ozs7Ozs7Ozs7O0FDQS9DLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2QixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osWUFBWTtBQUNaLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekIsaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsY0FBYztBQUNkLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCLGNBQWM7QUFDZCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2pPYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUMsQ0FBQztBQUNGLEVBQUUsa0pBQXlEO0FBQzNEOzs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL3Z1ZS1yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9wYWdlcy9zaG9wL2NvbC0zLmpzIiwid2VicGFjazovL3Z1ZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL1BhZ2dpbmF0aW9uLmpzIiwid2VicGFjazovL3Z1ZS1yZWFjdC8uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3QvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0L1Byb2R1Y3RMaXN0Vmlldy5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0L1Byb2R1Y3RNb2RhbC5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0L2ZpbHRlci9Db2xvckZpbHRlci5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0L2ZpbHRlci9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdC9maWx0ZXIvRmlsdGVyQnlDaGVja0JveC5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0L2ZpbHRlci9GaWx0ZXJCeVRhZ3MuanMiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdC9maWx0ZXIvUHJpY2VGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0Ly4vc3JjL2xheW91dHMvQ29tcGFyZUljb24uanMiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0Ly4vc3JjL2xheW91dHMvRm9vdGVyLmpzIiwid2VicGFjazovL3Z1ZS1yZWFjdC8uL3NyYy9sYXlvdXRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvbGF5b3V0cy9IZWFkZXIyLmpzIiwid2VicGFjazovL3Z1ZS1yZWFjdC8uL3NyYy9sYXlvdXRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvbGF5b3V0cy9QYWdlVGl0bGUuanMiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0Ly4vc3JjL2xheW91dHMvU2hvcC5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvbGF5b3V0cy9XaXNoTGlzdEljb24uanMiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0Ly4vc3JjL2xheW91dHMvaGVhZGVyL0NhdGFnb3J5LmpzIiwid2VicGFjazovL3Z1ZS1yZWFjdC8uL3NyYy9sYXlvdXRzL2hlYWRlci9EYXNrdG9wSGVhZGVyMS5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvbGF5b3V0cy9oZWFkZXIvRGFza3RvcEhlYWRlcjIuanMiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0Ly4vc3JjL2xheW91dHMvaGVhZGVyL01vYmlsZUhlYWRlci5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvbGF5b3V0cy9oZWFkZXIvU2VhcmNoVHJpZ2dlci5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvbGF5b3V0cy9oZWFkZXIvU2hvcENhcnQuanMiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0Ly4vc3JjL3JlZHV4L2FjdGlvbi9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0Ly4vc3JjL3JlZHV4L2FjdGlvbi9wcm9kdWN0LmpzIiwid2VicGFjazovL3Z1ZS1yZWFjdC8uL3NyYy9yZWR1eC9hY3Rpb24vdHlwZS5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvcmVkdXgvYWN0aW9uL3V0aWxpcy5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9zcmMvdXRpbHMvZmF0Y2hEYXRhLmpzIiwid2VicGFjazovL3Z1ZS1yZWFjdC8uL3NyYy91dGlscy9maWx0ZXJQcm9kdWN0LmpzIiwid2VicGFjazovL3Z1ZS1yZWFjdC8uL3NyYy91dGlscy9sb2NhbHN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0Ly4vc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL3Z1ZS1yZWFjdC8uL3B1YmxpYy9pbWcvYmFubmVyL2ZvdG9Gb290ZXIucG5nIiwid2VicGFjazovL3Z1ZS1yZWFjdC8uL3B1YmxpYy9pbWcvaWNvbi90aW1lLnBuZyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9wdWJsaWMvaW1nL2xvZ28vbG9nby13aGl0ZS5wbmciLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0Ly4vcHVibGljL2ltZy9sb2dvL2xvZ29Gb290ZXIucG5nIiwid2VicGFjazovL3Z1ZS1yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL3Z1ZS1yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly92dWUtcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly92dWUtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL3Z1ZS1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly92dWUtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovL3Z1ZS1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly92dWUtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3Z1ZS1yZWFjdC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly92dWUtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly92dWUtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIiIsIndlYnBhY2s6Ly92dWUtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly92dWUtcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3Z1ZS1yZWFjdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtaG90LXRvYXN0XCIiLCJ3ZWJwYWNrOi8vdnVlLXJlYWN0L2V4dGVybmFsIFwicmVhY3QtaW5wdXQtcmFuZ2VcIiIsIndlYnBhY2s6Ly92dWUtcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3Z1ZS1yZWFjdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3Z1ZS1yZWFjdC9pZ25vcmVkfEM6XFxXZWIgU0lJTVxcdnVlXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW1hZ2UxO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZFwiKSk7XG52YXIgX3RvQmFzZTY0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdG8tYmFzZS02NFwiKTtcbnZhciBfaW1hZ2VDb25maWcgPSByZXF1aXJlKFwiLi4vc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbihzeW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0ge1xuICAgIH07XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5jb25zdCBsb2FkZWRJbWFnZVVSTHMgPSBuZXcgU2V0KCk7XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZTtcbn1cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gW1xuICAgICdsYXp5JyxcbiAgICAnZWFnZXInLFxuICAgIHVuZGVmaW5lZFxuXTtcbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwKFtcbiAgICBbXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgZGVmYXVsdExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnaW1naXgnLFxuICAgICAgICBpbWdpeExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY2xvdWRpbmFyeScsXG4gICAgICAgIGNsb3VkaW5hcnlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2FrYW1haScsXG4gICAgICAgIGFrYW1haUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY3VzdG9tJyxcbiAgICAgICAgY3VzdG9tTG9hZGVyXG4gICAgXSwgXG5dKTtcbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICAgJ2ZpbGwnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ludHJpbnNpYycsXG4gICAgJ3Jlc3BvbnNpdmUnLFxuICAgIHVuZGVmaW5lZCwgXG5dO1xuZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYykge1xuICAgIHJldHVybiBzcmMuZGVmYXVsdCAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5zcmMgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYykge1xuICAgIHJldHVybiB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiAoaXNTdGF0aWNSZXF1aXJlKHNyYykgfHwgaXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7XG59XG5jb25zdCB7IGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyAsIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMgLCBsb2FkZXI6IGNvbmZpZ0xvYWRlciAsIHBhdGg6IGNvbmZpZ1BhdGggLCBkb21haW5zOiBjb25maWdEb21haW5zICwgIH0gPSBwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyB8fCBfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0O1xuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFtcbiAgICAuLi5jb25maWdEZXZpY2VTaXplcyxcbiAgICAuLi5jb25maWdJbWFnZVNpemVzXG5dO1xuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuYWxsU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKSB7XG4gICAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICAgICAgY29uc3Qgdmlld3BvcnRXaWR0aFJlID0gLyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdO1xuICAgICAgICBmb3IobGV0IG1hdGNoOyBtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTsgbWF0Y2gpe1xuICAgICAgICAgICAgcGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcigocyk9PnMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHwgbGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGhzID0gW1xuICAgICAgICAuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgICBbXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi8gXG4gICAgICAgIF0ubWFwKCh3KT0+YWxsU2l6ZXMuZmluZCgocCk9PnAgPj0gd1xuICAgICAgICAgICAgKSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgICApKSwgXG4gICAgXTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHMsXG4gICAgICAgIGtpbmQ6ICd4J1xuICAgIH07XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHsgc3JjICwgdW5vcHRpbWl6ZWQgLCBsYXlvdXQgLCB3aWR0aCAsIHF1YWxpdHkgLCBzaXplcyAsIGxvYWRlciAgfSkge1xuICAgIGlmICh1bm9wdGltaXplZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgd2lkdGhzICwga2luZCAgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcyk7XG4gICAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgICAgICBzcmNTZXQ6IHdpZHRocy5tYXAoKHcsIGkpPT5gJHtsb2FkZXIoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3XG4gICAgICAgICAgICB9KX0gJHtraW5kID09PSAndycgPyB3IDogaSArIDF9JHtraW5kfWBcbiAgICAgICAgKS5qb2luKCcsICcpLFxuICAgICAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAgICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAgICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgICAgICBzcmM6IGxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoc1tsYXN0XVxuICAgICAgICB9KVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRJbnQoeCkge1xuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcykge1xuICAgIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpO1xuICAgIGlmIChsb2FkKSB7XG4gICAgICAgIHJldHVybiBsb2FkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgcm9vdDogY29uZmlnUGF0aFxuICAgICAgICB9LCBsb2FkZXJQcm9wcykpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7XG59XG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gaGFuZGxlTG9hZGluZyhpbWcsIHNyYywgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgaWYgKCFpbWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVMb2FkID0gKCk9PntcbiAgICAgICAgaWYgKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSAnZGVjb2RlJyBpbiBpbWcgPyBpbWcuZGVjb2RlKCkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIHAuY2F0Y2goKCk9PntcbiAgICAgICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuZmlsdGVyID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvYWRlZEltYWdlVVJMcy5hZGQoc3JjKTtcbiAgICAgICAgICAgICAgICBpZiAob25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBuYXR1cmFsV2lkdGggLCBuYXR1cmFsSGVpZ2h0ICB9ID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXNzIGJhY2sgcmVhZC1vbmx5IHByaW1pdGl2ZSB2YWx1ZXMgYnV0IG5vdCB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5kZXJseWluZyBET00gZWxlbWVudCBiZWNhdXNlIGl0IGNvdWxkIGJlIG1pc3VzZWQuXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZGluZ0NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpbWcuY29tcGxldGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3JcbiAgICAgICAgLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbiAgICAgICAgaGFuZGxlTG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGltZy5vbmxvYWQgPSBoYW5kbGVMb2FkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIEltYWdlMShfcGFyYW0pIHtcbiAgICB2YXIgeyBzcmMgLCBzaXplcyAsIHVub3B0aW1pemVkID1mYWxzZSAsIHByaW9yaXR5ID1mYWxzZSAsIGxvYWRpbmcgLCBsYXp5Qm91bmRhcnkgPScyMDBweCcgLCBjbGFzc05hbWUgLCBxdWFsaXR5ICwgd2lkdGggLCBoZWlnaHQgLCBvYmplY3RGaXQgLCBvYmplY3RQb3NpdGlvbiAsIG9uTG9hZGluZ0NvbXBsZXRlICwgbG9hZGVyID1kZWZhdWx0SW1hZ2VMb2FkZXIgLCBwbGFjZWhvbGRlciA9J2VtcHR5JyAsIGJsdXJEYXRhVVJMICB9ID0gX3BhcmFtLCBhbGwgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3BhcmFtLCBbXCJzcmNcIiwgXCJzaXplc1wiLCBcInVub3B0aW1pemVkXCIsIFwicHJpb3JpdHlcIiwgXCJsb2FkaW5nXCIsIFwibGF6eUJvdW5kYXJ5XCIsIFwiY2xhc3NOYW1lXCIsIFwicXVhbGl0eVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwib2JqZWN0Rml0XCIsIFwib2JqZWN0UG9zaXRpb25cIiwgXCJvbkxvYWRpbmdDb21wbGV0ZVwiLCBcImxvYWRlclwiLCBcInBsYWNlaG9sZGVyXCIsIFwiYmx1ckRhdGFVUkxcIl0pO1xuICAgIGxldCByZXN0ID0gYWxsO1xuICAgIGxldCBsYXlvdXQgPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnO1xuICAgIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXQ7XG4gICAgICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICAgICAgZGVsZXRlIHJlc3RbJ2xheW91dCddO1xuICAgIH1cbiAgICBsZXQgc3RhdGljU3JjID0gJyc7XG4gICAgaWYgKGlzU3RhdGljSW1wb3J0KHNyYykpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljSW1hZ2VEYXRhID0gaXNTdGF0aWNSZXF1aXJlKHNyYykgPyBzcmMuZGVmYXVsdCA6IHNyYztcbiAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgYmx1ckRhdGFVUkwgPSBibHVyRGF0YVVSTCB8fCBzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7XG4gICAgICAgIHN0YXRpY1NyYyA9IHN0YXRpY0ltYWdlRGF0YS5zcmM7XG4gICAgICAgIGlmICghbGF5b3V0IHx8IGxheW91dCAhPT0gJ2ZpbGwnKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgc3RhdGljSW1hZ2VEYXRhLmhlaWdodDtcbiAgICAgICAgICAgIHdpZHRoID0gd2lkdGggfHwgc3RhdGljSW1hZ2VEYXRhLndpZHRoO1xuICAgICAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0IHx8ICFzdGF0aWNJbWFnZURhdGEud2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNyYyA9IHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnID8gc3JjIDogc3RhdGljU3JjO1xuICAgIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKTtcbiAgICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KTtcbiAgICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpO1xuICAgIGxldCBpc0xhenkgPSAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgICAgICB1bm9wdGltaXplZCA9IHRydWU7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9hZGVkSW1hZ2VVUkxzLmhhcyhzcmMpKSB7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTih3aWR0aEludCkgfHwgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4oaGVpZ2h0SW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmICh3aWR0aCB8fCBoZWlnaHQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgYW5kIFwibGF5b3V0PSdmaWxsJ1wiIGhhcyB1bnVzZWQgcHJvcGVydGllcyBhc3NpZ25lZC4gUGxlYXNlIHJlbW92ZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgIGlmIChsYXlvdXQgIT09ICdmaWxsJyAmJiAod2lkdGhJbnQgfHwgMCkgKiAoaGVpZ2h0SW50IHx8IDApIDwgMTYwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWJsdXJEYXRhVVJMKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgVkFMSURfQkxVUl9FWFQgPSBbXG4gICAgICAgICAgICAgICAgICAgICdqcGVnJyxcbiAgICAgICAgICAgICAgICAgICAgJ3BuZycsXG4gICAgICAgICAgICAgICAgICAgICd3ZWJwJ1xuICAgICAgICAgICAgICAgIF0gLy8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgncmVmJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJyZWZcIiBwcm9wZXJ0eS4gQ29uc2lkZXIgdXNpbmcgdGhlIFwib25Mb2FkaW5nQ29tcGxldGVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnc3R5bGUnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInN0eWxlXCIgcHJvcGVydHkuIFBsZWFzZSB1c2UgdGhlIFwiY2xhc3NOYW1lXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxMDA7XG4gICAgICAgIGlmICghdW5vcHRpbWl6ZWQgJiYgIWxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB3aWR0aDogcmFuZCxcbiAgICAgICAgICAgIHF1YWxpdHk6IDc1XG4gICAgICAgIH0pLmluY2x1ZGVzKHJhbmQudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYSBcImxvYWRlclwiIHByb3BlcnR5IHRoYXQgZG9lcyBub3QgaW1wbGVtZW50IHdpZHRoLiBQbGVhc2UgaW1wbGVtZW50IGl0IG9yIHVzZSB0aGUgXCJ1bm9wdGltaXplZFwiIHByb3BlcnR5IGluc3RlYWQuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXItd2lkdGhgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiBsYXp5Qm91bmRhcnksXG4gICAgICAgIGRpc2FibGVkOiAhaXNMYXp5XG4gICAgfSk7XG4gICAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkO1xuICAgIGxldCB3cmFwcGVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3ZnO1xuICAgIGxldCBpbWdTdHlsZSA9IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG1heEhlaWdodDogJzEwMCUnLFxuICAgICAgICBvYmplY3RGaXQsXG4gICAgICAgIG9iamVjdFBvc2l0aW9uXG4gICAgfTtcbiAgICBjb25zdCBibHVyU3R5bGUgPSBwbGFjZWhvbGRlciA9PT0gJ2JsdXInID8ge1xuICAgICAgICBmaWx0ZXI6ICdibHVyKDIwcHgpJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IG9iamVjdEZpdCB8fCAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWAsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogb2JqZWN0UG9zaXRpb24gfHwgJzAlIDAlJ1xuICAgIH0gOiB7XG4gICAgfTtcbiAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICAgICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludDtcbiAgICAgICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgO1xuICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBpbWdBdHRyaWJ1dGVzID0ge1xuICAgICAgICBzcmM6ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgIH07XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgIGxvYWRlclxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHNyY1N0cmluZyA9IHNyYztcbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHdyYXBwZXJTdHlsZVxuICAgIH0sIHNpemVyU3R5bGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogc2l6ZXJTdHlsZVxuICAgIH0sIHNpemVyU3ZnID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICBwYWRkaW5nOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgICAgICBzcmM6IGBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsIF90b0Jhc2U2NCkudG9CYXNlNjQoc2l6ZXJTdmcpfWBcbiAgICB9KSA6IG51bGwpIDogbnVsbCwgIWlzVmlzaWJsZSAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgIHNyYyxcbiAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgIGxheW91dCxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICBzaXplcyxcbiAgICAgICAgbG9hZGVyXG4gICAgfSksIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogdHJ1ZSxcbiAgICAgICAgc3R5bGU6IGltZ1N0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgIH0pKSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBpbWdBdHRyaWJ1dGVzLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IHRydWUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICByZWY6IChpbWcpPT57XG4gICAgICAgICAgICBzZXRSZWYoaW1nKTtcbiAgICAgICAgICAgIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmNTdHJpbmcsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgfSwgaW1nU3R5bGUsIGJsdXJTdHlsZSlcbiAgICB9KSksIHByaW9yaXR5ID8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAvL1xuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAga2V5OiAnX19uaW1nLScgKyBpbWdBdHRyaWJ1dGVzLnNyYyArIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICsgaW1nQXR0cmlidXRlcy5zaXplcyxcbiAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgYXM6IFwiaW1hZ2VcIixcbiAgICAgICAgaHJlZjogaW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyYyxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc3Jjc2V0OiBpbWdBdHRyaWJ1dGVzLnNyY1NldCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzaXplczogaW1nQXR0cmlidXRlcy5zaXplc1xuICAgIH0pKSA6IG51bGwpKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpIHtcbiAgICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmM7XG59XG5mdW5jdGlvbiBpbWdpeExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2F1dG89Zm9ybWF0JmZpdD1tYXgmdz0zMDBcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX1gKTtcbiAgICBjb25zdCBwYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zO1xuICAgIHBhcmFtcy5zZXQoJ2F1dG8nLCBwYXJhbXMuZ2V0KCdhdXRvJykgfHwgJ2Zvcm1hdCcpO1xuICAgIHBhcmFtcy5zZXQoJ2ZpdCcsIHBhcmFtcy5nZXQoJ2ZpdCcpIHx8ICdtYXgnKTtcbiAgICBwYXJhbXMuc2V0KCd3JywgcGFyYW1zLmdldCgndycpIHx8IHdpZHRoLnRvU3RyaW5nKCkpO1xuICAgIGlmIChxdWFsaXR5KSB7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3EnLCBxdWFsaXR5LnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsLmhyZWY7XG59XG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggIH0pIHtcbiAgICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDtcbn1cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgICdmX2F1dG8nLFxuICAgICAgICAnY19saW1pdCcsXG4gICAgICAgICd3XycgKyB3aWR0aCxcbiAgICAgICAgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJylcbiAgICBdO1xuICAgIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nO1xuICAgIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDtcbn1cbmZ1bmN0aW9uIGN1c3RvbUxvYWRlcih7IHNyYyAgfSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBtaXNzaW5nIFwibG9hZGVyXCIgcHJvcC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlcmApO1xufVxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW107XG4gICAgICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgICAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtcbiAgICAgICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO1xuICAgICAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgICAgICAgbGV0IHBhcnNlZFNyYztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWA7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHByZWZldGNoZWQgPSB7XG59O1xuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XG59XG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgICBzaGFsbG93LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNjcm9sbFxuICAgIH0pO1xufVxuZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBocmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBhczogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBwcm9wcy5ocmVmLFxuICAgICAgICBwcm9wcy5hc1xuICAgIF0pO1xuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcbiAgICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcbiAgICB9KTtcbiAgICBjb25zdCBzZXRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XG4gICAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgY2hpbGRSZWYsXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxuICAgIF0pO1xuICAgIF9yZWFjdC5kZWZhdWx0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldO1xuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogY3VyTG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgYXMsXG4gICAgICAgIGhyZWYsXG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgICByZWY6IHNldFJlZixcbiAgICAgICAgb25DbGljazogKGUpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChwcm9wcy5wYXNzSHJlZiB8fCBjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSB7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcbiAgICB9XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XG59XG52YXIgX2RlZmF1bHQgPSBMaW5rO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufVxuY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0ggPyAocGF0aCk9PntcbiAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO1xuICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nO1xuICAgIH1cbn0gOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFya0Fzc2V0RXJyb3IgPSBtYXJrQXNzZXRFcnJvcjtcbmV4cG9ydHMuaXNBc3NldEVycm9yID0gaXNBc3NldEVycm9yO1xuZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0ID0gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtcbmV4cG9ydHMuY3JlYXRlUm91dGVMb2FkZXIgPSBjcmVhdGVSb3V0ZUxvYWRlcjtcbnZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwO1xuZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksIG1hcCwgZ2VuZXJhdG9yKSB7XG4gICAgbGV0IGVudHJ5ID0gbWFwLmdldChrZXkpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5mdXR1cmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7XG4gICAgfVxuICAgIGxldCByZXNvbHZlcjtcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIHJlc29sdmVyID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBtYXAuc2V0KGtleSwgZW50cnkgPSB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmVyLFxuICAgICAgICBmdXR1cmU6IHByb21cbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yID8gZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpPT4ocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSlcbiAgICApIDogcHJvbTtcbn1cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspIHtcbiAgICB0cnkge1xuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICByZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgfHwgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBjYW5QcmVmZXRjaCA9IGhhc1ByZWZldGNoKCk7XG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLCBhcywgbGluaykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopPT57XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICAgICAgaWYgKGFzKSBsaW5rLmFzID0gYXM7XG4gICAgICAgIGxpbmsucmVsID0gYHByZWZldGNoYDtcbiAgICAgICAgbGluay5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIGxpbmsub25sb2FkID0gcmVzO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSByZWo7XG4gICAgICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG59XG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7XG59XG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLCBzY3JpcHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcbiAgICAgICAgO1xuICAgICAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAgICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG4vLyBXZSB3YWl0IGZvciBwYWdlcyB0byBiZSBidWlsdCBpbiBkZXYgYmVmb3JlIHdlIHN0YXJ0IHRoZSByb3V0ZSB0cmFuc2l0aW9uXG4vLyB0aW1lb3V0IHRvIHByZXZlbnQgYW4gdW4tbmVjZXNzYXJ5IGhhcmQgbmF2aWdhdGlvbiBpbiBkZXZlbG9wbWVudC5cbmxldCBkZXZCdWlsZFByb21pc2U7XG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLCBtcywgZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcC50aGVuKChyKT0+e1xuICAgICAgICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cbiAgICAgICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIChkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSB7XG4gICAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgfVxuICAgIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO1xuICAgICAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKT0+e1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7XG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgKyBlbmNvZGVVUkkoKDAsIF9nZXRBc3NldFBhdGhGcm9tUm91dGUpLmRlZmF1bHQocm91dGUsICcuanMnKSksIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgICAgICAgIGNzczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpPT57XG4gICAgICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoKGVudHJ5KT0+YXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuanMnKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCkge1xuICAgIGNvbnN0IGVudHJ5cG9pbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgc3R5bGVTaGVldHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgcm91dGVzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpIHtcbiAgICAgICAgbGV0IHByb20gPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgcHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKSB7XG4gICAgICAgIGxldCBwcm9tID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGVTaGVldHMuc2V0KGhyZWYsIHByb20gPSBmZXRjaChocmVmKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdoZW5FbnRyeXBvaW50IChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRyeXBvaW50IChyb3V0ZSwgZXhlY3V0ZSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oKGZuKT0+Zm4oKVxuICAgICAgICAgICAgKS50aGVuKChleHBvcnRzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICwgKGVycik9Pih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS50aGVuKChpbnB1dCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpO1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSb3V0ZSAocm91dGUsIHByZWZldGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgcm91dGVzLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKHsgc2NyaXB0cyAsIGNzcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSkgPyBbXSA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSwgXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpPT4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocm91dGVGaWxlc1Byb21pc2UsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHsgZW50cnlwb2ludCAsIHN0eWxlcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeXBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXM7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZldGNoIChyb3V0ZSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgICAgICAgbGV0IGNuO1xuICAgICAgICAgICAgaWYgKGNuID0gbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKG91dHB1dCk9PlByb21pc2UuYWxsKGNhblByZWZldGNoID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpPT5wcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKVxuICAgICAgICAgICAgICAgICkgOiBbXSlcbiAgICAgICAgICAgICkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aXRoUm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xuZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2UgPSBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xudmFyIF9yb3V0ZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHRcIik7XG52YXIgX3dpdGhSb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHNpbmdsZXRvblJvdXRlciA9IHtcbiAgICByb3V0ZXI6IG51bGwsXG4gICAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICAgIHJlYWR5IChjYikge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncm91dGUnLFxuICAgICdxdWVyeScsXG4gICAgJ2FzUGF0aCcsXG4gICAgJ2NvbXBvbmVudHMnLFxuICAgICdpc0ZhbGxiYWNrJyxcbiAgICAnYmFzZVBhdGgnLFxuICAgICdsb2NhbGUnLFxuICAgICdsb2NhbGVzJyxcbiAgICAnZGVmYXVsdExvY2FsZScsXG4gICAgJ2lzUmVhZHknLFxuICAgICdpc1ByZXZpZXcnLFxuICAgICdpc0xvY2FsZURvbWFpbicsXG4gICAgJ2RvbWFpbkxvY2FsZXMnLCBcbl07XG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAgICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBcbl07XG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAgICdwdXNoJyxcbiAgICAncmVwbGFjZScsXG4gICAgJ3JlbG9hZCcsXG4gICAgJ2JhY2snLFxuICAgICdwcmVmZXRjaCcsXG4gICAgJ2JlZm9yZVBvcFN0YXRlJywgXG5dO1xuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgICBnZXQgKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICB9XG59KTtcbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7XG4gICAgfTtcbn0pO1xucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e1xuICAgICAgICBfcm91dGVyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7XG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xuICAgICAgICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcbiAgICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbnZhciBfZGVmYXVsdCA9IHNpbmdsZXRvblJvdXRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXG4gICAgKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcbiAgICBjb25zdCBfcm91dGVyMSA9IHJvdXRlcjtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe1xuICAgICAgICBpZiAodHlwZW9mIF9yb3V0ZXIxW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyMVtwcm9wZXJ0eV0pID8gW10gOiB7XG4gICAgICAgICAgICB9LCBfcm91dGVyMVtwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyMVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIF9yb3V0ZXIxW2ZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcykge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHJvdXRlcjogKDAsIF9yb3V0ZXIpLnVzZVJvdXRlcigpXG4gICAgICAgIH0sIHByb3BzKSkpO1xuICAgIH1cbiAgICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgV2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xuICAgICAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RG9tYWluTG9jYWxlID0gZ2V0RG9tYWluTG9jYWxlO1xuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XG5leHBvcnRzLmRlbExvY2FsZSA9IGRlbExvY2FsZTtcbmV4cG9ydHMuaGFzQmFzZVBhdGggPSBoYXNCYXNlUGF0aDtcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmV4cG9ydHMuaXNMb2NhbFVSTCA9IGlzTG9jYWxVUkw7XG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xuZXhwb3J0cy5yZXNvbHZlSHJlZiA9IHJlc29sdmVIcmVmO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XG52YXIgX3JvdXRlTG9hZGVyID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7XG52YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcbnZhciBfbWl0dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbnZhciBfcGFyc2VSZWxhdGl2ZVVybCA9IHJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTtcbnZhciBfcXVlcnlzdHJpbmcgPSByZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTtcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcbnZhciBfcm91dGVNYXRjaGVyID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbnZhciBfcm91dGVSZWdleCA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTtcbn1cbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggPT09ICcvJyA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KSA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWAgOiBwYXRoO1xufVxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcbiAgICAgICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRoIHx8ICcnfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXIgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fCBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKSA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICsgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKTtcbn1cbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKTtcbn1cbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcbiAgICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKSByZXR1cm4gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICAgICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XG4gICAgICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnO1xuICAgIGNvbnN0IGR5bmFtaWNSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XG4gICAgY29uc3QgZHluYW1pY01hdGNoZXMgPSAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8IC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeTtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlO1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xuICAgIGlmICghcGFyYW1zLmV2ZXJ5KChwYXJhbSk9PntcbiAgICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnO1xuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XG4gICAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XG4gICAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJiAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID0gaW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCwgcmVwZWF0ID8gdmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgKS5qb2luKCcvJykgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSB8fCAnLycpO1xuICAgIH0pKSB7XG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbiAgICAgICAgO1xuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSB7XG4gICAgY29uc3QgZmlsdGVyZWRRdWVyeSA9IHtcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlciwgaHJlZiwgcmVzb2x2ZUFzKSB7XG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgICBsZXQgYmFzZTtcbiAgICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZik7XG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxuICAgIC8vIGludmFsaWQgYW5kIHdpbGwgbmV2ZXIgbWF0Y2ggYSBOZXh0LmpzIHBhZ2UvZmlsZVxuICAgIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKTtcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/Jyk7XG4gICAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSAoMCwgX3V0aWxzKS5ub3JtYWxpemVSZXBlYXRlZFNsYXNoZXModXJsQXNTdHJpbmdOb1Byb3RvKTtcbiAgICAgICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICAgIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSwgJ2h0dHA6Ly9uJyk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgICAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xuICAgICAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJztcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiYgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmIHJlc29sdmVBcykge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCAsIHBhcmFtcyAgfSA9IGludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsIGZpbmFsVXJsLnBhdGhuYW1lLCBxdWVyeSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKSA6IGZpbmFsVXJsLmhyZWY7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKSB7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XG59XG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLCB1cmwsIGFzKSB7XG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSk7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcbiAgICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcztcbiAgICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxuICAgIH07XG59XG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKCgwLCBfZGVub3JtYWxpemVQYWdlUGF0aCkuZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSkpO1xuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICB9XG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICBwYWdlcy5zb21lKChwYWdlKT0+e1xuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lID0gcGFnZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcbn1cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmICEhZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHYgPSAnX19uZXh0JztcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgfVxufSgpO1xuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtcbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xuICAgIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gICAgICAgIHRoaXMuc2RyID0ge1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9pZHggPSAwO1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xuICAgICAgICAgICAgY29uc3QgeyB1cmwgLCBhczogYXMxICwgb3B0aW9ucyAsIGlkeCAgfSA9IHN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2Uodik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkeCA9IGlkeDtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhczEsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lMTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5MTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPSAoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGF0aG5hbWUxKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3O1xuICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzMS5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhczEgIT09IHBhdGhuYW1lMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi8gYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBjaGFuZ2UobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zLCBmb3JjZWRTY3JvbGwpIHtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCBvcHRpb25zLl9oIHx8IG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmO1xuICAgICAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgICAgIGlmIChvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZMb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgICAgICAgICAgaWYgKCFkaWROYXZpZ2F0ZSAmJiBkZXRlY3RlZERvbWFpbiAmJiB0aGlzLmlzTG9jYWxlRG9tYWluICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLycpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgIGlmIChfdXRpbHMuU1QpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzaGFsbG93ID1mYWxzZSAgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7XG4gICAgICAgICAgICBzaGFsbG93XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSkpO1xuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzO1xuICAgICAgICBsZXQgbG9jYWxlQ2hhbmdlID0gcHJldkxvY2FsZSAhPT0gdGhpcy5sb2NhbGU7XG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gcGFyc2VkO1xuICAgICAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgICAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgICAgICBsZXQgcGFnZXMsIHJld3JpdGVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAgICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzO1xuICAgICAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAgICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICAgICAgcGF0aG5hbWUxID0gcGF0aG5hbWUxID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZTEpKSA6IHBhdGhuYW1lMTtcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUxLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKTtcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZSA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5MSkgOiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcigocGFyYW0pPT4hcXVlcnkxW3BhcmFtXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlID8gYEludGVycG9sYXRpbmcgaHJlZmAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICsgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZSA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGUgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCcgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIH0sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkxLCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnkxLCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICAgICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCAsIGFzOiBuZXdBcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLCBub3RGb3VuZFJvdXRlLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFsbG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPSBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XG4gICAgICAgICAgICB2YXIgX3Njcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IChfc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwpICE9PSBudWxsICYmIF9zY3JvbGwgIT09IHZvaWQgMCA/IF9zY3JvbGwgOiAhaXNWYWxpZFNoYWxsb3dSb3V0ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGNsZWFuZWRBcywgcm91dGVJbmZvLCBmb3JjZWRTY3JvbGwgIT09IG51bGwgJiYgZm9yY2VkU2Nyb2xsICE9PSB2b2lkIDAgPyBmb3JjZWRTY3JvbGwgOiByZXNldFNjcm9sbCkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGU7XG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIGlmIChlcnIxLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgKDAsIF91dGlscykuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcbiAgICAgICAgICAgIH0sIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudDE7XG4gICAgICAgICAgICBsZXQgc3R5bGVTaGVldHM7XG4gICAgICAgICAgICBsZXQgcHJvcHM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudDEgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzdHlsZVNoZWV0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAoeyBwYWdlOiBDb21wb25lbnQxICwgc3R5bGVTaGVldHMgIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0ge1xuICAgICAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm8gPyB1bmRlZmluZWQgOiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQ29tcG9uZW50MSAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50MSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhSHJlZjtcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgIH0pLCByZXNvbHZlZEFzLCBfX05fU1NHLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbiAgICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICAgICAgYXNQYXRoID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBsZXQgcmV3cml0ZXM7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xuICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzU3NnID8gdGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLCByZXNvbHZlZEFzLCB0cnVlLCB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiB0aGlzLmxvY2FsZSkpIDogZmFsc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2xjID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVycjIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXJyMik9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAxICB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAxKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhBcHAxLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LCByZXNldFNjcm9sbCk7XG4gICAgfVxufVxuUm91dGVyLmV2ZW50cyA9ICgwLCBfbWl0dCkuZGVmYXVsdCgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiaW1wb3J0IFNob3AgZnJvbSBcIi4uLy4uL3NyYy9sYXlvdXRzL1Nob3BcIjtcclxuXHJcbmNvbnN0IFNob3BDb2wzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2hvcCBjb2w9XCJjb2wteGwtNCBjb2wtbGctNCBjb2wtbWQtNFwiIGJhbm5lcj1cIi9pbWcvYmcvYmFubmVySUQucG5nXCIgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcENvbDM7XHJcbiIsImNvbnN0IFBhZ2dpbmF0aW9uID0gKHsgc2V0QWN0aXZlLCBhY3RpdmUsIGxlbmd0aCwgc29ydCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXNpYy1wYWdpbmF0aW9uIGJhc2ljLXBhZ2luYXRpb24tMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAge2xlbmd0aCA/IChcclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG91YmxlLWxlZnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgIHtBcnJheShNYXRoLmNlaWwobGVuZ3RoIC8gc29ydCkpXHJcbiAgICAgICAgICAgICAgICAuZmlsbChcInBcIilcclxuICAgICAgICAgICAgICAgIC5tYXAoKG0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPXtgJHthY3RpdmUgPT09IGkgPyBcImFjdGl2ZVwiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpIDwgOSA/IGAwJHtpICsgMX1gIDogaSArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoQXJyYXkoTWF0aC5jZWlsKGxlbmd0aCAvIHNvcnQpKS5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdnaW5hdGlvbjtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtcclxuICBhZGRUb0NhcnQsXHJcbiAgYWRkV2lzaGxpc3QsXHJcbiAgY29tcGFyZSxcclxuICBnZXRXaXNobGlzdCxcclxuICByZW1vdmVDb21wYXJlLFxyXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb24vdXRpbGlzXCI7XHJcbmltcG9ydCBQcm9kdWN0TW9kYWwgZnJvbSBcIi4vUHJvZHVjdE1vZGFsXCI7XHJcbmNvbnN0IFByb2R1Y3QgPSAoe1xyXG4gIHByb2R1Y3QsXHJcbiAgd3JhcHBlclBhZGRpbmcwLFxyXG4gIGFkZFRvQ2FydCxcclxuICBhZGRXaXNobGlzdCxcclxuICBjb21wYXJlLFxyXG4gIHJlbW92ZUNvbXBhcmUsXHJcbn0pID0+IHtcclxuICBjb25zdCB3aXNobGlzdCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXRpbGlzLndpc2hsaXN0KTtcclxuICBjb25zdCBjb21wYXJlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXRpbGlzLmNvbXBhcmVzKTtcclxuXHJcbiAgY29uc3QgW3F1aWNrVmlldywgc2V0UXVpY2tWaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWRkQ29tcGFyZSwgc2V0QWRkQ29tcGFyZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FkZENhcnQsIHNldGFkZENhcnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthZGRXaXNobGlzdF8sIHNldEFkZFdpc2hsaXN0X10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tDb21wYXJlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldEFkZENvbXBhcmUodHJ1ZSk7XHJcbiAgICBjb25zdCBleGl0c0l0ZW0gPSBjb21wYXJlcy5maW5kKChjb21wYXJlKSA9PiBjb21wYXJlLmlkID09PSBwcm9kdWN0LmlkKTtcclxuICAgIGlmIChjb21wYXJlcy5sZW5ndGggPCAzKSB7XHJcbiAgICAgIGlmIChleGl0c0l0ZW0pIHtcclxuICAgICAgICB0b2FzdC5lcnJvcihcIlF1aXRhciBlbGVtZW50byBkZSBjb21wYXJhY2nDs24uXCIpO1xyXG4gICAgICAgIGNvbXBhcmUocHJvZHVjdCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhcIkFncmVnYXIgZWxlbWVudG8gZW4gQ29tcGFyYXIuXCIpO1xyXG4gICAgICAgIGNvbXBhcmUocHJvZHVjdCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChleGl0c0l0ZW0pIHtcclxuICAgICAgICB0b2FzdC5lcnJvcihcIlF1aXRhciBlbGVtZW50byBkZSBjb21wYXJhY2nDs24uXCIpO1xyXG4gICAgICAgIHJlbW92ZUNvbXBhcmUocHJvZHVjdCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJDb21wYXJhciBlc3TDoSBsbGVubywgZWxpbWluZSBlbCBlbGVtZW50byBkZSBsYSBsaXN0YSBkZSBjb21wYXJhY2nDs24uXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0NhcnQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYWRkVG9DYXJ0KHByb2R1Y3QpO1xyXG4gICAgc2V0YWRkQ2FydCh0cnVlKTtcclxuICAgIHRvYXN0LnN1Y2Nlc3MoXCJBw7FhZGlyIGFydMOtY3VsbyBlbiBlbCBjYXJyaXRvLlwiKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQ2xpY2tXaXNobGlzdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhZGRXaXNobGlzdChwcm9kdWN0KTtcclxuICAgIHNldEFkZFdpc2hsaXN0Xyh0cnVlKTtcclxuICAgIGNvbnN0IHdpc2hsaXN0XyA9IHdpc2hsaXN0LmZpbmQoKHdpc2hsaXN0KSA9PiB3aXNobGlzdC5pZCA9PT0gcHJvZHVjdC5pZCk7XHJcbiAgICBpZiAod2lzaGxpc3RfKSB7XHJcbiAgICAgIHRvYXN0LmVycm9yKFwiRWxpbWluYXIgYXJ0w61jdWxvIGVuIGxhIGxpc3RhIGRlIGZhdm9yaXRvcy5cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2FzdC5zdWNjZXNzKFwiQcOxYWRpciBhcnTDrWN1bG8gZW4gbGlzdGEgZGUgZmF2b3JpdG9zLlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Bwcm9kdWN0LXdyYXBwZXIgbWItNTAgJHt3cmFwcGVyUGFkZGluZzAgPyBcInAtMFwiIDogXCJcIn1gfT5cclxuICAgICAgPFByb2R1Y3RNb2RhbFxyXG4gICAgICAgIHNob3c9e3F1aWNrVmlld31cclxuICAgICAgICBoYW5kbGVDbG9zZT17KCkgPT4gc2V0UXVpY2tWaWV3KGZhbHNlKX1cclxuICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWltZyBtYi0yNVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2Avc2hvcC8ke3Byb2R1Y3QuaWR9YH0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1nMX0gYWx0PVwiaW1nIDFcIiAvPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNlY29uZGFyeS1pbWdcIiBzcmM9e3Byb2R1Y3QuaW1nMn0gYWx0PVwiaW1nZSAyXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1hY3Rpb24gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IG9uQ2xpY2tDYXJ0KGUpfSB0aXRsZT1cIlNob3BwaW5nYiBDYXJ0XCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLXNob3BwaW5nLWNhcnRcIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBzZXRRdWlja1ZpZXcodHJ1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHRpdGxlPVwiUXVpY2sgVmlld1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLWV5ZVwiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrQ29tcGFyZShlKX1cclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcclxuICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgIHRpdGxlPVwiQ29tcGFyZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgY29tcGFyZXMuZmluZCgoY29tcGFyZSkgPT4gY29tcGFyZS5pZCA9PT0gcHJvZHVjdC5pZClcclxuICAgICAgICAgICAgICAgID8gXCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tY29tcGFyZVwiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYWxlLXRhZ1wiPlxyXG4gICAgICAgICAge3Byb2R1Y3QubmV3ICYmIDxzcGFuIGNsYXNzTmFtZT1cIm5ld1wiPk51ZXZvPC9zcGFuPn1cclxuICAgICAgICAgIHtwcm9kdWN0LnNhbGUgJiYgPHNwYW4gY2xhc3NOYW1lPVwic2FsZVwiPk9mZXJ0YTwvc3Bhbj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvLWNhdCBtYi0xMFwiPlxyXG4gICAgICAgICAgey8qIDxMaW5rIGhyZWY9e2Avc2hvcC8ke3Byb2R1Y3QuaWR9YH0+ZGVjb3IsIDwvTGluaz4gKi99XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL3Nob3AvJHtwcm9kdWN0LmlkfWB9Pntwcm9kdWN0LmJyYW5kfTwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDQ+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL3Nob3AvJHtwcm9kdWN0LmlkfWB9Pntwcm9kdWN0Lm5hbWV9PC9MaW5rPlxyXG4gICAgICAgIDwvaDQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LW1ldGFcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvLXByaWNlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPntgJCR7TnVtYmVyKHByb2R1Y3QubWFpblByaWNlKS50b0ZpeGVkKDMpfSBDTFBgfTwvc3Bhbj5cclxuICAgICAgICAgICAge3Byb2R1Y3QucHJpY2UgJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAge2AkJHtOdW1iZXIocHJvZHVjdC5wcmljZSkudG9GaXhlZCgzKX0gQ0xQYH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtd2lzaGxpc3RcIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uQ2xpY2tXaXNobGlzdChlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7XHJcbiAgICAgICAgICAgICAgd2lzaGxpc3QgJiYgd2lzaGxpc3QuZmluZCgocHJvKSA9PiBwcm8uaWQgPT09IHByb2R1Y3QuaWQpXHJcbiAgICAgICAgICAgICAgICA/IFwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICB9IGB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1oZWFydFwiIHRpdGxlPVwiV2lzaGxpc3RcIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHtcclxuICBhZGRUb0NhcnQsXHJcbiAgYWRkV2lzaGxpc3QsXHJcbiAgZ2V0V2lzaGxpc3QsXHJcbiAgY29tcGFyZSxcclxuICByZW1vdmVDb21wYXJlLFxyXG59KShQcm9kdWN0KTtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYWRkVG9DYXJ0LCBhZGRXaXNobGlzdCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb24vdXRpbGlzXCI7XHJcbmltcG9ydCBQcm9kdWN0TW9kYWwgZnJvbSBcIi4vUHJvZHVjdE1vZGFsXCI7XHJcbmNvbnN0IFByb2R1Y3RMaXN0VmlldyA9ICh7IHByb2R1Y3QsIGNvbDUsIGFkZFRvQ2FydCwgYWRkV2lzaGxpc3QgfSkgPT4ge1xyXG4gIGNvbnN0IHdpc2hsaXN0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51dGlsaXMud2lzaGxpc3QpO1xyXG4gIGNvbnN0IFtxdWlja1ZpZXcsIHNldFF1aWNrVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FkZENhcnQsIHNldGFkZENhcnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthZGRXaXNobGlzdF8sIHNldEFkZFdpc2hsaXN0X10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tDYXJ0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGFkZFRvQ2FydChwcm9kdWN0KTtcclxuICAgIHNldGFkZENhcnQodHJ1ZSk7XHJcbiAgICB0b2FzdC5zdWNjZXNzKFwiQWRkIGl0ZW0gaW4gQ2FydC5cIik7XHJcbiAgfTtcclxuICBjb25zdCBvbkNsaWNrV2lzaGxpc3QgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYWRkV2lzaGxpc3QocHJvZHVjdCk7XHJcbiAgICBzZXRBZGRXaXNobGlzdF8odHJ1ZSk7XHJcbiAgICBjb25zdCB3aXNobGlzdF8gPSB3aXNobGlzdC5maW5kKCh3aXNobGlzdCkgPT4gd2lzaGxpc3QuaWQgPT09IHByb2R1Y3QuaWQpO1xyXG4gICAgaWYgKHdpc2hsaXN0Xykge1xyXG4gICAgICB0b2FzdC5lcnJvcihcIlJlbW92ZSBpdGVtIGluIHdpc2hsaXN0LlwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJBZGQgaXRlbSBpbiB3aXNobGlzdC5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIDxQcm9kdWN0TW9kYWxcclxuICAgICAgICBzaG93PXtxdWlja1ZpZXd9XHJcbiAgICAgICAgaGFuZGxlQ2xvc2U9eygpID0+IHNldFF1aWNrVmlldyhmYWxzZSl9XHJcbiAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wteGwtJHtjb2w1ID8gNSA6IDR9IGNvbC1sZy0ke2NvbDUgPyA1IDogNH1gfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtd3JhcHBlciBtYi0zMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWltZ1wiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3Nob3AvJHtwcm9kdWN0LmlkfWB9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1nMX0gYWx0PVwiaW1nIDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWNvbmRhcnktaW1nXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltZzJ9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cImltZ2UgMlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNhbGUtdGFnXCI+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3QubmV3ICYmIDxzcGFuIGNsYXNzTmFtZT1cIm5ld1wiPm5ldzwvc3Bhbj59XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3Quc2FsZSAmJiA8c3BhbiBjbGFzc05hbWU9XCJzYWxlXCI+c2FsZTwvc3Bhbj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC14bC0ke2NvbDUgPyA3IDogOH0gY29sLWxnLSR7Y29sNSA/IDcgOiA4fWB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250ZW50IHByby1saXN0LWNvbnRlbnQgcHItMCBtYi01MFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm8tY2F0IG1iLTEwXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc2hvcC8ke3Byb2R1Y3QuaWR9YH0+ZGVjb3IsIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zaG9wLyR7cHJvZHVjdC5pZH1gfT57cHJvZHVjdC5icmFuZH08L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zaG9wLyR7cHJvZHVjdC5pZH1gfT57cHJvZHVjdC5uYW1lfTwvTGluaz5cclxuICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtbWV0YSBtYi0xMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByby1wcmljZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntgJCR7TnVtYmVyKHByb2R1Y3QubWFpblByaWNlKS50b0ZpeGVkKDIpfSBVU0RgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7cHJvZHVjdC5wcmljZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbGQtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAge2AkJHtOdW1iZXIocHJvZHVjdC5wcmljZSkudG9GaXhlZCgyKX0gVVNEYH1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIFNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzIGVycm9yIHNpdCB2b2x1cHRhdGVtXHJcbiAgICAgICAgICAgIGFjY3VzYW50aXVtIGRvbG9yZW1xdWUgbGF1ZGFudGl1bSwgdG90YW0gcmVtIGFwZXJpYW0sIGVhcXVlIGlwc2FcclxuICAgICAgICAgICAgcXVhZSBhYiBpbGxvIGludmVudG9yZSB2ZXJpdGF0aXMgZXQgcXVhc2kgYXJjaGl0ZWN0byBiZWF0YWUgdml0YWVcclxuICAgICAgICAgICAgZGljdGEgc3VudCBleHBsaWNhYm8uIE5lbW8gZW5pbSBpcHNhbSB2b2x1cHRhdGVtIHF1aWEgdm9sdXB0YXMgc2l0XHJcbiAgICAgICAgICAgIGFzcGVybmF0dXIgYXV0IG9kaXQgYXV0IGZ1Z2l0LCBzZWQgcXVpYSBjb25zZXF1dW50dXIgbWFnbmkgZG9sb3Jlc1xyXG4gICAgICAgICAgICBlb3MgcXVpIHJhdGlvbmUgdm9sdXB0YXRlbSBzZXF1aSBuZXNjaXVudC5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiB0aXRsZT1cIlNob3BwaW5nYiBDYXJ0XCIgb25DbGljaz17KGUpID0+IG9uQ2xpY2tDYXJ0KGUpfT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1zaG9wcGluZy1jYXJ0XCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2V0UXVpY2tWaWV3KHRydWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1leWVcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke1xyXG4gICAgICAgICAgICAgICAgd2lzaGxpc3QgJiYgd2lzaGxpc3QuZmluZCgocHJvKSA9PiBwcm8uaWQgPT09IHByb2R1Y3QuaWQpXHJcbiAgICAgICAgICAgICAgICAgID8gXCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICB9IGB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uQ2xpY2tXaXNobGlzdChlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLWxpa2VcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IGFkZFRvQ2FydCwgYWRkV2lzaGxpc3QgfSkoUHJvZHVjdExpc3RWaWV3KTtcclxuIiwiaW1wb3J0IHsgTW9kYWwsIE5hdiwgVGFiIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7XHJcbiAgYWRkVG9DYXJ0LFxyXG4gIGFkZFdpc2hsaXN0LFxyXG4gIGRlY3JlYXNlQ2FydCxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uL3V0aWxpc1wiO1xyXG5jb25zdCBQcm9kdWN0TW9kYWwgPSAoe1xyXG4gIHNob3csXHJcbiAgaGFuZGxlQ2xvc2UsXHJcbiAgcHJvZHVjdCxcclxuICBjYXJ0cyxcclxuICB3aXNobGlzdHMsXHJcbiAgYWRkVG9DYXJ0LFxyXG4gIGFkZFdpc2hsaXN0LFxyXG4gIGRlY3JlYXNlQ2FydCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHNpemUgPSBbXCJMXCIsIFwiTVwiLCBcIlhcIiwgXCJYTFwiLCBcIlhYTFwiXTtcclxuXHJcbiAgY29uc3QgY2FydCA9IHByb2R1Y3QgJiYgY2FydHMgJiYgY2FydHMuZmluZCgoY2FydCkgPT4gY2FydC5pZCA9PT0gcHJvZHVjdC5pZCk7XHJcbiAgY29uc3Qgd2lzaGxpc3QgPVxyXG4gICAgcHJvZHVjdCAmJlxyXG4gICAgd2lzaGxpc3RzICYmXHJcbiAgICB3aXNobGlzdHMuZmluZCgod2lzaGxpc3QpID0+IHdpc2hsaXN0LmlkID09PSBwcm9kdWN0LmlkKTtcclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsIHNob3c9e3Nob3d9IG9uSGlkZT17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtNiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICA8VGFiLkNvbnRhaW5lciBkZWZhdWx0QWN0aXZlS2V5PVwidHVtLTBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlscy1pbWcgbWItMTBcIj5cclxuICAgICAgICAgICAgICAgIDxUYWIuQ29udGVudCBpZD1cIm15VGFiQ29udGVudHByb1wiPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvZHVjdCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuaW1hZ2VzLm1hcCgoaW1nLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGFiLlBhbmUga2V5PXtpfSBldmVudEtleT17YHR1bS0ke2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1sYXJnZS1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nLnNyY30gYWx0PVwidHVtXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9UYWIuQ29udGVudD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXRodW1iLXRhYiBcIj5cclxuICAgICAgICAgICAgICAgIDxOYXYgYXM9XCJ1bFwiPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvZHVjdCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuaW1hZ2VzLm1hcCgoaW1nLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gYXM9XCJsaVwiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRLZXk9e2B0dW0tJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nLnNyY30gYWx0PVwiVHVtXCIgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvVGFiLkNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtNiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlscyBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtY2F0IG1iLTEwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5kZWNvciw8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+e3Byb2R1Y3QgJiYgcHJvZHVjdC5icmFuZH08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS10aW1lcyBtb2RhbC1pY29uIFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsb3NlKCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm8tZGV0YWlscy10aXRsZSBtYi0xNSBmcy0zMFwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3QgJiYgcHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLXByaWNlIG1iLTEwIGZzLTI1XCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4ke051bWJlcihwcm9kdWN0ICYmIHByb2R1Y3QubWFpblByaWNlKS50b0ZpeGVkKDIpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0ICYmIHByb2R1Y3QucHJpY2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbGQtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAke051bWJlcihwcm9kdWN0LnByaWNlKS50b0ZpeGVkKDIpfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC12YXJpYW50IFwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3QgJiYgcHJvZHVjdC5jb2xvcnMgJiYgcHJvZHVjdC5jb2xvcnMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb2xvciB2YXJpYW50LWl0ZW0gbW9kYWwtcC0xNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWFudC1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db2xvcnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNob3AtbGluayBzaG9wLWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5jb2xvcnMubWFwKChjb2xvcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjb2xvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y29sb3J9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0ICYmIHByb2R1Y3Quc2l6ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1zaXplIHZhcmlhbnQtaXRlbSBtb2RhbC1wLTE1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYW50LW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnNpemU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNob3AtbGluayBzaG9wLXNpemVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzaXplICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemUubWFwKChzaXplKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplLnRvTG93ZXJDYXNlKCkgPT09IHByb2R1Y3Quc2l6ZS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRlc2MgdmFyaWFudC1pdGVtIG1vZGFsLXAtMTVcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYVxyXG4gICAgICAgICAgICAgICAgICAgIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb25cclxuICAgICAgICAgICAgICAgICAgICB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbmZvLWxpc3QgdmFyaWFudC1pdGVtIG1vZGFsLXAtMTVcIj5cclxuICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWNhcGl0YWxpemVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkJyYW5kczo8L3NwYW4+IHtwcm9kdWN0ICYmIHByb2R1Y3QuYnJhbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Qcm9kdWN0IENvZGU6PC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0ICYmIHByb2R1Y3QuY2F0ZWdvcnlbMF0uc3BsaXQoXCJcIilbMF0gKyBwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UmV3YXJkIFBvaW50czo8L3NwYW4+IDEwMFxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U3RvY2s6PC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluLXN0b2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0ICYmIHByb2R1Y3Quc3RvY2sgPyBcIkluIFN0b2NrXCIgOiBcIk91dCBPZiBTdG9ja1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1hY3Rpb24tZGV0YWlscyB2YXJpYW50LWl0ZW0gbW9kYWwtcC0xNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlscy1hY3Rpb24gZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXF1YW50aXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtcGx1cy1taW51c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57Y2FydCA/IGNhcnQucXR5IDogMX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWMgcXR5YnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0ICYmIGNhcnQucXR5ICE9PSAxICYmIGRlY3JlYXNlQ2FydChjYXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImluYyBxdHlidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvQ2FydChwcm9kdWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJTdWNjZXNzZnVsbHkgYWRkIHRvIGNhcnQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lzaGxpc3QgPyBcImFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSBkZXRhaWxzLWFjdGlvbi1pY29uYH1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRXaXNobGlzdChwcm9kdWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlN1Y2Nlc3NmdWxseSBhZGQgaXRlbSBpbiB3aXNobGlzdC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1oZWFydFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZXRhaWxzLWFjdGlvbi1pY29uXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvdXJnbGFzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7IWNhcnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRldGFpbHMtY2FydCBtdC0yMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvQ2FydChwcm9kdWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlN1Y2Nlc3NmdWxseSBhZGQgdG8gY2FydC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHRoZW1lLWJ0blwiPnB1cmNoYXNlIG5vdzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgIDwvTW9kYWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBjYXJ0czogc3RhdGUudXRpbGlzLmNhcnRzLFxyXG4gIHdpc2hsaXN0czogc3RhdGUudXRpbGlzLndpc2hsaXN0LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XHJcbiAgYWRkVG9DYXJ0LFxyXG4gIGFkZFdpc2hsaXN0LFxyXG4gIGRlY3JlYXNlQ2FydCxcclxufSkoUHJvZHVjdE1vZGFsKTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY2xpY2tUb0FjdGl2ZSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy91dGlsc1wiO1xyXG5cclxuY29uc3QgQ29sb3JGaWx0ZXIgPSAoeyBmaWx0ZXJCeUNvbG9yLCBzZXRBY3RpdmVfIH0pID0+IHtcclxuICBjb25zdCBjb2xvcnMgPSBbXCJibGFja1wiLCBcImdyZWVuXCIsIFwiYmx1ZVwiLCBcIndoaXRlXCIsIFwicmVkXCIsIFwiZ3JheVwiXTtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IGFjdGl2ZUZ1biA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgZmlsdGVyQnlDb2xvcih2YWx1ZSk7XHJcbiAgICBzZXRBY3RpdmVfKCk7XHJcbiAgICBjbGlja1RvQWN0aXZlKGFjdGl2ZSwgdmFsdWUsIHNldEFjdGl2ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXdpZGdldFwiPlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwic2hvcC10aXRsZVwiPmNvbG9yPC9oMz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cInNob3AtbGlua1wiPlxyXG4gICAgICAgIHtjb2xvcnMgJiZcclxuICAgICAgICAgIGNvbG9ycy5tYXAoKGNvbG9yKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2NvbG9yfT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jYXBpdGFsaXplIGMtcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhY3RpdmVGdW4oY29sb3IpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y29sb3J9ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlLmluY2x1ZGVzKGNvbG9yKSA/IFwiXCIgOiBcImJveC1zaGFkb3ctbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7Y29sb3J9XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sb3JGaWx0ZXI7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIGZpbHRlckJ5QnJhbmQsXHJcbiAgZmlsdGVyQnlDYXRhZ29yeSxcclxuICBmaWx0ZXJCeUNvbG9yLFxyXG4gIGZpbHRlckJ5TmFtZSxcclxuICBmaWx0ZXJCeVByaWNlLFxyXG4gIGZpbHRlckJ5U2l6ZSxcclxuICBmaWx0ZXJCeVRhZ3MsXHJcbn0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbi9maWx0ZXJcIjtcclxuaW1wb3J0IENvbG9yRmlsdGVyIGZyb20gXCIuL0NvbG9yRmlsdGVyXCI7XHJcbmltcG9ydCBGaWx0ZXJCeUNoZWNrQm94IGZyb20gXCIuL0ZpbHRlckJ5Q2hlY2tCb3hcIjtcclxuaW1wb3J0IEZpbHRlckJ5VGFncyBmcm9tIFwiLi9GaWx0ZXJCeVRhZ3NcIjtcclxuaW1wb3J0IFByaWNlRmlsdGVyIGZyb20gXCIuL1ByaWNlRmlsdGVyXCI7XHJcblxyXG5jb25zdCBGaWx0ZXIgPSAoe1xyXG4gIGZpbHRlckJ5TmFtZSxcclxuICBzZWFyY2gsXHJcbiAgZmlsdGVyQnlCcmFuZCxcclxuICBmaWx0ZXJCeUNhdGFnb3J5LFxyXG4gIGZpbHRlckJ5U2l6ZSxcclxuICBmaWx0ZXJCeVByaWNlLFxyXG4gIGZpbHRlckJ5Q29sb3IsXHJcbiAgc2V0QWN0aXZlXyxcclxuICBmaWx0ZXJCeVRhZ3MsXHJcbiAgcHJvZHVjdHMsXHJcbn0pID0+IHtcclxuICBjb25zdCBzaXplID0gW1wiTFwiLCBcIk1cIiwgXCJYXCIsIFwiWExcIiwgXCJYWExcIl0sXHJcbiAgICBicmFuZCA9IFtcclxuICAgICAgXCJTSUlNIGRpc3RyaWJ1aWRvcmFcIixcclxuICAgIF0sXHJcbiAgICBjYXRlZ29yeSA9IFtcclxuICAgIFwiU2lzdGVtYXMgZGUgUHJvdGVjY2nDs24gQ29udHJhIEluY2VuZGlvXCIsXHJcbiAgICBcIkRldGVjY2nDs24gZGUgSW5jZW5kaW9cIixcclxuICAgIFwiQXNwaXJhY2nDs25cIixcclxuICAgIFwiQWNjZXNvcmlvc1wiLFxyXG4gICAgXCJDYW5hc3RpbGxvc1wiLFxyXG4gICAgXCJEZXRlY3RvcmVzIGRlIEZsdWpvXCIsXHJcbiAgICBcIkV4dGluY2nDs24gZGUgSW5jZW5kaW9cIixcclxuICAgIFwiRXh0aW50b3Jlc1wiLFxyXG4gICAgXCJGaXR0aW5nc1wiLCBcclxuICAgIFwiRmxhbmdlc1wiLFxyXG4gICAgXCJDYcOxZXLDrWFzXCIsXHJcbiAgICBcIkhpZXJybyBNYWxlYWJsZVwiLFxyXG4gICAgXCJQYWxhbmNhc1wiLFxyXG4gICAgXCJTaXJlbmFzIHkgQmFsaXphc1wiLFxyXG4gICAgXCJEaXJlY2Npb25hYmxlXCIsXHJcbiAgICBcIkZvdG9lbMOpY3RyaWNvc1wiLFxyXG4gICAgXCJQZXJub3NVXCIsXHJcbiAgICBcIlJhbnVyYWRvXCIsXHJcbiAgICBcIlN0cmFwc1wiLFxyXG4gICAgXCJTb3BvcnRhY2lvblwiLFxyXG4gICAgXCJUZWUgTWVjYW5pY2FzXCIsXHJcbiAgICBcIlVuaW9uZXNcIixcclxuICAgIFwiSnVudGFzIGRlIERpbGF0YWNpb25cIixcclxuICAgIFwiTWFub21ldHJvc1wiLFxyXG4gICAgXCJNYW5ndWVyYXNcIixcclxuICAgIFwiUm9zZXRhc1wiLFxyXG4gICAgXCJTdG9yelwiLFxyXG4gICAgXCJTcHJpbmtsZXJzXCIsXHJcbiAgICBcIlZhbHZ1bGFzXCIsXHJcbiAgICBcIkVsZWN0cm9uaWNhXCIsIFxyXG4gICAgXCJDaXRvZm9uaWFcIixcclxuICAgIFwiQ29udHJvbCBkZSBBY2Nlc29cIixcclxuICAgIFwiQ29tcHV0YWNpw7NuXCIsIFxyXG4gICAgXCJDYWJsZXNcIixcclxuICAgIFwiQWRhcHRhZG9yZXNcIixcclxuICAgIFwiw4FuZ3Vsb3NcIixcclxuICAgIFwiRmVycmV0ZXJpYVwiLFxyXG4gICAgXCJBYnJhemFkZXJhc1wiLFxyXG4gICAgXCJDYWphc1wiLFxyXG4gICAgXCJDaW50YXNcIixcclxuICAgIFwiQ2FuZGFkb3NcIixcclxuICAgIFwiRVBQXCIsXHJcbiAgICBcIkVzcMOhcnJhZ29zXCIsXHJcbiAgICBcIkhlcnJhbWllbnRhc1wiLFxyXG4gICAgXCJMw61xdWlkb3MvUXXDrW1pY29zXCIsXHJcbiAgICBcIk1hbmd1ZXJhc1wiLFxyXG4gICAgXCJSaWVsXCIsXHJcbiAgICBcIlNvbGRhZHVyYVwiLFxyXG4gICAgXCJUZWZsw7NuXCJcclxuICAgIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC00IGNvbC1sZy00XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1ib3hcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3Atd2lkZ2V0XCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2hvcC10aXRsZVwiPkJ1c2NhcjwvaDM+XHJcbiAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICBhY3Rpb249XCIjXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvcC1zZWFyY2hcIlxyXG4gICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBmaWx0ZXJCeU5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVzY2FyIHByb2R1Y3RvLi4uLlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxGaWx0ZXJCeUNoZWNrQm94XHJcbiAgICAgICAgICB0aXRsZT1cIkJyYW5kXCJcclxuICAgICAgICAgIGFycj17YnJhbmR9XHJcbiAgICAgICAgICBmdW50aW9uPXtmaWx0ZXJCeUJyYW5kfVxyXG4gICAgICAgICAgc2V0QWN0aXZlXz17c2V0QWN0aXZlX31cclxuICAgICAgICAvPiAqL31cclxuICAgICAgIHsvKiAgPFByaWNlRmlsdGVyIGZpbHRlckJ5UHJpY2U9e2ZpbHRlckJ5UHJpY2V9IHNldEFjdGl2ZV89e3NldEFjdGl2ZV99IC8+ICovfVxyXG4gICAgICAgey8qICA8RmlsdGVyQnlDaGVja0JveFxyXG4gICAgICAgICAgdGl0bGU9XCJQcm9kdWN0IFNpemVcIlxyXG4gICAgICAgICAgYXJyPXtzaXplfVxyXG4gICAgICAgICAgZnVudGlvbj17ZmlsdGVyQnlTaXplfVxyXG4gICAgICAgICAgc2V0QWN0aXZlXz17c2V0QWN0aXZlX31cclxuICAgICAgICAvPiAqL31cclxuICAgICAgICA8RmlsdGVyQnlDaGVja0JveFxyXG4gICAgICAgICAgdGl0bGU9XCJDYXRlZ29yaWFzXCJcclxuICAgICAgICAgIGFycj17Y2F0ZWdvcnl9XHJcbiAgICAgICAgICBmdW50aW9uPXtmaWx0ZXJCeUNhdGFnb3J5fVxyXG4gICAgICAgICAgc2V0QWN0aXZlXz17c2V0QWN0aXZlX31cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgIHsvKiAgPEZpbHRlckJ5VGFncyBmaWx0ZXJCeVRhZ3M9e2ZpbHRlckJ5VGFnc30gc2V0QWN0aXZlXz17c2V0QWN0aXZlX30gLz4gKi99XHJcbiAgICAgICB7LyogIDxDb2xvckZpbHRlciBmaWx0ZXJCeUNvbG9yPXtmaWx0ZXJCeUNvbG9yfSBzZXRBY3RpdmVfPXtzZXRBY3RpdmVffSAvPiAqL31cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXdpZGdldFwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNob3AtdGl0bGVcIj5Qcm9kdWN0b3MgUmVjaWVudGVzPC9oMz5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaG9wLXNpZGViYXItcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICB7cHJvZHVjdHMgJiZcclxuICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAoXHJcbiAgICAgICAgICAgICAgICAocHJvZHVjdCwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgaSA8IDMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Byb2R1Y3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlLXByby1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zaG9wLyR7cHJvZHVjdC5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWcyfSBhbHQ9XCJQcm9kdWN0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGUtcHJvLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlLXByby1yYXRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc2hvcC8ke3Byb2R1Y3QuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlLXByby1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtOdW1iZXIocHJvZHVjdC5tYWluUHJpY2UpLnRvRml4ZWQoMil9IFVTRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXdpZGdldFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXNpZGViYXItYmFubmVyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9iZy9leHRpbnRvci5wbmdcIiBhbHQ9XCJCYW5uZXJcIiAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIHNlYXJjaDogc3RhdGUuZmlsdGVyLnNlYXJjaCxcclxuICBwcm9kdWN0czogc3RhdGUucHJvZHVjdC5wcm9kdWN0cyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xyXG4gIGZpbHRlckJ5TmFtZSxcclxuICBmaWx0ZXJCeUJyYW5kLFxyXG4gIGZpbHRlckJ5Q2F0YWdvcnksXHJcbiAgZmlsdGVyQnlTaXplLFxyXG4gIGZpbHRlckJ5UHJpY2UsXHJcbiAgZmlsdGVyQnlDb2xvcixcclxuICBmaWx0ZXJCeVRhZ3MsXHJcbn0pKEZpbHRlcik7XHJcbiIsImNvbnN0IEZpbHRlckJ5Q2hlY2tCb3ggPSAoeyB0aXRsZSwgYXJyLCBmdW50aW9uLCBzZXRBY3RpdmVfIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXdpZGdldFwiPlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwic2hvcC10aXRsZVwiPnt0aXRsZX08L2gzPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwic2hvcC1saW5rXCI+XHJcbiAgICAgICAge2FyciAmJlxyXG4gICAgICAgICAgYXJyLm1hcCgoYiwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjaGVja0JveFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPXtifVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtifVxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJDYXRlZ29yaWFzXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmdW50aW9uKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZV8oKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2J9PntifTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQnlDaGVja0JveDtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY2xpY2tUb0FjdGl2ZSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy91dGlsc1wiO1xyXG5cclxuY29uc3QgRmlsdGVyQnlUYWdzID0gKHsgZmlsdGVyQnlUYWdzLCBzZXRBY3RpdmVfIH0pID0+IHtcclxuICBjb25zdCB0YWdzID0gW1xyXG4gICAgXCJTaXN0ZW1hcyBkZSBQcm90ZWNjacOzbiBDb250cmEgSW5jZW5kaW9cIixcclxuICAgIFwiRGV0ZWNjacOzbiBkZSBJbmNlbmRpb1wiLFxyXG4gICAgXCJBc3BpcmFjacOzblwiLFxyXG4gICAgXCJBY2Nlc29yaW9zXCIsXHJcbiAgICBcIkNhbmFzdGlsbG9zXCIsXHJcbiAgICBcIkRldGVjdG9yZXMgZGUgRmx1am9cIixcclxuICAgIFwiRXh0aW5jacOzbiBkZSBJbmNlbmRpb1wiLFxyXG4gICAgXCJFeHRpbnRvcmVzXCIsXHJcbiAgICBcIkZpdHRpbmdzXCIsIFxyXG4gICAgXCJGbGFuZ2VzXCIsXHJcbiAgICBcIkNhw7FlcsOtYXNcIixcclxuICAgIFwiSGllcnJvIE1hbGVhYmxlXCIsXHJcbiAgICBcIlBhbGFuY2FzXCIsXHJcbiAgICBcIlNpcmVuYXMgeSBCYWxpemFzXCIsXHJcbiAgICBcIkRpcmVjY2lvbmFibGVcIixcclxuICAgIFwiRm90b2Vsw6ljdHJpY29zXCIsXHJcbiAgICBcIlBlcm5vc1VcIixcclxuICAgIFwiUmFudXJhZG9cIixcclxuICAgIFwiU3RyYXBzXCIsXHJcbiAgICBcIlNvcG9ydGFjaW9uXCIsXHJcbiAgICBcIlRlZSBNZWNhbmljYXNcIixcclxuICAgIFwiVW5pb25lc1wiLFxyXG4gICAgXCJKdW50YXMgZGUgRGlsYXRhY2lvblwiLFxyXG4gICAgXCJNYW5vbWV0cm9zXCIsXHJcbiAgICBcIk1hbmd1ZXJhc1wiLFxyXG4gICAgXCJSb3NldGFzXCIsXHJcbiAgICBcIlN0b3J6XCIsXHJcbiAgICBcIlNwcmlua2xlcnNcIixcclxuICAgIFwiVmFsdnVsYXNcIixcclxuICAgIFwiRWxlY3Ryb25pY2FcIiwgXHJcbiAgICBcIkNpdG9mb25pYVwiLFxyXG4gICAgXCJDb250cm9sIGRlIEFjY2Vzb1wiLFxyXG4gICAgXCJDb21wdXRhY2nDs25cIiwgXHJcbiAgICBcIkNhYmxlc1wiLFxyXG4gICAgXCJBZGFwdGFkb3Jlc1wiLFxyXG4gICAgXCLDgW5ndWxvc1wiLFxyXG4gICAgXCJGZXJyZXRlcmlhXCIsXHJcbiAgICBcIkFicmF6YWRlcmFzXCIsXHJcbiAgICBcIkNhamFzXCIsXHJcbiAgICBcIkNpbnRhc1wiLFxyXG4gICAgXCJDYW5kYWRvc1wiLFxyXG4gICAgXCJFUFBcIixcclxuICAgIFwiRXNww6FycmFnb3NcIixcclxuICAgIFwiSGVycmFtaWVudGFzXCIsXHJcbiAgICBcIkzDrXF1aWRvcy9RdcOtbWljb3NcIixcclxuICAgIFwiTWFuZ3VlcmFzXCIsXHJcbiAgICBcIlJpZWxcIixcclxuICAgIFwiU29sZGFkdXJhXCIsXHJcbiAgICBcIlRlZmzDs25cIlxyXG4gIF07XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBhY3RpdmVGdW4gPSAodmFsdWUpID0+IHtcclxuICAgIGZpbHRlckJ5VGFncyh2YWx1ZSk7XHJcbiAgICBzZXRBY3RpdmVfKCk7XHJcbiAgICBjbGlja1RvQWN0aXZlKGFjdGl2ZSwgdmFsdWUsIHNldEFjdGl2ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXdpZGdldFwiPlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwic2hvcC10aXRsZVwiPlRhZ3M8L2gzPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwic2hvcC10YWdcIj5cclxuICAgICAgICB7dGFncyAmJlxyXG4gICAgICAgICAgdGFncy5tYXAoKHRhZykgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXt0YWd9PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWNhcGl0YWxpemUgJHtcclxuICAgICAgICAgICAgICAgICAgYWN0aXZlLmluY2x1ZGVzKHRhZykgPyBcImFjdGl2ZVRhZ1wiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBhY3RpdmVGdW4odGFnKTtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7dGFnfVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJ5VGFncztcclxuIiwiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbnB1dFJhbmdlIGZyb20gXCJyZWFjdC1pbnB1dC1yYW5nZVwiO1xyXG5cclxuY29uc3QgUHJpY2VGaWx0ZXIgPSAoeyBmaWx0ZXJCeVByaWNlLCBzZXRBY3RpdmVfIH0pID0+IHtcclxuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKHsgdmFsdWU6IHsgbWluOiAwLCBtYXg6IDIwMCB9IH0pO1xyXG4gIGNvbnN0IHByaWNlcyA9IFtcclxuICAgIHsgbWluOiBcIjBcIiwgbWF4OiBcIjUwXCIgfSxcclxuICAgIHsgbWluOiBcIjUwXCIsIG1heDogXCIxMDBcIiB9LFxyXG4gICAgeyBtaW46IFwiMTAwXCIsIG1heDogXCIxNTBcIiB9LFxyXG4gICAgeyBtaW46IFwiMTUwXCIsIG1heDogXCIyMDBcIiB9LFxyXG4gICAgeyBtaW46IFwiMjAwXCIgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3Atd2lkZ2V0XCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNob3AtdGl0bGVcIj5GaWx0ZXIgc2VsZWN0aW9uPC9oMz5cclxuICAgICAgICA8SW5wdXRSYW5nZVxyXG4gICAgICAgICAgZm9ybWF0TGFiZWw9eyh2YWx1ZSkgPT4gYGB9XHJcbiAgICAgICAgICBtYXhWYWx1ZT17MzAwfVxyXG4gICAgICAgICAgbWluVmFsdWU9ezB9XHJcbiAgICAgICAgICB2YWx1ZT17cHJpY2UudmFsdWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFByaWNlKHsgdmFsdWUgfSk7XHJcbiAgICAgICAgICAgIGZpbHRlckJ5UHJpY2UodmFsdWUpO1xyXG4gICAgICAgICAgICBzZXRBY3RpdmVfKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtMjAgZC1ibG9ja1wiPlxyXG4gICAgICAgICAgJHtwcmljZS52YWx1ZS5taW59IC0gJHtwcmljZS52YWx1ZS5tYXh9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3Atd2lkZ2V0XCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2hvcC10aXRsZVwiPlByaWNlIGZpbHRlcjwvaDM+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2hvcC1saW5rXCI+XHJcbiAgICAgICAgICAgIHtwcmljZSAmJlxyXG4gICAgICAgICAgICAgIHByaWNlLm1hcCgoYiwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNoZWNrQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2IubWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT17Yn1cclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIkJpa2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGZpbHRlckJ5UHJpY2UoYil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2IubWlufT5cclxuICAgICAgICAgICAgICAgICAgICAgICR7TnVtYmVyKGIubWluKS50b0ZpeGVkKDIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAge2IubWF4ID8gYCAtICR7TnVtYmVyKGIubWF4KS50b0ZpeGVkKDIpfWAgOiBcIitcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAqL31cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlRmlsdGVyO1xyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBnZXRDb21wYXJlIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbi91dGlsaXNcIjtcclxuXHJcbmNvbnN0IENvbXBhcmVJY29uID0gKHsgZ2V0Q29tcGFyZSB9KSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldENvbXBhcmUoKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgY29tcGFyZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnV0aWxpcy5jb21wYXJlcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lzaGxpc3QtY29udGFpbmVyIGNvbXBhcmVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZ1wiPjwvZGl2PlxyXG4gICAgICA8TGluayBocmVmPVwiL2NvbXBhcmVcIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICA8aVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGF0aWNvbi1jb21wYXJlICR7XHJcbiAgICAgICAgICAgICAgY29tcGFyZXMubGVuZ3RoID09PSAwID8gXCJtdC0xIG1yLTFcIiA6IFwibXQtMiBtci0yXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj5cclxuICAgICAgICAgICAge2NvbXBhcmVzICYmIGNvbXBhcmVzLmxlbmd0aCA8PSA5ICYmIGNvbXBhcmVzLmxlbmd0aCAhPT0gMFxyXG4gICAgICAgICAgICAgID8gYDAke2NvbXBhcmVzLmxlbmd0aH1gXHJcbiAgICAgICAgICAgICAgOiBjb21wYXJlcy5sZW5ndGh9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IGdldENvbXBhcmUgfSkoQ29tcGFyZUljb24pO1xyXG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1nL2Jhbm5lci9mb3RvRm9vdGVyLnBuZ1wiO1xyXG5pbXBvcnQgVGltZSBmcm9tIFwiLi4vLi4vcHVibGljL2ltZy9pY29uL3RpbWUucG5nXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1nL2xvZ28vbG9nb0Zvb3Rlci5wbmdcIjtcclxuY29uc3QgRm9vdGVyID0gKHsgY29udGFpbmVyLCBmb290ZXJCZywgdGV4dENlbnRlciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgIWNvbnRhaW5lclxyXG4gICAgICAgICAgICA/IFwiZm9vdGVyLWFyZWEgYm94LTkwIHB0LTEwMCBwYi02MFwiXHJcbiAgICAgICAgICAgIDogXCJmb290ZXItYXJlYSBwbC0xMDAgcHItMTAwIG10LTEwMFwiXHJcbiAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Zvb3RlckJnID8gXCJmb290ZXItYXJlYSBib3gtOTAgcHQtMTAwIHBiLTYwXCIgOiBcIlwifVxyXG4gICAgICAgICAgZGF0YS1iYWNrZ3JvdW5kPXtmb290ZXJCZyA/IFwiL2ltZy9iZy9mb290ZXIzMDAucG5nXCIgOiBcIlwifVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBmb290ZXJCZyA/ICd1cmwoXCIvaW1nL2JnL2Zvb3RlcjMwMC5wbmdcIiknIDogXCJcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NvbnRhaW5lciA/IFwiY29udGFpbmVyXCIgOiBcImNvbnRhaW5lci1mbHVpZFwifWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTMgY29sLWxnLTUgY29sLW1kLTYgXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci13aWRnZXQgbWItNDBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17TG9nb30gYWx0PVwiTG9nb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIFNJSU0gSW5nZW5pZXLDrWEsIHRpZW5lIGV4cGVyaWVuY2lhIGVuIGxhIGluc3RhbGFjacOzbiBkZSBzaXN0ZW1hcyBlbiBtdWNoYXMgYXBsaWNhY2lvbmVzIGRpZmVyZW50ZXMgY29tbyBjb21lcmNpYWwsIFxyXG4gICAgICAgICAgICAgICAgICBpbmR1c3RyaWFsIHkgcmVzaWRlbmNpYWwuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICB7LyogIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXRpbWUgZC1mbGV4IG10LTMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e1RpbWV9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkdvdCBRdWVzdGlvbnMgPyBDYWxsIHVzIDI0LzchPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgyPigwNjAwKSA4NzQgNTQ4PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMiBjb2wtbGctMiBjb2wtbWQtMyBkLWxnLW5vbmUgZC14bC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItd2lkZ2V0IHBsLTUwIG1iLTQwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz5SZWRlcyBzb2NpYWxlczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXItbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZhY2Vib29rXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbnN0YWdyYW1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExpbmtlZGluXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTIgY29sLWxnLTIgY29sLW1kLTMgZC1sZy1ub25lIGQteGwtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXdpZGdldCBwbC0zMCBtYi00MFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+TWVudTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXItbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEluaWNpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUXVpZW5lcyBzb21vc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzdHJpYnVpZG9yYSBTSUlNXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3RvXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgIHsvKiAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hpbmFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEphcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0yIGNvbC1sZy0yIGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci13aWRnZXQgbWItNDBcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPkluZm9ybWFjacOzbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXItbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvbMOtdGljYSBkZSBQcml2YWNpZGFkXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvbMOtdGljYSBkZSBEZXZvbHVjaW9uZXMgeSBSZWVtYm9sc29zXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEaXJlY2Npw7NuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGQVFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXaG9sZXNhbGVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERpcmVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbGctNSBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItd2lkZ2V0IG1iLTQwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWJhbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0Jhbm5lcn0gYWx0PVwiQmFubmVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodC1hcmVhIGJveC0xMDVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Zvb3RlckJnID8gXCJcIiA6IFwiY29weXJpZ2h0LWJvcmRlclwifSBwdC0zMCBwYi0zMGB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgIHRleHRDZW50ZXIgPyBcImNvbC14bC0xMlwiIDogXCJjb2wteGwtNiBjb2wtbGctNiBjb2wtbWQtNlwiXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvcHlyaWdodCB0ZXh0LWNlbnRlciAgJHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q2VudGVyID8gXCJcIiA6IFwidGV4dC1tZC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIENvcHlyaWdodCDCqSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2lpbVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAuIFRvZG9zIGxvcyBkZXJlY2hvcyByZXNlcnZhZG9zXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHshdGV4dENlbnRlciAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC02IGNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWljb24gdGV4dC1jZW50ZXIgdGV4dC1tZC1yaWdodCBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXR3aXR0ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1iZWhhbmNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtbGlua2VkaW4taW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS15b3V0dWJlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHNjcm9sbCB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgQ2F0YWdvcnkgZnJvbSBcIi4vaGVhZGVyL0NhdGFnb3J5XCI7XHJcbmltcG9ydCBEYXNrdG9wSGVhZGVyMSBmcm9tIFwiLi9oZWFkZXIvRGFza3RvcEhlYWRlcjFcIjtcclxuaW1wb3J0IE1vYmlsZUhlYWRlciBmcm9tIFwiLi9oZWFkZXIvTW9iaWxlSGVhZGVyXCI7XHJcbmltcG9ydCBTZWFyY2hUcmlnZ2VyIGZyb20gXCIuL2hlYWRlci9TZWFyY2hUcmlnZ2VyXCI7XHJcbmltcG9ydCBTaG9wQ2FydCBmcm9tIFwiLi9oZWFkZXIvU2hvcENhcnQuanNcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7XHJcbiAgc3RpY2t5LFxyXG4gIGNvbnRhaW5lcixcclxuICB0cmFuc3BhcmVudCxcclxuICB3aGl0ZU1lbnUsXHJcbiAgZXh0cmFUcmFuc3BhcmVudENsYXNzLFxyXG59KSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHN0aWNreSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGwpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlclxyXG4gICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgIHRyYW5zcGFyZW50XHJcbiAgICAgICAgICA/IGB0cmFuc3BhcmVudC1oZWFkZXIgJHtcclxuICAgICAgICAgICAgICBleHRyYVRyYW5zcGFyZW50Q2xhc3MgPyBleHRyYVRyYW5zcGFyZW50Q2xhc3MgOiBcIlwiXHJcbiAgICAgICAgICAgIH1gXHJcbiAgICAgICAgICA6IFwiXCJcclxuICAgICAgfWB9XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItYXJlYSBib3gtOTBcIlxyXG4gICAgICAgIGlkPXtgJHtzdGlja3kgPyBcImhlYWRlci1zdGlja3lcIiA6IFwiXCJ9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjb250YWluZXIgPyBcImNvbnRhaW5lclwiIDogXCJjb250YWluZXItZmx1aWRcIn1gfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1sZy02IGNvbC1tZC02IGNvbC03IGNvbC1zbS0zIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8Q2F0YWdvcnkgd2hpdGVNZW51PXt3aGl0ZU1lbnV9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC02IGNvbC1sZy02IGNvbC1tZC04IGNvbC04IGQtbm9uZSBkLXhsLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgPERhc2t0b3BIZWFkZXIxIHdoaXRlTWVudT17d2hpdGVNZW51fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbGctNiBjb2wtbWQtNiBjb2wtNSBjb2wtc20tOSBwbC0wXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHQgZi1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8U2VhcmNoVHJpZ2dlciAvPlxyXG4gICAgICAgICAgICAgICAgIHsvKiAgPGxpIGNsYXNzTmFtZT1cImxvZ2luLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtdXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgICAgICAgICAgPFNob3BDYXJ0IC8+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZC14bC1ub25lXCI+XHJcbiAgICAgICAgICAgICAgPE1vYmlsZUhlYWRlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGFza3RvcEhlYWRlcjIgZnJvbSBcIi4vaGVhZGVyL0Rhc2t0b3BIZWFkZXIyXCI7XHJcbmltcG9ydCBNb2JpbGVIZWFkZXIgZnJvbSBcIi4vaGVhZGVyL01vYmlsZUhlYWRlclwiO1xyXG5pbXBvcnQgU2VhcmNoVHJpZ2dlciBmcm9tIFwiLi9oZWFkZXIvU2VhcmNoVHJpZ2dlclwiO1xyXG5pbXBvcnQgU2hvcENhcnQgZnJvbSBcIi4vaGVhZGVyL1Nob3BDYXJ0XCI7XHJcblxyXG5jb25zdCBIZWFkZXIyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1hcmVhIGhlYWRlci0zIHB0LTM1IHBiLTM1XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgIHsvKiAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtNCBjb2wtbGctMyBjb2wtbWQtMyBjb2wtNyBkLW5vbmUgZC1sZy1ibG9jayBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGQteHMtZGlzYWJsZVwiPlxyXG4gICAgICAgICAgICAgIDxEYXNrdG9wSGVhZGVyMiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTQgY29sLWxnLTUgY29sLW1kLTQgY29sLTVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28gdGV4dC1sZWZ0IHRleHQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3BcIj5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvbG9nby9sb2dvLnN2Z1wiIGFsdD1cImltZ1wiIC8+ICB7LyogIHdpZHRoPXs5MH0gICovfVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC04IGNvbC03IHBsLTBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1yaWdodCBoZWFkZXItcmlnaHQtMyBmLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWFyY2hUcmlnZ2VyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsb2dpbi1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLXVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPFNob3BDYXJ0IC8+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZC1sZy1ub25lXCI+XHJcbiAgICAgICAgICAgICAgPE1vYmlsZUhlYWRlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1zZXBcIlxyXG4gICAgICAgIGRhdGEtYmFja2dyb3VuZD1cImltZy9iZy9oZWFkZXItc2VwLnBuZ1wiXHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiaW1nL2JnL2hlYWRlci1zZXAucG5nXCIpJyB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjI7XHJcbiIsImltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBnZXRDb21wYXJlLCBnZXRXaXNobGlzdCB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb24vdXRpbGlzXCI7XHJcbmltcG9ydCBDb21wYXJlSWNvbiBmcm9tIFwiLi9Db21wYXJlSWNvblwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgSGVhZGVyMiBmcm9tIFwiLi9IZWFkZXIyXCI7XHJcbmltcG9ydCBXaXNoTGlzdEljb24gZnJvbSBcIi4vV2lzaExpc3RJY29uXCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIHN0aWNreSxcclxuICBjb250YWluZXIsXHJcbiAgZm9vdGVyQmcsXHJcbiAgdHJhbnNwYXJlbnQsXHJcbiAgZXh0cmFUcmFuc3BhcmVudENsYXNzLFxyXG4gIGhlYWRlcjIsXHJcbiAgdGV4dENlbnRlcixcclxuICB3aGl0ZU1lbnUsXHJcbiAgZ2V0V2lzaGxpc3QsXHJcbiAgZ2V0Q29tcGFyZSxcclxufSkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRXaXNobGlzdCgpO1xyXG4gICAgZ2V0Q29tcGFyZSgpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICB7aGVhZGVyMiA/IChcclxuICAgICAgICA8SGVhZGVyMiB3aGl0ZU1lbnU9e3doaXRlTWVudX0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICBzdGlja3k9e3N0aWNreX1cclxuICAgICAgICAgIGNvbnRhaW5lcj17Y29udGFpbmVyfVxyXG4gICAgICAgICAgdHJhbnNwYXJlbnQ9e3RyYW5zcGFyZW50fVxyXG4gICAgICAgICAgZXh0cmFUcmFuc3BhcmVudENsYXNzPXtleHRyYVRyYW5zcGFyZW50Q2xhc3N9XHJcbiAgICAgICAgICB3aGl0ZU1lbnU9e3doaXRlTWVudX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8V2lzaExpc3RJY29uIC8+XHJcbiAgICAgIDxDb21wYXJlSWNvbiAvPlxyXG5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8Rm9vdGVyXHJcbiAgICAgICAgY29udGFpbmVyPXtjb250YWluZXJ9XHJcbiAgICAgICAgZm9vdGVyQmc9e2Zvb3RlckJnfVxyXG4gICAgICAgIHRleHRDZW50ZXI9e3RleHRDZW50ZXJ9XHJcbiAgICAgIC8+XHJcbiAgICAgIHsvKiA8U2Nyb2xsVG9wIC8+ICovfVxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IGdldFdpc2hsaXN0LCBnZXRDb21wYXJlIH0pKExheW91dCk7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGRhdGFJbWFnZSB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xyXG5cclxuY29uc3QgUGFnZVRpdGxlID0gKHsgcGFnZUhlYWRpbmcsIGFjdGl2ZSwgdGhhbmt1cGFnZSwgaWQgfSkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkYXRhSW1hZ2UoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uXHJcbiAgICAgIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItYXJlYVwiXHJcbiAgICAgIGRhdGEtYmFja2dyb3VuZD1cIi9pbWcvYmcvQmdQcm9kdWN0by5wbmdcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFkY3J1bWItdGV4dCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIHt0aGFua3VwYWdlICYmIChcclxuICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrLWNpcmNsZSB0ZXh0LXN1Y2Nlc3MgZnMtMTAwIG1iLTNcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXt0aGFua3VwYWdlID8gXCJtYi0yXCIgOiBcIlwifT57cGFnZUhlYWRpbmd9PC9oMT5cclxuICAgICAgICAgICAgICB7dGhhbmt1cGFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmcy0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICBFbCBwYWdvIHNlIGhhIHJlYWxpemFkbyBleGl0b3NhbWVudGUgeSBzdSBwZWRpZG8gZXN0w6EgcHJvY2VzbyBkZSBlbnbDrW8gPGJyIC8+IFRyYW5zYWN0aW9uIElEOlxyXG4gICAgICAgICAgICAgICAgICB7aWR9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+SW5pY2lvPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57YWN0aXZlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VUaXRsZTtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXYsIFRhYkNvbnRhaW5lciwgVGFiQ29udGVudCwgVGFiUGFuZSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUGFnZ2luYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnZ2luYXRpb25cIjtcclxuaW1wb3J0IEZpbHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9kdWN0L2ZpbHRlci9GaWx0ZXJcIjtcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0XCI7XHJcbmltcG9ydCBQcm9kdWN0TGlzdFZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0TGlzdFZpZXdcIjtcclxuaW1wb3J0IHsgZ2V0UHJvZHVjdHMgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uL3Byb2R1Y3RcIjtcclxuaW1wb3J0IHsgZ2V0UHJvZHVjdEJ5RmlsdGVyIH0gZnJvbSBcIi4uL3V0aWxzL2ZpbHRlclByb2R1Y3RcIjtcclxuaW1wb3J0IHsgYWN0aXZlRGF0YSwgZGJsb2NrIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XHJcbmltcG9ydCBQYWdlVGl0bGUgZnJvbSBcIi4vUGFnZVRpdGxlXCI7XHJcblxyXG5jb25zdCBTaG9wID0gKHtcclxuICBwcm9kdWN0cyxcclxuICBnZXRQcm9kdWN0cyxcclxuICBjb2wsXHJcbiAgYmFubmVyLFxyXG4gIGRlZnVsdEFjdGl2ZSxcclxuICBsZWZ0U2lkZUJhcixcclxufSkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBsZXQgc29ydCA9IDY7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFByb2R1Y3RzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBmb290ZXJCZyBjb250YWluZXIgdGV4dENlbnRlciB0cmFuc3BhcmVudFxyXG4gICAgd2hpdGVNZW51XHJcbiAgICBleHRyYVRyYW5zcGFyZW50Q2xhc3M9e1widHJhbnNwYXJlbnQtaGVhZGVyLTJcIn0+ICB7Lyogc3RpY2t5ICAqL31cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPFBhZ2VUaXRsZSBhY3RpdmU9XCJUaWVuZGEgU0lJTVwiIHBhZ2VIZWFkaW5nPVwiTnVlc3RyYSBUaWVuZGFcIiAvPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNob3AtYXJlYSBwdC0xMDAgcGItMTAwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIHtsZWZ0U2lkZUJhciAmJiA8RmlsdGVyIHNldEFjdGl2ZV89eygpID0+IHNldEFjdGl2ZSgwKX0gLz59XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtOCBjb2wtbGctOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWJhbm5lciBtYi01MFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YmFubmVyfSBhbHQ9XCJCYW5uZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRhYkNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0QWN0aXZlS2V5PXtkZWZ1bHRBY3RpdmUgPyBkZWZ1bHRBY3RpdmUgOiBcImdyaWRcIn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC01IGNvbC1sZy01IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtc2hvd2luZyBtYi00MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogQWN0aXZlIHNvcnQgcHJvZHVjdCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2FjdGl2ZURhdGEoYWN0aXZlLCBzb3J0LCBwcm9kdWN0cyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtNyBjb2wtbGctNyBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXRhYiBmLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cInVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibXlUYWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJsaXN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbSBhcz1cImxpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEtleT1cImxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbGlzdC11bFwiIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbSBhcz1cImxpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEtleT1cImdyaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGgtbGFyZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIHRhYiBjb250ZW50ICovfVxyXG4gICAgICAgICAgICAgICAgICA8VGFiQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZSBldmVudEtleT1cImdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0cyAmJiBwcm9kdWN0cy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLm1hcCgocHJvZHVjdCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NvbH0gJHtkYmxvY2soYWN0aXZlLCBpLCBzb3J0KX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlclBhZGRpbmcwPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBkLWJsb2NrIHctMTAwIG10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vIHNlIGVuY29udHLDsyBuaW5nw7puIHByb2R1Y3RvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZSBldmVudEtleT1cImxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0cyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtgJHtkYmxvY2soYWN0aXZlLCBpLCBzb3J0KX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0TGlzdFZpZXcgcHJvZHVjdD17cHJvZHVjdH0gY29sNT17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICA8L1RhYkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L1RhYkNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8UGFnZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZT17c2V0QWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICBzb3J0PXtzb3J0fVxyXG4gICAgICAgICAgICAgICAgICBsZW5ndGg9e3Byb2R1Y3RzICYmIHByb2R1Y3RzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIHshbGVmdFNpZGVCYXIgJiYgPEZpbHRlciBzZXRBY3RpdmVfPXsoKSA9PiBzZXRBY3RpdmUoMCl9IC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBwcm9kdWN0czogZ2V0UHJvZHVjdEJ5RmlsdGVyKHN0YXRlLnByb2R1Y3QucHJvZHVjdHMsIHN0YXRlLmZpbHRlciksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZ2V0UHJvZHVjdHMgfSkoU2hvcCk7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGdldFdpc2hsaXN0IH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbi91dGlsaXNcIjtcclxuXHJcbmNvbnN0IFdpc2hMaXN0SWNvbiA9ICh7IGdldFdpc2hsaXN0IH0pID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0V2lzaGxpc3QoKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgd2lzaGxpc3QgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnV0aWxpcy53aXNobGlzdCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lzaGxpc3QtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmdcIj48L2Rpdj5cclxuICAgICAgPExpbmsgaHJlZj1cIi93aXNobGlzdFwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZhcyBmYS1oZWFydCAgJHtcclxuICAgICAgICAgICAgICB3aXNobGlzdC5sZW5ndGggPT09IDAgPyBcIm10LTEgbXItMVwiIDogXCJtdC0yIG1yLTJcIlxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudFwiPlxyXG4gICAgICAgICAgICB7d2lzaGxpc3QgJiYgd2lzaGxpc3QubGVuZ3RoIDw9IDkgJiYgd2lzaGxpc3QubGVuZ3RoICE9PSAwXHJcbiAgICAgICAgICAgICAgPyBgMCR7d2lzaGxpc3QubGVuZ3RofWBcclxuICAgICAgICAgICAgICA6IHdpc2hsaXN0Lmxlbmd0aH1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgZ2V0V2lzaGxpc3QgfSkoV2lzaExpc3RJY29uKTtcclxuIiwiLy8gaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgbG9nb1doaXRlIGZyb20gXCIvaW1nL2xvZ28vbG9nby13aGl0ZS5wbmdcIjtcclxuLy8gaW1wb3J0IGxvZ28gZnJvbSBcIi9pbWcvbG9nby9sb2dvLnBuZ1wiO1xyXG5cclxuY29uc3QgQ2F0YWdvcnkgPSAoeyB3aGl0ZU1lbnUgfSkgPT4ge1xyXG4gIGNvbnN0IFtjYXRNZW51LCBzZXRDYXRNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBsZXQgY2F0ZWdvcnkgPSBbXHJcbiAgICBcIkRldGVjY2nDs24gZGUgaW5jZW5kaW9zXCIsXHJcbiAgICBcIkV4dGluY2nDs24gZGUgaW5jZW5kaW9zXCIsXHJcbiAgICBcIkVsZWN0csOzbmljYVwiLFxyXG4gICAgXCJGZXJyZXRlcmlhXCIsXHJcbiAgICBcIkVsZWN0cmljaWRhZFwiLFxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICB7LyogIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmFzaWMtYmFyIGNhdC10b2dnbGVcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q2F0TWVudSghY2F0TWVudSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyMVwiIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXIyXCIgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhcjNcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nbyBtdC0xXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgIHdoaXRlTWVudSA/IFwiL2ltZy9sb2dvL2xvZ29TSUlNLnBuZ1wiIDogXCIvaW1nL2xvZ28vbG9nb1NJSU0ucG5nXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYWx0PVwiTG9nb1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezIxNX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIHsvKiAgIDxkaXYgY2xhc3NOYW1lPXtgY2F0ZWdvcnktbWVudSBkLWJsb2NrICR7Y2F0TWVudSA/IFwiYmxvY2tcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgPGg0PkNhdGVnb3LDrWFzPC9oND5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7Y2F0ZWdvcnkgJiZcclxuICAgICAgICAgICAgY2F0ZWdvcnkubWFwKChjYXRlZ29yeSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWNhcGl0YWxpemVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1zaG9wcGluZy1jYXJ0XCIgLz4ge2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0YWdvcnk7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuY29uc3QgRGFza3RvcEhlYWRlciA9ICh7IHdoaXRlTWVudSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbWFpbi1tZW51IHRleHQtY2VudGVyICR7d2hpdGVNZW51ID8gXCJtZW51LXdoaXRlXCIgOiBcIlwifWB9PlxyXG4gICAgICA8bmF2IGlkPVwibW9iaWxlLW1lbnVcIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGE+SW5pY2lvPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPVwic3VibWVudVwiPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPkhvbWUgU3R5bGUgMTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5kZXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5Ib21lIFN0eWxlIDI8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2luZGV4LTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGE+SG9tZSBTdHlsZSAzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbmRleC00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPkhvbWUgU3R5bGUgNDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5kZXgtNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5Ib21lIFN0eWxlIDU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD4gKi99XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZ2EtbWVudVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3AvY29sLTNcIj5UaWVuZGE8L0xpbms+XHJcbiAgICAgICAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPVwic3VibWVudSBcIj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxyXG4gICAgICAgICAgICAgICAgICBDYXRlZ29yeSBWaWV3XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3VibWVudSAgbGV2ZWwtMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG9wXCI+U2hvcCAyIENvbHVtbjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHNcIj5TaG9wIEZpbHRlciBTdHlsZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHNcIj5TaG9wIEZ1bGw8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3AvY29sLTNcIj5TaG9wIDMgQ29sdW1uPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG9wL2xpc3RcIj5MaXN0IFZpZXc8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnkgVmlld1xyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Ym1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcC9sZWZ0LXNpZGViYXJcIj5TaWRlYmFyIExlZnQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3Avc2lkZWJhci1yaWdodFwiPlNpZGViYXIgUmlnaHQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIj5TaG9wcGluZyBDYXJ0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jaGVja291dFwiPkNoZWNrb3V0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi93aXNobGlzdFwiPk15IFdpc2hsaXN0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAgICAgICAgICAgIFByb2R1Y3RzIFR5cGVzXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3VibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG9wLzFcIj5TaW1wbGUgUHJvZHVjdDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcC8xOVwiPlZhcmlhYmxlIFByb2R1Y3Q8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3AvdXBjb21pbmcvMTZcIj5Qcm9kdWN0IFVwY29taW5nPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG9wL3VwLXRodW1iLzE2XCI+VGh1bWIgVG9wIFByb2R1Y3Q8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBhcmVcIj5Db21wYXJlPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPiAqL31cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzXCI+UHJvZHVjdHMgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cclxuICAgICAgICAgICAgICA8YT5CbG9nPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWJtZW51XCI+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nL2NvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPkJsb2cgMiBDb2x1bW48L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2cvY29sLW1hcy0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPkJsb2cgMiBDb2wgTWFzb25yeTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZy9jb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5CbG9nIDMgQ29sdW1uPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nL2NvbC1tYXMtM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5CbG9nIDMgQ29sIE1hc29ucnk8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2cvMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5CbG9nIERldGFpbHM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2cvMTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGE+QmxvZyBEZXRhaWxzIFZpZGVvPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxyXG4gICAgICAgICAgICAgIE5vc290cm9zXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIHsvKiAgIDx1bCBjbGFzc05hbWU9XCJzdWJtZW51XCI+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPk5vc290cm9zPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdG88L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+bG9naW48L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+UmVnaXN0cm88L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIj5DYXJyaXRvIGRlIENvbXByYTwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2hlY2tvdXRcIj5DaGVja291dDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd2lzaGxpc3RcIj5mYXZvcml0b3M8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wYXJlXCI+Q29tcGFyYXI8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL29yZGVyLXN1Y2Nlc3NcIj5PcmRlbiBleGl0b3NhPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+ICovfVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdG88L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2t0b3BIZWFkZXI7XHJcbiIsImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2ltZy9sb2dvL2xvZ28td2hpdGUucG5nXCI7XHJcblxyXG5jb25zdCBEYXNrdG9wSGVhZGVyMyA9ICgpID0+IHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFzaWMtYmFyIGluZm8tYmFyXCIgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKHRydWUpfT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXIxXCIgLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXIyXCIgLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXIzXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZXh0cmEtaW5mbyAke2lzT3BlbiA/IFwiaW5mby1vcGVuXCIgOiBcIlwifWB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2UtaWNvblwiIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLXdpbmRvdy1jbG9zZVwiIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tc2lkZVwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17TG9nb30gYWx0PVwiXCIgd2lkdGg9ezMwMH0gLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGUtaW5mbyBtYi0zMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLW1lbnUgc2lkZS1tZW51XCI+XHJcbiAgICAgICAgICAgIDxuYXYgaWQ9XCJtb2JpbGUtbWVudS0zXCIgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19PlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+SG9tZSBTdHlsZSAxPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbmRleC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkhvbWUgU3R5bGUgMjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5kZXgtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5Ib21lIFN0eWxlIDM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2luZGV4LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+SG9tZSBTdHlsZSA0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbmRleC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkhvbWUgU3R5bGUgNTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWdhLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG9wXCI+U2hvcDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Ym1lbnUgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnkgVmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Ym1lbnUgIGxldmVsLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcFwiPlNob3AgMiBDb2x1bW48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzXCI+U2hvcCBGaWx0ZXIgU3R5bGU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzXCI+U2hvcCBGdWxsPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG9wL2NvbC0zXCI+U2hvcCAzIENvbHVtbjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcC9saXN0XCI+TGlzdCBWaWV3PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhdGVnb3J5IFZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3AvbGVmdC1zaWRlYmFyXCI+U2lkZWJhciBMZWZ0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXItcmlnaHRcIj5TaWRlYmFyIFJpZ2h0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCI+U2hvcHBpbmcgQ2FydDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2hlY2tvdXRcIj5DaGVja291dDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd2lzaGxpc3RcIj5NeSBXaXNobGlzdDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0cyBUeXBlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Ym1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcC8xXCI+U2ltcGxlIFByb2R1Y3Q8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3AvMTlcIj5WYXJpYWJsZSBQcm9kdWN0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG9wL3VwY29taW5nLzE2XCI+UHJvZHVjdCBVcGNvbWluZzwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcC91cC10aHVtYi8xNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGh1bWIgVG9wIFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wYXJlXCI+Q29tcGFyZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHNcIj5Qcm9kdWN0cyA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5CbG9nPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nL2NvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkJsb2cgMiBDb2x1bW48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2cvY29sLW1hcy0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkJsb2cgMiBDb2wgTWFzb25yeTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZy9jb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5CbG9nIDMgQ29sdW1uPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nL2NvbC1tYXMtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5CbG9nIDMgQ29sIE1hc29ucnk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2cvMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5CbG9nIERldGFpbHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nLzEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkJsb2cgRGV0YWlscyBWaWRlbzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgICAgICAgICAgICAgICBQYWdlc1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0IFVzPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdCBVczwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5sb2dpbjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5SZWdpc3RlcjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlNob3BpbmcgQ2FydDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2hlY2tvdXRcIj5DaGVja291dDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd2lzaGxpc3RcIj5XaXNobGlzdDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcGFyZVwiPkNvbXBhcmU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL29yZGVyLXN1Y2Nlc3NcIj5PcmRlciBTdWNjZXNzPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5Db250YWN0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZS1pbmZvLWJvdHRvbVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlLWN0YVwiPlxyXG4gICAgICAgICAgICA8cD5pbmZvQGV4YW1wbGUuY29tPC9wPlxyXG4gICAgICAgICAgICA8aDQ+KygwOTApIDg3NjUgODY1NDMgODU8L2g0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pY29uLXJpZ2h0IG10LTIwXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWZcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXR3aXR0ZXJcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdvb2dsZS1wbHVzLWdcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbVwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2t0b3BIZWFkZXIzO1xyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTW9iaWxlSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttYWluSGVhZGVyLCBzZXRNYWluSGVhZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3ViTWVudSwgc2V0U3ViTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW211bHRpTWVudSwgc2V0TXVsdGlNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtbWVudSBtZWFuLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lYW4tYmFyXCI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCIjbmF2XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17YG1lYW5tZW51LXJldmVhbCAke1xyXG4gICAgICAgICAgICBtYWluSGVhZGVyXHJcbiAgICAgICAgICAgICAgPyBcImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBmcy0xOFwiXHJcbiAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE1haW5IZWFkZXIoIW1haW5IZWFkZXIpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHttYWluSGVhZGVyID8gKFxyXG4gICAgICAgICAgICBcIlhcIlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgIDxzcGFuIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICAgICAgICA8c3BhbiAvPlxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2BtZWFuLW5hdiBtb2JpbGUtaGVhZGVyICR7bWFpbkhlYWRlciA/IFwiYmxvY2tcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWdhLW1lbnVcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3AvY29sLTNcIj5UaWVuZGE8L0xpbms+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17YHN1Ym1lbnUgJHtzdWJNZW51ID09PSBcInNob3BcIiA/IFwiYmxvY2tcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Q2F0ZWdvcnkgVmlldzwvYT5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17YHN1Ym1lbnUgJHttdWx0aU1lbnUgPT09IFwiMVwiID8gXCJibG9ja1wiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3BcIj5TaG9wIDIgQ29sdW1uPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0c1wiPlNob3AgRmlsdGVyIFN0eWxlPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0c1wiPlNob3AgRnVsbDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcC9jb2wtM1wiPlNob3AgMyBDb2x1bW48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3AvbGlzdFwiPkxpc3QgVmlldzwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lYW4tZXhwYW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldE11bHRpTWVudShtdWx0aU1lbnUgPT09IFwiMVwiID8gZmFsc2UgOiBcIjFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHttdWx0aU1lbnUgPT09IFwiMVwiID8gXCItXCIgOiBcIitcIn1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgICAgICAgICAgICAgICBDYXRlZ29yeSBWaWV3XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17YHN1Ym1lbnUgJHttdWx0aU1lbnUgPT09IFwiMlwiID8gXCJibG9ja1wiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3AvbGVmdC1zaWRlYmFyXCI+U2lkZWJhciBMZWZ0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG9wL3NpZGViYXItcmlnaHRcIj5TaWRlYmFyIFJpZ2h0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCI+U2hvcHBpbmcgQ2FydDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2hlY2tvdXRcIj5DaGVja291dDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd2lzaGxpc3RcIj5NeSBXaXNobGlzdDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lYW4tZXhwYW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldE11bHRpTWVudShtdWx0aU1lbnUgPT09IFwiMlwiID8gZmFsc2UgOiBcIjJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHttdWx0aU1lbnUgPT09IFwiMlwiID8gXCItXCIgOiBcIitcIn1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Qcm9kdWN0cyBUeXBlczwvYT5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17YHN1Ym1lbnUgJHttdWx0aU1lbnUgPT09IFwiM1wiID8gXCJibG9ja1wiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3AvMVwiPlNpbXBsZSBQcm9kdWN0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG9wLzE5XCI+VmFyaWFibGUgUHJvZHVjdDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcC91cGNvbWluZy8xNlwiPlByb2R1Y3QgVXBjb21pbmc8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3AvdXAtdGh1bWIvMTZcIj5UaHVtYiBUb3AgUHJvZHVjdDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcGFyZVwiPkNvbXBhcmU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZWFuLWV4cGFuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRNdWx0aU1lbnUobXVsdGlNZW51ID09PSBcIjNcIiA/IGZhbHNlIDogXCIzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bXVsdGlNZW51ID09PSBcIjNcIiA/IFwiLVwiIDogXCIrXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5Ob3NvdHJvczwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWFuLWxhc3RcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5Db250YWN0bzwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZUhlYWRlcjtcclxuIiwiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZmlsdGVyQnlOYW1lIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbi9maWx0ZXJcIjtcclxuXHJcbmNvbnN0IFNlYXJjaFRyaWdnZXIgPSAoeyBmaWx0ZXJCeU5hbWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc1NlYXJjaCwgc2V0SXNTZWFyY2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBpZiAodGV4dCkge1xyXG4gICAgUm91dGVyLnB1c2goXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRobmFtZTogXCIvc2hvcFwiLFxyXG4gICAgICAgIC8vIHF1ZXJ5OiB7IHNvcnRCeTogJ3ByaWNlJyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgeyBzaGFsbG93OiB0cnVlIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRUZXh0KHRydWUpO1xyXG4gICAgc2V0SXNTZWFyY2goZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJzZWFyY2gtYnRuXCI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1idG4gbmF2LXNlYXJjaCBzZWFyY2gtdHJpZ2dlclwiXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc1NlYXJjaCh0cnVlKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCIgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2VhcmNoLXdyYXAgJHtpc1NlYXJjaCA/IFwiZC1ibG9ja1wiIDogXCJcIn1gfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1pbm5lclwiPlxyXG4gICAgICAgICAgPGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzIHNlYXJjaC1jbG9zZVwiXHJcbiAgICAgICAgICAgIGlkPVwic2VhcmNoLWNsb3NlXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNTZWFyY2goZmFsc2UpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWNlbGxcIj5cclxuICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwiZ2V0XCIgb25TdWJtaXQ9eyhlKSA9PiBvblN1Ym1pdChlKX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZmllbGQtaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW4tc2VhcmNoLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggRW50aXJlIFN0b3JlLi4uXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBmaWx0ZXJCeU5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IGZpbHRlckJ5TmFtZSB9KShTZWFyY2hUcmlnZ2VyKTtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZ2V0Q2FydHMsIHJlbW92ZUNhcnQgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uL3V0aWxpc1wiO1xyXG5pbXBvcnQgeyB0b3RhbFByaWNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzXCI7XHJcbmNvbnN0IFNob3BDYXJ0ID0gKHsgcmVtb3ZlQ2FydCwgZ2V0Q2FydHMgfSkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRDYXJ0cygpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBjYXJ0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXRpbGlzLmNhcnRzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJkLXNob3AtY2FydFwiPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLXNob3BwaW5nLWNhcnRcIiAvPntcIiBcIn1cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJ0LWNvdW50XCI+e2NhcnRzICYmIGNhcnRzLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1pbmljYXJ0XCI+XHJcbiAgICAgICAge2NhcnRzICYmIGNhcnRzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICBjYXJ0cy5tYXAoKGNhcnQpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17Y2FydC5pZH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zaG9wLyR7Y2FydC5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NhcnQuaW1nMX0gYWx0PVwiQ2FydFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Nob3AvJHtjYXJ0LmlkfWB9PntjYXJ0Lm5hbWV9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2NhcnQubWFpblByaWNlfSAqIHtjYXJ0LnF0eX1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgPVwifVxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXcgbWwtMSBcIj4ke2NhcnQudG90YWxQcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUNhcnQoY2FydC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJSZW1vdmUgaXRlbSBmcm9tIGNhcnRzXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtdHJhc2gtYWx0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxoMz5DYXJyaXRvIHZhY2lvPC9oMz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWwtcHJpY2VcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZi1sZWZ0XCI+VG90YWw6PC9zcGFuPlxyXG4gICAgICAgICAgICB7Y2FydHMgJiYgPHNwYW4gY2xhc3NOYW1lPVwiZi1yaWdodFwiPiR7dG90YWxQcmljZShjYXJ0cyl9PC9zcGFuPn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dC1saW5rXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlByb2R1Y3RvcyBjb21wcmE8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2hlY2tvdXRcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZWQtY29sb3JcIj5JciBhIENoZWNrb3V0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IHJlbW92ZUNhcnQsIGdldENhcnRzIH0pKFNob3BDYXJ0KTtcclxuIiwiaW1wb3J0IHtcclxuICBGSUxURVJfQlJBTkQsXHJcbiAgRklMVEVSX0NBVEFHT1JZLFxyXG4gIEZJTFRFUl9DT0xPUixcclxuICBGSUxURVJfTkFNRSxcclxuICBGSUxURVJfUFJJQ0UsXHJcbiAgRklMVEVSX1NJWkUsXHJcbiAgRklMVEVSX1RBRyxcclxufSBmcm9tIFwiLi90eXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmlsdGVyQnlOYW1lID0gKHZhbHVlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBGSUxURVJfTkFNRSxcclxuICAgIHBheWxvYWQ6IHZhbHVlLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRlckJ5QnJhbmQgPSAodmFsdWUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IEZJTFRFUl9CUkFORCxcclxuICAgIHBheWxvYWQ6IHZhbHVlLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRlckJ5Q2F0YWdvcnkgPSAodmFsdWUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IEZJTFRFUl9DQVRBR09SWSxcclxuICAgIHBheWxvYWQ6IHZhbHVlLFxyXG4gIH0pO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZmlsdGVyQnlTaXplID0gKHZhbHVlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBGSUxURVJfU0laRSxcclxuICAgIHBheWxvYWQ6IHZhbHVlLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRlckJ5UHJpY2UgPSAodmFsdWUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IEZJTFRFUl9QUklDRSxcclxuICAgIHBheWxvYWQ6IHZhbHVlLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRlckJ5Q29sb3IgPSAodmFsdWUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogRklMVEVSX0NPTE9SLCBwYXlsb2FkOiB2YWx1ZSB9KTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGZpbHRlckJ5VGFncyA9ICh2YWx1ZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiBGSUxURVJfVEFHLCBwYXlsb2FkOiB2YWx1ZSB9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgZmF0Y2hEYXRhIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2ZhdGNoRGF0YVwiO1xyXG5pbXBvcnQgeyBHRVRfUFJPRFVDVCwgR0VUX1NJTkdMRSB9IGZyb20gXCIuL3R5cGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0cyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IEdFVF9QUk9EVUNULFxyXG4gICAgcGF5bG9hZDogYXdhaXQgZmF0Y2hEYXRhKFwiL3N0YXRpYy9wcm9kdWN0Lmpzb25cIiksXHJcbiAgfSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRTaW5nbGVQcm9kdWN0ID0gKGlkKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmF0Y2hEYXRhKFwiL3N0YXRpYy9wcm9kdWN0Lmpzb25cIik7XHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogR0VUX1NJTkdMRSxcclxuICAgIHBheWxvYWQ6IGRhdGEuZmluZCgoZGF0YSkgPT4gZGF0YS5pZCA9PT0gaWQpLFxyXG4gIH0pO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgSE9NRV8xID0gXCJIT01FXzFcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9CTE9HID0gXCJHRVRfQkxPR1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX01BU19CTE9HID0gXCJHRVRfTUFTX0JMT0dcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9TSU5HTEVfQkxPRyA9IFwiR0VUX1NJTkdMRV9CTE9HXCI7XHJcbmV4cG9ydCBjb25zdCBORVhUX1BPU1QgPSBcIk5FWFRfUE9TVFwiO1xyXG5leHBvcnQgY29uc3QgUFJFVl9QT1NUID0gXCJQUkVWX1BPU1RcIjtcclxuZXhwb3J0IGNvbnN0IFRPUF9TRUxMRVIgPSBcIlRPUF9TRUxMRVJcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GRUFUVVJFUyA9IFwiR0VUX0ZFQVRVUkVTXCI7XHJcbmV4cG9ydCBjb25zdCBIT01FXzIgPSBcIkhPTUVfMlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1VQQ09NSU5HX1BST0RVQ1QgPSBcIkdFVF9VUENPTUlOR19QUk9EVUNUXCI7XHJcbmV4cG9ydCBjb25zdCBIT01FXzMgPSBcIkhPTUVfM1wiO1xyXG5leHBvcnQgY29uc3QgSE9NRV80ID0gXCJIT01FXzRcIjtcclxuZXhwb3J0IGNvbnN0IEhPTUVfNSA9IFwiSE9NRV81XCI7XHJcblxyXG4vLyBQcm9kdWN0XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVCA9IFwiR0VUX1BST0RVQ1RcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9TSU5HTEUgPSBcIkdFVF9TSU5HTEVcIjtcclxuXHJcbi8vIGZpbHRlclxyXG5leHBvcnQgY29uc3QgRklMVEVSX05BTUUgPSBcIkZJTFRFUl9OQU1FXCI7XHJcbmV4cG9ydCBjb25zdCBGSUxURVJfQlJBTkQgPSBcIkZJTFRFUl9CUkFORFwiO1xyXG5leHBvcnQgY29uc3QgRklMVEVSX0NBVEFHT1JZID0gXCJGSUxURVJfQ0FUQUdPUllcIjtcclxuZXhwb3J0IGNvbnN0IEZJTFRFUl9TSVpFID0gXCJGSUxURVJfU0laRVwiO1xyXG5leHBvcnQgY29uc3QgRklMVEVSX1BSSUNFID0gXCJGSUxURVJfUFJJQ0VcIjtcclxuZXhwb3J0IGNvbnN0IEZJTFRFUl9DT0xPUiA9IFwiRklMVEVSX0NPTE9SXCI7XHJcbmV4cG9ydCBjb25zdCBGSUxURVJfVEFHID0gXCJGSUxURVJfVEFHXCI7XHJcblxyXG4vLyBVdGlsZXNcclxuZXhwb3J0IGNvbnN0IEdFVF9DQVJUUyA9IFwiR0VUX0NBUlRTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfVE9fQ0FSVCA9IFwiQUREX1RPX0NBUlRcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DQVJUID0gXCJSRU1PVkVfQ0FSVFwiO1xyXG5leHBvcnQgY29uc3QgREVDUkVBU0VfQ0FSVCA9IFwiREVDUkVBU0VfQ0FSVFwiO1xyXG5leHBvcnQgY29uc3QgQ0FSVF9BTU9VTlQgPSBcIkNBUlRfQU1PVU5UXCI7XHJcbmV4cG9ydCBjb25zdCBDT01QQVJFID0gXCJDT01QQVJFXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ09NUEFSRSA9IFwiR0VUX0NPTVBBUkVcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01QQVJFID0gXCJSRU1PVkVfQ09NUEFSRVwiO1xyXG5leHBvcnQgY29uc3QgUVVJQ0tfVklFVyA9IFwiUVVJQ0tfVklFV1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1dJU0hMSVNUID0gXCJBRERfV0lTSExJU1RcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9XSVNITElTVCA9IFwiR0VUX1dJU0hMSVNUXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hFQ0tPVVRfVVNFUiA9IFwiQ0hFQ0tPVVRfVVNFUlwiO1xyXG4iLCJpbXBvcnQgeyBnZXRMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbG9jYWxzdG9yYWdlXCI7XHJcbmltcG9ydCB7XHJcbiAgQUREX1RPX0NBUlQsXHJcbiAgQUREX1dJU0hMSVNULFxyXG4gIENIRUNLT1VUX1VTRVIsXHJcbiAgQ09NUEFSRSxcclxuICBERUNSRUFTRV9DQVJULFxyXG4gIEdFVF9DQVJUUyxcclxuICBHRVRfQ09NUEFSRSxcclxuICBHRVRfV0lTSExJU1QsXHJcbiAgUkVNT1ZFX0NBUlQsXHJcbiAgUkVNT1ZFX0NPTVBBUkUsXHJcbn0gZnJvbSBcIi4vdHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENhcnRzID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogR0VUX0NBUlRTLFxyXG4gICAgcGF5bG9hZDogZ2V0TG9jYWxTdG9yYWdlKFwidnVlLWVjb21tZXJjZVwiKSxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRUb0NhcnQgPSAocHJvZHVjdCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogQUREX1RPX0NBUlQsXHJcbiAgICBwYXlsb2FkOiBwcm9kdWN0LFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNhcnQgPSAoaWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IFJFTU9WRV9DQVJULFxyXG4gICAgcGF5bG9hZDogaWQsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVjcmVhc2VDYXJ0ID0gKHByb2R1Y3QpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IERFQ1JFQVNFX0NBUlQsXHJcbiAgICBwYXlsb2FkOiBwcm9kdWN0LFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFdpc2hsaXN0ID0gKHByb2R1Y3QpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IEFERF9XSVNITElTVCxcclxuICAgIHBheWxvYWQ6IHByb2R1Y3QsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0V2lzaGxpc3QgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBHRVRfV0lTSExJU1QsXHJcbiAgICBwYXlsb2FkOiBnZXRMb2NhbFN0b3JhZ2UoXCJ2dWUtd2lzaGxpc3RcIiksXHJcbiAgfSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRDb21wYXJlID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogR0VUX0NPTVBBUkUsXHJcbiAgICBwYXlsb2FkOiBnZXRMb2NhbFN0b3JhZ2UoXCJ2dWUtY29tcGFyZXNcIiksXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY29tcGFyZSA9IChwcm9kdWN0KSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBDT01QQVJFLFxyXG4gICAgcGF5bG9hZDogcHJvZHVjdCxcclxuICB9KTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvbXBhcmUgPSAocHJvZHVjdCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogUkVNT1ZFX0NPTVBBUkUsXHJcbiAgICBwYXlsb2FkOiBwcm9kdWN0LFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldENoZWNrb3V0RGF0YSA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBDSEVDS09VVF9VU0VSLFxyXG4gICAgcGF5bG9hZDogZGF0YSxcclxuICB9KTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGZhdGNoRGF0YSA9IGFzeW5jICh1cmwpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHt1cmx9YCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcbiIsImltcG9ydCB7IHNldExvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2Fsc3RvcmFnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RCeUZpbHRlciA9IChkYXRhLCBmaWx0ZXJzKSA9PiB7XHJcbiAgbGV0IGZpbHRlcmVkTGlzdCA9IGRhdGEgJiYgWy4uLmRhdGFdO1xyXG5cclxuICBmb3IgKGNvbnN0IGtleSBpbiBmaWx0ZXJzKSB7XHJcbiAgICBpZiAoa2V5ICE9PSBcInByaWNlXCIpIHtcclxuICAgICAgaWYgKGtleSA9PT0gXCJzZWFyY2hcIikge1xyXG4gICAgICAgIGZpbHRlcmVkTGlzdCA9XHJcbiAgICAgICAgICBmaWx0ZXJlZExpc3QgJiZcclxuICAgICAgICAgIGZpbHRlcmVkTGlzdC5maWx0ZXIoKGRhdGEpID0+XHJcbiAgICAgICAgICAgIGRhdGEubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlcnNba2V5XS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoa2V5ID09PSBcImNvbG9yc1wiIHx8IGtleSA9PT0gXCJjYXRlZ29yeVwiIHx8IGtleSA9PT0gXCJ0YWdzXCIpIHtcclxuICAgICAgICAgIGZpbHRlcmVkTGlzdCA9IGZpbHRlckluQXJyYXkoZmlsdGVyZWRMaXN0LCBmaWx0ZXJzW2tleV0sIGtleSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZpbHRlcmVkTGlzdCA9IGZpbHRlckJ5S2V5KGZpbHRlcmVkTGlzdCwgZmlsdGVyc1trZXldLCBrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlsdGVyZWRMaXN0ID0gZmlsdGVyQnlQcmljZShmaWx0ZXJlZExpc3QsIGZpbHRlcnNba2V5XSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmaWx0ZXJlZExpc3Q7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJCeUtleShmaWx0ZXJlZExpc3QsIHNpemUsIGtleSkge1xyXG4gIGxldCBsaXN0ID0gW107XHJcbiAgaWYgKCFzaXplIHx8IHNpemUubGVuZ3RoID09PSAwKSByZXR1cm4gZmlsdGVyZWRMaXN0O1xyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmaWx0ZXJlZExpc3QubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gZmlsdGVyZWRMaXN0W2luZGV4XTtcclxuICAgIGNvbnN0IGlzT2sgPSBzaXplLmluZGV4T2YocHJvZHVjdFtrZXldKTtcclxuICAgIGlmIChpc09rICE9PSAtMSkge1xyXG4gICAgICBsaXN0LnB1c2gocHJvZHVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbGlzdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyQnlQcmljZShmaWx0ZXJlZExpc3QsIHByaWNlKSB7XHJcbiAgcmV0dXJuIChmaWx0ZXJlZExpc3QgPVxyXG4gICAgZmlsdGVyZWRMaXN0ICYmXHJcbiAgICBmaWx0ZXJlZExpc3QuZmlsdGVyKFxyXG4gICAgICAocHJvZHVjdCkgPT5cclxuICAgICAgICBOdW1iZXIocHJvZHVjdC5tYWluUHJpY2UpID49IHByaWNlLm1pbiAmJlxyXG4gICAgICAgIE51bWJlcihwcm9kdWN0Lm1haW5QcmljZSkgPD0gcHJpY2UubWF4XHJcbiAgICApKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVySW5BcnJheShmaWx0ZXJlZExpc3QsIHZhbHVlLCBrZXkpIHtcclxuICByZXR1cm4gZmlsdGVyZWRMaXN0ICYmIHZhbHVlLmxlbmd0aCA+IDBcclxuICAgID8gZmlsdGVyZWRMaXN0LmZpbHRlcihcclxuICAgICAgICAoZGF0YSkgPT4gZGF0YVtrZXldICYmIGRhdGFba2V5XS5maW5kKChmKSA9PiB2YWx1ZS5pbmNsdWRlcyhmKSlcclxuICAgICAgKVxyXG4gICAgOiBmaWx0ZXJlZExpc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaW1wbGVQcm9kdWN0RmlsdGVyID0gKGtleSwgYXJyKSA9PiB7XHJcbiAgbGV0IGlzQXJyID0gdHlwZW9mIGtleSAhPT0gXCJzdHJpbmdcIiA/IHRydWUgOiBmYWxzZTtcclxuICB2YXIgc29ydGVkID0gaXNBcnJcclxuICAgID8ga2V5ICYmXHJcbiAgICAgIGtleVxyXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zb3J0KClcclxuICAgIDogW2tleS50b0xvd2VyQ2FzZSgpXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIGFyciAmJlxyXG4gICAgYXJyLmZpbHRlcigoYXJyKSA9PlxyXG4gICAgICBhcnIuY2F0ZWdvcnkuZmluZCgoZSkgPT5cclxuICAgICAgICBlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc29ydGVkICYmIHNvcnRlZC5qb2luKFwiLFwiKSlcclxuICAgICAgKVxyXG4gICAgKVxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZXhpdHNQcm9kdWN0ID0gKHN0YXRlLCBpdGVtKSA9PiB7XHJcbiAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgbGV0IHZhbHVlID1cclxuICAgIHN0YXRlICYmIHN0YXRlLmZpbmQoKHByb2R1Y3QpID0+IE51bWJlcihwcm9kdWN0LmlkKSA9PT0gTnVtYmVyKGl0ZW0uaWQpKTtcclxuICByZXR1cm4gdmFsdWU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQ2FydCA9IChzdGF0ZSwgaXRlbSwgdHlwZSkgPT4ge1xyXG4gIGNvbnN0IGV4aXRzQ2FydHMgPVxyXG4gICAgc3RhdGUuY2FydHMgJiZcclxuICAgIHN0YXRlLmNhcnRzLmZpbmQoKHByb2R1Y3QpID0+IE51bWJlcihwcm9kdWN0LmlkKSA9PT0gTnVtYmVyKGl0ZW0uaWQpKTtcclxuICBsZXQgcmVzdWx0ID0ge307XHJcblxyXG4gIGlmIChzdGF0ZS5jYXJ0cykge1xyXG4gICAgaWYgKGV4aXRzQ2FydHMpIHtcclxuICAgICAgZXhpdHNDYXJ0cy5xdHkgPVxyXG4gICAgICAgIHR5cGUgPT09IFwiK1wiID8gKGV4aXRzQ2FydHMucXR5ICs9IDEpIDogKGV4aXRzQ2FydHMucXR5IC09IDEpO1xyXG4gICAgICBleGl0c0NhcnRzLnRvdGFsUHJpY2UgPVxyXG4gICAgICAgIE51bWJlcihleGl0c0NhcnRzLnF0eSkgKiBOdW1iZXIoZXhpdHNDYXJ0cy5tYWluUHJpY2UpO1xyXG4gICAgICBzZXRMb2NhbFN0b3JhZ2UoXCJ2dWUtZWNvbW1lcmNlXCIsIHN0YXRlLmNhcnRzKTtcclxuICAgICAgcmVzdWx0ID0ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcnRzOiBbLi4uc3RhdGUuY2FydHNdLFxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXRlbS5xdHkgPSAxO1xyXG4gICAgICBpdGVtLnRvdGFsUHJpY2UgPSBOdW1iZXIoaXRlbS5tYWluUHJpY2UpO1xyXG4gICAgICBzZXRMb2NhbFN0b3JhZ2UoXCJ2dWUtZWNvbW1lcmNlXCIsIFsuLi5zdGF0ZS5jYXJ0cywgaXRlbV0pO1xyXG4gICAgICByZXN1bHQgPSB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydHM6IFsuLi5zdGF0ZS5jYXJ0cywgaXRlbV0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBzZXRMb2NhbFN0b3JhZ2UgPSAobmFtZSwgaXRlbXMpID0+IHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBKU09OLnN0cmluZ2lmeShpdGVtcykpO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0TG9jYWxTdG9yYWdlID0gKG5hbWUpID0+IHtcclxuICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSk7XHJcbiAgaWYgKGRhdGEpIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBKU09OLnN0cmluZ2lmeShbXSkpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGFjdGl2ZURhdGEgPSAoYWN0aXZlLCBzb3J0LCBwcm9kdWN0cykgPT4ge1xyXG4gIGZ1bmN0aW9uIF8obnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbnVtYmVyIDw9IDkgPyBgMCR7bnVtYmVyfWAgOiBudW1iZXI7XHJcbiAgfVxyXG4gIHJldHVybiBgU2hvd2luZyAke1xyXG4gICAgcHJvZHVjdHMgJiYgcHJvZHVjdHMubGVuZ3RoID8gXyhhY3RpdmUgKiBzb3J0ICsgMSkgOiBcIjAwXCJcclxuICB94oCTJHtcclxuICAgIHByb2R1Y3RzICYmIHByb2R1Y3RzLmxlbmd0aCA+IChhY3RpdmUgKyAxKSAqIHNvcnRcclxuICAgICAgPyBfKChhY3RpdmUgKyAxKSAqIHNvcnQpXHJcbiAgICAgIDogXyhwcm9kdWN0cyAmJiBwcm9kdWN0cy5sZW5ndGgpXHJcbiAgfVxyXG4gICAgIG9mICR7Xyhwcm9kdWN0cyAmJiBwcm9kdWN0cy5sZW5ndGgpfSByZXN1bHRzYDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVTdGF0ZSA9IChzdGF0ZSwgcGF5bG9hZCkgPT4ge1xyXG4gIHJldHVybiBzdGF0ZSAmJiBzdGF0ZS5pbmNsdWRlcyhwYXlsb2FkKVxyXG4gICAgPyBzdGF0ZS5maWx0ZXIoKGJyYW5kKSA9PiBicmFuZCAhPT0gcGF5bG9hZClcclxuICAgIDogWy4uLnN0YXRlLCBwYXlsb2FkXTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGlja1RvQWN0aXZlID0gKGFjdGl2ZUFyciwgdmFsdWUsIHNldEFjdGl2ZUFycikgPT4ge1xyXG4gIGlmIChhY3RpdmVBcnIuaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICBzZXRBY3RpdmVBcnIoYWN0aXZlQXJyLmZpbHRlcigoYWN0aXZlKSA9PiBhY3RpdmUgIT09IHZhbHVlKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNldEFjdGl2ZUFycihbLi4uYWN0aXZlQXJyLCB2YWx1ZV0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREaXNjb3VudCA9ICh2YWx1ZSwgZGlzY291bnQpID0+IHtcclxuICBjb25zdCB2YWx1ZUJlZm9yRGlzY291bnQgPSB2YWx1ZSAtICh2YWx1ZSAqIGRpc2NvdW50KSAvIDEwMDtcclxuICByZXR1cm4gdmFsdWVCZWZvckRpc2NvdW50LnRvRml4ZWQoMik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2Nyb2xsID0gKCkgPT4ge1xyXG4gIGxldCBvZmZzZXQgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICBjb25zdCBzdGlja3kgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1zdGlja3lcIik7XHJcbiAgaWYgKHN0aWNreSkge1xyXG4gICAgaWYgKG9mZnNldCA+IDMwMCkge1xyXG4gICAgICBzdGlja3kuY2xhc3NMaXN0LmFkZChcInN0aWNreS1oZWFkZXJcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGlja3kuY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreS1oZWFkZXJcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRibG9jayA9IChhY3RpdmUsIGlkLCBzb3J0KSA9PiB7XHJcbiAgaWYgKGFjdGl2ZSA9PT0gMCkge1xyXG4gICAgcmV0dXJuIGlkICsgMSA+PSAwICYmIGlkICsgMSA8PSBzb3J0ID8gXCJkLWJsb2NrXCIgOiBcImQtbm9uZVwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gaWQgKyAxID4gYWN0aXZlICogc29ydCAmJiBpZCArIDEgPD0gKGFjdGl2ZSArIDEpICogc29ydFxyXG4gICAgICA/IFwiZC1ibG9ja1wiXHJcbiAgICAgIDogXCJkLW5vbmVcIjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGF0YUltYWdlID0gKCkgPT4ge1xyXG4gIGxldCBkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWJhY2tncm91bmRcIik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZFtpXTtcclxuICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2VsZW1lbnQuZ2V0QXR0cmlidXRlKFxyXG4gICAgICBcImRhdGEtYmFja2dyb3VuZFwiXHJcbiAgICApfSlgO1xyXG4gICAgLy8gY29uc29sZS5sb2coZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJhY2tncm91bmRcIikpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b3RhbFByaWNlID0gKGl0ZW1zKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIGl0ZW1zICYmXHJcbiAgICBpdGVtc1xyXG4gICAgICAubWFwKChpdGVtKSA9PiBpdGVtLnRvdGFsUHJpY2UpXHJcbiAgICAgIC5yZWR1Y2UoKHByZXYsIG5leHQpID0+IHByZXYgKyBuZXh0LCAwKVxyXG4gICAgICAudG9GaXhlZCgyKVxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1nL2Jhbm5lci9mb3RvRm9vdGVyLjZmZGYyNTFmMzA1MWI5ZDRiYTU0Zjk3Nzg5YzIwY2FlLnBuZ1wiLFwiaGVpZ2h0XCI6MjM1LFwid2lkdGhcIjo0MDUsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRmltYWdlJTJGcHVibGljJTJGaW1nJTJGYmFubmVyJTJGZm90b0Zvb3Rlci42ZmRmMjUxZjMwNTFiOWQ0YmE1NGY5Nzc4OWMyMGNhZS5wbmcmdz04JnE9NzBcIn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWcvaWNvbi90aW1lLjg0ZjRjZjMzYmRmNTNkY2EwNjA0MmRmN2U0N2JjZTU3LnBuZ1wiLFwiaGVpZ2h0XCI6NDAsXCJ3aWR0aFwiOjQwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRnB1YmxpYyUyRmltZyUyRmljb24lMkZ0aW1lLjg0ZjRjZjMzYmRmNTNkY2EwNjA0MmRmN2U0N2JjZTU3LnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltZy9sb2dvL2xvZ28td2hpdGUuMWMzNzRlMGI2NjI3OWU4OTc1ZTc0MjkwYTZiMDVhNDYucG5nXCIsXCJoZWlnaHRcIjoyMixcIndpZHRoXCI6NzYsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRmltYWdlJTJGcHVibGljJTJGaW1nJTJGbG9nbyUyRmxvZ28td2hpdGUuMWMzNzRlMGI2NjI3OWU4OTc1ZTc0MjkwYTZiMDVhNDYucG5nJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1nL2xvZ28vbG9nb0Zvb3Rlci5kOWMwNWJhYWExZWQ2ZGMxZTgzYzM2MDQ1NWE2ZDk3Ny5wbmdcIixcImhlaWdodFwiOjg4NixcIndpZHRoXCI6NTY0LFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRnB1YmxpYyUyRmltZyUyRmxvZ28lMkZsb2dvRm9vdGVyLmQ5YzA1YmFhYTFlZDZkYzFlODNjMzYwNDU1YTZkOTc3LnBuZyZ3PTgmcT03MFwifTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ob3QtdG9hc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW5wdXQtcmFuZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJJbWFnZTEiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwiX3RvQmFzZTY0IiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9fZXNNb2R1bGUiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uY2F0IiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZm9yRWFjaCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsImV4Y2x1ZGVkIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2VTeW1ib2xLZXlzIiwiaW5kZXhPZiIsInByb3RvdHlwZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY2FsbCIsInNvdXJjZUtleXMiLCJsb2FkZWRJbWFnZVVSTHMiLCJTZXQiLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsInVuZGVmaW5lZCIsImxvYWRlcnMiLCJNYXAiLCJkZWZhdWx0TG9hZGVyIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiY3VzdG9tTG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9JTUFHRV9PUFRTIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJzb3J0IiwiYSIsImIiLCJnZXRXaWR0aHMiLCJ3aWR0aCIsImxheW91dCIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwicHVzaCIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJtaW4iLCJ3aWR0aHMiLCJzIiwia2luZCIsIm1hcCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0Iiwiam9pbiIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwiaGFuZGxlTG9hZGluZyIsImltZyIsInBsYWNlaG9sZGVyIiwib25Mb2FkaW5nQ29tcGxldGUiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImFkZCIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9wYXJhbSIsInByaW9yaXR5IiwibG9hZGluZyIsImxhenlCb3VuZGFyeSIsImNsYXNzTmFtZSIsImhlaWdodCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImlzTGF6eSIsImhhcyIsImluY2x1ZGVzIiwiU3RyaW5nIiwiaXNOYU4iLCJjb25zb2xlIiwid2FybiIsIlZBTElEX0JMVVJfRVhUIiwicmFuZCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJkaXNwbGF5IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImJsdXJTdHlsZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm92ZXJmbG93IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaW1nQXR0cmlidXRlcyIsInNyY1N0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJ0b0Jhc2U2NCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVmIiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJ1cmwiLCJVUkwiLCJwYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiZXJyIiwiZXJyb3IiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJMaW5rIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInNldEludGVyc2VjdGlvblJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJ1c2VFZmZlY3QiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInR5cGUiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwiZW5kc1dpdGgiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwid2luZG93IiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJpZCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJmdXR1cmUiLCJyZXNvbHZlciIsInByb20iLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJjcm9zc09yaWdpbiIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFwcGVuZFNjcmlwdCIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImZpbmFsbHkiLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJfd2l0aFJvdXRlciIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXJDb250ZXh0Iiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJkb21haW4iLCJwYXRobmFtZSIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJwYXRobmFtZTEiLCJxdWVyeTEiLCJhczEiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsIkNvbXBvbmVudDEiLCJlcnIxIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsInNkYyIsInNkciIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhZ2VYT2Zmc2V0IiwieSIsInBhZ2VZT2Zmc2V0IiwiZ2V0SXRlbSIsInBhcnNlIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJzZWFyY2giLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIlNob3AiLCJTaG9wQ29sMyIsIlBhZ2dpbmF0aW9uIiwic2V0QWN0aXZlIiwiYWN0aXZlIiwiY2VpbCIsImZpbGwiLCJtIiwidG9hc3QiLCJjb25uZWN0IiwidXNlU2VsZWN0b3IiLCJhZGRUb0NhcnQiLCJhZGRXaXNobGlzdCIsImNvbXBhcmUiLCJnZXRXaXNobGlzdCIsInJlbW92ZUNvbXBhcmUiLCJQcm9kdWN0TW9kYWwiLCJQcm9kdWN0IiwicHJvZHVjdCIsIndyYXBwZXJQYWRkaW5nMCIsIndpc2hsaXN0IiwidXRpbGlzIiwiY29tcGFyZXMiLCJxdWlja1ZpZXciLCJzZXRRdWlja1ZpZXciLCJhZGRDb21wYXJlIiwic2V0QWRkQ29tcGFyZSIsImFkZENhcnQiLCJzZXRhZGRDYXJ0IiwiYWRkV2lzaGxpc3RfIiwic2V0QWRkV2lzaGxpc3RfIiwib25DbGlja0NvbXBhcmUiLCJleGl0c0l0ZW0iLCJzdWNjZXNzIiwib25DbGlja0NhcnQiLCJvbkNsaWNrV2lzaGxpc3QiLCJ3aXNobGlzdF8iLCJpbWcxIiwiaW1nMiIsIm5ldyIsInNhbGUiLCJicmFuZCIsIk51bWJlciIsIm1haW5QcmljZSIsInRvRml4ZWQiLCJwcmljZSIsInBybyIsIlByb2R1Y3RMaXN0VmlldyIsImNvbDUiLCJNb2RhbCIsIk5hdiIsIlRhYiIsImRlY3JlYXNlQ2FydCIsInNob3ciLCJoYW5kbGVDbG9zZSIsImNhcnRzIiwid2lzaGxpc3RzIiwiY2FydCIsImltYWdlcyIsImNvbG9ycyIsImNvbG9yIiwiY2F0ZWdvcnkiLCJzdG9jayIsInF0eSIsIm1hcFN0YXRlVG9Qcm9wcyIsImNsaWNrVG9BY3RpdmUiLCJDb2xvckZpbHRlciIsImZpbHRlckJ5Q29sb3IiLCJzZXRBY3RpdmVfIiwiYWN0aXZlRnVuIiwiZmlsdGVyQnlCcmFuZCIsImZpbHRlckJ5Q2F0YWdvcnkiLCJmaWx0ZXJCeU5hbWUiLCJmaWx0ZXJCeVByaWNlIiwiZmlsdGVyQnlTaXplIiwiZmlsdGVyQnlUYWdzIiwiRmlsdGVyQnlDaGVja0JveCIsIkZpbHRlckJ5VGFncyIsIlByaWNlRmlsdGVyIiwiRmlsdGVyIiwicHJvZHVjdHMiLCJ0aXRsZSIsImFyciIsImZ1bnRpb24iLCJ0YWdzIiwidGFnIiwiRnJhZ21lbnQiLCJJbnB1dFJhbmdlIiwic2V0UHJpY2UiLCJwcmljZXMiLCJnZXRDb21wYXJlIiwiQ29tcGFyZUljb24iLCJJbWFnZSIsIkJhbm5lciIsIlRpbWUiLCJMb2dvIiwiRm9vdGVyIiwiY29udGFpbmVyIiwiZm9vdGVyQmciLCJ0ZXh0Q2VudGVyIiwiZ2V0RnVsbFllYXIiLCJSZWFjdCIsIkNhdGFnb3J5IiwiRGFza3RvcEhlYWRlcjEiLCJNb2JpbGVIZWFkZXIiLCJTZWFyY2hUcmlnZ2VyIiwiU2hvcENhcnQiLCJIZWFkZXIiLCJzdGlja3kiLCJ0cmFuc3BhcmVudCIsIndoaXRlTWVudSIsImV4dHJhVHJhbnNwYXJlbnRDbGFzcyIsIkRhc2t0b3BIZWFkZXIyIiwiSGVhZGVyMiIsIldpc2hMaXN0SWNvbiIsIkxheW91dCIsImhlYWRlcjIiLCJkYXRhSW1hZ2UiLCJQYWdlVGl0bGUiLCJwYWdlSGVhZGluZyIsInRoYW5rdXBhZ2UiLCJUYWJDb250YWluZXIiLCJUYWJDb250ZW50IiwiVGFiUGFuZSIsImdldFByb2R1Y3RzIiwiZ2V0UHJvZHVjdEJ5RmlsdGVyIiwiYWN0aXZlRGF0YSIsImRibG9jayIsImNvbCIsImJhbm5lciIsImRlZnVsdEFjdGl2ZSIsImxlZnRTaWRlQmFyIiwiY2F0TWVudSIsInNldENhdE1lbnUiLCJEYXNrdG9wSGVhZGVyIiwiRGFza3RvcEhlYWRlcjMiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJtYWluSGVhZGVyIiwic2V0TWFpbkhlYWRlciIsInN1Yk1lbnUiLCJzZXRTdWJNZW51IiwibXVsdGlNZW51Iiwic2V0TXVsdGlNZW51IiwiaXNTZWFyY2giLCJzZXRJc1NlYXJjaCIsInNldFRleHQiLCJvblN1Ym1pdCIsImdldENhcnRzIiwicmVtb3ZlQ2FydCIsInRvdGFsUHJpY2UiLCJGSUxURVJfQlJBTkQiLCJGSUxURVJfQ0FUQUdPUlkiLCJGSUxURVJfQ09MT1IiLCJGSUxURVJfTkFNRSIsIkZJTFRFUl9QUklDRSIsIkZJTFRFUl9TSVpFIiwiRklMVEVSX1RBRyIsImRpc3BhdGNoIiwicGF5bG9hZCIsImZhdGNoRGF0YSIsIkdFVF9QUk9EVUNUIiwiR0VUX1NJTkdMRSIsImdldFNpbmdsZVByb2R1Y3QiLCJIT01FXzEiLCJHRVRfQkxPRyIsIkdFVF9NQVNfQkxPRyIsIkdFVF9TSU5HTEVfQkxPRyIsIk5FWFRfUE9TVCIsIlBSRVZfUE9TVCIsIlRPUF9TRUxMRVIiLCJHRVRfRkVBVFVSRVMiLCJIT01FXzIiLCJHRVRfVVBDT01JTkdfUFJPRFVDVCIsIkhPTUVfMyIsIkhPTUVfNCIsIkhPTUVfNSIsIkdFVF9DQVJUUyIsIkFERF9UT19DQVJUIiwiUkVNT1ZFX0NBUlQiLCJERUNSRUFTRV9DQVJUIiwiQ0FSVF9BTU9VTlQiLCJDT01QQVJFIiwiR0VUX0NPTVBBUkUiLCJSRU1PVkVfQ09NUEFSRSIsIlFVSUNLX1ZJRVciLCJBRERfV0lTSExJU1QiLCJHRVRfV0lTSExJU1QiLCJDSEVDS09VVF9VU0VSIiwiZ2V0TG9jYWxTdG9yYWdlIiwic2V0Q2hlY2tvdXREYXRhIiwic2V0TG9jYWxTdG9yYWdlIiwiZmlsdGVycyIsImZpbHRlcmVkTGlzdCIsImZpbHRlckluQXJyYXkiLCJmaWx0ZXJCeUtleSIsImxpc3QiLCJpbmRleCIsImlzT2siLCJmIiwic2ltcGxlUHJvZHVjdEZpbHRlciIsImlzQXJyIiwic29ydGVkIiwiZXhpdHNQcm9kdWN0IiwiaXRlbSIsImxvZyIsInVwZGF0ZUNhcnQiLCJleGl0c0NhcnRzIiwiaXRlbXMiLCJsb2NhbFN0b3JhZ2UiLCJudW1iZXIiLCJ1cGRhdGVTdGF0ZSIsImFjdGl2ZUFyciIsInNldEFjdGl2ZUFyciIsImdldERpc2NvdW50IiwiZGlzY291bnQiLCJ2YWx1ZUJlZm9yRGlzY291bnQiLCJvZmZzZXQiLCJzY3JvbGxZIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRBdHRyaWJ1dGUiLCJyZWR1Y2UiLCJwcmV2Il0sInNvdXJjZVJvb3QiOiIifQ==