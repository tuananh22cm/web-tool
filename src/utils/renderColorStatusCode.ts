export const renderColorStatus = (statusCode:number)=>{
    let color = "";
    const input= (statusCode+"")[0];
    switch (input) {
        case "1":
            color="secondary";
            break;
    
        case "2":
            color="success";
            break;    
        case "3":
            color="warning";
            break;
        case "4":
            color="danger";
            break;
    
        case "5":
            color="danger";
            break;
    
        default:
            break;
    }
    return color;
};