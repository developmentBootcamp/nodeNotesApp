const chalk = require('chalk');
const yargs = require('yargs')
const note = require('./notes');
const {addNote} = require("./notes");

//console.log(process.argv)

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(argv){
        note.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note...')
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: function(){
        console.log('Lisiting notes...')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note...')
    }
})
yargs.parse()