function debounce(fn, delay){
  let timeoutId;

  return function(){
    const args  = arguments;
    const context = this;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(function() {
      fn.apply(context, args);
    }, delay);

  };
}

  function dizerOi(){
    console.log("Oi!");
  }

  const debouncedDizerOi = debounce(dizerOi, 1000);

  debouncedDizerOi();
  debouncedDizerOi(); 
  debouncedDizerOi();