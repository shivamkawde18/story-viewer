

export const Story = (props) => {

  return (
    <div
      style={{
        position: "relative",
        height: 459,
        width: 257,
        borderRadius:16
      }}
      onClick={()=>props.modalOpen(true)}
    >
      <img
        height={"100%"}
        width={"100%"}
        style={{
            borderRadius:16
        }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnbtHC4McwezXk5RYc-HKPfh6BGyqCLpBNxA&usqp=CAU"
      ></img>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          padding: "20px",
          background: "rgba(0, 0, 0, 0.5)", 
          color: "white",
          borderRadius: "0 0 16px 16px", 
        }}
      >
        <h1>heading here</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          ullam cumque vel eaque nulla eius fugit tempore tenetur, officia
          maiores esse voluptatum labore ipsam consequatur ex iure alias rem
          placeat.
        </p>
      </div>
    </div>
  );
};
