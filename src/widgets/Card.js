export default function Card(props) {
  return (
    <div
      style={{
        backgroundColor: `rgb(51, 51, 51, 0.1)`,
        maxWidth: "200px",
        borderRadius: "8px",
        padding: "1rem",
      }}
    >
      <div> 
        <img src={props.image} alt="" width={200}/>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>Lorem ipsum</h3>
        <p className="yellow-text" >$00.00</p>
      </div>
      <p style={{fontSize:'14px'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h4>Order or delivery</h4>
    </div>
  );
}
