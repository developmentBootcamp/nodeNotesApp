const fs = require('fs');
const getNote = function(){
        return "Nothing yet"
}

const addNote = function (title, body){
        const notes = loadNote();
        const duplicateNote = notes.filter(function(note){
                return note.title === title;
        })

        if(duplicateNote.length === 0){
                notes.push({
                        title: title,
                        body: body
                })
                saveNote(notes)
                console.log('Note added')
        } else {
                console.log('Duplicate note found')
        }
        console.log(duplicateNote);
}

const saveNote = function(notes){
        const JSONData = JSON.stringify(notes);
        fs.writeFileSync('notes.json', JSONData);
}

const loadNote = function (){
        try{
                const bufferData = fs.readFileSync('notes.json');
                const dataJSON = bufferData.toString();
                return JSON.parse(dataJSON);
        } catch (e){
                return [];
        }
}

module.exports = {
        addNote: addNote,
        loadNote: getNote,
}