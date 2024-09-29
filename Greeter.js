(function (global) {
  /**
   * Greeter Constructor function
   * Creates a new Greeter object with first name, last name, and language
   * Default values are manually checked and set if no arguments are passed.
   * @param {string} firstName - The first name of the person.
   * @param {string} lastName - The last name of the person.
   * @param {string} language - The language for the greeting ('en' or 'ar').
   */
  var Greeter = function (firstName, lastName, language) {
    // Manually setting default values for parameters if not provided
    firstName = firstName || "";
    lastName = lastName || "";
    language = language || "en";

    return new Greeter.init(firstName, lastName, language);
  };

  // Supported languages for greetings
  var supportedLanguages = ["en", "ar"];

  // Informal greetings in different languages
  var greetings = {
    en: "Hello",
    ar: "هلا",
  };

  // Formal greetings in different languages
  var formalGreetings = {
    en: "Welcome",
    ar: "مرحبا",
  };

  /**
   * Methods that will be available on all Greeter instances
   * via the prototype
   */
  Greeter.prototype = {
    /**
     * Logs the first name of the person.
     * @returns {object} The current Greeter instance for chaining.
     */
    logFirstName: function () {
      console.log(this.firstName);
      return this;
    },

    /**
     * Logs the last name of the person.
     * @returns {object} The current Greeter instance for chaining.
     */
    logLastName: function () {
      console.log(this.lastName);
      return this;
    },

    /**
     * Logs the full name of the person (first name + last name).
     * @returns {object} The current Greeter instance for chaining.
     */
    logFullName: function () {
      console.log(this.firstName + " " + this.lastName);
      return this;
    },

    /**
     * Returns the full name of the person as a string.
     * @returns {string} The full name.
     */
    getFullName: function () {
      return this.firstName + " " + this.lastName;
    },

    /**
     * Validates if the current language is supported.
     * Throws an error if not supported.
     */
    validateLanguage: function () {
      if (!supportedLanguages.includes(this.language)) {
        throw new Error("Unsupported Language: " + this.language);
      }
    },

    /**
     * Sets a new language for the Greeter instance.
     * @param {string} newLanguage - The new language to set.
     * @returns {object} The current Greeter instance for chaining.
     */
    setLanguage: function (newLanguage) {
      this.language = newLanguage;
      this.validateLanguage();
      return this;
    },

    /**
     * Logs a greeting message (formal or informal) to the console.
     * @param {boolean} isFormal - Whether the greeting should be formal or informal.
     * @returns {object} The current Greeter instance for chaining.
     */
    logGreetings: function (isFormal) {
      var message = isFormal
        ? formalGreetings[this.language] + " " + this.getFullName()
        : greetings[this.language] + " " + this.firstName;

      console.log(message);
      return this;
    },
  };

  /**
   * Constructor for initializing a new Greeter instance.
   * This is the actual function that creates the object with the provided data.
   * @param {string} firstName - The first name of the person.
   * @param {string} lastName - The last name of the person.
   * @param {string} language - The language for greetings.
   */
  Greeter.init = function (firstName, lastName, language) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.language = language;

    // Validate the language upon creation
    this.validateLanguage();
  };

  // Ensure the init function uses the Greeter prototype
  Greeter.init.prototype = Greeter.prototype;

  // Attach the Greeter object to the global object
  if (!global.Greeter) {
    global.Greeter = Greeter;
  }

  // Short alias G$
  if (!global.G$) {
    global.G$ = Greeter;
  }
})(window);
