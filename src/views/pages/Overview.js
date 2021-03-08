import axios from 'axios';

import Vehicle from '../components/Vehicle';

async function Overview() {
    const { data } = await axios.get("http://localhost:3000/vehicles");
    const vehiclesList = data;

    const template = `
    <div>
        <div class="yellow-wrapper">
            <div class="yellow-wrapper__content p-text-left">
                <p class="yellow-wrapper__title">
                    ${vehiclesList.length} auto’s hebben we voor je gevonden.
                </p>
                <p class="yellow-wrapper__subtitle p-mt-2">
                    Alle occasions inclusief BOVAG Garantie en Omruilgarantie
                </p>
            </div>
        </div>
        <div class="overview">
            <div id="overview__list" class="overview__list">
               ${await (await Promise.all(vehiclesList.map(async vehicle => await Vehicle.render(vehicle)))).join("")}
            </div>
        </div >
    </div >
    `;

    return template;
}

export default Overview;
