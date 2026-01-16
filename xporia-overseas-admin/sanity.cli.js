import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'w9p20dtj',
    dataset: 'production'
  },
  deployment: {
    appId: 'y62lm8zyzt8p6ddcjhhn2x1d',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
