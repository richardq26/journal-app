import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input type="text" placeholder="Un título :D" className="notes__title-input"/>
                <textarea placeholder="Tu contenido" className="notes__textarea"></textarea>
                <div className="notes__image"><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="Imagen"/></div>
            </div>
        </div>
    )
}