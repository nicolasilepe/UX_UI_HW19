$(document).ready(function() {
    // Hover event for navigation buttons
    $(".nav-button").hover(
        function() {
            // Mouse enters the button, change background color
            $(this).css("background-color", "#ddd");
        }, 
        function() {
            // Mouse leaves the button
            $(this).css("background-color", "#ccc");
        }
    );

    // Click event for project buttons
    $(".workDetails button").click(function() {
        alert("You clicked to view the project!");
    });
});
