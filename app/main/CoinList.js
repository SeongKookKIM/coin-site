"use client";

import { useIsFetching, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CoinList() {
  let [num, setNum] = useState(10);
  let [coinState, setCoinState] = useState();
  let isFetching = useIsFetching();

  let result = useQuery(
    ["coin"],
    () => {
      return axios
        .get("https://api.coinpaprika.com/v1/tickers?quotes=KRW")
        .then((res) => {
          return res.data.slice(0, num);
        })
        .catch((err) => {
          console.log("에러");
        });
    },
    {
      staleTime: 2000,
    }
  );

  useEffect(() => {
    if (!isFetching && result.data) {
      setCoinState(result.data);
    }
  }, [isFetching, result.data]);

  return (
    <div className="coin-wrapper">
      <h4>
        실시간 코인 거래량
        <span
          onClick={() => {
            location.reload();
          }}
        >
          🔁
        </span>
      </h4>
      <table className="coin-table">
        <thead>
          <tr>
            <th>순위</th>
            <th>종목</th>
            <th>기호</th>
            <th>가격(KRW)</th>
            <th>총 시가</th>
            <th>거래량(24H)</th>
            <th>변동(24H)</th>
            <th>변동(7D)</th>
          </tr>
        </thead>
        <tbody>
          {coinState && (
            <>
              {coinState.map((coin, i) => {
                return (
                  <tr key={i}>
                    <td>{coin.rank}</td>
                    <td>{coin.name}</td>
                    <td>{coin.symbol}</td>
                    <td>
                      {Number(
                        coin.quotes.KRW.price.toFixed(1)
                      ).toLocaleString()}
                    </td>
                    <td>
                      {(coin.quotes.KRW.market_cap / 1000000000000).toFixed(2)}T
                    </td>
                    <td>
                      {(coin.quotes.KRW.volume_24h / 1000000000000).toFixed(2)}T
                    </td>
                    <td>{coin.quotes.KRW.percent_change_24h.toFixed(2)}%</td>
                    <td>{coin.quotes.KRW.percent_change_7d.toFixed(2)}%</td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>
      <button
        className="coin-more"
        onClick={() => {
          let plus = (num += 10);
          setNum(plus);
          result.refetch();
        }}
      >
        more
      </button>
    </div>
  );
}
