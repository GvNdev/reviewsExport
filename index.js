const fs = require('fs')
const createCSVWriter = require('csv-writer').createObjectCsvWriter

var jsonFiles = fs.readdirSync('reviews')

let dataResult = []

jsonFiles.forEach(function (file) {
  let data = JSON.parse(fs.readFileSync(`reviews/${file}`))

  data.forEach(function(record) {
    dataResult = [...dataResult, {
      place: file.split(".")[0],
      name: record.name,
      stars: record.stars,
      review: record.review
    }]
  })
})

let mainHeader = [
  { id: 'place', title: 'place' },
  { id: 'name', title: 'name' },
  { id: 'stars', title: 'stars' },
  { id: 'review', title: 'review' }
]

const csvWriter = createCSVWriter({
  path: `export/reviewsExport${(new Date().toJSON().slice(0,10))}.csv`,
  header: mainHeader
})

csvWriter.writeRecords(dataResult)