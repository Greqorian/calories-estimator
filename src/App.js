import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const restaurants = {
    mcdonald: {
      meals: {
        meal1: {
          ingredients: {
            one: 100,
            two: 200,
            three: 300,
          },
        },
        meal2: {
          ingredients: {
            one: 100,
            two: 200,
            three: 300,
          },
        },
        meal3: {
          ingredients: {
            one: 100,
            two: 200,
            three: 300,
          },
        },
      },
    },
    kfc: {},
    subway: {},
  };

  const [selectedRes, setSelectedRes] = useState(undefined);
  const [selectedMeal, setSelectedMeal] = useState(undefined);

  console.log("selectedRes", selectedRes);

  return (
    <div className="App">
      <div>Restaurans:</div>
      {Object.keys(restaurants).map((key, index) => {
        return (
          <button
            onClick={() => {
              setSelectedRes(key);
            }}
          >
            {key}
          </button>
        );
      })}

      <hr />
      <div>Meals:</div>
      {selectedRes &&
        Object.keys(restaurants[selectedRes].meals).map((key, index) => {
          return (
            <button
              onClick={() => {
                setSelectedMeal(key);
              }}
            >
              {key}
            </button>
          );
        })}

      <hr />
      <div>Igredients:</div>
      {selectedMeal &&
        Object.keys(
          restaurants[selectedRes].meals[selectedMeal].ingredients
        ).map((key, index) => {
          return (
            <li>
              {key}:{" "}
              {restaurants[selectedRes].meals[selectedMeal].ingredients[key]}
            </li>
          );
        })}
    </div>
  );
}

export default App;
