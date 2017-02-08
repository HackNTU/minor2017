var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyYBgDwHL1wU0BZh'}).base('appcs0kkOF4h36C7J');

var schedule = [];
var qas = [];
var reviewers = [];

// Fill schedule[] with data from 小黑客松-流程
base('小黑客松-流程').select({
    // Selecting the first 10 records in Main View:
    maxRecords: 10,
    view: "Main View"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        // console.log('Retrieved', record.get('Name'));
        schedule.push(record);
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});


// Fill reviewers[] with data from 小黑客松-QA
base('小黑客松-評審').select({
    maxRecords: 10,
    view: "Main View"
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
        reviewers.push(record);
    });
    fetchNextPage();
}, function done(err) {
    if (err) { console.error(err); return; }
});


// Fill qas[] with data from 小黑客松-QA
base('小黑客松-QA').select({
    maxRecords: 10,
    view: "Main View"
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
        qas.push(record);
    });
    fetchNextPage();
}, function done(err) {
    if (err) { console.error(err); return; }
});


// use all Airtable data in other file with `import alldata from '/path/to/airtable.js'`
export default { schedule, reviewers, qas };

// import only QA table with `import { qas } from '/path/to/airtable.js'`
export { schedule, reviewers, qas };
