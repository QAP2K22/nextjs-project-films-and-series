export function dateFormatter(date) {
    if (date == null || date == 0) {
        return "Data de nascimento não foi cadastrada." 
    } else {
        let data = new Date(date);
        return new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(data)
    }
};

export function numberFormatter(value) {
    return (value>0)?"$"+Intl.NumberFormat().format(value):"$"+value
}