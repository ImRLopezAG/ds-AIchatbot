import { CacheType, ChatInputCommandInteraction, MessageContextMenuCommandInteraction, UserContextMenuCommandInteraction } from 'discord.js'
import { response } from '../config'

interface IIteration {
  prompt: string
  maxTokens?: number
  interaction: ChatInputCommandInteraction<CacheType> | MessageContextMenuCommandInteraction<CacheType> | UserContextMenuCommandInteraction
}

export const iteration = async ({ prompt, maxTokens, interaction }: IIteration): Promise<void> => {
  try {
    await response({ prompt, maxTokens }).then(async (res) => {
      console.log(res)
      await interaction.reply(res)
    })
  } catch (error) {
    console.error(error)
  }
}
