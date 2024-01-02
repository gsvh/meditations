const fs = require('fs')

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}
const writeFile = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) reject(err)
      resolve('success')
    })
  })
}

const toSentenceCase = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

async function main() {
  const data = await readFile('./quotes.txt')

  const paragraphs = data.split('\n\n')

  const structuredParagraphs = []
  let currentBook = ''
  paragraphs.forEach((paragraph) => {
    // skip the book separator
    if (paragraph[0] === '-') {
      return
    }
    // //   get the book number
    if (paragraph.substring(0, 4) === 'BOOK') {
      currentBook = toSentenceCase(paragraph)
      // structuredParagraphs[paragraph] = []
      return
    }
    // paragraph = paragraph.replace(/\n/g, ' ')
    //   add the paragraph to the book
    structuredParagraphs.push({ book: currentBook, paragraph })
  })

  writeFile('./structuredParagraphs.json', JSON.stringify(structuredParagraphs))
}

main()
