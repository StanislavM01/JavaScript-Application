import authService from "../../service/authService.js";
import furnitureService from "../../service/furnitureService.js"
import { detailsTemplate } from "./detailsTemplate.js"

async function deleteHandler(context, id, e) {
    let confirmation = confirm('are you sure to delete this')
    if (confirmation) {
        let deleteResult = await furnitureService.deleteting(id);
        context.page.redirect(`/dashboard`);
    }

}

async function getView(context) {
    let id = context.params.id;
    console.log(id)
    let boundDeleteHandler = deleteHandler.bind(null, context, id);
    let furniture = await furnitureService.getOne(id);
    let isOwner = authService.getUserId() === furniture._ownerId

    let templateResult = detailsTemplate(furniture, boundDeleteHandler, isOwner);
    context.renderView(templateResult);

}

export default {
    getView
}