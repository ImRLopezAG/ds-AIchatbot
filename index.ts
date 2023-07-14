import { Events } from 'discord.js'
import { app } from './src/app'

app.addListener(Events.ClientReady, () => {
  console.log('Ready!')
})
