let [, , meth, rsrce, ...params] = process.argv;

meth = meth.toUpperCase();
rsrce = rsrce.toLowerCase();


//CREATE
if (meth == "POST" && rsrce == "products") {
    const [title, price, category] = params;
    const product = {
        title: title,
        price: price,
        category: category,
    };
    const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });
    const data = await response.json();
    console.log(data);
}


//READ
//GET all
if (meth == "GET" && rsrce == "products") {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
}

//GET by id
if (meth == "GET" && rsrce.startsWith("products/")) {
  let id = rsrce.split("/")[1];
  id = parseInt(id);

  if (isNaN(id) || id <= 0) {
    console.log("No es un numero");
  }
  
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  console.log(data);
}


//UPDATE
if (meth == "PUT" && rsrce.startsWith("products/")) {
    let id = rsrce.split("/")[1];
    id = parseInt(id);
    const [title, price, category] = params;
    const product = {
        title,
        price,
        category,
    };
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });
    const data = await response.json();
    console.log(data);
}


//DELETE
if (meth == "DELETE" && rsrce.startsWith("products/")) {
    const id = parseInt(rsrce.split("/")[1]);
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE"
    });
    const data = await response.json();
    console.log(data);
}
