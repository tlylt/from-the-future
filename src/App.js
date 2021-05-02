import './App.css';
import Search from './components/Search';
import AddAdvice from './components/AddAdvice';
import AdviceInfo from './components/AdviceInfo';
import { useState, useEffect, useCallback } from "react";

function App() {

  let [adviceList, setAdviceList] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("owner");
  let [orderBy, setOrderBy] = useState("desc");

  const filteredAdvice = adviceList.filter(
    item => {
      return (
        item.owner.toLowerCase().includes(query.toLowerCase()) ||
        item.note.toLowerCase().includes(query.toLowerCase())
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
        setAdviceList(data)
      })
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    <div className="bg-sku App container max-w-3xl mx-auto pt-3 px-5 font-note">
      <h1 className="mb-3 text-4xl font-futuristic font-bold">From The Future</h1>
      <p>Notes to (NUS) Computer Science Freshmen</p>
      <AddAdvice
        onSendAdvice={advice => setAdviceList([
          ...adviceList, advice
        ])}
        lastId={
          adviceList.reduce((max, item) =>
            Number(item.id) > max ? Number(item.id) : max, 0)
        }
      />
      <Search query={query} onQueryChange={myQuery => setQuery(myQuery)}
        orderBy={orderBy}
        onOrderByChange={mySort => setOrderBy(mySort)}
        sortBy={sortBy}
        onSortByChange={mySort => setSortBy(mySort)} />
      <ul className="divide-y-2 divide-sku-light">
        {filteredAdvice.map(advice => (
          <AdviceInfo key={advice.id} advice={advice}
            onDeleteAdvice={
              adviceId => setAdviceList(adviceList.filter(advice => advice.id !== adviceId))
            } />
        ))}
      </ul>
    </div>
  );
}

export default App;
