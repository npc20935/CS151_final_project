$(document).ready(function() {
    $("input").click(function() {
        let numberOfListItem = $("#choices li").length;
        let randomChlidNumber = Math.floor(Math.random() * numberOfListItem);
        $("#random-result").text($("#choices li").eq(randomChlidNumber).text());
        $("#random-pic").attr("src", pictures[randomChlidNumber]);
    });
});