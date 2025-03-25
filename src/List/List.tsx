import styles from "./List.module.css";
function List(props) {
  /*

    const fruits = [
        { id: 1, name: "Apple", calories: 95 },
        { id: 2, name: "Orange", calories: 45 },
        { id: 3, name: "Banana", calories: 105 },
        { id: 4, name: "Coconut", calories: 159 },
        { id: 5, name: "pineapple", calories: 37 },
      ];

  fruits.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name
  fruits.sort((a, b) => {
    return a.calories - b.calories;
  }); // Sort by calories ascending
  
  const lowCalories = fruits.filter((fruit) => fruit.calories < 100);
  const highCalories = fruits.filter((fruit) => fruit.calories > 100);
  */

  const category = props.category ? props.category : "Category";

  const itemList = props.items ? props.items : props.item = [];

  const ListItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className={styles.list_catogory}>{category}</h3>
      <ol className={styles.list_item}>{ListItems}</ol>;
    </>
  );
}

export default List;
