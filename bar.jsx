import styles from "./lib/styles.jsx";

const style = {
  cursor: "default",
  userSelect: "none",
  zIndex: "-1",
  width: "100%",
  height: "30px",
  position: "fixed",
  overflow: "hidden",
  bottom: "0px",
  right: "0px",
  left: "0px"
};

export const refreshFrequency = false;

export const command = "./nibar/scripts/yabai_mode.sh";

export const render = ({ output }) => {
  let backgroundColor;
  const yabai = JSON.parse(output);
  if (yabai.mode == "bsp") {
    backgroundColor = "green"
  } else {
    backgroundColor = styles.colors.bg
  }
  const divStyle = { ...style, ...{backgroundColor} }
  console.log(divStyle)
  return (
    <div style={divStyle}></div>
  )
}

export default null;
