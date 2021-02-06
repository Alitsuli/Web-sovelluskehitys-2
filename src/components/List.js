import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Table } from 'react-bootstrap'

const List = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3000/notes')
            .then(response => {
                setNotes(response.data)
            })
    }, [])

    return(
        <div className="container">
            <Table striped>
            <tbody>
                {notes.map(note => {
                    return (
                        <tr>
                            <td>
                                <p>{note.content}</p>
                            </td>
                            <td>
                                <p>{note.date}</p>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            </Table>

        </div>
    )
}

export default List