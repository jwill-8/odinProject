import homeImage from "./img/sports-bar.png";
export function toHome(target) {
  target.innerHTML = `
    <div
          class="background-container"
          style="
            background-image: url('${homeImage}');
          "
        >
          <div class="overlay">
            <div class="text-box">
              <h2>DB&G</h2>
            </div>
            <div class="text-box-description">
              <p>
                This is a mock site I am building to learn and get some practice
                with webpack and bundlers in general. It's a useful excercise.
                The irony is my dad owned a resturaunt for years and only now
                can I build him a website.
              </p>
            </div>
          </div>
        </div>
        `;
}
