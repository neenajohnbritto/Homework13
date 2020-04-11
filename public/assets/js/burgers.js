// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devouvered").on("click", function(event) {
    var id = $(this).data("id");
    var newDevouvered = $(this).data("newdevouver");
    console.log("newDevouvered", newDevouvered);
    var newDevouveredState = {
      devouvered: newDevouvered
    };
    console.log("changed devouvered to", newDevouvered);
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouveredState
    }).then(
      function() {
        console.log("changed devouvered to", newDevouvered);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim()
      // devouvered: $("[name=devouvered]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $(".delete-burger").on("click", function(event) {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/burgers/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("deleted burger", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});
