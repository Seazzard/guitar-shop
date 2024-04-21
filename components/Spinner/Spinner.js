class Spinner {
  handleClear() {
    ROOT_SPINNER.innerHTML = '';
  }
  render() {
    const html = `
    <div class="spinner-container">
        <img class="spinner__ing" src="components/Spinner/img/Dual Ring.svg"/>
    </div>
    `;

    ROOT_SPINNER.innerHTML = html;
  }
}

const spinnerPage = new Spinner();
