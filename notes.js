const fs = require('fs');
const chalk = require("chalk");

const addNote = (title, body) => {
        const notes = loadNote();
        const duplicateNote = notes.some((note) => {
                return note.title === title;
        })
        if(!duplicateNote){
                notes.push({
                        title: title,
                        body: body
                })
                saveNote(notes);
                console.log(chalk.green('Note added'))
        } else {
                console.log(chalk.red('Duplicate note title found'))
        }
}

const saveNote = (notes) => {
        const jsonData = JSON.stringify(notes);
        fs.writeFileSync('notes.json', jsonData);
}

const loadNote = () => {
        try{
                const bufferData = fs.readFileSync('notes.json');
                const dataJSON = bufferData.toString();
                return JSON.parse(dataJSON);
        } catch (e){
                return [];
        }
}

const removeNote = (title) => {
        const notes = loadNote();
        const keepNotes = notes.filter((note) => {
                return note.title !== title;
        })
        console.log(keepNotes)
        saveNote(keepNotes);
        if(keepNotes.length < notes.length){
                console.log(chalk.green('Note removed!'))
        } else {
                console.log(chalk.red('Note title not found!'))
        }
}

const listNotes = () => {
        const notes = loadNote();
        notes.forEach((note) => {
                console.log('Title: ' + chalk.cyan(note.title))
        })
}

const readNote = (title) => {
        const notes = loadNote();
        const read = notes.find((note) => {
                return note.title === title
        })
        if(read){
                console.log(chalk('Title: ') + chalk.cyan.inverse(read.title))
                console.log(chalk('Description: ') + chalk.green.inverse(read.body))
        } else{
                console.log(chalk.red.inverse('Title not found!'))
        }
}

module.exports = {
        addNote: addNote,
        removeNote: removeNote,
        listNotes: listNotes,
        readNote: readNote
}