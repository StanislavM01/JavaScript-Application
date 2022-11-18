import authService from "../../service/authService.js"
import furnitureService from "../../service/furnitureService.js"
import { myFurnitureTemplate } from "./myFurnitureTemplate.js"


async function getView(context) {
    let userId = authService.getUserId()
    let myFurnitures = await furnitureService.getMyFurniture(userId)
    let templateResult = myFurnitureTemplate(myFurnitures)
    context.renderView(templateResult)
}

export default {
    getView
}