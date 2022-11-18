import furnitureService from "../../service/furnitureService.js";
import { editTemplate } from "./editTemplate.js";

let form = undefined

async function submitHandler(context, id, e) {
    e.preventDefault()
    let formData = new FormData(e.target)
    form.invalidField = {}
    let make = formData.get('make');
    if (make.length < 4) {
        form.invalidField.make = true;
    }
    let model = formData.get('model');
    if (model.length < 4) {
        form.invalidField.model = true;
    }
    let year = Number(formData.get('year'));
    if (!(year >= 1950 && year <= 2050)) {
        form.invalidField.year = true;
    }
    let description = formData.get('description');
    if (description.length <= 10) {
        form.invalidField.description = true;
    }
    let price = Number(formData.get('price'));
    if (!(price > 0)) {
        form.invalidField.price = true;
    }
    let img = formData.get(`img`);
    if (img.trim() == "") {
        form.invalidField.img = true;
    }

    if (Object.keys(form.invalidField).length > 0) {
        let templateResult = editTemplate(form)
        return context.renderView(templateResult)
    }
    let material = formData.get('material')
    let furniture = {
        make,
        model,
        year,
        description,
        price,
        img,
        material
    }
    let updateResult = await furnitureService.update(furniture, id)
    context.page.redirect('/dashboard')
}



async function getView(context) {
    let id = context.params.id
    let furniture = await furnitureService.getOne(id)

    let boundSubmitHandler = submitHandler.bind(null, context, id)

    form = {
        submitHandler: boundSubmitHandler,
        value: {
            make: furniture.make,
            model: furniture.model,
            year: furniture.year,
            description: furniture.description,
            price: furniture.price,
            img: furniture.img,
        },
        invalidField: {
        }
    }
    let templateResult = editTemplate(form)
    context.renderView(templateResult)
}

export default {
    getView
}