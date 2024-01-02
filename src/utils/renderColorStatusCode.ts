export const renderColorStatus = (statusCode:number)=>{
    let color = "";
    const input= (statusCode+"")[0];
    switch (input) {
        case "1":
            color="#f1f8e9";
            break;
    
        case "2":
            color="#aed581";
            break;    
        case "3":
            color="#dce775";
            break;
        case "4":
            color="#ef5350";
            break;
    
        case "5":
            color="#ffc107";
            break;
    
        default:
            break;
    }
    return color;
};