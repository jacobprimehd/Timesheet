
  //=======================================================
  //from class sign-up form:

  // NOTE: In order to modify cookies, we must access them over a secure connection e.i = https, localhost:.
    // Needed to create this function to readCookies. Essentially it splits up the cookie list
    // See the working app at http://cookie-example-rcb.herokuapp.com/ or by opening with Firefox or Safari
    function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length);
        }
      }
      return null;
    }

    // Capture Button Click
    $("#add-user").on("click", function(event) {
      event.preventDefault();

      // Capture User Inputs and store into variables
      var name = $("#name-input").val().trim();
      var email = $("#email-input").val().trim();
      var age = $("#age-input").val().trim();
      var comment = $("#comment-input").val().trim();

      // Console log each of the user inputs to confirm we are receiving them
      console.log(name);
      console.log(email);
      console.log(age);
      console.log(comment);

      // Output all of the new information into the relevant sections
      $("#name-display").text(name);
      $("#email-display").text(email);
      $("#age-display").text(age);
      $("#comment-display").text(comment);

      // Clear the previous cookie by setting it it equal to nothing and its expiration date to a past time
      document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

      // Store all of the parameters as part of the cookie string
      document.cookie = "name=" + name;
      document.cookie = "email=" + email;
      document.cookie = "age=" + age;
      document.cookie = "comment=" + comment;

      // Print all the cookies
      console.log(document.cookie);

      // Recover the parameters by passing the cookie parameters of interest,
      // through a function that breaks the document.cookie
      var cookieName = readCookie("name");
      var cookieEmail = readCookie("email");
      var cookieAge = readCookie("age");
      var cookieComment = readCookie("comment");

      // Log all of the cookies to test
      console.log(cookieName);
      console.log(cookieEmail);
      console.log(cookieAge);
      console.log(cookieComment);
    });

    // By default display the content from the cookieString
    $("#name-display").text(readCookie("name"));
    $("#email-display").text(readCookie("email"));
    $("#age-display").text(readCookie("age"));
    $("#comment-display").text(readCookie("comment"));

{/* //======================================================= */}