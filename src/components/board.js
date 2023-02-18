import React from "react";
import "./board.css";
import List from "./list";

const Info = [
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "AAA",
    birthday: "1995-02-31",
  },
  {
    img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "BBB",
    birthday: "1998-05-29",
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "CCC",
    birthday: "1991-02-17",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "DDD",
    birthday: "1999-10-15",
  },
  {
    img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "EEE",
    birthday: "1994-07-05",
  },
  {
    img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "FFF",
    birthday: "1997-02-17",
  },
];

export default function board() {
  return (
    <main id="site-main">
      <h1 className="text-dark title">Birthday Remainder</h1>

      <div className="board">
        <List info={Today(Info)}></List>
        {/* <h2 className='upcoming text-dark'>Upcoming</h2>
                <List info={Upcoming(Info, 2)} upcoming={true}></List> */}
      </div>
    </main>
  );
}

function Today(person) {
  let currentDay = new Date().getDate();
  let currentMonth = new Date().getMonth();
  // console.log(currentDay);
  // console.log(currentMonth);
  

  let filter = person.filter((data) => {
    //console.log(data)
    let day = new Date(data.birthday).getDate();
    let month = new Date(data.birthday).getMonth();

    return currentDay == day && currentMonth == month;
  });
  return filter;
}


