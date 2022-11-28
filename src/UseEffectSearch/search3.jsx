import React, { useEffect, useState } from "react";
import axios from "axios";

// init render
// useEffect -> check result length it's zero so -> feed() execute -> update result array cause it in the dependancies
//re-render
//useEffect else cause result length is not zero  -> feed() execute -> update result array
//re-render

//دي بقي المشكله انك هتلاقي الريكوست اتطلب مرتين في اول مره من غير اي حاجه

//***********************الحل************************
// هو استخدام تكنيك ستيفن
// وهو اني اعمل 2 يوزايفكت واحده تشغل واحده
//الاتين هيتشغلوا عادي
//اول واحده هتنستني 1200ملي وهتبص هل الترم اتغير لو لا مش هتعمل ري ريندر
//التانيه اول ماتشتغل هتعمل هت لل اب اي

const Search3 = () => {
  const [term, setTerm] = useState("react");
  const [debounceSearch, setDebounceSearch] = useState(term);
  const [result, setResult] = useState([]);

  useEffect(() => { // if term is not changed this will have no any influence
    const timeOut = setTimeout(() => {
      setDebounceSearch(term);
    }, 6000);    

    return () => clearTimeout(timeOut);   
    
  }, [term]);

  useEffect(() => {
    const Feed = async () => {
      const respond = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debounceSearch,
        },
      });
      setResult(respond.data.query.search);
    };
    Feed();
  }, [debounceSearch]);

  const fetchResult = result.map((el, index) => {
    return (
      <tr key={el.pageid}>
        <td>{index}</td>
        <td>{el.title}</td>
        <td>
          <span dangerouslySetInnerHTML={{ __html: el.snippet }} />
        </td>
      </tr>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="my-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Search Input
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={(e) => setTerm(e.target.value)}
              value={term}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">no.</th>
                <th scope="col">Title</th>
                <th scope="col">Desc</th>
              </tr>
            </thead>
            <tbody>{fetchResult}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Search3;
