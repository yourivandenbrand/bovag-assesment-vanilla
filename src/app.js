import Overview from './views/pages/Overview'
import LogoBovag from "./assets/images/logo-bovag.svg";
import LogoBovagText from "./assets/images/logo-bovag-text.svg";

async function App() {
    const template = document.createElement('template')
    template.innerHTML = `
      <div class="header">
          <div class="header__content">
              <div class="header__logo p-col-3 p-d-flex p-ai-center">
                  <img
                      class="header__logo-image"
                      src="${LogoBovag}"
                  />
                  <img
                      class="p-ml-5"
                      src="${LogoBovagText}"
                  />
              </div>
          </div>
        ${await Overview()}
    </div>
  `
    // Return a new node from template
    return template.content.cloneNode(true)
}

export default App;