/**
 * to fetch the meals from the given api
 * @returns meals []
 */
const fetchMeal = async () => {
  try {
    const res = await fetch("https://asm-dev-api.herokuapp.com/api/v1/food");
    const jsonData = await res.json();
    return jsonData.data.meals;
  } catch (error) {
    console.log(error);
  }
};

export default fetchMeal;
