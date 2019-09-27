// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
module.exports = on => {
  on('task', {
    log(message) {
      console.log(message) // eslint-disable-line
      return null
    },
  })

  on('window:before:load', win => {
    cy.spy(win.console, 'log')
  })

  on('before:browser:launch', (browser = {}, args) => {
    if (
      browser.name === 'chrome' ||
      browser.name === 'chromium' ||
      browser.name === 'canary'
    ) {
      args.push('--auto-open-devtools-for-tabs')
      return args
    }
  })
}
