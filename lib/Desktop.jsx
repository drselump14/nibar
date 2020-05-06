import styles from "./styles.jsx";
import run from "uebersicht";

const containerStyle = {
  display: "grid",
  gridAutoFlow: "column",
  gridGap: "8px"
};

const yabaiType = {
  color:"red"
}

const desktopStyle = {
  width: "3ch",
};


const renderSpace = (index, focused, visible, windows) => {
  let contentStyle = JSON.parse(JSON.stringify(desktopStyle));
  let hasWindows = windows.length > 0;
  if (focused == 1) {
    contentStyle.color = styles.colors.fg;
    contentStyle.fontWeight = "700";
  } else if (visible == 1) {
    contentStyle.color = styles.colors.fg;
  }
  return (
    <div style={contentStyle}>
      {focused ? "[" : <span>&nbsp;</span> }
      {index}
      {!focused && hasWindows ? "°" : null }
      {focused ? "]" : <span>&nbsp;</span> }
    </div>
  );
};

const render = ({ output }) => {
  if (typeof output === "undefined") return null;

  const spaces = []
  const focusedSpace = output.filter(space => space.focused == 1)[0]
  console.log(focusedSpace)

  output.forEach(function(space) {
    spaces.push(renderSpace(space.index, space.focused, space.visible, space.windows));
  });

  return (
    <div style={containerStyle}>
      {focusedSpace.type}{spaces}
    </div>
  );
};

export default render;
