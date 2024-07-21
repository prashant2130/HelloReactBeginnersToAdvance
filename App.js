const heading1 = React.createElement("h1", {id:"head", className:"heading"}, "Hi Suraj Jagtap");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);



const parent = 
            React.createElement("div",{id:"parent"},
            [React.createElement("div",{id:"children"},
            React.createElement("h1",{},"Hello Prashant Jagatp"),
            React.createElement("h2",{},"Hello Nilesh Jagtap"),
            React.createElement("h1",{},"Hello Suraj Jagtap"))]);

root.render(parent);

const newparent = React.createElement("div",{id:"newparent"},[React.createElement("div",{id:"newchild"},React.createElement("h1",{},"hello"),React.createElement("h1",{},"World"))]);

root.render([heading1,parent,newparent])