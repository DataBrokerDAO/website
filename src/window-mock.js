// TODO-alon: delete
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const { window } = new JSDOM
const { document } = window

global.document = document
global.window = window
global.navigator = global.window.navigator
global.HTMLElement = global.window.HTMLElement
global.HTMLAnchorElement = global.window.HTMLAnchorElement
