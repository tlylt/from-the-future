import Search from './components/Search';
import AddAdvice from './components/AddAdvice';
import AdviceInfo from './components/AdviceInfo';
import { useState, useEffect, useCallback } from "react";
import Footer from './components/Footer';
import moment from 'moment';
import LoadingSpinner from './components/LoadingSpinner';
import { Advice } from './types/Advice';

function App() {
  let [adviceList, setAdviceList] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("date");
  let [orderBy, setOrderBy] = useState("desc");
  const filteredAdvice = adviceList.filter(
    (item:Advice): boolean  => {
      return (
        item.owner.toLowerCase().includes(query.toLowerCase()) ||
        item.note.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a:Advice, b:Advice) : number => {
    let order = (orderBy === 'asc') ? 1 : -1;
    if (sortBy === "date") {
      return moment(a[sortBy] + "", "YYYY-MM-DDTHH:mm:ss.SSSSZ").isBefore(moment(b[sortBy] + "", "YYYY-MM-DDTHH:mm:ss.SSSSZ"))
        ? -1 * order : 1 * order;
    } else if (sortBy === "owner") {
      return (a[sortBy] + "").toLowerCase() < (b[sortBy] + "").toLowerCase()
        ? -1 * order : 1 * order;
    } else if (sortBy === "length") {
      return a.note.length < b.note.length ? -1 * order : 1 * order;
    } else {
      throw new Error("Something is wrong");
    }

  });

  const fetchData = useCallback(():void => {
    fetch('https://hkiq5n.deta.dev/')
      .then(response => response.json())
      .then(data => {
        setAdviceList(data);
      })
  }, [])

  const sendData = useCallback((advice:Advice):void => {
    setAdviceList([
      ...adviceList, advice
    ]);
    fetch('https://hkiq5n.deta.dev/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(advice)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success!");
      }).catch((error) => {
        console.log("Error:", error);
      });
  }, [adviceList])

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    <div className="bg-sku text-center container max-w-4xl mx-auto pt-3 px-5 font-note">
      <h1 className="mb-3 text-4xl font-futuristic font-bold">From The Future</h1>
      <p className="pb-2">Notes to (NUS) Computing Freshmen</p>
      <AddAdvice
        onSendAdvice={(advice) => sendData(advice)}
      />
      <Search query={query} onQueryChange={(myQuery:string):void => setQuery(myQuery)}
        orderBy={orderBy}
        onOrderByChange={(mySort:string):void => setOrderBy(mySort)}
        sortBy={sortBy}
        onSortByChange={(mySort:string):void => setSortBy(mySort)} />
      <LoadingSpinner shouldShow={adviceList.length === 0} />
      <ul className="divide-y-2 divide-sku-light">
        {filteredAdvice.map(advice => (
          <AdviceInfo key={advice.id} advice={advice}
            onDeleteAdvice={
              (adviceId:string): void => setAdviceList(adviceList.filter(advice => advice.id !== adviceId))
            } />
        ))}
      </ul>
      <Footer shouldShow={adviceList.length !== 0} />
    </div>
  );
}

export default App;
