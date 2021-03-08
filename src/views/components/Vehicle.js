import axios from 'axios';

let Vehicle = {
    render: async (vehicle) => {
        let template = `<div class="vehicle p-px-5 p-pb-5 p-pt-2 p-m-5">
            <div class="vehicle__title p-text-left p-my-3">
                ${vehicle.brand} ${vehicle.model}
                ${vehicle.bodyType} (${vehicle.accessories.join(", ").toString("")
            })
            </div>
            <div class="vehicle__content p-grid">
                <img src="${'http://localhost:3000/' + vehicle.images[0]}" alt="vehicle-image" class="vehicle__content-image p-col-12 p-md-3" />
                <div class="vehicle__content-info p-col-9 p-d-flex p-flex-column">
                    <div class="p-col-12 p-d-flex">
                        <div class="vehicle__content-price">
                            &#8364; ${vehicle.price} ,-
                        </div>
                    </div>

                    <div class="vehicle__specs p-col-12 p-grid p-text-left p-d-flex">
                        <div class="vehicle__specs--left p-d-flex p-md-4 p-mr-6">
                            <ul class="vehicle__specs--ul vehicle__specs--ul-left">
                                <li>Kilometrage:</li>
                                <li>Jaartal:</li>
                                <li>Transmissie:</li>
                            </ul>
                            <ul class="vehicle__specs--ul">
                                <li>${vehicle.mileage}</li>
                                <li>${vehicle.yearOfManufacture}</li>
                                <li>${vehicle.transmission}</li>
                            </ul>
                        </div>
                        <div class="vehicle__specs--right p-md-4 p-d-flex">
                            <ul class="vehicle__specs--ul vehicle__specs--ul-left">
                                <li>Merk:</li>
                                <li>Kleur:</li>
                                <li>Transmissie:</li>
                            </ul>
                            <ul class="vehicle__specs--ul">
                                <li>${vehicle.brand}</li>
                                <li>${vehicle.color}</li>
                                <li>${vehicle.bodyType}</li>
                            </ul>
                        </div>
                        <div class="vehicle__extras p-col-12 p-grid" v-if="showDetails">
                            <div class="vehicle__extras--row1 p-md-6 p-col-12">
                                <vehicleExtra v-for="extra in vehicle.accessories.slice(
                                        0,
                                        4
                                    )" :key="extra.id" :type="extra" />
                            </div>
                            <div class="vehicle__extras--row2 p-md-6 p-col-12">
                                <vehicleExtra v-for="extra in vehicle.accessories.slice(
                                        4,
                                        9
                                    )" :key="extra.id" :type="extra" />
                            </div>
                        </div>
                    </div>
                    <div class="vehicle__buttons p-grid">
                        <div class="p-col-12 p-offset-2 p-md-offset-0 p-md-4">
                            <button class="vehicle__button vehicle__button--tel">
                                <font-awesome-icon icon="phone" class="p-mr-4" />Telefoon
                            </button>
                        </div>
                        <div class="p-col-12 p-offset-2 p-md-offset-0 p-md-4">
                            <button id="${vehicle.id}__button" class="vehicle__button vehicle__button--show">
                                Bekijk meer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        return template
    },
    after_render: async (id) => {
        document.getElementById(`#${id}__button`).addEventListener("click", () => {
            console.log('Yo')
        })
    }

};

export default Vehicle;
