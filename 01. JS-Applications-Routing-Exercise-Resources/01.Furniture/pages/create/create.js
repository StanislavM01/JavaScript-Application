import furnitureService from "../../service/furnitureService.js";
import { createTemplate } from "./createTemplate.js";

let form = undefined

async function submitHandler(context, e) {
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
        let templateResult = createTemplate(form)
        return context.renderView(templateResult)
    }
    let material = formData.get('material')
    let newFurniture = {
        make,
        model,
        year,
        description,
        price,
        img,
        material
    }
    let createResult = await furnitureService.create(newFurniture)
    context.page.redirect('/dashboard')
}



async function getView(context) {
    let boundSubmitHandler = submitHandler.bind(null, context)
    form = {
        submitHandler: boundSubmitHandler,
        invalidField: {
            make: true,
            model: true,
            year: true,
            description: true,
            price: true,
            img: true,
        }
    }
    let templateResult = createTemplate(form)
    context.renderView(templateResult)
}

export default {
    getView
}