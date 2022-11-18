export function renderTemplate(templateString, data) {
   
    let reg = /{{(\w+)}}/g

   return templateString.replace(reg, function (match, propName) {
        return data[propName]
    })
}