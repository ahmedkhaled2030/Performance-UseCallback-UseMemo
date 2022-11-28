import React, { useEffect, useState } from "react";
import axios from "axios";
// هنا المشكله كانت لما باجي اعمل سيرش كل حرف جديد يعمل ريكوست جديد
// طبعا دا غلط فقولت هعمل ديبونص  يعني اخلي في تاخير فتره بين كل طلب والتاني
// وبالتالي خلاص كل لما اكتب هيتسني وياخد اخر حاجه خالص ويروح يبعت بيها ريكوست

// وزلكن المشكله هنا انه بياخد 1200ملي سكوند عشان الديونص يتنفذ وانا مش عايز دا
//صفحه بيضا هتفصل لمده 1200 ملي سكوند ودا مش حلو
const Search1 = () => {
  const [term, setTerm] = useState("javascript");
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

      const debounceSearch = setTimeout(() => { // debounce to take a time between an order and the next order
        if (term) {
          Feed();
        }
      }, 1200);

      return () => {
        clearTimeout(debounceSearch);
      };

  }, [term]);

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

export default Search1;
