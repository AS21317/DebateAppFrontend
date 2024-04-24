export const formateDate = (date,config)=>{

    // * Letter see that how it is working 
    const defaultOptions = {day:'numeric', month:'long',year:'numeric'}

    const options = config?config:defaultOptions;

    return new Date(date).toLocaleDateString("en-us",options)
}