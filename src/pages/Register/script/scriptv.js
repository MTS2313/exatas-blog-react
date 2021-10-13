export function emailv(i){
      if((i !== null)&&(i.length > 6)){
        if((i.match(/[@]/)&&(i.match(/[.]/)))){
            if((i.indexOf("@", 0)) < (i.length)-2){
                return true
            }
        }
    }else{
        return false
    }

}
export function fullnamev(i){
    if ((i !== "")&&(i.length >= 2)) {
        return true
    }
    else{
        return false
    }
}
export function usernamev(i){
    if((i !== "")&&(i.length > 6)){
        return true
    }else{
        return false
    }
}