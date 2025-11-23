function solution(s) {

    
    return s.split(" ").map(el=>{
        let wordChanged="";
        for(i in el){
            if(i%2==0){
                 wordChanged+= el[i].toUpperCase();
            }
            else{
                wordChanged+= el[i].toLowerCase();
            }
        }
        return wordChanged;
    }).join(" ");
}
