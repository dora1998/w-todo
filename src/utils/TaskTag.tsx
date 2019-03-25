import { Task } from 'src/hooks/useTask'
import {
  extractHashtags,
  extractHashtagsWithIndices,
  HashtagWithIndices
} from 'twitter-text'

export default {
  getTagsFromTask(text: string): string[] {
    return extractHashtags(text)
  },

  getTagsWithIndicesFromTask(text: string): HashtagWithIndices[] {
    return extractHashtagsWithIndices(text)
  },

  findTasksfromTag(tasks: Task[], tag: string) {
    return tasks.filter((task: Task) => task.tags.includes(tag))
  }
}
