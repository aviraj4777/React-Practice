const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);

// Nesting createElement

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am nested h1"),
    React.createElement("h2", {}, "I am nested h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am nested h1"),
    React.createElement("h2", {}, "I am nested h2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
