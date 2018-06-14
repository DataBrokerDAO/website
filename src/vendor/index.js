export default {
  load: () => Promise.all([
    import (/* webpackChunkName: 'lazy.vendor' */ 'script-loader!./flickity.min.js'),
    import (/* webpackChunkName: 'lazy.vendor' */ 'script-loader!./easypiechart.min.js'),
    import (/* webpackChunkName: 'lazy.vendor' */ 'script-loader!./parallax.js'),
    import (/* webpackChunkName: 'lazy.vendor' */ 'script-loader!./typed.min.js'),
    import (/* webpackChunkName: 'lazy.vendor' */ 'script-loader!./datepicker.js'),
    import (/* webpackChunkName: 'lazy.vendor' */ 'script-loader!./isotope.min.js'),
    import (/* webpackChunkName: 'lazy.vendor' */ 'script-loader!./ytplayer.min.js'),
    import (/* webpackChunkName: 'lazy.vendor' */ 'script-loader!./lightbox.min.js'),
    import (/* webpackChunkName: 'lazy.vendor' */ 'script-loader!./granim.min.js'),
    import (/* webpackChunkName: 'lazy.vendor' */ 'script-loader!./jquery.steps.min.js'),
    import (/* webpackChunkName: 'lazy.vendor' */ 'script-loader!./countdown.min.js'),
    import (/* webpackChunkName: 'lazy.vendor' */ 'script-loader!./twitterfetcher.min.js'),
    import (/* webpackChunkName: 'lazy.vendor' */ 'script-loader!./spectragram.min.js'),
    import (/* webpackChunkName: 'lazy.vendor' */ 'script-loader!./smooth-scroll.min.js'),
    import (/* webpackChunkName: 'lazy.vendor' */ 'script-loader!./scripts.js'),
  ]),
}
