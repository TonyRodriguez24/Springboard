
function Dogs({ dogs }) {
  return (
    <ul>
      {dogs.map((dog, index) => (
        <li key = {index}>{dog.name}</li>
      ))}
    </ul>
  );
}

export default Dogs;
