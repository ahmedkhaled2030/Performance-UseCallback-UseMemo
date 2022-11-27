import React, { useEffect, useState } from "react";
import axios from "axios";

//الحل هنا اني لما اعمل ريندر عالطول اعمل سيرش عالطول من غير ماتنفذ الديبونص
//عشان يعني ميبقاش في صفحه فاضيه
//
const Search2 = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const Feed = async () => {
      const respond = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResult(respond.data.query.search);
    };

    // init render
    // useEffect -> check result length it's zero so -> feed() execute -> update result array cause it in the dependancies
    //re-render
    //useEffect else cause result length is not zero  -> feed() execute -> update result array
    //re-render


    //دي بقي المشكله انك هتلاقي الريكوست اتطلب مرتين في اول مره من غير اي حاجه

    if (!result.length) {
      if (term) {
        Feed();
      }
    } else {
      const debounceSearch = setTimeout(() => { // debounce to take a time between an order and the next order
        if (term) {
          Feed();
        }
      },1200);
      return () => {
        clearTimeout(debounceSearch);
      };
    }


     

  }, [term, result.length]); 
  // لو استخدمت ستيت جوا اليوز ايفكت لاوم تحط الستيت جوا الديبدناسي

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

export default Search2;
