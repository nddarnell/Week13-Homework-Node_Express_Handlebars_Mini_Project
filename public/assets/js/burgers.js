$(function () {
  $(".change-devoured").on("click", function(event) {
    event.preventDefault()

    var id = $(this).data("id");
    var newdevoured = $(this).data("newdouver");
    
    console.log(`newdevoured = ${newdevoured}`)
    console.log("id", id)

    var newDevouredState = {
      devoured: newdevoured ? 1:0
    };

    console.log(`newDevouredState = ${newdevoured}`)

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("changed burger to", newDevouredState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: $("[name=eaten]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});

