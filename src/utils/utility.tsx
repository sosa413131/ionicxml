function capitalizeTitle(titleUncapitalized :string){
    var array = titleUncapitalized.split(" ");
    var newTitle=''
    for (var i=0; i<array.length; i++){
      let word=array[i];
      word = word.charAt(0).toUpperCase() + word.slice(1);
      newTitle=newTitle+word+' ';
    }

    return newTitle;
    
  }

  export {capitalizeTitle};