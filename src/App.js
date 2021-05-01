import './App.css';
import Search from './components/Search';
import AddNote from './components/AddNote';
import NoteInfo from './components/NoteInfo';
import { useState, useEffect, useCallback } from "react";

function App() {

  let [noteList, setnoteList] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("petName");
  let [orderBy, setOrderBy] = useState("desc");

  const filteredAppointments = noteList.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a, b) => {
    let order = (orderBy === 'asc') ? 1 : -1;
    return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
      ? -1 * order : 1 * order;
  });

  const fetchData = useCallback(() => {
    fetch('https://tlylt.github.io/from-the-future/data.json')
      // fetch('./from-the-future/data.json', {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Accept': 'application/json'
      //   }
      // })
      .then(response => response.json())
      .then(data => {
        setnoteList(data)
      })
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="mb-3 text-4xl font-mono">From The Future</h1>
      <p>Notes to (NUS) Computer Science Freshmen</p>
      <AddNote
        onSendAppointment={myAppointment => setnoteList([
          ...noteList, myAppointment
        ])}
        lastId={
          noteList.reduce((max, item) =>
            Number(item.id) > max ? Number(item.id) : max, 0)
        }
      />
      <Search query={query} onQueryChange={myQuery => setQuery(myQuery)}
        orderBy={orderBy}
        onOrderByChange={mySort => setOrderBy(mySort)}
        sortBy={sortBy}
        onSortByChange={mySort => setSortBy(mySort)} />
      <ul className="divide-y divide-gray-200">
        {filteredAppointments.map(appointment => (
          <NoteInfo key={appointment.id} appointment={appointment}
            onDeleteAppointment={
              appointmentId => setnoteList(noteList.filter(appointment => appointment.id !== appointmentId))
            } />
        ))}
      </ul>
    </div>
  );
}

export default App;
