import * as React from 'react'
import styled from 'styled-components'

import { HashtagWithIndices } from 'twitter-text'

import TaskTag from '../utils/TaskTag'

interface TextWithHashtagsProps {
  text: string
  onClickTag: (tag: string) => void
}
export default (props: TextWithHashtagsProps) => {
  const blocks = []
  const tags = TaskTag.getTagsWithIndicesFromTask(props.text)

  if (tags.length === 0) {
    blocks.push(<span key={0}>{props.text}</span>)
  } else {
    tags.map((tag: HashtagWithIndices, idx: number) => {
      if (tag.indices[0] > 0) {
        const startIdx = idx === 0 ? 0 : tags[idx - 1].indices[1]
        const endIdx = tag.indices[0]
        blocks.push(
          <span key={startIdx}>{props.text.slice(startIdx, endIdx)}</span>
        )
      }

      const onClickTag = () => props.onClickTag(tag.hashtag)
      blocks.push(
        <HashTag key={tag.indices[0]} onClick={onClickTag}>
          {props.text.slice(tag.indices[0], tag.indices[1])}
        </HashTag>
      )
    })

    const endText = props.text.slice(tags[tags.length - 1].indices[1])
    blocks.push(<span key="end">{endText}</span>)
  }

  return <TextWithHashtags>{blocks}</TextWithHashtags>
}

const TextWithHashtags = styled.span``
const HashTag = styled.a`
  color: #0f52bc;
  cursor: pointer;
`
