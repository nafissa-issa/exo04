function somme(nums,target) {
    // let sum = 0;
    let tab = [];
    for (let i = 0; i < nums.length; i++){
     if ((nums[i]+ nums[i+1]) === target){
        tab.push(nums[i+1]);
        tab.push(nums[i]);
        return (tab)
     }
       
    }
}
console.log(tab);
somme([2,7,11,15],9)