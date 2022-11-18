import { html } from "../../node_modules/lit-html/lit-html.js"




export let editTemplate = (form) => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${form.submitHandler}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control ${form.invalidField.make ? 'is-invalid' : 'is-valid'}" id="new-make" type="text" name="make" .value=${form.value.make}>
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control ${form.invalidField.model ? 'is-invalid' : 'is-valid'}" id="new-model" type="text" name="model" .value=${form.value.model}>
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control ${form.invalidField.year ? 'is-invalid' : 'is-valid'}" id="new-year" type="number" name="year" .value=${form.value.year}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control ${form.invalidField.description ? 'is-invalid' : 'is-valid'}" id="new-description" type="text" name="description" .value=${form.value.description}>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control ${form.invalidField.price ? 'is-invalid' : 'is-valid'}" id="new-price" type="number" name="price" .value=${form.value.price}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control ${form.invalidField.img ? 'is-invalid' : 'is-valid'}" id="new-image" type="text" name="img" .value=${form.value.img}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" value="Wood">
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>`