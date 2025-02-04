(function () {
  /**
   * You have three challenges to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */
  /**
   * Problem 1: Rendering what a user is typing on the page.
   *
   * When the user types inside the textbook labeled "Enter mystery text here",
   * it should display what the user is typing in the <div></div> tags below.
   */
  // Write your answer here
  const textBox = document.querySelector("#textbox");
  const inputMessage = document.querySelector("#inputmessage");
  textBox.addEventListener("input", (event) => {
    inputMessage.textContent = event.target.value;
  });
  /**
   * Problem 2: Display the results of the world's most pointless search engine.
   *
   * When the user types in the textbook and either clicks "Search" button or hits the enter key,
   * display the message "No results for ___ found" inside of this <p></p> below.
   * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
   * (Since there are no oceans near Albany, NY, the search engine should
   * display the "No results for ___ found" message every time.)
   *
   * The exercise must be completed with a form handler
   * and you must prevent the page from refreshing when the form is submitted.
   */
  // Write your answer here

  const searchForm = document.querySelector("#search-form");
  const results = document.querySelector("#search-results");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("#input").value;
    results.textContent = `No results for ${input} found`;
  });
  /**
   * Problem 3: Agree to the terms and conditions
   *
   * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
   * the error "You must agree to the terms and conditions" should appear
   * and the label "I Agree to the Terms and Conditions" should turn red.
   * If she has, then display "Thank you for signing up".
   *
   * To start, you will need to hide some element on the page and change the input's classes.
   */
  // Write your answer here

  const checkBox = document.querySelector("#check-box");
  const formTerms = document.querySelector("#form-terms");
  const textSuccess = document.querySelector("#text-sucess");
  const textDanger = document.querySelector("#text-danger");
  const labelAgree = document.querySelector("#label-agree");

  formTerms.addEventListener("click", (e) => {
    //e.preventDefault();
    if (checkBox.target.checked) {
      textSuccess.classList.remove(".hidden");
    } else {
      labelAgree.classList.add(".is-invalid");
      textDanger.classList.remove(".hidden");
    }
  });
})();
