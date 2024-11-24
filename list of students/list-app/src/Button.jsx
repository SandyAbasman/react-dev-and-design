function clickManager() {
  console.log("sandy");
}

function Button() {
  return (
    <div>
      <button onClick={clickManager}> learn about events</button>
    </div>
  );
}

export default Button;
