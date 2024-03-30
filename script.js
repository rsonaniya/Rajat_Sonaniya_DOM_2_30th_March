let table = document.getElementById("main");

//using promise

// fetch(
//   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
// )
//   .then((res) => res.json())
//   .then((result) => {
//     for (let i = 0; i < result.length; i++) {
//       let tr = document.createElement("tr");
//       tr.classList.add("row");
//       tr.innerHTML = `<td class="td-first"><div><img class='img' src=${
//         result[i].image
//       }/> ${result[i].id}</div></td> <td>${result[i].symbol}</td> <td>${
//         "$" + result[i].current_price
//       }</td><td>${"$" + result[i].total_volume}</td>
//         <td class=${
//           result[i].price_change_percentage_24h < 0 ? "text-red" : "text-green"
//         }>${result[i].price_change_percentage_24h}</td>
//         <td>${"Mak Cap: $" + result[i].market_cap}</td>`;
//       table.appendChild(tr);
//     }
//     console.log(result);
//   });

//using await-async

const fetchData = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );
  const result = await response.json();
  for (let i = 0; i < result.length; i++) {
    let tr = document.createElement("tr");
    tr.classList.add("row");
    tr.innerHTML = `<td class="td-first"><div><img class='img' src=${
      result[i].image
    }/> ${result[i].id}</div></td> <td>${result[i].symbol}</td> <td>${
      "$" + result[i].current_price
    }</td><td>${"$" + result[i].total_volume}</td>
      <td class=${
        result[i].price_change_percentage_24h < 0 ? "text-red" : "text-green"
      }>${result[i].price_change_percentage_24h}</td>
      <td>${"Mak Cap: $" + result[i].market_cap}</td>`;
    table.appendChild(tr);
  }
  console.log(result);
};

fetchData();
