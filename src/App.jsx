import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  let [user, setUser] = useState("");
  const arr = [
    {
      title: "Patients",
      value: 6027,
      subtitle: "Since Last Week",
      change: "20 %",
      color:"hsl(154.62deg 59.09% 91.37%)",
      textColor: "green"
    },
    {
      title: "New This Week",
      value: 1597,
      subtitle: "Since Last Week",
      change: "12 %",
      color:"hsl(39.23deg 59.09% 91.37%)",
      textColor: "red"
    },
    {
      title: "Critical Alerts",
      value: 364,
      subtitle: "Since Last Week",
      change: "9 %",
      color:'hsl(340deg 60% 91.18%)',
      textColor: "red"
    },
    {
      title: "Appointments",
      value: 967,
      subtitle: "Since Last Week",
      change: "13 %",
      color:"hsl(284.44deg 60% 91.18%)",
      textColor: "green"
    }
  ];
  let [arrr, setArrr] = useState([1,2,3]);

  const changeArr = ()=>{
    let newArrr = [...arrr];
    newArrr.push(90);
    setArrr(newArrr);
    console.log(newArrr)
    console.log(arrr);
  }
  


  const submitHand = (elem) => {
    elem.preventDefault();
  }

  const onChangee = (elem) => {
    setUser(elem.target.value);
    console.log(elem.target.value);

  }

  const btnClicked = () => {
    setUser("");
  }

  return (
    <div className='m-4'>
      

      <div className=" w-full h-screen flex justify-center items-center">
        <div className="container w-3/4 h-3/4 rounded-2xl p-4 flex gap-5 flex-wrap justify-center">
          {arr.map((elem,index)=>{
            return <Card user={elem} key={index} />
          })}

        </div>
      </div>
      
    </div>
  )
}

export default App