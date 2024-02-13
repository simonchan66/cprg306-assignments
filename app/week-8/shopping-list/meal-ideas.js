"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMeals(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Could not fetch meals: ", error);
      return [];
    }
  }

  async function loadMealsIdeas() {
    const mealsData = await fetchMeals(ingredient);
    setMeals(mealsData);
  }

  useEffect(() => {
    loadMealsIdeas();
  }, [ingredient]);

  return(
    <div>
      <h1 className="text-xl font-bold mb-4">Meal Ideas</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="max-w-sm rounded overflow-hidden text-gray-700 bg-white">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{meal.strMeal}</div>
              <p className="text-gray-700 text-base">
                ID: {meal.idMeal}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

}
