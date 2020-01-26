// const  name='Andrew'
// const userAge=24
// const userObject={
//     name,
//     age:userAge,
//     location:'philadelphia'
// }
// console.log(userObject);

const product = {
  label: " Red Notebook",
  price: 3,
  stock: 201,
  salePrice: undefined
};

// const label=product.label
// const stock=product.stock

// const {label:productLabel,price,stock,salePrice}=product
// console.log(productLabel,'\n',price);

const transaction = (
  order,
  { label: myProductLabel, price: myProductPrice }
) => {
  // const {label,price}=myProduct
  console.log(myProductLabel);
  console.log(myProductPrice);
};

transaction("type", product);
