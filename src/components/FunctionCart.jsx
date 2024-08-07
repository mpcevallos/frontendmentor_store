const onLoadData = (product) => {
  if (!product || !product.name) {
    console.error('Invalid product data');
    return;
  }

  const startTime = performance.now();
  setListItem((prevList = []) => {
    const index = prevList.findIndex((item) => item.name === product.name);

    if (index === -1) {
      if (product.quantity > 0) {
        return [...prevList, { name: product.name, quantity: product.quantity }];
      }
      return prevList;
    } else {
      const updatedProduct = {
        ...prevList[index],
        quantity: (prevList[index].quantity || 0) + (product.quantity || 0),
      };

      if (updatedProduct.quantity <= 0) {
        return prevList.filter((item) => item.name !== product.name);
      } else {
        return prevList.map((item) =>
          item.name === product.name ? updatedProduct : item
        );
      }
    }
  });
  const endTime = performance.now();
  console.log(`Execution time: ${endTime - startTime} milliseconds`);
};

export default onLoadData;
