import axios from "axios";
import React, { useState } from "react";

function Cocktail(props) {
  let [drinks, setDrinks] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let cocktailName = e.target[0].value;
    axios({
      url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
    })
      .then((res) => {
        console.log(res);
        setDrinks((drinks = res.data.drinks));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   const renderIngredient = (drink) => {
  //     let ingredientArr = [];
  //     for (let i = 0; i < 14; i++) {
  //       if (drink[`strIngredient${i}`]) {
  //         let ingredient = drink[`strIngredient${i}`];
  //         let measure = drink[`strMeasure${i}`];
  //         ingredientArr.push({ ingredient, measure });
  //       }
  //     }
  //     console.log(ingredientArr);
  //     ingredientArr.map((item) => {
  //       console.log("a");
  //       return (
  //         <tr>
  //           <td>{item.ingredient}</td>
  //           <td>{item.measure}</td>
  //         </tr>
  //       );
  //     });
  //   };

  return (
    <div>
      <h1 className="text-center">Enjoy your favorite cocktail</h1>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center mt-5"
      >
        <div className="form-group" style={{ width: "50%" }}>
          <input
            type="text"
            className="form-control input-group"
            placeholder="drink's name"
            name="cocktailName"
          />
        </div>

        <button className="btn btn-success">search</button>
      </form>

      <div className="container my-3">
        <div className="row">
          {drinks.map((drink, index) => {
            return (
              <div className="col-md-4 col-sm-6 my-3" key={index}>
                <div className="card">
                  <div className="card-body" style={{ height: 130 }}>
                    <h4 className="card-title">{drink.strDrink}</h4>
                    <h6 className="card-subtitle text-muted">
                      {drink.strCategory}
                    </h6>
                  </div>
                  <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                  <div className="card-body" style={{ height: 240, overflow: "hidden" }}>
                    <p className="card-text"><b>{drink.strGlass}</b></p>
                    <p className="card-text">{drink.strInstructions}</p>

                    {/* <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Ingredient</th>
                          <th scope="col">Measure</th>
                        </tr>
                      </thead>
                      <tbody>{renderIngredient(drink)}</tbody>
                    </table> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cocktail;
