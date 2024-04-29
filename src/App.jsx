import { useEffect, useState } from "react";

import "./App.css";
import { StoryCategory } from "./components/storycategory";
import { Story } from "./components/Story";
import { data } from "./data";
import Stories from "react-insta-stories";
import Modal from "react-modal";
function App() {
  const [catagory, setCatagory] = useState("");
  const [storydata, setstoryData] = useState(data);
  const [isModalOpen, setModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  console.log(storydata);
  useEffect(() => {
    const updatedData = data.filter((story) => story.catagory == catagory);
    console.log(updatedData);
    setstoryData(updatedData);
  }, [catagory]);
  console.log({ registerModal });
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
    },
  };

  const story =
    isModalOpen &&
    storydata.map((data) => {
      const temp = {
        content: (props) => {
          return <Story />;
        },
      };
      return temp;
    });
  return (
    <div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          style={customStyles}
          onRequestClose={() => setModal(false)}
        >
          <Stories
            stories={story}
            defaultInterval={1500}
            width={257}
            height={459}
          />
        </Modal>
      )}

      {registerModal && (
        <Modal
          onRequestClose={() => setRegisterModal(false)}
          isOpen={registerModal}
          style={customStyles}
        >
          <div style={{ padding: 50 }}>
            <h2 style={{ textAlign: "center" }}>Register to SwipTory</h2>
            <div style={{ display: "flex", gap: 25, alignItems: "center" }}>
              <h3>username</h3>
              <input style={{ height: 35, width: 245 }} />
            </div>
            <div style={{ display: "flex", gap: 25, alignItems: "center" }}>
              <h3>password</h3>
              <input style={{ height: 35, width: 245 }} />
            </div>
            <button
              style={{
                height: 45,
                width: 135,
                background: "#73ABFF",
                border: "none",
                borderRadius: 16,
                cursor: "pointer",
                marginTop: 25,
              }}
              onClick={() => setLoginModal(true)}
            >
              login
            </button>
          </div>
        </Modal>
      )}

      {loginModal && (
        <Modal
          onRequestClose={() => setLoginModal(false)}
          isOpen={loginModal}
          style={customStyles}
        >
          <div style={{ padding: 50 }}>
            <h2 style={{ textAlign: "center" }}>Login to SwipTory</h2>
            <div style={{ display: "flex", gap: 25, alignItems: "center" }}>
              <h3>username</h3>
              <input style={{ height: 35, width: 245 }} />
            </div>
            <div style={{ display: "flex", gap: 25, alignItems: "center" }}>
              <h3>password</h3>
              <input type="password" style={{ height: 35, width: 245 }} />
            </div>
            <button
              style={{
                height: 45,
                width: 135,
                background: "#73ABFF",
                border: "none",
                borderRadius: 16,
                cursor: "pointer",
                marginTop: 25,
              }}
              onClick={() => setLoginModal(true)}
            >
              login
            </button>
          </div>
        </Modal>
      )}
      {/* <Stories

			stories={[{
        content:()=>{
          return(<Story/>)
        }
      }]}
      
			defaultInterval={1500}
			width={257}
			height={459}
 
		/> */}
      <div
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.1)",
          height: 73,

          background: "#fff",
          padding: 5,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>Swip Tory</h2>
        <div
          style={{
            display: "flex",
            gap: 25,
          }}
        >
          <button
            style={{
              height: 45,
              width: 135,
              background: "#FF7373",
              border: "none",
              borderRadius: 16,
              cursor: "pointer",
            }}
            onClick={() => setRegisterModal(true)}
          >
            Register
          </button>
          <button
            style={{
              height: 45,
              width: 135,
              background: "#73ABFF",
              border: "none",
              borderRadius: 16,
              cursor: "pointer",
            }}
            onClick={() => setLoginModal(true)}
          >
            login
          </button>
        </div>
      </div>
      <div
        style={{ display: "flex", gap: 30, overflowX: "scroll", marginTop: 20 }}
      >
        <StoryCategory catagory="All" setCatagory={setCatagory} />
        <StoryCategory catagory="Food" setCatagory={setCatagory} />
        <StoryCategory catagory="Medical" setCatagory={setCatagory} />
        <StoryCategory catagory="All" setCatagory={setCatagory} />
        <StoryCategory catagory="All" setCatagory={setCatagory} />
        <StoryCategory catagory="All" setCatagory={setCatagory} />
      </div>
      <h2 style={{ textAlign: "center" }}>Top Stories About {catagory}</h2>
      <div
        style={{
          display: "flex",
          gap: 25,
          marginTop: 10,
        }}
      >
        {storydata.map((story, index) => {
          return <Story key={index} modalOpen={setModal} />;
        })}
      </div>
    </div>
  );
}

export default App;
