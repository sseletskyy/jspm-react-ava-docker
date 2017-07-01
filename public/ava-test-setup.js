import { JSDOM } from 'jsdom'

const dom = new JSDOM(
  '<!DOCTYPE html><head></head><body></body>',
  { includeNodeLocations: true }
)

global.window = dom.window
global.document = dom.window.document
global.navigator = dom.window.navigator
