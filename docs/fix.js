console.log('Running fix');
const fixUrl = function() {
    $("nav a").each(function() {
        const $this = $(this);
        const thisUrl = $this.attr("href");
        var urlPart = thisUrl.split("#");
        if (urlPart.length < 3) return;

        var newUrlPart = [urlPart[0], urlPart[2]];
        $this.attr("href", newUrlPart.join("#"))
    })
}
$(document).ready(function() {
    fixUrl();
});