import type { NextApiRequest, NextApiResponse } from 'next'
import { LoremIpsum } from "lorem-ipsum";

export default (request: NextApiRequest, response: NextApiResponse) => {
    const { length } = request.query;

    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    });

    switch (length) {
        case 'word': {
            response.status(200).json({ response: lorem.generateWords(1) })
            break;
        }
        case 'sentence': {
            response.status(200).json({ response: lorem.generateSentences(1) })
            break;
        }
        case 'paragraph': {
            response.status(200).json({ response: lorem.generateParagraphs(1) })
            break;
        }
        default: {
            response.status(404).json({ message: `${length} is not a length, please use 'word', 'sentence', or 'paragraph'.` })
        }
    }
}